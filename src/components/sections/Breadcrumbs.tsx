import Link from "next/link";
import { PiCaretRightBold, PiHouseDuotone } from "react-icons/pi";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { getI18n } from "@/i18n/server";

/** `href` values are paths without the language prefix; it is added here. */
export type Crumb = { name: string; href: string };

export async function Breadcrumbs({ items, inverted = false }: { items: Crumb[]; inverted?: boolean }) {
  const { t, href } = await getI18n();
  const all = [{ name: t.nav.home, href: "/" }, ...items].map((c) => ({ ...c, href: href(c.href) }));
  return (
    <>
      <JsonLd data={breadcrumbSchema(all)} />
      <nav aria-label={t.nav.breadcrumb} className={`text-sm ${inverted ? "text-white/70" : "text-slate-text"}`}>
        <ol className="flex flex-wrap items-center gap-1.5">
          {all.map((c, i) => {
            const last = i === all.length - 1;
            return (
              <li key={c.href} className="flex items-center gap-1.5">
                {i > 0 && <PiCaretRightBold className="size-3 opacity-50" aria-hidden />}
                {last ? (
                  <span aria-current="page" className={inverted ? "text-white" : "text-ink"}>
                    {c.name}
                  </span>
                ) : (
                  <Link
                    href={c.href}
                    className={`flex items-center gap-1 ${inverted ? "hover:text-white" : "hover:text-brand"}`}
                  >
                    {i === 0 && <PiHouseDuotone className="size-4" aria-hidden />}
                    {c.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
