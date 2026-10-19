"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { industriesCatalog } from "@/lib/industriesData";
import { ArrowRight, Sparkles, Building2, TrendingUp } from "lucide-react";

export default function IndustriesPage() {
  const { language, dir } = useLanguage();
  const industries = Object.values(industriesCatalog);

  return (
    <div className="pt-32 pb-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono font-bold tracking-[0.2em] uppercase text-purple-300">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse shadow-[0_0_8px_#C084FC]" />
            <span>
              {language === "ar" ? "القطاعات المتخصصة في الشرق الأوسط" : "Target Industry Sectors"}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white leading-tight">
            {language === "ar" ? "خبراتنا القطاعية العميقة" : "Industry Specializations"}
          </h1>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            {language === "ar"
              ? "نبتعد عن الحلول العامة لنقدم استراتيجيات مصممة خصيصاً لديناميكيات السوق الإماراتي والخليجي في أكثر القطاعات الاقتصادية ربحية وتنافسية."
              : "We reject one-size-fits-all playbooks. Every growth model is custom-engineered to the unique regulatory and buyer dynamics of key Middle East sectors."}
          </p>
        </div>

        {/* Grid of Industries */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind) => (
            <div
              key={ind.slug}
              className="glass-panel-interactive rounded-3xl overflow-hidden flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-56 w-full overflow-hidden glass-panel">
                  <Image
                    src={ind.heroImage}
                    alt={ind.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>

                <div className="p-6 space-y-3">
                  <h2 className="text-xl font-bold font-heading text-white group-hover:text-rudo-accent transition-colors">
                    {language === "ar" ? ind.titleAr : ind.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-300 line-clamp-3 leading-relaxed">
                    {language === "ar" ? ind.descriptionAr : ind.description}
                  </p>

                  <div className="pt-2 grid grid-cols-2 gap-2 text-xs">
                    {ind.stats.slice(0, 2).map((s, sIdx) => (
                      <div key={sIdx} className="glass-pill p-2 text-center">
                        <div className="text-rudo-accent font-bold text-sm">{s.value}</div>
                        <div className="text-[10px] text-gray-400">{language === "ar" ? s.labelAr : s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={`/industries/${ind.slug}`}
                  className="w-full py-3 rounded-xl glass-pill hover:bg-white hover:text-slate-950 hover:border-white text-white text-xs font-bold transition flex items-center justify-center gap-2 shadow-md"
                >
                  <span>{language === "ar" ? "استعراض الاستراتيجية القطاعية" : "View Sector Strategy"}</span>
                  <ArrowRight className={`w-3.5 h-3.5 ${dir === "rtl" ? "rotate-180" : ""}`} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
