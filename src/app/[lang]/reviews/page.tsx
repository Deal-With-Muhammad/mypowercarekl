import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { RatingSummary, ReviewCard } from "@/components/sections/Reviews";
import { CtaBand } from "@/components/sections/CtaBand";
import { reviews } from "@/data/reviews";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export async function generateMetadata(props: PageProps<"/[lang]/reviews">): Promise<Metadata> {
  const { lang } = await props.params;
  if (!isLocale(lang)) return {};
  const t = getDictionary(lang);
  return pageMetadata({ locale: lang, path: "/reviews", title: t.reviews.metaTitle, description: t.reviews.metaDescription });
}

export default async function ReviewsPage(props: PageProps<"/[lang]/reviews">) {
  const { lang } = await props.params;
  if (!isLocale(lang)) notFound();
  const t = getDictionary(lang);

  return (
    <>
      <section className="border-b border-line bg-canvas">
        <div className="container-page flex flex-col gap-6 py-10 md:flex-row md:items-end md:justify-between lg:py-14">
          <div>
            <Breadcrumbs items={[{ name: t.nav.reviews, href: "/reviews" }]} />
            <h1 className="mt-6 text-3xl leading-tight font-extrabold sm:text-4xl lg:text-[2.75rem]">{t.reviews.h1}</h1>
            <p className="mt-4 max-w-2xl text-[1.0625rem] leading-relaxed text-slate-text">{t.reviews.intro}</p>
          </div>
          <RatingSummary count={reviews.length} t={t} />
        </div>
      </section>
      <div className="container-page py-14">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <ReviewCard key={r.name} review={r} index={i} t={t} />
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center gap-3 text-center">
          <p className="text-slate-text">{t.reviews.leaveText}</p>
          <a
            href={site.social.googleBusiness}
            target="_blank"
            rel="noopener"
            className="button button--lg button--outline px-6"
          >
            <FcGoogle className="size-5" aria-hidden /> {t.reviews.leave}
          </a>
        </div>
      </div>
      <CtaBand />
    </>
  );
}
