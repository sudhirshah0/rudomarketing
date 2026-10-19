"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  dir: "ltr" | "rtl";
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.industries": "Industries",
    "nav.work": "Our Work",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.cta": "Speak to an Expert",
    "nav.phone": "+971 55 385 8658",
    "nav.viewAllServices": "View All Services",
    "nav.viewAllIndustries": "Explore All Industries",

    // Hero
    "hero.badge": "DUBAI'S LEADING PERFORMANCE & BRANDING AGENCY",
    "hero.title1": "Engineering Relentless",
    "hero.titleHighlight": "Revenue Growth",
    "hero.title2": "for UAE Market Leaders",
    "hero.sub": "We combine bespoke growth marketing, search authority, and prestige brand experiences to scale high-value enterprises across Dubai, Abu Dhabi, and the GCC.",
    "hero.cta1": "Schedule a Call",
    "hero.cta2": "See Our Work",
    "hero.statRating": "Google Rating",
    "hero.statClients": "Enterprise Retainers",
    "hero.statProjects": "Delivered Campaigns",
    "hero.statYears": "Years in Dubai & GCC",

    // Marquee
    "marquee.title": "TRUSTED BY AMBITIOUS REGIONAL LEADERS & GLOBAL POWERHOUSES",

    // What We Offer
    "services.badge": "WHAT WE OFFER",
    "services.title": "What We Offer",
    "services.sub": "Digital Services Built to Grow Your Brand",
    "services.cta": "Explore Services",

    // Why Choose Us
    "why.badge": "THE RUDO ADVANTAGE",
    "why.title": "Why Dubai's Premier Brands Partner With Us",
    "why.sub": "We abandon generic agency fluff in favor of rigorous commercial alignment, bespoke bilingual execution, and relentless ROI delivery.",

    // About
    "about.badge": "ABOUT RUDO MARKETING",
    "about.title": "Born in Dubai. Driven by Relentless Performance.",
    "about.desc1": "Headquartered in Business Bay, Rudo Marketing was founded on a singular conviction: luxury brands and high-growth enterprises in the UAE deserve more than superficial metrics. They demand accountable commercial growth.",
    "about.desc2": "Our multidisciplinary collective of Arab and international growth architects, data scientists, and creative strategists work as an integrated extension of your C-suite.",
    "about.stat1": "Client Revenue Generated",
    "about.stat2": "Annual Client Retention",
    "about.stat3": "Multilingual Specialists",
    "about.stat4": "Industry Accolades Won",

    // Process
    "process.badge": "OUR METHODOLOGY",
    "process.title": "How We Deliver Predictable Scale",
    "process.sub": "A disciplined 4-stage engine engineered to eliminate guesswork and maximize commercial yield.",

    // Testimonials
    "testimonials.badge": "Client Testimonials & Reviews",
    "testimonials.title": "Our Clients Tell the Story Best",
    "testimonials.sub": "Listen to how we helped UAE enterprises outpace their market competitors.",

    // Client Grid
    "clients.badge": "TRUSTED ACROSS THE UAE",
    "clients.title": "Brands Across the UAE Choose Rudo Marketing",
    "clients.sub": "From premier enterprise leaders to high-growth Dubai ventures, discover the category leaders scaling with our commercial growth architecture.",

    // Blog
    "blog.badge": "Blog & Insights",
    "blog.title": "Articles & Market Insights",
    "blog.sub": "Simple, practical guides on digital marketing and business growth in Dubai and the GCC.",
    "blog.readArticle": "Read Article",
    "blog.viewAll": "View All Articles",

    // FAQ
    "faq.badge": "FAQS",
    "faq.title": "Frequently Asked Questions",
    "faq.sub": "Simple answers to common questions about working with our team.",

    // Closing CTA
    "cta.badge": "INITIATE YOUR NEXT GROWTH CHAPTER",
    "cta.title": "Ready to Dominate Your Category in the UAE?",
    "cta.sub": "Claim your complimentary 45-minute growth consultation and bespoke digital audit with our Senior Strategy Director.",
    "cta.button": "Schedule Your Free Audit",
    "cta.guarantee": "No commitment required. Custom analysis prepared within 48 hours.",

    // Modal
    "modal.title": "Let's Get Started",
    "modal.sub": "Tell us about your objectives and we'll engineer a tailored proposal within 24 business hours.",
    "modal.name": "Full Name",
    "modal.email": "Work Email",
    "modal.phone": "Phone Number (UAE / Int'l)",
    "modal.service": "Primary Service Needed",
    "modal.timeline": "Target Launch Timeline",
    "modal.budget": "Monthly Marketing Investment",
    "modal.budgetPrefix": "AED",
    "modal.submit": "Submit Growth Brief",
    "modal.submitting": "Processing Brief...",
    "modal.successTitle": "Brief Received Successfully!",
    "modal.successSub": "One of our Senior Partners in Dubai will review your metrics and reach out within 24 hours.",
    "modal.close": "Close Window",

    // Footer
    "footer.tagline": "AI-powered lead generation and performance marketing agency in Dubai.",
    "footer.office": "Dubai Headquarters",
    "footer.address": "Port Saeed Business Village, Block A, 808A, Dubai, United Arab Emirates",
    "footer.email": "info@rudomarketing.ae",
    "footer.phone": "+971 55 385 8658",
    "footer.quickLinks": "Company",
    "footer.servicesTitle": "Services",
    "footer.industriesTitle": "Industries",
    "footer.legal": "Legal & Compliance",
    "footer.rights": "All rights reserved. Registered under Dubai Economy and Tourism.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms & Conditions",
    "whatsapp.text": "Talk on WhatsApp →",
  },
  ar: {
    // Nav
    "nav.home": "الرئيسية",
    "nav.services": "الخدمات",
    "nav.industries": "القطاعات",
    "nav.work": "أعمالنا",
    "nav.about": "عن روودو",
    "nav.contact": "اتصل بنا",
    "nav.cta": "تحدث مع خبير",
    "nav.phone": "+971 55 385 8658",
    "nav.viewAllServices": "عرض كافة الخدمات",
    "nav.viewAllIndustries": "استكشف جميع القطاعات",

    // Hero
    "hero.badge": "وكالة التسويق الرائدة للأداء والعلامات التجارية في دبي",
    "hero.title1": "نهندس نمواً استثنائياً في",
    "hero.titleHighlight": "العوائد الاستثمارية",
    "hero.title2": "لقادة السوق في الإمارات",
    "hero.sub": "نجمع بين استراتيجيات التسويق عالي الأداء، تصدر محركات البحث، وتجارب العلامات التجارية الفاخرة لتوسيع نطاق الشركات الكبرى في دبي، أبوظبي، ودول الخليج.",
    "hero.cta1": "احجز مكالمة استراتيجية",
    "hero.cta2": "شاهد أعمالنا",
    "hero.statRating": "تقييم غوغل",
    "hero.statClients": "عميل مؤسسي نشط",
    "hero.statProjects": "حملة مكتملة بنجاح",
    "hero.statYears": "سنوات من الريادة في الإمارات",

    // Marquee
    "marquee.title": "شريك النمو الموثوق لكبرى الشركات الإقليمية والمؤسسات العالمية",

    // What We Offer
    "services.badge": "خدماتنا",
    "services.title": "ما نقدمه",
    "services.sub": "خدمات رقمية مصممة لتسريع نمو علامتك التجارية",
    "services.cta": "استكشف الخدمات",

    // Why Choose Us
    "why.badge": "ميزة روودو التنافسية",
    "why.title": "لماذا تختار كبرى علامات دبي التجارية الشراكة معنا؟",
    "why.sub": "نبتعد عن الوعود التقليدية لنقدم حلولاً ترتكز على النمو المالي، التنفيذ المزدوج باللغتين العربية والإنجليزية، وعائد استثماري حقيقي.",

    // About
    "about.badge": "عن وكالة روودو للتسويق",
    "about.title": "وُلدنا في دبي. مدفوعون بالأداء والنتائج الملموسة.",
    "about.desc1": "يقع مقرنا الرئيسي في الخليج التجاري بدبي. تأسست روودو للتسويق على مبدأ راسخ: العلامات التجارية الفاخرة والمؤسسات الكبرى في الإمارات تستحق نتائج تتجاوز الأرقام السطحية، بل تطلب عوائد تجارية مستدامة.",
    "about.desc2": "يعمل فريقنا متعدد التخصصات من خبراء النمو وعلماء البيانات والمبتكرين كشريك استراتيجي مكمل للإدارة التنفيذية لشركتكم.",
    "about.stat1": "إجمالي العوائد المحققة لعملائنا",
    "about.stat2": "معدل استبقاء وتجديد العملاء سنويًا",
    "about.stat3": "خبير ومستشار تسويقي محترف",
    "about.stat4": "جائزة إقليمية في الإبداع والأداء",

    // Process
    "process.badge": "منهجية العمل",
    "process.title": "كيف نحقق نموًا مدروسًا وقابلاً للتوسع",
    "process.sub": "محرك من 4 مراحل يزيل التخمين ويحقق أعلى عائد استثماري لأعمالك.",

    // Testimonials
    "testimonials.badge": "آراء وتقييمات العملاء",
    "testimonials.title": "عملاؤنا يروون قصة النجاح بأفضل صورة",
    "testimonials.sub": "استمع إلى تجارب مسؤولي الشركات في دبي وكيف ساعدناهم في التفوق على منافسيهم.",

    // Client Grid
    "clients.badge": "موثوق به في أنحاء الإمارات",
    "clients.title": "أبرز العلامات التجارية في الإمارات تختار روودو للتسويق",
    "clients.sub": "من الشركات والمؤسسات الرائدة إلى الشركات السريعة النمو، نرافق نخبة الأعمال لتحقيق الريادة السوقية.",

    // Blog
    "blog.badge": "المدونة والمقالات",
    "blog.title": "مقالات ورؤى تسويقية",
    "blog.sub": "أدلة مبسطة وعملية حول التسويق الرقمي ونمو الأعمال في دبي والخليج.",
    "blog.readArticle": "قراءة المقال",
    "blog.viewAll": "عرض جميع المقالات",

    // FAQ
    "faq.badge": "الأسئلة المتكررة",
    "faq.title": "الأسئلة الأكثر شيوعاً",
    "faq.sub": "إجابات بسيطة ومباشرة على كل استفساراتكم حول التعاون معنا.",

    // Closing CTA
    "cta.badge": "ابدأ مرحلة النمو القادمة اليوم",
    "cta.title": "هل أنت مستعد لقيادة مجالك التجاري في الإمارات؟",
    "cta.sub": "احصل على جلسة استشارية مجانية لمدة 45 دقيقة وتدقيق رقمي شامل مع مدير الاستراتيجيات الأول لدينا.",
    "cta.button": "احجز تدقيقك التسويقي المجاني",
    "cta.guarantee": "دون أي التزام مسبق. تقرير مخصص يُسلم خلال 48 ساعة.",

    // Modal
    "modal.title": "دعنا نبدأ خطة نموكم",
    "modal.sub": "شاركنا أهدافكم وسنقوم بإعداد مقترح استراتيجي مخصص خلال 24 ساعة عمل.",
    "modal.name": "الاسم الكامل",
    "modal.email": "البريد الإلكتروني للعمل",
    "modal.phone": "رقم الهاتف (الإمارات / دولي)",
    "modal.service": "الخدمة الأساسية المطلوبة",
    "modal.timeline": "الإطار الزمني المستهدف للإطلاق",
    "modal.budget": "الميزانية التسويقية الشهرية",
    "modal.budgetPrefix": "درهم إماراتي",
    "modal.submit": "إرسال بيانات المشروع",
    "modal.submitting": "جاري معالجة الطلب...",
    "modal.successTitle": "تم استلام طلبكم بنجاح!",
    "modal.successSub": "سيتواصل معكم أحد شركائنا الإداريين في دبي خلال 24 ساعة.",
    "modal.close": "إغلاق النافذة",

    // Footer
    "footer.tagline": "وكالة متطورة لتوليد العملاء المحتملين والتسويق القائم على الأداء بالذكاء الاصطناعي في دبي.",
    "footer.office": "المقر الرئيسي في دبي",
    "footer.address": "قرية الأعمال، بور سعيد، بلوك A، مكتب 808A، دبي، الإمارات العربية المتحدة",
    "footer.email": "info@rudomarketing.ae",
    "footer.phone": "+971 55 385 8658",
    "footer.quickLinks": "روابط سريعة",
    "footer.servicesTitle": "خدماتنا",
    "footer.industriesTitle": "القطاعات",
    "footer.legal": "القانونية والامتثال",
    "footer.rights": "جميع الحقوق محفوظة. مرخصة من دائرة الاقتصاد والسياحة بدبي.",
    "footer.privacy": "سياسة الخصوصية",
    "footer.terms": "الشروط والأحكام",
    "whatsapp.text": "تحدث عبر واتساب ←",
  },
};

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  dir: "ltr",
  t: (key: string) => key,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("rudo_lang") as Language;
    if (saved === "ar" || saved === "en") {
      setLanguageState(saved);
      document.documentElement.dir = saved === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = saved;
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("rudo_lang", lang);
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  };

  const t = (key: string): string => {
    return translations[language][key] || translations.en[key] || key;
  };

  const dir = language === "ar" ? "rtl" : "ltr";

  return (
    <LanguageContext.Provider value={{ language, setLanguage, dir, t }}>
      <div dir={dir} className={language === "ar" ? "font-arabic" : "font-body"}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
