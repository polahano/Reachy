import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHeader } from "@/components/sections/PageHeader";
import { ContactForm } from "@/components/sections/ContactForm";
import { ContactInfo } from "@/components/sections/ContactInfo";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/types";

export function ContactPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <>
      <PageHeader eyebrow={dict.contact.eyebrow} title={dict.contact.title} subtitle={dict.contact.subtitle} />

      <section className="pb-24 sm:pb-32">
        <Container>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-[1.4fr_1fr]">
            <Reveal>
              <ContactForm locale={locale} dict={dict} />
            </Reveal>
            <Reveal delay={0.1}>
              <ContactInfo locale={locale} dict={dict} />
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
