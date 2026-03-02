"use client";

import Script from "next/script";

interface ServiceSchemaProps {
  service: "ai-agents" | "chatbots" | "automations";
}

export default function ServiceSchema({ service }: ServiceSchemaProps) {
  const schemas: Record<string, object> = {
    "ai-agents": {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "AI Agents",
      "description": "Autonomous AI agents that work 24/7 to handle customer support, data processing, lead qualification, and complex business workflows.",
      "provider": {
        "@type": "Organization",
        "name": "JSolutions",
        "url": "https://jsolutions.nl",
      },
      "serviceType": "AI Agents",
      "areaServed": "Netherlands",
      "offers": {
        "@type": "Offer",
        "priceRange": "€750-€5000",
      },
    },
    "chatbots": {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "AI Chatbots",
      "description": "Conversational AI chatbots powered by large language models that understand context and engage customers naturally.",
      "provider": {
        "@type": "Organization",
        "name": "JSolutions",
        "url": "https://jsolutions.nl",
      },
      "serviceType": "Chatbots",
      "areaServed": "Netherlands",
      "offers": {
        "@type": "Offer",
        "priceRange": "€750-€5000",
      },
    },
    "automations": {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Business Automation",
      "description": "Custom automation pipelines that connect business tools and streamline processes, eliminating repetitive manual tasks.",
      "provider": {
        "@type": "Organization",
        "name": "JSolutions",
        "url": "https://jsolutions.nl",
      },
      "serviceType": "Business Automation",
      "areaServed": "Netherlands",
      "offers": {
        "@type": "Offer",
        "priceRange": "€750-€5000",
      },
    },
  };

  return (
    <Script
      id={`schema-${service}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas[service]) }}
    />
  );
}
