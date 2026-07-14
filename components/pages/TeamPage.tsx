import { TeamSection } from "@/components/sections/TeamSection";
import { CTASection } from "@/components/sections/CTASection";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/types";

export function TeamPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <>
      <div className="pt-20 sm:pt-24">
        <TeamSection locale={locale} dict={dict} />
      </div>
      <CTASection locale={locale} dict={dict} />
    </>
  );
}
