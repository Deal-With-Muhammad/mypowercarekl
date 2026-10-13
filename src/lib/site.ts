// Central business details. Update these before launch: they feed every page,
// the JSON-LD structured data, llms.txt and the WhatsApp/call buttons, so NAP
// (name, address, phone) stays identical everywhere. Words shown to visitors
// (tagline, hours text) live in the dictionaries under src/i18n.

export const site = {
  name: "My Power Care KL",
  // Other ways people write the brand; listed in the structured data so
  // searches for any of them resolve to this business.
  alternateNames: ["MyPowerCare KL", "My Power Care", "MyPowerCareKL"],
  legalName: "My Power Care KL", // replace with the SSM-registered name once known
  domain: "mypowercarekl.com",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://mypowercarekl.com",

  // Placeholder contact details: replace with the real business number.
  phoneDisplay: "+60 12-345 6789",
  phoneE164: "+60123456789",
  whatsappNumber: "60123456789", // digits only, country code first
  email: "hello@mypowercarekl.com",

  // Service-area business: no public street address, matching how a Google
  // Business Profile for a mobile electrician is set up (address hidden,
  // service areas listed instead).
  address: {
    locality: "Kuala Lumpur",
    region: "Wilayah Persekutuan Kuala Lumpur",
    postalCode: "50450",
    country: "MY",
  },
  geo: { latitude: 3.139, longitude: 101.6869 },

  hours: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "08:00",
      closes: "22:00",
    },
  ],

  yearsExperience: 10,
  warrantyMonths: 12,
  foundingYear: 2026,

  // Add each profile's full URL once it exists. Empty ones are left out of
  // the footer and the structured data (a sameAs link to a page that isn't
  // yours confuses search engines).
  social: {
    facebook: "",
    instagram: "",
    googleBusiness: "",
  } as Record<"facebook" | "instagram" | "googleBusiness", string>,
} as const;

/** Social and Google Business Profile URLs that have been filled in. */
export const socialLinks = Object.values(site.social).filter(Boolean);

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const telLink = `tel:${site.phoneE164}`;

export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}
