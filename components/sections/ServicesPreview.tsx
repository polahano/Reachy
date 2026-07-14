import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { services } from "@/content/services";
import { localePath } from "@/lib/i18n";
import type { Dictionary, Locale } from "@/lib/i18n/types";

export function ServicesPreview({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const preview = services.slice(0, 6);

  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow={dict.services.eyebrow} title={dict.services.title} subtitle={dict.services.subtitle} />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {preview.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 0.08}>
              <ServiceCard service={service} locale={locale} dict={dict} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 flex justify-center">
          <Button href={localePath(locale, "services")} variant="outline" size="lg" showArrow>
            {dict.services.viewAll}
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
