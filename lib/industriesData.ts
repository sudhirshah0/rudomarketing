export interface IndustryData {
  slug: string;
  title: string;
  titleAr: string;
  tagline: string;
  taglineAr: string;
  description: string;
  descriptionAr: string;
  heroImage: string;
  stats: { label: string; labelAr: string; value: string }[];
  challenges: { problem: string; problemAr: string; solution: string; solutionAr: string }[];
}

export const industriesCatalog: Record<string, IndustryData> = {
  "real-estate": {
    slug: "real-estate",
    title: "Dubai Real Estate & Off-Plan Luxury Developments",
    titleAr: "العقارات الفاخرة والمشاريع قيد الإنشاء بدبي",
    tagline: "Turn Global and Regional Capital into Verified Villa and Penthouse Sales",
    taglineAr: "تحويل رؤوس الأموال الإقليمية والدولية إلى صفقات بيع مؤكدة للفلل والبنتهاوس",
    description:
      "Dubai's real estate ecosystem is among the most fiercely contested in the world. We build conversational qualification funnels, hyper-targeted HNWI Meta & Google campaigns, and WhatsApp closing engines that connect top tier-1 brokerages and master developers with ready-to-transact investors.",
    descriptionAr:
      "تعتبر سوق العقارات في دبي من أكثر الأسواق تنافسية في العالم. نبني مسارات تأهيل مخصصة وحملات إعلانية دقيقة لاستهداف المستثمرين ذوي الملاءة العالية وربطهم بنظام حجز الصفقات مباشرة.",
    heroImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200",
    stats: [
      { label: "Verified Pipeline", labelAr: "قيمة الصفقات المؤهلة", value: "AED 120M+" },
      { label: "Lead-to-Viewing Rate", labelAr: "نسبة التحويل لمعاينة", value: "18.4%" },
      { label: "Lower Cost Per Qualified Lead", labelAr: "انخفاض تكلفة العميل الجاد", value: "-42%" },
    ],
    challenges: [
      {
        problem: "Low-quality form leads with fake numbers or uncontactable tire-kickers.",
        problemAr: "بيانات اتصال وهمية أو عملاء غير جادين عبر نماذج الإعلانات التقليدية.",
        solution: "Direct WhatsApp OTP-verified conversational qualification filtering for minimum investment budgets.",
        solutionAr: "مسارات واتساب تفاعلية ومؤكدة برمز التحقق تفلتر العملاء وفق حد أدنى للميزانية الاستثمارية.",
      },
      {
        problem: "High advertising saturation driving Meta CAC through the roof.",
        problemAr: "تشبع إعلاني هائل يؤدي لارتفاع تكلفة اكتساب العميل على منصات ميتا.",
        solution: "Proprietary first-party audience modeling targeting Gulf family offices and European capital flight.",
        solutionAr: "استهداف شرائح جماهيرية حصرية من مكاتب الاستثمار العائلية بالخليج والمستثمرين الأوروبيين.",
      },
    ],
  },
  "luxury-hospitality": {
    slug: "luxury-hospitality",
    title: "Luxury Hospitality, Resorts & Fine Dining",
    titleAr: "الضيافة الفاخرة، المنتجعات والمطاعم الراقية",
    tagline: "Drive High-Yield Direct Bookings and Unrivaled Brand Prestige Across Dubai & the Palm",
    taglineAr: "زيادة الحجوزات المباشرة وترسيخ مكانة فندقية فاخرة في دبي ونخلة جميرا",
    description:
      "Reduce dependence on predatory 18-25% OTA commissions. We engineer prestige digital guest acquisition through sensory cinematic video, VIP influencer showcases, and targeted search intent capturing international luxury travelers before they search on Booking.com.",
    descriptionAr:
      "تخلص من العمولات المرتفعة لمنصات الحجز الخارجية (18-25%). نساعد المنتجعات الفاخرة على كسب حجوزات مباشرة من خلال محتوى سينمائي ساحر وشراكات راقية مع كبار الشخصيات.",
    heroImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200",
    stats: [
      { label: "Direct Bookings Lift", labelAr: "زيادة الحجوزات المباشرة", value: "3.2x" },
      { label: "OTA Commission Savings", labelAr: "توفير عمولات المنصات", value: "AED 2.4M" },
      { label: "Average Daily Rate (ADR)", labelAr: "ارتفاع متوسط سعر الغرفة", value: "+28%" },
    ],
    challenges: [
      {
        problem: "Heavy reliance on OTAs draining profit margins.",
        problemAr: "الاعتماد المفرط على منصات الحجز الخارجية مما يلتهم هوامش الربح.",
        solution: "Direct booking incentives, exclusive loyalty perks, and Google Hotel Ads integration.",
        solutionAr: "عروض حصرية للحجز المباشر وبرامج ولاء متميزة وتكامل مباشر مع إعلانات غوغل للفنادق.",
      },
    ],
  },
  "ecommerce-retail": {
    slug: "ecommerce-retail",
    title: "E-Commerce & High-AOV Retail in the GCC",
    titleAr: "التجارة الإلكترونية والتجزئة الفاخرة في الخليج",
    tagline: "Scale Omnichannel Revenue Across the UAE, Saudi Arabia, and Kuwait",
    taglineAr: "مضاعفة مبيعات المتاجر الإلكترونية في الإمارات والسعودية والكويت",
    description:
      "We scale luxury fragrance, fashion, and lifestyle brands with sophisticated retention flows, Tabby/Tamara buy-now-pay-later integrations, high-velocity TikTok hooks, and bilingual Ramadan/White Friday promotional engines.",
    descriptionAr:
      "نساعد علامات العطور والأزياء وأسلوب الحياة على مضاعفة مبيعاتها في الخليج من خلال حملات إعلانية متقدمة، ربط حلول الدفع الآجل (تابي وتمارا)، واستراتيجيات مدروسة لمواسم الذروة.",
    heroImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200",
    stats: [
      { label: "Blended Return on Ad Spend", labelAr: "متوسط العائد على الإنفاق الإعلاني", value: "5.1x" },
      { label: "Average Order Value (AOV)", labelAr: "ارتفاع متوسط قيمة السلة", value: "+34%" },
      { label: "Annual GMV Managed", labelAr: "إجمالي المبيعات المدارة", value: "AED 85M" },
    ],
    challenges: [
      {
        problem: "Cart abandonment and high Cash-on-Delivery (COD) return rates.",
        problemAr: "ارتفاع نسب التخلي عن السلة ومشكلات الإرجاع في الدفع عند الاستلام.",
        solution: "Frictionless checkout UX with pre-paid incentives and automated WhatsApp abandoned cart recovery.",
        solutionAr: "تجربة دفع سلسة للغاية ومكافآت للدفع المسبق واسترجاع السلات المتروكة تلقائياً عبر واتساب.",
      },
    ],
  },
  "b2b-finance": {
    slug: "b2b-finance",
    title: "B2B, FinTech & Corporate Services in DIFC / ADGM",
    titleAr: "الشركات، التقنية المالية والمكاتب الاستثمارية في مركز دبي المالي",
    tagline: "Generate Predictable Enterprise Pipeline Among GCC Decision-Makers and Family Offices",
    taglineAr: "بناء قنوات استقطاب مستمرة للمؤسسات المالية والمكاتب العائلية في الخليج",
    description:
      "In B2B and institutional wealth management, credibility and trust precede all else. We deploy sophisticated LinkedIn ABM, thought leadership ghostwriting for CEOs, and authoritative Google Search campaigns that place your corporate advisory at the center of GCC boardroom discussions.",
    descriptionAr:
      "في قطاع الأعمال والخدمات المالية، الثقة والمصداقية هما أساس كل نجاح. ندير حملات استهداف متقدمة لكبار التنفيذيين وصناع القرار عبر لينكدإن ومحركات البحث لتعزيز مكانتكم المرجعية.",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200",
    stats: [
      { label: "Institutional Inquiries", labelAr: "استفسارات مؤسسية مؤهلة", value: "72+" },
      { label: "Pipeline Value Generated", labelAr: "قيمة الفرص التعاقدية", value: "AED 45M" },
      { label: "Average Deal Size", labelAr: "متوسط حجم الصفقة", value: "AED 250k" },
    ],
    challenges: [
      {
        problem: "Lengthy 6 to 12 month B2B sales cycles with complex buying committees.",
        problemAr: "طول دورة المبيعات التي تمتد لعدة أشهر مع تعدد متخذي القرار.",
        solution: "Multi-touch retargeting sequences with whitepapers, regulatory briefings, and CEO video thought leadership.",
        solutionAr: "تسلسلات إعادة استهداف متعددة تعتمد على الدراسات التحليلية والتقارير التنظيمية والفيديوهات التنفيذية.",
      },
    ],
  },
  "healthcare-wellness": {
    slug: "healthcare-wellness",
    title: "Aesthetic Healthcare, Wellness & Medical Clinics",
    titleAr: "الرعاية الصحية، العيادات التجميلية ومراكز الاستشفاء",
    tagline: "Acquire High-Value Cosmetic and Specialty Patients Across Dubai Healthcare City & Jumeirah",
    taglineAr: "استقطاب المرضى والمراجعين ذوي القيمة العالية لعيادات التجميل في دبي وجميرا",
    description:
      "Medical advertising in the UAE demands strict regulatory compliance with DHA and MOH standards while appealing to discerning luxury aesthetic patients. We engineer patient acquisition funnels combining before/after storytelling, surgeon credential authority, and VIP consultation booking flows.",
    descriptionAr:
      "يتطلب التسويق الطبي في الإمارات التزاماً صارماً بتشريعات هيئة الصحة بدبي (DHA) ووزارة الصحة مع مخاطبة المرضى الباحثين عن أعلى مستويات الرعاية. نبني مسارات حجز راقية تبرز كفاءة الأطباء والنتائج الحقيقية.",
    heroImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200",
    stats: [
      { label: "Qualified Patient Leads", labelAr: "حجوزات واستفسارات علاجية مؤهلة", value: "1,400+" },
      { label: "Direct Booking Rate", labelAr: "معدل الحجز الفعلي", value: "+140%" },
      { label: "DHA Compliance Track Record", labelAr: "نسبة الامتثال للوائح الصحية", value: "100%" },
    ],
    challenges: [
      {
        problem: "Strict regulatory constraints prohibiting sensational medical claims.",
        problemAr: "قيود تنظيمية ورقابية مشددة تمنع الادعاءات الطبية غير المثبتة.",
        solution: "Pre-approved DHA compliant creative blueprints focusing on board certifications, safety, and patient journeys.",
        solutionAr: "نماذج إعلانية معتمدة ومتوافقة تركز على خبرة الاستشاريين ومعايير الأمان والتجارب الواقعية الموثوقة.",
      },
    ],
  },
};
