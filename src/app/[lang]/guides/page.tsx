import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { CtaBand } from "@/components/sections/CtaBand";
import { getGuides } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";
import { isLocale, localePath } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export async function generateMetadata(props: PageProps<"/[lang]/guides">): Promise<Metadata> {
  const { lang } = await props.params;
  if (!isLocale(lang)) return {};
  const t = getDictionary(lang);
  return pageMetadata({ locale: lang, path: "/guides", title: t.guides.metaTitle, description: t.guides.metaDescription });
}

export default async function GuidesPage(props: PageProps<"/[lang]/guides">) {
  const { lang } = await props.params;
  if (!isLocale(lang)) notFound();
  const t = getDictionary(lang);
  const guides = getGuides(lang);

  return (
    <>
      <section className="border-b border-line bg-canvas">
        <div className="container-page py-10 lg:py-14">
          <Breadcrumbs items={[{ name: t.nav.guides, href: "/guides" }]} />
          <h1 className="mt-6 max-w-3xl text-3xl leading-tight font-extrabold sm:text-4xl lg:text-[2.75rem]">
            {t.guides.h1}
          </h1>
          <p className="mt-4 max-w-2xl text-[1.0625rem] leading-relaxed text-slate-text">{t.guides.intro}</p>
        </div>
      </section>
      <div className="container-page grid grid-cols-1 gap-6 py-14 sm:grid-cols-2 lg:grid-cols-3">
        {guides.map((g) => (
          <Link
            key={g.slug}
            href={localePath(lang, `/guides/${g.slug}`)}
            className="group flex flex-col overflow-hidden rounded-lg border border-line bg-white hover:border-brand/40"
          >
            <div className="relative aspect-[16/10]">
              <Image
                src={g.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <p className="text-xs font-semibold tracking-wider text-brand uppercase">
                {t.guides.categories[g.category]} · {t.guides.minRead(g.readMinutes)}
              </p>
              <h2 className="mt-2 text-lg leading-snug font-bold group-hover:text-brand">{g.title}</h2>
              <p className="mt-2 line-clamp-3 flex-1 text-sm text-slate-text">{g.tldr}</p>
            </div>
          </Link>
        ))}
      </div>
      <CtaBand />
    </>
  );
}
