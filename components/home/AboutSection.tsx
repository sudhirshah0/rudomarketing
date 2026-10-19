"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useModal } from "@/context/ModalContext";
import {
  Award,
  TrendingUp,
  Users,
  Trophy,
  ArrowRight,
  Building,
} from "lucide-react";

export default function AboutSection() {
  const { t, language, dir } = useLanguage();
  const { openModal } = useModal();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Animated counter states
  const [revenue, setRevenue] = useState(0);
  const [retention, setRetention] = useState(0);
  const [team, setTeam] = useState(0);
  const [awards, setAwards] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate Revenue to 340
          let currentRev = 0;
          const revTimer = setInterval(() => {
            currentRev += 5;
            if (currentRev >= 340) {
              setRevenue(340);
              clearInterval(revTimer);
            } else {
              setRevenue(currentRev);
            }
          }, 20);

          // Animate Retention to 94
          let currentRet = 0;
          const retTimer = setInterval(() => {
            currentRet += 2;
            if (currentRet >= 94) {
              setRetention(94);
              clearInterval(retTimer);
            } else {
              setRetention(currentRet);
            }
          }, 30);

          // Animate Team to 32
          let currentTeam = 0;
          const teamTimer = setInterval(() => {
            currentTeam += 1;
            if (currentTeam >= 32) {
              setTeam(32);
              clearInterval(teamTimer);
            } else {
              setTeam(currentTeam);
            }
          }, 45);

          // Animate Awards to 14
          let currentAwards = 0;
          const awTimer = setInterval(() => {
            currentAwards += 1;
            if (currentAwards >= 14) {
              setAwards(14);
              clearInterval(awTimer);
            } else {
              setAwards(currentAwards);
            }
          }, 80);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="py-24 bg-rudo-primary relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-rudo-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual & Dubai HQ image card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden glass-panel shadow-2xl">
              {/* Image placeholder of Dubai Business Bay / Luxury skyline */}
              <div className="relative h-[440px] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1000&auto=format&fit=crop"
                  alt="Rudo Marketing Headquarters Business Bay Dubai"
                  fill
                  className="object-cover filter contrast-110 saturate-125"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              </div>

              {/* Floating Glass Badge on Card */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-modal space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-purple-300 uppercase tracking-wider">
                  <Building className="w-4 h-4 text-purple-300" />
                  <span>{language === "ar" ? "قرية الأعمال، بور سعيد، دبي" : "Port Saeed Business Village, Dubai"}</span>
                </div>
                <p className="text-xs text-gray-200">
                  {language === "ar"
                    ? "المركز الرئيسي للعمليات التسويقية المتقدمة في دول مجلس التعاون"
                    : "Command Center for High-Impact MENA Marketing Operations"}
                </p>
              </div>
            </div>

            {/* Accent Floating Metric Card */}
            <div
              className={`absolute -top-6 ${
                dir === "rtl" ? "-left-6" : "-right-6"
              } hidden sm:flex items-center gap-3 bg-white text-slate-950 p-4 rounded-2xl shadow-xl font-bold border border-white/40`}
            >
              <Award className="w-8 h-8 text-slate-950" />
              <div className="text-left">
                <div className="text-xs uppercase tracking-wider font-extrabold">Top Growth Agency</div>
                <div className="text-[10px] opacity-80">MENA Digital Awards Finalist</div>
              </div>
            </div>
          </div>

          {/* Right Column: Story & Animated Counters */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono font-bold tracking-[0.2em] uppercase text-purple-300">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse shadow-[0_0_8px_#C084FC]" />
              <span>{t("about.badge")}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white leading-tight">
              {t("about.title")}
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-gray-200 leading-relaxed">
              <p>{t("about.desc1")}</p>
              <p>{t("about.desc2")}</p>
            </div>



            {/* 4 Animated Counters Glass Strip */}
            <div className="glass-panel p-6 sm:p-7 rounded-2xl grid grid-cols-2 sm:grid-cols-4 gap-6">
              {/* Counter 1: Revenue */}
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold font-heading text-white flex items-baseline">
                  <span className="text-xs text-purple-300 font-normal mr-1">AED</span>
                  <span>{revenue}</span>
                  <span className="text-purple-300 font-bold">M+</span>
                </div>
                <div className="text-xs text-gray-200 font-medium">
                  {t("about.stat1")}
                </div>
              </div>

              {/* Counter 2: Retention */}
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold font-heading text-white flex items-baseline">
                  <span>{retention}</span>
                  <span className="text-purple-300 font-bold">%</span>
                </div>
                <div className="text-xs text-gray-200 font-medium">
                  {t("about.stat2")}
                </div>
              </div>

              {/* Counter 3: Team */}
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold font-heading text-white flex items-baseline">
                  <span>{team}</span>
                  <span className="text-purple-300 font-bold">+</span>
                </div>
                <div className="text-xs text-gray-200 font-medium">
                  {t("about.stat3")}
                </div>
              </div>

              {/* Counter 4: Awards */}
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold font-heading text-white flex items-baseline">
                  <span>{awards}</span>
                  <span className="text-purple-300 font-bold">+</span>
                </div>
                <div className="text-xs text-gray-200 font-medium">
                  {t("about.stat4")}
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="pt-4 flex items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-rudo-accent hover:text-white transition"
              >
                <span>{language === "ar" ? "تعرف أكثر على مسيرتنا وقيمنا" : "Discover our complete agency story"}</span>
                <ArrowRight className={`w-4 h-4 ${dir === "rtl" ? "rotate-180" : ""}`} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
