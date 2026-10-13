# KL Electrician (klelectrician.com)

Marketing and booking site for a mobile electrician serving Kuala Lumpur, Selangor and Putrajaya.

**Stack:** Next.js 16 (App Router, static generation) · Tailwind CSS v4 · HeroUI v3 · Supabase (booking requests) · react-icons · Google Analytics 4 / Tag Manager.

## Run locally

```bash
npm install
cp .env.example .env.local   # optional, see below
npm run dev                  # http://localhost:3000
npm run build && npm start   # production build
```

The site works with no env vars. Without Supabase, the booking form falls back to sending the details on WhatsApp.

## Before launch: checklist

1. **Business details** in `src/lib/site.ts`: phone, WhatsApp number, email, hours, years of experience, social links. These feed every page, the structured data and `llms.txt`.
2. **Reviews**: `src/data/reviews.ts` contains *placeholder* testimonials for the prototype. Replace them with real Google reviews (or a Google reviews widget) before going live. No review structured data is generated from them on purpose.
3. **Photos**: `public/images/` holds free stock photos from Unsplash and Pexels (free for commercial use; sources in `docs/image-credits.md`). Real photos of your own team, van and jobs will build more trust and rank better in local search.
4. **Prices**: `src/data/pricing.ts` is the single source for the rate card (minimum visit RM80, ceiling fan RM200). Price tables on every page read from it by row id. The written copy also quotes prices, so if you change one, search `src/content/` (all three languages) for the old number.
5. **Translations**: the Malay and Chinese text was translated for launch. Have a native speaker read the home page and the main service pages once.
6. **Logo**: vector artwork in `public/logo.svg` (light backgrounds), `public/logo-light.svg` (dark backgrounds), `public/logo-mark.svg` (icon only) and `public/logo.png` (1200px PNG).
7. Set `NEXT_PUBLIC_SITE_URL` to the production domain.

## Google Analytics & Search Console

- Create a GA4 property, copy the Measurement ID (`G-…`) into `NEXT_PUBLIC_GA_ID`.
- Optional: use Google Tag Manager instead via `NEXT_PUBLIC_GTM_ID`.
- Events tracked automatically (`src/components/site/Analytics.tsx`): `whatsapp_click`, `phone_click`, `email_click`, and `generate_lead` (method: whatsapp / phone / form). Each click includes `cta_location` (hero, header, floating, mobile-bar, sidebar…) so you can see which buttons convert. Mark `generate_lead` as a key event in GA4.
- Search Console: add the HTML-tag verification code to `NEXT_PUBLIC_GSC_VERIFICATION`, then submit `https://klelectrician.com/sitemap.xml`.

## Supabase (booking form)

1. Create a project at supabase.com.
2. Run `supabase/migrations/0001_create_leads.sql` in the SQL editor. It creates the `leads` table with Row Level Security that only allows inserts from the website.
3. Copy the project URL and publishable (anon) key into `.env.local`.
4. View bookings in the Supabase table editor. To get notified, add a Database Webhook on `leads` inserts (e.g. to email, Telegram or a WhatsApp Business API).

## SEO / AEO / GEO setup

- **Languages:** English at `/`, Bahasa Melayu at `/ms`, Simplified Chinese at `/zh`. Every page exists in all three, with `hreflang` alternates in the page head and the sitemap. `src/proxy.ts` serves English without a prefix (it rewrites to the internal `/en` routes and redirects anyone who types `/en/...`).
- **Pages:** home, 26 service pages (incl. a Same-Day Electrician page), 44 area pages ("Electrician in Subang Jaya"…), 9 guides, pricing, FAQ, reviews, about, contact, in each language. All statically generated.
- **Structured data:** `Electrician` business with areas served and offer catalogue (site-wide), `Service` + `AggregateOffer` (MYR) on service pages, local `Electrician` on area pages, `FAQPage`, `BreadcrumbList`, `Article` on guides.
- **AI search:** `robots.txt` explicitly allows GPTBot, OAI-SearchBot, PerplexityBot, ClaudeBot, Google-Extended and others; `/llms.txt` summarises the business, services, prices and areas from the same data as the pages. Service pages open with a 40–60 word answer-first paragraph.
- **Sitemap:** `/sitemap.xml`, generated from the data files.

Off-site work that matters as much as the site itself: a complete Google Business Profile (service-area business, same name/phone as the site), steady genuine Google reviews, Bing Places and Apple Business Connect listings, and listings on Recommend.my and local directories with identical name, phone and website.

## Project structure

```
src/
  app/[lang]/             routes (services/[slug], areas/[slug], guides/[slug], pricing, contact…)
  app/                    sitemap, robots, llms.txt, manifest, icons (language-independent)
  proxy.ts                English-without-prefix routing
  i18n/                   language config and the interface dictionaries (en, ms, zh)
  content/<lang>/         the words: services, areas, guides, FAQs, price labels, categories
  data/                   the structure shared by every language: slugs, prices, images, relations
  components/site/        header, footer, logo, language switcher, floating contact, analytics
  components/sections/    reusable page sections
  components/home/        hero carousel
  lib/                    content loader, site config, metadata and JSON-LD builders, Supabase, types
supabase/migrations/      database schema
```
# mypowercarekl
