import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { localePath } from "@/lib/i18n";
import type { Dictionary, Locale } from "@/lib/i18n/types";

export function PortfolioPreview({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow={dict.portfolio.eyebrow} title={dict.portfolio.title} subtitle={dict.portfolio.subtitle} />
        <div className="mt-16">
          <PortfolioGrid locale={locale} dict={dict} limit={6} showFilters={false} />
        </div>
        <Reveal className="mt-10 flex justify-center">
          <Button href={localePath(locale, "portfolio")} variant="outline" size="lg" showArrow>
            {dict.portfolio.viewAll}
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
