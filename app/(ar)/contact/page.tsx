import type { Metadata } from "next";
import { ContactPage } from "@/components/pages/ContactPage";
import { getDictionary } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

const dict = getDictionary("ar");

export const metadata: Metadata = buildMetadata({
  locale: "ar",
  title: `${dict.contact.title} | ريتشي`,
  description: dict.contact.subtitle,
  path: "contact",
});

export default function Page() {
  return <ContactPage locale="ar" />;
}
