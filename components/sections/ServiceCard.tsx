"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { getIcon } from "@/lib/icon-map";
import type { Service } from "@/content/services";
import type { Dictionary, Locale } from "@/lib/i18n/types";
import { cn } from "@/lib/utils";

export function ServiceCard({
  service,
  locale,
  dict,
  defaultOpen = false,
}: {
  service: Service;
  locale: Locale;
  dict: Dictionary;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const Icon = getIcon(service.icon);

  return (
    <GlassCard id={service.slug} tilt glow="purple" className="flex h-full flex-col p-6 sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-gradient p-[1.5px]">
          <div className="flex h-full w-full items-center justify-center rounded-[15px] bg-navy-900">
            <Icon className="h-6 w-6 text-white" aria-hidden="true" />
          </div>
        </div>
      </div>

      <h3 className="mt-5 text-xl font-bold">{service.title[locale]}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">{service.short[locale]}</p>

      <button
        onClick={() => setOpen((v) => !v)}
        className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-brand-purple-200 transition-colors hover:text-brand-purple-100"
        aria-expanded={open}
      >
        {dict.services.ctaCard}
        <ChevronDown className={cn("h-4 w-4 transition-transform duration-300", open && "rotate-180")} aria-hidden="true" />
      </button>

      <div
        className={cn(
          "grid overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          open ? "mt-5 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="min-h-0 space-y-4 border-t border-white/10 pt-5">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange-300">{dict.services.problem}</span>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{service.problem[locale]}</p>
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue-300">{dict.services.solution}</span>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{service.solution[locale]}</p>
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-purple-300">{dict.services.benefits}</span>
            <ul className="mt-1.5 space-y-1.5">
              {service.benefits[locale].map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-ink-muted">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-purple-300" aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
