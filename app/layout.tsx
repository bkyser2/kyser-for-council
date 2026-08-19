import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { candidate } from "@/content";
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
      </body>
    </html>
  );
}
