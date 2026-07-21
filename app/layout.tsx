import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FlowMade: The Systems Behind Your Sales",
  description:
    "Done-for-you outbound that books sales calls, plus the automation that runs everything behind it: follow-up, CRM, onboarding, reporting. Built by someone who ran a B2B agency for 14 years.",
  openGraph: {
    title: "FlowMade: The Systems Behind Your Sales",
    description:
      "Outbound that fills your pipeline with sales calls, and the automation that runs it. Built by someone who ran a B2B agency for 14 years.",
    url: "https://flowmade.io",
    siteName: "FlowMade",
    type: "website",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
