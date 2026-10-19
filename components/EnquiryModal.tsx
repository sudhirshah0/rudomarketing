"use client";

import React, { useState, useEffect } from "react";
import { useModal } from "@/context/ModalContext";
import { useLanguage } from "@/context/LanguageContext";
import confetti from "canvas-confetti";
import {
  X,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Phone,
  Mail,
  User,
  ChevronDown,
} from "lucide-react";

export default function EnquiryModal() {
  const { isOpen, closeModal, selectedService } = useModal();
  const { t, language, dir } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "+971",
    service: "",
    timeline: "within_1_month",
    budget: 25000,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeModal]);

  // Lock background scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setIsSuccess(false);
      setErrors({});
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = language === "ar" ? "يرجى كتابة الاسم بالكامل" : "Please enter your full name";
    }
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = language === "ar" ? "يرجى إدخال بريد إلكتروني صحيح للعمل" : "Please enter a valid work email";
    }
    if (!formData.phone.trim() || formData.phone.length < 7) {
      newErrors.phone = language === "ar" ? "يرجى كتابة رقم هاتف صالح" : "Please enter a valid contact number";
    }
    if (!formData.service) {
      newErrors.service = language === "ar" ? "يرجى اختيار الخدمة المطلوبة" : "Please select a service";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      try {
        confetti({
          particleCount: 90,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#A825E8", "#7028E4", "#C084FC", "#FFFFFF"],
        });
      } catch (err) {
        // Safe fallback if canvas not available
      }
    }, 800);
  };

  const formatBudget = (val: number) => {
    if (val >= 100000) return `AED 100,000+ / mo`;
    return `AED ${val.toLocaleString()} / mo`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-2xl animate-fadeIn">
      {/* Backdrop click dismiss */}
      <div className="fixed inset-0" onClick={closeModal} />

      <div className="glass-modal relative w-full max-w-2xl rounded-3xl overflow-hidden z-10 transition-all duration-300">
        {/* Ambient Top Luminous Gradient Line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C084FC] to-transparent pointer-events-none" />

        {/* Ambient Inner Purple/Fuchsia Glows for Depth */}
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-fuchsia-600/15 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={closeModal}
          className={`absolute top-4 ${
            dir === "rtl" ? "left-4" : "right-4"
          } w-9 h-9 rounded-full flex items-center justify-center border border-white/15 bg-white/[0.05] hover:bg-purple-500/25 hover:border-purple-400/50 hover:text-white text-white/70 hover:scale-105 transition-all duration-200 shadow-md z-20`}
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {isSuccess ? (
          <div className="p-8 sm:p-12 text-center space-y-6 animate-scaleUp relative z-10">
            <div className="w-20 h-20 rounded-full bg-purple-500/20 border-2 border-purple-400 mx-auto flex items-center justify-center text-purple-400 shadow-lg shadow-purple-500/30">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                {t("modal.successTitle")}
              </h3>
              <p className="text-white/75 max-w-md mx-auto text-sm sm:text-base leading-relaxed">
                {t("modal.successSub")}
              </p>
            </div>

            <div className="rounded-2xl p-5 text-left text-xs sm:text-sm text-gray-300 space-y-2 bg-white/[0.03] border border-white/10 backdrop-blur-xl">
              <div className="flex justify-between py-1 border-b border-white/10">
                <span className="text-white/60">Target Service:</span>
                <span className="text-purple-300 font-semibold">{formData.service || "Integrated Growth"}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/10">
                <span className="text-white/60">Estimated Budget:</span>
                <span className="text-white font-medium">{formatBudget(formData.budget)}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-white/60">Location:</span>
                <span className="text-white font-medium">Dubai, UAE</span>
              </div>
            </div>

            <button
              onClick={closeModal}
              className="primary-btn w-full sm:w-auto !py-3 !px-8 text-sm font-bold shadow-lg"
            >
              <span>{t("modal.close")}</span>
            </button>
          </div>
        ) : (
          <div className="p-6 sm:p-8 relative z-10">
            {/* Header */}
            <div className="mb-6 space-y-2">
              <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono font-bold tracking-[0.16em] uppercase text-purple-300">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse shadow-[0_0_8px_#C084FC]" />
                <span>
                  {language === "ar" ? "استشارة نمو تنفيذية" : "EXECUTIVE GROWTH CONSULTATION"}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight">
                {t("modal.title")}
              </h2>

              <p className="text-xs sm:text-sm text-white/70 leading-relaxed max-w-lg">
                {t("modal.sub")}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-medium text-white/80 mb-1.5">
                    {t("modal.name")} *
                  </label>
                  <div className="relative">
                    <User className={`absolute top-3 ${dir === "rtl" ? "right-3" : "left-3"} w-4 h-4 text-purple-300/60 pointer-events-none`} />
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={language === "ar" ? "مثال: طارق الفهيم" : "e.g. Tariq Al-Mansoor"}
                      className={`w-full bg-white/[0.03] backdrop-blur-xl border ${
                        errors.name ? "border-red-400" : "border-white/10 focus:border-purple-400"
                      } rounded-xl py-2.5 ${dir === "rtl" ? "pr-9 pl-3.5" : "pl-9 pr-3.5"} text-white placeholder-white/30 text-sm focus:outline-none focus:bg-purple-950/25 focus:ring-1 focus:ring-purple-400/30 transition shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]`}
                    />
                  </div>
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-medium text-white/80 mb-1.5">
                    {t("modal.email")} *
                  </label>
                  <div className="relative">
                    <Mail className={`absolute top-3 ${dir === "rtl" ? "right-3" : "left-3"} w-4 h-4 text-purple-300/60 pointer-events-none`} />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.ae"
                      className={`w-full bg-white/[0.03] backdrop-blur-xl border ${
                        errors.email ? "border-red-400" : "border-white/10 focus:border-purple-400"
                      } rounded-xl py-2.5 ${dir === "rtl" ? "pr-9 pl-3.5" : "pl-9 pr-3.5"} text-white placeholder-white/30 text-sm focus:outline-none focus:bg-purple-950/25 focus:ring-1 focus:ring-purple-400/30 transition shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]`}
                    />
                  </div>
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* Phone with Country Code */}
              <div>
                <label className="block text-xs font-medium text-white/80 mb-1.5">
                  {t("modal.phone")} *
                </label>
                <div className="flex gap-2">
                  <select
                    value={formData.countryCode}
                    onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                    className="bg-[#12082b] border border-white/10 rounded-xl px-2.5 py-2.5 text-white text-xs sm:text-sm focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400/30 transition shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]"
                  >
                    <option value="+971" className="bg-[#100726] text-white">🇦🇪 UAE (+971)</option>
                    <option value="+966" className="bg-[#100726] text-white">🇸🇦 KSA (+966)</option>
                    <option value="+974" className="bg-[#100726] text-white">🇶🇦 QAT (+974)</option>
                    <option value="+965" className="bg-[#100726] text-white">🇰🇼 KWT (+965)</option>
                    <option value="+968" className="bg-[#100726] text-white">🇴🇲 OMN (+968)</option>
                    <option value="+44" className="bg-[#100726] text-white">🇬🇧 UK (+44)</option>
                    <option value="+1" className="bg-[#100726] text-white">🇺🇸 US (+1)</option>
                  </select>
                  <div className="relative flex-1">
                    <Phone className={`absolute top-3 ${dir === "rtl" ? "right-3" : "left-3"} w-4 h-4 text-purple-300/60 pointer-events-none`} />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="50 123 4567"
                      className={`w-full bg-white/[0.03] backdrop-blur-xl border ${
                        errors.phone ? "border-red-400" : "border-white/10 focus:border-purple-400"
                      } rounded-xl py-2.5 ${dir === "rtl" ? "pr-9 pl-3.5" : "pl-9 pr-3.5"} text-white placeholder-white/30 text-sm focus:outline-none focus:bg-purple-950/25 focus:ring-1 focus:ring-purple-400/30 transition shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]`}
                    />
                  </div>
                </div>
                {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
              </div>

              {/* Service & Timeline Dropdowns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-white/80 mb-1.5">
                    {t("modal.service")} *
                  </label>
                  <div className="relative">
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className={`w-full bg-[#12082b] border ${
                        errors.service ? "border-red-400" : "border-white/10 focus:border-purple-400"
                      } rounded-xl py-2.5 px-3.5 text-white text-sm focus:outline-none focus:ring-1 focus:ring-purple-400/30 transition appearance-none cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]`}
                    >
                      <option value="" className="bg-[#100726] text-white">{language === "ar" ? "-- اختر الخدمة --" : "-- Select a Service --"}</option>
                      <option value="seo" className="bg-[#100726] text-white">Enterprise Search Engine Optimization (SEO & GEO)</option>
                      <option value="ppc" className="bg-[#100726] text-white">High-ROAS Paid Advertising (Google & Meta Ads)</option>
                      <option value="social-media" className="bg-[#100726] text-white">Bilingual Social Media Management & Creative</option>
                      <option value="web-design" className="bg-[#100726] text-white">Bespoke Web Design & Next-Gen Development</option>
                      <option value="branding" className="bg-[#100726] text-white">Brand Identity & Luxury Market Positioning</option>
                      <option value="content-production" className="bg-[#100726] text-white">Cinematic Video & Arabic Content Production</option>
                      <option value="full-growth" className="bg-[#100726] text-white">Integrated Omnichannel Growth Retainer</option>
                    </select>
                    <ChevronDown className={`absolute top-3 ${dir === "rtl" ? "left-3" : "right-3"} w-4 h-4 text-purple-300/60 pointer-events-none`} />
                  </div>
                  {errors.service && <p className="text-red-400 text-xs mt-1">{errors.service}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/80 mb-1.5">
                    {t("modal.timeline")}
                  </label>
                  <div className="relative">
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full bg-[#12082b] border border-white/10 focus:border-purple-400 focus:ring-1 focus:ring-purple-400/30 rounded-xl py-2.5 px-3.5 text-white text-sm focus:outline-none transition appearance-none cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]"
                    >
                      <option value="immediate" className="bg-[#100726] text-white">{language === "ar" ? "فوري (خلال أسبوعين)" : "Immediate (Within 2 weeks)"}</option>
                      <option value="within_1_month" className="bg-[#100726] text-white">{language === "ar" ? "خلال شهر واحد" : "Within 1 Month"}</option>
                      <option value="quarterly" className="bg-[#100726] text-white">{language === "ar" ? "الربع القادم (Q1 / Q2)" : "Next Quarter (1-3 months)"}</option>
                      <option value="exploring" className="bg-[#100726] text-white">{language === "ar" ? "استكشاف أولي وتخطيط سنوي" : "Strategic Planning / Exploring"}</option>
                    </select>
                    <ChevronDown className={`absolute top-3 ${dir === "rtl" ? "left-3" : "right-3"} w-4 h-4 text-purple-300/60 pointer-events-none`} />
                  </div>
                </div>
              </div>

              {/* Glass Budget Slider Panel */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)] space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-white/80">{t("modal.budget")}</span>
                  <span className="font-mono font-bold text-sm sm:text-base text-purple-300 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-400/30">
                    {formatBudget(formData.budget)}
                  </span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="100000"
                  step="5000"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: Number(e.target.value) })}
                  className="w-full glass-range cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-white/40 font-mono">
                  <span>AED 5,000</span>
                  <span>AED 25,000</span>
                  <span>AED 50,000</span>
                  <span>AED 100,000+</span>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center gap-2 text-xs text-white/60 pt-1">
                <ShieldCheck className="w-4 h-4 text-purple-400 shrink-0" />
                <span>NDA Protected • Non-Disclosure Assured • No generic spam</span>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="primary-btn w-full !py-3.5 text-sm font-bold shadow-[0_8px_24px_rgba(112,40,228,0.45)] hover:shadow-[0_12px_32px_rgba(168,37,232,0.6)] group disabled:opacity-50"
              >
                <span>{isSubmitting ? t("modal.submitting") : t("modal.submit")}</span>
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 shrink-0">
                  <ArrowRight className={`w-3.5 h-3.5 text-white ${dir === "rtl" ? "rotate-180" : ""}`} />
                </div>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
