import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PiMapPinDuotone, PiWarningCircleDuotone } from "react-icons/pi";
import { PageHero } from "@/components/sections/PageHero";
import { QuoteSidebar } from "@/components/sections/QuoteSidebar";
import { PriceTable } from "@/components/sections/PriceTable";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { ServiceTile } from "@/components/sections/ServiceCard";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { serviceData } from "@/data/services";
import { formatRM, pricingUpdated } from "@/data/pricing";
import { getAreas, getCategories, getPricingNotes, getService, getServicesBySlug, shortAreaName } from "@/lib/content";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";
import { isLocale, localeInfo, localePath } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export function generateStaticParams() {
  return serviceData.map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata(props: PageProps<"/[lang]/services/[slug]">): Promise<Metadata> {
  const { lang, slug } = await props.params;
  if (!isLocale(lang)) return {};
  const service = getService(lang, slug);
  if (!service) return {};
  return pageMetadata({
    locale: lang,
    path: `/services/${service.slug}`,
    title: service.metaTitle,
    description: service.metaDescription,
    image: service.image,
  });
}

export default async function ServicePage(props: PageProps<"/[lang]/services/[slug]">) {
  const { lang, slug } = await props.params;
  if (!isLocale(lang)) notFound();
  const service = getService(lang, slug);
  if (!service) notFound();

  const t = getDictionary(lang);
  const href = (p: string) => localePath(lang, p);
  const category = getCategories(lang).find((c) => c.id === service.category);
  const related = getServicesBySlug(lang, service.related);
  const featuredAreas = getAreas(lang).filter((a) => a.featured);
  const message = t.whatsapp.service(service.name);
  const lowerName = lang === "en" ? service.name.toLowerCase() : service.name;
  const updated = new Date(pricingUpdated).toLocaleDateString(localeInfo[lang].intl, {
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <JsonLd data={serviceSchema(lang, service)} />
      <JsonLd data={faqSchema(service.faqs)} />

      <PageHero
        crumbs={[
          { name: t.nav.services, href: "/services" },
          { name: service.name, href: `/services/${service.slug}` },
        ]}
        eyebrow={category?.name}
        title={service.h1}
        intro={service.intro}
        image={service.image}
        imageAlt={t.service.imageAlt(service.name)}
        whatsappMessage={message}
        facts={[
          { label: t.service.priceFrom, value: formatRM(service.priceFrom) },
          { label: t.service.service, value: t.service.sameDay },
          { label: t.service.warranty, value: t.service.months(site.warrantyMonths) },
        ]}
      />

      <div className="container-page grid grid-cols-1 gap-12 py-14 lg:grid-cols-[minmax(0,1fr)_340px]">
        <article className="min-w-0">
          <section aria-labelledby="signs">
            <h2 id="signs" className="text-2xl font-bold sm:text-3xl">
              {t.service.signsTitle(lowerName)}
            </h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {service.signs.map((sign) => (
                <li
                  key={sign}
                  className="flex items-start gap-3 rounded-md border border-line bg-white p-4 text-[0.98rem] text-ink"
                >
                  <PiWarningCircleDuotone className="mt-0.5 size-5.5 shrink-0 text-brand" aria-hidden />
                  {sign}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="pricing" className="mt-14">
            <h2 id="pricing" className="text-2xl font-bold sm:text-3xl">
              {t.service.costTitle(lowerName)}
            </h2>
            <p className="mt-3 text-[1.0625rem] leading-relaxed text-slate-text">
              {t.service.costText(lowerName, updated)}
            </p>
            <div className="mt-5">
              <PriceTable rows={service.pricing} caption={t.service.pricesCaption(service.name)} />
            </div>
            <p className="mt-3 text-sm text-slate-text">
              {getPricingNotes(lang)[0]}{" "}
              <Link href={href("/pricing")} className="font-medium text-brand hover:underline">
                {t.service.seeFullList}
              </Link>
              .
            </p>
          </section>

          <section aria-labelledby="included" className="mt-14">
            <h2 id="included" className="text-2xl font-bold sm:text-3xl">
              {t.service.included}
            </h2>
            <ol className="mt-5 space-y-3">
              {service.included.map((step, i) => (
                <li key={step} className="flex items-start gap-4">
                  <span className="grid size-8 shrink-0 place-items-center rounded-md bg-brand text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="pt-1 text-[1.0625rem] text-ink">{step}</span>
                </li>
              ))}
            </ol>
          </section>

          <div className="prose-kl mt-4">
            {service.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.body.map((p) => (
                  <p key={p.slice(0, 32)}>{p}</p>
                ))}
              </section>
            ))}
          </div>

          <section aria-labelledby="areas" className="mt-14">
            <h2 id="areas" className="text-2xl font-bold sm:text-3xl">
              {t.service.areasTitle}
            </h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {featuredAreas.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={href(`/areas/${a.slug}`)}
                    className="inline-flex pressable items-center gap-1.5 rounded-md border border-line px-3 py-1.5 text-sm text-ink hover:border-brand/40 hover:text-brand"
                  >
                    <PiMapPinDuotone className="size-4 text-brand" aria-hidden />
                    {shortAreaName(a.name)}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="faq" className="mt-14">
            <h2 id="faq" className="text-2xl font-bold sm:text-3xl">
              {t.service.faqTitle(service.name)}
            </h2>
            <div className="mt-5">
              <FaqAccordion faqs={service.faqs} />
            </div>
          </section>
        </article>

        <aside className="space-y-6 lg:sticky lg:top-32 lg:self-start">
          <QuoteSidebar heading={t.service.quoteTitle(lowerName)} message={message} />
        </aside>
      </div>

      {related.length > 0 && (
        <section className="border-t border-line py-14">
          <div className="container-page">
            <h2 className="text-2xl font-bold sm:text-3xl">{t.service.related}</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((s) => (
                <ServiceTile key={s.slug} service={s} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand message={message} />
    </>
  );
}
