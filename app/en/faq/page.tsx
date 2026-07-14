import type { Metadata } from "next";
import { FAQPage } from "@/components/pages/FAQPage";
import { getDictionary } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

const dict = getDictionary("en");

export const metadata: Metadata = buildMetadata({
  locale: "en",
  title: `${dict.faq.title} | Reachy`,
  description: dict.faq.subtitle,
  path: "faq",
});

export default function Page() {
  return <FAQPage locale="en" />;
}
