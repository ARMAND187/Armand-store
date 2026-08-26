import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/config/site";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "RawchySMP | The Ultimate Minecraft Experience",
  description: SITE_CONFIG.description,
  keywords: [
    "RawchySMP",
    "Minecraft",
    "Survival",
    "Server",
    "Minecraft Server",
    "SMP"
  ],
  metadataBase: new URL(SITE_CONFIG.url),
  openGraph: {
    type: "website",
    url: SITE_CONFIG.url,
    title: "RawchySMP | The Ultimate Minecraft Experience",
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
    images: [],
  },
  twitter: {
    card: "summary_large_image",
    title: "RawchySMP | The Ultimate Minecraft Experience",
    description: SITE_CONFIG.description,
    images: [],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-zinc-950 text-white min-h-screen">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
