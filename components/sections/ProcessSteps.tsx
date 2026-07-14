"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import type { Dictionary, Locale } from "@/lib/i18n/types";

export function ProcessSteps({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || !containerRef.current || !lineRef.current) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            end: "bottom 60%",
            scrub: 0.6,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="text-center">
          <Reveal>
            <h2 className="text-3xl font-extrabold sm:text-4xl md:text-5xl">{dict.about.processTitle}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-4 max-w-xl text-lg text-ink-muted">{dict.about.processSubtitle}</p>
          </Reveal>
        </div>

        <div ref={containerRef} className="relative mx-auto mt-16 max-w-2xl">
          <div className="absolute top-0 bottom-0 start-6 w-px bg-white/10 sm:start-8" aria-hidden="true">
            <div ref={lineRef} className="h-full w-full origin-top bg-brand-gradient-vertical" />
          </div>

          <div className="flex flex-col gap-12">
            {dict.about.processSteps.map((step) => (
              <Reveal key={step.label} direction="right" className="relative flex gap-6 ps-16 sm:gap-8 sm:ps-20">
                <div className="absolute start-0 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 bg-navy-900 text-sm font-extrabold text-brand-purple-200 sm:h-16 sm:w-16 sm:text-base">
                  {step.label}
                </div>
                <div className="pt-1 sm:pt-3">
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-muted sm:text-base">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
