import { localeInfo, localePath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { getAreas, getServices, shortAreaName } from "@/lib/content";
import { visitFee } from "@/data/pricing";
import type { Area, Faq, Guide, Service } from "@/lib/types";
import { absoluteUrl, site, socialLinks } from "@/lib/site";

// JSON-LD helpers. The business keeps one @id in every language so search
// engines and AI assistants see a single entity with three language versions.

const businessId = absoluteUrl("/#business");
const websiteId = absoluteUrl("/#website");

const postalAddress = {
  "@type": "PostalAddress",
  addressLocality: site.address.locality,
  addressRegion: site.address.region,
  postalCode: site.address.postalCode,
  addressCountry: site.address.country,
};

const openingHours = site.hours.map((h) => ({
  "@type": "OpeningHoursSpecification",
  dayOfWeek: h.days,
  opens: h.opens,
  closes: h.closes,
}));

const priceRange = `RM${visitFee} – RM30,000`;

function localUrl(locale: Locale, path: string) {
  return absoluteUrl(localePath(locale, path));
}

function areaPlace(locale: Locale, a: Area) {
  return {
    "@type": "Place",
    name: `${shortAreaName(a.name)}, ${getDictionary(locale).states[a.state]}`,
    url: localUrl(locale, `/areas/${a.slug}`),
  };
}

/** Site-wide business entity, rendered once in the root layout. */
export function businessSchema(locale: Locale) {
  const t = getDictionary(locale);
  const services = getServices(locale);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Electrician",
        "@id": businessId,
        name: site.name,
        alternateName: site.alternateNames,
        legalName: site.legalName,
        url: site.url,
        logo: absoluteUrl("/logo.png"),
        image: absoluteUrl("/images/hero-electrician-panel.jpg"),
        description: t.meta.siteDescription,
        slogan: t.meta.tagline,
        telephone: site.phoneE164,
        email: site.email,
        priceRange,
        currenciesAccepted: "MYR",
        paymentAccepted: "Cash, Bank transfer, DuitNow QR, Touch 'n Go eWallet",
        address: postalAddress,
        geo: { "@type": "GeoCoordinates", latitude: site.geo.latitude, longitude: site.geo.longitude },
        openingHoursSpecification: openingHours,
        knowsLanguage: ["en", "ms", "zh"],
        areaServed: [
          { "@type": "City", name: "Kuala Lumpur" },
          { "@type": "State", name: "Selangor" },
          { "@type": "City", name: "Putrajaya" },
          ...getAreas(locale).map((a) => areaPlace(locale, a)),
        ],
        knowsAbout: services.map((s) => s.name),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: t.services.listName,
          itemListElement: services.map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: s.name, url: localUrl(locale, `/services/${s.slug}`) },
            priceSpecification: { "@type": "PriceSpecification", minPrice: s.priceFrom, priceCurrency: "MYR" },
          })),
        },
        ...(socialLinks.length ? { sameAs: socialLinks } : {}),
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: site.url,
        name: site.name,
        alternateName: site.alternateNames,
        publisher: { "@id": businessId },
        inLanguage: ["en-MY", "ms-MY", "zh-MY"],
      },
    ],
  };
}

export function serviceSchema(locale: Locale, s: Service) {
  const prices = s.pricing.flatMap((p) => [p.from, p.to ?? p.from]);
  const url = localUrl(locale, `/services/${s.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: s.name,
    serviceType: s.name,
    description: s.intro,
    url,
    inLanguage: localeInfo[locale].htmlLang,
    image: absoluteUrl(s.image),
    provider: { "@id": businessId },
    areaServed: [
      { "@type": "City", name: "Kuala Lumpur" },
      { "@type": "State", name: "Selangor" },
      { "@type": "City", name: "Putrajaya" },
    ],
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "MYR",
      lowPrice: Math.min(...prices),
      highPrice: Math.max(...prices),
      offerCount: s.pricing.length,
    },
    hoursAvailable: openingHours,
  };
}

export function areaSchema(locale: Locale, a: Area, image: string) {
  const url = localUrl(locale, `/areas/${a.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "Electrician",
    "@id": `${url}#local`,
    name: `${site.name}, ${shortAreaName(a.name)}`,
    url,
    parentOrganization: { "@id": businessId },
    telephone: site.phoneE164,
    priceRange,
    image: absoluteUrl(image),
    address: postalAddress,
    geo: { "@type": "GeoCoordinates", latitude: a.geo.lat, longitude: a.geo.lng },
    areaServed: [areaPlace(locale, a), ...a.neighbourhoods.map((n) => ({ "@type": "Place", name: n }))],
    openingHoursSpecification: openingHours,
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  };
}

export function articleSchema(locale: Locale, g: Guide) {
  const url = localUrl(locale, `/guides/${g.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: g.title,
    description: g.metaDescription,
    url,
    image: absoluteUrl(g.image),
    datePublished: g.published,
    dateModified: g.updated,
    inLanguage: localeInfo[locale].htmlLang,
    author: { "@type": "Organization", name: site.name, url: site.url },
    publisher: { "@id": businessId },
    mainEntityOfPage: url,
  };
}
