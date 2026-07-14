"use client";

import { useEffect, useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { testimonials } from "@/content/testimonials";
import type { Dictionary, Locale } from "@/lib/i18n/types";
import { cn } from "@/lib/utils";

export function TestimonialsCarousel({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const isRTL = locale === "ar";

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const t = setInterval(next, 7000);
    return () => clearInterval(t);
  }, []);

  const current = testimonials[index];

  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow={dict.testimonials.eyebrow} title={dict.testimonials.title} subtitle={dict.testimonials.subtitle} />

        <div className="mx-auto mt-16 max-w-3xl">
          <div
            onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
            onTouchEnd={(e) => {
              if (touchStartX.current === null) return;
              const delta = e.changedTouches[0].clientX - touchStartX.current;
              if (Math.abs(delta) > 50) {
                const swipedLeft = delta < 0;
                if (swipedLeft) (isRTL ? prev() : next());
                else (isRTL ? next() : prev());
              }
              touchStartX.current = null;
            }}
          >
            <GlassCard glow="purple" className="relative p-8 sm:p-12">
              <Quote className="h-10 w-10 text-brand-purple-400/40" aria-hidden="true" />
              <div className="mt-4 flex gap-1" aria-hidden="true">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-brand-orange-400 text-brand-orange-400" />
                ))}
              </div>
              <p key={current.id} className="mt-5 min-h-[96px] text-lg leading-relaxed text-white/90 sm:text-xl">
                {current.quote[locale]}
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-gradient text-sm font-bold text-white">
                  {current.initials}
                </div>
                <div>
                  <p className="font-bold text-white">{current.name[locale]}</p>
                  <p className="text-sm text-ink-muted">
                    {current.role[locale]} · {current.company[locale]}
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white transition-colors hover:bg-white/10"
            >
              <ChevronLeft className="h-5 w-5 rtl:rotate-180" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={cn("h-2 rounded-full transition-all", i === index ? "w-6 bg-brand-purple-400" : "w-2 bg-white/20 hover:bg-white/40")}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white transition-colors hover:bg-white/10"
            >
              <ChevronRight className="h-5 w-5 rtl:rotate-180" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
