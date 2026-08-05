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
  title: "FlowMade: Make Sure the Leads You Pay For Actually Get Worked",
  description:
    "I build service businesses a system that follows up every lead to completion and I run it for you, so the leads you already pay for stop going cold when your team gets busy.",
  openGraph: {
    title: "FlowMade: The System Behind Your Follow-Up",
    description:
      "The leads you already pay for actually get worked. I build the system and run it for you.",
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
