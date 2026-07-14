import type { Metadata } from "next";
import { PortfolioPage } from "@/components/pages/PortfolioPage";
import { getDictionary } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

const dict = getDictionary("ar");

export const metadata: Metadata = buildMetadata({
  locale: "ar",
  title: `${dict.portfolio.title} | ريتشي`,
  description: dict.portfolio.subtitle,
  path: "portfolio",
});

export default function Page() {
  return <PortfolioPage locale="ar" />;
}
