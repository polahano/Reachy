import type { Metadata } from "next";
import { PricingPage } from "@/components/pages/PricingPage";
import { getDictionary } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

const dict = getDictionary("en");

export const metadata: Metadata = buildMetadata({
  locale: "en",
  title: `${dict.pricing.title} | Reachy`,
  description: dict.pricing.subtitle,
  path: "pricing",
});

export default function Page() {
  return <PricingPage locale="en" />;
}
