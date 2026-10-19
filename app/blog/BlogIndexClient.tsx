"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { BlogPost } from "@/lib/blog";
import {
  Calendar,
  Clock,
  ArrowRight,
  Search,
  BookOpen,
} from "lucide-react";

export default function BlogIndexClient({ posts }: { posts: BlogPost[] }) {
  const { language, dir } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", labelEn: "All Topics", labelAr: "كافة الموضوعات" },
    { id: "Real Estate", labelEn: "Real Estate", labelAr: "العقارات الفاخرة" },
    { id: "SEO & AI Search", labelEn: "SEO & AI Search", labelAr: "السيو والذكاء الاصطناعي" },
    { id: "Paid Media", labelEn: "Paid Media", labelAr: "الإعلانات الرقمية" },
  ];

  const filtered = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.titleAr.includes(searchTerm) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-32 pb-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono font-bold tracking-[0.2em] uppercase text-purple-300">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse shadow-[0_0_8px_#C084FC]" />
            <span>
              {language === "ar"
                ? "دراسات وأبحاث السوق الخليجي"
                : "GCC Intelligence & Analysis"}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white leading-tight">
            {language === "ar" ? "مدونة روودو الاستراتيجية" : "Strategic Intelligence & Insights"}
          </h1>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            {language === "ar"
              ? "تحليلات معمقة حول سلوك المستهلك في الخليج، واستراتيجيات الاستحواذ على العملاء، وخوارزميات محركات البحث الحديثة."
              : "Field notes and strategic briefings on digital acquisition, Arabic consumer psychology, and algorithmic advertising across the Middle East."}
          </p>
        </div>

        {/* Search & Filters */}
        <div className="max-w-3xl mx-auto mb-16 flex flex-col sm:flex-row items-center gap-4">
          <div className="relative w-full">
            <Search className={`absolute top-3.5 ${dir === "rtl" ? "right-4" : "left-4"} w-4 h-4 text-gray-400`} />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={
                language === "ar"
                  ? "ابحث في المقالات والتحليلات..."
                  : "Search articles, case insights..."
              }
              className={`w-full bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-2xl py-3 ${
                dir === "rtl" ? "pr-11 pl-4" : "pl-11 pr-4"
              } text-white placeholder-gray-400 text-sm focus:outline-none focus:border-white/50 focus:ring-1 focus:ring-white/30 transition`}
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === c.id
                    ? "filter-pill-active font-bold scale-105"
                    : "glass-pill text-zinc-300 hover:text-white hover:border-purple-400/40"
                }`}
              >
                {language === "ar" ? c.labelAr : c.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((post) => (
            <article
              key={post.slug}
              className="glass-panel-interactive rounded-3xl overflow-hidden flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-56 w-full overflow-hidden glass-panel">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="glass-pill px-3 py-1 text-rudo-accent text-[11px] font-bold uppercase tracking-wider">
                      {language === "ar" ? post.categoryAr : post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-rudo-accent" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-rudo-accent" />
                      <span>{post.readingTime}</span>
                    </div>
                  </div>

                  <h2 className="text-xl font-bold font-heading text-white group-hover:text-rudo-accent transition-colors leading-snug">
                    <Link href={`/blog/${post.slug}`}>
                      {language === "ar" ? post.titleAr : post.title}
                    </Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-gray-400 line-clamp-3 leading-relaxed">
                    {language === "ar" ? post.excerptAr : post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-white/10 mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="relative w-7 h-7 rounded-full overflow-hidden border border-rudo-accent/30">
                    <Image
                      src={post.author.image}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-xs text-gray-300 font-medium">
                    {post.author.name}
                  </span>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="text-xs font-bold text-rudo-accent flex items-center gap-1 group-hover:underline"
                >
                  <span>{language === "ar" ? "قراءة المقال" : "Read Briefing"}</span>
                  <ArrowRight
                    className={`w-3.5 h-3.5 ${dir === "rtl" ? "rotate-180" : ""}`}
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
