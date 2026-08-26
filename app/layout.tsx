import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/react";
import { candidate } from "@/content";
import DonateFAB from "@/components/DonateFAB";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kyserforcouncil.com"),
  title: `${candidate.name} · ${candidate.role}`,
  description: candidate.subTagline,
  openGraph: {
    title: `${candidate.name} · ${candidate.role}`,
    description: candidate.subTagline,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${candidate.name} for Doraville`,
    description: candidate.tagline,
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground antialiased">
        {children}
        <DonateFAB />
        {/*
          Vercel Web Analytics. Renders NO visible UI — it injects a tiny,
          privacy-friendly script that reports pageviews to the Vercel
          dashboard (Project → Analytics tab). Visitors see nothing.
          Only sends data when deployed on Vercel; a no-op in local dev.
        */}
        <Analytics />
      </body>
    </html>
  );
}
