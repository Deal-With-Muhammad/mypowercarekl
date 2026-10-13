import "server-only";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { content as en } from "@/content/en";
import { content as ms } from "@/content/ms";
import { content as zh } from "@/content/zh";
import { serviceData } from "@/data/services";
import { areaData } from "@/data/areas";
import { guideData } from "@/data/guides";
import { rateGroups, rateRows } from "@/data/pricing";
import type { Area, FaqGroup, Guide, LocaleContent, PriceRow, RateRow, Service, ServiceCategory } from "@/lib/types";

// Joins the shared structure in src/data with one language's words from
// src/content. Pages only ever read content through these functions.

const contentByLocale: Record<Locale, LocaleContent> = { en, ms, zh };

export function getContent(locale: Locale) {
  return contentByLocale[locale];
}

function resolveRow(locale: Locale, row: RateRow, note?: string): PriceRow {
  const text = contentByLocale[locale].pricing.rows[row.id] ?? en.pricing.rows[row.id];
  const t = getDictionary(locale);
  return {
    id: row.id,
    from: row.from,
    to: row.to,
    service: row.service,
    item: text.item,
    unit: row.unit ? t.price.units[row.unit] : undefined,
    note: note ?? text.note,
  };
}

export function priceRows(locale: Locale, ids: string[]) {
  return ids
    .map((id) => rateRows.find((r) => r.id === id))
    .filter((r) => r !== undefined)
    .map((r) => resolveRow(locale, r));
}

export function getRateCard(locale: Locale) {
  const text = contentByLocale[locale].pricing;
  return rateGroups.map((g) => ({
    id: g.id,
    title: text.groups[g.id]?.title ?? en.pricing.groups[g.id].title,
    description: text.groups[g.id]?.description ?? en.pricing.groups[g.id].description,
    rows: g.rows.map((r) => resolveRow(locale, r)),
  }));
}

export function getPricingNotes(locale: Locale) {
  return contentByLocale[locale].pricing.notes;
}

export function getServices(locale: Locale): Service[] {
  const texts = contentByLocale[locale].services;
  return serviceData.map((data) => {
    const text = texts[data.slug] ?? en.services[data.slug];
    const pricing = data.priceRows
      .map((id) => rateRows.find((r) => r.id === id))
      .filter((r) => r !== undefined)
      .map((r) => resolveRow(locale, r, text.priceNotes?.[r.id]));
    return { ...data, ...text, pricing };
  });
}

export function getService(locale: Locale, slug: string) {
  return getServices(locale).find((s) => s.slug === slug);
}

export function getServicesBySlug(locale: Locale, slugs: string[]) {
  const all = getServices(locale);
  return slugs.map((slug) => all.find((s) => s.slug === slug)).filter((s) => s !== undefined);
}

export function getCategories(locale: Locale) {
  const text = contentByLocale[locale].categories;
  return (Object.keys(en.categories) as ServiceCategory[]).map((id) => ({ id, ...text[id] }));
}

/** Area name without the bracketed short form: "Petaling Jaya (PJ)" -> "Petaling Jaya". */
export function shortAreaName(name: string) {
  return name.replace(/\s*[(（].*[)）]$/, "");
}

export function getAreas(locale: Locale): Area[] {
  const texts = contentByLocale[locale].areas;
  return areaData.map((data) => ({ ...data, ...(texts[data.slug] ?? en.areas[data.slug]) }));
}

export function getArea(locale: Locale, slug: string) {
  return getAreas(locale).find((a) => a.slug === slug);
}

export function getGuides(locale: Locale): Guide[] {
  const texts = contentByLocale[locale].guides;
  return guideData.map((data) => ({ ...data, ...(texts[data.slug] ?? en.guides[data.slug]) }));
}

export function getGuide(locale: Locale, slug: string) {
  return getGuides(locale).find((g) => g.slug === slug);
}

export function getFaqGroups(locale: Locale): FaqGroup[] {
  return contentByLocale[locale].faqGroups;
}

/** Home page FAQs, picked by [group id, question index] so every language shows the same questions. */
const homeFaqPicks: [string, number][] = [
  ["booking", 0],
  ["prices", 0],
  ["prices", 1],
  ["booking", 4],
  ["problems", 0],
  ["warranty", 0],
];

export function getHomeFaqs(locale: Locale) {
  const groups = getFaqGroups(locale);
  return homeFaqPicks
    .map(([id, i]) => groups.find((g) => g.id === id)?.faqs[i])
    .filter((f) => f !== undefined);
}
