"use client";

import { useState } from "react";
import { Check, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { pricingCategories, type PricingCategory } from "@/content/pricing";
import { formatPrice } from "@/lib/utils";
import { localePath } from "@/lib/i18n";
import type { Dictionary, Locale } from "@/lib/i18n/types";
import { cn } from "@/lib/utils";

export function PricingSection({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [active, setActive] = useState<PricingCategory["key"]>("social");
  const category = pricingCategories.find((c) => c.key === active)!;

  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow={dict.pricing.eyebrow} title={dict.pricing.title} subtitle={dict.pricing.subtitle} />

        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {pricingCategories.map((c) => (
            <button
              key={c.key}
              onClick={() => setActive(c.key)}
              className={cn(
                "rounded-full px-5 py-2.5 text-sm font-semibold transition-all",
                active === c.key ? "bg-brand-gradient text-white shadow-glow-sm" : "border border-white/10 text-ink-muted hover:text-white"
              )}
            >
              {dict.pricing.categories[c.key]}
            </button>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {category.tiers.map((tier, i) => (
            <Reveal key={tier.name.en} delay={i * 0.1}>
              <GlassCard
                glow={tier.recommended ? "orange" : "purple"}
                className={cn(
                  "relative flex h-full flex-col p-7",
                  tier.recommended && "border-brand-orange-400/40 md:-translate-y-3"
                )}
              >
                {tier.recommended && (
                  <span className="absolute -top-3.5 start-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-brand-gradient px-3.5 py-1.5 text-xs font-bold text-white shadow-glow-sm rtl:translate-x-1/2">
                    <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                    {dict.pricing.recommended}
                  </span>
                )}
                <h3 className="text-lg font-bold text-white/90">{tier.name[locale]}</h3>
                <div className="mt-4 flex items-baseline gap-1.5">
                  <span className="text-xs text-ink-soft">{dict.pricing.startingAt}</span>
                </div>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold">{formatPrice(tier.price, locale)}</span>
                  <span className="text-sm font-semibold text-ink-muted">
                    {dict.pricing.egp}
                    {tier.billing === "monthly" ? ` ${dict.pricing.perMonth}` : ""}
                  </span>
                </div>

                <ul className="mt-7 flex flex-1 flex-col gap-3">
                  {tier.features[locale].map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-ink-muted">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue-300" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Button
                  href={localePath(locale, "contact")}
                  variant={tier.recommended ? "primary" : "secondary"}
                  className="mt-8 w-full"
                >
                  {dict.pricing.requestQuote}
                </Button>
              </GlassCard>
            </Reveal>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-ink-soft">{dict.pricing.note}</p>
      </Container>
    </section>
  );
}
