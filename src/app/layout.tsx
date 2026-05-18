import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bedbugsne.com"),
  title: {
    default: "Bed Bug Exterminator Omaha | Heat Treatment Specialist",
    template: "%s | Midwest Bed Bug Services Nebraska",
  },
  description:
    "Bed bug heat treatment for Omaha, Lincoln, Council Bluffs and surrounding areas. 20+ years experience, 90 day warranty, fast scheduling, discreet service.",
  openGraph: {
    title: "Bed Bug Exterminator Omaha | Heat Treatment Specialist",
    description:
      "Pressurized bed bug heat treatment for Omaha, Lincoln, Council Bluffs and surrounding areas.",
    url: "https://bedbugsne.com",
    siteName: "Midwest Bed Bug Services Nebraska",
    images: [
      {
        url: "/assets/mwbbs-logo.png",
        width: 1432,
        height: 240,
        alt: "Midwest Bed Bug Services Nebraska",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-[#171717]">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
