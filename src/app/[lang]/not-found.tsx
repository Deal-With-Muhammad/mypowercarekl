import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { getI18n } from "@/i18n/server";
import { whatsappLink } from "@/lib/site";

export default async function NotFound() {
  const { t, href } = await getI18n();
  return (
    <div className="container-page flex flex-col items-center py-24 text-center">
      <p className="font-display text-6xl font-bold text-brand">404</p>
      <h1 className="mt-4 text-3xl font-bold">{t.notFound.title}</h1>
      <p className="mt-3 max-w-md text-slate-text">{t.notFound.text}</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href={href("/")} className="button button--lg bg-brand px-6 text-white hover:bg-brand-dark">
          {t.notFound.home}
        </Link>
        <Link href={href("/services")} className="button button--lg button--outline px-6">
          {t.notFound.services}
        </Link>
        <a
          href={whatsappLink(t.whatsapp.default)}
          target="_blank"
          rel="noopener"
          className="button button--lg bg-whatsapp px-6 text-white hover:bg-whatsapp-dark"
        >
          <FaWhatsapp aria-hidden /> {t.cta.whatsappUs}
        </a>
      </div>
    </div>
  );
}
