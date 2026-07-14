import type { Metadata } from "next";
import { AboutPage } from "@/components/pages/AboutPage";
import { getDictionary } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

const dict = getDictionary("en");

export const metadata: Metadata = buildMetadata({
  locale: "en",
  title: `${dict.about.title} | Reachy`,
  description: dict.about.intro,
  path: "about",
});

export default function Page() {
  return <AboutPage locale="en" />;
}
