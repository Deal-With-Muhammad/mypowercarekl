import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PiClockDuotone, PiMapPinDuotone } from "react-icons/pi";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { CtaBand } from "@/components/sections/CtaBand";
import { getAreas, shortAreaName } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";
import { isLocale, localePath } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import type { StateKey } from "@/lib/types";

const states: StateKey[] = ["Kuala Lumpur", "Selangor", "Putrajaya"];

export async function generateMetadata(props: PageProps<"/[lang]/areas">): Promise<Metadata> {
  const { lang } = await props.params;
  if (!isLocale(lang)) return {};
  const t = getDictionary(lang);
  return pageMetadata({ locale: lang, path: "/areas", title: t.areas.metaTitle, description: t.areas.metaDescription });
}

export default async function AreasPage(props: PageProps<"/[lang]/areas">) {
  const { lang } = await props.params;
  if (!isLocale(lang)) notFound();
  const t = getDictionary(lang);
  const areas = getAreas(lang);

  return (
    <>
      <section className="border-b border-line bg-canvas">
        <div className="container-page py-10 lg:py-14">
          <Breadcrumbs items={[{ name: t.nav.areas, href: "/areas" }]} />
          <h1 className="mt-6 max-w-3xl text-3xl leading-tight font-extrabold sm:text-4xl lg:text-[2.75rem]">
            {t.areas.h1}
          </h1>
          <p className="mt-4 max-w-2xl text-[1.0625rem] leading-relaxed text-slate-text">{t.areas.intro(areas.length)}</p>
        </div>
      </section>

      <div className="container-page space-y-14 py-14">
        {states.map((state) => {
          const list = areas.filter((a) => a.state === state);
          if (!list.length) return null;
          return (
            <section key={state}>
              <h2 className="text-2xl font-bold sm:text-3xl">{t.states[state]}</h2>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {list.map((a) => (
                  <li key={a.slug}>
                    <Link
                      href={localePath(lang, `/areas/${a.slug}`)}
                      className="group flex h-full flex-col rounded-lg border border-line bg-white p-5 hover:border-brand/40 hover:shadow-[0_14px_34px_-20px_rgba(29,91,214,0.45)]"
                    >
                      <span className="flex items-center gap-2 font-display text-lg font-bold text-ink group-hover:text-brand">
                        <PiMapPinDuotone className="size-5 text-brand" aria-hidden />
                        {t.area.linkName(shortAreaName(a.name))}
                      </span>
                      <span className="mt-2 line-clamp-2 text-sm text-slate-text">{a.neighbourhoods.join(" · ")}</span>
                      <span className="mt-3 flex items-center gap-1.5 text-xs font-medium text-ink">
                        <PiClockDuotone className="size-4 text-brand" aria-hidden />{" "}
                        {t.areas.arrival(t.eta(a.eta[0], a.eta[1]))}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
      <CtaBand title={t.ctaBand.areasTitle} text={t.ctaBand.areasText} />
    </>
  );
}
