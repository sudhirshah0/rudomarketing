import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { servicesCatalog } from "@/lib/servicesData";
import ServiceDetailClient from "./ServiceDetailClient";
import type { Metadata } from "next";

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return Object.keys(servicesCatalog).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = servicesCatalog[params.slug];
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} in Dubai | Rudo Marketing`,
    description: service.description,
    openGraph: {
      title: `${service.title} | Rudo Marketing Dubai`,
      description: service.tagline,
      images: [service.heroImage],
    },
  };
}

export default function ServicePage({ params }: Props) {
  const service = servicesCatalog[params.slug];

  if (!service) {
    notFound();
  }

  return <ServiceDetailClient service={service} />;
}
