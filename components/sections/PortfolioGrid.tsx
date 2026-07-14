"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Lightbox } from "@/components/sections/Lightbox";
import { portfolio, portfolioCategoryLabels, type PortfolioCategory } from "@/content/portfolio";
import type { Dictionary, Locale } from "@/lib/i18n/types";
import { cn } from "@/lib/utils";

const categories: PortfolioCategory[] = ["branding", "social", "advertising", "web", "photo-video", "print"];

export function PortfolioGrid({
  locale,
  dict,
  limit,
  showFilters = true,
}: {
  locale: Locale;
  dict: Dictionary;
  limit?: number;
  showFilters?: boolean;
}) {
  const [filter, setFilter] = useState<PortfolioCategory | "all">("all");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const items = useMemo(() => {
    const base = limit ? portfolio.slice(0, limit) : portfolio;
    if (filter === "all") return base;
    return base.filter((p) => p.category === filter);
  }, [filter, limit]);

  return (
    <div>
      {showFilters && (
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setFilter("all")}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-semibold transition-all",
              filter === "all" ? "bg-brand-gradient text-white shadow-glow-sm" : "border border-white/10 text-ink-muted hover:text-white"
            )}
          >
            {dict.portfolio.filterAll}
          </button>
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-semibold transition-all",
                filter === c ? "bg-brand-gradient text-white shadow-glow-sm" : "border border-white/10 text-ink-muted hover:text-white"
              )}
            >
              {portfolioCategoryLabels[c][locale]}
            </button>
          ))}
        </div>
      )}

      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {items.map((item, i) => (
          <Reveal key={item.slug} delay={(i % 6) * 0.05} className="mb-5 break-inside-avoid">
            <button
              onClick={() => setActiveIndex(i)}
              className="group relative block w-full overflow-hidden rounded-2xl border border-white/10 text-start"
              style={{ aspectRatio: `${item.width} / ${item.height}` }}
              aria-label={`${dict.portfolio.viewProject}: ${item.title[locale]}`}
            >
              <Image
                src={item.image}
                alt={item.title[locale]}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/10 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-95" />
              <div className="absolute inset-x-0 bottom-0 translate-y-2 p-5 opacity-90 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-purple-200">
                  {portfolioCategoryLabels[item.category][locale]}
                </span>
                <h3 className="mt-1 text-lg font-bold leading-snug text-white">{item.title[locale]}</h3>
                <p className="mt-0.5 text-sm text-white/70">{item.client[locale]}</p>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      <Lightbox items={items} activeIndex={activeIndex} onClose={() => setActiveIndex(null)} onNavigate={setActiveIndex} locale={locale} dict={dict} />
    </div>
  );
}
