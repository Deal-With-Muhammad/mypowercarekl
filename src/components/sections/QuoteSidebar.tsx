import { FaWhatsapp } from "react-icons/fa";
import { PiCheckBold } from "react-icons/pi";
import { getI18n } from "@/i18n/server";
import { site, whatsappLink } from "@/lib/site";

/**
 * Desktop-only quote box beside long pages: one WhatsApp button, no phone
 * button (the number is in the sticky header). Phones rely on the header.
 */
export async function QuoteSidebar({ heading, message }: { heading: string; message: string }) {
  const { t } = await getI18n();
  return (
    <div className="hidden rounded-lg border border-line bg-white p-6 lg:block">
      <p className="text-lg font-bold text-ink">{heading}</p>
      <p className="mt-1 text-sm text-slate-text">{t.sidebar.text}</p>
      <a
        href={whatsappLink(message)}
        target="_blank"
        rel="noopener"
        data-cta="sidebar"
        className="button button--lg mt-5 w-full bg-whatsapp text-white hover:bg-whatsapp-dark"
      >
        <FaWhatsapp className="size-5" aria-hidden /> {t.cta.whatsappUs}
      </a>
      <ul className="mt-5 space-y-2 border-t border-line pt-5 text-sm text-slate-text">
        {t.sidebar.points(site.warrantyMonths, t.hours.short).map((text) => (
          <li key={text} className="flex items-center gap-2">
            <PiCheckBold className="size-4 shrink-0 text-brand" aria-hidden /> {text}
          </li>
        ))}
      </ul>
    </div>
  );
}
