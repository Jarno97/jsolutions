import type { Metadata } from "next";
import ServiceHero from "@/components/ServiceHero";
import WhatIsIt from "@/components/WhatIsIt";

export const metadata: Metadata = {
  title: "Automations | Smart Business Processes",
  description: "Custom automation pipelines that connect your tools and streamline processes. From simple triggers to complex workflows — we build systems that run themselves.",
};

export default function AutomationsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-charcoal">
      <ServiceHero
        title="Eliminate repetitive tasks with smart automations"
        titleNl="Elimineer repetitieve taken met slimme automatisering"
        subtitle="Custom automation pipelines that connect your tools and streamline processes. From simple triggers to complex multi-step workflows — we build systems that run themselves so you can focus on what matters."
        subtitleNl="Aangepaste automatisering pipelines die je tools verbinden en processen stroomlijnen. Van eenvoudige triggers tot complexe multi-stap workflows — we bouwen systemen die zichzelf draaien zodat jij je kunt richten op wat belangrijk is."
        cta="Get started →"
        ctaNl="Aan de slag →"
        icon="⚡"
      />

      <WhatIsIt
        title="What is Business Automation?"
        titleNl="Wat is Bedrijfsautomatisering?"
        description={`Business automation uses technology to automate repetitive, manual tasks that would otherwise consume your team's time. Unlike AI agents or chatbots, automations follow predefined rules and triggers — executing consistently every time.

We build custom automation pipelines that connect your existing tools — CRM, email, spreadsheets, databases, and more — into seamless workflows that run automatically.`}
        descriptionNl={`Bedrijfsautomatisering gebruikt technologie om repetitieve, handmatige taken te automatiseren die anders de tijd van je team zouden consumeeren. In tegenstelling tot AI agents of chatbots volgen automatiseringen vooraf gedefinieerde regels en triggers — die consistent elke keer worden uitgevoerd.

We bouwen aangepaste automatisering pipelines die je bestaande tools verbinden — CRM, e-mail, spreadsheets, databases en meer — in naadloze workflows die automatisch draaien.`}
        icon="⚡"
        features={[
          { text: "Connects 50+ business tools", textNl: "Verbindt 50+ business tools" },
          { text: "Eliminates manual data entry", textNl: "Elimineert handmatige data-invoer" },
          { text: "Runs on triggers or schedule", textNl: "Draait op triggers of schema" },
          { text: "Real-time error handling", textNl: "Real-time foutafhandeling" },
          { text: "Detailed activity logs", textNl: "Gedetailleerde activiteitenlogboeken" },
        ]}
      />
    </main>
  );
}
