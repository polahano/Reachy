import type { Metadata } from "next";
import { PricingPage } from "@/components/pages/PricingPage";
import { getDictionary } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

const dict = getDictionary("ar");

export const metadata: Metadata = buildMetadata({
  locale: "ar",
  title: `${dict.pricing.title} | ريتشي`,
  description: dict.pricing.subtitle,
  path: "pricing",
});

export default function Page() {
  return <PricingPage locale="ar" />;
}
