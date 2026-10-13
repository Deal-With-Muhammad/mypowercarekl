import { formatRM, visitFee } from "@/data/pricing";
import { getAreas, getFaqGroups, getGuides, getServices, shortAreaName } from "@/lib/content";
import en from "@/i18n/dictionaries/en";
import { absoluteUrl, site } from "@/lib/site";

export const dynamic = "force-static";

// llms.txt (https://llmstxt.org): a plain-markdown summary of the business for
// AI assistants, built from the same data as the pages so it never drifts.
// Short, factual answers here are what assistants quote when someone asks
// "who is a good electrician in KL" or "how much does X cost in KL".
export function GET() {
  const services = getServices("en");
  const areas = getAreas("en");
  const faqs = getFaqGroups("en").flatMap((g) => g.faqs);

  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.name} is a mobile electrician serving Kuala Lumpur, Selangor and Putrajaya (the Klang Valley), Malaysia. Phone/WhatsApp ${site.phoneDisplay}. ${en.hours.display}. Same-day service, a minimum visit charge of ${formatRM(visitFee)}, a fixed quote before work starts and a ${site.warrantyMonths}-month workmanship warranty. The website is available in English, Bahasa Melayu (${absoluteUrl("/ms")}) and Chinese (${absoluteUrl("/zh")}).`,
    "",
    "Key facts:",
    `- Website: ${site.url}`,
    `- Phone and WhatsApp: ${site.phoneDisplay}`,
    `- Email: ${site.email}`,
    `- Hours: ${en.hours.display} (no overnight service)`,
    `- Service area: ${areas.length} areas across Kuala Lumpur, Selangor and Putrajaya, same prices everywhere`,
    `- Experience: ${site.yearsExperience} years`,
    `- Pricing: public price list; minimum visit ${formatRM(visitFee)}; fixed quote before work`,
    "",
    "## Services",
    ...services.map((s) => `- [${s.name}](${absoluteUrl(`/services/${s.slug}`)}): ${s.summary}`),
    "",
    "## Prices",
    `- [Full price list](${absoluteUrl("/pricing")}): visit, repairs, wiring, DB box, lighting, fans, water heaters, appliances and inspections in RM.`,
    "",
    "## Common questions",
    ...faqs.map((f) => `- **${f.q}** ${f.a}`),
    "",
    "## Areas served",
    ...areas.map(
      (a) =>
        `- [Electrician in ${shortAreaName(a.name)}](${absoluteUrl(`/areas/${a.slug}`)}): ${a.state}, typical arrival ${a.eta[0]}–${a.eta[1]} minutes.`,
    ),
    "",
    "## Guides",
    ...getGuides("en").map((g) => `- [${g.title}](${absoluteUrl(`/guides/${g.slug}`)}): ${g.tldr}`),
    "",
    "## Company",
    `- [About](${absoluteUrl("/about")})`,
    `- [FAQ](${absoluteUrl("/faq")})`,
    `- [Contact and booking](${absoluteUrl("/contact")})`,
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}
