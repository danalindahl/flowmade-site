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
  title: "FlowMade — Custom Automation Builds for Agencies & Service Businesses",
  description:
    "I build automated workflows in n8n and Make.com that replace the manual processes slowing your business down. Fixed-price projects, clear scope, fast turnaround.",
  openGraph: {
    title: "FlowMade — Custom Automation Builds",
    description:
      "Automated workflows for agencies and service businesses. Built by someone who ran one for 14 years.",
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
