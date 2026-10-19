"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useModal } from "@/context/ModalContext";
import {
  Sparkles,
  TrendingUp,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Calendar,
} from "lucide-react";

export default function CaseStudiesPage() {
  const { language, dir } = useLanguage();
  const { openModal } = useModal();
  const [activeFilter, setActiveFilter] = useState("all");

  const studies = [
    {
      id: "apex-prime",
      sector: "real-estate",
      title: "How Apex Prime Sold Out 48 Luxury Palm Jumeirah Villas in 120 Days",
      titleAr: "كيف حققت شركة أبكس برايم بيع 48 فيلا فاخرة بنخلة جميرا خلال 120 يوماً",
      client: "Apex Prime Luxury Real Estate",
      location: "Palm Jumeirah & Downtown Dubai",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000",
      stats: [
        { label: "Gross Pipeline Value", labelAr: "إجمالي قيمة الصفقات", value: "AED 65M+" },
        { label: "Cost Per Qualified Lead", labelAr: "تكلفة العميل المؤهل", value: "-42%" },
        { label: "Blended Paid ROAS", labelAr: "عائد الإنفاق الإعلاني", value: "5.8x" },
      ],
      challenge:
        "The brokerage was relying on legacy property portals and generic Meta forms resulting in 80%+ unqualified inquiries and overburdened agents.",
      challengeAr:
        "كانت الشركة تعتمد على بوابات العقارات التقليدية ونماذج إعلانية عشوائية تؤدي إلى 80%+ من الاتصالات غير الجادة وإهدار وقت الوسطاء.",
      solution:
        "Rudo built a two-step algorithmic WhatsApp qualification engine, deployed hyper-luxury 4K drone reels, and implemented server-side conversion tracking targeting European and Gulf family investors.",
      solutionAr:
        "طورت روودو مسار تأهيل تفاعلي عبر واتساب، وأنتجت إعلانات تصوير جوي بدقة 4K مع استهداف مباشر للمستثمرين الخليجيين والأوروبيين من أصحاب الملاءة المالية.",
    },
    {
      id: "palm-haven",
      sector: "luxury",
      title: "Tripling Direct Non-OTA Bookings for a 5-Star Dubai Resort",
      titleAr: "مضاعفة الحجوزات المباشرة 3 مرات لمنتجع 5 نجوم في دبي وتوفير العمولات",
      client: "The Palm Haven Luxury Resort & Spa",
      location: "East Crescent, Palm Jumeirah",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1000",
      stats: [
        { label: "Direct Bookings Lift", labelAr: "زيادة الحجوزات المباشرة", value: "3.2x" },
        { label: "OTA Commission Saved", labelAr: "توفير عمولات المنصات", value: "AED 2.4M" },
        { label: "Average Daily Rate (ADR)", labelAr: "ارتفاع متوسط سعر الغرفة", value: "+28%" },
      ],
      challenge:
        "Over 74% of the resort's reservations came through third-party OTAs, costing millions annually in intermediary commission fees.",
      challengeAr:
        "أكثر من 74% من حجوزات المنتجع كانت تأتي عبر منصات خارجية، مما يقتطع ملايين الدراهم سنوياً كعمولات وسطاء.",
      solution:
        "We designed a lightning-fast headless Next.js direct booking engine, launched Google Hotel Ads, and created exclusive luxury guest packages.",
      solutionAr:
        "قمنا بتطوير محرك حجز مباشر وفائق السرعة بتقنية Next.js، وإطلاق حملات إعلانية مخصصة لفنادق غوغل مع حوافز حصرية للحجز المباشر.",
    },
    {
      id: "oud-silk",
      sector: "ecommerce",
      title: "Scaling Luxury Perfume GCC E-Commerce with 5.1x Ramadan ROAS",
      titleAr: "مضاعفة مبيعات متجر عطور فاخرة في الخليج بعائد 5.1 أضعاف خلال موسم رمضان",
      client: "Oud & Silk Perfumery",
      location: "UAE, Saudi Arabia, Kuwait",
      image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1000",
      stats: [
        { label: "Holiday GMV Generated", labelAr: "مبيعات موسم الأعياد", value: "AED 18.4M" },
        { label: "Average Order Value", labelAr: "متوسط قيمة الطلب", value: "AED 680" },
        { label: "Customer Acquisition Cost", labelAr: "تكلفة الاستحواذ", value: "-31%" },
      ],
      challenge:
        "Struggled to achieve profitable scale outside the UAE during competitive peak gifting seasons in Saudi Arabia.",
      challengeAr:
        "صعوبة التوسع المربح خارج الإمارات خلال مواسم الهدايا الأكثر شراسة وتنافسية في المملكة العربية السعودية.",
      solution:
        "Deployed localized Saudi dialect TikTok creator campaigns, Tabby 4-installment checkout UX, and automated VIP fragrance bundle upsells.",
      solutionAr:
        "أطلقنا حملات تيك توك باللهجة السعودية بالتعاون مع صناع محتوى مرموقين، وتكامل سلس مع حلول الدفع (تابي)، وعروض باقات الهدايا الحصرية.",
    },
    {
      id: "venturevault",
      sector: "fintech",
      title: "Securing 72 Institutional Family Office Leads in DIFC",
      titleAr: "استقطاب 72 مكتباً عائلياً استثمارياً مؤهلاً لصندوق استثماري في مركز دبي المالي",
      client: "VentureVault Alternative Investments",
      location: "Gate District, DIFC",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000",
      stats: [
        { label: "Qualified Family Offices", labelAr: "مكاتب عائلية مؤهلة", value: "72+" },
        { label: "Direct Inbound Pipeline", labelAr: "قيمة الصناديق المتفاوض عليها", value: "AED 45M" },
        { label: "Organic Search Authority", labelAr: "تصدر الكلمات الاستثمارية", value: "Top 3" },
      ],
      challenge:
        "Traditional digital marketing failed to engage ultra-conservative family office trustees and high-net-worth liquidity managers.",
      challengeAr:
        "فشلت أساليب التسويق الرقمي العادية في كسب ثقة مدراء الأصول وأمناء الصناديق العائلية المحافظة.",
      solution:
        "Executive LinkedIn ABM campaigns, proprietary UAE cross-border tax whitepapers, and SEO targeting regulatory fund structures.",
      solutionAr:
        "حملات استهداف مدروسة لصناع القرار على لينكدإن، ونشر تقارير تنظيمية محكمة، وسيو متخصص للهياكل الاستثمارية في مركز دبي المالي.",
    },
  ];

  const filtered =
    activeFilter === "all"
      ? studies
      : studies.filter((s) => s.sector === activeFilter);

  return (
    <div className="pt-32 pb-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono font-bold tracking-[0.2em] uppercase text-purple-300">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse shadow-[0_0_8px_#C084FC]" />
            <span>
              {language === "ar" ? "سجل إنجازاتنا الميداني" : "Proven Commercial Case Studies"}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white leading-tight">
            {language === "ar" ? "أعمالنا والنتائج المحققة" : "Case Studies & Client Wins"}
          </h1>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            {language === "ar"
              ? "نستعرض كيف ساعدنا قادة السوق في دبي والخليج على التغلب على التحديات التسويقية المعقدة وتحقيق عوائد بمئات ملايين الدراهم."
              : "Discover how we engineered ruthless revenue acceleration for leading brands across Dubai, Abu Dhabi, and the GCC."}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
          {[
            { id: "all", labelEn: "All Case Studies", labelAr: "كافة دراسات الحالة" },
            { id: "real-estate", labelEn: "Real Estate", labelAr: "العقارات الفاخرة" },
            { id: "luxury", labelEn: "Hospitality & Dining", labelAr: "الضيافة الفاخرة" },
            { id: "ecommerce", labelEn: "E-Commerce", labelAr: "التجارة الإلكترونية" },
            { id: "fintech", labelEn: "FinTech & B2B", labelAr: "التقنية المالية والشركات" },
          ].map((pill) => (
            <button
              key={pill.id}
              onClick={() => setActiveFilter(pill.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                activeFilter === pill.id
                  ? "filter-pill-active font-bold scale-105"
                  : "glass-pill text-zinc-300 hover:text-white hover:border-purple-400/40"
              }`}
            >
              {language === "ar" ? pill.labelAr : pill.labelEn}
            </button>
          ))}
        </div>

        {/* Case Studies Cards */}
        <div className="space-y-16">
          {filtered.map((study, idx) => (
            <div
              key={study.id}
              className="glass-panel p-8 sm:p-12 rounded-3xl shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-1">
                  <div className="text-xs font-mono text-rudo-accent uppercase tracking-wider font-semibold">
                    {study.client} • {study.location}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                    {language === "ar" ? study.titleAr : study.title}
                  </h2>
                </div>

                {/* 3 Key Stats Badges */}
                <div className="grid grid-cols-3 gap-3">
                  {study.stats.map((st, stIdx) => (
                    <div
                      key={stIdx}
                      className="glass-pill p-3.5 rounded-xl text-center"
                    >
                      <div className="text-lg sm:text-xl font-bold font-heading text-rudo-accent">
                        {st.value}
                      </div>
                      <div className="text-[10px] sm:text-xs text-gray-400">
                        {language === "ar" ? st.labelAr : st.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Challenge & Solution */}
                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="p-4 rounded-xl glass-pill space-y-1">
                    <span className="text-rose-400 font-bold block">
                      {language === "ar" ? "التحدي السابق:" : "The Challenge:"}
                    </span>
                    <p className="text-gray-300">
                      {language === "ar" ? study.challengeAr : study.challenge}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl glass-pill space-y-1 border-rudo-accent/30">
                    <span className="text-rudo-accent font-bold block">
                      {language === "ar" ? "استراتيجية روودو والحل:" : "The Rudo Solution:"}
                    </span>
                    <p className="text-gray-300">
                      {language === "ar" ? study.solutionAr : study.solution}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => openModal()}
                  className="roundBtn"
                >
                  <Calendar className="w-4 h-4" />
                  <span>
                    {language === "ar"
                      ? "طلب استراتيجية مماثلة لشركتكم"
                      : "Request a Similar Growth Blueprint"}
                  </span>
                </button>
              </div>

              {/* Right Image */}
              <div className="lg:col-span-5 relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-white/10 glass-panel">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover filter contrast-110"
                  sizes="(max-width: 768px) 100vw, 450px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
