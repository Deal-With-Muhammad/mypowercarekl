import Link from "next/link";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { PiClockDuotone, PiEnvelopeSimpleDuotone, PiPhoneDuotone } from "react-icons/pi";
import { Logo } from "./Logo";
import { LanguageButtons } from "./LanguageSwitcher";
import { getI18n } from "@/i18n/server";
import { getAreas, getServicesBySlug, shortAreaName } from "@/lib/content";
import { site, telLink, whatsappLink } from "@/lib/site";

const footerServices = [
  "same-day-electrician",
  "power-tripping-repair",
  "house-rewiring",
  "db-box-replacement",
  "lighting-installation",
  "light-repair",
  "water-heater-installation",
  "ceiling-fan-installation",
  "ev-charger-installation",
];

function Column({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="mb-4 text-sm font-semibold text-white">{title}</h2>
      <ul className="space-y-2.5 text-sm">{children}</ul>
    </div>
  );
}

export async function Footer() {
  const { locale, t, href } = await getI18n();
  const areas = getAreas(locale);
  const featuredAreas = areas.filter((a) => a.featured).slice(0, 9);
  const services = getServicesBySlug(locale, footerServices);

  const company = [
    { href: href("/pricing"), label: t.nav.priceList },
    { href: href("/reviews"), label: t.nav.reviews },
    { href: href("/guides"), label: t.nav.guides },
    { href: href("/faq"), label: t.nav.faq },
    { href: href("/about"), label: t.nav.about },
    { href: href("/contact"), label: t.nav.contact },
    { href: href("/privacy"), label: t.nav.privacy },
  ];

  return (
    <footer className="bg-navy text-white/65">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_0.8fr]">
        <div>
          <Logo href={href("/")} inverted className="w-[160px]" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed">{t.footer.blurb}</p>
          <ul className="mt-6 space-y-3 text-sm">
            <li className="flex items-center gap-2.5">
              <PiPhoneDuotone className="size-5 shrink-0 text-[#8fb3ff]" aria-hidden />
              <a href={telLink} data-cta="footer" className="transition-colors hover:text-white">
                {site.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <PiEnvelopeSimpleDuotone className="size-5 shrink-0 text-[#8fb3ff]" aria-hidden />
              <a href={`mailto:${site.email}`} className="transition-colors hover:text-white">
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <PiClockDuotone className="size-5 shrink-0 text-[#8fb3ff]" aria-hidden />
              {t.hours.display}
            </li>
          </ul>
          <div className="mt-6 flex gap-2">
            {[
              { href: site.social.facebook, label: "Facebook", Icon: FaFacebookF },
              { href: site.social.instagram, label: "Instagram", Icon: FaInstagram },
              { href: whatsappLink(t.whatsapp.default), label: "WhatsApp", Icon: FaWhatsapp },
            ].map(({ href: link, label, Icon }) => (
              <a
                key={label}
                href={link}
                target="_blank"
                rel="noopener"
                aria-label={label}
                data-cta="footer"
                className="grid size-9 pressable place-items-center rounded-md bg-white/10 text-white transition-colors hover:bg-white/20"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <Column title={t.footer.services}>
          {services.map((s) => (
            <li key={s.slug}>
              <Link href={href(`/services/${s.slug}`)} className="transition-colors hover:text-white">
                {s.name}
              </Link>
            </li>
          ))}
          <li>
            <Link href={href("/services")} className="font-medium text-[#8fb3ff] transition-colors hover:text-white">
              {t.nav.allServices} →
            </Link>
          </li>
        </Column>

        <Column title={t.footer.areas}>
          {featuredAreas.map((a) => (
            <li key={a.slug}>
              <Link href={href(`/areas/${a.slug}`)} className="transition-colors hover:text-white">
                {t.area.linkName(shortAreaName(a.name))}
              </Link>
            </li>
          ))}
          <li>
            <Link href={href("/areas")} className="font-medium text-[#8fb3ff] transition-colors hover:text-white">
              {t.nav.allAreas(areas.length)} →
            </Link>
          </li>
        </Column>

        <Column title={t.footer.company}>
          {company.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="transition-colors hover:text-white">
                {l.label}
              </Link>
            </li>
          ))}
        </Column>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-5 py-6 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
          <div className="w-full max-w-sm">
            <LanguageButtons current={locale} label={t.footer.languages} tone="dark" />
          </div>
          <div className="flex flex-col gap-1 md:items-end">
            <p>
              © {new Date().getFullYear()} {site.legalName}
            </p>
            <p>{t.footer.currency}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
