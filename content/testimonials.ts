import type { Bilingual } from "@/lib/i18n/types";

export interface Testimonial {
  id: string;
  quote: Bilingual;
  name: Bilingual;
  role: Bilingual;
  company: Bilingual;
  initials: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote: {
      ar: "من أول شهر اشتغلنا مع ريتشي حسينا بفرق حقيقي في شكل الصفحة والتفاعل. مش بس تصميم كويس، لكن استراتيجية فعلاً بتفكر في هدفنا التجاري.",
      en: "From the first month working with Reachy, we felt a real difference in how the page looked and performed. Not just good design — an actual strategy focused on our business goals.",
    },
    name: { ar: "أحمد الشريف", en: "Ahmed El-Sherif" },
    role: { ar: "مؤسس", en: "Founder" },
    company: { ar: "مطاعم تندر بايت", en: "Tender Bite Restaurants" },
    initials: "أ.ش",
    rating: 5,
  },
  {
    id: "t2",
    quote: {
      ar: "الهوية البصرية اللي عملهالنا فريق ريتشي خلت عيادتنا حاسة بمصداقية أكبر قدام المرضى من أول لحظة. فرق واضح في الثقة.",
      en: "The visual identity Reachy's team built gave our clinic instant credibility with patients. The difference in trust was immediate.",
    },
    name: { ar: "د. هالة منصور", en: "Dr. Hala Mansour" },
    role: { ar: "المديرة الطبية", en: "Medical Director" },
    company: { ar: "عيادات النور التخصصية", en: "Al Nour Specialized Clinics" },
    initials: "هـ.م",
    rating: 5,
  },
  {
    id: "t3",
    quote: {
      ar: "كنا بنصرف على إعلانات فيسبوك من غير نتيجة واضحة. ريتشي غيرت الاستراتيجية بالكامل، وقللت تكلفة العميل بأكتر من النص خلال شهرين.",
      en: "We were spending on Facebook ads with no clear results. Reachy rebuilt the strategy from scratch and cut our cost per lead by more than half within two months.",
    },
    name: { ar: "كريم فتحي", en: "Karim Fathy" },
    role: { ar: "المدير التنفيذي", en: "CEO" },
    company: { ar: "معرض الفتحي للسيارات", en: "El Fathy Auto Gallery" },
    initials: "ك.ف",
    rating: 5,
  },
  {
    id: "t4",
    quote: {
      ar: "أول موقع إلكتروني بنعمله، وريتشي خلت التجربة كلها سهلة ومفهومة. الموقع طلع أسرع وأجمل بكتير من اللي كنا متخيلينه.",
      en: "This was our first proper website, and Reachy made the whole experience easy to understand. It turned out faster and better looking than we imagined.",
    },
    name: { ar: "نور الدين حسن", en: "Nour El-Din Hassan" },
    role: { ar: "الشريك المدير", en: "Managing Partner" },
    company: { ar: "استوديو أثاث المشغل", en: "Al Mashghal Furniture Studio" },
    initials: "ن.ح",
    rating: 5,
  },
  {
    id: "t5",
    quote: {
      ar: "التواصل مع فريق ريتشي مريح جداً، بيردوا بسرعة وبيشرحوا كل خطوة. حاسين إننا شغالين مع فريق داخلي مش وكالة خارجية.",
      en: "Working with the Reachy team is refreshingly easy — they respond fast and explain every step. It feels like an in-house team, not an outside agency.",
    },
    name: { ar: "سارة يوسف", en: "Sara Youssef" },
    role: { ar: "مديرة التسويق", en: "Marketing Manager" },
    company: { ar: "بوتيك لارا للأزياء", en: "Lara Fashion Boutique" },
    initials: "س.ي",
    rating: 5,
  },
];
