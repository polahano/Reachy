import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n/types";
import { SITE_URL, localePath } from "@/lib/i18n";

interface BuildMetadataArgs {
  locale: Locale;
  title: string;
  description: string;
  path?: string; // path without locale prefix, e.g. "about"
}

export function buildMetadata({ locale, title, description, path = "" }: BuildMetadataArgs): Metadata {
  const arUrl = `${SITE_URL}${localePath("ar", path)}`;
  const enUrl = `${SITE_URL}${localePath("en", path)}`;
  const canonical = locale === "ar" ? arUrl : enUrl;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        ar: arUrl,
        en: enUrl,
        "x-default": arUrl,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Reachy",
      locale: locale === "ar" ? "ar_EG" : "en_US",
      type: "website",
      images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}/twitter-image.png`],
    },
  };
}

export function organizationJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Reachy",
    alternateName: "ريتشي",
    url: SITE_URL,
    logo: `${SITE_URL}/images/brand/reachy-wordmark.png`,
    description:
      locale === "ar"
        ? "وكالة إبداعية متكاملة متخصصة في البراندنج والتصميم وصناعة المحتوى والتسويق الرقمي."
        : "A full-service creative agency specializing in branding, design, content creation, and digital marketing.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cairo",
      addressCountry: "EG",
    },
    sameAs: [
      "https://facebook.com/reachy",
      "https://instagram.com/reachy",
      "https://linkedin.com/company/reachy",
      "https://tiktok.com/@reachy",
      "https://behance.net/reachy",
    ],
  };
}
