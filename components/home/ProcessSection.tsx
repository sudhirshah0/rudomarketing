"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  Compass,
  LineChart,
  Palette,
  Rocket,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

export default function ProcessSection() {
  const { language, dir } = useLanguage();
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const steps = [
    {
      num: "01",
      phase: language === "ar" ? "المرحلة الأولى" : "PHASE 01",
      name: language === "ar" ? "الاستكشاف والتدقيق" : "Discovery & Audit",
      icon: Compass,
      desc:
        language === "ar"
          ? "تحليل شامل للبصمة الرقمية وميزانيات المنافسين لاستخراج الفرص غير المستغلة."
          : "Full digital footprint audit, competitor spend analysis, and untapped market gap discovery.",
      deliverables:
        language === "ar"
          ? [
              "تدقيق الفهرسة والتهيئة التقنية",
              "تحليل إعلانات وميزانيات المنافسين",
              "نمذجة الجمهور وعائد الوحدة",
            ]
          : [
              "Technical SEO & footprint audit",
              "Competitor ad spend reverse-engineering",
              "Audience persona & unit economics",
            ],
      output: language === "ar" ? "مخرج: تقرير التدقيق الشامل" : "Deliverable: Growth Audit",
      accent: "from-purple-500/20 via-fuchsia-500/10 to-transparent",
    },
    {
      num: "02",
      phase: language === "ar" ? "المرحلة الثانية" : "PHASE 02",
      name: language === "ar" ? "التخطيط الاستراتيجي" : "Growth Strategy",
      icon: LineChart,
      desc:
        language === "ar"
          ? "هندسة خارطة طريق رقمية تعتمد على البيانات الدقيقة ونوايا البحث الشرائية."
          : "Architecting a mathematical, channel-agnostic growth roadmap geared for GCC high-intent demand.",
      deliverables:
        language === "ar"
          ? [
              "مصفوفة كلمات بحثية ثنائية اللغة",
              "توزيع الميزانيات على المنصات",
              "هيكلة مسارات التحويل والصفحات",
            ]
          : [
              "Bilingual search & intent matrix",
              "Cross-platform budget modeling",
              "Friction-free conversion architecture",
            ],
      output: language === "ar" ? "مخرج: خطة النمو التنفيذية" : "Deliverable: Strategic Blueprint",
      accent: "from-fuchsia-500/20 via-purple-500/10 to-transparent",
    },
    {
      num: "03",
      phase: language === "ar" ? "المرحلة الثالثة" : "PHASE 03",
      name: language === "ar" ? "التصميم والمحتوى" : "Creative & UX",
      icon: Palette,
      desc:
        language === "ar"
          ? "صناعة هويات بصرية فاخرة وكتابة نصوص إعلانية تخاطب عقلية النخبة الخليجية."
          : "Crafting prestigious visuals, high-CTR ad suites, and Arabic copy tailored for GCC buyers.",
      deliverables:
        language === "ar"
          ? [
              "سرد إعلاني متوافق مع الثقافة المحلية",
              "صفحات هبوط فائقة السرعة للموبايل",
              "إعلانات فيديو وبانرات ذات نقر مرتفع",
            ]
          : [
              "Culturally fluent bilingual copy",
              "Sub-second luxury landing pages",
              "High-CTR video & creative suites",
            ],
      output: language === "ar" ? "مخرج: الأصول الإعلانية الجاهزة" : "Deliverable: Creative Assets",
      accent: "from-purple-600/20 via-indigo-500/10 to-transparent",
    },
    {
      num: "04",
      phase: language === "ar" ? "المرحلة الرابعة" : "PHASE 04",
      name: language === "ar" ? "الإطلاق والتحسين" : "Launch & Scale",
      icon: Rocket,
      desc:
        language === "ar"
          ? "إطلاق متقن مع توزيع آلي للميزانيات بالذكاء الاصطناعي وتحسين يومي للعائد."
          : "Flawless technical rollout, automated algorithmic budget pacing, and daily yield optimization.",
      deliverables:
        language === "ar"
          ? [
              "ربط مباشر لـ CAPI وأنظمة CRM",
              "معايرة يومية للعطاءات والجمهور",
              "لوحة تحكم تنفيذية حية على مدار 24/7",
            ]
          : [
              "Server-side CAPI & CRM sync",
              "Daily bid & audience calibration",
              "24/7 live executive attribution",
            ],
      output: language === "ar" ? "مخرج: نمو مقاس ومستمر" : "Deliverable: Compounding Scale",
      accent: "from-indigo-500/20 via-purple-500/10 to-transparent",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#070410] border-t border-purple-500/10 text-white">
      {/* Background Soft Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.14)_0%,rgba(109,40,217,0.04)_45%,transparent_70%)] blur-[70px]" />
      </div>

      <div className="site-container relative z-10">
        {/* Simple & Minimal Header */}
        <div data-gsap="fade-up" className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono font-bold tracking-[0.2em] uppercase text-purple-300">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse shadow-[0_0_8px_#C084FC]" />
            <span>
              {language === "ar" ? "منهجية العمل" : "OUR METHODOLOGY"}
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light font-heading text-white tracking-tight leading-tight">
            {language === "ar" ? (
              <>
                كيف نحقق{" "}
                <span className="font-semibold bg-gradient-to-r from-purple-200 via-fuchsia-300 to-white bg-clip-text text-transparent">
                  نموًا مدروسًا وقابلاً للتوسع
                </span>
              </>
            ) : (
              <>
                How We Deliver{" "}
                <span className="font-semibold bg-gradient-to-r from-purple-200 via-fuchsia-300 to-white bg-clip-text text-transparent">
                  Predictable Scale
                </span>
              </>
            )}
          </h2>

          <p className="text-xs sm:text-sm text-white/60 font-normal max-w-md mx-auto leading-relaxed">
            {language === "ar"
              ? "محرك تنفيذي من 4 مراحل يزيل التخمين ويضمن أقصى عائد تجاري لاستثمارك."
              : "A disciplined 4-stage engine engineered to eliminate guesswork and maximize commercial yield."}
          </p>
        </div>

        {/* 4 Clean Minimal Cards with Rich Hover Micro-Interactions */}
        <div data-gsap="stagger-cards" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isHovered = hoveredIdx === idx;

            return (
              <div
                key={step.num}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`group relative rounded-2xl p-6 sm:p-7 transition-all duration-500 border overflow-hidden backdrop-blur-xl flex flex-col justify-between ${
                  isHovered
                    ? "bg-purple-950/25 border-purple-400/40 shadow-[0_12px_40px_rgba(124,58,237,0.18)] -translate-y-1.5"
                    : "bg-white/[0.02] border-white/10 hover:border-white/20"
                }`}
              >
                {/* Top Glowing Shimmer Border */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-400/80 to-transparent transition-opacity duration-500 ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                  aria-hidden="true"
                />

                {/* Ambient Radial Hover Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${step.accent} opacity-0 transition-opacity duration-500 pointer-events-none ${
                    isHovered ? "opacity-100" : ""
                  }`}
                  aria-hidden="true"
                />

                <div className="relative z-10 space-y-5">
                  {/* Top Bar: Number Tag & Glass Icon */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-2xl sm:text-3xl font-black tracking-tight text-purple-400/60 group-hover:text-purple-300 transition-colors">
                      {step.num}
                    </span>

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

                  {/* Title & Phase */}
                  <div className="space-y-1">
                    <div className="text-[10px] sm:text-xs font-mono tracking-[0.18em] uppercase font-bold text-purple-300/80 group-hover:text-purple-300 transition-colors">
                      {step.phase}
                    </div>
                    <h3 className="text-lg sm:text-xl font-medium font-heading text-white tracking-tight group-hover:text-white transition-colors">
                      {step.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-white/70 font-normal leading-relaxed">
                    {step.desc}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2 pt-2 border-t border-white/[0.06]">
                    {step.deliverables.map((item, itemIdx) => (
                      <div
                        key={itemIdx}
                        className="flex items-center gap-2 text-xs text-white/80 group-hover:text-white transition-colors"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Highlight Badge */}
                <div className="relative z-10 pt-4 mt-5 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-white/40 group-hover:text-purple-200 transition-colors flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-purple-400/60 group-hover:bg-purple-400" />
                    {step.output}
                  </span>
                  <ArrowUpRight
                    className={`w-4 h-4 text-purple-400/0 ${
                      dir === "rtl" ? "translate-x-1" : "-translate-x-1"
                    } translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-purple-300 opacity-0 group-hover:opacity-100 transition-all duration-300 shrink-0`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
