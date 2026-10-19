"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useModal } from "@/context/ModalContext";
import { ArrowRight, Sparkles, ShieldCheck, PhoneCall } from "lucide-react";

export default function ClosingCta() {
  const { t, language, dir } = useLanguage();
  const { openModal } = useModal();

  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-500/10 via-transparent to-transparent opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-72 bg-blue-500/10 rounded-full blur-[140px] pointer-events-none animate-ambient-float" />

      <div className="site-container relative z-10">
        <div data-gsap="fade-up" className="glass-panel relative rounded-3xl p-8 sm:p-14 lg:p-16 text-center shadow-2xl overflow-hidden backdrop-blur-3xl border border-white/20">
          {/* Top highlight bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent" />

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono font-bold tracking-[0.2em] uppercase text-purple-300">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse shadow-[0_0_8px_#C084FC]" />
              <span>{t("cta.badge")}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white leading-tight">
              {t("cta.title")}
            </h2>

            <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-2xl mx-auto">
              {t("cta.sub")}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-md sm:max-w-none mx-auto">
              <button
                onClick={() => openModal()}
                className="roundBtn group !py-2.5 sm:!py-3 !px-5 sm:!px-7 !text-xs sm:!text-base !gap-2.5 sm:!gap-3.5 w-auto justify-center whitespace-nowrap shadow-lg shadow-purple-500/25"
              >
                <span className="!text-xs sm:!text-sm font-semibold tracking-normal">{t("cta.button")}</span>
                <div className="arrow-circle !w-7 !h-7 sm:!w-8 sm:!h-8">
                  <ArrowRight
                    className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${
                      dir === "rtl" ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>

              <a
                href="tel:+971553858658"
                className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm border border-white/20 backdrop-blur-md transition-all flex items-center justify-center gap-2 hover:border-white/50 w-auto shadow-sm"
              >
                <PhoneCall className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-300 shrink-0" />
                <span className="font-mono text-xs sm:text-sm tracking-wide">+971 55 385 8658</span>
              </a>
            </div>

            <div className="pt-4 flex items-center justify-center gap-2 text-xs text-gray-400">
              <ShieldCheck className="w-4 h-4 text-rudo-accent shrink-0" />
              <span>{t("cta.guarantee")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
