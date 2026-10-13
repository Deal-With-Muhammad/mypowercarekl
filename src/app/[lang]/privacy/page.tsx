import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export async function generateMetadata(props: PageProps<"/[lang]/privacy">): Promise<Metadata> {
  const { lang } = await props.params;
  if (!isLocale(lang)) return {};
  const t = getDictionary(lang);
  return pageMetadata({ locale: lang, path: "/privacy", title: t.privacy.metaTitle, description: t.privacy.metaDescription });
}

export default async function PrivacyPage(props: PageProps<"/[lang]/privacy">) {
  const { lang } = await props.params;
  if (!isLocale(lang)) notFound();
  const t = getDictionary(lang);

  return (
    <div className="container-page max-w-3xl py-12">
      <Breadcrumbs items={[{ name: t.privacy.h1, href: "/privacy" }]} />
      <h1 className="mt-6 text-3xl font-extrabold sm:text-4xl">{t.privacy.h1}</h1>
      <p className="mt-2 text-sm text-slate-text">{t.privacy.updated}</p>
      <div className="prose-kl mt-8">
        <p>{t.privacy.intro(site.legalName)}</p>
        {t.privacy.sections.map((s) => (
          <section key={s.heading}>
            <h2>{s.heading}</h2>
            {s.body?.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
            {s.bullets && (
              <ul>
                {s.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
        <h2>{t.privacy.rightsTitle}</h2>
        <p>
          {t.privacy.rights} <a href={`mailto:${site.email}`}>{site.email}</a> · {site.phoneDisplay}
        </p>
      </div>
    </div>
  );
}
