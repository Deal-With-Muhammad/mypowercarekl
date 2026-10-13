import { FaWhatsapp } from "react-icons/fa";
import { PiPhoneFill } from "react-icons/pi";
import { getI18n } from "@/i18n/server";
import { site, telLink, whatsappLink } from "@/lib/site";

export async function CtaBand({ title, text, message }: { title?: string; text?: string; message?: string }) {
  const { t } = await getI18n();
  return (
    <section className="bg-navy">
      <div className="container-page flex flex-col gap-6 py-12 md:flex-row md:items-center md:justify-between md:py-14">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">{title ?? t.ctaBand.title}</h2>
          <p className="mt-2 text-[1.0625rem] leading-relaxed text-white/75">{text ?? t.ctaBand.text}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:shrink-0">
          <a
            href={whatsappLink(message ?? t.whatsapp.default)}
            target="_blank"
            rel="noopener"
            data-cta="cta-band"
            className="button button--lg bg-whatsapp px-6 text-white hover:bg-whatsapp-dark"
          >
            <FaWhatsapp aria-hidden /> {t.cta.whatsappQuote}
          </a>
          <a href={telLink} data-cta="cta-band" className="button button--lg bg-white px-6 text-navy hover:bg-white/90">
            <PiPhoneFill aria-hidden /> {site.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
