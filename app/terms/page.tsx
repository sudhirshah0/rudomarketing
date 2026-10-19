"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Scale, ArrowLeft } from "lucide-react";

export default function TermsPage() {
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
              <Scale className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono uppercase tracking-widest text-rudo-accent font-bold">
              COMMERCIAL ENGAGEMENT & SERVICE AGREEMENT
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white leading-tight mb-6">
            {language === "ar" ? "الشروط والأحكام التجارية" : "Terms of Commercial Engagement"}
          </h1>

          <p className="text-xs text-gray-400 mb-10 pb-6 border-b border-white/10">
            Effective Date: January 1, 2026 • Operating Entity: Ru Do Marketing Management L.L.C S.O.C. (Trade License No. 1605649) • Dubai Courts & DIFC Arbitration
          </p>

          <div className="space-y-8 text-sm sm:text-base text-gray-300 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-white">
              1. Commercial Relationship & Scope
            </h2>
            <p>
              These Terms of Service govern the engagement between Ru Do Marketing Management L.L.C S.O.C. (Trade License No. 1605649, registered with the Dubai Department of Economy and Tourism) and any enterprise contracting our services. Detailed deliverables, performance benchmarks, and monthly retainers are formalized via custom Master Services Agreements (MSAs) and Statements of Work (SOWs).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-white">
              2. Retainer Fees, Currency & Invoicing
            </h2>
            <p>
              All professional fees are quoted and billed in United Arab Emirates Dirhams (AED) and are subject to the applicable 5% Value Added Tax (VAT) in accordance with UAE Federal Decree-Law No. (8) of 2017 on Value Added Tax. Invoices are payable net 14 days from issuance unless agreed otherwise in writing.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-white">
              3. Intellectual Property Rights
            </h2>
            <p>
              Upon receipt of full payment, all custom design collateral, website source code, video edits, and bespoke creative assets produced specifically for the Client transfer entirely to the Client. Rudo Marketing retains rights to proprietary analytical tools, automated bidding scripts, and anonymized case study performance data.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-white">
              4. Media Spend & Advertising Accounts
            </h2>
            <p>
              All direct ad spend (Google, Meta, TikTok, LinkedIn) is paid directly by the Client to the respective ad networks. The Client maintains full administrative ownership of their advertising accounts and digital assets at all times.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-white">
              5. Governing Law & Dispute Resolution
            </h2>
            <p>
              These terms and any non-contractual obligations arising out of or in connection with them shall be governed by and construed in accordance with the laws of the Emirate of Dubai and the applicable Federal Laws of the United Arab Emirates. Any dispute shall be submitted to the exclusive jurisdiction of the Courts of Dubai.
            </p>
          </section>
        </div>
        </div>
      </div>
    </div>
  );
}
