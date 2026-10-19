"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Play, Star, X, ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialsCarousel() {
  const { t, language, dir } = useLanguage();
  const [selectedVideo, setSelectedVideo] = useState<{
    client: string;
    videoTitle: string;
  } | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  const testimonials = [
    {
      id: "emaar-client",
      name: "Rashid Al-Maktoum",
      role: "Managing Director",
      company: "Apex Prime Luxury Real Estate",
      location: "Downtown Dubai",
      quote:
        "Rudo Marketing completely transformed our off-plan lead acquisition engine. Within 90 days, our cost-per-qualified-investor dropped by 42% while generating over AED 65M in verified villa reservations.",
      quoteAr:
        "غيّرت وكالة روودو للتسويق تماماً مسار استقطاب المشترين لمشاريعنا قيد الإنشاء. خلال 90 يوماً فقط، انخفضت تكلفة استقطاب المستثمر المؤهل بنسبة 42% مع تحقيق مبيعات تجاوزت 65 مليون درهم.",
      metric: "+340% ROAS on Meta Ads",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
      videoTitle: "How Apex Prime Closed AED 65M in Off-Plan Dubai Real Estate",
    },
    {
      id: "hospitality-client",
      name: "Elena Rostova",
      role: "Chief Commercial Officer",
      company: "The Palm Haven Luxury Resort & Spa",
      location: "Palm Jumeirah, Dubai",
      quote:
        "Finding an agency in Dubai that genuinely understands both high-end hospitality elegance and relentless technical SEO is rare. Rudo tripled our direct non-OTA bookings within six months.",
      quoteAr:
        "من النادر إيجاد وكالة في دبي تجمع بين الفخامة الراقية والبراعة التقنية في تصدر محركات البحث. ضاعفت روودو حجوزاتنا المباشرة ثلاث مرات خلال 6 أشهر دون الاعتماد على منصات الحجز الخارجية.",
      metric: "3.2x Direct Booking Growth",
      thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
      videoTitle: "The Palm Haven: Slashing OTA Commissions by 58%",
    },
    {
      id: "ecommerce-client",
      name: "Khalid Mansoor",
      role: "Founder & CEO",
      company: "Oud & Silk Perfumery GCC",
      location: "Dubai & Riyadh",
      quote:
        "Their bilingual Arabic creative team produced commercials that captured Khaleeji consumers like magic. During Ramadan and UAE National Day, we set all-time regional revenue records.",
      quoteAr:
        "فريقهم الإبداعي المتحدث بالعربية أنتج حملات لامست مشاعر المستهلك الخليجي ببراعة. حققنا خلال مواسم رمضان واليوم الوطني الإماراتي أعلى مبيعات في تاريخ علامتنا التجارية في الخليج.",
      metric: "AED 18.4M Holiday Revenue",
      thumbnail: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
      videoTitle: "Oud & Silk: Scaling Luxury GCC E-Commerce with 5.1x ROAS",
    },
    {
      id: "fintech-client",
      name: "Siddharth Mehta",
      role: "Head of Growth",
      company: "VentureVault DIFC",
      location: "DIFC, Dubai",
      quote:
        "In B2B fintech, compliance and lead precision are paramount. Rudo’s LinkedIn ABM and Google Search strategies delivered institutional family office leads that actually converted to funded accounts.",
      quoteAr:
        "في قطاع التقنية المالية، الالتزام القانوني ودقة استهداف المستثمرين أمر جوهري. حملات روودو على لينكدإن وغوغل جلبت لنا مكاتب عائلية استثمارية تحولت لحسابات ممولة فعلية.",
      metric: "72 Qualified Family Offices",
      thumbnail: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop",
      videoTitle: "VentureVault: Institutional DIFC Lead Generation Case Study",
    },
  ];

  return (
    <section className="py-24 bg-[#070410] border-t border-purple-500/10 relative overflow-hidden text-white">
      {/* Background Soft Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.14)_0%,rgba(109,40,217,0.04)_45%,transparent_70%)] blur-[70px]" />
      </div>

      <div className="site-container relative z-10">
        {/* Header - Middle/Center Aligned */}
        <div data-gsap="fade-up" className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center justify-center gap-2 text-[10px] sm:text-xs font-mono font-bold tracking-[0.2em] uppercase text-purple-300">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse shadow-[0_0_8px_#C084FC]" />
            <span>
              {t("testimonials.badge")}
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light font-heading text-white tracking-tight leading-tight text-center">
            {language === "ar" ? (
              <>
                عملاؤنا يروون{" "}
                <span className="font-semibold bg-gradient-to-r from-purple-200 via-fuchsia-300 to-white bg-clip-text text-transparent">
                  قصة النجاح بأفضل صورة
                </span>
              </>
            ) : (
              <>
                Our Clients Tell the{" "}
                <span className="font-semibold bg-gradient-to-r from-purple-200 via-fuchsia-300 to-white bg-clip-text text-transparent">
                  Story Best
                </span>
              </>
            )}
          </h2>

          <p className="text-xs sm:text-sm text-white/60 font-normal max-w-lg leading-relaxed text-center">
            {t("testimonials.sub")}
          </p>

          {/* Carousel Next / Prev Controls centered beneath or nicely accessible */}
          <div className="flex items-center justify-center gap-3 pt-3">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label="Previous testimonials"
              className="w-10 h-10 rounded-full flex items-center justify-center border border-white/10 bg-white/[0.03] hover:bg-purple-500/20 hover:border-purple-400/40 text-white/70 hover:text-white transition-all shadow-md active:scale-95"
            >
              {dir === "rtl" ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              aria-label="Next testimonials"
              className="w-10 h-10 rounded-full flex items-center justify-center border border-white/10 bg-white/[0.03] hover:bg-purple-500/20 hover:border-purple-400/40 text-white/70 hover:text-white transition-all shadow-md active:scale-95"
            >
              {dir === "rtl" ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Swiper Carousel with Fixed Slide Alignment */}
        <div className="relative">
          <Swiper
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            autoHeight={false}
            breakpoints={{
              640: { slidesPerView: 1.2, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="!pb-14 items-stretch"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id} className="!h-auto !flex items-stretch">
                <div className="group relative rounded-2xl p-6 sm:p-7 transition-all duration-500 border border-white/10 hover:border-purple-400/40 bg-white/[0.02] hover:bg-purple-950/20 hover:shadow-[0_12px_40px_rgba(124,58,237,0.18)] hover:-translate-y-1 backdrop-blur-xl w-full h-full flex flex-col justify-between overflow-hidden">
                  {/* Top Ambient Highlight Border */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-400/0 to-transparent group-hover:via-purple-400/70 transition-all duration-500" />

                  {/* Top Block: Video & Tag & Quote */}
                  <div className="flex-1 flex flex-col">
                    {/* Video Card Preview - Exact uniform height */}
                    <div
                      className="relative h-44 sm:h-48 rounded-xl overflow-hidden mb-5 cursor-pointer border border-white/10 group-hover:border-purple-400/40 transition-colors shrink-0"
                      onClick={() =>
                        setSelectedVideo({
                          client: item.name,
                          videoTitle: item.videoTitle,
                        })
                      }
                    >
                      <Image
                        src={item.thumbnail}
                        alt={item.name}
                        fill
                        className="object-cover filter brightness-75 group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 350px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#7028E4] via-[#A825E8] to-[#B828E6] text-white flex items-center justify-center shadow-[0_4px_18px_rgba(168,37,232,0.5)] transform group-hover:scale-110 transition-transform border border-purple-300/40">
                          <Play className="w-4 h-4 fill-white ml-0.5" />
                        </div>
                      </div>

                      {/* Video Title on Card */}
                      <div className="absolute bottom-3 left-3 right-3 text-left rtl:text-right">
                        <span className="text-[10px] text-purple-300 font-mono uppercase tracking-wider block font-semibold">
                          Executive Interview
                        </span>
                        <span className="text-xs font-bold text-white line-clamp-1">
                          {item.videoTitle}
                        </span>
                      </div>
                    </div>

                    {/* Metric badge - Exactly aligned height */}
                    <div className="h-7 mb-3 flex items-center">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-purple-300 bg-purple-500/10 border border-purple-400/25 text-xs font-mono font-bold">
                        <span className="w-1 h-1 rounded-full bg-purple-400" />
                        {item.metric}
                      </span>
                    </div>

                    {/* Quote text with flex-1 and min-height for uniform baseline */}
                    <div className="flex-1 flex items-start mb-4">
                      <p className="text-xs sm:text-sm text-white/70 italic leading-relaxed font-normal min-h-[4.5rem]">
                        &ldquo;{language === "ar" ? item.quoteAr : item.quote}&rdquo;
                      </p>
                    </div>
                  </div>

                  {/* Bottom Author Metadata - Perfectly aligned divider and height across all cards */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3 min-h-[4rem] shrink-0">
                    <div className="space-y-0.5 min-w-0">
                      <div className="text-sm font-bold text-white font-heading truncate">
                        {item.name}
                      </div>
                      <div className="text-xs text-white/70 truncate">
                        {item.role}, <span className="text-purple-300 font-medium">{item.company}</span>
                      </div>
                      <div className="text-[10px] text-white/40 font-mono truncate">{item.location}</div>
                    </div>
                    <div className="flex text-purple-300 shrink-0">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-purple-300 text-purple-300" />
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Video Modal Placeholder */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-2xl animate-fadeIn">
          <div className="glass-modal relative w-full max-w-3xl rounded-3xl overflow-hidden p-6 sm:p-8 shadow-2xl border border-purple-400/30">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center border border-white/15 bg-white/[0.05] hover:bg-purple-500/25 hover:border-purple-400/50 hover:text-white text-white/70 transition-all"
              aria-label="Close video"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-mono font-bold uppercase tracking-wider">
                Executive Interview Simulation
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                {selectedVideo.videoTitle}
              </h3>
              {/* Simulated Video Player */}
              <div className="relative aspect-video rounded-2xl bg-black/60 border border-white/10 flex flex-col items-center justify-center text-center p-6 space-y-3 backdrop-blur-md overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 to-transparent pointer-events-none" />
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#7028E4] via-[#A825E8] to-[#B828E6] flex items-center justify-center text-white shadow-lg shadow-purple-500/40 border border-purple-300/40 animate-pulse">
                  <Play className="w-7 h-7 fill-white ml-0.5" />
                </div>
                <div className="text-white font-bold text-sm">
                  Video Testimonial ({selectedVideo.client})
                </div>
                <p className="text-xs text-white/60 max-w-md">
                  4K client interview hosted on CDN with bilingual subtitles and closed-loop attribution metrics.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
