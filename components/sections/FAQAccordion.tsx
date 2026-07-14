"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { faqItems } from "@/content/faq";
import { localePath } from "@/lib/i18n";
import type { Dictionary, Locale } from "@/lib/i18n/types";
import { cn } from "@/lib/utils";

export function FAQAccordion({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id ?? null);

  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow={dict.faq.eyebrow} title={dict.faq.title} subtitle={dict.faq.subtitle} />

        <div className="mx-auto mt-14 max-w-3xl divide-y divide-white/10 rounded-3xl border border-white/10 bg-white/[0.02]">
          {faqItems.map((item, i) => {
            const isOpen = openId === item.id;
            return (
              <Reveal key={item.id} delay={i * 0.04}>
                <div>
                  <button
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-start sm:px-8"
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-white">{item.question[locale]}</span>
                    <Plus className={cn("h-5 w-5 shrink-0 text-brand-purple-300 transition-transform duration-300", isOpen && "rotate-45")} aria-hidden="true" />
                  </button>
                  <div className={cn("grid overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]", isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
                    <div className="min-h-0">
                      <p className="px-6 pb-6 text-sm leading-relaxed text-ink-muted sm:px-8">{item.answer[locale]}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-10 flex flex-col items-center gap-3">
          <p className="text-ink-muted">{dict.faq.stillHave}</p>
          <Button href={localePath(locale, "contact")} variant="outline" showArrow>
            {dict.faq.contactUs}
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
