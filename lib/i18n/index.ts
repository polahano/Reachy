import { ar } from "./dictionaries/ar";
import { en } from "./dictionaries/en";
import type { Locale, Dictionary } from "./types";

export const dictionaries: Record<Locale, Dictionary> = { ar, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export * from "./types";

export const SITE_URL = "https://reachy.example.com"; // TODO: replace with real production domain
export const WHATSAPP_NUMBER = "201000000000"; // Placeholder — replace with the real Reachy WhatsApp number
export const CONTACT_EMAIL = "hello@reachy.example.com"; // Placeholder
export const CONTACT_PHONE_DISPLAY = "+20 100 000 0000"; // Placeholder

export const SOCIAL_LINKS = {
  facebook: "https://facebook.com/reachy", // Placeholder
  instagram: "https://instagram.com/reachy", // Placeholder
  linkedin: "https://linkedin.com/company/reachy", // Placeholder
  tiktok: "https://tiktok.com/@reachy", // Placeholder
  behance: "https://behance.net/reachy", // Placeholder
};

export function localeDir(locale: Locale): "rtl" | "ltr" {
  return locale === "ar" ? "rtl" : "ltr";
}

export function localePath(locale: Locale, path: string = ""): string {
  const clean = path.replace(/^\/+/, "");
  if (locale === "ar") return `/${clean}`;
  return `/en/${clean}`;
}
