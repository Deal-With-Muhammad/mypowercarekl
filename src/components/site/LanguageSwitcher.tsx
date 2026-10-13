"use client";

import { useEffect, useRef, useState } from "react";
import { PiCaretDownBold, PiCheckBold, PiGlobeSimpleBold } from "react-icons/pi";
import { localeInfo, localePath, locales, stripLocale, type Locale } from "@/i18n/config";

/**
 * Links to the same page in the other languages. Pages are prerendered and
 * English URLs are rewritten by the proxy, so the current path is read from
 * the browser after mount; until then the links point at each home page.
 */
function useSamePagePath() {
  const [path, setPath] = useState("/");
  useEffect(() => {
    // Reading the browser URL once after hydration is the point of this effect.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPath(stripLocale(window.location.pathname) + window.location.search);
  }, []);
  return path;
}

/** Compact dropdown for the desktop header. */
export function LanguageMenu({ current, label }: { current: Locale; label: string }) {
  const [open, setOpen] = useState(false);
  const path = useSamePagePath();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="true"
        aria-label={label}
        className="flex h-10 items-center gap-1.5 rounded-md px-2.5 text-sm font-semibold text-ink/80 transition-colors hover:bg-canvas hover:text-ink"
      >
        <PiGlobeSimpleBold className="size-4 text-brand" aria-hidden />
        {localeInfo[current].short}
        <PiCaretDownBold
          className={`size-3 opacity-50 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>
      <ul
        className={`absolute top-full right-0 z-50 mt-2 w-44 origin-top-right rounded-lg border border-line bg-white p-1.5 shadow-[0_16px_40px_-16px_rgba(11,27,51,0.28)] transition-[opacity,transform] duration-150 ease-(--ease-out-strong) ${
          open ? "visible scale-100 opacity-100" : "invisible scale-95 opacity-0"
        }`}
      >
        {locales.map((l) => (
          <li key={l}>
            <a
              href={localePath(l, path)}
              hrefLang={localeInfo[l].htmlLang}
              lang={localeInfo[l].htmlLang}
              aria-current={l === current ? "true" : undefined}
              className="flex items-center justify-between rounded-md px-3 py-2 text-sm text-ink hover:bg-canvas"
            >
              {localeInfo[l].label}
              {l === current && <PiCheckBold className="size-4 text-brand" aria-hidden />}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Three equal buttons, for the mobile menu and the footer. */
export function LanguageButtons({
  current,
  label,
  tone = "light",
}: {
  current: Locale;
  label: string;
  tone?: "light" | "dark";
}) {
  const path = useSamePagePath();
  return (
    <nav aria-label={label} className="grid grid-cols-3 gap-1.5">
      {locales.map((l) => {
        const active = l === current;
        const style =
          tone === "dark"
            ? active
              ? "bg-white text-navy"
              : "bg-white/10 text-white hover:bg-white/20"
            : active
              ? "border-brand bg-brand-50 text-brand"
              : "border-line text-ink hover:border-brand/40";
        return (
          <a
            key={l}
            href={localePath(l, path)}
            hrefLang={localeInfo[l].htmlLang}
            lang={localeInfo[l].htmlLang}
            aria-current={active ? "true" : undefined}
            className={`rounded-md border px-2 py-2 text-center text-sm font-semibold transition-colors ${
              tone === "dark" ? "border-transparent" : ""
            } ${style}`}
          >
            {localeInfo[l].label}
          </a>
        );
      })}
    </nav>
  );
}
