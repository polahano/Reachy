"use client";

import { useEffect } from "react";
import type { Locale } from "@/lib/i18n/types";

const STORAGE_KEY = "reachy-lang";

export function LocaleTracker({ locale }: { locale: Locale }) {
  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      // localStorage unavailable (private browsing, etc.) — safe to ignore
    }
  }, [locale]);

  return null;
}

export function getStoredLocale(): Locale | null {
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    return v === "ar" || v === "en" ? v : null;
  } catch {
    return null;
  }
}
