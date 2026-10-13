import Image from "next/image";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";

// No contact buttons here: phone and WhatsApp sit in the sticky header, and
// each page closes with one call to action.
export function PageHero({
  crumbs,
  eyebrow,
  title,
  intro,
  image,
  imageAlt = "",
  facts,
  children,
}: {
  crumbs: Crumb[];
  eyebrow?: string;
  title: string;
  intro: string;
  image?: string;
  imageAlt?: string;
  facts?: { label: string; value: string }[];
  children?: React.ReactNode;
}) {
  return (
    <section className="border-b border-line bg-canvas">
      <div className="container-page grid items-center gap-10 py-10 lg:grid-cols-[1.2fr_1fr] lg:py-14">
        <div>
          <Breadcrumbs items={crumbs} />
          {eyebrow && <p className="mt-6 text-sm font-semibold tracking-[0.12em] text-brand uppercase">{eyebrow}</p>}
          <h1 className={`${eyebrow ? "mt-2" : "mt-6"} text-3xl leading-tight font-extrabold sm:text-4xl lg:text-[2.75rem]`}>
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-[1.0625rem] leading-relaxed text-slate-text">{intro}</p>
          {facts && (
            <dl className="mt-8 grid grid-cols-3 gap-3">
              {facts.map((f) => (
                <div key={f.label} className="rounded-md border border-line bg-white px-3 py-3">
                  <dt className="text-xs text-slate-text">{f.label}</dt>
                  <dd className="mt-0.5 font-display text-base font-bold text-ink sm:text-lg">{f.value}</dd>
                </div>
              ))}
            </dl>
          )}
          {children}
        </div>
        {image && (
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src={image}
              alt={imageAlt}
              fill
              preload
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        )}
      </div>
    </section>
  );
}
