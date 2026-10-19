"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { useModal } from "@/context/ModalContext";
import confetti from "canvas-confetti";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Building,
  Navigation,
  MessageCircle,
} from "lucide-react";

export default function ContactPage() {
  const { language, dir } = useLanguage();
  const { openModal } = useModal();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "Integrated Growth Retainer",
    budget: "AED 25,000 - AED 50,000",
    message: "",
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSuccess(true);
      try {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.6 },
          colors: ["#2563EB", "#60A5FA", "#FFFFFF"],
        });
      } catch (e) {}
    }, 800);
  };

  return (
    <div className="pt-32 pb-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono font-bold tracking-[0.2em] uppercase text-purple-300">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse shadow-[0_0_8px_#C084FC]" />
            <span>
              {language === "ar"
                ? "ابدأ مرحلة التوسع والنمو"
                : "Initiate Your Scale Chapter"}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white leading-tight">
            {language === "ar"
              ? "تواصل مع فريقنا في دبي"
              : "Connect With Our Dubai Strategy Team"}
          </h1>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            {language === "ar"
              ? "سواء كنت ترغب في إطلاق حملة جديدة أو تدقيق حسابك الحالي، يسعدنا الترحيب بك في مقرنا بقرية الأعمال في دبي أو ترتيب مكالمة استراتيجية فورية."
              : "Whether you require a comprehensive digital audit or wish to schedule an in-person meeting at our Port Saeed Business Village offices, our partners are ready to assist."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Left Column: Contact Details & Dubai Map */}
          <div className="lg:col-span-5 space-y-8">
            <div className="glass-panel p-8 rounded-3xl space-y-6">
              <div>
                <h2 className="text-xl font-bold font-heading text-white">
                  {language === "ar" ? "معلومات المقر الرئيسي" : "Dubai Headquarters"}
                </h2>
                <p className="text-xs text-purple-300 font-mono mt-1">
                  Ru Do Marketing Management L.L.C S.O.C • Trade License No. 1605649
                </p>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl glass-pill flex items-center justify-center text-rudo-accent shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-white block">
                      {language === "ar" ? "العنوان بدبي:" : "Address:"}
                    </span>
                    <span className="text-gray-300">
                      {language === "ar"
                        ? "قرية الأعمال، بور سعيد، بلوك A، مكتب 808A، دبي، الإمارات العربية المتحدة"
                        : "Port Saeed Business Village, Block A, 808A, Dubai, United Arab Emirates"}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-rudo-accent/10 border border-rudo-accent/30 flex items-center justify-center text-rudo-accent shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-white block">
                      {language === "ar" ? "الاتصال المباشر:" : "Direct Office Line:"}
                    </span>
                    <a
                      href="tel:+971553858658"
                      className="text-gray-300 hover:text-rudo-accent font-mono transition"
                    >
                      +971 55 385 8658
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-rudo-accent/10 border border-rudo-accent/30 flex items-center justify-center text-rudo-accent shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-white block">
                      {language === "ar" ? "البريد الإلكتروني:" : "Email Correspondence:"}
                    </span>
                    <a
                      href="mailto:info@rudomarketing.ae"
                      className="text-gray-300 hover:text-rudo-accent transition"
                    >
                      info@rudomarketing.ae
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-white block">
                      {language === "ar" ? "واتساب للأعمال:" : "WhatsApp VIP Desk:"}
                    </span>
                    <a
                      href="https://wa.me/971553858658?text=Hi%20RU%20DO%20MARKETING%2C%20I%20want%20a%20free%20growth%20audit"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:text-emerald-300 font-semibold transition inline-flex items-center gap-1.5"
                    >
                      <span>{language === "ar" ? "تحدث عبر واتساب ←" : "Talk on WhatsApp →"}</span>
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-rudo-accent/10 border border-rudo-accent/30 flex items-center justify-center text-rudo-accent shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-white block">
                      {language === "ar" ? "ساعات العمل الرسمية:" : "Operating Hours:"}
                    </span>
                    <span className="text-gray-300">
                      Sunday – Thursday: 9:00 AM – 6:00 PM (Gulf Standard Time)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Dubai Map Placeholder */}
            <div className="relative h-64 rounded-3xl overflow-hidden border border-rudo-border shadow-2xl bg-rudo-dark group">
              <Image
                src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800"
                alt="Dubai Port Saeed Business Village Map Location"
                fill
                className="object-cover filter contrast-125 brightness-75 group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 450px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* Pin indicator */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                <div className="w-12 h-12 rounded-full bg-rudo-accent text-rudo-primary flex items-center justify-center shadow-2xl animate-bounce mb-2">
                  <MapPin className="w-6 h-6 fill-rudo-primary" />
                </div>
                <div className="bg-rudo-primary/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-rudo-border text-xs text-white font-bold">
                  Rudo Marketing • Port Saeed Business Village, Block A, 808A
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=Port+Saeed+Business+Village+Dubai"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-white backdrop-blur-md flex items-center gap-1.5 transition"
              >
                <Navigation className="w-3.5 h-3.5 text-rudo-accent" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>

          {/* Right Column: Full Inquiry Form */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-8 sm:p-12 shadow-2xl">
            {isSuccess ? (
              <div className="text-center py-12 space-y-6">
                <div className="w-20 h-20 rounded-full bg-purple-500/20 border-2 border-purple-400 mx-auto flex items-center justify-center text-purple-400 shadow-lg shadow-purple-500/30">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                  {language === "ar"
                    ? "تم استلام رسالتكم بنجاح!"
                    : "Inquiry Dispatched Successfully!"}
                </h3>
                <p className="text-sm text-gray-300 max-w-md mx-auto">
                  {language === "ar"
                    ? "سيتواصل معكم أحد كبار الشركاء التنفيذيين في دبي خلال 24 ساعة عمل لتحديد موعد الجلسة الاستشارية."
                    : "A Senior Strategy Partner from our Dubai team will review your business requirements and reply within 24 business hours."}
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="px-6 py-2.5 rounded-full primary-btn text-xs font-bold transition"
                >
                  {language === "ar" ? "إرسال استفسار آخر" : "Send another inquiry"}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-sm">
                <div className="space-y-1 mb-6">
                  <h2 className="text-2xl font-bold font-heading text-white">
                    {language === "ar"
                      ? "طلب تدقيق تسويقي وعرض استراتيجي"
                      : "Request a Bespoke Proposal & Audit"}
                  </h2>
                  <p className="text-xs text-gray-400">
                    {language === "ar"
                      ? "شاركنا أهدافكم وسنقوم بإعداد تحليل أولي لفرص النمو وحصتكم السوقية."
                      : "Share your core commercial objectives and we'll analyze your market positioning."}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1">
                      {language === "ar" ? "الاسم الكامل *" : "Your Name *"}
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Tariq Al-Mansoor"
                      className="w-full bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-xl px-3.5 py-3 text-white text-sm focus:outline-none focus:border-white/50 focus:ring-1 focus:ring-white/30 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1">
                      {language === "ar" ? "البريد الإلكتروني للعمل *" : "Work Email *"}
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="name@company.ae"
                      className="w-full bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-xl px-3.5 py-3 text-white text-sm focus:outline-none focus:border-white/50 focus:ring-1 focus:ring-white/30 transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1">
                      {language === "ar" ? "رقم الهاتف / واتساب *" : "Phone / WhatsApp *"}
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+971 50 123 4567"
                      className="w-full bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-xl px-3.5 py-3 text-white text-sm focus:outline-none focus:border-white/50 focus:ring-1 focus:ring-white/30 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1">
                      {language === "ar" ? "اسم الشركة أو المؤسسة" : "Company Name"}
                    </label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      placeholder="e.g. Apex Holdings Dubai"
                      className="w-full bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-xl px-3.5 py-3 text-white text-sm focus:outline-none focus:border-white/50 focus:ring-1 focus:ring-white/30 transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1">
                      {language === "ar" ? "الخدمة المطلوبة" : "Primary Objective"}
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-xl px-3.5 py-3 text-white text-sm focus:outline-none focus:border-white/50 focus:ring-1 focus:ring-white/30 transition"
                    >
                      <option value="Enterprise SEO" className="bg-[#121216] text-white">Enterprise SEO & GEO</option>
                      <option value="Paid Performance Ads" className="bg-[#121216] text-white">High-ROAS Paid Ads</option>
                      <option value="Bilingual Social Media" className="bg-[#121216] text-white">Bilingual Social Media</option>
                      <option value="Web Design & Next.js" className="bg-[#121216] text-white">Headless Web Design</option>
                      <option value="Brand Identity" className="bg-[#121216] text-white">Brand Positioning</option>
                      <option value="Integrated Retainer" className="bg-[#121216] text-white">Full Omnichannel Retainer</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1">
                      {language === "ar" ? "الميزانية التسويقية الشهرية" : "Estimated Monthly Budget"}
                    </label>
                    <select
                      value={form.budget}
                      onChange={(e) => setForm({ ...form, budget: e.target.value })}
                      className="w-full bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-xl px-3.5 py-3 text-white text-sm focus:outline-none focus:border-white/50 focus:ring-1 focus:ring-white/30 transition"
                    >
                      <option value="AED 10,000 - AED 25,000" className="bg-[#121216] text-white">AED 10,000 – AED 25,000</option>
                      <option value="AED 25,000 - AED 50,000" className="bg-[#121216] text-white">AED 25,000 – AED 50,000</option>
                      <option value="AED 50,000 - AED 100,000" className="bg-[#121216] text-white">AED 50,000 – AED 100,000</option>
                      <option value="AED 100,000+" className="bg-[#121216] text-white">AED 100,000+ / Month</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">
                    {language === "ar" ? "نبذة عن المشروع والتحديات" : "Brief Project Context"}
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder={
                      language === "ar"
                        ? "ما هي أهدافكم الحالية والتحديات التي تواجهكم في السوق الإماراتي؟"
                        : "Tell us about your current acquisition channels and revenue targets in the UAE..."
                    }
                    className="w-full bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-xl px-3.5 py-3 text-white text-sm focus:outline-none focus:border-white/50 focus:ring-1 focus:ring-white/30 transition"
                  />
                </div>

                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <ShieldCheck className="w-4 h-4 text-rudo-accent" />
                  <span>Strict NDA Protected • Non-Disclosure Assured</span>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="roundBtn w-full flex items-center justify-center gap-2 group"
                >
                  <span>
                    {loading
                      ? (language === "ar" ? "جاري الإرسال..." : "Submitting Brief...")
                      : (language === "ar" ? "إرسال طلب التدقيق الاستراتيجي" : "Submit Growth Brief")}
                  </span>
                  <div className="arrow-circle">
                    <ArrowRight className={`w-4 h-4 ${dir === "rtl" ? "rotate-180" : ""}`} />
                  </div>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
