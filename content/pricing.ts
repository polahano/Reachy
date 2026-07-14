import type { Bilingual, BilingualList } from "@/lib/i18n/types";

export interface PricingTier {
  name: Bilingual;
  price: number; // EGP, indicative placeholder
  billing: "once" | "monthly";
  recommended?: boolean;
  features: BilingualList;
}

export interface PricingCategory {
  key: "social" | "branding" | "ads" | "web";
  tiers: PricingTier[];
}

export const pricingCategories: PricingCategory[] = [
  {
    key: "social",
    tiers: [
      {
        name: { ar: "الأساسية", en: "Essential" },
        price: 2500,
        billing: "monthly",
        features: {
          ar: ["١٢ منشور شهرياً", "إدارة منصة واحدة", "تقرير أداء شهري", "رد على الرسائل والتعليقات"],
          en: ["12 posts / month", "One platform managed", "Monthly performance report", "Comment & message replies"],
        },
      },
      {
        name: { ar: "النمو", en: "Growth" },
        price: 5500,
        billing: "monthly",
        recommended: true,
        features: {
          ar: ["٢٠ منشور شهرياً", "إدارة منصتين", "تقرير كل أسبوعين", "استراتيجية محتوى شهرية", "إدارة المجتمع والتفاعل"],
          en: ["20 posts / month", "Two platforms managed", "Bi-weekly reporting", "Monthly content strategy", "Community management"],
        },
      },
      {
        name: { ar: "الاحترافية", en: "Professional" },
        price: 9500,
        billing: "monthly",
        features: {
          ar: ["محتوى غير محدود", "إدارة ٣ منصات فأكثر", "تقرير أسبوعي مفصل", "استراتيجي محتوى مخصص", "إدارة الحملات الممولة على السوشيال"],
          en: ["Unlimited content volume", "3+ platforms managed", "Detailed weekly reporting", "Dedicated content strategist", "Paid social boosting management"],
        },
      },
    ],
  },
  {
    key: "branding",
    tiers: [
      {
        name: { ar: "الأساسية", en: "Essential" },
        price: 8000,
        billing: "once",
        features: {
          ar: ["تصميم شعار احترافي", "دليل ألوان وخطوط مبسط", "كارت شخصي وورقة رسمية", "أساسيات كيت السوشيال ميديا"],
          en: ["Professional logo design", "Simplified color & type guide", "Business card & letterhead", "Basic social media kit"],
        },
      },
      {
        name: { ar: "النمو", en: "Growth" },
        price: 18000,
        billing: "once",
        recommended: true,
        features: {
          ar: ["نظام هوية بصرية متكامل", "دليل علامة تجارية شامل", "مطبوعات المكتب الكاملة", "قوالب سوشيال ميديا جاهزة", "مفاهيم تغليف أولية"],
          en: ["Complete visual identity system", "Comprehensive brand guideline", "Full office stationery suite", "Ready-made social templates", "Initial packaging concepts"],
        },
      },
      {
        name: { ar: "الاحترافية", en: "Professional" },
        price: 35000,
        billing: "once",
        features: {
          ar: ["استراتيجية علامة تجارية كاملة", "تسمية المنتج/الخدمة", "هوية بصرية + دليل استخدام موسع", "حزمة إطلاق كاملة", "دعم لمدة ٣ أشهر بعد التسليم"],
          en: ["Full brand strategy", "Product/service naming", "Identity + extended usage guide", "Complete launch kit", "3 months of post-delivery support"],
        },
      },
    ],
  },
  {
    key: "ads",
    tiers: [
      {
        name: { ar: "الأساسية", en: "Essential" },
        price: 4000,
        billing: "monthly",
        features: {
          ar: ["إدارة منصة إعلانية واحدة", "استهداف أساسي للجمهور", "تقرير أداء شهري", "لا يشمل ميزانية الإعلان"],
          en: ["One ad platform managed", "Basic audience targeting", "Monthly performance report", "Ad spend billed separately"],
        },
      },
      {
        name: { ar: "النمو", en: "Growth" },
        price: 7500,
        billing: "monthly",
        recommended: true,
        features: {
          ar: ["إدارة منصتين إعلانيتين", "اختبار A/B مستمر", "تحسين أسبوعي للحملات", "تقرير أداء أسبوعي", "لا يشمل ميزانية الإعلان"],
          en: ["Two ad platforms managed", "Ongoing A/B testing", "Weekly campaign optimization", "Weekly performance reporting", "Ad spend billed separately"],
        },
      },
      {
        name: { ar: "الاحترافية", en: "Professional" },
        price: 14000,
        billing: "monthly",
        features: {
          ar: ["إدارة متعددة المنصات", "قمع مبيعات متكامل", "مسؤول شراء إعلانات مخصص", "اجتماع أسبوعي لمراجعة الأداء", "لا يشمل ميزانية الإعلان"],
          en: ["Multi-platform management", "Full sales funnel setup", "Dedicated media buyer", "Weekly performance review call", "Ad spend billed separately"],
        },
      },
    ],
  },
  {
    key: "web",
    tiers: [
      {
        name: { ar: "الأساسية", en: "Essential" },
        price: 15000,
        billing: "once",
        features: {
          ar: ["حتى ٥ صفحات", "تصميم متجاوب لكل الشاشات", "تحسين أساسي لمحركات البحث", "نموذج تواصل مدمج"],
          en: ["Up to 5 pages", "Fully responsive design", "Basic SEO setup", "Integrated contact form"],
        },
      },
      {
        name: { ar: "النمو", en: "Growth" },
        price: 30000,
        billing: "once",
        recommended: true,
        features: {
          ar: ["حتى ١٢ صفحة", "نظام إدارة محتوى", "تحسين متقدم لمحركات البحث", "حركات وتفاعلات مخصصة", "لوحة تحكم بسيطة"],
          en: ["Up to 12 pages", "Content management system", "Advanced SEO setup", "Custom motion & interactions", "Simple admin dashboard"],
        },
      },
      {
        name: { ar: "الاحترافية", en: "Professional" },
        price: 55000,
        billing: "once",
        features: {
          ar: ["تطبيق ويب مخصص بالكامل", "تكامل متجر إلكتروني أو حجوزات", "أداء وسرعة على أعلى مستوى", "دعم فني مستمر بعد الإطلاق"],
          en: ["Fully custom web application", "E-commerce or booking integration", "Top-tier performance & speed", "Ongoing support after launch"],
        },
      },
    ],
  },
];
