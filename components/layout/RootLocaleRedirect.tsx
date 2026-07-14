"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getStoredLocale } from "@/components/layout/LocaleTracker";

/**
 * Mounted only on the Arabic root homepage ("/"). If the visitor previously
 * chose English, we honor that remembered preference and forward them to
 * /en — without ever fighting a direct/explicit visit to any other page.
 * (Static export has no middleware, so this runs client-side on mount.)
 */
export function RootLocaleRedirect() {
  const router = useRouter();

  useEffect(() => {
    if (getStoredLocale() === "en") {
      router.replace("/en/");
    }
  }, [router]);

  return null;
}
