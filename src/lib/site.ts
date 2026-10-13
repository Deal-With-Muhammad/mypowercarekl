// Central business details. Update these before launch: they feed every page,
// the JSON-LD structured data, llms.txt and the WhatsApp/call buttons, so NAP
// (name, address, phone) stays identical everywhere. Words shown to visitors
// (tagline, hours text) live in the dictionaries under src/i18n.

export const site = {
  name: "KL Electrician",
  legalName: "KL Electrician Services",
  domain: "klelectrician.com",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://klelectrician.com",

  // Placeholder contact details: replace with the real business number.
  phoneDisplay: "+60 12-345 6789",
  phoneE164: "+60123456789",
  whatsappNumber: "60123456789", // digits only, country code first
  email: "hello@klelectrician.com",

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

  social: {
    facebook: "https://www.facebook.com/klelectrician",
    instagram: "https://www.instagram.com/klelectrician",
    googleBusiness: "https://g.page/klelectrician",
  },
} as const;

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const telLink = `tel:${site.phoneE164}`;

export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}
