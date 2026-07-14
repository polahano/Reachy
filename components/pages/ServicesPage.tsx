import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHeader } from "@/components/sections/PageHeader";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { CTASection } from "@/components/sections/CTASection";
import { services } from "@/content/services";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/types";

export function ServicesPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <>
      <PageHeader eyebrow={dict.services.eyebrow} title={dict.services.title} subtitle={dict.services.subtitle} />

      <section className="pb-24 sm:pb-32">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 3) * 0.06}>
                <ServiceCard service={service} locale={locale} dict={dict} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection locale={locale} dict={dict} />
    </>
  );
}
