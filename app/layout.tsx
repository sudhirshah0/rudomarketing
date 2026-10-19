import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { ModalProvider } from "@/context/ModalContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnquiryModal from "@/components/EnquiryModal";
import WhatsAppButton from "@/components/WhatsAppButton";
import GsapScrollManager from "@/components/GsapScrollManager";

export const viewport: Viewport = {
  themeColor: "#070B14",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Rudo Marketing Dubai | AI-Powered Lead Generation & Performance Agency",
  description:
    "Ru Do Marketing Management L.L.C S.O.C (Trade License No. 1605649) is Dubai's premier AI-powered lead generation and performance marketing agency. We engineer relentless revenue growth for UAE market leaders.",
  keywords: [
    "marketing agency dubai",
    "digital marketing agency uae",
    "seo agency dubai",
    "dubai real estate marketing",
    "ppc management dubai",
    "bilingual marketing agency gcc",
    "performance marketing agency uae",
    "rudo marketing",
  ],
  authors: [{ name: "Ru Do Marketing Management L.L.C S.O.C." }],
  creator: "Ru Do Marketing Management L.L.C S.O.C.",
  publisher: "Ru Do Marketing Management L.L.C S.O.C.",
  metadataBase: new URL("https://rudomarketing.ae"),
  alternates: {
    canonical: "https://rudomarketing.ae",
    languages: {
      "en-AE": "https://rudomarketing.ae",
      "ar-AE": "https://rudomarketing.ae?lang=ar",
    },
  },
  openGraph: {
    title: "Rudo Marketing Dubai | Engineering Relentless Revenue Growth",
    description:
      "Prestige digital marketing agency at Port Saeed Business Village, Dubai. Trusted by premier UAE enterprises for Enterprise SEO, high-ROAS Paid Ads, and luxury branding.",
    url: "https://rudomarketing.ae",
    siteName: "Rudo Marketing Dubai",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rudo Marketing Dubai - Premier UAE Growth Agency",
      },
    ],
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rudo Marketing Dubai | Premier Growth & Brand Agency",
    description:
      "Results-focused growth marketing agency based in Dubai, UAE. Enterprise SEO, Paid Media, and Prestige Web Design.",
    creator: "@rudomarketing",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MarketingAgency",
    name: "Ru Do Marketing Management L.L.C S.O.C.",
    legalName: "Ru Do Marketing Management L.L.C S.O.C.",
    alternateName: "روودو لإدارة التسويق ذ.م.م ش.ش.و",
    taxID: "1605649",
    url: "https://rudomarketing.ae",
    logo: "https://rudomarketing.ae/logo.svg",
    image: "https://rudomarketing.ae/og-image.jpg",
    description:
      "AI-powered lead generation and performance marketing agency in Dubai (Trade License No. 1605649), headquartered at Port Saeed Business Village, Dubai, United Arab Emirates.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Port Saeed Business Village, Block A, 808A",
      addressLocality: "Dubai",
      addressRegion: "Dubai",
      postalCode: "00000",
      addressCountry: "AE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "25.2532",
      longitude: "55.3328",
    },
    telephone: "+971553858658",
    email: "info@rudomarketing.ae",
    priceRange: "AED 15,000 - AED 150,000+",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      "https://linkedin.com/company/rudomarketing",
      "https://instagram.com/rudomarketing",
      "https://twitter.com/rudomarketing",
      "https://youtube.com/@rudomarketing",
    ],
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="bg-[#050508] text-white antialiased font-body selection:bg-purple-500 selection:text-white relative overflow-x-hidden min-h-screen">
        <LanguageProvider>
          <ModalProvider>
            <GsapScrollManager />
            <Header />
            <main className="min-h-screen relative z-10">{children}</main>
            <Footer />
            <EnquiryModal />
            <WhatsAppButton />
          </ModalProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
