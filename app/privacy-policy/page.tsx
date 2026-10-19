"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ShieldCheck, ArrowLeft } from "lucide-react";

export default function PrivacyPolicyPage() {
  const { language, dir } = useLanguage();

  return (
    <div className="pt-32 pb-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Link
          href="/"
          className="glass-pill inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-rudo-accent hover:text-white transition mb-8"
        >
          <ArrowLeft className={`w-4 h-4 ${dir === "rtl" ? "rotate-180" : ""}`} />
          <span>{language === "ar" ? "العودة للرئيسية" : "Back to Home"}</span>
        </Link>

        <div className="glass-panel p-8 sm:p-12 rounded-3xl shadow-2xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-xl glass-pill flex items-center justify-center text-rudo-accent shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono uppercase tracking-widest text-rudo-accent font-bold">
              UAE PDPL COMPLIANT (FEDERAL DECREE-LAW NO. 45 OF 2021)
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white leading-tight mb-6">
            {language === "ar" ? "سياسة الخصوصية وحماية البيانات" : "Privacy & Data Protection Policy"}
          </h1>

          <p className="text-xs text-gray-400 mb-10 pb-6 border-b border-white/10">
            Last Updated: January 1, 2026 • Operating Entity: Ru Do Marketing Management L.L.C S.O.C. (Trade License No. 1605649, Dubai, UAE)
          </p>

          <div className="space-y-8 text-sm sm:text-base text-gray-300 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-white">
              1. Introduction & Statutory Authority
            </h2>
            <p>
              Ru Do Marketing Management L.L.C S.O.C. (&ldquo;Rudo Marketing&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is a limited liability company duly registered under Trade License No. 1605649 with the Dubai Department of Economy and Tourism (DET), having its principal place of business at Port Saeed Business Village, Block A, 808A, Dubai, United Arab Emirates.
            </p>
            <p>
              This Privacy Policy delineates how we collect, process, manage, and safeguard personal and commercial data in full compliance with United Arab Emirates Federal Decree-Law No. 45 of 2021 regarding the Protection of Personal Data (&ldquo;UAE PDPL&rdquo;) and relevant Dubai Digital Authority regulations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-white">
              2. Data We Collect
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Contact & Commercial Identifiers:</strong> Full legal name, corporate email address, international telephone numbers, company name, and commercial registration numbers submitted via our growth enquiry forms.</li>
              <li><strong>Digital Telemetry & Technical Identifiers:</strong> IP addresses, browser configurations, time zone offsets, referral source, and anonymized user behavior via cookieless first-party analytics.</li>
              <li><strong>Client Commercial Campaign Data:</strong> Marketing performance data, ad accounts, CRM webhook data, and customer cohort logs shared under signed Non-Disclosure Agreements (NDAs).</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-white">
              3. Legal Basis & Purpose of Processing
            </h2>
            <p>
              We process data under lawful bases stipulated under Article 4 and Article 5 of the UAE PDPL:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>To evaluate project briefs and furnish bespoke commercial proposals.</li>
              <li>To execute contractual growth marketing retainers and performance reporting.</li>
              <li>To maintain compliance with UAE tax regulations (Federal Tax Authority - FTA) and regulatory reporting standards.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-white">
              4. Data Sovereignty & Confidentiality
            </h2>
            <p>
              We enforce bank-grade AES-256 encryption at rest and in transit (TLS 1.3). We never sell, lease, or monetize client data. All client marketing collateral and proprietary metrics remain the strictly confidential property of the contracting client.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-white">
              5. Your Legal Rights Under UAE Law
            </h2>
            <p>
              UAE data subjects have the right to request access, rectification, restriction of processing, and erasure of their personal data. To exercise these rights, submit a formal request to our Data Protection Officer at: <strong>info@rudomarketing.ae</strong>.
            </p>
          </section>
        </div>
        </div>
      </div>
    </div>
  );
}
