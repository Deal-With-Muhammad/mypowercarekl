// Content model. Structure (slugs, prices, images, relations) lives in
// src/data and is shared by every language; the words live in
// src/content/<locale> with identical keys in each language.

export type Faq = { q: string; a: string };

export type Section = { heading: string; body: string[] };

/** Unit keys for price rows; labels ("per point") come from the dictionary. */
export type UnitKey =
  | "visit"
  | "job"
  | "switch"
  | "socket"
  | "point"
  | "circuit"
  | "room"
  | "unit"
  | "house"
  | "breaker"
  | "board"
  | "fan"
  | "light"
  | "fixture"
  | "install"
  | "test"
  | "regulator"
  | "fitting"
  | "premises";

/** One row of the master rate card (src/data/pricing.ts). */
export type RateRow = {
  id: string;
  /** Lowest typical price in RM. */
  from: number;
  /** Highest typical price in RM; omit for "from" pricing. */
  to?: number;
  unit?: UnitKey;
  /** Service page this row links to. */
  service?: string;
};

/** A rate row with its words resolved for one language, ready to display. */
export type PriceRow = Omit<RateRow, "unit"> & { item: string; unit?: string; note?: string };

export type PricingText = {
  groups: Record<string, { title: string; description: string }>;
  rows: Record<string, { item: string; note?: string }>;
  notes: string[];
};

export type ServiceCategory =
  | "repairs"
  | "wiring"
  | "db-box"
  | "fans-lighting"
  | "appliances"
  | "safety-smart"
  | "commercial";

export type ServiceData = {
  slug: string;
  category: ServiceCategory;
  /** Key from-price in RM shown on cards. */
  priceFrom: number;
  /** Path under /public/images. */
  image: string;
  /** Rate card row ids shown in this page's price table. */
  priceRows: string[];
  /** Slugs of related services. */
  related: string[];
};

export type ServiceText = {
  /** Short name used in menus and cards, e.g. "Ceiling Fan Installation". */
  name: string;
  /** Page H1 including location. */
  h1: string;
  /** <title> (max ~60 chars; the brand suffix is added automatically). */
  metaTitle: string;
  /** Meta description, 140–160 chars, includes a price anchor. */
  metaDescription: string;
  /** One-line card summary, max ~110 chars. */
  summary: string;
  /** Answer-first opening paragraph, 40–60 words. */
  intro: string;
  /** "Signs you need this" bullets. */
  signs: string[];
  /** What the job includes, in order. */
  included: string[];
  sections: Section[];
  faqs: Faq[];
  /** Search phrases this page targets in this language. */
  keywords: string[];
  /** Page-specific notes for shared price rows, keyed by row id. */
  priceNotes?: Record<string, string>;
};

export type Service = ServiceData & ServiceText & { pricing: PriceRow[] };

export type StateKey = "Kuala Lumpur" | "Selangor" | "Putrajaya";

export type AreaData = {
  slug: string;
  state: StateKey;
  /** Slugs of nearby areas that also exist in the areas list. */
  nearby: string[];
  /** Typical arrival window in minutes from a central KL/PJ start. */
  eta: [number, number];
  geo: { lat: number; lng: number };
  /** Highlight on home page / footer. */
  featured?: boolean;
};

export type AreaText = {
  name: string;
  /** Unique 2–3 sentence local intro. */
  intro: string;
  /** Typical properties in the area. */
  housing: string;
  neighbourhoods: string[];
  landmarks: string[];
  /** Electrical issues specific to this area's housing stock. */
  commonIssues: string[];
  faqs: Faq[];
};

export type Area = AreaData & AreaText;

export type GuideCategory = "cost" | "troubleshooting" | "safety" | "buying";

export type GuideData = {
  slug: string;
  category: GuideCategory;
  /** ISO dates. */
  published: string;
  updated: string;
  readMinutes: number;
  image: string;
  /** Service slugs to link to. */
  relatedServices: string[];
};

export type GuideText = {
  title: string;
  metaTitle: string;
  metaDescription: string;
  /** 1–2 sentence answer shown at the top (answer-first for AEO). */
  tldr: string;
  sections: (Section & { bullets?: string[]; table?: { head: string[]; rows: string[][] } })[];
  faqs: Faq[];
};

export type Guide = GuideData & GuideText;

export type FaqGroup = { id: string; title: string; faqs: Faq[] };

export type CategoryText = Record<ServiceCategory, { name: string; blurb: string }>;

/** Everything a language provides besides the UI dictionary. */
export type LocaleContent = {
  services: Record<string, ServiceText>;
  areas: Record<string, AreaText>;
  guides: Record<string, GuideText>;
  faqGroups: FaqGroup[];
  pricing: PricingText;
  categories: CategoryText;
};

export type Review = {
  name: string;
  area: string;
  service: string;
  rating: number;
  /** Relative time label, e.g. "2 weeks ago". */
  when: string;
  text: string;
};
