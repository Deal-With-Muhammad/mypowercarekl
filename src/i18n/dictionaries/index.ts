import type { Locale } from "@/i18n/config";
import en, { type Dictionary } from "./en";
import ms from "./ms";
import zh from "./zh";

const dictionaries: Record<Locale, Dictionary> = { en, ms, zh };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export type { Dictionary };
