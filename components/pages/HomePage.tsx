import { Hero } from "@/components/sections/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { PortfolioPreview } from "@/components/sections/PortfolioPreview";
import { TestimonialsCarousel } from "@/components/sections/TestimonialsCarousel";
import { PricingSection } from "@/components/sections/PricingSection";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTASection } from "@/components/sections/CTASection";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/types";

export function HomePage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <>
      <Hero locale={locale} dict={dict} />
      <TrustedBy dict={dict} />
      <ServicesPreview locale={locale} dict={dict} />
      <PortfolioPreview locale={locale} dict={dict} />
      <TestimonialsCarousel locale={locale} dict={dict} />
      <PricingSection locale={locale} dict={dict} />
      <FAQAccordion locale={locale} dict={dict} />
      <CTASection locale={locale} dict={dict} />
    </>
  );
}
