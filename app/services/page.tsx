"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { useModal } from "@/context/ModalContext";
import { servicesCatalog } from "@/lib/servicesData";
import { ArrowRight, CheckCircle2, Sparkles, PhoneCall } from "lucide-react";

export default function ServicesPage() {
  const { language, dir } = useLanguage();
  const { openModal } = useModal();
  const services = Object.values(servicesCatalog);

  return (
    <div className="pt-32 pb-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono font-bold tracking-[0.2em] uppercase text-purple-300">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse shadow-[0_0_8px_#C084FC]" />
            <span>
              {language === "ar"
                ? "حلول النمو الشامل في الإمارات"
                : "Comprehensive UAE Growth Capabilities"}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white leading-tight">
            {language === "ar"
              ? "خدماتنا التسويقية المتطورة"
              : "Integrated Marketing Disciplines"}
          </h1>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            {language === "ar"
              ? "منظومة متكاملة من الخدمات الرقمية الفاخرة المصممة خصيصاً لتمكين الشركات الرائدة في دبي والخليج من مضاعفة عوائدها وحصتها السوقية."
              : "Bespoke digital disciplines engineered specifically for ambitious enterprises in Dubai and the GCC to command category authority and compound revenue."}
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-16">
          {services.map((service, idx) => (
            <div
              key={service.slug}
              className="glass-panel rounded-3xl p-8 sm:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left/Right Text Content */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-rudo-accent px-3 py-1 rounded-full glass-pill">
                    SERVICE 0{idx + 1}
                  </span>
                  <span className="text-xs font-semibold text-emerald-400 glass-pill px-3 py-1">
                    {service.metric}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                  {language === "ar" ? service.titleAr : service.title}
                </h2>

                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  {language === "ar" ? service.descriptionAr : service.description}
                </p>

                {/* Deliverables preview */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {service.deliverables.slice(0, 4).map((d, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-xs text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-rudo-accent shrink-0 mt-0.5" />
                      <span>{language === "ar" ? d.titleAr : d.title}</span>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Link
                    href={`/services/${service.slug}`}
                    className="roundBtn group"
                  >
                    <span>
                      {language === "ar" ? "تفاصيل الخدمة الكاملة" : "Explore Deep Dive"}
                    </span>
                    <div className="arrow-circle">
                      <ArrowRight
                        className={`w-4 h-4 ${
                          dir === "rtl" ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </Link>

                  <button
                    onClick={() => openModal(service.slug)}
                    className="px-6 py-3 rounded-xl glass-pill hover:text-white font-semibold text-xs sm:text-sm transition"
                  >
                    {language === "ar" ? "طلب استشارة لهذه الخدمة" : "Inquire About This Service"}
                  </button>
                </div>
              </div>

              {/* Image Column */}
              <div className="lg:col-span-5 relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-white/10 glass-panel">
                <Image
                  src={service.heroImage}
                  alt={service.title}
                  fill
                  className="object-cover filter contrast-110"
                  sizes="(max-width: 768px) 100vw, 450px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
