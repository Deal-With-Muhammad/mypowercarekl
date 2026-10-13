import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PiCalendarBlankDuotone, PiClockDuotone, PiLightbulbFilamentDuotone } from "react-icons/pi";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { QuoteSidebar } from "@/components/sections/QuoteSidebar";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { guideData } from "@/data/guides";
import { getGuide, getGuides, getServicesBySlug } from "@/lib/content";
import { articleSchema, faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { isLocale, localeInfo, localePath } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export function generateStaticParams() {
  return guideData.map((g) => ({ slug: g.slug }));
}

export const dynamicParams = false;

export async function generateMetadata(props: PageProps<"/[lang]/guides/[slug]">): Promise<Metadata> {
  const { lang, slug } = await props.params;
  if (!isLocale(lang)) return {};
  const guide = getGuide(lang, slug);
  if (!guide) return {};
  return pageMetadata({
    locale: lang,
    path: `/guides/${guide.slug}`,
    title: guide.metaTitle,
    description: guide.metaDescription,
    image: guide.image,
    type: "article",
    publishedTime: guide.published,
    modifiedTime: guide.updated,
  });
}

/** Section anchors use the section's position, which is stable across languages. */
const anchor = (i: number) => `section-${i + 1}`;

export default async function GuidePage(props: PageProps<"/[lang]/guides/[slug]">) {
  const { lang, slug } = await props.params;
  if (!isLocale(lang)) notFound();
  const guide = getGuide(lang, slug);
  if (!guide) notFound();

  const t = getDictionary(lang);
  const related = getServicesBySlug(lang, guide.relatedServices);
  const others = getGuides(lang)
    .filter((g) => g.slug !== guide.slug)
    .slice(0, 3);
  const updated = new Date(guide.updated).toLocaleDateString(localeInfo[lang].intl, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <JsonLd data={articleSchema(lang, guide)} />
      <JsonLd data={faqSchema(guide.faqs)} />

      <section className="border-b border-line bg-canvas">
        <div className="container-page py-10 lg:py-14">
          <Breadcrumbs
            items={[
              { name: t.nav.guides, href: "/guides" },
              { name: guide.title, href: `/guides/${guide.slug}` },
            ]}
          />
          <p className="mt-6 text-sm font-semibold tracking-[0.12em] text-brand uppercase">
            {t.guides.categories[guide.category]}
          </p>
          <h1 className="mt-2 max-w-4xl text-3xl leading-tight font-extrabold sm:text-4xl lg:text-[2.75rem]">
            {guide.title}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-text">
            <span className="font-medium text-ink">{t.guides.by}</span>
            <span className="flex items-center gap-1.5">
              <PiCalendarBlankDuotone className="size-4.5 text-brand" aria-hidden />
              {t.guides.updated} <time dateTime={guide.updated}>{updated}</time>
            </span>
            <span className="flex items-center gap-1.5">
              <PiClockDuotone className="size-4.5 text-brand" aria-hidden /> {t.guides.minRead(guide.readMinutes)}
            </span>
          </div>
        </div>
      </section>

      <div className="container-page grid grid-cols-1 gap-12 py-12 lg:grid-cols-[minmax(0,1fr)_340px]">
        <article className="min-w-0">
          <div className="rounded-lg border-l-4 border-brand bg-brand-50 p-5">
            <p className="flex items-center gap-2 text-sm font-bold tracking-wider text-brand uppercase">
              <PiLightbulbFilamentDuotone className="size-5" aria-hidden /> {t.guides.shortAnswer}
            </p>
            <p className="mt-2 text-[1.0625rem] leading-relaxed font-medium text-ink">{guide.tldr}</p>
          </div>

          <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-lg">
            <Image
              src={guide.image}
              alt={guide.title}
              fill
              preload
              sizes="(min-width: 1024px) 760px, 100vw"
              className="object-cover"
            />
          </div>

          <nav aria-label={t.guides.inThisGuide} className="mt-8 rounded-lg border border-line p-5">
            <p className="text-sm font-bold tracking-wider text-slate-text uppercase">{t.guides.inThisGuide}</p>
            <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-[0.98rem]">
              {guide.sections.map((s, i) => (
                <li key={s.heading}>
                  <a href={`#${anchor(i)}`} className="text-ink hover:text-brand">
                    {s.heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="prose-kl mt-2">
            {guide.sections.map((s, i) => (
              <section key={s.heading} id={anchor(i)} className="scroll-mt-32">
                <h2>{s.heading}</h2>
                {s.body.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
                {s.bullets && (
                  <ul>
                    {s.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
                {s.table && (
                  <div className="not-prose my-6 overflow-x-auto rounded-lg border border-line">
                    <table className="w-full text-left text-sm sm:text-[0.95rem]">
                      <thead className="bg-canvas text-xs tracking-wider text-slate-text uppercase">
                        <tr>
                          {s.table.head.map((h) => (
                            <th key={h} scope="col" className="px-3 py-3 font-semibold sm:px-4">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-line">
                        {s.table.rows.map((row) => (
                          <tr key={row.join("|")}>
                            {row.map((cell, ci) => (
                              <td
                                key={ci}
                                className={`px-3 py-3 sm:px-4 ${ci === 0 ? "font-medium text-ink" : "text-ink/85"}`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </section>
            ))}
          </div>

          <section className="mt-12">
            <h2 className="text-2xl font-bold sm:text-3xl">{t.guides.faqTitle}</h2>
            <div className="mt-5">
              <FaqAccordion faqs={guide.faqs} />
            </div>
          </section>
        </article>

        <aside className="space-y-6 lg:sticky lg:top-32 lg:self-start">
          <QuoteSidebar heading={t.guides.talk} message={t.whatsapp.guide(guide.title)} />
          {others.length > 0 && (
            <div className="rounded-lg border border-line bg-white p-6">
              <p className="font-display text-lg font-bold text-ink">{t.guides.more}</p>
              <ul className="mt-3 space-y-3">
                {others.map((g) => (
                  <li key={g.slug}>
                    <Link
                      href={localePath(lang, `/guides/${g.slug}`)}
                      className="text-[0.95rem] font-medium text-ink hover:text-brand"
                    >
                      {g.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>

      {related.length > 0 && (
        <section className="border-t border-line py-14">
          <div className="container-page">
            <h2 className="text-2xl font-bold sm:text-3xl">{t.guides.servicesMentioned}</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((s) => (
                <ServiceCard key={s.slug} service={s} />
              ))}
            </div>
          </div>
        </section>
      )}
      <CtaBand />
    </>
  );
}
