"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { services } from "@/content/services";
import { CONTACT_EMAIL } from "@/lib/i18n";
import type { Dictionary, Locale } from "@/lib/i18n/types";

// This site is a static export with no backend of its own. Point this at a
// form-handling service (Formspree, Getform, Web3Forms, etc.) to receive
// submissions directly to your inbox. Until it's set, the form gracefully
// falls back to opening a pre-filled email in the visitor's mail client.
const CONTACT_FORM_ENDPOINT = ""; // e.g. "https://formspree.io/f/xxxxxxx"

const budgets = [
  { ar: "أقل من ١٠,٠٠٠ جنيه", en: "Under 10,000 EGP" },
  { ar: "١٠,٠٠٠ - ٣٠,٠٠٠ جنيه", en: "10,000 - 30,000 EGP" },
  { ar: "٣٠,٠٠٠ - ٧٠,٠٠٠ جنيه", en: "30,000 - 70,000 EGP" },
  { ar: "أكتر من ٧٠,٠٠٠ جنيه", en: "70,000+ EGP" },
];

export function ContactForm({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);

    if (CONTACT_FORM_ENDPOINT) {
      try {
        await fetch(CONTACT_FORM_ENDPOINT, {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" },
        });
        setStatus("success");
        form.reset();
        return;
      } catch {
        // fall through to mailto fallback below
      }
    }

    const subject = encodeURIComponent(`New project inquiry — ${data.get("name")}`);
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone")}\nService: ${data.get(
        "service"
      )}\nBudget: ${data.get("budget")}\n\n${data.get("message")}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setStatus("success");
    form.reset();
  }

  return (
    <GlassCard glow="purple" className="p-6 sm:p-9">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-4 py-10 text-center"
          >
            <CheckCircle2 className="h-14 w-14 text-brand-blue-400" aria-hidden="true" />
            <h3 className="text-xl font-bold">{dict.contact.formSuccess}</h3>
            <p className="text-ink-muted">{dict.contact.formSuccessSub}</p>
            <Button variant="secondary" onClick={() => setStatus("idle")} className="mt-2">
              {locale === "ar" ? "إرسال طلب آخر" : "Send another request"}
            </Button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2"
          >
            <Field label={dict.contact.formName}>
              <input name="name" type="text" required className="form-input" />
            </Field>
            <Field label={dict.contact.formEmail}>
              <input name="email" type="email" required dir="ltr" className="form-input" />
            </Field>
            <Field label={dict.contact.formPhone}>
              <input name="phone" type="tel" required dir="ltr" className="form-input" />
            </Field>
            <Field label={dict.contact.formService}>
              <select name="service" required defaultValue="" className="form-input">
                <option value="" disabled>
                  {dict.contact.formSelectService}
                </option>
                {services.map((s) => (
                  <option key={s.slug} value={s.title[locale]}>
                    {s.title[locale]}
                  </option>
                ))}
              </select>
            </Field>
            <Field label={dict.contact.formBudget} className="sm:col-span-2">
              <select name="budget" required defaultValue="" className="form-input">
                <option value="" disabled>
                  {dict.contact.formSelectBudget}
                </option>
                {budgets.map((b) => (
                  <option key={b.en} value={b[locale]}>
                    {b[locale]}
                  </option>
                ))}
              </select>
            </Field>
            <Field label={dict.contact.formMessage} className="sm:col-span-2">
              <textarea
                name="message"
                required
                rows={5}
                placeholder={dict.contact.formMessagePlaceholder}
                className="form-input resize-none"
              />
            </Field>

            <Button type="submit" size="lg" className="sm:col-span-2" disabled={status === "submitting"}>
              {status === "submitting" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                  {dict.contact.formSubmitting}
                </>
              ) : (
                dict.contact.formSubmit
              )}
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </GlassCard>
  );
}

function Field({ label, children, className }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <label className={`flex flex-col gap-2 text-sm font-semibold text-white/85 ${className ?? ""}`}>
      {label}
      {children}
    </label>
  );
}
