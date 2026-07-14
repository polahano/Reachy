import type { Metadata } from "next";
import { FAQPage } from "@/components/pages/FAQPage";
import { getDictionary } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

const dict = getDictionary("ar");

export const metadata: Metadata = buildMetadata({
  locale: "ar",
  title: `${dict.faq.title} | ريتشي`,
  description: dict.faq.subtitle,
  path: "faq",
});

export default function Page() {
  return <FAQPage locale="ar" />;
}
