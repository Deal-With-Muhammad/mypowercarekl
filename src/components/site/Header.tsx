import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { PiArrowRightBold, PiCaretDownBold, PiLightningFill, PiPhoneFill } from "react-icons/pi";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";
import { LanguageMenu } from "./LanguageSwitcher";
import { ServiceIcon } from "@/components/icons";
import { getI18n } from "@/i18n/server";
import { getServices, getServicesBySlug } from "@/lib/content";
import { formatRM } from "@/data/pricing";
import { site, telLink, whatsappLink } from "@/lib/site";

// Ten of the most-booked jobs, spread across the whole range.
const menuSlugs = [
  "power-tripping-repair",
  "short-circuit-sparking-repair",
  "house-rewiring",
  "socket-switch-installation",
  "db-box-replacement",
  "lighting-installation",
  "water-heater-installation",
  "aircond-power-point",
  "ceiling-fan-installation",
  "ev-charger-installation",
];

export async function Header() {
  const { locale, t, href } = await getI18n();
  const wa = whatsappLink(t.whatsapp.default);
  const total = getServices(locale).length;
  const menu = getServicesBySlug(locale, menuSlugs).map((s) => ({
    slug: s.slug,
    name: s.name,
    price: t.price.from(formatRM(s.priceFrom)),
  }));

  const links = [
    { href: href("/pricing"), label: t.nav.pricing },
    { href: href("/areas"), label: t.nav.areas },
    { href: href("/about"), label: t.nav.about },
    { href: href("/contact"), label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40">
      {/* Mobile-only: the one promise that matters when you need someone today. */}
      <div className="bg-brand text-white lg:hidden">
        <p className="container-page flex h-8 items-center justify-center gap-1.5 text-[0.8rem] font-medium">
          <PiLightningFill className="size-3.5 text-spark" aria-hidden />
          {t.cta.sameDayBar}
        </p>
      </div>

      <div className="border-b border-line/80 bg-white/90 backdrop-blur-md supports-[backdrop-filter]:bg-white/80">
        <div className="container-page flex h-16 items-center justify-between gap-3 sm:gap-6 lg:h-[72px]">
          <Logo href={href("/")} className="w-[176px] sm:w-[210px]" />

          <nav aria-label={t.nav.main} className="hidden lg:block">
            <ul className="flex items-center gap-0.5 text-[0.94rem] font-medium text-ink/80">
              <li className="group relative">
                <Link
                  href={href("/services")}
                  className="flex items-center gap-1.5 rounded-md px-2.5 py-2 whitespace-nowrap transition-colors hover:text-ink xl:px-3"
                >
                  {t.nav.services}
                  <PiCaretDownBold
                    className="size-3 opacity-50 transition-transform duration-200 group-hover:rotate-180"
                    aria-hidden
                  />
                </Link>
                {/* Dropdown: opens on hover or keyboard focus, eases in from slightly above. */}
                <div className="invisible absolute top-full left-1/2 z-50 w-[560px] -translate-x-1/2 pt-3 opacity-0 transition-[opacity,visibility] delay-100 duration-150 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:delay-0 group-hover:visible group-hover:opacity-100 group-hover:delay-0">
                  <div className="-translate-y-1 rounded-lg border border-line bg-white p-3 shadow-[0_16px_40px_-16px_rgba(11,27,51,0.28)] transition-transform duration-200 ease-(--ease-out-strong) group-focus-within:translate-y-0 group-hover:translate-y-0">
                    <ul className="grid grid-cols-2 gap-0.5">
                      {menu.map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={href(`/services/${s.slug}`)}
                            className="flex items-center gap-3 rounded-md px-3 py-2.5 transition-colors hover:bg-canvas"
                          >
                            <span className="grid size-8 shrink-0 place-items-center rounded-md bg-brand-50 text-brand">
                              <ServiceIcon name={s.slug} className="size-[18px]" />
                            </span>
                            <span className="min-w-0">
                              <span className="block truncate text-sm font-medium text-ink">{s.name}</span>
                              <span className="block text-xs text-slate-text">{s.price}</span>
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={href("/services")}
                      className="mt-2 flex items-center justify-between rounded-md bg-canvas px-4 py-3 text-sm font-semibold text-brand transition-colors hover:bg-brand-50"
                    >
                      {t.nav.viewAllServices(total)}
                      <PiArrowRightBold className="size-3.5" aria-hidden />
                    </Link>
                  </div>
                </div>
              </li>
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="block rounded-md px-2.5 py-2 whitespace-nowrap transition-colors hover:text-ink xl:px-3"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* The site's one always-visible contact point: phone and WhatsApp.
              Full number and button on wide screens, compact icons on phones. */}
          <div className="flex items-center gap-1.5">
            <div className="hidden lg:block">
              <LanguageMenu current={locale} label={t.nav.language} />
            </div>
            <a
              href={telLink}
              data-cta="header"
              className="hidden items-center gap-2 rounded-md px-3 py-2 text-[0.94rem] font-semibold whitespace-nowrap text-ink transition-colors hover:text-brand xl:flex"
            >
              <PiPhoneFill className="size-4 text-brand" aria-hidden />
              {site.phoneDisplay}
            </a>
            <a
              href={telLink}
              data-cta="header"
              aria-label={t.cta.callNumber(site.phoneDisplay)}
              className="grid size-10 pressable place-items-center rounded-md bg-brand-50 text-brand xl:hidden"
            >
              <PiPhoneFill className="size-5" aria-hidden />
            </a>
            <a
              href={wa}
              data-cta="header"
              target="_blank"
              rel="noopener"
              className="button hidden bg-whatsapp px-4 text-white hover:bg-whatsapp-dark sm:inline-flex"
            >
              <FaWhatsapp className="size-4" aria-hidden />
              {t.cta.whatsapp}
            </a>
            <a
              href={wa}
              data-cta="header"
              target="_blank"
              rel="noopener"
              aria-label={t.cta.whatsappUs}
              className="grid size-10 pressable place-items-center rounded-md bg-whatsapp text-white sm:hidden"
            >
              <FaWhatsapp className="size-5" aria-hidden />
            </a>
            <MobileNav
              locale={locale}
              services={menu.map(({ slug, name }) => ({ name, href: href(`/services/${slug}`) }))}
              links={[
                { href: href("/pricing"), label: t.nav.pricing },
                { href: href("/areas"), label: t.nav.areasLong },
                { href: href("/guides"), label: t.nav.guides },
                { href: href("/faq"), label: t.nav.faq },
                { href: href("/about"), label: t.nav.about },
                { href: href("/contact"), label: t.nav.contact },
              ]}
              labels={{
                home: href("/"),
                services: t.nav.services,
                allServices: t.nav.allServices,
                allServicesHref: href("/services"),
                openMenu: t.nav.openMenu,
                closeMenu: t.nav.closeMenu,
                menu: t.nav.menu,
                language: t.nav.language,
                hours: t.cta.sameDayHours(t.hours.short),
                call: t.cta.call,
                whatsapp: t.cta.whatsapp,
                whatsappHref: wa,
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
