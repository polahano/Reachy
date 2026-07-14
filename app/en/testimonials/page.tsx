import type { Metadata } from "next";
import { TestimonialsPage } from "@/components/pages/TestimonialsPage";
import { getDictionary } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

const dict = getDictionary("en");

export const metadata: Metadata = buildMetadata({
  locale: "en",
  title: `${dict.testimonials.title} | Reachy`,
  description: dict.testimonials.subtitle,
  path: "testimonials",
});

export default function Page() {
  return <TestimonialsPage locale="en" />;
}
