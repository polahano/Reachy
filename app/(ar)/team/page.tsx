import type { Metadata } from "next";
import { TeamPage } from "@/components/pages/TeamPage";
import { getDictionary } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

const dict = getDictionary("ar");

export const metadata: Metadata = buildMetadata({
  locale: "ar",
  title: `${dict.team.title} | ريتشي`,
  description: dict.team.subtitle,
  path: "team",
});

export default function Page() {
  return <TeamPage locale="ar" />;
}
