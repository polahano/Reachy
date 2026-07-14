import type { Metadata } from "next";
import { HomePage } from "@/components/pages/HomePage";
import { RootLocaleRedirect } from "@/components/layout/RootLocaleRedirect";
import { getDictionary } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

const dict = getDictionary("ar");

export const metadata: Metadata = buildMetadata({
  locale: "ar",
  title: `${dict.hero.headline} ${dict.hero.headlineHighlight} | ريتشي`,
  description: dict.meta.defaultDescription,
  path: "",
});

export default function Page() {
  return (
    <>
      <RootLocaleRedirect />
      <HomePage locale="ar" />
    </>
  );
}
