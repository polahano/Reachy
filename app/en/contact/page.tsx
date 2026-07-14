import type { Metadata } from "next";
import { ContactPage } from "@/components/pages/ContactPage";
import { getDictionary } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

const dict = getDictionary("en");

export const metadata: Metadata = buildMetadata({
  locale: "en",
  title: `${dict.contact.title} | Reachy`,
  description: dict.contact.subtitle,
  path: "contact",
});

export default function Page() {
  return <ContactPage locale="en" />;
}
