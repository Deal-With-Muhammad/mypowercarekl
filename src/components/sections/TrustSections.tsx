import {
  PiCalendarCheckDuotone,
  PiChatCircleTextDuotone,
  PiClockCountdownDuotone,
  PiMedalDuotone,
  PiReceiptDuotone,
  PiShieldCheckDuotone,
} from "react-icons/pi";
import { site } from "@/lib/site";
import { formatRM, visitFee } from "@/data/pricing";
import { getI18n } from "@/i18n/server";
import { SectionHeading } from "./SectionHeading";

export async function TrustBar() {
  const { t } = await getI18n();
  const promises = [
    { Icon: PiClockCountdownDuotone, ...t.promises.sameDay },
    { Icon: PiReceiptDuotone, ...t.promises.upfront },
    { Icon: PiShieldCheckDuotone, ...t.promises.warranty(site.warrantyMonths) },
    { Icon: PiMedalDuotone, ...t.promises.experience(site.yearsExperience) },
  ];
  return (
    <section aria-label={t.promises.trustLabel} className="border-b border-line bg-white">
      <ul className="container-page grid grid-cols-2 gap-x-4 gap-y-5 py-6 sm:py-7 lg:grid-cols-4">
        {promises.map(({ Icon, title, text }) => (
          <li key={title} className="flex items-center gap-3">
            <Icon className="size-7 shrink-0 text-brand sm:size-9" aria-hidden />
            <div>
              <p className="text-[0.95rem] leading-tight font-semibold text-ink">{title}</p>
              <p className="mt-0.5 hidden text-sm text-slate-text sm:block">{text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export async function ProcessSteps({ className = "" }: { className?: string }) {
  const { t } = await getI18n();
  const icons = [PiChatCircleTextDuotone, PiCalendarCheckDuotone, PiShieldCheckDuotone];
  const steps = t.process.steps(formatRM(visitFee), site.warrantyMonths);
  return (
    <section className={`py-16 sm:py-20 ${className}`}>
      <div className="container-page">
        <SectionHeading eyebrow={t.process.eyebrow} title={t.process.title} align="center" />
        <ol className="mt-10 grid gap-8 md:grid-cols-3 md:gap-6">
          {steps.map(({ title, text }, i) => {
            const Icon = icons[i];
            return (
              <li key={title} className="text-center">
                <span className="relative mx-auto grid size-14 place-items-center rounded-lg bg-brand-50 text-brand">
                  <Icon className="size-7" aria-hidden />
                  <span className="absolute -top-2 -right-2 grid size-6 place-items-center rounded-md bg-brand text-xs font-bold text-white">
                    {i + 1}
                  </span>
                </span>
                <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                <p className="mx-auto mt-1.5 max-w-xs text-[0.95rem] leading-relaxed text-slate-text">{text}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
