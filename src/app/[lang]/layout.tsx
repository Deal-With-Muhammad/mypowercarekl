import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Plus_Jakarta_Sans } from "next/font/google";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import "../globals.css";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ContactClickTracker } from "@/components/site/Analytics";
import { JsonLd } from "@/components/JsonLd";
import { businessSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import { isLocale, localeInfo, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

// One variable font for every weight keeps it fast. Chinese characters fall
// back to the device's own CJK font (see --font-sans in globals.css).
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin", "latin-ext"], variable: "--font-jakarta", display: "swap" });

const gaId = process.env.NEXT_PUBLIC_GA_ID;
const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const dynamicParams = false;

export async function generateMetadata(props: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await props.params;
  if (!isLocale(lang)) return {};
  const t = getDictionary(lang);
  return {
    metadataBase: new URL(site.url),
    title: { default: t.meta.siteTitle, template: `%s | ${site.name}` },
    description: t.meta.siteDescription,
    applicationName: site.name,
    openGraph: {
      type: "website",
      locale: localeInfo[lang].ogLocale,
      siteName: site.name,
      title: t.meta.siteTitle,
      description: t.meta.siteDescription,
    },
    twitter: { card: "summary_large_image" },
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    verification: process.env.NEXT_PUBLIC_GSC_VERIFICATION
      ? { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION }
      : undefined,
    formatDetection: { telephone: true },
  };
}

export const viewport: Viewport = {
  themeColor: "#0b1b33",
  colorScheme: "light",
};

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    <html lang={localeInfo[lang].htmlLang} className={`light ${jakarta.variable}`} data-theme="light">
      {gtmId ? <GoogleTagManager gtmId={gtmId} /> : null}
      <body className="flex min-h-dvh flex-col bg-background text-foreground">
        <JsonLd data={businessSchema(lang)} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ContactClickTracker />
      </body>
      {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
    </html>
  );
}
