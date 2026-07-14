import type { Metadata } from "next";
import { TeamPage } from "@/components/pages/TeamPage";
import { getDictionary } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

const dict = getDictionary("en");

export const metadata: Metadata = buildMetadata({
  locale: "en",
  title: `${dict.team.title} | Reachy`,
  description: dict.team.subtitle,
  path: "team",
});

export default function Page() {
  return <TeamPage locale="en" />;
}
