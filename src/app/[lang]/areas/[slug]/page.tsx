import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PiBuildingsDuotone, PiMapPinDuotone, PiNavigationArrowDuotone, PiWarningCircleDuotone } from "react-icons/pi";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceTile } from "@/components/sections/ServiceCard";
import { PriceTable } from "@/components/sections/PriceTable";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { QuoteSidebar } from "@/components/sections/QuoteSidebar";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { areaData } from "@/data/areas";
import { formatRM, visitFee } from "@/data/pricing";
import { getArea, getAreas, getServices, getServicesBySlug, priceRows, shortAreaName } from "@/lib/content";
import { areaSchema, faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";
import { isLocale, localePath } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import type { Faq } from "@/lib/types";

const heroImages = [
  "/images/svc-db-box.jpg",
  "/images/svc-downlight.jpg",
  "/images/svc-rewiring.jpg",
  "/images/svc-tripping.jpg",
  "/images/about-team.jpg",
  "/images/svc-power-point.jpg",
  "/images/svc-inspection.jpg",
  "/images/svc-water-heater.jpg",
];

// Each area page features a different slice of these, so the 44 pages don't
// repeat the same services and prices word for word.
const servicePool = [
  "power-tripping-repair",
  "house-rewiring",
  "db-box-replacement",
  "lighting-installation",
  "water-heater-installation",
  "short-circuit-sparking-repair",
  "socket-switch-installation",
  "rccb-elcb-replacement",
  "light-repair",
  "new-wiring-power-points",
  "aircond-power-point",
  "water-heater-repair",
  "ceiling-fan-installation",
  "ev-charger-installation",
  "electrical-safety-inspection",
  "power-failure-repair",
];

const pricePool = [
  "tripping-fix",
  "power-point-surface",
  "db-single",
  "downlight-new",
  "heater-new-point",
  "rccb-replace",
  "short-circuit-repair",
  "light-repair",
  "aircond-point",
  "socket-replace",
  "inspection-landed",
  "fan-install",
];

function rotate<T>(list: T[], start: number, count: number) {
  return Array.from({ length: count }, (_, i) => list[(start + i) % list.length]);
}

export function generateStaticParams() {
  return areaData.map((a) => ({ slug: a.slug }));
}

export const dynamicParams = false;

export async function generateMetadata(props: PageProps<"/[lang]/areas/[slug]">): Promise<Metadata> {
  const { lang, slug } = await props.params;
  if (!isLocale(lang)) return {};
  const area = getArea(lang, slug);
  if (!area) return {};
  const t = getDictionary(lang);
  const name = shortAreaName(area.name);
  // "KL" is how English and Malay searchers write it; Chinese uses 吉隆坡.
  const state = area.state === "Kuala Lumpur" && lang !== "zh" ? "KL" : t.states[area.state];
  return pageMetadata({
    locale: lang,
    path: `/areas/${area.slug}`,
    title: t.area.metaTitle(name, state),
    description: t.area.metaDescription(name, formatRM(visitFee), site.warrantyMonths),
  });
}

export default async function AreaPage(props: PageProps<"/[lang]/areas/[slug]">) {
  const { lang, slug } = await props.params;
  if (!isLocale(lang)) notFound();
  const index = areaData.findIndex((a) => a.slug === slug);
  const area = getArea(lang, slug);
  if (!area) notFound();

  const t = getDictionary(lang);
  const href = (p: string) => localePath(lang, p);
  const name = shortAreaName(area.name);
  const allAreas = getAreas(lang);
  const nearby = area.nearby.map((n) => allAreas.find((a) => a.slug === n)).filter((a) => a !== undefined);
  const areaServices = getServicesBySlug(lang, rotate(servicePool, index * 3, 6));
  const rows = priceRows(lang, ["visit-fee", ...rotate(pricePool, index * 2, 5)]);
  const examples = rows
    .slice(1, 4)
    .map((r) => `${r.item} ${r.to ? `${formatRM(r.from)}–${formatRM(r.to)}` : t.price.from(formatRM(r.from))}`)
    .join("; ");
  const eta = t.eta(area.eta[0], area.eta[1]);
  const message = t.whatsapp.area(name);
  const image = heroImages[index % heroImages.length];

  const faqs: Faq[] = [
    ...area.faqs,
    t.area.faqCost(name, formatRM(visitFee), examples),
    t.area.faqSameDay(name),
    t.area.faqEta(name, eta),
  ];

  return (
    <>
      <JsonLd data={areaSchema(lang, area, image)} />
      <JsonLd data={faqSchema(faqs)} />

      <PageHero
        crumbs={[
          { name: t.nav.areas, href: "/areas" },
          { name, href: `/areas/${area.slug}` },
        ]}
        eyebrow={t.area.eyebrow(t.states[area.state])}
        title={t.area.h1(name)}
        intro={area.intro}
        image={image}
        imageAlt={t.area.imageAlt(name)}
        facts={[
          { label: t.area.arrival, value: t.etaShort(area.eta[0], area.eta[1]) },
          { label: t.area.visitFrom, value: formatRM(visitFee) },
          { label: t.service.warranty, value: t.service.months(site.warrantyMonths) },
        ]}
      />

      <div className="container-page grid grid-cols-1 gap-12 py-14 lg:grid-cols-[minmax(0,1fr)_340px]">
        <div className="min-w-0 space-y-14">
          <section aria-labelledby="local">
            <h2 id="local" className="text-2xl font-bold sm:text-3xl">
              {t.area.localTitle(name)}
            </h2>
            <p className="mt-3 flex items-start gap-2.5 text-[1.0625rem] leading-relaxed text-slate-text">
              <PiBuildingsDuotone className="mt-1 size-5 shrink-0 text-brand" aria-hidden />
              {area.housing}
            </p>
            <ul className="mt-5 space-y-3">
              {area.commonIssues.map((issue) => (
                <li
                  key={issue}
                  className="flex items-start gap-3 rounded-md border border-line bg-white p-4 text-[0.98rem] text-ink"
                >
                  <PiWarningCircleDuotone className="mt-0.5 size-5.5 shrink-0 text-brand" aria-hidden />
                  {issue}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="coverage">
            <h2 id="coverage" className="text-2xl font-bold sm:text-3xl">
              {t.area.coverageTitle(name)}
            </h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {area.neighbourhoods.map((n) => (
                <li key={n} className="rounded-md border border-line bg-white px-3 py-1.5 text-sm font-medium text-ink">
                  {n}
                </li>
              ))}
            </ul>
            <p className="mt-4 flex items-start gap-2.5 text-[0.98rem] text-slate-text">
              <PiNavigationArrowDuotone className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden />
              {t.area.landmarks(area.landmarks.join(", "))}
            </p>
          </section>

          <section aria-labelledby="services">
            <h2 id="services" className="text-2xl font-bold sm:text-3xl">
              {t.area.servicesTitle(name)}
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {areaServices.map((s) => (
                <ServiceTile key={s.slug} service={s} />
              ))}
            </div>
            <Link href={href("/services")} className="mt-5 inline-block font-semibold text-brand hover:underline">
              {t.area.seeAll(getServices(lang).length)} →
            </Link>
          </section>

          <section aria-labelledby="prices">
            <h2 id="prices" className="text-2xl font-bold sm:text-3xl">
              {t.area.pricesTitle(name)}
            </h2>
            <p className="mt-3 text-[1.0625rem] leading-relaxed text-slate-text">{t.area.pricesText(name)}</p>
            <div className="mt-5">
              <PriceTable rows={rows} caption={t.area.pricesTitle(name)} />
            </div>
            <Link href={href("/pricing")} className="mt-4 inline-block font-semibold text-brand hover:underline">
              {t.home.fullPriceList} →
            </Link>
          </section>

          <section aria-labelledby="faq">
            <h2 id="faq" className="text-2xl font-bold sm:text-3xl">
              {t.area.faqTitle(name)}
            </h2>
            <div className="mt-5">
              <FaqAccordion faqs={faqs} />
            </div>
          </section>
        </div>

        <aside className="space-y-6 lg:sticky lg:top-32 lg:self-start">
          <QuoteSidebar heading={t.area.bookTitle(name)} message={message} />
          {nearby.length > 0 && (
            <div className="rounded-lg border border-line bg-white p-6">
              <p className="text-lg font-bold text-ink">{t.area.nearby}</p>
              <ul className="mt-3 space-y-1">
                {nearby.map((a) => (
                  <li key={a.slug}>
                    <Link
                      href={href(`/areas/${a.slug}`)}
                      className="flex items-center gap-2 rounded-md px-2 py-1.5 text-[0.95rem] text-ink hover:bg-brand-50 hover:text-brand"
                    >
                      <PiMapPinDuotone className="size-4.5 text-brand" aria-hidden />
                      {t.area.linkName(shortAreaName(a.name))}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>

      <CtaBand title={t.ctaBand.areaTitle(name)} message={message} />
    </>
  );
}
