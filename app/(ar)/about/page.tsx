import type { Metadata } from "next";
import { AboutPage } from "@/components/pages/AboutPage";
import { getDictionary } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

const dict = getDictionary("ar");

export const metadata: Metadata = buildMetadata({
  locale: "ar",
  title: `${dict.about.title} | ريتشي`,
  description: dict.about.intro,
  path: "about",
});

export default function Page() {
  return <AboutPage locale="ar" />;
}
