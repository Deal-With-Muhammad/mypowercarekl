import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { QuoteSidebar } from "@/components/sections/QuoteSidebar";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { getFaqGroups } from "@/lib/content";
import { faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export async function generateMetadata(props: PageProps<"/[lang]/faq">): Promise<Metadata> {
  const { lang } = await props.params;
  if (!isLocale(lang)) return {};
  const t = getDictionary(lang);
  return pageMetadata({ locale: lang, path: "/faq", title: t.faqPage.metaTitle, description: t.faqPage.metaDescription });
}

export default async function FaqPage(props: PageProps<"/[lang]/faq">) {
  const { lang } = await props.params;
  if (!isLocale(lang)) notFound();
  const t = getDictionary(lang);
  const groups = getFaqGroups(lang);

  return (
    <>
      <JsonLd data={faqSchema(groups.flatMap((g) => g.faqs))} />
      <section className="border-b border-line bg-canvas">
        <div className="container-page py-10 lg:py-14">
          <Breadcrumbs items={[{ name: t.nav.faq, href: "/faq" }]} />
          <h1 className="mt-6 max-w-3xl text-3xl leading-tight font-extrabold sm:text-4xl lg:text-[2.75rem]">
            {t.faqPage.h1}
          </h1>
          <p className="mt-4 max-w-2xl text-[1.0625rem] leading-relaxed text-slate-text">{t.faqPage.intro}</p>
          <nav aria-label={t.faqPage.h1} className="mt-6 flex flex-wrap gap-2">
            {groups.map((g) => (
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
          {groups.map((g, i) => (
            <section key={g.id} id={g.id} className="scroll-mt-32">
              <h2 className="mb-5 text-2xl font-bold sm:text-3xl">{g.title}</h2>
              <FaqAccordion faqs={g.faqs} defaultOpen={i === 0 ? 0 : null} />
            </section>
          ))}
        </div>
        <aside className="lg:sticky lg:top-32 lg:self-start">
          <QuoteSidebar heading={t.faqPage.sidebarTitle} message={t.whatsapp.question} />
        </aside>
      </div>
      <CtaBand />
    </>
  );
}
