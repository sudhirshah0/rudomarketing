import React from "react";
import HeroSection from "@/components/home/HeroSection";
import WhatWeOffer from "@/components/home/WhatWeOffer";
import TrustedBrandsMarquee from "@/components/home/TrustedBrandsMarquee";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import AboutSection from "@/components/home/AboutSection";
import ProcessSection from "@/components/home/ProcessSection";
import TestimonialsCarousel from "@/components/home/TestimonialsCarousel";
import ClientGrid from "@/components/home/ClientGrid";
import LatestBlogPosts from "@/components/home/LatestBlogPosts";
import FaqSection from "@/components/home/FaqSection";
import ClosingCta from "@/components/home/ClosingCta";
import { getAllPosts } from "@/lib/blog";

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <>
      {/* 2. Hero: Looping background video, headline, CTA buttons, stats strip */}
      <HeroSection />

      {/* 4. "What we offer": Numbered service list with short descriptions & links */}
      <WhatWeOffer />

      {/* Trusted by Leading Brands Marquee with rectangular glass border */}
      <TrustedBrandsMarquee />

      {/* Brands Across the UAE Choose Rudo Marketing (Client Grid) */}
      <ClientGrid />

      {/* 5. "Why choose us": THE RUDO ADVANTAGE */}
      <WhyChooseUs />

      {/* 6. About with animated counters */}
      <AboutSection />

      {/* 7. 4-step process: Discovery, Strategy, Design, Build and Launch, each with 5 bullets */}
      <ProcessSection />

      {/* 8. Testimonials carousel with video cards */}
      <TestimonialsCarousel />

      {/* 10. Latest blog posts (3 cards) */}
      <LatestBlogPosts posts={posts} />

      {/* 11. FAQ accordion (10 questions) with FAQPage schema markup */}
      <FaqSection />

      {/* 12. Closing call to action */}
      <ClosingCta />
    </>
  );
}
