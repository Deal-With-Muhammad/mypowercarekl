// Languages. English is the default and lives at the root (/services/...);
// the others live under their own prefix (/ms/services/..., /zh/services/...).
// src/proxy.ts rewrites un-prefixed URLs to the internal /en/... routes.

export const locales = ["en", "ms", "zh"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeInfo: Record<
  Locale,
  {
    /** Name shown in the language switcher, in its own language. */
    label: string;
    /** Compact label for tight spaces. */
    short: string;
    /** <html lang>. */
    htmlLang: string;
    /** hreflang value for alternate links and the sitemap. */
    hreflang: string;
    ogLocale: string;
    /** Locale for number and date formatting. */
    intl: string;
  }
> = {
  en: { label: "English", short: "EN", htmlLang: "en-MY", hreflang: "en-MY", ogLocale: "en_MY", intl: "en-MY" },
  ms: { label: "Bahasa Melayu", short: "BM", htmlLang: "ms-MY", hreflang: "ms-MY", ogLocale: "ms_MY", intl: "ms-MY" },
  zh: { label: "中文", short: "中文", htmlLang: "zh-Hans-MY", hreflang: "zh-MY", ogLocale: "zh_MY", intl: "zh-MY" },
};

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}

/** Public URL path for a page in a language: localePath("ms", "/pricing") -> "/ms/pricing". */
export function localePath(locale: Locale, path = "/") {
  if (locale === defaultLocale) return path;
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

/** Strips a language prefix from a public path: "/zh/pricing" -> "/pricing". */
export function stripLocale(pathname: string) {
  const match = pathname.match(/^\/(ms|zh)(?=\/|$)/);
  if (!match) return pathname || "/";
  return pathname.slice(match[0].length) || "/";
}
