import type { Bilingual } from "@/lib/i18n/types";

export type PortfolioCategory = "branding" | "social" | "advertising" | "web" | "photo-video" | "print";

export interface PortfolioItem {
  slug: string;
  title: Bilingual;
  client: Bilingual;
  category: PortfolioCategory;
  image: string;
  width: number;
  height: number;
  description: Bilingual;
}

export const portfolioCategoryLabels: Record<PortfolioCategory, Bilingual> = {
  branding: { ar: "البراندنج", en: "Branding" },
  social: { ar: "السوشيال ميديا", en: "Social Media" },
  advertising: { ar: "الإعلانات الممولة", en: "Advertising" },
  web: { ar: "المواقع والرقمي", en: "Web & Digital" },
  "photo-video": { ar: "تصوير وفيديو", en: "Photography & Video" },
  print: { ar: "المطبوعات", en: "Print" },
};

export const portfolio: PortfolioItem[] = [
  {
    slug: "tender-bite-branding",
    title: { ar: "هوية بصرية متكاملة لسلسلة مطاعم", en: "Full Brand Identity for a Restaurant Chain" },
    client: { ar: "تندر بايت", en: "Tender Bite" },
    category: "branding",
    image: "/images/portfolio/restaurant-branding.webp",
    width: 900, height: 1200,
    description: {
      ar: "إعادة بناء الهوية الكاملة لسلسلة مطاعم من الشعار لحد تصميم القوائم وواجهة الفروع.",
      en: "A complete identity rebuild for a restaurant chain — from the logo to menu design and storefront signage.",
    },
  },
  {
    slug: "nova-fintech-logo",
    title: { ar: "شعار وهوية لتطبيق فنتك", en: "Logo & Identity for a Fintech App" },
    client: { ar: "نوفا فنتك", en: "Nova Fintech" },
    category: "branding",
    image: "/images/portfolio/fintech-logo.webp",
    width: 1000, height: 1000,
    description: {
      ar: "تصميم شعار وهوية بصرية عصرية لتطبيق مدفوعات ناشئ يستهدف جيل الشباب.",
      en: "A modern logo and identity system for an emerging payments app targeting a younger audience.",
    },
  },
  {
    slug: "al-nour-social",
    title: { ar: "إدارة سوشيال ميديا لمجموعة عيادات", en: "Social Media Management for a Clinic Group" },
    client: { ar: "عيادات النور", en: "Al Nour Clinics" },
    category: "social",
    image: "/images/portfolio/clinic-social.webp",
    width: 1200, height: 900,
    description: {
      ar: "استراتيجية محتوى وإدارة يومية لحسابات مجموعة عيادات طبية متخصصة.",
      en: "Content strategy and daily account management for a specialized medical clinic group.",
    },
  },
  {
    slug: "lara-boutique-social",
    title: { ar: "تصميم سوشيال ميديا لبوتيك أزياء", en: "Social Media Design for a Fashion Boutique" },
    client: { ar: "بوتيك لارا", en: "Lara Boutique" },
    category: "social",
    image: "/images/portfolio/fashion-social.webp",
    width: 1000, height: 1000,
    description: {
      ar: "نظام تصميم بصري متسق لحساب انستجرام بوتيك أزياء نسائية فاخرة.",
      en: "A consistent visual design system for a premium women's fashion boutique's Instagram.",
    },
  },
  {
    slug: "realestate-google-ads",
    title: { ar: "حملة إعلانات جوجل لمطور عقاري", en: "Google Ads Campaign for a Real Estate Developer" },
    client: { ar: "مجموعة عمران للتطوير", en: "Omran Development Group" },
    category: "advertising",
    image: "/images/portfolio/realestate-google-ads.webp",
    width: 1200, height: 900,
    description: {
      ar: "حملة بحث وعرض مستهدفة رفعت معدل التسجيل على وحدات المشروع الجديد.",
      en: "A targeted search & display campaign that increased sign-ups for the developer's new project launch.",
    },
  },
  {
    slug: "beauty-clinic-ads",
    title: { ar: "إعلانات فيسبوك وانستجرام لعيادة تجميل", en: "Facebook & Instagram Ads for a Beauty Clinic" },
    client: { ar: "كلينك جلو", en: "Glow Clinic" },
    category: "advertising",
    image: "/images/portfolio/beauty-facebook-ads.webp",
    width: 1000, height: 1000,
    description: {
      ar: "حملة ممولة قللت تكلفة الحجز بنسبة كبيرة خلال أول شهرين من الإطلاق.",
      en: "A paid campaign that significantly cut cost-per-booking within the first two months of launch.",
    },
  },
  {
    slug: "mashghal-photography",
    title: { ar: "تصوير منتجات لاستوديو أثاث", en: "Product Photography for a Furniture Studio" },
    client: { ar: "استوديو المشغل", en: "Al Mashghal Studio" },
    category: "photo-video",
    image: "/images/portfolio/furniture-photography.webp",
    width: 900, height: 1200,
    description: {
      ar: "جلسة تصوير منتجات احترافية أبرزت تفاصيل الخامات والتصنيع اليدوي.",
      en: "A professional product shoot highlighting material texture and handcrafted detail.",
    },
  },
  {
    slug: "gym-tiktok-campaign",
    title: { ar: "حملة تيك توك لسلسلة نوادي رياضية", en: "TikTok Campaign for a Gym Chain" },
    client: { ar: "بلس فيتنس", en: "Plus Fitness" },
    category: "advertising",
    image: "/images/portfolio/gym-tiktok.webp",
    width: 900, height: 1300,
    description: {
      ar: "سلسلة إعلانات قصيرة بأسلوب المنصة الأصلي استهدفت جمهور أصغر سناً.",
      en: "A short-form ad series built natively for TikTok, targeting a younger fitness audience.",
    },
  },
  {
    slug: "coffee-rebrand",
    title: { ar: "إعادة تدشين هوية سلسلة كافيهات", en: "Rebrand for a Coffee Shop Chain" },
    client: { ar: "بريو آند كو", en: "Brew & Co." },
    category: "branding",
    image: "/images/portfolio/coffee-rebrand.webp",
    width: 1200, height: 900,
    description: {
      ar: "هوية بصرية جديدة بالكامل شملت التغليف واللافتات وتصميم الأكواب.",
      en: "A complete visual refresh spanning packaging, signage, and cup design.",
    },
  },
  {
    slug: "ecommerce-website",
    title: { ar: "تصميم وتطوير متجر إلكتروني", en: "E-commerce Website Design & Development" },
    client: { ar: "كايرو جيمز", en: "Cairo Gems" },
    category: "web",
    image: "/images/portfolio/ecommerce-web.webp",
    width: 1200, height: 900,
    description: {
      ar: "متجر إلكتروني كامل لمجوهرات فاخرة مع تحسين شامل لمحركات البحث.",
      en: "A complete e-commerce build for a fine jewelry brand with full SEO optimization.",
    },
  },
  {
    slug: "edu-video-series",
    title: { ar: "سلسلة فيديوهات تعليمية", en: "Educational Video Series" },
    client: { ar: "منصة تعلّم", en: "Ta'allam Platform" },
    category: "photo-video",
    image: "/images/portfolio/edu-video.webp",
    width: 1200, height: 900,
    description: {
      ar: "إنتاج سلسلة فيديوهات تعليمية قصيرة لمنصة تعليم إلكتروني ناشئة.",
      en: "Production of a short educational video series for an emerging e-learning platform.",
    },
  },
  {
    slug: "jewelry-photography",
    title: { ar: "تصوير منتجات مجوهرات", en: "Jewelry Product Photography" },
    client: { ar: "كايرو جيمز", en: "Cairo Gems" },
    category: "photo-video",
    image: "/images/portfolio/jewelry-photography.webp",
    width: 1000, height: 1000,
    description: {
      ar: "جلسة تصوير ماكرو لقطع مجوهرات أبرزت التفاصيل الدقيقة والحرفية.",
      en: "A macro product shoot capturing fine detail and craftsmanship in each piece.",
    },
  },
  {
    slug: "law-firm-branding",
    title: { ar: "هوية بصرية لمكتب استشارات قانونية", en: "Brand Identity for a Law Firm" },
    client: { ar: "مكتب الوسيمي وشركاه", en: "El Wasimy & Partners" },
    category: "branding",
    image: "/images/portfolio/law-firm-branding.webp",
    width: 900, height: 1200,
    description: {
      ar: "هوية بصرية جادة ومتينة تعكس الثقة والاحترافية لمكتب استشارات قانونية.",
      en: "A serious, solid identity reflecting trust and professionalism for a legal consultancy.",
    },
  },
  {
    slug: "dealership-print",
    title: { ar: "بانرات وفلايرز لمعرض سيارات", en: "Banners & Flyers for a Car Dealership" },
    client: { ar: "معرض الفتحي", en: "El Fathy Auto Gallery" },
    category: "print",
    image: "/images/portfolio/dealership-print.webp",
    width: 1200, height: 900,
    description: {
      ar: "مجموعة مطبوعات ترويجية لإطلاق تشكيلة سيارات جديدة في المعرض.",
      en: "A set of promotional print materials for the dealership's new vehicle lineup launch.",
    },
  },
];
