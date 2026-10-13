import type { Metadata } from "next";
import { localeInfo, localePath, locales, type Locale } from "@/i18n/config";
import { site } from "@/lib/site";

/** hreflang map for a page that exists in every language. */
export function languageAlternates(path: string) {
  return {
    ...Object.fromEntries(locales.map((l) => [localeInfo[l].hreflang, localePath(l, path)])),
    "x-default": localePath("en", path),
  };
}

/**
 * Per-page metadata: canonical URL for this language, alternates for the
 * other two, and matching Open Graph tags.
 */
export function pageMetadata({
  locale,
  path,
  title,
  description,
  image,
  absoluteTitle = false,
  type = "website",
  publishedTime,
  modifiedTime,
}: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  image?: string;
  absoluteTitle?: boolean;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
}): Metadata {
  const url = localePath(locale, path);
  const ogTitle = absoluteTitle ? title : `${title} | ${site.name}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url, languages: languageAlternates(path) },
    openGraph: {
      type,
      siteName: site.name,
      locale: localeInfo[locale].ogLocale,
      alternateLocale: locales.filter((l) => l !== locale).map((l) => localeInfo[l].ogLocale),
      url,
      title: ogTitle,
      description,
      ...(image ? { images: [{ url: image }] } : {}),
      ...(type === "article" ? { publishedTime, modifiedTime } : {}),
    },
  };
}
