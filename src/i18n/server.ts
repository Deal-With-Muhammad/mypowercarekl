import { lang } from "next/root-params";
import { defaultLocale, isLocale, localePath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

/** The current page's language, read from the [lang] root segment. */
export async function getLocale(): Promise<Locale> {
  const value = await lang();
  return isLocale(value) ? value : defaultLocale;
}

/** Language, dictionary and a path helper for server components. */
export async function getI18n() {
  const locale = await getLocale();
  return { locale, t: getDictionary(locale), href: (path: string) => localePath(locale, path) };
}
