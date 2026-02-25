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
  title: "JSolutions | AI Agents & Automations",
  description: "Smart AI agents, automations, and chatbots that handle the repetitive stuff so you can focus on what matters. Built by Jarno Swinkels.",
  keywords: ["AI", "automation", "chatbots", "AI agents", "software development", " Netherlands"],
  authors: [{ name: "Jarno Swinkels" }],
  openGraph: {
    title: "JSolutions | AI Agents & Automations",
    description: "Smart AI agents, automations, and chatbots that handle the repetitive stuff so you can focus on what matters.",
    type: "website",
    locale: "en_US",
    siteName: "JSolutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "JSolutions | AI Agents & Automations",
    description: "Smart AI agents, automations, and chatbots that handle the repetitive stuff so you can focus on what matters.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
