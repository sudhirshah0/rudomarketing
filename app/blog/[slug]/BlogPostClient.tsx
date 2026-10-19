"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { useModal } from "@/context/ModalContext";
import { BlogPost } from "@/lib/blog";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  Sparkles,
  CalendarCheck,
} from "lucide-react";

export default function BlogPostClient({ post }: { post: BlogPost }) {
  const { language, dir } = useLanguage();
  const { openModal } = useModal();

  // Simple clean markdown paragraph converter for pristine readability
  const renderContent = (rawText: string) => {
    const lines = rawText.split("\n");
    return lines.map((line, idx) => {
      const trimmed = line.trim();
      if (trimmed.startsWith("### ")) {
        return (
          <h3
            key={idx}
            className="text-xl sm:text-2xl font-bold font-heading text-white mt-8 mb-3"
          >
            {trimmed.replace("### ", "")}
          </h3>
        );
      }
      if (trimmed.startsWith("## ")) {
        return (
          <h2
            key={idx}
            className="text-2xl sm:text-3xl font-extrabold font-heading text-rudo-accent mt-10 mb-4 pb-2 border-b border-white/10"
          >
            {trimmed.replace("## ", "")}
          </h2>
        );
      }
      if (trimmed.startsWith("# ")) {
        return null; // Rendered in main hero title
      }
      if (trimmed.startsWith("- ")) {
        return (
          <li key={idx} className="ml-6 list-disc text-gray-300 my-1.5 leading-relaxed">
            {trimmed.replace("- ", "")}
          </li>
        );
      }
      if (trimmed.startsWith("> ")) {
        return (
          <blockquote
            key={idx}
            className="border-l-4 border-rudo-accent pl-4 my-6 italic text-gray-200 glass-panel p-5 rounded-r-2xl"
          >
            {trimmed.replace("> ", "")}
          </blockquote>
        );
      }
      if (trimmed === "") {
        return <div key={idx} className="h-4" />;
      }
      return (
        <p key={idx} className="text-gray-300 leading-relaxed text-base sm:text-lg my-2">
          {trimmed}
        </p>
      );
    });
  };

  return (
    <div className="pt-32 pb-24 relative">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Back Link */}
        <Link
          href="/blog"
          className="glass-pill inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-rudo-accent hover:text-white transition mb-8"
        >
          <ArrowLeft className={`w-4 h-4 ${dir === "rtl" ? "rotate-180" : ""}`} />
          <span>
            {language === "ar"
              ? "العودة إلى كافة المقالات والتقارير"
              : "Back to Intelligence Briefings"}
          </span>
        </Link>

        {/* Category & Metadata */}
        <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 mb-4">
          <span className="glass-pill px-3 py-1 text-rudo-accent font-bold uppercase tracking-wider">
            {language === "ar" ? post.categoryAr : post.category}
          </span>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-rudo-accent" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-rudo-accent" />
            <span>{post.readingTime}</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white leading-tight mb-8">
          {language === "ar" ? post.titleAr : post.title}
        </h1>

        {/* Author Bar */}
        <div className="flex items-center gap-4 py-4 border-y border-white/10 mb-8">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border border-rudo-accent/40 glass-panel">
            <Image
              src={post.author.image}
              alt={post.author.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="text-sm font-bold text-white">{post.author.name}</div>
            <div className="text-xs text-rudo-accent">{post.author.role}</div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative h-72 sm:h-96 w-full rounded-3xl overflow-hidden mb-12 glass-panel shadow-2xl">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover filter contrast-110"
            sizes="(max-width: 768px) 100vw, 850px"
          />
        </div>

        {/* Markdown Rendered Content */}
        <div className="prose prose-invert max-w-none text-gray-300 font-normal leading-relaxed">
          {renderContent(post.content)}
        </div>

        {/* In-Article Closing CTA */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl glass-panel shadow-2xl text-center space-y-5">
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono font-bold tracking-[0.2em] uppercase text-purple-300">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse shadow-[0_0_8px_#C084FC]" />
            <span>Growth Implementation</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
            {language === "ar"
              ? "هل تود تطبيق هذه الاستراتيجية في شركتكم؟"
              : "Ready to Apply This Framework to Your Business?"}
          </h3>
          <p className="text-sm text-gray-300 max-w-xl mx-auto">
            {language === "ar"
              ? "ناقش التحديات والفرص التسويقية لشركتكم مباشرة مع كُتّاب التقرير ومدراء الاستراتيجيات في دبي."
              : "Schedule a complimentary working session with our Dubai strategy team to review your account analytics and implementation plan."}
          </p>
          <button
            onClick={() => openModal()}
            className="roundBtn"
          >
            <span>{language === "ar" ? "طلب تدقيق تسويقي فوري" : "Schedule Strategy Briefing"}</span>
          </button>
        </div>
      </article>
    </div>
  );
}
