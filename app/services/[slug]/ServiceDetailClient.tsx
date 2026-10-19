"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useModal } from "@/context/ModalContext";
import { ServiceData } from "@/lib/servicesData";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  ShieldCheck,
  Calendar,
  Building,
} from "lucide-react";

export default function ServiceDetailClient({ service }: { service: ServiceData }) {
  const { language, dir } = useLanguage();
  const { openModal } = useModal();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="pt-32 pb-24 relative">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono font-bold tracking-[0.2em] uppercase text-purple-300">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse shadow-[0_0_8px_#C084FC]" />
              <span>{service.metric}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white leading-tight">
              {language === "ar" ? service.titleAr : service.title}
            </h1>

            <p className="text-lg sm:text-xl text-rudo-accent font-medium">
              {language === "ar" ? service.taglineAr : service.tagline}
            </p>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              {language === "ar" ? service.descriptionAr : service.description}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => openModal(service.slug)}
                className="roundBtn group"
              >
                <Calendar className="w-4 h-4" />
                <span>
                  {language === "ar"
                    ? "احجز جلسة استراتيجية لهذه الخدمة"
                    : "Schedule a Growth Consultation"}
                </span>
                <div className="arrow-circle">
                  <ArrowRight
                    className={`w-4 h-4 ${dir === "rtl" ? "rotate-180" : ""}`}
                  />
                </div>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-80 sm:h-[460px] rounded-3xl overflow-hidden glass-panel shadow-2xl">
            <Image
              src={service.heroImage}
              alt={service.title}
              fill
              priority
              className="object-cover filter contrast-110"
              sizes="(max-width: 768px) 100vw, 550px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          </div>
        </div>
      </div>

      {/* 4 Deliverables Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="glass-pill px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-rudo-accent">
            {language === "ar" ? "المخرجات والحلول التنفيذية" : "Operational Deliverables"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
            {language === "ar"
              ? "ما الذي ننجزه بدقة لحسابكم التجاري؟"
              : "What We Engineer for Your Account"}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {service.deliverables.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel-interactive p-8 rounded-2xl shadow-xl space-y-4"
            >
              <div className="w-10 h-10 rounded-xl glass-pill flex items-center justify-center text-rudo-accent font-mono font-bold text-sm">
                0{idx + 1}
              </div>
              <h3 className="text-xl font-bold font-heading text-white">
                {language === "ar" ? item.titleAr : item.title}
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {language === "ar" ? item.descAr : item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Service FAQs */}
      {service.faqs.length > 0 && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 relative z-10">
          <div className="text-center mb-12 space-y-2">
            <span className="glass-pill px-4 py-1 text-xs font-bold uppercase tracking-widest text-rudo-accent">
              FAQ
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
              {language === "ar"
                ? "الأسئلة الأكثر شيوعاً حول هذه الخدمة"
                : "Frequently Asked Questions About This Service"}
            </h3>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="glass-panel rounded-2xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4"
                  >
                    <span className="text-base font-bold text-white">
                      {language === "ar" ? faq.qAr : faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 transition-transform ${
                        isOpen ? "rotate-180 text-rudo-accent" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-0 text-sm text-gray-300 border-t border-white/10 pt-4">
                      {language === "ar" ? faq.aAr : faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="glass-panel p-10 rounded-3xl shadow-2xl space-y-6">
          <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
            {language === "ar"
              ? "مستعد لمضاعفة نتائج أعمالك في الإمارات؟"
              : "Ready to Scale Your Category Authority?"}
          </h3>
          <p className="text-sm text-gray-300 max-w-xl mx-auto">
            {language === "ar"
              ? "تواصل مع خبير الاستراتيجيات الأول لدينا لمناقشة أهداف شركتكم وإعداد خطة تنفيذ مخصصة."
              : "Speak directly with our Dubai strategy team to evaluate your current setup and receive a customized growth roadmap."}
          </p>
          <button
            onClick={() => openModal(service.slug)}
            className="roundBtn"
          >
            <span>{language === "ar" ? "طلب تدقيق مجاني الآن" : "Request Free Growth Audit"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
