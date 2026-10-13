import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  PiBroomDuotone,
  PiClockCountdownDuotone,
  PiHandshakeDuotone,
  PiReceiptDuotone,
  PiShieldCheckDuotone,
  PiWrenchDuotone,
} from "react-icons/pi";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { ReviewsSection } from "@/components/sections/Reviews";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { absoluteUrl, site } from "@/lib/site";
import { isLocale, localePath } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

const icons = [
  PiClockCountdownDuotone,
  PiReceiptDuotone,
  PiWrenchDuotone,
  PiShieldCheckDuotone,
  PiBroomDuotone,
  PiHandshakeDuotone,
];

export async function generateMetadata(props: PageProps<"/[lang]/about">): Promise<Metadata> {
  const { lang } = await props.params;
  if (!isLocale(lang)) return {};
  const t = getDictionary(lang);
  return pageMetadata({ locale: lang, path: "/about", title: t.about.metaTitle, description: t.about.metaDescription });
}

export default async function AboutPage(props: PageProps<"/[lang]/about">) {
  const { lang } = await props.params;
  if (!isLocale(lang)) notFound();
  const t = getDictionary(lang);

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    url: absoluteUrl(localePath(lang, "/about")),
    name: t.about.schemaName,
    mainEntity: { "@id": absoluteUrl("/#business") },
  };

  return (
    <>
      <JsonLd data={aboutSchema} />
      <section className="border-b border-line bg-canvas">
        <div className="container-page grid items-center gap-10 py-12 lg:grid-cols-2 lg:py-16">
          <div>
            <Breadcrumbs items={[{ name: t.nav.about, href: "/about" }]} />
            <h1 className="mt-6 text-3xl leading-tight font-extrabold sm:text-4xl lg:text-[2.75rem]">{t.about.h1}</h1>
            <p className="mt-4 text-[1.0625rem] leading-relaxed text-slate-text">{t.about.p1(site.yearsExperience)}</p>
            <p className="mt-3 text-[1.0625rem] leading-relaxed text-slate-text">{t.about.p2}</p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/images/about-team.jpg"
              alt={t.about.imageAlt}
              fill
              preload
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="mb-2 text-sm font-semibold tracking-[0.12em] text-brand uppercase">{t.about.eyebrow}</p>
            <h2 className="text-3xl font-bold sm:text-4xl">{t.about.title}</h2>
          </div>
          <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {t.about.promises(site.warrantyMonths).map(({ title, text }, i) => {
              const Icon = icons[i];
              return (
                <div key={title}>
                  <Icon className="size-9 text-brand" aria-hidden />
                  <h3 className="mt-3 text-lg font-semibold">{title}</h3>
                  <p className="mt-1.5 text-[0.95rem] leading-relaxed text-slate-text">{text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ReviewsSection limit={3} />

      <section className="py-14">
        <div className="container-page text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">{t.about.pricesTitle}</h2>
          <p className="mx-auto mt-2 max-w-xl text-slate-text">{t.about.pricesText}</p>
          <Link
            href={localePath(lang, "/pricing")}
            className="button button--lg mt-6 bg-brand px-6 text-white hover:bg-brand-dark"
          >
            {t.about.pricesButton}
          </Link>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
