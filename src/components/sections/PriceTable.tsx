import Link from "next/link";
import { formatRM } from "@/data/pricing";
import { getI18n } from "@/i18n/server";
import type { PriceRow } from "@/lib/types";

export async function PriceTable({ rows, caption }: { rows: PriceRow[]; caption?: string }) {
  const { t, href } = await getI18n();
  return (
    <div className="overflow-hidden rounded-lg border border-line bg-white">
      <table className="w-full text-left text-[0.95rem]">
        {caption && <caption className="sr-only">{caption}</caption>}
        <thead className="bg-canvas text-xs tracking-wider text-slate-text uppercase">
          <tr>
            <th scope="col" className="px-3 py-3 font-semibold sm:px-4">
              {t.price.job}
            </th>
            <th scope="col" className="px-3 py-3 text-right font-semibold whitespace-nowrap sm:px-4">
              {t.price.priceRM}
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-line">
          {rows.map((r) => (
            <tr key={r.id} className="align-top">
              <td className="px-3 py-3.5 sm:px-4">
                {r.service ? (
                  <Link href={href(`/services/${r.service}`)} className="font-medium text-ink hover:text-brand">
                    {r.item}
                  </Link>
                ) : (
                  <span className="font-medium text-ink">{r.item}</span>
                )}
                {(r.unit || r.note) && (
                  <span className="mt-0.5 block text-xs text-slate-text">
                    {[r.unit, r.note].filter(Boolean).join(" · ")}
                  </span>
                )}
              </td>
              {/* Ranges may break at the dash on very narrow screens; each amount stays whole. */}
              <td className="px-3 py-3.5 text-right font-semibold text-ink sm:px-4">
                {r.to ? (
                  <>
                    <span className="whitespace-nowrap">{formatRM(r.from)} –</span>{" "}
                    <span className="whitespace-nowrap">{formatRM(r.to)}</span>
                  </>
                ) : (
                  <span className="whitespace-nowrap">{t.price.fromCap(formatRM(r.from))}</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
