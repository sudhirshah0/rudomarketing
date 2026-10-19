"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function LogoMarquee() {
  const { t, language } = useLanguage();

  const logos = [
    { name: "EMAAR", sub: "Properties Dubai", category: "Real Estate" },
    { name: "DAMAC", sub: "Luxury Living", category: "Hospitality & Homes" },
    { name: "NAKHEEL", sub: "Waterfront Icons", category: "Master Developer" },
    { name: "CAREEM", sub: "The Everything App", category: "Tech & Mobility" },
    { name: "MAJID AL FUTTAIM", sub: "Retail & Leisure", category: "Conglomerate" },
    { name: "EMIRATES NBD", sub: "Banking Group", category: "Financial Services" },
    { name: "CHALHOUB GROUP", sub: "Luxury Retail", category: "Fashion & Beauty" },
    { name: "DUBAI HOLDING", sub: "Investments", category: "Sovereign Asset" },
    { name: "SOBHA REALTY", sub: "Hartland Living", category: "Real Estate" },
    { name: "JUMEIRAH", sub: "Hotels & Resorts", category: "Ultra Luxury" },
  ];

  // Duplicate for seamless infinite loop
  const marqueeItems = [...logos, ...logos];

  return (
    <section className="py-10 relative overflow-hidden">
      {/* Subtle edge fades */}
      <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#0B0B0E] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#0B0B0E] to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 mb-5 text-center">
        <span className="glass-pill px-4 py-1 text-[11px] uppercase tracking-widest text-rudo-accent font-semibold inline-block">
          {t("marquee.title")}
        </span>
      </div>

      {/* Infinite Scrolling Track Row 1: Enterprise Clients */}
      <div className="flex overflow-hidden select-none mb-3">
        <div className="flex items-center gap-6 whitespace-nowrap animate-marquee-left">
          {marqueeItems.map((item, idx) => (
            <div
              key={`${item.name}-${idx}`}
              className="glass-pill flex items-center gap-3 px-5 py-2.5 rounded-xl hover:border-white/50 transition-all duration-300 group cursor-default"
            >
              <div className="w-2 h-2 rounded-full bg-blue-400 group-hover:bg-white transition-colors shadow-sm shadow-blue-400" />
              <div className="flex flex-col">
                <span className="font-heading font-extrabold tracking-wider text-sm sm:text-base text-gray-200 group-hover:text-white transition-colors">
                  {item.name}
                </span>
                <span className="text-[9px] text-gray-300 font-mono tracking-wider uppercase group-hover:text-blue-300 transition-colors">
                  {item.sub}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Infinite Scrolling Track Row 2: Accreditations, Awards & Tech Partners (reverse scroll) */}
      <div className="flex overflow-hidden select-none">
        <div className="flex items-center gap-6 whitespace-nowrap animate-marquee-right">
          {[
            { title: "GOOGLE PREMIER PARTNER", sub: "Top 3% Agencies in EMEA" },
            { title: "CLUTCH #1 DIGITAL AGENCY", sub: "Dubai & Middle East 2024" },
            { title: "META BUSINESS PARTNER", sub: "Certified Media Network" },
            { title: "FORBES AGENCY COUNCIL", sub: "Official Member 2024" },
            { title: "SHOPIFY PLUS PARTNER", sub: "Enterprise Commerce Certified" },
            { title: "MENA SEARCH AWARDS", sub: "Winner: Best Arabic SEO Campaign" },
            { title: "INC. 5000 REGIONAL", sub: "Fastest Growing Tech Agencies" },
            { title: "TIKTOK MARKETING PARTNER", sub: "GCC Creator & Ads Network" },
          ].concat([
            { title: "GOOGLE PREMIER PARTNER", sub: "Top 3% Agencies in EMEA" },
            { title: "CLUTCH #1 DIGITAL AGENCY", sub: "Dubai & Middle East 2024" },
            { title: "META BUSINESS PARTNER", sub: "Certified Media Network" },
            { title: "FORBES AGENCY COUNCIL", sub: "Official Member 2024" },
            { title: "SHOPIFY PLUS PARTNER", sub: "Enterprise Commerce Certified" },
            { title: "MENA SEARCH AWARDS", sub: "Winner: Best Arabic SEO Campaign" },
            { title: "INC. 5000 REGIONAL", sub: "Fastest Growing Tech Agencies" },
            { title: "TIKTOK MARKETING PARTNER", sub: "GCC Creator & Ads Network" },
          ]).map((badge, bIdx) => (
            <div
              key={`${badge.title}-${bIdx}`}
              className="glass-pill flex items-center gap-2.5 px-4 py-2 rounded-lg text-gray-200 hover:text-white hover:border-white/50 transition-all duration-300"
            >
              <span className="text-white text-xs font-bold">★</span>
              <span className="text-xs font-mono font-bold tracking-wider text-white">
                {badge.title}
              </span>
              <span className="text-[10px] text-gray-300">({badge.sub})</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
