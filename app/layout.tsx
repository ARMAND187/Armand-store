import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import { SITE_CONFIG } from "@/config/site";
import { Analytics } from "@vercel/analytics/next";
import CinematicBackground from "@/components/CinematicBackground";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Armand Store | Digital Products & Social Media Services",
  description: SITE_CONFIG.description,
  keywords: [
    "Armand Store",
    "Windows activation key",
    "Gemini Pro subscription",
    "YouTube subscribers",
    "TikTok followers",
    "Telegram members",
    "digital products Iraq",
    "IQD",
    "FIB",
    "ZainCash",
    "FastPay",
  ],
  metadataBase: new URL(SITE_CONFIG.url),
  openGraph: {
    type: "website",
    url: SITE_CONFIG.url,
    title: "Armand Store | Digital Products & Social Media Services",
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: "Armand Store — Premium Digital Products & Social Media Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Armand Store | Digital Products & Social Media Services",
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

import ShootingStars from "@/components/ShootingStars";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <CinematicBackground />
        <ShootingStars />
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
