"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useModal } from "@/context/ModalContext";
import {
  Building2,
  Users,
  Award,
  ShieldCheck,
  TrendingUp,
  MapPin,
  Calendar,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Sparkles,
  Layers,
  Cpu,
  Target,
  Heart,
  Lightbulb,
  Smile,
  Compass,
  Instagram,
  Linkedin,
  PhoneCall,
  Check,
} from "lucide-react";

export default function AboutPage() {
  const { language, dir } = useLanguage();
  const { openModal } = useModal();

  // Accordion state for Mission, Vision, Values (matching Digital Gravity)
  const [openAccordion, setOpenAccordion] = useState<"mission" | "vision" | "values">("mission");

  // Selected tech category for Tech Stack section
  const [activeTechCategory, setActiveTechCategory] = useState<string>("all");

  const leadership = [
    {
      name: "Tariq Al-Mansoor",
      nameAr: "طارق المنصور",
      role: "Managing Partner & CEO",
      roleAr: "الشريك الإداري والرئيس التنفيذي",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400",
    },
    {
      name: "Sami Al-Fassi",
      nameAr: "سامي الفاسي",
      role: "Head of Growth Strategy",
      roleAr: "رئيس استراتيجيات النمو",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400",
    },
    {
      name: "Layla Al-Qasimi",
      nameAr: "ليلى القاسمي",
      role: "Executive Creative Director",
      roleAr: "المديرة الإبداعية التنفيذية",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400",
    },
    {
      name: "Dr. Karim Mansour",
      nameAr: "د. كريم منصور",
      role: "Chief Data & AI Officer",
      roleAr: "كبير مسؤولي البيانات والذكاء الاصطناعي",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400",
    },
    {
      name: "Nida Mehtab",
      nameAr: "ندى مهتاب",
      role: "Chief Experience Officer (CXO)",
      roleAr: "كبير مسؤولي تجربة العملاء",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400",
    },
  ];

  const pressLogos = [
    "Gulf News",
    "Khaleej Times",
    "Arabian Business",
    "Zawya",
    "Al Jazeera Finance",
    "Bloomberg ME",
  ];

  const valuesList = [
    {
      title: "Leadership",
      titleAr: "الريادة والقيادة",
      desc: "We lead with commercial purpose, inspiring action and verifiable pipeline velocity across every client portfolio.",
      descAr: "نقود بحس تجاري رفيع لتحفيز الإنجاز وتسريع وتيرة النمو لكل عميل.",
    },
    {
      title: "Transparency",
      titleAr: "الشفافية المطلقة",
      desc: "Live verified dashboards and direct ad accounts. Zero markup secrecy, zero inflated vanity metrics.",
      descAr: "لوحات تحكم مباشرة وحسابات إعلانية شفافة دون أي عمولات خفية.",
    },
    {
      title: "Creativity",
      titleAr: "الإبداع المؤثر",
      desc: "Bilingual, culturally resonant storytelling that converts affluent Khaleeji & international audiences.",
      descAr: "سرد قصصي ثنائي اللغة يحاكي الذوق الخليجي ويقنع المستثمر العالمي.",
    },
    {
      title: "Excellence",
      titleAr: "السعي للتميز",
      desc: "Relentless engineering of algorithms, Generative Engine Optimization, and high-converting funnel architectures.",
      descAr: "تطوير مستمر لخوارزميات الاستحواذ وتصدر نتائج البحث الذكي.",
    },
    {
      title: "Passion",
      titleAr: "الشغف والإتقان",
      desc: "We pour unyielding energy into crafting regional category leaders that outpace global competitors.",
      descAr: "نكرس طاقتنا وخبرتنا لبناء علامات تجارية تتصدر الأسواق الإقليمية والعالمية.",
    },
  ];

  const technologies = [
    {
      name: "Python",
      category: "ai",
      glowColor: "rgba(234, 179, 8, 0.45)",
      borderColor: "border-amber-400/50",
      bgGlow: "from-amber-500/20 to-yellow-500/5",
      svg: (
        <svg viewBox="0 0 128 128" className="w-12 h-12">
          <path fill="#3776AB" d="M63.7 3.5c-15.5 0-24.8 6.7-24.8 19.8v14.5h25.4v3.6H29.1C13.2 41.4 0 53.6 0 71.3c0 17.6 11.2 28.7 26.2 28.7h8.7V87.2c0-8.6 7.6-15.8 16.4-15.8h25.1c7.2 0 13.1-6.1 13.1-13.4V23.3c0-12.8-9.8-19.8-25.8-19.8zm-7.6 7.7c2.6 0 4.7 2.1 4.7 4.8 0 2.6-2.1 4.7-4.7 4.7-2.6 0-4.8-2.1-4.8-4.7 0-2.7 2.2-4.8 4.8-4.8z" />
          <path fill="#FFD43B" d="M64.3 124.5c15.5 0 24.8-6.7 24.8-19.8V90.2H63.7v-3.6h35.2c15.9 0 29.1-12.2 29.1-29.9 0-17.6-11.2-28.7-26.2-28.7h-8.7v12.8c0 8.6-7.6 15.8-16.4 15.8H51.6c-7.2 0-13.1 6.1-13.1 13.4v34.7c0 12.8 9.8 19.8 25.8 19.8zm7.6-7.7c-2.6 0-4.7-2.1-4.7-4.8 0-2.6 2.1-4.7 4.7-4.7 2.6 0 4.8 2.1 4.8 4.7 0 2.7-2.2 4.8-4.8 4.8z" />
        </svg>
      ),
    },
    {
      name: "JavaScript",
      category: "frontend",
      glowColor: "rgba(234, 179, 8, 0.45)",
      borderColor: "border-yellow-400/50",
      bgGlow: "from-yellow-500/20 to-amber-500/5",
      svg: (
        <svg viewBox="0 0 128 128" className="w-12 h-12">
          <path fill="#F7DF1E" d="M0 0h128v128H0z" />
          <path fill="#000" d="M67.3 102.8c2.4 3.9 5.8 6.4 11.2 6.4 4.7 0 7.7-2.3 7.7-5.5 0-3.9-3.1-5.3-8.3-7.5l-2.9-1.2c-8.3-3.6-13.8-8.1-13.8-17.7 0-8.8 6.7-15.5 17.2-15.5 7.6 0 13.1 2.7 17 9.5l-7.7 4.9c-2.2-3.8-4.5-5.3-9.3-5.3-4.1 0-6.7 2.6-6.7 5.1 0 3.3 2.1 4.6 7 6.7l2.8 1.2c9.8 4.2 15.3 8.6 15.3 18.3 0 10.4-8.2 16.5-19.1 16.5-10.7 0-17.7-5.1-20.7-11.8l7.6-4.6zm-40.8-.2c2-3.3 3.6-5.8 7.3-5.8 3.3 0 5.4 1.8 6.5 5.5.9 3 1.2 7.7 1.2 16.1 0 9.8-.3 15.8-1.5 19.3-2.1 6.3-7.3 9.4-15.2 9.4-8.5 0-13.7-4.1-16.1-9.9l7.7-4.5c1.4 3.1 3.4 5.3 7.8 5.3 4.2 0 6.6-2.1 7.2-6.1.4-2.8.5-7.5.5-15.8V79.2h10.3v23.4z" />
        </svg>
      ),
    },
    {
      name: "Java",
      category: "backend",
      glowColor: "rgba(56, 189, 248, 0.45)",
      borderColor: "border-sky-400/50",
      bgGlow: "from-sky-500/20 to-blue-500/5",
      svg: (
        <svg viewBox="0 0 128 128" className="w-12 h-12">
          <path fill="#5382A1" d="M47.7 101.4c-8.7-2.3-15.6-7.8-15.6-13.5 0-1.8.8-3.6 2.3-5.2 1.3-1.4 3.2-2.7 5.5-3.8 3.8-1.7 8.9-2.9 14.7-3.4-3.3 1.8-5.3 4.1-5.3 6.6 0 3.3 3.6 6.3 9.6 8.1 8 2.4 19.4 2.8 28.5 1 2.3-.4 4.5-1 6.5-1.7-2 1.7-4.8 3.2-8.3 4.3-9.7 3.1-26.6 2.9-37.9.4z" />
          <path fill="#E76F00" d="M78.6 66.8c5.4 4.4 7.6 9.3 5.4 12.8-2.5 3.9-9.8 5.7-19.5 4.7 7.7-2.6 10.9-6.9 7.8-10.7-3.4-4.2-12.8-7.7-23.7-8.9 11-1.3 22.4-2.1 23-2.1 4.8 0 12.7 1.9 7 4.2zM63.7 2.1c-2.4 7.3-6.1 14.8-10.9 21.6-4.5 6.4-9.7 12.2-14.7 18.2-1.9 2.2-3.8 4.6-5.4 7.1-1.5 2.5-2.6 5.2-2.7 8.2 0 2.8 1 5.3 2.7 7.4 1.8 2.1 4.2 3.7 7.1 4.9 5.8 2.3 12.8 3.1 19.9 2.4 7.1-.8 14.3-3 20.3-6.5 2.8-1.6 5.3-3.6 7.2-5.9 1.8-2.2 2.9-4.8 2.9-7.6 0-3.1-1.3-5.9-3.6-8.2-2.3-2.4-5.5-4.2-9.2-5.6-7.3-2.8-16.7-4.1-25.5-3.9 13.9-4.1 25.1-12.4 27.6-22.3.8-3.4.6-6.8-.7-9.8-1.5-3.3-4.3-6-8.2-7.8-3.8-1.8-8.4-2.5-13.4-2.3-3.8.2-7.7.8-11.5 2z" />
        </svg>
      ),
    },
    {
      name: "Swift",
      category: "frontend",
      glowColor: "rgba(249, 115, 22, 0.45)",
      borderColor: "border-orange-400/50",
      bgGlow: "from-orange-500/20 to-red-500/5",
      svg: (
        <svg viewBox="0 0 128 128" className="w-12 h-12">
          <rect fill="#F05138" width="128" height="128" rx="28" />
          <path fill="#FFF" d="M106.3 84.7c-2.3 2.7-7.2 7.7-14.2 12.8-14.6 10.7-32.9 15.3-50.6 11.2-8.4-1.9-16.2-5.9-22.7-11.4 20.9 9.1 46.1 4.7 64.9-8.7-14.8 4.2-30.8 1.9-44.4-6.3-5.3-3.2-10-7.3-13.8-12.2 12.7 4.1 27.2 2.5 39.4-4.5-9.8 0-19.3-3.8-26.6-10.4-6.4-5.7-10.9-13.1-13-21.3 5.4 3.9 11.7 6.6 18.2 8-11.4-8.8-17.7-22.6-16.9-36.9 13.3 14.8 30.5 25.4 49.6 30.3 8.8 2.2 18 2.8 27.1 1.6-4.5 4.6-9.8 8.4-15.6 11.4 12-2.7 23.3-8.8 32.5-17.3-4.4 17.5-14.1 33.3-27.7 45.1 12.3-4.7 23.3-12.2 32.2-21.7 4.9 10.8 4.3 21.6-8.4 30.4z" />
        </svg>
      ),
    },
    {
      name: "C#",
      category: "backend",
      glowColor: "rgba(192, 132, 252, 0.45)",
      borderColor: "border-purple-400/50",
      bgGlow: "from-purple-500/20 to-fuchsia-500/5",
      svg: (
        <svg viewBox="0 0 128 128" className="w-12 h-12">
          <path fill="#9B4993" d="M64 4.5L12.5 34.2v59.6L64 123.5l51.5-29.7V34.2L64 4.5z" />
          <path fill="#FFF" d="M64 20.7l37.5 21.6v43.4L64 107.3 26.5 85.7V42.3L64 20.7z" />
          <path fill="#68217A" d="M64 28.5L33.3 46.2v35.6L64 99.5l30.7-17.7V46.2L64 28.5zm-5 46.8c-6.8 0-12.4-5.6-12.4-12.4s5.6-12.4 12.4-12.4c3.9 0 7.4 1.8 9.6 4.6l-4.5 3.4c-1.3-1.6-3.2-2.6-5.1-2.6-3.9 0-7 3.1-7 7s3.1 7 7 7c1.9 0 3.8-1 5.1-2.6l4.5 3.4c-2.2 2.8-5.7 4.6-9.6 4.6zm22-3.8l-1.1 4.7h-3.4l1.1-4.7h-4.3l-1.1 4.7h-3.4l1.1-4.7h-3.5v-3.1h4.2l.9-3.9h-4.2v-3.1h4.9l1.1-4.7h3.4l-1.1 4.7h4.3l1.1-4.7h3.4l-1.1 4.7h3.5v3.1h-4.2l-.9 3.9h4.2v3.1h-4.9zm-4.3-3.1l.9-3.9h-4.3l-.9 3.9h4.3z" />
        </svg>
      ),
    },
    {
      name: "PHP",
      category: "backend",
      glowColor: "rgba(99, 102, 241, 0.45)",
      borderColor: "border-indigo-400/50",
      bgGlow: "from-indigo-500/20 to-blue-500/5",
      svg: (
        <svg viewBox="0 0 128 128" className="w-12 h-12">
          <ellipse fill="#777BB3" cx="64" cy="64" rx="60" ry="34" />
          <path fill="#FFF" d="M41.3 53.6h9.6c4.6 0 7.4 2.1 6.6 6.3-.9 4.8-4.9 7.6-9.8 7.6h-5.2l-2.6 13h-7.8l9.2-26.9zm6.3 8.9h2.3c2 0 3.3-.9 3.6-2.6.3-1.6-.7-2.6-2.5-2.6h-2.1l-1.3 5.2zm16.5-8.9h7.7l-4.1 11.9h7.3l4.1-11.9h7.7l-9.2 26.9h-7.7l3.6-10.4h-7.3l-3.6 10.4h-7.7l9.2-26.9zm30.4 0h9.6c4.6 0 7.4 2.1 6.6 6.3-.9 4.8-4.9 7.6-9.8 7.6h-5.2l-2.6 13h-7.8l9.2-26.9zm6.3 8.9h2.3c2 0 3.3-.9 3.6-2.6.3-1.6-.7-2.6-2.5-2.6h-2.1l-1.3 5.2z" />
        </svg>
      ),
    },
    {
      name: "React",
      category: "frontend",
      glowColor: "rgba(56, 189, 248, 0.45)",
      borderColor: "border-cyan-400/50",
      bgGlow: "from-cyan-500/20 to-blue-500/5",
      svg: (
        <svg viewBox="0 0 128 128" className="w-12 h-12">
          <ellipse fill="none" stroke="#61DAFB" strokeWidth="6" cx="64" cy="64" rx="20" ry="52" transform="rotate(30 64 64)" />
          <ellipse fill="none" stroke="#61DAFB" strokeWidth="6" cx="64" cy="64" rx="20" ry="52" transform="rotate(90 64 64)" />
          <ellipse fill="none" stroke="#61DAFB" strokeWidth="6" cx="64" cy="64" rx="20" ry="52" transform="rotate(150 64 64)" />
          <circle fill="#61DAFB" cx="64" cy="64" r="9" />
        </svg>
      ),
    },
    {
      name: "Next.js",
      category: "frontend",
      glowColor: "rgba(255, 255, 255, 0.45)",
      borderColor: "border-white/50",
      bgGlow: "from-white/20 to-zinc-400/5",
      svg: (
        <svg viewBox="0 0 128 128" className="w-12 h-12">
          <circle fill="#000" cx="64" cy="64" r="62" stroke="#FFF" strokeWidth="4" />
          <path fill="#FFF" d="M79.2 88.5L47.6 44.8H40v38.4h7.4V56.4L78 95.8c5.4-3.4 9.9-8 13.2-13.4l-12-16.1v22.2zM80.6 44.8h7.4v26.7l-7.4-9.9V44.8z" />
        </svg>
      ),
    },
    {
      name: "Node.js",
      category: "backend",
      glowColor: "rgba(74, 222, 128, 0.45)",
      borderColor: "border-emerald-400/50",
      bgGlow: "from-emerald-500/20 to-green-500/5",
      svg: (
        <svg viewBox="0 0 128 128" className="w-12 h-12">
          <path fill="#339933" d="M64 4.5l51.5 29.7v59.6L64 123.5 12.5 93.8V34.2L64 4.5z" />
          <path fill="#FFF" d="M64 25.4L29.6 45.3v39.8L64 105l34.4-19.9V45.3L64 25.4zm16.5 49.3c-2.3 3.6-6.4 5.9-11.2 5.9-7.4 0-12.8-5.3-12.8-12.6 0-7.3 5.4-12.6 12.8-12.6 4.8 0 8.9 2.3 11.2 5.9l-4.7 2.7c-1.3-2.1-3.6-3.4-6.5-3.4-4.2 0-7.3 3.1-7.3 7.4s3.1 7.4 7.3 7.4c2.9 0 5.2-1.3 6.5-3.4l4.7 2.7z" />
        </svg>
      ),
    },
    {
      name: "PostgreSQL",
      category: "backend",
      glowColor: "rgba(96, 165, 250, 0.45)",
      borderColor: "border-blue-400/50",
      bgGlow: "from-blue-500/20 to-sky-500/5",
      svg: (
        <svg viewBox="0 0 128 128" className="w-12 h-12">
          <path fill="#336791" d="M64 12C35.3 12 12 35.3 12 64c0 14.8 6.2 28.1 16.2 37.6l4.2-7.8C25.1 86 20 75.6 20 64c0-24.3 19.7-44 44-44s44 19.7 44 44c0 12.1-4.9 23-12.8 30.9l4.5 7.6C110 92.8 116 79.1 116 64c0-28.7-23.3-52-52-52z" />
          <path fill="#FFF" d="M64 36c-15.5 0-28 12.5-28 28 0 8.3 3.6 15.7 9.4 20.8l4.4-7.4C55.4 74 52 69.4 52 64c0-6.6 5.4-12 12-12s12 5.4 12 12c0 5.5-3.6 10.2-8.6 11.9l4.4 7.4C88.2 80 92 72.5 92 64c0-15.5-12.5-28-28-28z" />
        </svg>
      ),
    },
    {
      name: "AWS Cloud",
      category: "cloud",
      glowColor: "rgba(251, 146, 60, 0.45)",
      borderColor: "border-amber-400/50",
      bgGlow: "from-amber-500/20 to-orange-500/5",
      svg: (
        <svg viewBox="0 0 128 128" className="w-12 h-12">
          <path fill="#FF9900" d="M37.8 80.6c-13.8 6.6-21.4 12.6-21.4 17 0 5.4 11.4 8.4 27.8 8.4 16.6 0 35.8-3.2 52-8.9 4.4-1.5 5.8-4.6 3.4-6.8-2.4-2.2-7.2-2.3-12.6-.4-14.2 5-30.8 7.7-44.5 7.7-12.3 0-20.2-1.9-20.2-4.5 0-2.3 5.4-5.8 15.5-9.5V80.6z" />
          <path fill="#FFF" d="M37 66.8c0 4.8 3.5 8 8.8 8 5.7 0 9.8-3.9 9.8-9.3V44.2h-7.2v20.4c0 2.2-1.2 3.6-3 3.6-1.7 0-2.7-1.3-2.7-3.4V44.2H37v22.6zm28.3 7.8h7.4l6.1-23.8h-7.5l-2.4 12.8-2.6-12.8H59l6.3 23.8zm23.8-15.8c0-3.3 2.1-5.1 5.9-5.1 3.2 0 5.4 1.3 6.3 3.6l6.3-3.2c-2.4-4.8-6.9-7.3-13.2-7.3-8.8 0-14.1 5.4-14.1 13.9 0 9.3 5.4 14.4 14.5 14.4 6.2 0 10.9-2.6 13.3-7.6l-6.4-3.1c-1 2.3-3.2 3.8-6.5 3.8-3.9 0-6.1-2-6.1-5.7v-3.7z" />
        </svg>
      ),
    },
    {
      name: "Google Ads",
      category: "marketing",
      glowColor: "rgba(66, 133, 244, 0.5)",
      borderColor: "border-blue-400/50",
      bgGlow: "from-blue-500/20 to-amber-500/5",
      svg: (
        <svg viewBox="0 0 192 192" className="w-12 h-12">
          <path fill="#FBBC04" d="M37.3 125.7l34.2-59.2c4.8-8.3 15.4-11.2 23.7-6.4l2.8 1.6c8.3 4.8 11.2 15.4 6.4 23.7l-34.2 59.2c-4.8 8.3-15.4 11.2-23.7 6.4l-2.8-1.6c-8.3-4.8-11.2-15.4-6.4-23.7z" />
          <path fill="#4285F4" d="M154.7 125.7l-34.2-59.2c-4.8-8.3-15.4-11.2-23.7-6.4l-2.8 1.6c-8.3 4.8-11.2 15.4-6.4 23.7l34.2 59.2c4.8 8.3 15.4 11.2 23.7 6.4l2.8-1.6c8.3-4.8 11.2-15.4 6.4-23.7z" />
          <circle cx="51" cy="149.3" r="17.2" fill="#34A853" />
        </svg>
      ),
    },
    {
      name: "Meta Ads",
      category: "marketing",
      glowColor: "rgba(0, 129, 251, 0.5)",
      borderColor: "border-sky-400/50",
      bgGlow: "from-sky-500/20 to-blue-600/5",
      svg: (
        <svg viewBox="0 0 100 100" className="w-12 h-12">
          <path fill="#0081FB" d="M50 36.4c-9.2 0-16.7 5.8-21.7 12.6-4.5 6.1-7.5 13.9-9.9 20.3-2 5.5-3.8 9.9-6.9 9.9-3.2 0-5.5-3.8-5.5-10.8 0-15.1 11.8-31 29.8-38.3 4.7-1.9 9.7-2.9 14.2-2.9 4.5 0 9.5 1 14.2 2.9 18 7.3 29.8 23.2 29.8 38.3 0 7-2.3 10.8-5.5 10.8-3.1 0-4.9-4.4-6.9-9.9-2.4-6.4-5.4-14.2-9.9-20.3C70.7 42.2 63.2 36.4 50 36.4zm-14.7 9.8c3.8 5 6.4 11.4 8.6 17.2 2.7 7.2 5.3 14 9.4 18.7 1.9 2.2 4 3.7 6.7 3.7 2.7 0 4.8-1.5 6.7-3.7 4.1-4.7 6.7-11.5 9.4-18.7 2.2-5.8 4.8-12.2 8.6-17.2-6.5-6.6-15.3-9.8-24.7-9.8-9.4 0-18.2 3.2-24.7 9.8z" />
        </svg>
      ),
    },
    {
      name: "TikTok Ads",
      category: "marketing",
      glowColor: "rgba(254, 44, 85, 0.5)",
      borderColor: "border-pink-500/50",
      bgGlow: "from-pink-500/20 to-cyan-500/5",
      svg: (
        <svg viewBox="0 0 100 100" className="w-12 h-12">
          {/* TikTok Cyan drop */}
          <path fill="#25F4EE" d="M68 33.5c-6.8-4.4-11.2-12-11.2-20.7h-11v54.2c0 7.8-6.3 14.1-14.1 14.1s-14.1-6.3-14.1-14.1c0-7.8 6.3-14.1 14.1-14.1 1.9 0 3.6.4 5.2 1V41.3c-1.7-.2-3.4-.4-5.2-.4C17.2 40.9 5.5 52.6 5.5 67s11.7 26.1 26.2 26.1 26.2-11.7 26.2-26.1V39.9c6 4.3 13.4 6.8 21.3 6.8V35.3c-4.1 0-7.9-.7-11.2-1.8z" />
          {/* TikTok Red drop */}
          <path fill="#FE2C55" d="M72.5 37.5c-6.8-4.4-11.2-12-11.2-20.7h-11v54.2c0 7.8-6.3 14.1-14.1 14.1s-14.1-6.3-14.1-14.1c0-7.8 6.3-14.1 14.1-14.1 1.9 0 3.6.4 5.2 1V45.3c-1.7-.2-3.4-.4-5.2-.4-14.5 0-26.2 11.7-26.2 26.1s11.7 26.1 26.2 26.1 26.2-11.7 26.2-26.1V43.9c6 4.3 13.4 6.8 21.3 6.8V39.3c-4.1 0-7.9-.7-11.2-1.8z" opacity="0.85" />
          {/* TikTok White center */}
          <path fill="#FFFFFF" d="M70.5 35.5c-6.8-4.4-11.2-12-11.2-20.7h-11v54.2c0 7.8-6.3 14.1-14.1 14.1s-14.1-6.3-14.1-14.1c0-7.8 6.3-14.1 14.1-14.1 1.9 0 3.6.4 5.2 1V43.3c-1.7-.2-3.4-.4-5.2-.4-14.5 0-26.2 11.7-26.2 26.1s11.7 26.1 26.2 26.1 26.2-11.7 26.2-26.1V41.9c6 4.3 13.4 6.8 21.3 6.8V37.3c-4.1 0-7.9-.7-11.2-1.8z" />
        </svg>
      ),
    },
    {
      name: "OpenAI GPT",
      category: "ai",
      glowColor: "rgba(16, 185, 129, 0.5)",
      borderColor: "border-emerald-400/50",
      bgGlow: "from-emerald-500/20 to-teal-500/5",
      svg: (
        <svg viewBox="0 0 100 100" className="w-12 h-12">
          <circle cx="50" cy="50" r="48" fill="#10A37F" />
          <path fill="#FFFFFF" d="M71.2 46.8c-.5-3.8-2.6-7.2-5.7-9.3.6-2.1.5-4.4-.2-6.5-1.1-3.2-3.7-5.7-6.9-6.8-3.2-1.2-6.8-.7-9.7 1.2-1.9-1.3-4.2-2.1-6.6-2.1-4.2 0-8 2.2-10.2 5.8-2.8.7-5.3 2.5-6.8 5-1.5 2.6-1.8 5.7-.8 8.5-2.1 1.8-3.4 4.5-3.6 7.3-.2 2.8.7 5.6 2.5 7.7.5 3.8 2.6 7.2 5.7 9.3-.6 2.1-.5 4.4.2 6.5 1.1 3.2 3.7 5.7 6.9 6.8 3.2 1.2 6.8.7 9.7-1.2 1.9 1.3 4.2 2.1 6.6 2.1 4.2 0 8-2.2 10.2-5.8 2.8-.7 5.3-2.5 6.8-5 1.5-2.6 1.8-5.7.8-8.5 2.1-1.8 3.4-4.5 3.6-7.3.2-2.8-.7-5.6-2.5-7.7zM50 58.7c-4.8 0-8.7-3.9-8.7-8.7s3.9-8.7 8.7-8.7 8.7 3.9 8.7 8.7-3.9 8.7-8.7 8.7z" />
        </svg>
      ),
    },
    {
      name: "Shopify Plus",
      category: "frontend",
      glowColor: "rgba(149, 191, 71, 0.5)",
      borderColor: "border-lime-400/50",
      bgGlow: "from-lime-500/20 to-emerald-500/5",
      svg: (
        <svg viewBox="0 0 100 100" className="w-12 h-12">
          {/* Official Shopify Bag Bag Color #95BF47 */}
          <path fill="#95BF47" d="M78.6 23.5l-6.8-.6c-.2-.6-.5-1.3-.9-1.9-4.2-6.2-11.7-7.4-17.6-2.8-1.5 1.1-2.8 2.6-3.6 4.3L42 22c-1-.1-2 .6-2.3 1.6-.2.7-.2 1.5.3 2.1l3.1 4.2L24.5 70.9c-.6 1.1-.3 2.5.8 3.2 1.1.6 2.5.3 3.2-.8l17.1-36 13.2.9c.3 0 .6.1.9.2l21.4 13.8c.7.5 1.7.4 2.2-.2.6-.6.7-1.4.3-2.1l-7.3-17.4 7.5-9.6c.6-.4.7-.9.5-1.2-.2-.6-.9-1.1-1.7-1.1zM52.4 23.2c-.9 1.8-2.2 3.3-3.9 4.3l-5.4-.4c2.5-4.5 6.7-6.2 11-5-.8.7-1.3 1-1.7 1.1z" />
          <path fill="#5E8E3E" d="M50 63.5c-3.1 0-5.7-1.7-7-4.1 1.7-1.1 3.5-1.9 5.3-2.4 2.5-.7 4.9-.7 7.2 0 1.9.6 3.6 1.4 5.4 2.5-1.2 2.4-3.8 4-6.9 4z" />
          <path fill="#FFFFFF" d="M56.8 47.7c-2.4-.7-4.8-.7-7.2 0-1.8.5-3.6 1.3-5.3 2.4-1.2-2.5-1.3-5.5-.3-8.2 1-2.6 2.9-4.7 5.5-5.9 2.6-1.1 5.6-1.1 8.2-.1 2.6 1 4.6 2.9 5.8 5.4.9 2.1 1.1 4.4.5 6.7-2.3-.3-4.8-.4-7.2-.3z" opacity="0.6" />
        </svg>
      ),
    },
    {
      name: "Figma UI/UX",
      category: "frontend",
      glowColor: "rgba(168, 85, 247, 0.5)",
      borderColor: "border-purple-400/50",
      bgGlow: "from-purple-500/20 to-pink-500/5",
      svg: (
        <svg viewBox="0 0 100 150" className="w-10 h-12">
          <path fill="#0ACF83" d="M25 150c13.8 0 25-11.2 25-25V100H25c-13.8 0-25 11.2-25 25s11.2 25 25 25z" />
          <path fill="#A259FF" d="M0 75c0-13.8 11.2-25 25-25h25v50H25C11.2 100 0 88.8 0 75z" />
          <path fill="#F24E1E" d="M0 25C0 11.2 11.2 0 25 0h25v50H25C11.2 50 0 38.8 0 25z" />
          <path fill="#FF7262" d="M50 0h25c13.8 0 25 11.2 25 25s-11.2 25-25 25H50V0z" />
          <circle fill="#1ABCFE" cx="75" cy="75" r="25" />
        </svg>
      ),
    },
    {
      name: "Google Analytics 4",
      category: "marketing",
      glowColor: "rgba(249, 171, 0, 0.5)",
      borderColor: "border-amber-400/50",
      bgGlow: "from-amber-500/20 to-orange-500/5",
      svg: (
        <svg viewBox="0 0 100 100" className="w-12 h-12">
          {/* Official Google Analytics Bar Chart */}
          <rect x="68" y="14" width="18" height="72" rx="9" fill="#F9AB00" />
          <rect x="41" y="38" width="18" height="48" rx="9" fill="#E37400" />
          <circle cx="23" cy="77" r="9" fill="#E37400" />
        </svg>
      ),
    },
    {
      name: "HubSpot CRM",
      category: "marketing",
      glowColor: "rgba(255, 122, 89, 0.5)",
      borderColor: "border-orange-400/50",
      bgGlow: "from-orange-500/20 to-red-500/5",
      svg: (
        <svg viewBox="0 0 100 100" className="w-12 h-12">
          {/* Official HubSpot Sprocket */}
          <path fill="#FF7A59" d="M72.9 39.8V28.3c2.7-1.5 4.5-4.4 4.5-7.7 0-4.9-3.9-8.8-8.8-8.8s-8.8 3.9-8.8 8.8c0 3.4 1.9 6.3 4.6 7.7v11.5c-4.8 2.5-8.4 6.9-9.7 12.3-4.6-3.6-11-4.1-16.1-.9-5.9 3.7-8 11.1-5.1 17.3 2.9 6.2 10.1 9.3 16.7 7.3 3.2-.9 5.9-3 7.8-5.7l15.8 9.2c-.3 1.1-.4 2.2-.4 3.3 0 6.8 5.6 12.4 12.4 12.4s12.4-5.6 12.4-12.4-5.6-12.4-12.4-12.4c-3.1 0-5.9 1.1-8.1 3L60.9 54.8c1.7-3.7 4.9-6.7 8.8-8.2V54c-2.2 1.3-3.7 3.6-3.7 6.3 0 4 3.3 7.3 7.3 7.3s7.3-3.3 7.3-7.3c0-2.7-1.5-5.1-3.7-6.3v-14.2z" />
        </svg>
      ),
    },
    {
      name: "Docker",
      category: "cloud",
      glowColor: "rgba(56, 189, 248, 0.45)",
      borderColor: "border-sky-400/50",
      bgGlow: "from-sky-500/20 to-blue-500/5",
      svg: (
        <svg viewBox="0 0 128 128" className="w-12 h-12">
          <path fill="#2496ED" d="M123.6 57.5c-2.4-1.8-7.7-2.9-12.5-1.7-.8-5.7-4.7-10.2-9.6-11.8l-2.5-.8-.9 2.5c-2.1 5.7-1.3 11.9 2.1 16.5-3.3 1.9-8.4 2.3-10.9 2.3H4.4c-2.4 0-4.4 2-4.4 4.4 0 17.6 7.4 34.6 20.3 46.5 12.9 12 29.8 18.6 47.7 18.6 37.1 0 62.4-23.7 66.4-56.1.5-3.9 1.4-12.1-10.8-20.4zM42.4 51.5h11.9v11.9H42.4V51.5zm15.8 0h11.9v11.9H58.2V51.5zm15.8 0h11.9v11.9H74V51.5zm-47.4 0h11.9v11.9H26.6V51.5zm31.6-15.8h11.9v11.9H58.2V35.7zm15.8 0h11.9v11.9H74V35.7zm-31.6 0h11.9v11.9H42.4V35.7zm15.8-15.7h11.9v11.9H58.2V20z" />
        </svg>
      ),
    },
  ];

  const industryVerticals = [
    {
      sectorKey: "Technology",
      sectorKeyAr: "التكنولوجيا والذكاء الاصطناعي",
      tagline: "We Offer More Than Just Artificial Intelligence And VR Development!",
      taglineAr: "نقدم ما هو أبعد من مجرد حلول الذكاء الاصطناعي والواقع الافتراضي!",
      stat1: "10 +",
      stat1Label: "Years of experience in Artificial Intelligence & Digital Architecture.",
      stat1LabelAr: "سنوات خبرة في هندسة الذكاء الاصطناعي والبنية الرقمية.",
      stat2: "60 +",
      stat2Label: "Enterprise partners scaling with our AI predictive systems.",
      stat2LabelAr: "مؤسسة تطور أعمالها عبر أنظمتنا التنبؤية بالذكاء الاصطناعي.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800",
      caseStudies: [
        { name: "Fintech Core", label: "FinTech" },
        { name: "Apex AI", label: "Enterprise AI" },
        { name: "DIFC Cloud", label: "DIFC Tech" },
      ],
    },
    {
      sectorKey: "Home & Living",
      sectorKeyAr: "الأثاث والديكور والتصميم الداخلي",
      tagline: "We Offer More Than Just Search Engine Optimization!",
      taglineAr: "نقدم ما هو أبعد من مجرد تصدر نتائج محركات البحث!",
      stat1: "10 +",
      stat1Label: "Years of experience in Luxury Retail & SEO dominance.",
      stat1LabelAr: "سنوات خبرة في تحسين محركات البحث وتجارة التجزئة الفاخرة.",
      stat2: "78 +",
      stat2Label: "Brands dominating regional high-intent Google & AI queries.",
      stat2LabelAr: "علامة تجارية تتصدر نتائج البحث ومحركات الذكاء الاصطناعي.",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800",
      caseStudies: [
        { name: "Exa Living", label: "Living" },
        { name: "Fajr Interiors", label: "Interiors" },
        { name: "Reliable Design", label: "Design" },
      ],
    },
    {
      sectorKey: "Real Estate",
      sectorKeyAr: "العقارات الفاخرة والتطوير",
      tagline: "We Offer More Than Just Off-Plan Web & Lead Generation!",
      taglineAr: "نقدم ما هو أبعد من مجرد بناء المواقع وحملات الاستحواذ العقاري!",
      stat1: "10 +",
      stat1Label: "Years of experience in Dubai luxury off-plan & residential sales.",
      stat1LabelAr: "سنوات خبرة في تسويق المشاريع العقارية الفاخرة بدبي.",
      stat2: "90 +",
      stat2Label: "Leading brokerages & master developers empowered across the UAE.",
      stat2LabelAr: "شركة وساطة ومطور عقاري في دولة الإمارات العربية المتحدة.",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800",
      caseStudies: [
        { name: "Avelon Blvd", label: "Avelon" },
        { name: "GJ Properties", label: "GJ Prop" },
        { name: "Emaar Brokerage", label: "Prime Luxury" },
      ],
    },
    {
      sectorKey: "Healthcare & Aesthetics",
      sectorKeyAr: "الرعاية الصحية والمراكز الطبية",
      tagline: "We Offer More Than Just Healthcare Patient Acquisition!",
      taglineAr: "نقدم ما هو أبعد من مجرد استقطاب المرضى والمراجعين!",
      stat1: "10 +",
      stat1Label: "Years of experience in medical compliance & clinical growth.",
      stat1LabelAr: "سنوات خبرة في استقطاب الحالات الطبية المتوافقة مع معايير الصحة.",
      stat2: "85 +",
      stat2Label: "Clinics & hospital networks scaling patient booking velocity.",
      stat2LabelAr: "عيادة ومستشفى خاص حققوا نمواً قياسياً في المواعيد الطبية.",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800",
      caseStudies: [
        { name: "Canadian Med", label: "CMC" },
        { name: "Capital Health", label: "Capital" },
        { name: "Pharma Care", label: "Pharma" },
      ],
    },
    {
      sectorKey: "Luxury Fashion & Retail",
      sectorKeyAr: "الأزياء والعلامات التجارية الفاخرة",
      tagline: "We Offer More Than Just E-Commerce Advertising!",
      taglineAr: "نقدم ما هو أبعد من مجرد إعلانات المتاجر الإلكترونية!",
      stat1: "10 +",
      stat1Label: "Years of experience in GCC high-AOV e-commerce & retail.",
      stat1LabelAr: "سنوات خبرة في مضاعفة مبيعات التجزئة الفاخرة بالخليج.",
      stat2: "65 +",
      stat2Label: "Luxury brands achieving record-breaking Ramadan & holiday ROAS.",
      stat2LabelAr: "علامة فاخرة حققت أعلى عوائد في مواسم الأعياد ورمضان.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800",
      caseStudies: [
        { name: "Oud & Silk", label: "Perfumes" },
        { name: "Vinci Haute", label: "Couture" },
        { name: "Luxe GCC", label: "Retail" },
      ],
    },
  ];

  const filteredTech = activeTechCategory === "all" 
    ? technologies 
    : technologies.filter(t => t.category === activeTechCategory);

  return (
    <div className="pt-28 pb-20 relative bg-black text-white overflow-hidden">
      {/* 1. HERO BANNER - Digital Gravity Style: Bold Heading, Story intro, Press logo ticker */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-8 pb-20 z-10">
        <div className="space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono font-bold tracking-[0.2em] uppercase text-purple-300">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse shadow-[0_0_8px_#C084FC]" />
            <span>
              {language === "ar" ? "قصتنا ورؤيتنا" : "Our Story & Heritage"}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light font-heading text-white tracking-tight leading-tight">
            {language === "ar" ? (
              <>
                من نخبة مهندسي النمو في دبي إلى{" "}
                <span className="font-semibold bg-gradient-to-r from-purple-200 via-fuchsia-300 to-white bg-clip-text text-transparent">
                  قوة تسويقية إقليمية
                </span>
              </>
            ) : (
              <>
                From Dubai’s Elite Growth Engineers to a{" "}
                <span className="font-semibold bg-gradient-to-r from-purple-200 via-fuchsia-300 to-white bg-clip-text text-transparent">
                  Regional Powerhouse
                </span>
              </>
            )}
          </h1>

          <p className="text-base sm:text-lg text-white/70 font-light leading-relaxed max-w-3xl">
            {language === "ar"
              ? "تعمل روودو لإدارة التسويق ذ.م.م ش.ش.و بموجب الرخصة التجارية رقم 1605649 في قرية الأعمال، بور سعيد، دبي. نقدم حلولاً متكاملة لتوليد العملاء المحتملين والتسويق القائم على الأداء المدعوم بالذكاء الاصطناعي، لنمكن العلامات التجارية الرائدة من التوسع والهيمنة الرقمية على مستوى الإمارات والخليج."
              : "Operating under Trade License No. 1605649 (Ru Do Marketing Management L.L.C S.O.C) in Port Saeed Business Village, Dubai, we stand as an AI-powered lead generation and commercial growth architecture firm. We empower UAE & GCC category leaders to evolve, scale, and lead in the modern algorithmic age."}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={() => openModal()}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#7028E4] via-[#A825E8] to-[#B828E6] text-white font-medium text-sm shadow-[0_0_25px_rgba(168,37,232,0.4)] hover:shadow-[0_0_35px_rgba(168,37,232,0.6)] transition-all hover:scale-[1.02] active:scale-98"
            >
              <span>{language === "ar" ? "طلب جلسة استشارية للنمو" : "Request Growth Audit"}</span>
              <ArrowRight className={`w-4 h-4 ${dir === "rtl" ? "rotate-180" : ""}`} />
            </button>
            <a
              href="https://wa.me/971553858658?text=Hi%20RU%20DO%20MARKETING%2C%20I%20want%20a%20free%20growth%20audit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] text-white/80 hover:text-white transition-all text-sm"
            >
              <PhoneCall className="w-4 h-4 text-emerald-400" />
              <span>+971 55 385 8658</span>
            </a>
          </div>
        </div>

        {/* Media / Press Strip - Digital Gravity Style */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-xs uppercase tracking-widest text-white/40 mb-4 font-mono">
            {language === "ar" ? "تغطيات وأبحاث استشهدت بها كبرى وسائل الإعلام" : "Featured & Cited Across Regional Media"}
          </p>
          <div className="flex flex-wrap items-center gap-6 sm:gap-10 text-white/50 text-sm font-light">
            {pressLogos.map((press, i) => (
              <div key={i} className="flex items-center gap-2 hover:text-white transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500/60" />
                <span className="font-medium tracking-tight">{press}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. MISSION, VISION & VALUES (Interactive Accordion - Exact Digital Gravity Model) */}
      <section className="py-20 border-t border-white/10 relative z-10 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Title */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono font-bold tracking-[0.2em] uppercase text-purple-300">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse shadow-[0_0_8px_#C084FC]" />
                <span>
                  {language === "ar" ? "ما يحركنا ويميزنا" : "What Moves & Defines Us"}
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-light font-heading text-white tracking-tight leading-tight">
                {language === "ar" ? (
                  <>
                    المبادئ التي تبني{" "}
                    <span className="font-semibold bg-gradient-to-r from-purple-200 via-fuchsia-300 to-white bg-clip-text text-transparent">
                      شراكات مستدامة
                    </span>
                  </>
                ) : (
                  <>
                    The Core Principles Fueling{" "}
                    <span className="font-semibold bg-gradient-to-r from-purple-200 via-fuchsia-300 to-white bg-clip-text text-transparent">
                      Category Leadership
                    </span>
                  </>
                )}
              </h2>
              <p className="text-sm text-white/60 leading-relaxed font-light">
                {language === "ar"
                  ? "نؤمن بأن التسويق ليس مجرد حملات عابرة، بل هو بنية تجارية راسخة قائمة على الصدق، والالتزام بأرقام المبيعات الحقيقية، والابتكار التقني المستمر."
                  : "We believe growth is not an accident of marketing spend. It is an engineered discipline rooted in commercial honesty, algorithmic precision, and cultural resonance."}
              </p>
            </div>

            {/* Right Accordion */}
            <div className="lg:col-span-7 space-y-4">
              {/* Mission */}
              <div className="border border-white/10 rounded-2xl bg-white/[0.02] backdrop-blur-md overflow-hidden transition-all">
                <button
                  onClick={() => setOpenAccordion(openAccordion === "mission" ? "mission" : "mission")}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Target className="w-5 h-5 text-purple-400" />
                    <h3 className="text-lg font-medium text-white">
                      {language === "ar" ? "رسالتنا (Our Mission)" : "Our Mission"}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-white/50 transition-transform duration-300 ${
                      openAccordion === "mission" ? "rotate-180 text-purple-300" : ""
                    }`}
                  />
                </button>
                {openAccordion === "mission" && (
                  <div className="px-6 pb-6 pt-1 text-sm text-white/70 leading-relaxed border-t border-white/5 font-light">
                    {language === "ar"
                      ? "تمكين المؤسسات والشركات الطموحة في دبي والخليج من التحرر من هدر الميزانيات التقليدية، وبناء قنوات استحواذ رقمية تعتمد على الذكاء الاصطناعي لتحقيق عوائد تجارية استثنائية ومستدامة."
                      : "Be fearless, challenge legacy advertising norms, and engineer predictable commercial pipelines that empower UAE enterprises to achieve absolute market leadership."}
                  </div>
                )}
              </div>

              {/* Vision */}
              <div className="border border-white/10 rounded-2xl bg-white/[0.02] backdrop-blur-md overflow-hidden transition-all">
                <button
                  onClick={() => setOpenAccordion(openAccordion === "vision" ? "mission" : "vision")}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Lightbulb className="w-5 h-5 text-purple-400" />
                    <h3 className="text-lg font-medium text-white">
                      {language === "ar" ? "رؤيتنا (Our Vision)" : "Our Vision"}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-white/50 transition-transform duration-300 ${
                      openAccordion === "vision" ? "rotate-180 text-purple-300" : ""
                    }`}
                  />
                </button>
                {openAccordion === "vision" && (
                  <div className="px-6 pb-6 pt-1 text-sm text-white/70 leading-relaxed border-t border-white/5 font-light">
                    {language === "ar"
                      ? "أن نكون الشريك الاستراتيجي الأول للنمو في الشرق الأوسط، حيث تلتقي دقة الخوارزميات بالهوية الثقافية الأصيلة لصياغة مستقبل التسويق الرقمي المؤسسي."
                      : "We drive excellence through digital intelligence by transforming mindsets and building transparent growth ecosystems that become an enterprise’s greatest commercial asset."}
                  </div>
                )}
              </div>

              {/* Values */}
              <div className="border border-white/10 rounded-2xl bg-white/[0.02] backdrop-blur-md overflow-hidden transition-all">
                <button
                  onClick={() => setOpenAccordion(openAccordion === "values" ? "mission" : "values")}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-purple-400" />
                    <h3 className="text-lg font-medium text-white">
                      {language === "ar" ? "قيمنا الجوهرية (Our Values)" : "Our Values"}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-white/50 transition-transform duration-300 ${
                      openAccordion === "values" ? "rotate-180 text-purple-300" : ""
                    }`}
                  />
                </button>
                {openAccordion === "values" && (
                  <div className="px-6 pb-6 pt-3 text-sm text-white/70 leading-relaxed border-t border-white/5 space-y-3 font-light">
                    {valuesList.map((val, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 shrink-0" />
                        <div>
                          <strong className="text-white font-medium">
                            {language === "ar" ? val.titleAr : val.title}:
                          </strong>{" "}
                          <span>{language === "ar" ? val.descAr : val.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LEADERSHIP TEAM (Digital Gravity Card Grid Style) */}
      <section className="py-20 border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono font-bold tracking-[0.2em] uppercase text-purple-300">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse shadow-[0_0_8px_#C084FC]" />
              <span>
                {language === "ar" ? "فريق القيادة" : "Leadership"}
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-light font-heading text-white tracking-tight">
              {language === "ar" ? (
                <>
                  الفريق الذي يقود{" "}
                  <span className="font-semibold bg-gradient-to-r from-purple-200 via-fuchsia-300 to-white bg-clip-text text-transparent">
                    استراتيجيات روودو
                  </span>
                </>
              ) : (
                <>
                  The People Steering{" "}
                  <span className="font-semibold bg-gradient-to-r from-purple-200 via-fuchsia-300 to-white bg-clip-text text-transparent">
                    Rudo Marketing
                  </span>
                </>
              )}
            </h2>
            <p className="text-xs sm:text-sm text-white/60 font-light max-w-lg mx-auto">
              {language === "ar"
                ? "قادة تنفيذيون يملكون سجلاً مثبتاً في إدارة الميزانيات الضخمة وتحقيق عوائد بمليارات الدراهم."
                : "Experienced principals managing senior media execution, AI telemetry, and commercial growth."}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {leadership.map((member, idx) => (
              <div
                key={idx}
                className="group rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-purple-500/40 p-4 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-64 sm:h-56 w-full rounded-xl overflow-hidden mb-4 bg-zinc-900">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover filter grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                      sizes="(max-width: 768px) 100vw, 240px"
                    />
                  </div>
                  <h3 className="text-base font-semibold text-white group-hover:text-purple-300 transition-colors">
                    {language === "ar" ? member.nameAr : member.name}
                  </h3>
                  <p className="text-xs text-white/50 font-light mt-0.5">
                    {language === "ar" ? member.roleAr : member.role}
                  </p>
                </div>
                <div className="w-8 h-0.5 bg-purple-500/40 mt-4 group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ADVANCED TECHNOLOGY STACK (Digital Gravity Glowing Icon Animation) */}
      <section className="py-24 border-t border-white/10 relative z-10 overflow-hidden bg-black/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono font-bold tracking-[0.2em] uppercase text-purple-300">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse shadow-[0_0_8px_#C084FC]" />
              <span>
                {language === "ar" ? "البنية التقنية المتطورة" : "Technology Stack"}
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light font-heading text-white tracking-tight">
              {language === "ar" ? (
                <>
                  بنية برمجية متطورة تضمن{" "}
                  <span className="font-semibold bg-gradient-to-r from-purple-200 via-fuchsia-300 to-white bg-clip-text text-transparent">
                    السرعة والأداء والابتكار
                  </span>
                </>
              ) : (
                <>
                  Advanced Tech Stack for{" "}
                  <span className="font-semibold bg-gradient-to-r from-purple-200 via-fuchsia-300 to-white bg-clip-text text-transparent">
                    Performance, Scale & AI
                  </span>
                </>
              )}
            </h2>
            <p className="text-xs sm:text-sm text-white/60 font-light max-w-xl mx-auto">
              {language === "ar"
                ? "أطر عمل وتقنيات معتمدة لضمان أقصى سرعة استجابة، وتكامل الذكاء الاصطناعي، وثبات البنية الرقمية عند ملايين الزيارات."
                : "Engineered with industry-standard stacks, cloud microservices, and AI models built for ultra-low latency."}
            </p>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
              {[
                { id: "all", label: "All Tech", labelAr: "الكل" },
                { id: "marketing", label: "Paid Media & Growth", labelAr: "الإعلانات والنمو" },
                { id: "ai", label: "AI & Data", labelAr: "الذكاء الاصطناعي" },
                { id: "frontend", label: "Frontend & Design", labelAr: "الواجهات والتصميم" },
                { id: "backend", label: "Backend & Systems", labelAr: "الأنظمة الخلفية" },
                { id: "cloud", label: "Cloud & DevOps", labelAr: "السحابة والعمليات" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTechCategory(tab.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                    activeTechCategory === tab.id
                      ? "bg-purple-600/30 border border-purple-400/80 text-white shadow-[0_0_20px_rgba(168,37,232,0.4)]"
                      : "bg-white/[0.03] border border-white/10 text-white/60 hover:text-white hover:bg-white/[0.08]"
                  }`}
                >
                  {language === "ar" ? tab.labelAr : tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Ambient Dark Glow Backdrop */}
        <div className="relative w-full overflow-hidden py-6">
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 z-20 pointer-events-none bg-gradient-to-r from-[#050508] to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 z-20 pointer-events-none bg-gradient-to-l from-[#050508] to-transparent" />

          {/* Continuous Animated Row (Digital Gravity Smooth Loop) */}
          <div className="animate-tech-marquee flex items-center gap-6 sm:gap-8 px-4">
            {[...filteredTech, ...filteredTech, ...filteredTech].map((tech, idx) => (
              <div
                key={idx}
                className="group flex flex-col items-center shrink-0 cursor-pointer select-none transition-transform duration-300 hover:-translate-y-2"
              >
                {/* Glowing Rounded Frosted Glass Card */}
                <div
                  className={`relative w-28 h-28 sm:w-36 sm:h-36 rounded-3xl sm:rounded-[2rem] bg-[#14151C]/90 backdrop-blur-xl border border-white/10 flex items-center justify-center transition-all duration-500 shadow-2xl group-hover:scale-105 ${tech.borderColor}`}
                  style={{
                    boxShadow: `0 10px 30px -10px ${tech.glowColor}, inset 0 1px 2px rgba(255, 255, 255, 0.2)`,
                  }}
                >
                  {/* Internal Ambient Radial Aura */}
                  <div
                    className="absolute inset-0 rounded-3xl sm:rounded-[2rem] opacity-40 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at center, ${tech.glowColor} 0%, transparent 70%)`,
                    }}
                  />

                  {/* Tech Brand SVG Icon */}
                  <div className="relative z-10 transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                    {tech.svg}
                  </div>
                </div>

                {/* Tech Label under icon */}
                <span className="mt-3.5 text-xs sm:text-sm font-medium text-white/80 group-hover:text-white transition-colors tracking-wide">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>

          {/* Reverse Animated Row for Visual Density */}
          <div className="animate-tech-marquee-reverse flex items-center gap-6 sm:gap-8 px-4 mt-6">
            {[...filteredTech.slice().reverse(), ...filteredTech.slice().reverse(), ...filteredTech.slice().reverse()].map((tech, idx) => (
              <div
                key={idx}
                className="group flex flex-col items-center shrink-0 cursor-pointer select-none transition-transform duration-300 hover:-translate-y-2"
              >
                {/* Glowing Rounded Frosted Glass Card */}
                <div
                  className={`relative w-24 h-24 sm:w-32 sm:h-32 rounded-3xl sm:rounded-[1.75rem] bg-[#14151C]/90 backdrop-blur-xl border border-white/10 flex items-center justify-center transition-all duration-500 shadow-xl group-hover:scale-105 ${tech.borderColor}`}
                  style={{
                    boxShadow: `0 8px 24px -10px ${tech.glowColor}, inset 0 1px 2px rgba(255, 255, 255, 0.2)`,
                  }}
                >
                  {/* Internal Ambient Radial Aura */}
                  <div
                    className="absolute inset-0 rounded-3xl sm:rounded-[1.75rem] opacity-35 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at center, ${tech.glowColor} 0%, transparent 70%)`,
                    }}
                  />

                  {/* Tech Brand SVG Icon */}
                  <div className="relative z-10 transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)] scale-90">
                    {tech.svg}
                  </div>
                </div>

                {/* Tech Label */}
                <span className="mt-3 text-[11px] sm:text-xs font-medium text-white/70 group-hover:text-white transition-colors tracking-wide">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INDUSTRY VERTICALS & CASE IMPACT (Sticky Cards Showcase from Digital Gravity) */}
      <section className="py-20 border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono font-bold tracking-[0.2em] uppercase text-purple-300">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse shadow-[0_0_8px_#C084FC]" />
              <span>
                {language === "ar" ? "القطاعات الرائدة" : "Industry Practice"}
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light font-heading text-white tracking-tight">
              {language === "ar" ? (
                <>
                  حلول تصنع نمواً حقيقياً في{" "}
                  <span className="font-semibold bg-gradient-to-r from-purple-200 via-fuchsia-300 to-white bg-clip-text text-transparent">
                    أهم قطاعات الأعمال
                  </span>
                </>
              ) : (
                <>
                  Creating Solutions That{" "}
                  <span className="font-semibold bg-gradient-to-r from-purple-200 via-fuchsia-300 to-white bg-clip-text text-transparent">
                    Fuel Growth & Success
                  </span>
                </>
              )}
            </h2>
            <p className="text-xs sm:text-sm text-white/60 font-light max-w-xl mx-auto">
              {language === "ar"
                ? "خبرة تنفيذية متخصصة في أبرز الصناعات الحيوية بدبي وأبوظبي ومنطقة الخليج."
                : "Deep commercial track record across Dubai's most competitive revenue generators."}
            </p>
          </div>

          {/* Folding / Stacking Cards Container */}
          <div className="relative pb-24 space-y-10">
            {industryVerticals.map((vert, idx) => (
              <div
                key={idx}
                className="sticky rounded-[2rem] sm:rounded-[2.75rem] bg-[#53545b] text-white p-7 sm:p-10 lg:p-12 shadow-[0_-14px_45px_rgba(0,0,0,0.55)] border border-white/10 transition-all duration-300"
                style={{
                  top: `calc(90px + ${idx * 32}px)`,
                  zIndex: idx + 10,
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-center">
                  {/* Left Column: Sector & Tagline */}
                  <div className="md:col-span-4 flex flex-col justify-between self-stretch space-y-4">
                    <div>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                        {language === "ar" ? vert.sectorKeyAr : vert.sectorKey}
                      </h3>
                      <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl font-bold text-white/90 leading-snug">
                        {language === "ar" ? vert.taglineAr : vert.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Center Column: Sector Image with Rounded Corners */}
                  <div className="md:col-span-4 relative h-60 sm:h-72 lg:h-80 w-full rounded-2xl overflow-hidden shadow-2xl bg-black/40">
                    <Image
                      src={vert.image}
                      alt={vert.sectorKey}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 360px"
                    />
                  </div>

                  {/* Right Column: Key Stats & Case Studies Badges */}
                  <div className="md:col-span-4 flex flex-col justify-between self-stretch space-y-6">
                    <div className="space-y-6">
                      {/* Stat 1 */}
                      <div>
                        <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-heading">
                          {vert.stat1}
                        </div>
                        <p className="mt-1 text-xs sm:text-sm text-white/80 font-normal leading-relaxed">
                          {language === "ar" ? vert.stat1LabelAr : vert.stat1Label}
                        </p>
                      </div>

                      {/* Stat 2 */}
                      <div>
                        <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-heading">
                          {vert.stat2}
                        </div>
                        <p className="mt-1 text-xs sm:text-sm text-white/80 font-normal leading-relaxed">
                          {language === "ar" ? vert.stat2LabelAr : vert.stat2Label}
                        </p>
                      </div>
                    </div>

                    {/* Bottom: Case Studies with Badges */}
                    <div className="pt-2">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_#C084FC]" />
                        <Link
                          href="/case-studies"
                          className="text-xs sm:text-sm font-semibold text-white/90 hover:text-white tracking-wide transition-colors inline-flex items-center gap-1.5"
                        >
                          <span>{language === "ar" ? "استعرض دراسات الحالة" : "See Case Studies"}</span>
                          <ArrowRight className={`w-3.5 h-3.5 ${dir === "rtl" ? "rotate-180" : ""}`} />
                        </Link>
                      </div>

                      <div className="flex flex-wrap items-center gap-2.5">
                        {vert.caseStudies.map((cs, cIdx) => (
                          <div
                            key={cIdx}
                            className="px-3.5 py-2 rounded-xl bg-black/60 border border-white/10 text-white/80 text-[11px] font-semibold tracking-wider flex items-center gap-2 shadow-inner hover:border-purple-400/40 hover:text-white transition-all"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80" />
                            <span>{cs.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION / CONNECT SECTION (Digital Gravity Closing Block) */}
      <section className="py-20 border-t border-white/10 relative z-10 bg-gradient-to-b from-transparent to-purple-950/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono font-bold tracking-[0.2em] uppercase text-purple-300">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse shadow-[0_0_8px_#C084FC]" />
            <span>
              {language === "ar" ? "لنبدأ محادثة مثمرة" : "Let's Connect"}
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-light font-heading text-white tracking-tight leading-tight">
            {language === "ar" ? (
              <>
                جاهز لتطوير أعمالك والتفوق على{" "}
                <span className="font-semibold bg-gradient-to-r from-purple-200 via-fuchsia-300 to-white bg-clip-text text-transparent">
                  منافسيك في السوق؟
                </span>
              </>
            ) : (
              <>
                Ready to Scale Your Brand and{" "}
                <span className="font-semibold bg-gradient-to-r from-purple-200 via-fuchsia-300 to-white bg-clip-text text-transparent">
                  Lead Your Category?
                </span>
              </>
            )}
          </h2>

          <p className="text-sm sm:text-base text-white/60 font-light max-w-2xl mx-auto leading-relaxed">
            {language === "ar"
              ? "تواصل مع فريقنا في دبي للحصول على تدقيق مجاني لمسار نمو علامتك التجارية واستكشاف فرص التوسع الفعلي."
              : "Schedule a confidential growth session with our Dubai partners to evaluate your commercial pipeline."}
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => openModal()}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#7028E4] via-[#A825E8] to-[#B828E6] text-white font-medium text-sm shadow-[0_0_25px_rgba(168,37,232,0.4)] hover:shadow-[0_0_35px_rgba(168,37,232,0.6)] transition-all hover:scale-[1.02] active:scale-98"
            >
              <span>{language === "ar" ? "احجز موعد استشارة مجانية" : "Book Free Strategy Session"}</span>
              <ArrowRight className={`w-4 h-4 ${dir === "rtl" ? "rotate-180" : ""}`} />
            </button>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] text-white text-sm transition-all"
            >
              <span>{language === "ar" ? "زيارة مكتبنا في دبي" : "Visit Dubai Office"}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
