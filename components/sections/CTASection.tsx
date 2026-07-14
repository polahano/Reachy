import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { WHATSAPP_NUMBER, localePath } from "@/lib/i18n";
import type { Dictionary, Locale } from "@/lib/i18n/types";

export function CTASection({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(dict.whatsapp.defaultMessage)}`;

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal scale>
          <GlassCard glow="purple" className="relative overflow-hidden px-6 py-16 text-center sm:px-16">
            <div className="pointer-events-none absolute -top-24 start-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-aurora-2 blur-3xl" aria-hidden="true" />
            <h2 className="relative text-3xl font-extrabold sm:text-4xl md:text-5xl">{dict.cta.title}</h2>
            <p className="relative mx-auto mt-4 max-w-xl text-lg text-ink-muted">{dict.cta.subtitle}</p>
            <div className="relative mt-9 flex flex-wrap items-center justify-center gap-4">
              <Button href={localePath(locale, "contact")} size="lg" showArrow>
                {dict.cta.primary}
              </Button>
              <Button href={waHref} variant="secondary" size="lg">
                {dict.cta.secondary}
              </Button>
            </div>
          </GlassCard>
        </Reveal>
      </Container>
    </section>
  );
}
