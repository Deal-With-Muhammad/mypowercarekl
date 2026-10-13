import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { TrustBar } from "@/components/sections/TrustSections";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { getCategories, getServices } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/site";
import { isLocale, localePath } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export async function generateMetadata(props: PageProps<"/[lang]/services">): Promise<Metadata> {
  const { lang } = await props.params;
  if (!isLocale(lang)) return {};
  const t = getDictionary(lang);
  return pageMetadata({
    locale: lang,
    path: "/services",
    title: t.services.metaTitle,
    description: t.services.metaDescription,
  });
}

export default async function ServicesPage(props: PageProps<"/[lang]/services">) {
  const { lang } = await props.params;
  if (!isLocale(lang)) notFound();
  const t = getDictionary(lang);
  const services = getServices(lang);
  const categories = getCategories(lang);

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: t.services.listName,
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.name,
      url: absoluteUrl(localePath(lang, `/services/${s.slug}`)),
    })),
  };

  return (
    <>
      <JsonLd data={itemList} />
      <section className="border-b border-line bg-canvas">
        <div className="container-page py-10 lg:py-14">
          <Breadcrumbs items={[{ name: t.nav.services, href: "/services" }]} />
          <h1 className="mt-6 max-w-3xl text-3xl leading-tight font-extrabold sm:text-4xl lg:text-[2.75rem]">
            {t.services.h1}
          </h1>
          <p className="mt-4 max-w-2xl text-[1.0625rem] leading-relaxed text-slate-text">
            {t.services.intro(services.length)}
          </p>
          <nav aria-label={t.services.categoriesLabel} className="mt-6 flex flex-wrap gap-2">
            {categories.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="rounded-md border border-line bg-white px-3 py-1.5 text-sm font-medium text-ink hover:border-brand/40 hover:text-brand"
              >
                {c.name}
              </a>
            ))}
          </nav>
        </div>
      </section>
      <TrustBar />

      <div className="container-page space-y-16 py-14">
        {categories.map((c) => {
          const list = services.filter((s) => s.category === c.id);
          if (!list.length) return null;
          return (
            <section key={c.id} id={c.id} className="scroll-mt-32">
              <h2 className="text-2xl font-bold sm:text-3xl">{c.name}</h2>
              <p className="mt-1.5 text-slate-text">{c.blurb}</p>
              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {list.map((s) => (
                  <ServiceCard key={s.slug} service={s} />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <CtaBand title={t.ctaBand.servicesTitle} text={t.ctaBand.servicesText} />
    </>
  );
}
