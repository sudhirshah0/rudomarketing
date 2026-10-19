"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Globe2 } from "lucide-react";

export default function ClientGrid() {
  const { language } = useLanguage();

  const brandLogos = [
    {
      id: "beyond",
      type: "text",
      title: "BEYOND",
      sub: null,
      desc: language === "ar" 
        ? "تصميم وتطوير تجربة رقمية استثنائية لتعزيز حضورهم في السوق الإقليمي."
        : "Engineered a premier digital platform scaling brand presence across the GCC.",
    },
    {
      id: "gbm",
      type: "custom",
      title: "GBM",
      sub: null,
      desc: language === "ar"
        ? "قدمنا لهم موقعاً مخصصاً بالكامل لتمكين نمو أعمالهم."
        : "We provided them with a fully customized Website aiming to make their business thrive.",
    },
    {
      id: "skillbridge",
      type: "badge",
      title: "SkillBridge",
      sub: "ACADEMY",
      desc: language === "ar"
        ? "بناء مسارات تفاعلية لاستقطاب الطلاب وتوسيع نطاق التسجيل الأكاديمي."
        : "Conversion-optimized learning platform driving qualified student enrollment.",
    },
    {
      id: "emdad",
      type: "emdad",
      title: "EMDAD",
      sub: null,
      desc: language === "ar"
        ? "منظومة رقمية متكاملة لربط سلاسل الإمداد وتسهيل العمليات المؤسسية."
        : "Enterprise infrastructure and supply-chain digital transformation in Abu Dhabi.",
    },
    {
      id: "mediapro",
      type: "mediapro",
      title: "mediaPrô",
      sub: "INTERNATIONAL",
      desc: language === "ar"
        ? "إطلاق حملات تسويق رقمي عالمية المستوى وبناء هوية تفاعلية جذابة."
        : "High-impact international broadcast media presence and commercial positioning.",
    },
    {
      id: "sanad",
      type: "sanad",
      title: "SANAD",
      arabicCalligraphy: "سَنَد",
      sub: null,
      desc: language === "ar"
        ? "حلول طيران وتوريد هندسي معتمدة على أحدث معايير الأداء الرقمي."
        : "Aviation engineering and aerospace digital positioning across global hubs.",
    },
    {
      id: "sharjah",
      type: "sharjah",
      title: "منتدى الشارقة للاستثمار",
      sub: "SHARJAH INVESTMENT FORUM",
      desc: language === "ar"
        ? "بوابة رقمية تفاعلية تستقطب كبار المستثمرين العالميين إلى الشارقة."
        : "Strategic portal connecting sovereign delegations and international investors.",
    },
    {
      id: "atmosphere",
      type: "atmosphere",
      title: "ATMOSPHERE",
      sub: "BURJ KHALIFA",
      desc: language === "ar"
        ? "إدارة الحملات الرقمية الفاخرة لزيادة الحجوزات المباشرة لأعلى مطعم في العالم."
        : "Luxury guest acquisition and direct reservation engineering in Burj Khalifa.",
    },
    {
      id: "exa",
      type: "exa",
      title: "exa",
      sub: null,
      desc: language === "ar"
        ? "هندسة أداء وتطوير تقني لمنتجات رقمية عالية السرعة."
        : "Algorithmic high-frequency compute infrastructure and growth positioning.",
    },
    {
      id: "terranexus",
      type: "terranexus",
      title: "Terra Nexus",
      sub: null,
      desc: language === "ar"
        ? "استراتيجيات تسويق وتطوير أعمال لمشاريع الاستدامة والطاقة المتجددة."
        : "Clean-tech sustainability and ESG marketing architecture across the UAE.",
    },
    {
      id: "american-legal",
      type: "seal",
      title: "THE AMERICAN LEGAL CENTER",
      sub: null,
      desc: language === "ar"
        ? "استقطاب عملاء ذوي ملاءة مالية عالية لبرامج الهجرة والاستثمار القانوني."
        : "High-net-worth client acquisition funnels for international residency law.",
    },
    {
      id: "global",
      type: "globe",
      title: "500+ Clients",
      sub: "worldwide",
      desc: language === "ar"
        ? "شريك موثوق لأكثر من 500 مؤسسة وشركة رائدة حول العالم."
        : "Trusted by 500+ ambitious global enterprises and high-growth category leaders.",
    },
  ];

  return (
    <section className="py-28 relative overflow-hidden bg-[#05030A] border-t border-purple-500/10">
      {/* Background Matrix Grid Lines with Center Purple Spotlight Glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Center glowing purple flare */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] sm:h-[550px] bg-[radial-gradient(circle,rgba(124,58,237,0.3)_0%,rgba(109,40,217,0.15)_35%,rgba(76,29,149,0.05)_60%,transparent_75%)] blur-[50px] sm:blur-[70px]" />

        {/* Ambient subtle top/bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#05030A] via-transparent to-[#05030A]" />
      </div>

      <div className="site-container relative z-10">
        {/* Section Heading exactly matching reference: Brands Across the UAE Choose Rudo Marketing */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light font-heading text-white tracking-tight leading-tight">
            {language === "ar" ? (
              <>
                العلامات التجارية في الإمارات تختار{" "}
                <span className="font-semibold text-white block sm:inline">
                  روودو للتسويق
                </span>
              </>
            ) : (
              <>
                Brands Across the <br className="hidden sm:inline" />
                UAE Choose <span className="font-semibold text-white">Rudo Marketing</span>
              </>
            )}
          </h2>
        </div>

        {/* The Exact 6x2 Matrix Grid with Intersection Plus Marks & Fine Grid Lines */}
        <div className="relative border border-white/[0.08] rounded-2xl overflow-hidden bg-black/40 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.08)]">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-x divide-y divide-white/[0.08]">
            {brandLogos.map((brand) => (
              <div
                key={brand.id}
                className="relative min-h-[170px] sm:min-h-[190px] p-5 flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-white/[0.06] transition-all duration-300"
              >
                {/* Intersection Cross / Plus Mark in top left of cell */}
                <span className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-white/20 text-xs font-mono select-none pointer-events-none">
                  +
                </span>

                {/* Default Clean Brand Display (Centered, elegant) */}
                <div className="transition-all duration-300 group-hover:scale-95 group-hover:-translate-y-1 flex flex-col items-center justify-center">
                  {/* Brand 1: BEYOND */}
                  {brand.type === "text" && (
                    <span className="text-base sm:text-lg font-bold tracking-[0.35em] text-white/90 group-hover:text-white transition-all">
                      {brand.title}
                    </span>
                  )}

                  {/* Brand 2: GBM */}
                  {brand.type === "custom" && (
                    <span className="text-xl sm:text-2xl font-black font-serif tracking-widest text-white/95 border-b border-white/20 pb-0.5 group-hover:text-white transition-colors">
                      GBM
                    </span>
                  )}

                  {/* Brand 3: SkillBridge ACADEMY */}
                  {brand.type === "badge" && (
                    <div className="flex flex-col items-center justify-center">
                      <div className="flex items-center gap-1">
                        <div className="w-1.5 h-4 bg-white/80 rounded-full" />
                        <span className="text-base sm:text-lg font-extrabold tracking-tight text-white">
                          skill<span className="font-light">Bridge</span>
                        </span>
                      </div>
                      <span className="text-[8px] font-mono tracking-[0.25em] text-white/60 uppercase mt-0.5">
                        {brand.sub}
                      </span>
                    </div>
                  )}

                  {/* Brand 4: EMDAD */}
                  {brand.type === "emdad" && (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 rounded-sm bg-gradient-to-tr from-purple-500 to-indigo-400 rotate-45 flex items-center justify-center text-[10px] font-black text-black">
                        <div className="w-2 h-2 bg-black rotate-45" />
                      </div>
                      <span className="text-base sm:text-lg font-black tracking-widest text-white/90">
                        EMDAD
                      </span>
                    </div>
                  )}

                  {/* Brand 5: mediaPrô INTERNATIONAL */}
                  {brand.type === "mediapro" && (
                    <div className="flex flex-col items-center justify-center">
                      <span className="text-base sm:text-lg font-bold tracking-tight text-white/90">
                        media<span className="text-purple-400">Prô</span>
                      </span>
                      <span className="text-[8px] font-mono tracking-[0.25em] text-white/60 uppercase">
                        INTERNATIONAL
                      </span>
                    </div>
                  )}

                  {/* Brand 6: SANAD */}
                  {brand.type === "sanad" && (
                    <div className="flex flex-col items-center justify-center">
                      <div className="text-xl font-arabic font-bold text-white/90 leading-none">
                        سَنَد
                      </div>
                      <div className="w-10 h-0.5 bg-gradient-to-r from-transparent via-white/80 to-transparent my-1 rounded-full" />
                      <span className="text-[9px] font-mono tracking-[0.3em] text-white/70 uppercase">
                        SANAD
                      </span>
                    </div>
                  )}

                  {/* Brand 7: Sharjah Investment Forum */}
                  {brand.type === "sharjah" && (
                    <div className="flex items-center justify-center gap-2 max-w-[140px]">
                      <div className="text-right">
                        <div className="text-[8px] font-arabic text-white/90 font-bold leading-tight">
                          منتدى الشارقة للاستثمار
                        </div>
                        <div className="text-[6.5px] font-mono tracking-wider text-white/60 uppercase leading-none mt-0.5">
                          SHARJAH INVESTMENT
                        </div>
                      </div>
                      <div className="w-4 h-4 border border-white/50 rotate-45 flex items-center justify-center shrink-0">
                        <div className="w-1.5 h-1.5 border border-purple-400/80" />
                      </div>
                    </div>
                  )}

                  {/* Brand 8: ATMOSPHERE Burj Khalifa */}
                  {brand.type === "atmosphere" && (
                    <div className="flex items-center justify-center gap-2">
                      <div className="h-8 w-1 bg-gradient-to-t from-white/20 via-white/80 to-white/40 rounded-t-full" />
                      <div className="flex flex-col items-start text-left">
                        <span className="text-sm font-serif tracking-[0.2em] font-extrabold text-white leading-tight">
                          AT·MOSPHERE
                        </span>
                        <span className="text-[7.5px] font-mono tracking-[0.25em] text-white/60 uppercase">
                          BURJ KHALIFA
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Brand 9: EXA */}
                  {brand.type === "exa" && (
                    <span className="text-2xl font-black font-heading tracking-wider italic text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-purple-300">
                      exa
                    </span>
                  )}

                  {/* Brand 10: Terra Nexus */}
                  {brand.type === "terranexus" && (
                    <div className="flex flex-col items-center justify-center">
                      <div className="flex items-center gap-1 mb-1">
                        <div className="w-3.5 h-1 bg-purple-400/80 rounded-full rotate-[-20deg]" />
                        <div className="w-1.5 h-1.5 rounded-full bg-white" />
                        <div className="w-3.5 h-1 bg-purple-400/80 rounded-full rotate-[20deg]" />
                      </div>
                      <span className="text-sm font-serif tracking-wider text-white/95">
                        Terra Nexus
                      </span>
                    </div>
                  )}

                  {/* Brand 11: American Legal Center Seal */}
                  {brand.type === "seal" && (
                    <div className="flex flex-col items-center justify-center">
                      <div className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center relative p-1 shadow-[0_0_12px_rgba(255,255,255,0.1)]">
                        <div className="w-full h-full rounded-full border border-dashed border-white/30 flex items-center justify-center">
                          <span className="text-[8px] font-serif font-black text-white/90">
                            ⚖️
                          </span>
                        </div>
                      </div>
                      <span className="text-[7px] font-mono tracking-wider text-white/70 uppercase mt-1 max-w-[100px] leading-tight">
                        AMERICAN LEGAL
                      </span>
                    </div>
                  )}

                  {/* Brand 12: Globe */}
                  {brand.type === "globe" && (
                    <div className="flex flex-col items-center justify-center">
                      <div className="relative w-11 h-11 mb-1.5">
                        <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-md animate-pulse" />
                        <div className="relative w-full h-full rounded-full overflow-hidden shadow-[0_0_16px_rgba(59,130,246,0.5),inset_0_2px_4px_rgba(255,255,255,0.6)] border border-blue-300/40 bg-[#0B2545] flex items-center justify-center">
                          <Globe2 className="w-7 h-7 text-blue-300 animate-[spin_12s_linear_infinite]" />
                        </div>
                      </div>
                      <span className="text-xs font-bold text-white tracking-tight">
                        500+ Clients
                      </span>
                      <span className="text-[9px] text-zinc-400 font-mono tracking-wider uppercase">
                        worldwide
                      </span>
                    </div>
                  )}
                </div>

                {/* Hover Reveal Description - Appears ONLY when hovering on this company */}
                <div className="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-24 transition-all duration-300 ease-out overflow-hidden px-1 pt-0 group-hover:pt-2 w-full">
                  <div className="w-8 h-[1px] bg-white/30 mx-auto mb-1.5" />
                  <p className="text-[9.5px] text-zinc-300 font-normal leading-relaxed text-center drop-shadow-sm line-clamp-3">
                    {brand.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
