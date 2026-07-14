import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/sections/PageHeader";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { CTASection } from "@/components/sections/CTASection";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/types";

export function PortfolioPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <>
      <PageHeader eyebrow={dict.portfolio.eyebrow} title={dict.portfolio.title} subtitle={dict.portfolio.subtitle} />

      <section className="pb-24 sm:pb-32">
        <Container>
          <PortfolioGrid locale={locale} dict={dict} />
        </Container>
      </section>

      <CTASection locale={locale} dict={dict} />
    </>
  );
}
