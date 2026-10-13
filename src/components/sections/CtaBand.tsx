import { FaWhatsapp } from "react-icons/fa";
import { getI18n } from "@/i18n/server";
import { whatsappLink } from "@/lib/site";

/** The one closing call to action at the foot of a page. The phone number is in the header and footer. */
export async function CtaBand({ title, text, message }: { title?: string; text?: string; message?: string }) {
  const { t } = await getI18n();
  return (
    <section className="bg-navy">
      <div className="container-page flex flex-col gap-6 py-12 md:flex-row md:items-center md:justify-between md:py-14">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">{title ?? t.ctaBand.title}</h2>
          <p className="mt-2 text-[1.0625rem] leading-relaxed text-white/75">{text ?? t.ctaBand.text}</p>
        </div>
        <a
          href={whatsappLink(message ?? t.whatsapp.default)}
          target="_blank"
          rel="noopener"
          data-cta="cta-band"
          className="button button--lg self-start bg-whatsapp px-6 text-white hover:bg-whatsapp-dark md:shrink-0 md:self-center"
        >
          <FaWhatsapp aria-hidden /> {t.cta.whatsappQuote}
        </a>
      </div>
    </section>
  );
}
