import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { PiStarFill } from "react-icons/pi";
import { averageRating, reviews as allReviews } from "@/data/reviews";
import { getI18n } from "@/i18n/server";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Review } from "@/lib/types";
import { SectionHeading } from "./SectionHeading";

const avatarColours = ["#1d5bd6", "#0f766e", "#b45309", "#7c3aed", "#be123c", "#0369a1"];

function Stars({ rating, label, className = "size-4" }: { rating: number; label: string; className?: string }) {
  return (
    <span role="img" className="flex text-spark" aria-label={label}>
      {Array.from({ length: 5 }, (_, i) => (
        <PiStarFill key={i} className={`${className} ${i < rating ? "" : "text-line"}`} aria-hidden />
      ))}
    </span>
  );
}

export function ReviewCard({ review, index, t }: { review: Review; index: number; t: Dictionary }) {
  return (
    <figure className="flex h-full flex-col rounded-lg border border-line bg-white p-5">
      <div className="flex items-center gap-3">
        <span
          className="grid size-10 shrink-0 place-items-center rounded-full font-semibold text-white"
          style={{ backgroundColor: avatarColours[index % avatarColours.length] }}
          aria-hidden
        >
          {review.name.charAt(0)}
        </span>
        <figcaption className="min-w-0 flex-1">
          <p className="truncate font-semibold text-ink">{review.name}</p>
          <p className="text-xs text-slate-text">
            {review.area} · {review.when}
          </p>
        </figcaption>
        <FcGoogle className="size-5 shrink-0" aria-label={t.reviews.google} />
      </div>
      <div className="mt-3 flex items-center gap-2">
        <Stars rating={review.rating} label={t.reviews.stars(review.rating)} />
        <span className="text-xs font-medium text-slate-text">{review.service}</span>
      </div>
      <blockquote className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-ink/85">{review.text}</blockquote>
    </figure>
  );
}

export function RatingSummary({ count, t }: { count: number; t: Dictionary }) {
  const avg = averageRating();
  return (
    <div className="flex items-center gap-4 rounded-lg border border-line bg-white px-5 py-4">
      <FcGoogle className="size-9 shrink-0" aria-hidden />
      <div>
        <div className="flex items-center gap-2">
          <span className="font-display text-3xl font-bold text-ink">{avg.toFixed(1)}</span>
          <Stars rating={Math.round(avg)} label={t.reviews.stars(Math.round(avg))} className="size-5" />
        </div>
        <p className="text-sm text-slate-text">{t.reviews.basedOn(count)}</p>
      </div>
    </div>
  );
}

export async function ReviewsSection({
  title,
  areaName,
  limit = 6,
}: {
  title?: string;
  areaName?: string;
  limit?: number;
}) {
  const { t, href } = await getI18n();
  // Show reviews from the requested area first, then the rest.
  const sorted = areaName
    ? [...allReviews].sort((a, b) => Number(b.area === areaName) - Number(a.area === areaName))
    : allReviews;
  const shown = sorted.slice(0, limit);

  return (
    <section className="bg-canvas py-16 sm:py-20">
      <div className="container-page">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow={t.reviews.eyebrow} title={title ?? t.reviews.title} />
          <RatingSummary count={allReviews.length} t={t} />
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((r, i) => (
            <ReviewCard key={r.name} review={r} index={i} t={t} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href={href("/reviews")} className="font-semibold text-brand hover:underline">
            {t.reviews.readAll} →
          </Link>
        </div>
      </div>
    </section>
  );
}
