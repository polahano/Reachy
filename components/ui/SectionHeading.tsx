import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "start";
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-4", align === "center" ? "items-center text-center" : "items-start text-start", className)}>
      {eyebrow && (
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-brand-purple-200">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-orange-400" aria-hidden="true" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2 className={cn("max-w-3xl text-3xl font-extrabold leading-[1.25] sm:text-4xl md:text-5xl")}>
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.15}>
          <p className="max-w-2xl text-balance text-base leading-relaxed text-ink-muted sm:text-lg">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}
