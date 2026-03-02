import type { Metadata } from "next";
import ServiceHero from "@/components/ServiceHero";
import WhatIsIt from "@/components/WhatIsIt";

export const metadata: Metadata = {
  title: "Chatbots | Conversational AI",
  description: "Advanced chatbots powered by LLMs that engage users in natural conversation. Not just Q&A — they understand context and handle complex queries.",
};

export default function ChatbotsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-charcoal">
      <ServiceHero
        title="Conversational AI that actually understands"
        titleNl="Conversationele AI die echt begrijpt"
        subtitle="Advanced chatbots powered by large language models that engage users in natural, meaningful conversations. Not just Q&A — they understand context, handle complex queries, and integrate with your systems."
        subtitleNl="Geavanceerde chatbots aangedreven door large language models die gebruikers betrekken in natuurlijke, betekenisvolle gesprekken. Niet alleen Q&A — ze begrijpen context, verwerken complexe vragen en integreren met je systemen."
        cta="Get started →"
        ctaNl="Aan de slag →"
        icon="💬"
      />

      <WhatIsIt
        title="What is a Conversational AI Chatbot?"
        titleNl="Wat is een Conversationele AI Chatbot?"
        description={`A conversational AI chatbot goes beyond simple rule-based responses. Powered by large language models (LLMs), it understands natural language,上下文, and nuance — enabling truly meaningful conversations with your users.

These chatbots can handle complex queries, maintain context across multiple messages, and seamlessly handoff to human agents when needed. They're not just answering questions — they're solving problems.`}
        descriptionNl={`Een conversationele AI chatbot gaat verder dan eenvoudige regelgebaseerde reacties. Aangedreven door large language models (LLMs), begrijpt het natuurlijke taal, context en nuance — waardoor het echt betekenisvolle gesprekken met je gebruikers kan voeren.

Deze chatbots kunnen complexe vragen verwerken, context behouden over meerdere berichten en naadloos doorverbinden naar menselijke medewerkers wanneer nodig. Ze beantwoorden niet alleen vragen — ze lossen problemen op.`}
        icon="💬"
        features={[
          { text: "Natural language understanding", textNl: "Natuurlijke taalbegrip" },
          { text: "Context-aware conversations", textNl: "Context-bewuste gesprekken" },
          { text: "Seamless human handoff", textNl: "Naadloze overdracht aan mens" },
          { text: "Integrates with CRM & helpdesk", textNl: "Integratie met CRM en helpdesk" },
          { text: "Multi-language support", textNl: "Meertalige ondersteuning" },
        ]}
      />
    </main>
  );
}
