"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function TrustedBrandsMarquee() {
  const { language } = useLanguage();

  return (
    <section className="relative z-20 w-full py-6 md:py-8 bg-transparent">
      <div className="site-container">
        {/* Rectangle bordered glass card container */}
        <div className="relative rounded-2xl border border-white/15 bg-gradient-to-r from-purple-950/40 via-black/60 to-purple-950/40 backdrop-blur-xl p-4 sm:p-5 shadow-[0_12px_32px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.15)] overflow-hidden">
          {/* Subtle top specular border highlight */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-400/40 to-transparent" />

          <div className="flex flex-col md:flex-row md:items-center gap-4 sm:gap-6 md:gap-8">
            {/* Left Label: 2 rows on mobile ('TRUSTED BY' & 'LEADING BRANDS'), 1 row on desktop */}
            <div className="flex items-center justify-between md:justify-start gap-4 sm:gap-6 md:gap-8 shrink-0 pb-2 md:pb-0 border-b border-white/10 md:border-b-0">
              <div className="flex flex-col text-left rtl:text-right">
                {language === "ar" ? (
                  <>
                    <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.2em] uppercase text-purple-300">
                      موثوق من
                    </span>
                    <span className="text-[11px] sm:text-xs font-mono font-black tracking-[0.2em] uppercase text-white">
                      كبرى العلامات
                    </span>
                  </>
                ) : (
                  <>
                    <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.25em] uppercase text-purple-300 leading-tight">
                      TRUSTED BY
                    </span>
                    <span className="text-[11px] sm:text-xs font-mono font-black tracking-[0.2em] uppercase text-white leading-tight">
                      LEADING BRANDS
                    </span>
                  </>
                )}
              </div>
              <div className="hidden md:block w-[1px] h-7 bg-white/20 shrink-0" />
            </div>

            {/* Seamless Infinite Scrolling Brand Logos (Right to Left) */}
            <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
              <div className="flex items-center gap-10 sm:gap-14 md:gap-16 whitespace-nowrap animate-marquee-left">
                {[
                  { type: "emirates", id: "em-1" },
                  { type: "etihad", id: "et-1" },
                  { type: "jumeirah", id: "ju-1" },
                  { type: "emaar", id: "emr-1" },
                  { type: "dpworld", id: "dp-1" },
                  { type: "damac", id: "dm-1" },
                  { type: "careem", id: "cr-1" },
                  { type: "emirates", id: "em-2" },
                  { type: "etihad", id: "et-2" },
                  { type: "jumeirah", id: "ju-2" },
                  { type: "emaar", id: "emr-2" },
                  { type: "dpworld", id: "dp-2" },
                  { type: "damac", id: "dm-2" },
                  { type: "careem", id: "cr-2" },
                ].map((brand) => (
                  <div key={brand.id} className="shrink-0 cursor-default py-1">
                    {brand.type === "emirates" && (
                      <div className="flex flex-col items-center justify-center opacity-85 hover:opacity-100 transition-opacity">
                        <div className="w-6 h-4 bg-[#D71921] rounded-sm flex items-center justify-center mb-0.5 shadow-sm">
                          <span className="text-[8px] text-white font-bold leading-none">✈</span>
                        </div>
                        <span className="font-serif font-black text-xs sm:text-sm tracking-wide text-[#E11D48]">
                          Emirates
                        </span>
                      </div>
                    )}
                    {brand.type === "etihad" && (
                      <div className="flex items-center gap-2 opacity-85 hover:opacity-100 transition-opacity">
                        <div className="w-5 h-5 grid grid-cols-2 gap-0.5 rotate-45 shrink-0">
                          <div className="bg-[#D4A373] rounded-[1px]" />
                          <div className="bg-[#CCD5AE] rounded-[1px]" />
                          <div className="bg-[#E9EDC9] rounded-[1px]" />
                          <div className="bg-[#FAEDCD] rounded-[1px]" />
                        </div>
                        <div className="flex flex-col leading-none">
                          <span className="font-heading font-black text-xs sm:text-sm tracking-[0.18em] text-white">
                            ETIHAD
                          </span>
                          <span className="text-[7px] font-mono tracking-[0.25em] text-gray-400 uppercase mt-0.5">
                            AIRWAYS
                          </span>
                        </div>
                      </div>
                    )}
                    {brand.type === "jumeirah" && (
                      <div className="flex flex-col items-center justify-center leading-none opacity-85 hover:opacity-100 transition-opacity">
                        <div className="w-2.5 h-3 bg-[#E0BA8C] rounded-t-full mb-1" />
                        <span className="font-serif font-bold text-xs sm:text-sm tracking-widest text-white">
                          Jumeirah
                        </span>
                        <span className="text-[6.5px] font-mono tracking-[0.2em] text-gray-400 uppercase mt-0.5">
                          HOTELS & RESORTS
                        </span>
                      </div>
                    )}
                    {brand.type === "emaar" && (
                      <div className="flex flex-col items-center justify-center leading-none opacity-85 hover:opacity-100 transition-opacity">
                        <span className="font-heading font-black text-xs sm:text-sm tracking-[0.25em] text-white">
                          EMAAR
                        </span>
                        <span className="text-[7px] font-mono tracking-[0.3em] text-gray-400 uppercase mt-0.5">
                          DUBAI
                        </span>
                      </div>
                    )}
                    {brand.type === "dpworld" && (
                      <div className="flex items-center gap-2 opacity-85 hover:opacity-100 transition-opacity">
                        <div className="relative w-5 h-5 flex items-center justify-center shrink-0">
                          <div className="w-5 h-5 rounded-full border-2 border-[#0091FF] flex items-center justify-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#0091FF]" />
                          </div>
                        </div>
                        <span className="font-heading font-black text-xs sm:text-sm tracking-wider text-white">
                          DP WORLD
                        </span>
                      </div>
                    )}
                    {brand.type === "damac" && (
                      <div className="flex flex-col items-center justify-center leading-none opacity-85 hover:opacity-100 transition-opacity">
                        <span className="font-heading font-black text-xs sm:text-sm tracking-[0.25em] text-white">
                          DAMAC
                        </span>
                        <span className="text-[7px] font-mono tracking-[0.25em] text-gray-400 uppercase mt-0.5">
                          PROPERTIES
                        </span>
                      </div>
                    )}
                    {brand.type === "careem" && (
                      <div className="flex items-center gap-1.5 opacity-85 hover:opacity-100 transition-opacity">
                        <div className="w-4 h-4 rounded-full bg-[#00EB6A] flex items-center justify-center text-[9px] font-black text-black">
                          C
                        </div>
                        <span className="font-heading font-black text-xs sm:text-sm tracking-wider text-white">
                          careem
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
