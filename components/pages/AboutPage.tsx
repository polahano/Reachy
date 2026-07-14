import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { PageHeader } from "@/components/sections/PageHeader";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { CTASection } from "@/components/sections/CTASection";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/types";
import { Award, Handshake, Compass, LineChart } from "lucide-react";

const valueIcons = [Award, Handshake, Compass, LineChart];

export function AboutPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const d = dict.about;

  return (
    <>
      <PageHeader eyebrow={d.eyebrow} title={d.title} />

      <section className="pb-8">
        <Container>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 lg:grid-cols-[1.3fr_1fr]">
            <Reveal>
              <p className="text-lg leading-relaxed text-ink-muted">{d.intro}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <GlassCard glow="blue" className="p-7">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-blue-300">{d.missionLabel}</span>
                <p className="mt-3 text-base leading-relaxed text-white/90">{d.mission}</p>
              </GlassCard>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {d.values.map((value, i) => {
              const Icon = valueIcons[i % valueIcons.length];
              return (
                <Reveal key={value.title} delay={i * 0.08}>
                  <GlassCard tilt className="h-full p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient">
                      <Icon className="h-5 w-5 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="mt-4 font-bold">{value.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">{value.desc}</p>
                  </GlassCard>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <ProcessSteps locale={locale} dict={dict} />
      <CTASection locale={locale} dict={dict} />
    </>
  );
}
