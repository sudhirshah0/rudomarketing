import React from "react";
import { notFound } from "next/navigation";
import { industriesCatalog } from "@/lib/industriesData";
import IndustryDetailClient from "./IndustryDetailClient";
import type { Metadata } from "next";

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return Object.keys(industriesCatalog).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const industry = industriesCatalog[params.slug];
  if (!industry) return { title: "Industry Not Found" };

  return {
    title: `${industry.title} | Rudo Marketing Dubai`,
    description: industry.description,
    openGraph: {
      title: `${industry.title} | Rudo Marketing UAE`,
      description: industry.tagline,
      images: [industry.heroImage],
    },
  };
}

export default function IndustryPage({ params }: Props) {
  const industry = industriesCatalog[params.slug];

  if (!industry) {
    notFound();
  }

  return <IndustryDetailClient industry={industry} />;
}
