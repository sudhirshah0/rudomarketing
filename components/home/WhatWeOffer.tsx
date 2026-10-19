"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
  ArrowUpRight,
  Sparkles,
  ArrowRight,
  Globe,
  Smartphone,
  TrendingUp,
  Palette,
  ShoppingCart,
  Video,
  Cpu,
  Server,
} from "lucide-react";

export default function WhatWeOffer() {
  const { t, language, dir } = useLanguage();

  const services = [
    {
      num: "01",
      slug: "web-design",
      isPopular: true,
      icon: Globe,
      title: "Websites & Digital Products",
      titleAr: "تصميم وتطوير المواقع",
      desc: "Conversion-led design and modern web engineering built for speed and credibility.",
      descAr: "تصميم وتطوير مواقع إلكترونية عصرية سريعة التحميل لتعزيز مبيعاتك ومصداقيتك.",
      tags: ["UX/UI", "Next.js", "Websites"],
    },
    {
      num: "02",
      slug: "seo",
      isPopular: false,
      icon: TrendingUp,
      title: "Search & Generative AI",
      titleAr: "تصدر محركات البحث والذكاء الاصطناعي",
      desc: "Authoritative Google UAE and AI engine rankings that compound qualified organic leads.",
      descAr: "تصدر نتائج غوغل والذكاء الاصطناعي لاستقطاب عملاء مهتمين باستمرار.",
      tags: ["SEO", "Local Maps", "GEO & AI"],
    },
    {
      num: "03",
      slug: "ppc",
      isPopular: false,
      icon: TrendingUp,
      title: "Paid Ads & Media Buying",
      titleAr: "الإعلانات الممولة عالية العائد",
      desc: "Targeted campaigns across Google, Meta, and TikTok optimized for maximum ROI.",
      descAr: "حملات إعلانية ممولة عبر غوغل وميتا وتيك توك لتحقيق أعلى عائد استثماري.",
      tags: ["Google Ads", "Meta Ads", "TikTok"],
    },
    {
      num: "04",
      slug: "social-media",
      isPopular: false,
      icon: Smartphone,
      title: "Social Media & Community",
      titleAr: "إدارة وسائل التواصل الاجتماعي",
      desc: "Creative content, regional copywriting, and influencer campaigns that engage.",
      descAr: "صناعة محتوى إبداعي وحملات مؤثرين تبني مجتمعاً متفاعلاً حول علامتك.",
      tags: ["Social Media", "Influencers", "Content"],
    },
    {
      num: "05",
      slug: "branding",
      isPopular: false,
      icon: Palette,
      title: "Brand Identity & Strategy",
      titleAr: "بناء الهوية البصرية والعلامة",
      desc: "Distinct luxury visual identities, guidelines, and positioning tailored for the GCC.",
      descAr: "تصميم هويات بصرية فاخرة وأدلة علامة متكاملة تناسب السوق الخليجي.",
      tags: ["Branding", "Visual Identity", "Typography"],
    },
    {
      num: "06",
      slug: "content-production",
      isPopular: false,
      icon: Video,
      title: "Photo & Film Production",
      titleAr: "الإنتاج المرئي والسينمائي",
      desc: "High-end commercial video production and commercial photography shot in Dubai.",
      descAr: "إنتاج وتصوير فيديوهات إعلانية وسينمائية احترافية بأعلى جودة في دبي.",
      tags: ["Video Ads", "4K Production", "Photography"],
    },
    {
      num: "07",
      slug: "web-design",
      isPopular: false,
      icon: ShoppingCart,
      title: "E-Commerce & Shopify",
      titleAr: "متاجر التجارة الإلكترونية",
      desc: "High-converting online stores integrated with regional GCC payment gateways.",
      descAr: "متاجر إلكترونية متطورة على شوبيفاي مع بوابات الدفع المحلية والتقسيط.",
      tags: ["Shopify Plus", "E-Commerce", "Payments"],
    },
    {
      num: "08",
      slug: "web-design",
      isPopular: false,
      icon: Cpu,
      title: "AI Automation & CRM",
      titleAr: "أتمتة الذكاء الاصطناعي",
      desc: "Smart automation, CRM workflows, and AI agents that save time and reduce costs.",
      descAr: "أتمتة ذكية وربط أنظمة المبيعات وإدارة العملاء لتوفير الوقت والتكاليف.",
      tags: ["AI Agents", "Automations", "CRM Workflows"],
    },
  ];

  return (
    <section className="py-28 bg-transparent relative overflow-hidden text-white border-t border-white/10">
      <div className="site-container relative z-10">
        {/* Minimal Centered Section Header */}
        <div data-gsap="fade-up" className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center justify-center gap-2 text-xs font-mono font-semibold uppercase tracking-[0.25em] text-white/50">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>{t("services.badge")}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-white tracking-tight leading-tight">
            {t("services.title")}
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed max-w-xl mx-auto">
            {t("services.sub")}
          </p>

          <div className="pt-2">
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-white/70 hover:text-white transition group border-b border-white/20 pb-0.5 hover:border-white"
            >
              <span>{t("nav.viewAllServices")}</span>
              <ArrowRight
                className={`w-3.5 h-3.5 group-hover:translate-x-1 transition-transform ${
                  dir === "rtl" ? "rotate-180 group-hover:-translate-x-1" : ""
                }`}
              />
            </Link>
          </div>
        </div>

        {/* Navya Technomedia Style Grid with Dynamic Spotlight Glow & Bloom */}
        <div data-gsap="stagger-cards" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {services.map((item, idx) => {
            const glowThemes = [
              "navya-purple",
              "navya-orange",
              "navya-green",
              "navya-yellow",
              "navya-cyan",
              "navya-pink",
              "navya-purple",
              "navya-green",
            ];
            const themeClass = glowThemes[idx % glowThemes.length];

            return (
              <div
                key={item.num}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty(
                    "--mouse-x",
                    `${e.clientX - rect.left}px`
                  );
                  e.currentTarget.style.setProperty(
                    "--mouse-y",
                    `${e.clientY - rect.top}px`
                  );
                }}
                className={`navya-card-wrapper ${themeClass} group relative flex flex-col`}
              >
                {/* Ambient Soft Bloom leaking out */}
                <div className="navya-card-glow-bloom" />

                <div className="navya-card-inner p-7 flex flex-col justify-between flex-1">
                  <div>
                    {/* Top row: Number and Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="font-mono text-[11px] font-medium tracking-[0.3em] text-white/40">
                        {item.num}
                      </span>
                      {item.isPopular && (
                        <span className="px-2 py-0.5 rounded-full bg-white/[0.06] text-[9px] font-mono tracking-wider uppercase text-zinc-300 border border-white/10">
                          FEATURED
                        </span>
                      )}
                    </div>

                    {/* Minimal Title */}
                    <h3 className="text-lg sm:text-xl font-semibold font-heading text-white mb-2.5 tracking-tight group-hover:text-white transition-colors">
                      {language === "ar" ? item.titleAr : item.title}
                    </h3>

                    {/* Clean 1-sentence Description */}
                    <p className="text-xs sm:text-[13px] text-zinc-400 leading-relaxed mb-6 font-normal">
                      {language === "ar" ? item.descAr : item.desc}
                    </p>

                    {/* Minimal Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {item.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.04] text-zinc-300 border border-white/[0.08]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Clean Footer Link */}
                  <Link
                    href={`/services/${item.slug}`}
                    className="pt-4 border-t border-white/[0.06] flex items-center justify-between mt-auto group/cta text-zinc-400 hover:text-white transition-colors"
                  >
                    <span className="text-xs font-medium tracking-wide">
                      {language === "ar" ? "ابدأ مشروعك" : "Start a project"}
                    </span>
                    <div className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center text-white/60 transition-all duration-300 group-hover/cta:border-white/40 group-hover/cta:bg-white group-hover/cta:text-black group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
