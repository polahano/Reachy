import type { Bilingual } from "@/lib/i18n/types";

export interface Stat {
  value: number;
  suffix: string;
  label: Bilingual;
}

export const stats: Stat[] = [
  { value: 150, suffix: "+", label: { ar: "مشروع تم تنفيذه بنجاح", en: "Projects delivered successfully" } },
  { value: 40, suffix: "+", label: { ar: "عميل نشط بيثق فينا", en: "Active clients who trust us" } },
  { value: 98, suffix: "%", label: { ar: "نسبة رضا العملاء", en: "Client satisfaction rate" } },
  { value: 5, suffix: "+", label: { ar: "سنوات خبرة في السوق", en: "Years of market experience" } },
];
