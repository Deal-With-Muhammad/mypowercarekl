import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { PiPhoneFill, PiReceiptDuotone } from "react-icons/pi";
import { getI18n } from "@/i18n/server";
import { telLink, whatsappLink } from "@/lib/site";

/** Desktop: small floating WhatsApp button. Mobile: fixed bottom action bar. */
export async function FloatingContact() {
  const { t, href } = await getI18n();
  const wa = whatsappLink(t.whatsapp.default);
  return (
    <>
      <a
        href={wa}
        target="_blank"
        rel="noopener"
        data-cta="floating"
        className="fixed right-6 bottom-6 z-40 hidden pressable items-center gap-2 rounded-md bg-whatsapp px-4 py-3 text-sm font-semibold text-white shadow-[0_10px_28px_-10px_rgba(21,128,61,0.7)] transition-colors hover:bg-whatsapp-dark lg:flex"
      >
        <FaWhatsapp className="size-5" aria-hidden />
        {t.cta.whatsapp}
      </a>

      <nav
        aria-label={t.nav.quickContact}
        className="fixed inset-x-0 bottom-0 z-40 grid h-[calc(3.5rem+env(safe-area-inset-bottom))] grid-cols-3 border-t border-line bg-white pb-[env(safe-area-inset-bottom)] lg:hidden"
      >
        <a
          href={telLink}
          data-cta="mobile-bar"
          className="flex flex-col items-center justify-center gap-0.5 text-xs font-semibold text-ink active:bg-canvas"
        >
          <PiPhoneFill className="size-5 text-brand" aria-hidden />
          {t.cta.call}
        </a>
        <a
          href={wa}
          target="_blank"
          rel="noopener"
          data-cta="mobile-bar"
          className="flex flex-col items-center justify-center gap-0.5 bg-whatsapp text-xs font-semibold text-white active:bg-whatsapp-dark"
        >
          <FaWhatsapp className="size-5" aria-hidden />
          {t.cta.whatsapp}
        </a>
        <Link
          href={href("/pricing")}
          className="flex flex-col items-center justify-center gap-0.5 text-xs font-semibold text-ink active:bg-canvas"
        >
          <PiReceiptDuotone className="size-5 text-brand" aria-hidden />
          {t.cta.prices}
        </Link>
      </nav>
    </>
  );
}
