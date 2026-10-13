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

// Google cuts titles at roughly 60–65 characters and already shows the site
// name above each result, so the brand suffix is added only when it fits.
const maxTitleLength = 65;

/** Shared social preview (src/app/opengraph-image.tsx) for pages without their own photo. */
const defaultImage = { url: "/opengraph-image", width: 1200, height: 630, alt: site.name };

/**
 * Per-page metadata: canonical URL for this language, alternates for the
 * other two, and matching Open Graph tags (always with a preview image, which
 * WhatsApp and Facebook show when the link is shared).
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
  const branded = `${title} | ${site.name}`;
  const fullTitle = absoluteTitle || branded.length > maxTitleLength ? title : branded;
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: url, languages: languageAlternates(path) },
    openGraph: {
      type,
      siteName: site.name,
      locale: localeInfo[locale].ogLocale,
      alternateLocale: locales.filter((l) => l !== locale).map((l) => localeInfo[l].ogLocale),
      url,
      title: fullTitle,
      description,
      images: [image ? { url: image } : defaultImage],
      ...(type === "article" ? { publishedTime, modifiedTime } : {}),
    },
  };
}
