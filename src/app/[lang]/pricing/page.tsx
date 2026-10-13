import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PiCheckCircleFill, PiInfoDuotone } from "react-icons/pi";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { PriceTable } from "@/components/sections/PriceTable";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { QuoteSidebar } from "@/components/sections/QuoteSidebar";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { formatRM, pricingUpdated, visitFee } from "@/data/pricing";
import { getFaqGroups, getPricingNotes, getRateCard } from "@/lib/content";
import { faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { isLocale, localeInfo } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export async function generateMetadata(props: PageProps<"/[lang]/pricing">): Promise<Metadata> {
  const { lang } = await props.params;
  if (!isLocale(lang)) return {};
  const t = getDictionary(lang);
  return pageMetadata({
    locale: lang,
    path: "/pricing",
    title: t.pricing.metaTitle,
    description: t.pricing.metaDescription,
  });
}

export default async function PricingPage(props: PageProps<"/[lang]/pricing">) {
  const { lang } = await props.params;
  if (!isLocale(lang)) notFound();
  const t = getDictionary(lang);
  const rateCard = getRateCard(lang);
  const priceFaqs = getFaqGroups(lang).find((g) => g.id === "prices")?.faqs ?? [];
  const updated = new Date(pricingUpdated).toLocaleDateString(localeInfo[lang].intl, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <JsonLd data={faqSchema(priceFaqs)} />
      <section className="border-b border-line bg-canvas">
        <div className="container-page py-10 lg:py-14">
          <Breadcrumbs items={[{ name: t.nav.pricing, href: "/pricing" }]} />
          <h1 className="mt-6 max-w-3xl text-3xl leading-tight font-extrabold sm:text-4xl lg:text-[2.75rem]">
            {t.pricing.h1}
          </h1>
          <p className="mt-4 max-w-2xl text-[1.0625rem] leading-relaxed text-slate-text">
            {t.pricing.intro(formatRM(visitFee))}
          </p>
          <p className="mt-3 text-sm text-slate-text">{t.pricing.updated(updated)}</p>
          <nav aria-label={t.pricing.categoriesLabel} className="mt-6 flex flex-wrap gap-2">
            {rateCard.map((g) => (
              <a
                key={g.id}
                href={`#${g.id}`}
                className="rounded-md border border-line bg-white px-3 py-1.5 text-sm font-medium text-ink hover:border-brand/40 hover:text-brand"
              >
                {g.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <div className="container-page grid grid-cols-1 gap-12 py-14 lg:grid-cols-[minmax(0,1fr)_340px]">
        <div className="min-w-0 space-y-12">
          {rateCard.map((g) => (
            <section key={g.id} id={g.id} className="scroll-mt-32">
              <h2 className="text-2xl font-bold sm:text-3xl">{g.title}</h2>
              <p className="mt-2 mb-5 text-slate-text">{g.description}</p>
              <PriceTable rows={g.rows} caption={g.title} />
            </section>
          ))}

          <section className="rounded-lg border border-line bg-canvas p-6">
            <h2 className="flex items-center gap-2 text-xl font-bold">
              <PiInfoDuotone className="size-6 text-brand" aria-hidden /> {t.pricing.includesTitle}
            </h2>
            <ul className="mt-4 space-y-2.5 text-[0.98rem] text-ink">
              {getPricingNotes(lang).map((n) => (
                <li key={n} className="flex gap-2.5">
                  <PiCheckCircleFill className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden />
                  {n}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold sm:text-3xl">{t.pricing.faqTitle}</h2>
            <div className="mt-5">
              <FaqAccordion faqs={priceFaqs} />
            </div>
          </section>
        </div>
        <aside className="lg:sticky lg:top-32 lg:self-start">
          <QuoteSidebar heading={t.pricing.sidebarTitle} message={t.whatsapp.price} />
        </aside>
      </div>
      <CtaBand />
    </>
  );
}
