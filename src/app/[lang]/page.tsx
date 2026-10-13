import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { PiArrowRightBold, PiCheckCircleFill, PiMapPinDuotone, PiPhoneFill, PiStarFill } from "react-icons/pi";
import { HeroCarousel, type HeroSlide } from "@/components/home/HeroCarousel";
import { ServiceTile } from "@/components/sections/ServiceCard";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { TrustBar, ProcessSteps } from "@/components/sections/TrustSections";
import { ReviewsSection } from "@/components/sections/Reviews";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { PriceTable } from "@/components/sections/PriceTable";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { getAreas, getHomeFaqs, getServices, getServicesBySlug, priceRows, shortAreaName } from "@/lib/content";
import { formatRM, visitFee } from "@/data/pricing";
import { averageRating, reviews } from "@/data/reviews";
import { faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { site, telLink, whatsappLink } from "@/lib/site";
import { isLocale, localePath } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export async function generateMetadata(props: PageProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await props.params;
  if (!isLocale(lang)) return {};
  const t = getDictionary(lang);
  return pageMetadata({
    locale: lang,
    path: "/",
    title: t.home.metaTitle,
    description: t.home.metaDescription,
    absoluteTitle: true,
  });
}

// One photo per kind of work, so the first screen shows the range of jobs.
const slideDefs = [
  { key: "tripping", image: "/images/hero-electrician-panel.jpg", service: "power-tripping-repair" },
  { key: "lighting", image: "/images/hero-lighting.jpg", service: "lighting-installation" },
  { key: "wiring", image: "/images/hero-wiring.jpg", service: "new-wiring-power-points" },
  { key: "ev", image: "/images/hero-ev-charger.jpg", service: "ev-charger-installation" },
] as const;

// Nine of the most-booked jobs across categories; the full list lives on /services.
const popularSlugs = [
  "power-tripping-repair",
  "short-circuit-sparking-repair",
  "house-rewiring",
  "socket-switch-installation",
  "db-box-replacement",
  "lighting-installation",
  "water-heater-installation",
  "aircond-power-point",
  "ceiling-fan-installation",
];

const homePriceRows = ["visit-fee", "tripping-fix", "power-point-surface", "downlight-new", "heater-install", "db-single"];

export default async function HomePage(props: PageProps<"/[lang]">) {
  const { lang } = await props.params;
  if (!isLocale(lang)) notFound();
  const t = getDictionary(lang);
  const href = (p: string) => localePath(lang, p);

  const allServices = getServices(lang);
  const popular = getServicesBySlug(lang, popularSlugs);
  const featuredAreas = getAreas(lang).filter((a) => a.featured);
  const areaCount = getAreas(lang).length;
  const faqs = getHomeFaqs(lang);
  const avg = averageRating();

  const slides: HeroSlide[] = slideDefs.map((s) => {
    const service = allServices.find((x) => x.slug === s.service)!;
    return {
      image: s.image,
      alt: t.home.slides[s.key],
      label: t.home.slides[s.key],
      price: t.price.from(formatRM(service.priceFrom)),
      href: href(`/services/${s.service}`),
    };
  });

  return (
    <>
      <JsonLd data={faqSchema(faqs)} />

      <HeroCarousel
        slides={slides}
        label={t.home.carouselLabel}
        showLabel={slides.map((s) => t.home.showSlide(s.label))}
      >
        <div className="container-page py-6 lg:py-10">
          <div className="max-w-2xl text-white">
            <p className="hidden items-center gap-2 text-sm font-medium text-white/80 lg:inline-flex">
              <span className="size-1.5 rounded-full bg-[#4ade80]" aria-hidden />
              {t.cta.sameDayHours(t.hours.short)}
            </p>
            <h1 className="text-[2.05rem] leading-[1.08] font-extrabold text-white sm:text-5xl lg:mt-4 lg:text-[3.6rem]">
              {t.home.h1}
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:mt-5 sm:text-lg">{t.home.sub}</p>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:flex">
              <a
                href={whatsappLink(t.whatsapp.default)}
                target="_blank"
                rel="noopener"
                data-cta="hero"
                className="button button--lg h-12 w-full bg-whatsapp px-4 text-base text-white hover:bg-whatsapp-dark sm:w-auto sm:px-6"
              >
                <FaWhatsapp className="size-5" aria-hidden />
                <span className="sm:hidden">{t.cta.whatsapp}</span>
                <span className="hidden sm:inline">{t.cta.heroWhatsapp}</span>
              </a>
              <a
                href={telLink}
                data-cta="hero"
                className="button button--lg h-12 w-full bg-white/10 px-4 text-base text-white ring-1 ring-white/25 backdrop-blur hover:bg-white/15 sm:w-auto sm:px-6"
              >
                <PiPhoneFill className="size-5" aria-hidden />
                <span className="sm:hidden">{t.cta.call}</span>
                <span className="hidden sm:inline">{site.phoneDisplay}</span>
              </a>
            </div>
            <div className="mt-5 flex items-center gap-2 text-sm text-white/80 sm:mt-7">
              <FcGoogle className="size-5" aria-hidden />
              <span className="font-semibold text-white">{avg.toFixed(1)}</span>
              <span className="flex text-spark" aria-hidden>
                {Array.from({ length: 5 }, (_, i) => (
                  <PiStarFill key={i} className="size-4" />
                ))}
              </span>
              <span>{t.home.rating(reviews.length)}</span>
            </div>
          </div>
        </div>
      </HeroCarousel>

      <TrustBar />

      {/* Services: scannable tiles, the full list lives on /services */}
      <section className="py-16 sm:py-20">
        <div className="container-page">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading eyebrow={t.home.servicesEyebrow} title={t.home.servicesTitle} />
            <Link
              href={href("/services")}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline"
            >
              {t.home.allServices(allServices.length)} <PiArrowRightBold className="size-3.5" aria-hidden />
            </Link>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {/* Six on phones to keep the page short; all nine from tablet up. */}
            {popular.map((s, i) => (
              <div key={s.slug} className={i >= 6 ? "hidden sm:block" : undefined}>
                <ServiceTile service={s} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparent pricing */}
      <section className="bg-canvas py-16 sm:py-20">
        <div className="container-page grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow={t.home.pricesEyebrow}
              title={t.home.pricesTitle}
              description={t.home.pricesText(formatRM(visitFee))}
            />
            <ul className="mt-6 space-y-2.5 text-[0.98rem] text-ink">
              {t.home.pricesPoints.map((text) => (
                <li key={text} className="flex items-center gap-2.5">
                  <PiCheckCircleFill className="size-5 shrink-0 text-brand" aria-hidden /> {text}
                </li>
              ))}
            </ul>
            <Link href={href("/pricing")} className="button button--lg mt-8 bg-brand px-6 text-white hover:bg-brand-dark">
              {t.home.fullPriceList}
            </Link>
          </div>
          <PriceTable rows={priceRows(lang, homePriceRows)} caption={t.home.pricesCaption} />
        </div>
      </section>

      <ProcessSteps />

      <ReviewsSection limit={3} />

      {/* Areas */}
      <section className="py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading eyebrow={t.home.areasEyebrow} title={t.home.areasTitle} description={t.home.areasText} />
          <ul className="mt-8 flex flex-wrap gap-2">
            {featuredAreas.map((a) => (
              <li key={a.slug}>
                <Link
                  href={href(`/areas/${a.slug}`)}
                  className="inline-flex pressable items-center gap-1.5 rounded-md border border-line bg-white px-3.5 py-2 text-sm font-medium text-ink hover:border-brand/40 hover:text-brand"
                >
                  <PiMapPinDuotone className="size-4 text-brand" aria-hidden />
                  {shortAreaName(a.name)}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={href("/areas")}
                className="inline-flex items-center gap-1.5 rounded-md px-3.5 py-2 text-sm font-semibold text-brand hover:underline"
              >
                {t.nav.allAreas(areaCount)} <PiArrowRightBold className="size-3.5" aria-hidden />
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-canvas py-16 sm:py-20">
        <div className="container-page grid grid-cols-1 gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <SectionHeading eyebrow={t.home.faqEyebrow} title={t.home.faqTitle} description={t.home.faqText} />
            <Link
              href={href("/faq")}
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline"
            >
              {t.home.allFaqs} <PiArrowRightBold className="size-3.5" aria-hidden />
            </Link>
          </div>
          <FaqAccordion faqs={faqs} defaultOpen={null} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
