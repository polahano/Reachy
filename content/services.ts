import type { Bilingual, BilingualList } from "@/lib/i18n/types";

export interface Service {
  slug: string;
  icon: string; // lucide-react icon name
  title: Bilingual;
  short: Bilingual;
  problem: Bilingual;
  solution: Bilingual;
  benefits: BilingualList;
}

export const services: Service[] = [
  {
    slug: "social-media-management",
    icon: "MessagesSquare",
    title: { ar: "إدارة السوشيال ميديا", en: "Social Media Management" },
    short: { ar: "حضور يومي مدروس على منصاتك", en: "A considered daily presence on your platforms" },
    problem: {
      ar: "حساباتك التجارية شغالة بدون خطة، والمحتوى بينزل بشكل عشوائي من غير أي استراتيجية واضحة.",
      en: "Your business accounts are running without a plan — content goes out randomly with no clear strategy.",
    },
    solution: {
      ar: "بنبني تقويم محتوى شهري مبني على تحليل جمهورك، وبندير حساباتك يوم بيوم بأسلوب يعكس هوية علامتك.",
      en: "We build a monthly content calendar based on real audience analysis and manage your accounts daily in a voice that reflects your brand.",
    },
    benefits: {
      ar: ["تقويم محتوى شهري مدروس", "تفاعل حقيقي مش أرقام وهمية", "تقرير أداء واضح كل شهر"],
      en: ["A well-planned monthly content calendar", "Real engagement, not vanity numbers", "A clear performance report every month"],
    },
  },
  {
    slug: "social-media-design",
    icon: "LayoutGrid",
    title: { ar: "تصميم السوشيال ميديا", en: "Social Media Design" },
    short: { ar: "تصاميم بتوقف عند التمرير", en: "Designs that stop the scroll" },
    problem: {
      ar: "تصاميمك الحالية بتتشابه مع أي حساب تاني، ومفيش هوية بصرية ثابتة تميزك عن المنافسين.",
      en: "Your current visuals blend in with everyone else's, with no consistent visual identity to set you apart.",
    },
    solution: {
      ar: "بنصمم قوالب بصرية متسقة مبنية على هويتك، تخليك متعرف من أول نظرة في أي فيد.",
      en: "We design a consistent visual system built on your identity, making you instantly recognizable in any feed.",
    },
    benefits: {
      ar: ["هوية بصرية موحدة على كل المنصات", "قوالب قابلة لإعادة الاستخدام بسرعة", "تصميم مناسب لكل منصة على حدة"],
      en: ["A unified visual identity across platforms", "Reusable templates for fast turnaround", "Designs tailored to each platform's format"],
    },
  },
  {
    slug: "branding",
    icon: "Fingerprint",
    title: { ar: "البراندنج", en: "Branding" },
    short: { ar: "هوية تجارية تُروى وتُتذكر", en: "A brand identity worth remembering" },
    problem: {
      ar: "علامتك التجارية مالهاش شخصية واضحة، والعميل مش قادر يفرقك عن أي شركة تانية في نفس المجال.",
      en: "Your brand has no clear personality, and customers can't tell you apart from anyone else in your space.",
    },
    solution: {
      ar: "بنبني منظومة هوية تجارية متكاملة: من الرسالة والصوت، لحد الألوان والخطوط ودليل الاستخدام.",
      en: "We build a complete brand identity system — from message and voice to color, typography, and usage guidelines.",
    },
    benefits: {
      ar: ["هوية بصرية واضحة ومتماسكة", "دليل علامة تجارية شامل", "رسالة تسويقية تميزك عن المنافسين"],
      en: ["A clear, cohesive visual identity", "A complete brand guideline document", "A message that sets you apart from competitors"],
    },
  },
  {
    slug: "logo-design",
    icon: "PenTool",
    title: { ar: "تصميم الشعارات", en: "Logo Design" },
    short: { ar: "شعار يشيل معنى مش مجرد شكل", en: "A logo that carries meaning, not just shape" },
    problem: {
      ar: "شعارك الحالي معمول بسرعة ومش شايل أي معنى، وبيضعف من صورة علامتك في أي مكان يظهر فيه.",
      en: "Your current logo was made in a rush and carries no real meaning, weakening your brand wherever it appears.",
    },
    solution: {
      ar: "بندرس مجالك وجمهورك ونطلع بشعار مصمم بعناية، شغال بنفس القوة على الشاشة والطباعة.",
      en: "We study your industry and audience to craft a carefully designed logo that performs equally well on screen and in print.",
    },
    benefits: {
      ar: ["شعار أصلي ومصمم خصيصاً لك", "ملفات جاهزة لكل الاستخدامات", "نسخ متعددة (أفقي، رأسي، أيقونة)"],
      en: ["An original logo designed specifically for you", "Files ready for every use case", "Multiple variations (horizontal, stacked, icon-only)"],
    },
  },
  {
    slug: "facebook-ads",
    icon: "Facebook",
    title: { ar: "إعلانات فيسبوك", en: "Facebook Ads" },
    short: { ar: "استهداف دقيق يوصلك للعميل الصح", en: "Precise targeting that reaches the right customer" },
    problem: {
      ar: "بتصرف على إعلانات فيسبوك بدون استراتيجية واضحة، والنتيجة مصاريف بترتفع من غير عائد حقيقي.",
      en: "You're spending on Facebook ads without a clear strategy, and costs keep rising without real returns.",
    },
    solution: {
      ar: "بنبني حملات إعلانية مستهدفة بدقة، ونختبر ونحسّن الأداء أسبوعياً بناءً على بيانات حقيقية.",
      en: "We build precisely targeted campaigns and test and optimize weekly based on real performance data.",
    },
    benefits: {
      ar: ["استهداف مبني على تحليل الجمهور", "تحسين مستمر لتقليل تكلفة العميل", "تقارير أداء أسبوعية شفافة"],
      en: ["Targeting grounded in real audience analysis", "Continuous optimization to lower cost per lead", "Transparent weekly performance reports"],
    },
  },
  {
    slug: "google-ads",
    icon: "Target",
    title: { ar: "إعلانات جوجل", en: "Google Ads" },
    short: { ar: "تظهر بالظبط لما حد يدور عليك", en: "Show up exactly when someone's searching for you" },
    problem: {
      ar: "عملاء محتملين بيدوروا عليك على جوجل كل يوم، ومنافسينك هما اللي بيظهروا مكانك.",
      en: "Potential customers are searching for you on Google every day, and your competitors are showing up instead.",
    },
    solution: {
      ar: "بنبني حملات بحث وعرض مدروسة بالكلمات المفتاحية الصح، عشان تكون قدام العميل في اللحظة اللي بيقرر فيها.",
      en: "We build carefully researched search and display campaigns targeting the right keywords, so you're front and center at the moment of decision.",
    },
    benefits: {
      ar: ["ظهور في نتائج البحث الأولى", "استهداف نية شراء حقيقية", "تتبع تحويلات دقيق"],
      en: ["Placement in top search results", "Targeting genuine purchase intent", "Precise conversion tracking"],
    },
  },
  {
    slug: "tiktok-ads",
    icon: "Music2",
    title: { ar: "إعلانات تيك توك", en: "TikTok Ads" },
    short: { ar: "توصل لجيل بيقرر بسرعة", en: "Reach an audience that decides fast" },
    problem: {
      ar: "جمهورك الأصغر سناً موجود على تيك توك، وإعلاناتك التقليدية مش بتوصل ليهم أو بتحس غريبة على المنصة.",
      en: "Your younger audience lives on TikTok, and your traditional ads either don't reach them or feel out of place there.",
    },
    solution: {
      ar: "بننتج إعلانات مصممة أصلاً لتيك توك، بإيقاع وأسلوب المنصة نفسها، مش إعلان تلفزيوني مُعاد استخدامه.",
      en: "We produce ads built natively for TikTok's pace and format — not a repurposed TV commercial.",
    },
    benefits: {
      ar: ["محتوى بأسلوب المنصة الأصلي", "وصول لجمهور أصغر سناً وأكثر تفاعلاً", "تكلفة وصول تنافسية"],
      en: ["Content built in the platform's native style", "Reach a younger, more engaged audience", "Competitive cost per reach"],
    },
  },
  {
    slug: "seo",
    icon: "Search",
    title: { ar: "تحسين محركات البحث", en: "SEO" },
    short: { ar: "نمو مستمر من غير ما تدفع لكل زيارة", en: "Sustainable growth without paying for every visit" },
    problem: {
      ar: "موقعك مش ظاهر في نتائج البحث، وكل الزيارات جاية من إعلانات مدفوعة بتوقف لما توقف الميزانية.",
      en: "Your website isn't showing up in search results, and all your traffic depends on paid ads that stop the moment budget does.",
    },
    solution: {
      ar: "بنشتغل على تحسين محركات البحث بشكل شامل: تقني، محتوى، وبناء روابط، عشان تبني حضور دائم في جوجل.",
      en: "We work on comprehensive SEO — technical, content, and link building — to build a lasting presence on Google.",
    },
    benefits: {
      ar: ["زيارات مجانية مستدامة", "ترتيب أفضل على الكلمات المفتاحية المهمة", "تقارير شهرية بتتبع التقدم"],
      en: ["Sustainable, free organic traffic", "Better rankings on your key search terms", "Monthly reports tracking real progress"],
    },
  },
  {
    slug: "photography",
    icon: "Camera",
    title: { ar: "التصوير الفوتوغرافي", en: "Photography" },
    short: { ar: "صور بجودة تليق بعلامتك", en: "Photography your brand deserves" },
    problem: {
      ar: "صور منتجاتك أو خدماتك مصورة بشكل عادي، ومش بتعكس المستوى الحقيقي لعلامتك التجارية.",
      en: "Your product or service photos look ordinary and don't reflect your brand's real quality.",
    },
    solution: {
      ar: "بنجهز جلسات تصوير احترافية بإضاءة وإخراج مدروسين، تخلي كل صورة تحكي جزء من قصة علامتك.",
      en: "We plan professional shoots with intentional lighting and direction, so every photo tells part of your brand's story.",
    },
    benefits: {
      ar: ["صور احترافية جاهزة لكل المنصات", "إخراج فني مبني على هويتك", "مكتبة صور جاهزة للاستخدام المستمر"],
      en: ["Professional imagery ready for every platform", "Art direction grounded in your identity", "A ready-to-use photo library"],
    },
  },
  {
    slug: "videography",
    icon: "Video",
    title: { ar: "تصوير الفيديو", en: "Videography" },
    short: { ar: "فيديو بيوقف الإبهام عن التمرير", en: "Video that stops the thumb mid-scroll" },
    problem: {
      ar: "الفيديو أهم أداة تسويقية دلوقتي، ومحتواك حالياً إما مفيش أو مش بالمستوى المطلوب.",
      en: "Video is today's most powerful marketing tool, and your current content is either missing or falling short.",
    },
    solution: {
      ar: "من الفكرة للسيناريو للتصوير والمونتاج، بننتج فيديوهات قصيرة وطويلة تخدم هدفك التسويقي بالظبط.",
      en: "From concept to script to shoot and edit, we produce short and long-form video built around your exact marketing goal.",
    },
    benefits: {
      ar: ["إنتاج متكامل من الفكرة للمونتاج", "محتوى مناسب لكل منصة", "قصة بصرية تخدم أهداف حملتك"],
      en: ["Full production from concept to final edit", "Content tailored to every platform", "A visual story that serves your campaign goals"],
    },
  },
  {
    slug: "content-creation",
    icon: "Layers",
    title: { ar: "صناعة المحتوى", en: "Content Creation" },
    short: { ar: "محتوى مستمر بيبني علاقة حقيقية", en: "Consistent content that builds real connection" },
    problem: {
      ar: "بتنشر محتوى من غير خطة واضحة، والنتيجة صفحة مش متسقة وجمهور مش بيتفاعل بانتظام.",
      en: "You're posting without a clear plan, resulting in an inconsistent page and an audience that rarely engages.",
    },
    solution: {
      ar: "بنبني استراتيجية محتوى شاملة بتغطي كل الأشكال (صور، فيديو، كتابة) بما يخدم رحلة عميلك من أول تعرف لحد الشراء.",
      en: "We build a complete content strategy across formats — image, video, and copy — that serves your customer's journey from awareness to purchase.",
    },
    benefits: {
      ar: ["استراتيجية محتوى متكاملة", "تنوع في الأشكال والمنصات", "محتوى مبني على بيانات الجمهور"],
      en: ["A complete, integrated content strategy", "Variety across formats and platforms", "Content grounded in real audience data"],
    },
  },
  {
    slug: "copywriting",
    icon: "PenLine",
    title: { ar: "كتابة المحتوى الإعلاني", en: "Copywriting" },
    short: { ar: "كلمات بتقنع مش بس بتوصف", en: "Words that persuade, not just describe" },
    problem: {
      ar: "نصوصك التسويقية عامة وبتشبه أي شركة تانية، ومش بتخلي العميل يتحرك ياخد قرار.",
      en: "Your marketing copy is generic and sounds like everyone else's, failing to move customers toward a decision.",
    },
    solution: {
      ar: "بنكتب نصوص مقنعة مبنية على فهم حقيقي لجمهورك، بصوت واضح يخص علامتك التجارية وحدها.",
      en: "We write persuasive copy grounded in real audience understanding, in a clear voice that belongs only to your brand.",
    },
    benefits: {
      ar: ["نصوص مقنعة موجهة للتحويل", "صوت واحد وثابت لعلامتك", "محتوى مناسب لكل منصة وسياق"],
      en: ["Conversion-focused, persuasive copy", "A single, consistent brand voice", "Content tailored to every platform and context"],
    },
  },
  {
    slug: "posters",
    icon: "Image",
    title: { ar: "البوسترات", en: "Posters" },
    short: { ar: "تصميم بيلفت النظر من مسافة", en: "Design that catches the eye from a distance" },
    problem: {
      ar: "بوستراتك الحالية مزدحمة أو مش واضحة، والرسالة الأساسية بتضيع وسط التفاصيل.",
      en: "Your current posters are cluttered or unclear, and the core message gets lost in the details.",
    },
    solution: {
      ar: "بنصمم بوسترات بتركز على رسالة واحدة واضحة، بتسلسل بصري بيوصل من أول ثانية.",
      en: "We design posters that focus on one clear message, with a visual hierarchy that lands in the first second.",
    },
    benefits: {
      ar: ["رسالة واضحة ومباشرة", "تصميم مناسب للطباعة الكبيرة", "هوية بصرية متسقة مع علامتك"],
      en: ["A clear, direct message", "Design optimized for large-format print", "Visual consistency with your brand"],
    },
  },
  {
    slug: "flyers",
    icon: "FileImage",
    title: { ar: "الفلايرز", en: "Flyers" },
    short: { ar: "أداة تسويقية بسيطة وفعالة", en: "A simple, effective marketing tool" },
    problem: {
      ar: "محتاج مادة تسويقية مطبوعة لحدث أو عرض معين، بس التصاميم المتاحة عندك عامة ومش مقنعة.",
      en: "You need printed marketing material for an event or offer, but what's available is generic and unconvincing.",
    },
    solution: {
      ar: "بنصمم فلايرز مركزة على عرضك أو حدثك، بمعلومات واضحة ودعوة لاتخاذ إجراء لا يمكن تجاهلها.",
      en: "We design flyers focused on your offer or event, with clear information and a call to action you can't ignore.",
    },
    benefits: {
      ar: ["تصميم موجه لهدف تسويقي محدد", "معلومات واضحة وسهلة القراءة", "ملفات جاهزة للطباعة فوراً"],
      en: ["Design focused on a specific marketing goal", "Clear, easy-to-scan information", "Print-ready files delivered instantly"],
    },
  },
  {
    slug: "banners",
    icon: "GalleryHorizontal",
    title: { ar: "البانرات", en: "Banners" },
    short: { ar: "حضور بصري في كل مكان تحتاجه", en: "Visual presence wherever you need it" },
    problem: {
      ar: "محتاج بانرات لمعرض أو فرع أو فعالية، لكن التصاميم المتاحة مش متسقة مع باقي هويتك.",
      en: "You need banners for an exhibition, branch, or event, but available designs don't match the rest of your identity.",
    },
    solution: {
      ar: "بنصمم بانرات بمقاسات مختلفة (رقمية ومطبوعة) متسقة تماماً مع هويتك البصرية.",
      en: "We design banners across sizes and formats — digital and print — fully consistent with your visual identity.",
    },
    benefits: {
      ar: ["تصميم متسق مع هويتك البصرية", "مقاسات جاهزة لكل استخدام", "ملفات عالية الجودة للطباعة والويب"],
      en: ["Design consistent with your visual identity", "Ready-made sizes for every use case", "High-quality files for both print and web"],
    },
  },
  {
    slug: "marketing-collateral",
    icon: "Package",
    title: { ar: "المطبوعات التسويقية", en: "Marketing Collateral" },
    short: { ar: "كل المطبوعات بهوية واحدة متسقة", en: "Every printed piece, one consistent identity" },
    problem: {
      ar: "بروشورات، كروت شخصية، وقوائم أسعار كل واحدة مصممة بشكل مختلف ومفيش تناسق بينهم.",
      en: "Brochures, business cards, and price lists are each designed differently, with no consistency between them.",
    },
    solution: {
      ar: "بنصمم كل المطبوعات التسويقية على نظام هوية واحد، من كارت الشغل لحد أدلة المنتجات الكاملة.",
      en: "We design all your marketing collateral on one identity system, from business cards to complete product catalogs.",
    },
    benefits: {
      ar: ["نظام تصميم موحد لكل المطبوعات", "صورة احترافية متسقة في كل نقطة تواصل", "ملفات مصدرية قابلة للتعديل مستقبلاً"],
      en: ["A unified design system across all print", "A consistent professional image at every touchpoint", "Editable source files for future updates"],
    },
  },
];
