import type { Bilingual } from "@/lib/i18n/types";

export interface FaqItem {
  id: string;
  question: Bilingual;
  answer: Bilingual;
}

export const faqItems: FaqItem[] = [
  {
    id: "f1",
    question: { ar: "قد إيه بيستغرق تسليم مشروع البراندنج؟", en: "How long does a branding project take?" },
    answer: {
      ar: "بيختلف حسب حجم المشروع، لكن في المتوسط مشروع هوية بصرية متكاملة بياخد من ٣ لـ ٥ أسابيع من أول جلسة الاكتشاف لحد التسليم النهائي.",
      en: "It varies by project size, but on average a complete brand identity project takes 3 to 5 weeks from the discovery session to final delivery.",
    },
  },
  {
    id: "f2",
    question: { ar: "هل ميزانية الإعلانات المدفوعة داخلة في سعر الباقة؟", en: "Is paid ad spend included in the package price?" },
    answer: {
      ar: "لأ، أسعار باقات الإعلانات بتغطي رسوم الإدارة والاستراتيجية والتنفيذ فقط. ميزانية الإعلان نفسها بتتحدد بشكل منفصل حسب أهدافك، وبتدفعها مباشرة لمنصة الإعلانات.",
      en: "No — our advertising package prices cover management, strategy, and execution only. Ad spend itself is set separately based on your goals and paid directly to the ad platform.",
    },
  },
  {
    id: "f3",
    question: { ar: "هل ممكن أطلب خدمة واحدة بس من غير باقة كاملة؟", en: "Can I request a single service without a full package?" },
    answer: {
      ar: "أكيد. الباقات مصممة لتسهيل الاختيار، لكن ممكن نصمملك عرض سعر مخصص لخدمة واحدة فقط زي تصميم شعار أو حملة إعلانية واحدة.",
      en: "Absolutely. Our packages exist to make choosing easier, but we're happy to put together a custom quote for a single service — like just a logo design or one ad campaign.",
    },
  },
  {
    id: "f4",
    question: { ar: "إزاي بتقيسوا نجاح الحملة التسويقية؟", en: "How do you measure a marketing campaign's success?" },
    answer: {
      ar: "بنحدد مؤشرات أداء واضحة مع بداية أي مشروع (زي تكلفة العميل، معدل التحويل، أو نسبة النمو في المتابعين) وبنتابعها بشكل دوري ونشاركها معاك في تقارير واضحة.",
      en: "We define clear KPIs at the start of every project — cost per lead, conversion rate, or follower growth — and track them continuously, sharing progress with you in clear reports.",
    },
  },
  {
    id: "f5",
    question: { ar: "هل بتشتغلوا مع شركات برا مصر؟", en: "Do you work with businesses outside Egypt?" },
    answer: {
      ar: "أيوه، بنشتغل عن بُعد مع عملاء في كل الدول الناطقة بالعربية، وكل التواصل والتسليم بيتم أونلاين بشكل منظم عبر اجتماعات دورية وتقارير مستمرة.",
      en: "Yes — we work remotely with clients across the Arabic-speaking world. All communication and delivery happen online through regular calls and continuous reporting.",
    },
  },
  {
    id: "f6",
    question: { ar: "إيه اللي بيميز ريتشي عن أي وكالة تانية؟", en: "What sets Reachy apart from other agencies?" },
    answer: {
      ar: "مش بنسلمك تصميم أو حملة وخلاص. بنشتغل كشريك بيفهم نشاطك التجاري، وبنربط كل قرار إبداعي بهدف تسويقي واضح ونتيجة قابلة للقياس.",
      en: "We don't just hand you a design or a campaign and disappear. We work as a partner who understands your business, tying every creative decision to a clear marketing goal and a measurable result.",
    },
  },
];
