"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { useModal } from "@/context/ModalContext";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  Search,
  TrendingUp,
  Share2,
  Globe,
  Palette,
  Video,
  Building2,
  Hotel,
  ShoppingCart,
  Landmark,
  Stethoscope,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function Header() {
  const { language, setLanguage, t, dir } = useLanguage();
  const { openModal } = useModal();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [mobileLangOpen, setMobileLangOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      slug: "seo",
      title: "Enterprise SEO & GEO",
      titleAr: "تصدر محركات البحث والذكاء الاصطناعي",
      desc: "Top rankings across Google UAE and AI engines (ChatGPT, Perplexity).",
      descAr: "تصدر نتائج محركات البحث ومنصات الذكاء الاصطناعي في الإمارات.",
      icon: Search,
    },
    {
      slug: "ppc",
      title: "PPC & Performance Ads",
      titleAr: "الإعلانات الممولة عالية العائد",
      desc: "Hyper-targeted Google, Meta, TikTok, and LinkedIn ad scale.",
      descAr: "إدارة حملات إعلانية مستهدفة عبر غوغل وميتا وتيك توك ولينكدإن.",
      icon: TrendingUp,
    },
    {
      slug: "social-media",
      title: "Social Media Marketing",
      titleAr: "إدارة منصات التواصل الاجتماعي",
      desc: "Bilingual community growth, influencer campaigns & virality.",
      descAr: "بناء مجتمعات رقمية ثنائية اللغة وحملات المؤثرين في الخليج.",
      icon: Share2,
    },
    {
      slug: "web-design",
      title: "Web Design & Development",
      titleAr: "تصميم وتطوير المواقع الفاخرة",
      desc: "Ultra-fast Next.js headless platforms designed to convert.",
      descAr: "مواقع إلكترونية فائقة السرعة والأناقة مصممة لزيادة التحويل.",
      icon: Globe,
    },
    {
      slug: "branding",
      title: "Branding & Creative Identity",
      titleAr: "بناء الهوية واستراتيجية العلامة",
      desc: "Prestige luxury positioning tailored to the Arab & GCC mindset.",
      descAr: "ترسيخ المكانة الفاخرة للعلامة التجارية بما يلائم المستهلك الخليجي.",
      icon: Palette,
    },
    {
      slug: "content-production",
      title: "Content & Video Production",
      titleAr: "الإنتاج المرئي وصناعة المحتوى",
      desc: "Cinematic commercial reels, 4K video, and native Arabic copywriting.",
      descAr: "إنتاج فيديوهات إعلانية سينمائية وصياغة محتوى عربي أصيل.",
      icon: Video,
    },
  ];

  const industries = [
    {
      slug: "real-estate",
      title: "Real Estate & Off-Plan",
      titleAr: "العقارات والمشاريع قيد الإنشاء",
      desc: "Qualified buyer leads for Dubai luxury brokerages & developers.",
      icon: Building2,
    },
    {
      slug: "luxury-hospitality",
      title: "Luxury & Hospitality",
      titleAr: "الضيافة والفنادق الفاخرة",
      desc: "Direct bookings and prestige awareness for resorts and dining.",
      icon: Hotel,
    },
    {
      slug: "ecommerce-retail",
      title: "FMCG, E-Commerce & Retail",
      titleAr: "التجارة الإلكترونية والتجزئة",
      desc: "Omnichannel scaling with high ROAS across UAE and KSA.",
      icon: ShoppingCart,
    },
    {
      slug: "b2b-finance",
      title: "FinTech & Corporate B2B",
      titleAr: "الشركات والتقنية المالية",
      desc: "Pipeline generation for family offices, fintech, and enterprise tech.",
      icon: Landmark,
    },
    {
      slug: "healthcare-wellness",
      title: "Healthcare & Clinics",
      titleAr: "الرعاية الصحية والعيادات التجميلية",
      desc: "High-value patient acquisition for premier medical centers in Dubai.",
      icon: Stethoscope,
    },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[9999] isolate transition-all duration-300 pointer-events-auto ${
          isScrolled
            ? "pt-2.5 sm:pt-4 px-3 sm:px-6"
            : "pt-0 px-0 bg-[#070312]/90 backdrop-blur-xl border-b-0"
        }`}
      >
        <div
          className={`transition-all duration-300 ${
            isScrolled ? "max-w-7xl mx-auto" : "w-full"
          }`}
        >
          <div
            className={`transition-all duration-300 flex items-center justify-between ${
              isScrolled
                ? "rounded-2xl sm:rounded-full px-3.5 sm:px-7 py-2 sm:py-3 border border-white/15 bg-[#090417]/95 backdrop-blur-2xl shadow-[0_16px_40px_rgba(0,0,0,0.8),0_0_25px_rgba(168,37,232,0.25),inset_0_1px_1px_rgba(255,255,255,0.25)]"
                : "site-container rounded-none border-none bg-transparent py-3 sm:py-5 shadow-none"
            }`}
          >
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 group transition-transform duration-300 hover:scale-105"
            >
              <div className="w-36 sm:w-44 h-10 relative">
                <Image
                  src="/logo.svg"
                  alt="Rudo Marketing Dubai"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {/* Home */}
              <Link
                href="/"
                className="nav-link-hover text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                {t("nav.home")}
              </Link>

              {/* Services Link & Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("services")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href="/services"
                  className="nav-link-hover text-sm font-medium text-white/80 hover:text-white transition-colors py-2 block"
                >
                  {t("nav.services")}
                </Link>

                {/* Luminous Glassmorphism Dropdown matching Hero Gradient - Solid Full Blur */}
                {activeDropdown === "services" && (
                  <div
                    className={`absolute top-full ${
                      dir === "rtl" ? "right-0" : "left-0"
                    } w-[310px] pt-3 z-50 animate-fadeIn`}
                  >
                    <div className="relative rounded-2xl p-2.5 dropdown-full-blur space-y-1 overflow-hidden">
                      {/* Ambient corner glow inside dropdown */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/25 blur-2xl pointer-events-none" />

                      {services.map((s) => {
                        const Icon = s.icon;
                        return (
                          <Link
                            key={s.slug}
                            href={`/services/${s.slug}`}
                            onClick={() => setActiveDropdown(null)}
                            className="group/item relative z-10 flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/[0.08] hover:border-purple-400/30 border border-transparent transition-all text-sm font-medium text-white/90 hover:text-white"
                          >
                            <div className="w-7 h-7 rounded-lg bg-purple-500/20 border border-purple-400/35 flex items-center justify-center text-purple-200 group-hover/item:border-purple-300 group-hover/item:bg-purple-500/35 group-hover/item:text-white transition-all shrink-0">
                              <Icon className="w-3.5 h-3.5 transition-transform group-hover/item:scale-110" />
                            </div>
                            <span className="font-medium text-xs sm:text-[13px] tracking-tight">
                              {language === "ar" ? s.titleAr : s.title}
                            </span>
                          </Link>
                        );
                      })}

                      <div className="pt-2 mt-1 border-t border-purple-500/25 px-2 relative z-10">
                        <Link
                          href="/services"
                          className="text-[11px] font-mono tracking-wider uppercase text-purple-300 hover:text-white flex items-center justify-between py-1 transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <span>{t("nav.viewAllServices")}</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Our Work */}
              <Link
                href="/case-studies"
                className="nav-link-hover text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                {t("nav.work")}
              </Link>

              {/* Industries Link & Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("industries")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href="/industries"
                  className="nav-link-hover text-sm font-medium text-white/80 hover:text-white transition-colors py-2 block"
                >
                  {t("nav.industries")}
                </Link>

                {/* Luminous Glassmorphism Dropdown matching Hero Gradient - Solid Full Blur */}
                {activeDropdown === "industries" && (
                  <div
                    className={`absolute top-full ${
                      dir === "rtl" ? "right-0" : "left-0"
                    } w-[310px] pt-3 z-50 animate-fadeIn`}
                  >
                    <div className="relative rounded-2xl p-2.5 dropdown-full-blur space-y-1 overflow-hidden">
                      {/* Ambient corner glow inside dropdown */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/25 blur-2xl pointer-events-none" />

                      {industries.map((ind) => {
                        const Icon = ind.icon;
                        return (
                          <Link
                            key={ind.slug}
                            href={`/industries/${ind.slug}`}
                            onClick={() => setActiveDropdown(null)}
                            className="group/item relative z-10 flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/[0.08] hover:border-purple-400/30 border border-transparent transition-all text-sm font-medium text-white/90 hover:text-white"
                          >
                            <div className="w-7 h-7 rounded-lg bg-purple-500/20 border border-purple-400/35 flex items-center justify-center text-purple-200 group-hover/item:border-purple-300 group-hover/item:bg-purple-500/35 group-hover/item:text-white transition-all shrink-0">
                              <Icon className="w-3.5 h-3.5 transition-transform group-hover/item:scale-110" />
                            </div>
                            <span className="font-medium text-xs sm:text-[13px] tracking-tight">
                              {language === "ar" ? ind.titleAr : ind.title}
                            </span>
                          </Link>
                        );
                      })}

                      <div className="pt-2 mt-1 border-t border-purple-500/25 px-2 relative z-10">
                        <Link
                          href="/industries"
                          className="text-[11px] font-mono tracking-wider uppercase text-purple-300 hover:text-white flex items-center justify-between py-1 transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <span>{t("nav.viewAllIndustries")}</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* About */}
              <Link
                href="/about"
                className="nav-link-hover text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                {t("nav.about")}
              </Link>

              {/* Contact */}
              <Link
                href="/contact"
                className="nav-link-hover text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                {t("nav.contact")}
              </Link>
            </nav>

            {/* Right Side: Message & Calling Icons (left) + Language Selector (center) + Speak to an Expert CTA (right) */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Message & Calling Buttons on the Left */}
              <div className="flex items-center gap-2">
                <a
                  href="mailto:info@rudomarketing.ae"
                  aria-label="Email Rudo Marketing"
                  className="glass-pill w-10 h-10 rounded-full flex items-center justify-center text-white/90 hover:text-white hover:bg-purple-500/20 hover:border-purple-400/40 hover:scale-105 transition-all duration-300 border border-white/10"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href="tel:+971553858658"
                  aria-label="Call Rudo Marketing"
                  className="glass-pill w-10 h-10 rounded-full flex items-center justify-center text-white/90 hover:text-white hover:bg-purple-500/20 hover:border-purple-400/40 hover:scale-105 transition-all duration-300 border border-white/10"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>

              {/* Language Switcher Dropdown (Between Left Icons and Right CTA) */}
              <div className="relative">
                <button
                  onClick={() => setActiveDropdown(activeDropdown === "lang" ? null : "lang")}
                  className="primary-btn !py-2.5 !px-4 text-xs font-bold gap-2 cursor-pointer shadow-md inline-flex items-center"
                  aria-label="Select language"
                >
                  <span>{language === "en" ? "🇺🇸 English" : "🇦🇪 العربية"}</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${
                      activeDropdown === "lang" ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {activeDropdown === "lang" && (
                  <div
                    className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-36 rounded-2xl dropdown-full-blur p-1.5 shadow-[0_12px_40px_rgba(0,0,0,0.9)] z-50 animate-fadeIn"
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      onClick={() => {
                        setLanguage("en");
                        setActiveDropdown(null);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition ${
                        language === "en"
                          ? "bg-purple-500/20 text-purple-200 border border-purple-400/30"
                          : "text-white/80 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span>🇺🇸</span>
                        <span>English</span>
                      </span>
                      {language === "en" && <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />}
                    </button>

                    <button
                      onClick={() => {
                        setLanguage("ar");
                        setActiveDropdown(null);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition mt-1 ${
                        language === "ar"
                          ? "bg-purple-500/20 text-purple-200 border border-purple-400/30"
                          : "text-white/80 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span>🇦🇪</span>
                        <span>العربية</span>
                      </span>
                      {language === "ar" && <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />}
                    </button>
                  </div>
                )}
              </div>

              {/* "Speak to an expert" Primary Button on the Right */}
              <button
                onClick={() => openModal()}
                className="primary-btn !py-2.5 !px-5 text-sm font-bold"
              >
                <span>{t("nav.cta")}</span>
              </button>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center gap-2 lg:hidden">
              {/* Mobile Language Selector Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setMobileLangOpen(!mobileLangOpen)}
                  className="px-2.5 sm:px-3 py-1.5 rounded-full text-xs font-semibold text-white bg-white/[0.08] backdrop-blur-xl border border-white/15 hover:border-purple-400/50 hover:bg-white/[0.14] transition-all shadow-sm flex items-center gap-1"
                  aria-label="Language options"
                >
                  <span>{language === "en" ? "🇺🇸 EN" : "🇦🇪 AR"}</span>
                  <ChevronDown
                    className={`w-3 h-3 text-purple-300 transition-transform duration-200 ${
                      mobileLangOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {mobileLangOpen && (
                  <div className="absolute top-full mt-2 right-0 w-36 rounded-2xl bg-[#0E0622]/95 backdrop-blur-2xl border border-purple-500/30 p-1.5 shadow-[0_12px_40px_rgba(0,0,0,0.8)] z-50 animate-fadeIn">
                    <button
                      type="button"
                      onClick={() => {
                        setLanguage("en");
                        setMobileLangOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition ${
                        language === "en"
                          ? "bg-purple-500/20 text-purple-200 border border-purple-400/30"
                          : "text-white/80 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span>🇺🇸</span>
                        <span>English</span>
                      </span>
                      {language === "en" && <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />}
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setLanguage("ar");
                        setMobileLangOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition mt-1 ${
                        language === "ar"
                          ? "bg-purple-500/20 text-purple-200 border border-purple-400/30"
                          : "text-white/80 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span>🇦🇪</span>
                        <span>العربية</span>
                      </span>
                      {language === "ar" && <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />}
                    </button>
                  </div>
                )}
              </div>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/[0.08] backdrop-blur-xl text-white flex items-center justify-center border border-white/15 hover:border-purple-400/50 hover:bg-white/[0.14] active:scale-95 transition-all shadow-sm"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5 text-purple-300" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Redesigned Mobile Menu: High-End Full Glassmorphic Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop Blur Layer */}
          <div
            className="fixed inset-0 bg-[#04010A]/90 backdrop-blur-2xl transition-opacity animate-fadeIn"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Clean Glassmorphic Compact Menu Panel - Snug fit without covering empty screen space */}
          <div
            className="fixed top-[4.25rem] sm:top-20 inset-x-3 sm:inset-x-6 max-h-[calc(100dvh-5.5rem)] rounded-3xl bg-[#090417]/98 backdrop-blur-3xl border border-white/15 p-4 sm:p-5 overflow-y-auto flex flex-col shadow-[0_24px_70px_rgba(0,0,0,0.95),0_0_50px_rgba(168,37,232,0.3),inset_0_1px_1px_rgba(255,255,255,0.2)] animate-fadeIn z-50"
          >
            {/* Top decorative ambient glow inside mobile menu */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/20 blur-3xl rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-fuchsia-600/15 blur-3xl rounded-full pointer-events-none" />

            <div className="relative z-10 space-y-3">
              {/* Navigation Links */}
              <div className="space-y-2 pt-0.5">
                {/* Home */}
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-purple-400/30 hover:bg-white/[0.08] transition-all text-base font-semibold text-white"
                >
                  <span>{t("nav.home")}</span>
                  <ArrowRight className={`w-4 h-4 text-purple-300 ${dir === "rtl" ? "rotate-180" : ""}`} />
                </Link>

                {/* Services Section - Collapsible Accordion */}
                <div className="rounded-2xl bg-white/[0.03] border border-white/5 overflow-hidden transition-all duration-300">
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full flex items-center justify-between p-3.5 text-left cursor-pointer hover:bg-white/[0.04] transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold tracking-wider text-purple-300 uppercase">
                        {t("nav.services")}
                      </span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-purple-500/20 text-purple-200 font-mono">
                        {services.length}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ChevronDown
                        className={`w-4 h-4 text-purple-300 transition-transform duration-300 ${
                          mobileServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </button>

                  {mobileServicesOpen && (
                    <div className="px-3 pb-3 pt-1 border-t border-white/5 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="flex items-center justify-between py-1">
                        <span className="text-[10px] text-white/40 uppercase tracking-wider">
                          {language === "ar" ? "قائمة الخدمات" : "Available Services"}
                        </span>
                        <Link
                          href="/services"
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-[11px] text-purple-300 hover:text-white transition-colors"
                        >
                          {language === "ar" ? "عرض الكل ←" : "View all →"}
                        </Link>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        {services.map((s) => {
                          const Icon = s.icon;
                          return (
                            <Link
                              key={s.slug}
                              href={`/services/${s.slug}`}
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex items-center gap-2.5 p-2 rounded-xl bg-white/[0.02] hover:bg-white/[0.08] text-xs font-medium text-white/80 hover:text-white transition-all"
                            >
                              <div className="w-6 h-6 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-300 shrink-0">
                                <Icon className="w-3 h-3" />
                              </div>
                              <span className="truncate">{language === "ar" ? s.titleAr : s.title}</span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                {/* Case Studies */}
                <Link
                  href="/case-studies"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-purple-400/30 hover:bg-white/[0.08] transition-all text-base font-semibold text-white"
                >
                  <span>{t("nav.work")}</span>
                  <ArrowRight className={`w-4 h-4 text-purple-300 ${dir === "rtl" ? "rotate-180" : ""}`} />
                </Link>

                {/* Industries Section - Collapsible Accordion */}
                <div className="rounded-2xl bg-white/[0.03] border border-white/5 overflow-hidden transition-all duration-300">
                  <button
                    type="button"
                    onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                    className="w-full flex items-center justify-between p-3.5 text-left cursor-pointer hover:bg-white/[0.04] transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold tracking-wider text-purple-300 uppercase">
                        {t("nav.industries")}
                      </span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-purple-500/20 text-purple-200 font-mono">
                        {industries.length}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ChevronDown
                        className={`w-4 h-4 text-purple-300 transition-transform duration-300 ${
                          mobileIndustriesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </button>

                  {mobileIndustriesOpen && (
                    <div className="px-3 pb-3 pt-1 border-t border-white/5 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="flex items-center justify-between py-1">
                        <span className="text-[10px] text-white/40 uppercase tracking-wider">
                          {language === "ar" ? "القطاعات المتخصصة" : "Target Sectors"}
                        </span>
                        <Link
                          href="/industries"
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-[11px] text-purple-300 hover:text-white transition-colors"
                        >
                          {language === "ar" ? "عرض الكل ←" : "View all →"}
                        </Link>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        {industries.map((ind) => {
                          const Icon = ind.icon;
                          return (
                            <Link
                              key={ind.slug}
                              href={`/industries/${ind.slug}`}
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex items-center gap-2.5 p-2 rounded-xl bg-white/[0.02] hover:bg-white/[0.08] text-xs font-medium text-white/80 hover:text-white transition-all"
                            >
                              <div className="w-6 h-6 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-300 shrink-0">
                                <Icon className="w-3 h-3" />
                              </div>
                              <span className="truncate">{language === "ar" ? ind.titleAr : ind.title}</span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                {/* About & Contact */}
                <div className="grid grid-cols-2 gap-2">
                  <Link
                    href="/about"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-3 text-center rounded-2xl bg-white/[0.03] border border-white/5 hover:border-purple-400/30 hover:bg-white/[0.08] transition-all text-sm font-semibold text-white"
                  >
                    {t("nav.about")}
                  </Link>
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-3 text-center rounded-2xl bg-white/[0.03] border border-white/5 hover:border-purple-400/30 hover:bg-white/[0.08] transition-all text-sm font-semibold text-white"
                  >
                    {t("nav.contact")}
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="relative z-10 pt-3.5 mt-2 border-t border-white/10 space-y-2.5">
              <a
                href="tel:+971553858658"
                className="flex items-center justify-center gap-2 py-2.5 bg-white/[0.04] border border-white/10 rounded-2xl text-xs font-mono text-white/90 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-purple-300" />
                <span>+971 55 385 8658</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openModal();
                }}
                className="primary-btn w-full !py-3 text-sm font-bold shadow-[0_8px_25px_rgba(168,37,232,0.45)]"
              >
                {t("nav.cta")}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
