import type { Metadata } from "next";
import { ServicesPage } from "@/components/pages/ServicesPage";
import { getDictionary } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

const dict = getDictionary("ar");

export const metadata: Metadata = buildMetadata({
  locale: "ar",
  title: `${dict.services.title} | ريتشي`,
  description: dict.services.subtitle,
  path: "services",
});

export default function Page() {
  return <ServicesPage locale="ar" />;
}
