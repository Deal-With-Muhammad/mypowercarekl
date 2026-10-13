import Link from "next/link";
import { PiArrowRightBold } from "react-icons/pi";
import { ServiceIcon } from "@/components/icons";
import { formatRM } from "@/data/pricing";
import { getI18n } from "@/i18n/server";
import type { Service } from "@/lib/types";

export async function ServiceCard({ service }: { service: Service }) {
  const { t, href } = await getI18n();
  return (
    <Link
      href={href(`/services/${service.slug}`)}
      className="group flex h-full pressable flex-col rounded-lg border border-line bg-white p-5 hover:border-brand/40 hover:shadow-[0_14px_34px_-18px_rgba(29,91,214,0.45)]"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="grid size-12 place-items-center rounded-md bg-brand-50 text-brand">
          <ServiceIcon name={service.slug} className="size-7" />
        </span>
        <span className="rounded-sm bg-canvas px-2 py-1 text-xs font-semibold text-ink">
          {t.price.from(formatRM(service.priceFrom))}
        </span>
      </div>
      <h3 className="mt-4 text-lg leading-snug font-bold group-hover:text-brand">{service.name}</h3>
      <p className="mt-1.5 flex-1 text-[0.95rem] leading-relaxed text-slate-text">{service.summary}</p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
        {t.price.detailsPrices}
        <PiArrowRightBold className="size-3.5 transition group-hover:translate-x-0.5" aria-hidden />
      </span>
    </Link>
  );
}

/** Compact tile for scannable grids: icon, name and price only. */
export async function ServiceTile({ service }: { service: Service }) {
  const { t, href } = await getI18n();
  return (
    <Link
      href={href(`/services/${service.slug}`)}
      className="group flex pressable items-center gap-3.5 rounded-lg border border-line bg-white p-4 hover:border-brand/40"
    >
      <span className="grid size-11 shrink-0 place-items-center rounded-md bg-brand-50 text-brand">
        <ServiceIcon name={service.slug} className="size-6" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block leading-snug font-semibold text-ink group-hover:text-brand">{service.name}</span>
        <span className="mt-0.5 block text-sm text-slate-text">{t.price.from(formatRM(service.priceFrom))}</span>
      </span>
      <PiArrowRightBold
        className="size-4 shrink-0 text-slate-text/60 transition-transform group-hover:translate-x-0.5 group-hover:text-brand"
        aria-hidden
      />
    </Link>
  );
}
