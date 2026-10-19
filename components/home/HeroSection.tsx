"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { useModal } from "@/context/ModalContext";
import {
  ArrowRight,
  ArrowUpRight,
  Star,
  Award,
  Sparkles,
  Calendar,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import gsap from "gsap";
import RobotSpline from "@/components/home/RobotSpline";

export default function HeroSection() {
  const { t, language, dir } = useLanguage();
  const { openModal } = useModal();
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const ctaGroupRef = useRef<HTMLDivElement>(null);
  const trustBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headlineRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(ctaGroupRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.9,
        delay: 0.2,
        ease: "power3.out",
      });

      gsap.from(trustBarRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.9,
        delay: 0.4,
        ease: "power3.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, [language]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-between pt-32 pb-8 overflow-hidden bg-[#0B051D] text-white"
    >
      {/* Exact Reference Background strictly for Hero Section */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        {/* Deep dark luxury foundation */}
        <div className="absolute inset-0 bg-[#06030F]" />

        {/* Soft, deep ambient purple luminous gradient reaching towards the top and center */}
        <div className="absolute bottom-[-10vw] left-1/2 -translate-x-1/2 w-[160vw] max-w-[2000px] h-[55vw] min-h-[480px] max-h-[750px] rounded-[100%_100%_0_0] bg-gradient-to-t from-[#7C3AED]/70 via-[#6D28D9]/40 via-purple-900/20 to-transparent blur-[60px] sm:blur-[90px]" />

        {/* Higher soft radial ambient backlight for the center text */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[90vw] max-w-[1100px] h-[350px] bg-[radial-gradient(ellipse_at_bottom,rgba(147,51,234,0.35)_0%,rgba(109,40,217,0.15)_45%,transparent_75%)] blur-[40px] pointer-events-none" />

        {/* Clean subtle ambient vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03)_0%,transparent_60%)] pointer-events-none" />
      </div>

      {/* 3D Robot Canvas - Layered cleanly in background/right matching Navya layout */}
      <div className="absolute inset-0 z-[1] w-full h-full overflow-hidden pointer-events-none md:pointer-events-auto">
        {/* Halo Glow */}
        <div className="absolute right-0 top-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-purple-600/20 via-fuchsia-500/15 to-transparent blur-3xl pointer-events-none" />
        <RobotSpline />
      </div>

      {/* Main Content Hero Copy on Left */}
      <div className="relative z-10 site-container my-auto pt-4 sm:pt-8 pb-12 w-full pointer-events-none">
        <div className="max-w-xl text-center lg:text-left rtl:lg:text-right space-y-5 pointer-events-auto mx-auto lg:mx-0">
          {/* Top Dot & Agency Tag */}
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono font-bold tracking-[0.2em] uppercase text-purple-300">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse shadow-[0_0_8px_#C084FC]" />
            <span>{language === "ar" ? "توليد العملاء والأداء بالذكاء الاصطناعي • دبي" : "AI-POWERED LEAD GENERATION • DUBAI"}</span>
          </div>

          {/* Powerful Headline with Luminous Gradient Accent */}
          <h1
            ref={headlineRef}
            className="text-3xl sm:text-5xl md:text-5xl lg:text-[3.65rem] font-black font-heading tracking-tight leading-[1.12] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
          >
            <span>{language === "ar" ? "العلامات الأقوى تفوز رقمياً." : "Better brands win online."}</span>
            <br />
            <span className="bg-gradient-to-r from-purple-200 via-fuchsia-300 to-purple-400 bg-clip-text text-transparent">
              {language === "ar" ? "نحن نبني تفوقها." : "We scale them."}
            </span>
          </h1>

          {/* Detailed Agency Subtext */}
          <p className="text-sm sm:text-base text-white/85 max-w-lg font-normal leading-relaxed tracking-normal drop-shadow-sm mx-auto lg:mx-0">
            {language === "ar"
              ? "وكالة رائدة لتوليد العملاء المحتملين والتسويق القائم على الأداء بالذكاء الاصطناعي في دبي — حلول متكاملة في السيو، الإعلانات الممولة، وتصميم المنصات الفاخرة لتحقيق أقصى عائد تجاري."
              : "AI-powered lead generation and performance marketing agency in Dubai. We engineer high-ROAS acquisition engines, Enterprise SEO, and prestige platforms for market leaders who demand measurable scale."}
          </p>

          {/* Segmented Dual Pill Action Button */}
          <div
            ref={ctaGroupRef}
            className="pt-1 flex items-center justify-center lg:justify-start"
          >
            <div className="inline-flex items-stretch rounded-full p-1 border border-white/20 bg-black/50 backdrop-blur-xl shadow-[0_12px_36px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.2)]">
              {/* WhatsApp Button */}
              <a
                href="https://wa.me/971553858658?text=Hi%20RU%20DO%20MARKETING%2C%20I%20want%20a%20free%20growth%20audit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-l-full text-xs sm:text-xs font-bold tracking-wider uppercase text-white bg-white/[0.08] hover:bg-white/[0.16] hover:text-purple-200 transition-all border-r border-white/10"
              >
                <span>{language === "ar" ? "واتساب" : "WHATSAPP US"}</span>
                <span className="text-emerald-400 text-sm">💬</span>
              </a>

              {/* Start a project primary gradient button */}
              <button
                onClick={() => openModal()}
                className="primary-btn !py-2.5 !px-5 sm:!px-6 text-xs sm:text-xs font-bold uppercase tracking-wider rounded-r-full rounded-l-none"
              >
                <span>{language === "ar" ? "ابدأ مشروعك" : "START A PROJECT"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
