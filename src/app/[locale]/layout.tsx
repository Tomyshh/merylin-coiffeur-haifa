import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import { LocaleHtmlAttributes } from "@/components/locale-html-attributes";
import { getDictionary, locales, type Locale } from "@/lib/i18n";
import { getSiteUrl, HERO_IMAGE } from "@/lib/site";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);
  const base = getSiteUrl();

  return {
    metadataBase: new URL(base),
    title: dict.meta.title,
    description: dict.meta.description,
    keywords: dict.meta.keywords
      .split(",")
      .map((k) => k.trim())
      .filter(Boolean),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        he: `${base}/he`,
        en: `${base}/en`,
        "x-default": `${base}/he`,
      },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: `${base}/${locale}`,
      siteName: dict.brand,
      locale: locale === "he" ? "he_IL" : "en_US",
      type: "website",
      images: [
        {
          url: HERO_IMAGE,
          width: 1920,
          height: 1080,
          alt: dict.hero.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      images: [HERO_IMAGE],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#0c0c0c",
  width: "device-width",
  initialScale: 1,
};

export default function LocaleLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <LocaleHtmlAttributes />
      {children}
    </>
  );
}
