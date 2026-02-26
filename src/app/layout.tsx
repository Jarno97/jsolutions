import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LanguageProvider } from "@/components/LanguageContext";
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
  metadataBase: new URL("https://jsolutions.nl"),
  title: {
    default: "JSolutions | AI Agents & Automations",
    template: "%s | JSolutions",
  },
  description: "AI agents, automations & chatbots that handle the repetitive stuff so you can focus on what matters. Built by Jarno Swinkels in the Netherlands.",
  keywords: ["AI agents", "automation", "chatbots", "AI automation", "business automation", "AI consultant", "Netherlands", "Dutch AI developer", "Make.com", "Zapier alternatives"],
  authors: [{ name: "Jarno Swinkels" }],
  creator: "Jarno Swinkels",
  publisher: "JSolutions",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "JSolutions | AI Agents & Automations",
    description: "AI agents, automations & chatbots that handle the repetitive stuff so you can focus on what matters.",
    url: "https://jsolutions.nl",
    siteName: "JSolutions",
    locale: "en_US",
    alternateLocale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JSolutions | AI Agents & Automations",
    description: "AI agents, automations & chatbots that handle the repetitive stuff so you can focus on what matters.",
    creator: "@jarno97",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="canonical" href="https://jsolutions.nl" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "JSolutions",
              "description": "AI agents, automations & chatbots for businesses in the Netherlands",
              "url": "https://jsolutions.nl",
              "telephone": "+31-6-12345678",
              "email": "hello@jsolutions.nl",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "NL",
                "addressLocality": "Netherlands"
              },
              "founder": {
                "@type": "Person",
                "name": "Jarno Swinkels"
              },
              "areaServed": "Netherlands",
              "serviceType": ["AI Agents", "Chatbots", "Business Automation"],
              "priceRange": "€500-€5000"
            }),
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var theme = localStorage.getItem('theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
