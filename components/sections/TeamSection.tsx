import { Linkedin, Instagram, Palette } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { team } from "@/content/team";
import type { Dictionary, Locale } from "@/lib/i18n/types";

const accentClasses = {
  blue: "from-brand-blue-500 to-brand-indigo-500",
  purple: "from-brand-purple-500 to-brand-indigo-500",
  orange: "from-brand-orange-500 to-brand-purple-500",
};

export function TeamSection({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow={dict.team.eyebrow} title={dict.team.title} subtitle={dict.team.subtitle} />

        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
          {team.map((member, i) => (
            <Reveal key={member.slug} delay={i * 0.1}>
              <GlassCard tilt glow={member.accent} className="flex h-full flex-col items-center p-8 text-center">
                <div
                  className={`flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br text-2xl font-extrabold text-white ${accentClasses[member.accent]}`}
                >
                  {member.initials}
                </div>
                <h3 className="mt-5 text-xl font-bold">{member.name[locale]}</h3>
                <p className="mt-1 text-sm font-semibold text-brand-purple-200">{member.role[locale]}</p>
                <p className="mt-4 text-sm leading-relaxed text-ink-muted">{member.bio[locale]}</p>
                <div className="mt-5 flex items-center gap-3">
                  {member.socials.linkedin && (
                    <a href={member.socials.linkedin} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/70 transition-colors hover:text-white" aria-label="LinkedIn">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                  {member.socials.behance && (
                    <a href={member.socials.behance} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/70 transition-colors hover:text-white" aria-label="Behance">
                      <Palette className="h-4 w-4" />
                    </a>
                  )}
                  {member.socials.instagram && (
                    <a href={member.socials.instagram} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/70 transition-colors hover:text-white" aria-label="Instagram">
                      <Instagram className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
