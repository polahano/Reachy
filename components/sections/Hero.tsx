"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { stats } from "@/content/stats";
import { portfolio } from "@/content/portfolio";
import { localePath } from "@/lib/i18n";
import type { Dictionary, Locale } from "@/lib/i18n/types";

function FloatingCard({
  src,
  alt,
  className,
  mx,
  my,
  factor = 1,
  tilt = 0,
  delay = 0,
}: {
  src: string;
  alt: string;
  className?: string;
  mx: MotionValue<number>;
  my: MotionValue<number>;
  factor?: number;
  tilt?: number;
  delay?: number;
}) {
  const x = useTransform(mx, (v) => v * factor);
  const y = useTransform(my, (v) => v * factor);

  return (
    <motion.div
      style={{ x, y, ["--tilt" as string]: `${tilt}deg` }}
      initial={{ opacity: 0, y: 40, rotate: tilt - 4 }}
      animate={{ opacity: 1, y: 0, rotate: tilt }}
      transition={{ duration: 0.9, delay: 0.4 + delay, ease: [0.16, 1, 0.3, 1] }}
      className={`animate-float absolute ${className}`}
    >
      <div className="glass glass-sheen overflow-hidden rounded-2xl p-2 shadow-card">
        <div className="relative h-full w-full overflow-hidden rounded-xl">
          <Image src={src} alt={alt} fill sizes="280px" className="object-cover" />
        </div>
      </div>
    </motion.div>
  );
}

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const ref = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const mx = useSpring(rawX, { stiffness: 60, damping: 20 });
  const my = useSpring(rawY, { stiffness: 60, damping: 20 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    rawX.set(((e.clientX - rect.left) / rect.width - 0.5) * 30);
    rawY.set(((e.clientY - rect.top) / rect.height - 0.5) * 30);
  }

  const mockups = [portfolio[8], portfolio[1], portfolio[6]]; // coffee rebrand, fintech, furniture — varied crops

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden pb-20 pt-36 sm:pt-40 lg:pb-28 lg:pt-48"
    >
      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative z-10 flex flex-col items-start gap-7 text-start">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-brand-purple-200"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand-orange-400 animate-pulse-glow" aria-hidden="true" />
              {dict.hero.eyebrow}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl font-extrabold leading-[1.15] sm:text-5xl md:text-6xl xl:text-[68px]"
            >
              {dict.hero.headline}
              <br />
              <GradientText animated as="span">
                {dict.hero.headlineHighlight}
              </GradientText>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-xl text-lg leading-relaxed text-ink-muted"
            >
              {dict.hero.subhead}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4"
            >
              <Button href={localePath(locale, "contact")} size="lg" showArrow>
                {dict.hero.ctaPrimary}
              </Button>
              <Button href={localePath(locale, "portfolio")} variant="secondary" size="lg">
                {dict.hero.ctaSecondary}
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-4 grid w-full grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4"
            >
              {stats.map((s) => (
                <div key={s.label.en} className="flex flex-col gap-1">
                  <span className="text-2xl font-extrabold sm:text-3xl">
                    <AnimatedCounter value={s.value} suffix={s.suffix} locale={locale} />
                  </span>
                  <span className="text-xs leading-snug text-ink-soft sm:text-sm">{s.label[locale]}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="relative hidden h-[460px] lg:block" aria-hidden="true">
            <FloatingCard
              src={mockups[0].image}
              alt=""
              mx={mx}
              my={my}
              factor={0.6}
              tilt={-6}
              delay={0}
              className="start-4 top-2 h-64 w-52"
            />
            <FloatingCard
              src={mockups[1].image}
              alt=""
              mx={mx}
              my={my}
              factor={1}
              tilt={4}
              delay={0.15}
              className="end-0 top-24 h-56 w-56"
            />
            <FloatingCard
              src={mockups[2].image}
              alt=""
              mx={mx}
              my={my}
              factor={0.8}
              tilt={-3}
              delay={0.3}
              className="start-16 top-[300px] h-48 w-40"
            />
          </div>
        </div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="mt-16 hidden justify-center sm:flex"
      >
        <div className="flex flex-col items-center gap-2 text-ink-soft">
          <span className="text-xs font-medium uppercase tracking-[0.2em]">{dict.hero.scrollHint}</span>
          <ChevronDown className="h-4 w-4 animate-bounce rtl:rotate-0" aria-hidden="true" />
        </div>
      </motion.div>
    </section>
  );
}
