"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  TrendingUp,
  Globe2,
  Users2,
  Cpu,
  ArrowUpRight,
} from "lucide-react";

export default function WhyChooseUs() {
  const { language } = useLanguage();
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const advantages = [
    {
      id: "roi",
      num: "01",
      tag: language === "ar" ? "عوائد حقيقية" : "COMMERCIAL ROI",
      title: language === "ar" ? "أثر مالي مقاس ومباشر" : "Revenue Over Vanity Metrics",
      desc:
        language === "ar"
          ? "لا نعتمد على الإعجابات أو المشاهدات. نقيس كل درهم بمعدل الصفقات، تكلفة الاستحواذ، وصافي الأرباح."
          : "We measure success strictly by pipeline generation, qualified deal flow, customer acquisition cost (CAC), and net revenue.",
      icon: TrendingUp,
      accent: "from-purple-500/20 via-fuchsia-500/10 to-transparent",
      highlight: language === "ar" ? "تتبع مباشر للـ CRM" : "Closed-Loop CRM Tracking",
    },
    {
      id: "bilingual",
      num: "02",
      tag: language === "ar" ? "ريادة إقليمية" : "GCC MASTERY",
      title: language === "ar" ? "ثقافة خليجية أصيلة وثنائية لغوية" : "Native Bilingual Excellence",
      desc:
        language === "ar"
          ? "صياغة إبداعية تخاطب عقلية النخبة المحلية والمستثمرين في الإمارات والخليج بأسلوب راقٍ دون ترجمة حرفية."
          : "Culturally fluent Arabic and English storytelling engineered specifically for GCC luxury consumers and decision-makers.",
      icon: Globe2,
      accent: "from-fuchsia-500/20 via-purple-500/10 to-transparent",
      highlight: language === "ar" ? "محتوى إماراتي أصيل" : "Authentic Arabic Copywriting",
    },
    {
      id: "squad",
      num: "03",
      tag: language === "ar" ? "كفاءات رفيعة" : "SENIOR SQUAD",
      title: language === "ar" ? "إشراف تنفيذي دون تفويض لمبتدئين" : "Senior Growth Architects",
      desc:
        language === "ar"
          ? "حسابك يُدار مباشرة بواسطة خبراء نمو متمرسين بأعلى معايير الإشراف، مع قنوات تواصل مباشرة."
          : "Zero junior hand-offs. Every client strategy is led directly by senior growth directors with verified GCC track records.",
      icon: Users2,
      accent: "from-purple-600/20 via-indigo-500/10 to-transparent",
      highlight: language === "ar" ? "حد أقصى 4 عملاء للفريق" : "Capped 4-Client Squad Ratio",
    },
    {
      id: "tech",
      num: "04",
      tag: language === "ar" ? "تقنيات ذكية" : "AI & ATTRIBUTION",
      title: language === "ar" ? "تحليلات فورية وذكاء اصطناعي" : "Real-Time Intelligence",
      desc:
        language === "ar"
          ? "ودّع التقارير الشهرية القديمة. نوفر لوحات تحكم حية على مدار الساعة مع نماذج تنبؤية بالذكاء الاصطناعي."
          : "24/7 live executive dashboards, algorithmic budget reallocation, and granular multi-touch attribution.",
      icon: Cpu,
      accent: "from-indigo-500/20 via-purple-500/10 to-transparent",
      highlight: language === "ar" ? "لوحات حية 24/7" : "24/7 Live Executive Analytics",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#070410] border-t border-purple-500/10 text-white">
      {/* Background Soft Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.18)_0%,rgba(109,40,217,0.06)_45%,transparent_70%)] blur-[70px]" />
      </div>

      <div className="site-container relative z-10">
        {/* Minimal Header */}
        <div data-gsap="fade-up" className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono font-bold tracking-[0.2em] uppercase text-purple-300">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse shadow-[0_0_8px_#C084FC]" />
            <span>
              {language === "ar" ? "ميزة روودو التنافسية" : "THE RUDO ADVANTAGE"}
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light font-heading text-white tracking-tight leading-tight">
            {language === "ar" ? (
              <>
                لماذا تختار نخبة العلامات{" "}
                <span className="font-semibold bg-gradient-to-r from-purple-200 via-fuchsia-300 to-white bg-clip-text text-transparent">
                  الشراكة معنا
                </span>
              </>
            ) : (
              <>
                Why Dubai&apos;s Premier Brands{" "}
                <span className="font-semibold bg-gradient-to-r from-purple-200 via-fuchsia-300 to-white bg-clip-text text-transparent">
                  Partner With Us
                </span>
              </>
            )}
          </h2>

          <p className="text-xs sm:text-sm text-white/60 font-normal max-w-md mx-auto leading-relaxed">
            {language === "ar"
              ? "استراتيجيات نمو دقيقة بدون حشو، مصممة لتحقيق نتائج مستدامة وعوائد ملموسة."
              : "Rigorous commercial focus, authentic GCC execution, and verifiable ROI delivery."}
          </p>
        </div>

        {/* Clean Minimal 4-Card Grid with Smooth Micro-Hover Effects */}
        <div data-gsap="stagger-cards" className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {advantages.map((adv) => {
            const Icon = adv.icon;
            const isHovered = hoveredId === adv.id;

            return (
              <div
                key={adv.id}
                onMouseEnter={() => setHoveredId(adv.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`group relative rounded-2xl p-6 sm:p-8 transition-all duration-500 border overflow-hidden backdrop-blur-xl ${
                  isHovered
                    ? "bg-purple-950/25 border-purple-400/40 shadow-[0_12px_40px_rgba(124,58,237,0.18)] translate-y-[-2px]"
                    : "bg-white/[0.02] border-white/10 hover:border-white/20"
                }`}
              >
                {/* Background Ambient Radial Glow on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${adv.accent} opacity-0 transition-opacity duration-500 pointer-events-none ${
                    isHovered ? "opacity-100" : ""
                  }`}
                  aria-hidden="true"
                />

                <div className="relative z-10 flex flex-col justify-between h-full space-y-6">
                  {/* Top Bar: Number Tag & Micro Icon */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-2xl sm:text-3xl font-black tracking-tight text-purple-400/60 group-hover:text-purple-300 transition-colors">
                        {adv.num}
                      </span>
                      <span className="text-sm sm:text-base font-mono tracking-[0.18em] uppercase font-bold text-purple-300 group-hover:text-white transition-colors">
                        {adv.tag}
                      </span>
                    </div>

                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 border ${
                        isHovered
                          ? "bg-purple-500/20 border-purple-400/50 text-white shadow-[0_0_18px_rgba(168,85,247,0.45)]"
                          : "bg-white/[0.04] border-white/10 text-white/50 group-hover:text-white"
                      }`}
                    >
                      <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                  </div>

                  {/* Title & Short Clean Description */}
                  <div className="space-y-2.5">
                    <h3 className="text-lg sm:text-xl font-medium font-heading text-white tracking-tight group-hover:text-white transition-colors flex items-center justify-between">
                      <span>{adv.title}</span>
                      <ArrowUpRight className="w-4 h-4 text-purple-400/0 -translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-purple-300 opacity-0 group-hover:opacity-100 transition-all duration-300 shrink-0" />
                    </h3>

                    <p className="text-xs sm:text-sm text-white/70 font-normal leading-relaxed">
                      {adv.desc}
                    </p>
                  </div>

                  {/* Clean Bottom Highlight Badge */}
                  <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between">
                    <span className="text-[11px] font-mono text-white/40 group-hover:text-purple-200 transition-colors flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-purple-400/60 group-hover:bg-purple-400" />
                      {adv.highlight}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
