"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n/types";
import { Languages } from "lucide-react";

export function LanguageSwitcher({ locale, label, className }: { locale: Locale; label: string; className?: string }) {
  const pathname = usePathname() || "/";

  let target: string;
  if (locale === "ar") {
    // going ar -> en: prefix current path with /en
    target = `/en${pathname === "/" ? "" : pathname}`;
  } else {
    // going en -> ar: strip the /en prefix
    const stripped = pathname.replace(/^\/en/, "");
    target = stripped === "" ? "/" : stripped;
  }

  return (
    <Link
      href={target}
      className={className ?? "inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3.5 py-2 text-sm font-semibold text-white/80 transition-colors hover:border-white/30 hover:text-white"}
      aria-label={label}
    >
      <Languages className="h-4 w-4" aria-hidden="true" />
      {label}
    </Link>
  );
}
