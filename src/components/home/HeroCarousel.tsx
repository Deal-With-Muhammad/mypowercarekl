"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { PiArrowRightBold } from "react-icons/pi";

export type HeroSlide = {
  image: string;
  alt: string;
  label: string;
  price: string;
  href: string;
};

const INTERVAL = 6000;

/**
 * Full-bleed crossfading photo carousel that fills exactly one screen below
 * the header (6rem + 1px border on mobile, 72px + 1px on desktop) and above
 * the mobile action bar (3.5rem), so the whole hero is visible
 * without scrolling. Only the first photo is in the initial HTML; the rest
 * mount after the page has loaded so they never compete with it for
 * bandwidth. Swipe on touch screens; hover pauses on desktop.
 */
export function HeroCarousel({
  slides,
  label,
  showLabel,
  children,
}: {
  slides: HeroSlide[];
  label: string;
  /** Accessible name for each dot, e.g. (slide) => `Show ${slide}`. */
  showLabel: string[];
  children: React.ReactNode;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [ready, setReady] = useState(false);
  const touchX = useRef<number | null>(null);

  const go = useCallback((i: number) => setIndex((i + slides.length) % slides.length), [slides.length]);

  useEffect(() => {
    const start = () => setReady(true);
    if (document.readyState === "complete") {
      const t = setTimeout(start, 1200);
      return () => clearTimeout(t);
    }
    window.addEventListener("load", start, { once: true });
    return () => window.removeEventListener("load", start);
  }, []);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!ready || paused || reduce) return;
    const t = setTimeout(() => go(index + 1), INTERVAL);
    return () => clearTimeout(t);
  }, [index, paused, ready, go]);

  const current = slides[index];
  const animating = ready && !paused;

  return (
    <section
      className="relative isolate flex h-[calc(100svh-6rem-1px-3.5rem-env(safe-area-inset-bottom))] min-h-[30rem] flex-col overflow-hidden bg-navy lg:h-[calc(100svh-73px)] lg:max-h-[56rem] lg:min-h-[34rem]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        touchX.current = null;
        if (Math.abs(dx) < 50) return;
        setReady(true);
        go(index + (dx < 0 ? 1 : -1));
      }}
      aria-roledescription="carousel"
      aria-label={label}
    >
      {slides.map((s, i) =>
        i === 0 || ready ? (
          <div
            key={s.image}
            className={`hero-slide absolute inset-0 -z-20 transition-opacity duration-1000 ease-in-out ${
              i === index ? "is-active opacity-100" : "opacity-0"
            }`}
            aria-hidden={i !== index}
          >
            <Image
              src={s.image}
              alt={s.alt}
              fill
              sizes="100vw"
              fetchPriority={i === 0 ? "high" : "low"}
              loading={i === 0 ? "eager" : "lazy"}
              className="object-cover object-[62%_center] lg:object-[70%_center]"
            />
          </div>
        ) : null,
      )}
      {/* Scrim keeps text readable; lighter on the right on desktop so the photo shows. */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(11,27,51,0.72)_0%,rgba(11,27,51,0.82)_100%)] lg:bg-[linear-gradient(90deg,rgba(11,27,51,0.94)_0%,rgba(11,27,51,0.8)_42%,rgba(11,27,51,0.2)_100%)]" />

      <div className="flex flex-1 flex-col justify-center">{children}</div>

      <div className="relative container-page pb-5 lg:pb-7">
        {/* Left-aligned so the desktop floating WhatsApp button never covers the controls. */}
        <div className="flex items-center justify-between gap-4 border-t border-white/15 pt-4 lg:justify-start lg:gap-8">
          <Link
            href={current.href}
            className="group flex min-w-0 items-center gap-2.5 text-[0.8125rem] text-white/90 hover:text-white sm:gap-3 sm:text-sm"
            aria-live="polite"
            data-cta="hero-slide"
          >
            <span className="shrink-0 rounded-sm bg-white/15 px-2 py-0.5 text-xs font-semibold text-white">
              {current.price}
            </span>
            <span className="truncate font-medium">{current.label}</span>
            <PiArrowRightBold
              className="hidden size-3.5 shrink-0 opacity-60 transition-transform duration-200 group-hover:translate-x-0.5 sm:block"
              aria-hidden
            />
          </Link>
          <div className="flex shrink-0 gap-1 sm:gap-1.5">
            {slides.map((s, i) => (
              <button
                key={s.image}
                type="button"
                onClick={() => {
                  setReady(true);
                  go(i);
                }}
                aria-label={showLabel[i]}
                aria-current={i === index}
                className="relative h-6 w-4 before:absolute sm:w-7 before:inset-x-0 before:top-1/2 before:h-1 before:-translate-y-1/2 before:rounded-sm before:bg-white/25"
              >
                <span
                  key={`${index}-${animating}`}
                  className={`absolute inset-x-0 top-1/2 h-1 -translate-y-1/2 origin-left rounded-sm bg-white ${
                    i < index || (i === index && !animating) ? "scale-x-100" : "scale-x-0"
                  } ${i === index && animating ? "animate-[hero-progress_6s_linear_forwards]" : ""}`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
