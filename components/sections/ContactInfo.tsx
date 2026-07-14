import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Linkedin, Music2, Palette } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { WHATSAPP_NUMBER, CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, SOCIAL_LINKS } from "@/lib/i18n";
import type { Dictionary, Locale } from "@/lib/i18n/types";

export function ContactInfo({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(dict.whatsapp.defaultMessage)}`;

  return (
    <div className="flex flex-col gap-6">
      <GlassCard glow="orange" className="p-7">
        <p className="text-sm font-semibold text-ink-muted">{dict.contact.directLabel}</p>
        <Button href={waHref} className="mt-4 w-full">
          {dict.contact.whatsappCta}
        </Button>

        <div className="mt-7 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm">
          <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-3 text-ink-muted transition-colors hover:text-white" dir="ltr">
            <Mail className="h-4 w-4 shrink-0 text-brand-blue-300" aria-hidden="true" />
            {CONTACT_EMAIL}
          </a>
          <a href={`tel:${CONTACT_PHONE_DISPLAY.replace(/\s/g, "")}`} className="flex items-center gap-3 text-ink-muted transition-colors hover:text-white" dir="ltr">
            <Phone className="h-4 w-4 shrink-0 text-brand-blue-300" aria-hidden="true" />
            {CONTACT_PHONE_DISPLAY}
          </a>
          <div className="flex items-center gap-3 text-ink-muted">
            <MapPin className="h-4 w-4 shrink-0 text-brand-blue-300" aria-hidden="true" />
            {locale === "ar" ? "القاهرة، مصر" : "Cairo, Egypt"}
          </div>
          <div className="flex items-center gap-3 text-ink-muted">
            <Clock className="h-4 w-4 shrink-0 text-brand-blue-300" aria-hidden="true" />
            {dict.contact.hoursValue}
          </div>
        </div>

        <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-6">
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
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/70 transition-colors hover:text-white"
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
            </a>
          ))}
        </div>
      </GlassCard>

      <GlassCard className="relative flex h-56 items-center justify-center overflow-hidden p-0">
        <div className="absolute inset-0 bg-navy-800" />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative flex flex-col items-center gap-2 text-ink-soft">
          <MapPin className="h-6 w-6" aria-hidden="true" />
          <span className="text-sm font-medium">{dict.contact.mapPlaceholder}</span>
        </div>
      </GlassCard>
    </div>
  );
}
