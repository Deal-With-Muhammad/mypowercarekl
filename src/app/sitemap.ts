import type { MetadataRoute } from "next";
import { serviceData } from "@/data/services";
import { areaData } from "@/data/areas";
import { guideData } from "@/data/guides";
import { pricingUpdated } from "@/data/pricing";
import { localeInfo, localePath, locales } from "@/i18n/config";
import { absoluteUrl } from "@/lib/site";

type Entry = MetadataRoute.Sitemap[number];

/** One sitemap entry per language, each listing all three versions as alternates. */
function allLanguages(path: string, rest: Omit<Entry, "url" | "alternates">): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(locales.map((l) => [localeInfo[l].hreflang, absoluteUrl(localePath(l, path))]));
  return locales.map((l) => ({ url: absoluteUrl(localePath(l, path)), alternates: { languages }, ...rest }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date(pricingUpdated);

  const pages: [string, Entry["changeFrequency"], number][] = [
    ["/", "weekly", 1],
    ["/services", "monthly", 0.9],
    ["/areas", "monthly", 0.9],
    ["/pricing", "monthly", 0.9],
    ["/contact", "yearly", 0.8],
    ["/faq", "monthly", 0.7],
    ["/guides", "weekly", 0.7],
    ["/about", "yearly", 0.6],
    ["/privacy", "yearly", 0.2],
  ];

  return [
    ...pages.flatMap(([path, changeFrequency, priority]) =>
      allLanguages(path, { lastModified: updated, changeFrequency, priority }),
    ),
    ...serviceData.flatMap((s) =>
      allLanguages(`/services/${s.slug}`, {
        lastModified: updated,
        changeFrequency: "monthly",
        priority: 0.85,
        images: [absoluteUrl(s.image)],
      }),
    ),
    ...areaData.flatMap((a) =>
      allLanguages(`/areas/${a.slug}`, {
        lastModified: updated,
        changeFrequency: "monthly",
        priority: a.featured ? 0.8 : 0.7,
      }),
    ),
    ...guideData.flatMap((g) =>
      allLanguages(`/guides/${g.slug}`, {
        lastModified: new Date(g.updated),
        changeFrequency: "monthly",
        priority: 0.7,
        images: [absoluteUrl(g.image)],
      }),
    ),
  ];
}
