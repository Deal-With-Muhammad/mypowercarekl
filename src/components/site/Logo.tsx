import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

/**
 * Brand logo (vector artwork in /public). `inverted` is for dark backgrounds.
 * `className` sizes the wrapper (set a width); the artwork scales to fit and
 * can shrink on very narrow screens. `href` is the home page in the current
 * language.
 */
export function Logo({
  href,
  inverted = false,
  className = "w-40",
}: {
  href: string;
  inverted?: boolean;
  className?: string;
}) {
  return (
    <Link href={href} className={`block min-w-0 shrink pressable ${className}`}>
      <Image
        src={inverted ? "/logo-light.svg" : "/logo.svg"}
        alt={site.name}
        width={394}
        height={64}
        unoptimized
        preload={!inverted}
        className="h-auto w-full"
      />
    </Link>
  );
}
