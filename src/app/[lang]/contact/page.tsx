import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";
import { PiClockDuotone, PiEnvelopeSimpleDuotone, PiMapPinDuotone, PiPhoneDuotone } from "react-icons/pi";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { ContactForm } from "@/components/contact/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { getAreas, getServices, shortAreaName } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";
import { absoluteUrl, site, telLink, whatsappLink } from "@/lib/site";
import { isLocale, localePath } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export async function generateMetadata(props: PageProps<"/[lang]/contact">): Promise<Metadata> {
  const { lang } = await props.params;
  if (!isLocale(lang)) return {};
  const t = getDictionary(lang);
  return pageMetadata({ locale: lang, path: "/contact", title: t.contact.metaTitle, description: t.contact.metaDescription });
}

export default async function ContactPage(props: PageProps<"/[lang]/contact">) {
  const { lang } = await props.params;
  if (!isLocale(lang)) notFound();
  const t = getDictionary(lang);

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: absoluteUrl(localePath(lang, "/contact")),
    name: t.contact.schemaName,
    mainEntity: { "@id": absoluteUrl("/#business") },
  };

  const channels = [
    {
      Icon: FaWhatsapp,
      title: t.contact.whatsappTitle,
      value: site.phoneDisplay,
      href: whatsappLink(t.whatsapp.default),
      note: t.contact.whatsappNote,
      external: true,
    },
    { Icon: PiPhoneDuotone, title: t.contact.callTitle, value: site.phoneDisplay, href: telLink, note: t.contact.callNote },
    {
      Icon: PiEnvelopeSimpleDuotone,
      title: t.contact.emailTitle,
      value: site.email,
      href: `mailto:${site.email}`,
      note: t.contact.emailNote,
    },
  ];

  return (
    <>
      <JsonLd data={contactSchema} />
      <section className="border-b border-line bg-canvas">
        <div className="container-page py-10 lg:py-14">
          <Breadcrumbs items={[{ name: t.nav.contact, href: "/contact" }]} />
          <h1 className="mt-6 max-w-3xl text-3xl leading-tight font-extrabold sm:text-4xl lg:text-[2.75rem]">
            {t.contact.h1}
          </h1>
          <p className="mt-4 max-w-2xl text-[1.0625rem] leading-relaxed text-slate-text">{t.contact.intro}</p>
        </div>
      </section>

      <div className="container-page grid grid-cols-1 gap-10 py-14 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-4">
          {channels.map(({ Icon, title, value, href, note, external }) => (
            <a
              key={title}
              href={href}
              data-cta="contact-page"
              {...(external ? { target: "_blank", rel: "noopener" } : {})}
              className="flex items-start gap-4 rounded-lg border border-line bg-white p-5 hover:border-brand/40"
            >
              <span className="grid size-12 shrink-0 place-items-center rounded-md bg-brand-50 text-brand">
                <Icon className="size-6" aria-hidden />
              </span>
              <span className="min-w-0">
                <span className="block text-sm text-slate-text">{title}</span>
                <span className="block text-lg font-semibold break-all text-ink sm:text-xl">{value}</span>
                <span className="mt-0.5 block text-sm text-slate-text">{note}</span>
              </span>
            </a>
          ))}
          <div className="flex items-start gap-4 rounded-lg border border-line bg-white p-5">
            <span className="grid size-12 shrink-0 place-items-center rounded-md bg-brand-50 text-brand">
              <PiClockDuotone className="size-6" aria-hidden />
            </span>
            <span>
              <span className="block text-sm text-slate-text">{t.contact.hoursTitle}</span>
              <span className="block font-semibold text-ink">{t.hours.display}</span>
              <span className="block text-sm text-slate-text">{t.contact.hoursNote}</span>
            </span>
          </div>
          <div className="flex items-start gap-4 rounded-lg border border-line bg-white p-5">
            <span className="grid size-12 shrink-0 place-items-center rounded-md bg-brand-50 text-brand">
              <PiMapPinDuotone className="size-6" aria-hidden />
            </span>
            <span>
              <span className="block text-sm text-slate-text">{t.contact.coverageTitle}</span>
              <span className="block font-semibold text-ink">{t.contact.coverageValue}</span>
              <span className="block text-sm text-slate-text">{t.contact.coverageNote}</span>
            </span>
          </div>
        </div>

        <ContactForm
          locale={lang}
          sourcePage={localePath(lang, "/contact")}
          privacyHref={localePath(lang, "/privacy")}
          defaultMessage={t.whatsapp.default}
          labels={t.form}
          services={getServices(lang).map((s) => ({ id: s.slug, name: s.name }))}
          areas={getAreas(lang).map((a) => ({ id: a.slug, name: shortAreaName(a.name) }))}
        />
      </div>
    </>
  );
}
