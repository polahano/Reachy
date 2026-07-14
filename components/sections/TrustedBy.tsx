import { Marquee } from "@/components/ui/Marquee";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { trustedClients } from "@/content/trusted-by";
import type { Dictionary } from "@/lib/i18n/types";

export function TrustedBy({ dict }: { dict: Dictionary }) {
  return (
    <section className="border-y border-white/5 py-12">
      <Container>
        <Reveal>
          <p className="mb-8 text-center text-xs font-bold uppercase tracking-[0.2em] text-ink-soft">
            {dict.trustedBy.label}
          </p>
        </Reveal>
      </Container>
      <Marquee>
        {trustedClients.map((c) => (
          <span
            key={c.name}
            className="shrink-0 text-xl font-bold tracking-tight text-white/25 transition-colors hover:text-white/50 sm:text-2xl"
          >
            {c.name}
          </span>
        ))}
      </Marquee>
    </section>
  );
}
