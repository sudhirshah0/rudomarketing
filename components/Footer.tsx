"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Instagram,
  Twitter,
  Youtube,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  const { t, language, dir } = useLanguage();
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail && /^\S+@\S+\.\S+$/.test(newsletterEmail)) {
      setSubscribed(true);
      setNewsletterEmail("");
    }
  };

  return (
    <footer className="relative bg-[#07070A] border-t border-white/10 text-white/80 overflow-hidden">
      {/* Top ambient radial white-purple flare behind logo (matching reference image) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[650px] h-[220px] bg-gradient-to-b from-white/15 via-purple-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Giant Outlined Typography Background Watermark - Placed in the absolute background in the middle of the footer */}
      <div
        className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none z-0"
        aria-hidden="true"
      >
        <span
          className="text-[20vw] font-black tracking-tighter uppercase whitespace-nowrap leading-none opacity-[0.06]"
          style={{
            WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.8)",
            color: "transparent",
            fontFamily: "var(--font-heading)",
          }}
        >
          RUDO
        </span>
      </div>

      {/* Main Footer Content */}
      <div className="site-container pt-12 pb-14 relative z-10">
        {/* Top Centered Brand Logo & Social Icons with flanking divider lines (matching reference) */}
        <div className="flex flex-col items-center justify-center mb-16 space-y-6">
          <Link href="/" className="inline-block relative z-10 transition-transform hover:scale-105 duration-300">
            <div className="w-52 h-14 relative">
              <Image
                src="/logo.svg"
                alt="Rudo Marketing Dubai"
                fill
                className="object-contain filter drop-shadow-[0_4px_24px_rgba(255,255,255,0.25)]"
              />
            </div>
          </Link>

          {/* Social Row with flanked thin divider lines */}
          <div className="w-full flex items-center justify-center gap-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/15 to-white/20 max-w-sm hidden sm:block" />
            <div className="flex items-center gap-4">
              {[
                { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/rudomarketing" },
                { name: "Instagram", icon: Instagram, href: "https://instagram.com/rudomarketing" },
                { name: "X", icon: Twitter, href: "https://twitter.com/rudomarketing" },
                { name: "YouTube", icon: Youtube, href: "https://youtube.com/@rudomarketing" },
              ].map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Rudo Marketing on ${s.name}`}
                    className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/15 hover:border-purple-400/50 hover:scale-110 transition-all duration-300 shadow-sm"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-white/15 to-white/20 max-w-sm hidden sm:block" />
          </div>
        </div>

        {/* Navigation & Newsletter Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 pb-6">
          {/* Column 1: Contact Us / Brand Info */}
          <div className="lg:col-span-3 space-y-4 text-center md:text-left rtl:md:text-right flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 border-s-0 md:border-s-2 border-purple-400 ps-0 md:ps-2.5 justify-center md:justify-start">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                {language === "ar" ? "تواصل معنا" : "Contact Us"}
              </h4>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed font-light max-w-xs md:max-w-none">
              {t("footer.tagline")}
            </p>
            <div className="inline-flex items-center gap-2 text-[10px] font-mono text-purple-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34D399]" />
              <span>DET Licensed • Lic. 1605649</span>
            </div>

            {/* Direct Contact details */}
            <div className="space-y-2.5 pt-1 text-xs w-full flex flex-col items-center md:items-start">
              <div className="flex items-center md:items-start gap-2.5 text-gray-300 font-light justify-center md:justify-start">
                <MapPin className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                <span className="leading-snug">{t("footer.address")}</span>
              </div>
              <div className="flex items-center gap-2.5 justify-center md:justify-start">
                <Phone className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <a
                  href="tel:+971553858658"
                  className="text-gray-300 hover:text-purple-300 transition font-mono"
                >
                  +971 55 385 8658
                </a>
              </div>
              <div className="flex items-center gap-2.5 justify-center md:justify-start">
                <Mail className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <a
                  href="mailto:info@rudomarketing.ae"
                  className="text-gray-300 hover:text-purple-300 transition"
                >
                  info@rudomarketing.ae
                </a>
              </div>
              <div className="flex items-center gap-2.5 justify-center md:justify-start">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a
                  href="https://wa.me/971553858658?text=Hi%20RU%20DO%20MARKETING%2C%20I%20want%20a%20free%20growth%20audit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-semibold transition"
                >
                  {t("whatsapp.text")}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Main Navigation Links */}
          <div className="lg:col-span-2 space-y-4 text-center md:text-left rtl:md:text-right flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 border-s-0 md:border-s-2 border-purple-400 ps-0 md:ps-2.5 justify-center md:justify-start">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                {language === "ar" ? "التنقل السريع" : "Quick Navigation"}
              </h4>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm flex flex-col items-center md:items-start">
              <li>
                <Link href="/" className="hover:text-rudo-accent transition flex items-center gap-1.5">
                  <span>{t("nav.home")}</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-rudo-accent transition flex items-center gap-1.5">
                  <span>{t("nav.services")}</span>
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-rudo-accent transition flex items-center gap-1.5">
                  <span>{t("nav.work")}</span>
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-rudo-accent transition flex items-center gap-1.5">
                  <span>{t("nav.industries")}</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-rudo-accent transition flex items-center gap-1.5">
                  <span>{t("nav.about")}</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-rudo-accent transition flex items-center gap-1.5">
                  <span>{t("nav.contact")}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-2 space-y-4 text-center md:text-left rtl:md:text-right flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 border-s-0 md:border-s-2 border-purple-400 ps-0 md:ps-2.5 justify-center md:justify-start">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                {t("footer.servicesTitle")}
              </h4>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm flex flex-col items-center md:items-start">
              <li>
                <Link href="/services/seo" className="hover:text-rudo-accent transition">
                  {language === "ar" ? "تحسين محركات البحث (SEO)" : "Enterprise SEO & GEO"}
                </Link>
              </li>
              <li>
                <Link href="/services/ppc" className="hover:text-rudo-accent transition">
                  {language === "ar" ? "الإعلانات الممولة (PPC)" : "Paid Performance Ads"}
                </Link>
              </li>
              <li>
                <Link href="/services/social-media" className="hover:text-rudo-accent transition">
                  {language === "ar" ? "إدارة وسائل التواصل" : "Social Media Management"}
                </Link>
              </li>
              <li>
                <Link href="/services/web-design" className="hover:text-rudo-accent transition">
                  {language === "ar" ? "تصميم وتطوير المواقع" : "Web Design & Dev"}
                </Link>
              </li>
              <li>
                <Link href="/services/branding" className="hover:text-rudo-accent transition">
                  {language === "ar" ? "استراتيجية العلامة الفاخرة" : "Brand Identity"}
                </Link>
              </li>
              <li>
                <Link href="/services/content-production" className="hover:text-rudo-accent transition">
                  {language === "ar" ? "صناعة وإنتاج المحتوى" : "Content & Video"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Industries */}
          <div className="lg:col-span-2 space-y-4 text-center md:text-left rtl:md:text-right flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 border-s-0 md:border-s-2 border-purple-400 ps-0 md:ps-2.5 justify-center md:justify-start">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                {t("footer.industriesTitle")}
              </h4>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm flex flex-col items-center md:items-start">
              <li>
                <Link href="/industries/real-estate" className="hover:text-rudo-accent transition">
                  {language === "ar" ? "العقارات الفاخرة بدبي" : "Dubai Real Estate"}
                </Link>
              </li>
              <li>
                <Link href="/industries/luxury-hospitality" className="hover:text-rudo-accent transition">
                  {language === "ar" ? "الفنادق والضيافة" : "Luxury & Hospitality"}
                </Link>
              </li>
              <li>
                <Link href="/industries/ecommerce-retail" className="hover:text-rudo-accent transition">
                  {language === "ar" ? "التجارة الإلكترونية" : "E-Commerce & Retail"}
                </Link>
              </li>
              <li>
                <Link href="/industries/b2b-finance" className="hover:text-rudo-accent transition">
                  {language === "ar" ? "الشركات والتقنية المالية" : "B2B & FinTech"}
                </Link>
              </li>
              <li>
                <Link href="/industries/healthcare-wellness" className="hover:text-rudo-accent transition">
                  {language === "ar" ? "العيادات الطبية والتجميل" : "Aesthetic Healthcare"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Newsletter & GCC Briefing Card (Wider & Aligned to the Right on desktop, centered on mobile) */}
          <div className="lg:col-span-3 xl:col-span-3 relative rounded-3xl p-6 sm:p-7 bg-[#12131A]/85 backdrop-blur-2xl border border-white/15 shadow-[0_16px_40px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.2)] overflow-hidden group hover:border-purple-500/40 transition-all duration-300 w-full max-w-md mx-auto md:max-w-none text-center md:text-left rtl:md:text-right">
            {/* Top ambient radial glow */}
            <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-purple-600/20 blur-2xl pointer-events-none group-hover:bg-purple-600/30 transition-all" />

            <div className="relative z-10 space-y-4">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse shadow-[0_0_10px_#C084FC]" />
                <h4 className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.16em] text-white">
                  {language === "ar" ? "النشرة الاستراتيجية" : "GCC Market Briefing"}
                </h4>
              </div>

              <p className="text-xs sm:text-[13px] text-white/70 leading-relaxed font-light">
                {language === "ar"
                  ? "انضم إلى أكثر من 2,400 مدير تسويق وتنفيذي في الإمارات يتلقون تحليلاتنا الشهرية الحصرية."
                  : "Join 2,400+ CMOs & founders receiving our monthly analysis on Middle East consumer behavior."}
              </p>

              {subscribed ? (
                <div className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-purple-950/60 border border-purple-500/40 text-xs text-purple-200">
                  <CheckCircle className="w-4 h-4 text-purple-400 shrink-0" />
                  <span className="font-medium">
                    {language === "ar"
                      ? "شكراً لاشتراكك في النشرة! تم التسجيل بنجاح."
                      : "Subscription confirmed. Welcome aboard."}
                  </span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-3 pt-1">
                  <div className="relative flex items-center">
                    <input
                      type="email"
                      required
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder={language === "ar" ? "بريدك الإلكتروني المهني" : "work@company.ae"}
                      className="w-full bg-[#1A1B24]/90 backdrop-blur-md border border-white/15 rounded-2xl py-3 px-4 text-xs sm:text-sm text-white placeholder-white/40 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all shadow-inner"
                      style={{
                        paddingInlineEnd: "3.75rem",
                      }}
                    />
                    <button
                      type="submit"
                      aria-label="Subscribe to newsletter"
                      className={`absolute ${
                        dir === "rtl" ? "left-1.5" : "right-1.5"
                      } w-10 h-10 rounded-xl bg-gradient-to-r from-[#7028E4] via-[#A825E8] to-[#B828E6] text-white flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-[0_4px_18px_rgba(168,37,232,0.55),inset_0_1px_1px_rgba(255,255,255,0.6)] border border-purple-200/40`}
                    >
                      <ArrowRight className={`w-4 h-4 ${dir === "rtl" ? "rotate-180" : ""}`} />
                    </button>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-white/50 font-light">
                    <ShieldCheck className="w-3.5 h-3.5 text-purple-400/80 shrink-0" />
                    <span>
                      {language === "ar"
                        ? "لا نرسل رسائل مزعجة إطلاقاً. يمكنك إلغاء الاشتراك في أي وقت."
                        : "Strictly zero spam. Unsubscribe anytime."}
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-5 pb-2 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center md:text-left rtl:md:text-right text-xs text-gray-400">
            <span>© 2026 Ru Do Marketing Management L.L.C S.O.C.</span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span className="text-purple-300 font-mono text-[11px] font-semibold">Trade License No. 1605649</span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span>All rights reserved.</span>
          </div>

          <div className="flex items-center justify-center gap-6 flex-wrap">
            <Link href="/privacy-policy" className="hover:text-rudo-accent transition">
              {t("footer.privacy")}
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-rudo-accent transition">
              {t("footer.terms")}
            </Link>
            <Link href="/contact" className="hover:text-rudo-accent transition">
              {t("nav.contact")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
