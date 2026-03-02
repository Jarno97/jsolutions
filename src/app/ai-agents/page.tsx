import type { Metadata } from "next";
import ServiceHero from "@/components/ServiceHero";
import WhatIsIt from "@/components/WhatIsIt";

export const metadata: Metadata = {
  title: "AI Agents | Intelligent Automation",
  description: "Autonomous AI agents that work 24/7 to handle complex tasks. From customer support to data processing — agents that learn and adapt to your workflows.",
};

export default function AIAgentsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-charcoal">
      <ServiceHero
        title="Intelligent AI Agents that work 24/7"
        titleNl="Intelligente AI Agents die 24/7 werken"
        subtitle="Autonomous systems that handle complex tasks without constant supervision. They learn from interactions, make decisions, and execute workflows — freeing your team from repetitive work."
        subtitleNl="Autonome systemen die complexe taken uitvoeren zonder constante supervisie. Ze leren van interacties, nemen beslissingen en voeren workflows uit — waardoor je team vrijkomt van repetitief werk."
        cta="Get started →"
        ctaNl="Aan de slag →"
        icon="🤖"
      />

      <WhatIsIt
        title="What is an AI Agent?"
        titleNl="Wat is een AI Agent?"
        description={`An AI agent is an autonomous system that can perceive its environment, make decisions, and take actions to achieve specific goals. Unlike simple chatbots or automation scripts, AI agents can handle complex, multi-step processes with minimal human intervention.

They integrate with your existing tools and systems, learning from data and interactions to improve over time. Think of them as digital employees that work around the clock.`}
        descriptionNl={`Een AI agent is een autonoom systeem dat zijn omgeving kan waarnemen, beslissingen kan nemen en acties kan ondernemen om specifieke doelen te bereiken. In tegenstelling tot simpele chatbots of automatisering scripts, kunnen AI agents complexe, multi-stap processen afhandelen met minimale menselijke interventie.

Ze integreren met je bestaande tools en systemen en leren van data en interacties om in de loop der tijd te verbeteren. Denk aan ze als digitale medewerkers die 24/7 werken.`}
        icon="🤖"
        features={[
          { text: "Autonomous decision-making", textNl: "Autonoom besluitvorming" },
          { text: "Integrates with 50+ tools", textNl: "Integratie met 50+ tools" },
          { text: "Learns from data & interactions", textNl: "Leert van data en interacties" },
          { text: "Handles complex workflows", textNl: "Kan complexe workflows aan" },
          { text: "Works 24/7 without breaks", textNl: "Werkt 24/7 zonder pauzes" },
        ]}
      />
    </main>
  );
}
