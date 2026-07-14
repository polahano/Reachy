import { TestimonialsCarousel } from "@/components/sections/TestimonialsCarousel";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { CTASection } from "@/components/sections/CTASection";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/types";

export function TestimonialsPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <>
      <div className="pt-20 sm:pt-24">
        <TestimonialsCarousel locale={locale} dict={dict} />
      </div>
      <TrustedBy dict={dict} />
      <CTASection locale={locale} dict={dict} />
    </>
  );
}
