"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useModal } from "@/context/ModalContext";
import { IndustryData } from "@/lib/industriesData";
import {
  ArrowRight,
  Sparkles,
  AlertCircle,
  CheckCircle2,
  Calendar,
  Building,
} from "lucide-react";

export default function IndustryDetailClient({
  industry,
}: {
  industry: IndustryData;
}) {
  const { language, dir } = useLanguage();
  const { openModal } = useModal();

  return (
    <div className="pt-32 pb-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono font-bold tracking-[0.2em] uppercase text-purple-300">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse shadow-[0_0_8px_#C084FC]" />
              <span>
                {language === "ar"
                  ? "استراتيجيات النمو القطاعي المتخصص"
                  : "Dedicated Sector Practice"}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white leading-tight">
              {language === "ar" ? industry.titleAr : industry.title}
            </h1>

            <p className="text-lg sm:text-xl text-rudo-accent font-medium">
              {language === "ar" ? industry.taglineAr : industry.tagline}
            </p>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              {language === "ar" ? industry.descriptionAr : industry.description}
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              {industry.stats.map((s, idx) => (
                <div
                  key={idx}
                  className="glass-pill p-4 text-center"
                >
                  <div className="text-xl sm:text-2xl font-bold font-heading text-rudo-accent">
                    {s.value}
                  </div>
                  <div className="text-[11px] text-gray-400 font-medium">
                    {language === "ar" ? s.labelAr : s.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={() => openModal()}
                className="roundBtn group"
              >
                <Calendar className="w-4 h-4" />
                <span>
                  {language === "ar"
                    ? "احجز استشارة متخصصة لهذا القطاع"
                    : "Consult with our Sector Practice Lead"}
                </span>
                <div className="arrow-circle">
                  <ArrowRight className={`w-4 h-4 ${dir === "rtl" ? "rotate-180" : ""}`} />
                </div>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-80 sm:h-[480px] rounded-3xl overflow-hidden glass-panel shadow-2xl">
            <Image
              src={industry.heroImage}
              alt={industry.title}
              fill
              priority
              className="object-cover filter contrast-110"
              sizes="(max-width: 768px) 100vw, 550px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          </div>
        </div>
      </div>

      {/* Challenges & Solutions Breakdown */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="glass-pill px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-rudo-accent">
            {language === "ar" ? "تفكيك التحديات وحلولنا العملية" : "Overcoming Sector Roadblocks"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
            {language === "ar"
              ? "كيف نتغلب على صعوبات هذا القطاع في الإمارات؟"
              : "How We Neutralize GCC Market Bottlenecks"}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industry.challenges.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel-interactive p-8 rounded-3xl shadow-xl space-y-6"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase">
                  <AlertCircle className="w-4 h-4" />
                  <span>{language === "ar" ? "التحدي السائد في السوق:" : "Common Market Failure Point:"}</span>
                </div>
                <p className="text-sm sm:text-base text-gray-300 font-medium leading-relaxed">
                  {language === "ar" ? item.problemAr : item.problem}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-rudo-accent text-xs font-bold uppercase">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{language === "ar" ? "حل روودو المنهجي:" : "The Rudo Strategic Fix:"}</span>
                </div>
                <p className="text-sm sm:text-base text-emerald-300 font-normal leading-relaxed">
                  {language === "ar" ? item.solutionAr : item.solution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
