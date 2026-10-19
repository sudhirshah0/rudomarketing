"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FaqSection() {
  const { t, language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What makes Rudo Marketing distinct from other digital marketing agencies in Dubai?",
      qAr: "ما الذي يميز وكالة روودو للتسويق عن غيرها من وكالات التسويق في دبي؟",
      a: "Unlike traditional agencies that prioritize vanity metrics (impressions, follower counts), Rudo operates on a commercial ROI model. We integrate directly into your CRM, optimize strictly for qualified sales opportunities and CAC, employ native GCC bilingual strategists, and never outsource account execution to junior offshore teams.",
      aAr: "على خلاف الوكالات التقليدية التي تركز على أرقام المشاهدات والمتابعين، تعمل روودو وفق نموذج العائد الاستثماري التجاري. نربط أنظمتنا مباشرة بنظام المبيعات لديكم، ونقيس نجاحنا بجودة الصفقات وخفض تكلفة الاستحواذ، مع فريق خليجي متمرس يضمن عدم تفويض العمل لجهات خارجية.",
    },
    {
      q: "What are your retainer models and minimum monthly investment requirements?",
      qAr: "ما هي نماذج العقود لديكم والحد الأدنى للميزانية الشهرية؟",
      a: "Our strategic growth retainers typically begin at AED 15,000 to AED 25,000 per month for focused discipline management (such as Enterprise SEO or Full-Funnel Paid Advertising), scaling up to AED 50,000+ for enterprise omnichannel retainers. We also recommend minimum ad spends starting at AED 10,000/month to guarantee statistical significance in algorithmic machine learning.",
      aAr: "تبدأ باقاتنا الاستراتيجية عادة من 15,000 إلى 25,000 درهم إماراتي شهرياً لإدارة تخصص محدد (مثل تحسين محركات البحث أو إدارة الحملات الممولة)، وتصل إلى 50,000+ درهم لإدارة النمو الشامل لكبرى الشركات. كما نوصي بإنفاق إعلاني لا يقل عن 10,000 درهم شهرياً لضمان سرعة تعلم خوارزميات المنصات.",
    },
    {
      q: "How do you ensure authentic bilingual (Arabic & English) campaign execution?",
      qAr: "كيف تضمنون جودة المحتوى المزدوج باللغتين العربية والإنجليزية؟",
      a: "We strictly reject automatic software translation. All Arabic copy is ideated and written from scratch by native Emirati and regional Gulf copywriters who understand Khaleeji cultural nuances, dialectal preferences, and luxury tonality, ensuring seamless resonance with local decision-makers.",
      aAr: "نرفض تماماً الترجمة الآلية. يتم ابتكار وكتابة كافة النصوص العربية من الصفر بواسطة كُتّاب إماراتيين وخليجيين يدركون بدقة الذوق العام والنبرة الفاخرة التي تخاطب النخبة وصناع القرار في المنطقة.",
    },
    {
      q: "How quickly can our enterprise expect to see measurable commercial returns?",
      qAr: "ما هو الإطار الزمني المتوقع لبدء ظهور نتائج وعوائد ملموسة؟",
      a: "Paid performance advertising (Google Search, Meta, TikTok) typically generates qualified inbound pipeline within 14 to 21 days of launch once tracking telemetry is dialed in. Enterprise SEO, Generative Engine Optimization (GEO), and brand positioning typically achieve substantial organic revenue inflection within 90 to 120 days.",
      aAr: "تبدأ الحملات الإعلانية الممولة (غوغل، ميتا، تيك توك) في جلب عملاء مؤهلين خلال 14 إلى 21 يوماً من الإطلاق فور اكتمال التتبع الرقمي. بينما يحقق تحسين محركات البحث (SEO) والذكاء الاصطناعي (GEO) وبناء الهوية قفزات ملحوظة في العوائد خلال 90 إلى 120 يوماً.",
    },
    {
      q: "Do you guarantee specific sales volumes or #1 rankings on Google?",
      qAr: "هل تقدمون ضمانات محددة لحجم المبيعات أو المركز الأول في غوغل؟",
      a: "Any agency guaranteeing an absolute #1 Google ranking is using black-hat methods that violate Google search guidelines. Instead, Rudo provides contractual Service Level Agreements (SLAs) regarding qualified lead qualification standards, campaign delivery speed, technical uptime, and strict monthly performance guardrails.",
      aAr: "أي وكالة تعدك بضمان المركز الأول في غوغل تستخدم ممارسات مخالفة تضر بموقعك مستقبلاً. بالمقابل، تلتزم روودو باتفاقيات مستوى خدمة (SLAs) تعاقدية محددة ترتبط بجودة العملاء المحتملين وسرعة الاستجابة ومعايير أداء رقمية شفافة وموثقة.",
    },
    {
      q: "Which specific industry sectors do you specialize in within the UAE?",
      qAr: "ما هي القطاعات الاقتصادية التي تتخصصون فيها داخل الإمارات؟",
      a: "We possess deep domain expertise across Dubai & Abu Dhabi Real Estate (developers & brokerages), Ultra-Luxury Hospitality & Dining, High-AOV E-Commerce & Perfumery, FinTech & Family Offices, and Aesthetic Healthcare clinics.",
      aAr: "نمتلك خبرة عميقة ومثبتة في قطاع العقارات الفاخرة بدبي وأبوظبي، الضيافة والفنادق والمنتجعات، التجارة الإلكترونية الفاخرة والعطور، التقنية المالية والمكاتب العائلية الاستثمارية، والعيادات الطبية التجميلية الكبرى.",
    },
    {
      q: "What visibility and reporting dashboards do we receive as partners?",
      qAr: "ما هي لوحات المتابعة والتقارير التي توفرونها لشركائكم؟",
      a: "Clients receive 24/7 access to live interactive executive dashboards (Looker Studio & PowerBI) connecting ad spend to pipeline revenue in real time. We also conduct bi-weekly strategy reviews and monthly C-suite impact presentations.",
      aAr: "يحصل عملاؤنا على وصول فوري ومباشر على مدار الساعة إلى لوحات تحكم تفاعلية (Looker Studio & PowerBI) تربط الإنفاق الإعلاني بالعوائد المحققة لحظياً، بالإضافة إلى اجتماعات استراتيجية نصف شهرية وعرض شهري شامل للإدارة العليا.",
    },
    {
      q: "Are your marketing campaigns compliant with UAE advertising regulations?",
      qAr: "هل تتوافق حملاتكم مع القوانين والتشريعات الإعلانية في دولة الإمارات؟",
      a: "Yes. All creative concepts, influencer partnerships, and promotional claims strictly adhere to the guidelines established by the UAE National Media Council (NMC), Dubai Economy and Tourism (DET), and local consumer protection standards.",
      aAr: "نعم بكل تأكيد. تلتزم كافة تصاميمنا وحملاتنا وشراكات المؤثرين بالمعايير والضوابط المعتمدة من مجلس الإمارات للإعلام، ودائرة الاقتصاد والسياحة بدبي، وقوانين حماية المستهلك المعمول بها في الدولة.",
    },
    {
      q: "How is day-to-day communication managed between our team and Rudo?",
      qAr: "كيف يتم تنظيم التواصل اليومي ومتابعة العمل بين فريقينا؟",
      a: "You are assigned a dedicated Senior Growth Strategist and a direct shared Slack or WhatsApp VIP channel for rapid everyday communication, backed by bi-weekly formal sprints and quarterly planning sessions at our Port Saeed Business Village offices in Dubai.",
      aAr: "يُخصص لمؤسستكم مدير استراتيجي أول متمرس، مع قناة تواصل مخصصة وسريعة عبر سلاك أو واتساب للأعمال اليومية، إلى جانب اجتماعات عمل دورية وجلسات تخطيط فصلي في مقرنا بقرية الأعمال في دبي.",
    },
    {
      q: "What does the onboarding process look like after agreement execution?",
      qAr: "كيف تسير مرحلة التدشين وبدء العمل (Onboarding) بعد توقيع الاتفاقية؟",
      a: "Our onboarding is completed within 7 to 10 business days: Phase 1 is Technical & Analytics Access; Phase 2 is Competitor & Market Audit; Phase 3 is Strategy & Creative Blueprint sign-off; Phase 4 is Campaign Staging and Live Launch.",
      aAr: "تكتمل مرحلة التدشين خلال 7 إلى 10 أيام عمل عبر 4 مراحل: استلام صلاحيات الحسابات والأنظمة، إنجاز التدقيق الفني والمنافسين، اعتماد الخطة الاستراتيجية والنماذج الإبداعية، ثم الإطلاق الرسمي والمراقبة الحية.",
    },
  ];

  // Schema for FAQPage
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <section className="py-24 bg-rudo-primary-card border-y border-white/5 relative">
      {/* JSON-LD Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="site-container max-w-5xl">
        {/* Header */}
        <div data-gsap="fade-up" className="text-center max-w-2xl mx-auto mb-14 space-y-3 flex flex-col items-center justify-center">
          <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-rudo-accent/10 border border-rudo-accent/20 text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-widest text-rudo-accent">
            <span className="w-1.5 h-1.5 rounded-full bg-rudo-accent animate-pulse" />
            <span>{t("faq.badge")}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight text-center">
            {t("faq.title")}
          </h2>
          <p className="text-sm sm:text-base text-gray-400 font-normal max-w-lg mx-auto text-center">
            {t("faq.sub")}
          </p>
        </div>

        {/* 10 FAQ Accordion Items */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden backdrop-blur-xl ${
                  isOpen
                    ? "bg-white/[0.12] border-blue-400/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_15px_30px_rgba(37,99,235,0.15)]"
                    : "bg-white/[0.04] border-white/10 hover:border-white/20 hover:bg-white/[0.08]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-rudo-accent/60">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="text-base sm:text-lg font-bold font-heading text-white">
                      {language === "ar" ? faq.qAr : faq.q}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-rudo-accent" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 animate-fadeIn">
                    <div className="h-px bg-white/5 mb-4" />
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed pl-7">
                      {language === "ar" ? faq.aAr : faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
