import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="pb-16 pt-36 sm:pt-40">
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-brand-purple-200">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-orange-400" aria-hidden="true" />
              {eyebrow}
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="text-4xl font-extrabold leading-[1.2] sm:text-5xl md:text-6xl">{title}</h1>
          </Reveal>
          {subtitle && (
            <Reveal delay={0.15}>
              <p className="max-w-2xl text-lg leading-relaxed text-ink-muted">{subtitle}</p>
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
