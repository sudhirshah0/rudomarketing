"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, Clock, Calendar, User } from "lucide-react";
import type { BlogPost } from "@/lib/blog";

interface LatestBlogPostsProps {
  posts: BlogPost[];
}

export default function LatestBlogPosts({ posts }: LatestBlogPostsProps) {
  const { t, language, dir } = useLanguage();

  const displayPosts = posts.slice(0, 3);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="site-container relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono font-bold tracking-[0.2em] uppercase text-purple-300">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse shadow-[0_0_8px_#C084FC]" />
              <span>
                {t("blog.badge")}
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light font-heading text-white tracking-tight leading-tight">
              {language === "ar" ? (
                <>
                  مقالات و{" "}
                  <span className="font-semibold bg-gradient-to-r from-purple-200 via-fuchsia-300 to-white bg-clip-text text-transparent">
                    رؤى تسويقية
                  </span>
                </>
              ) : (
                <>
                  Articles &{" "}
                  <span className="font-semibold bg-gradient-to-r from-purple-200 via-fuchsia-300 to-white bg-clip-text text-transparent">
                    Market Insights
                  </span>
                </>
              )}
            </h2>
            <p className="text-xs sm:text-sm text-white/60 font-normal max-w-xl leading-relaxed">
              {t("blog.sub")}
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.03] hover:bg-purple-500/20 hover:border-purple-400/40 text-xs sm:text-sm font-medium text-white/80 hover:text-white transition-all group shrink-0 self-start md:self-auto"
          >
            <span>{t("blog.viewAll")}</span>
            <ArrowRight
              className={`w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform ${
                dir === "rtl" ? "rotate-180 group-hover:-translate-x-1" : ""
              }`}
            />
          </Link>
        </div>

        {/* 3 Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayPosts.map((post) => (
            <article
              key={post.slug}
              className="glass-panel-interactive rounded-2xl overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Image */}
                <div className="relative h-52 w-full overflow-hidden bg-rudo-dark/60">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full border border-purple-500/40 bg-black/60 backdrop-blur-md text-purple-200 text-[11px] font-semibold uppercase tracking-wider shadow-lg">
                      {language === "ar" ? post.categoryAr : post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-4 text-xs text-white/50">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-purple-400" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-purple-400" />
                      <span>{post.readingTime}</span>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-medium font-heading text-white group-hover:text-purple-300 transition-colors line-clamp-2 leading-snug">
                    <Link href={`/blog/${post.slug}`}>
                      {language === "ar" ? post.titleAr : post.title}
                    </Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-white/60 line-clamp-3 leading-relaxed font-normal">
                    {language === "ar" ? post.excerptAr : post.excerpt}
                  </p>
                </div>
              </div>

              {/* Author & Footer Link */}
              <div className="p-6 pt-3 border-t border-white/10 mt-2 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="relative w-7 h-7 rounded-full overflow-hidden border border-purple-400/30">
                    <Image
                      src={post.author.image}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-xs text-white/70 font-medium">
                    {post.author.name}
                  </span>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="text-xs font-semibold text-purple-300 flex items-center gap-1 group-hover:text-white transition-colors"
                >
                  <span>{t("blog.readArticle")}</span>
                  <ArrowRight
                    className={`w-3.5 h-3.5 ${dir === "rtl" ? "rotate-180" : ""}`}
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
