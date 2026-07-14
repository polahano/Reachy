import type { Metadata } from "next";
import { ServicesPage } from "@/components/pages/ServicesPage";
import { getDictionary } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

const dict = getDictionary("en");

export const metadata: Metadata = buildMetadata({
  locale: "en",
  title: `${dict.services.title} | Reachy`,
  description: dict.services.subtitle,
  path: "services",
});

export default function Page() {
  return <ServicesPage locale="en" />;
}
