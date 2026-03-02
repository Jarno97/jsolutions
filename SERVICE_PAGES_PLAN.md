# Dedicated Service Pages Plan

## Overview
Create 3 new pages: `/ai-agents`, `/chatbots`, and `/automations`. Each page follows a consistent structure with service-specific content.

---

## Page Structure (Same for All 3)

### 1. Hero Section
- **Headline:** Service name (e.g., "AI Agents")
- **Subheadline:** Value proposition
- **CTA:** "Get started" button linking to `/#contact`
- **Background:** Grid pattern + floating geometric elements (reused from main hero)

### 2. What is [Service]?
- **Section:** 2-column layout
- **Left:** Icon + headline + explanation
- **Right:** Visual/diagram or feature list

### 3. Use Cases
- **Section:** 3-column card grid
- **Each card:** Icon, title, description
- **6 use cases per service**

### 4. Benefits
- **Section:** Alternating layout (text left/image right, then swapped)
- **4-5 key benefits per service**

### 5. Case Study / Example
- **Section:** Featured project card (from existing Projects data)
- **Metrics:** Before/after stats
- **Quote:** Client testimonial

### 6. Related Services
- **Section:** Links to the other 2 service pages
- **Style:** Horizontal cards with icons

### 7. CTA Section
- **Headline:** "Ready to get started?"
- **Button:** Link to `/#contact`

---

## Content per Page

### `/ai-agents`
**Hero:** "Intelligent AI Agents that work 24/7"

**What is it:**
> AI agents are autonomous systems that handle complex tasks without constant supervision. They learn from interactions, make decisions, and execute workflows — freeing your team from repetitive work.

**Use Cases:**
1. Customer support triage
2. Data entry & processing
3. Schedule management
4. Lead qualification
5. Document review
6. Inventory management

**Benefits:**
- 24/7 availability
- Scalable without hiring
- Consistent quality
- Fast response times
- Learns from data

---

### `/chatbots`
**Hero:** "Conversational AI that actually understands"

**What is it:**
> Advanced chatbots powered by LLMs that engage users in natural conversation. Not just Q&A — they understand context, handle complex queries, and integrate with your systems.

**Use Cases:**
1. Website visitor engagement
2. FAQ handling
3. Booking/reservation assistance
4. Product recommendations
5. Internal employee support
6. Multi-language support

**Benefits:**
- Natural language understanding
- Instant responses
- Seamless handoff to humans
- Integrates with CRM
- Continuous learning

---

### `/automations`
**Hero:** "Eliminate repetitive tasks with smart automations"

**What is it:**
> Custom automation pipelines that connect your tools and streamline processes. From simple triggers to complex multi-step workflows — we build systems that run themselves.

**Use Cases:**
1. Invoice processing
2. Email parsing & routing
3. Data synchronization
4. Report generation
5. Social media posting
6. CRM updates

**Benefits:**
- Save hours weekly
- Zero human error
- Fast setup
- Works with existing tools
- Real-time monitoring

---

## File Structure

```
src/app/
├── ai-agents/
│   └── page.tsx
├── chatbots/
│   └── page.tsx
├── automations/
│   └── page.tsx
```

**Shared components to create:**
- `src/components/ServiceHero.tsx` (reusable hero)
- `src/components/WhatIsIt.tsx` (explanation section)
- `src/components/UseCases.tsx` (use case cards)
- `src/components/Benefits.tsx` (benefits layout)
- `src/components/RelatedServices.tsx` (service links)

---

## Implementation Order

| Step | Task | Est. Time |
|------|------|-----------|
| 1 | Create shared components (Hero, WhatIsIt, UseCases, Benefits, RelatedServices) | 2-3 hrs |
| 2 | Build AI Agents page (content + integrate components) | 1 hr |
| 3 | Build Chatbots page | 1 hr |
| 4 | Build Automations page | 1 hr |
| 5 | Add navigation links from main site | 30 min |
| 6 | Polish & mobile responsive | 30 min |

**Total: ~5-6 hours**

---

## Navigation Update

Add to main nav (main page):
- Link `/ai-agents` from "Services" dropdown or add as nav item
- Link `/chatbots` 
- Link `/automations`

---

Want me to start implementing?
