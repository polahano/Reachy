import type { Bilingual } from "@/lib/i18n/types";

export interface TeamMember {
  slug: string;
  name: Bilingual;
  role: Bilingual;
  bio: Bilingual;
  initials: string;
  accent: "blue" | "purple" | "orange";
  socials: { linkedin?: string; behance?: string; instagram?: string };
}

export const team: TeamMember[] = [
  {
    slug: "founder-creative",
    name: { ar: "يوسف كامل", en: "Youssef Kamel" },
    role: { ar: "الشريك المؤسس ومدير الإبداع", en: "Co-Founder & Creative Director" },
    bio: {
      ar: "بخبرة تمتد لأكتر من ٨ سنين في البراندنج والتصميم الإبداعي، يوسف بيقود الرؤية البصرية لكل مشروع في ريتشي، ومهووس بالتفاصيل اللي بتفرق بين الشغل الكويس والشغل اللي بيتفتكر.",
      en: "With over 8 years in branding and creative direction, Youssef leads the visual vision behind every Reachy project — obsessed with the details that separate good work from work people remember.",
    },
    initials: "ي.ك",
    accent: "purple",
    socials: { linkedin: "#", behance: "#" },
  },
  {
    slug: "founder-growth",
    name: { ar: "مريم عادل", en: "Mariam Adel" },
    role: { ar: "الشريك المؤسس ومديرة النمو والتسويق", en: "Co-Founder & Head of Growth" },
    bio: {
      ar: "متخصصة في التسويق الرقمي والإعلانات الممولة، مريم بتحول الاستراتيجية لأرقام حقيقية، وبتتابع كل حملة أول بأول عشان تضمن أعلى عائد ممكن لعملاء ريتشي.",
      en: "A performance marketing specialist, Mariam turns strategy into real numbers — tracking every campaign closely to make sure Reachy's clients get the strongest possible return.",
    },
    initials: "م.ع",
    accent: "blue",
    socials: { linkedin: "#", instagram: "#" },
  },
];
