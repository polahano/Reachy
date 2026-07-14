import Link from "next/link";
import { Facebook, Instagram, Linkedin, Music2, Palette } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { navItems } from "@/content/nav";
import { services } from "@/content/services";
import { localePath, SOCIAL_LINKS, CONTACT_EMAIL, CONTACT_PHONE_DISPLAY } from "@/lib/i18n";
import type { Dictionary, Locale } from "@/lib/i18n/types";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const year = new Date().getFullYear();
  const featuredServices = services.slice(0, 6);

  return (
    <footer className="relative border-t border-white/10 bg-navy-900/60">
      <Container className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-5">
        <div className="sm:col-span-2 lg:col-span-2">
          <span className="text-2xl font-extrabold">
            <GradientText>REACHY</GradientText>
          </span>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-muted">{dict.footer.tagline}</p>
          <div className="mt-6 flex items-center gap-3">
            {[
              { href: SOCIAL_LINKS.facebook, Icon: Facebook, label: "Facebook" },
              { href: SOCIAL_LINKS.instagram, Icon: Instagram, label: "Instagram" },
              { href: SOCIAL_LINKS.linkedin, Icon: Linkedin, label: "LinkedIn" },
              { href: SOCIAL_LINKS.tiktok, Icon: Music2, label: "TikTok" },
              { href: SOCIAL_LINKS.behance, Icon: Palette, label: "Behance" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition-all hover:-translate-y-0.5 hover:border-brand-purple-400 hover:text-white"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white/90">{dict.footer.quickLinks}</h3>
          <ul className="mt-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <li key={item.key}>
                <Link href={localePath(locale, item.path)} className="text-sm text-ink-muted transition-colors hover:text-white">
                  {dict.nav[item.key]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white/90">{dict.footer.servicesTitle}</h3>
          <ul className="mt-4 flex flex-col gap-3">
            {featuredServices.map((s) => (
              <li key={s.slug}>
                <Link href={`${localePath(locale, "services")}#${s.slug}`} className="text-sm text-ink-muted transition-colors hover:text-white">
                  {s.title[locale]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white/90">{dict.footer.contactTitle}</h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-ink-muted">
            <li>
              <a href={`mailto:${CONTACT_EMAIL}`} className="transition-colors hover:text-white" dir="ltr">
                {CONTACT_EMAIL}
              </a>
            </li>
            <li>
              <a href={`tel:${CONTACT_PHONE_DISPLAY.replace(/\s/g, "")}`} className="transition-colors hover:text-white" dir="ltr">
                {CONTACT_PHONE_DISPLAY}
              </a>
            </li>
            <li>{dict.contact.hoursValue}</li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container className="flex flex-col items-center justify-between gap-3 text-xs text-ink-soft sm:flex-row">
          <p>
            © {year} Reachy. {dict.footer.rights}.
          </p>
          <p>{dict.footer.madeWith}</p>
        </Container>
      </div>
    </footer>
  );
}
