import type { Metadata } from "next";
import ServiceHero from "@/components/ServiceHero";
import WhatIsIt from "@/components/WhatIsIt";
import UseCases from "@/components/UseCases";
import CaseStudy from "@/components/CaseStudy";
import RelatedServices from "@/components/RelatedServices";
import ServiceCTA from "@/components/ServiceCTA";
import ServiceSchema from "@/components/ServiceSchema";

export const metadata: Metadata = {
  title: "AI Agents | Autonomous Systems That Work 24/7",
  description: "Deploy intelligent AI agents that handle customer support, data processing, lead qualification, and more. Scale your operations without hiring more staff.",
  keywords: ["AI agents", "artificial intelligence", "automation", "autonomous agents", "AI customer support", "lead qualification", "business automation", "AI for business", "Netherlands", "Dutch AI developer"],
  openGraph: {
    title: "AI Agents | Autonomous Systems That Work 24/7",
    description: "Deploy intelligent AI agents that handle customer support, data processing, lead qualification, and more. Scale your operations without hiring more staff.",
    url: "https://j-solutions.nl/ai-agents",
    siteName: "JSolutions",
    locale: "en_US",
    alternateLocale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Agents | Autonomous Systems That Work 24/7",
    description: "Deploy intelligent AI agents that handle customer support, data processing, lead qualification, and more.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const aiAgentsUseCases = [
  {
    icon: "🎧",
    title: "Customer Support Triage",
    titleNl: "Klantenservice Triagem",
    description: "Automatically categorize and route incoming support tickets to the right team or resolve common issues autonomously.",
    descriptionNl: "Categoriseer en router automatisch inkomende support tickets naar het juiste team of los veelvoorkomende problemen autonoom op.",
  },
  {
    icon: "📊",
    title: "Data Entry & Processing",
    titleNl: "Data-invoer & Verwerking",
    description: "Extract information from documents, forms, or emails and automatically populate your databases or CRM.",
    descriptionNl: "Haal informatie uit documenten, formulieren of e-mails en vul automatisch je databases of CRM in.",
  },
  {
    icon: "📅",
    title: "Schedule Management",
    titleNl: "Agenda Beheer",
    description: "Coordinate meetings, manage calendars, and handle scheduling conflicts without human intervention.",
    descriptionNl: "Coördineer vergaderingen, beheer agendas en los planningconflicten op zonder menselijke tussenkomst.",
  },
  {
    icon: "🎯",
    title: "Lead Qualification",
    titleNl: "Lead Kwalificatie",
    description: "Score and qualify leads based on behavior, demographics, and engagement to prioritize sales efforts.",
    descriptionNl: "Score en kwalificeer leads op basis van gedrag, demografie en betrokkenheid om verkoopinspanningen te prioriteren.",
  },
  {
    icon: "📄",
    title: "Document Review",
    titleNl: "Document Review",
    description: "Analyze contracts, proposals, or legal documents for key terms, risks, and compliance requirements.",
    descriptionNl: "Analyseer contracten, voorstellen of juridische documenten op belangrijke voorwaarden, risico's en compliance-vereisten.",
  },
  {
    icon: "📦",
    title: "Inventory Management",
    titleNl: "Voorraadbeheer",
    description: "Monitor stock levels, predict reordering needs, and automate purchase orders when inventory runs low.",
    descriptionNl: "Monitor voorraadniveaus, voorspel nabestellingen en automatiseer inkooporders wanneer voorraad laag is.",
  },
];

const aiAgentsCaseStudy = {
  client: "Mid-sized B2B SaaS",
  industry: "B2B SaaS",
  size: "~45 employees",
  challenge: "Support inbox overwhelmed with repetitive questions. 40% of tickets misrouted to wrong team. Sales team manually qualifying every inbound lead. Operations staff spending hours on CRM data cleanup. Slow response times impacting customer satisfaction. The company was hiring to keep up with demand.",
  challengeNl: "Support inbox overspoeld met repetitieve vragen. 40% van de tickets verkeerd gerouteerd naar verkeerde team. Verkoopteam handmatig elke inkomende lead kwalificeerde. Operations medewerkers uren bezig met CRM data opschonen. Trage reactietijden die klanttevredenheid beïnvloedden. Het bedrijf huurde extra mensen om de vraag bij te benen.",
  solution: "We deployed a custom AI Agent integrated with HubSpot, Slack, and Zendesk. The agent handles customer support triage, lead qualification, data processing, and internal workflow automation. Implementation took 4 weeks with no changes to existing software stack.",
  solutionNl: "We implementeerden een aangepaste AI Agent geïntegreerd met HubSpot, Slack en Zendesk. De agent afhandeling klantenservice triagem, lead kwalificatie, data verwerking en interne workflow automatisering. Implementatie duurde 4 weken zonder wijzigingen in bestaande software stack.",
  results: [
    { label: "Tickets automated", labelNl: "Tickets geautomatiseerd", value: "62%" },
    { label: "Response time ↓", labelNl: "Reactietijd ↓", value: "43%" },
    { label: "SQL increase", labelNl: "SQL toename", value: "28%" },
    { label: "CRM hours saved", labelNl: "CRM uren bespaard", value: "15h/wk" },
    { label: "CSAT improvement", labelNl: "CSAT verbetering", value: "91%" },
    { label: "Annual savings", labelNl: "Jaarlijkse besparing", value: "$120K" },
  ],
  impact: "Instead of acting as a chatbot, the AI Agent functioned as a digital operations employee. It made decisions based on context, executed multi-step workflows across tools, improved continuously from real interactions, and operated 24/7 without supervision. The team shifted from reactive manual work to higher-value strategic tasks.",
  impactNl: "In plaats van te fungeren als chatbot, functioneerde de AI Agent als een digitale operations medewerker. Het nam beslissingen op basis van context, voerde multi-stap workflows uit over tools, verbeterde continu door echte interacties en werkte 24/7 zonder supervisie. Het team schakelde van reactief handmatig werk naar hogere waarde strategische taken.",
};

export default function AIAgentsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-charcoal">
      <ServiceSchema service="ai-agents" />
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

      <UseCases useCases={aiAgentsUseCases} />

      <CaseStudy {...aiAgentsCaseStudy} />

      <RelatedServices currentService="ai-agents" />

      <ServiceCTA />
    </main>
  );
}
