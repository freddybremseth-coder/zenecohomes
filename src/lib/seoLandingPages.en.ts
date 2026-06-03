import type { SeoLandingPage } from "./seoLandingPages";

// English SEO landing pages. Keyword-led (not word-for-word from Norwegian).
// Targets international buyers: British, Dutch, Belgian, Scandinavian, Irish.
// Add new pages here + in seoEquivalents (i18n.ts).

const BOOKING = "https://appointment.chatgenius.pro/zeneco";

export const seoLandingPagesEN: SeoLandingPage[] = [
  {
    slug: "property-in-spain",
    title: "Property in Spain",
    eyebrow: "Buying property in Spain",
    hero: "Buy property in Spain with an independent advisor",
    description:
      "Find the right area, property type and buying process before you reserve. Zen Eco Homes helps international buyers assess new builds, villas, apartments and plots on the Costa Blanca.",
    seoTitle: "Buy Property in Spain | Safely, with an Advisor",
    seoDescription:
      "Thinking of buying property in Spain? Get help with area selection, new builds, villas, apartments, financing, NIE, lawyer and a safe buying process on the Costa Blanca.",
    primaryCta: { label: "Book a consultation", href: BOOKING },
    secondaryCta: { label: "Browse properties", href: "/eiendommer" },
    sections: [
      {
        heading: "Start with area and lifestyle, not just the property",
        body: [
          "Many buyers start with photos, price and number of bedrooms. Understandable — but the most important decision is usually the location. Daily life, airport access, beaches, year-round services, schools, golf, rental and resale all depend on where you buy.",
          "We help you clarify what the property is for, what budget is realistic, and which areas actually fit — before you spend time on viewings.",
        ],
        bullets: [
          "Holiday home, permanent residence, investment or retirement.",
          "Costa Blanca North, Costa Blanca South, Costa Cálida or inland.",
          "New build, resale, villa, apartment, townhouse or plot.",
        ],
      },
      {
        heading: "A safer buying process for international buyers",
        body: [
          "Spain has a different buying process. Several agents can market the same property, portals may show outdated listings, and reservations can happen quickly when the right home appears.",
          "That is why advice, financing, your NIE number, an independent lawyer and clear criteria should be in place before you reserve.",
        ],
        bullets: [
          "We assess price, area, availability and alternatives.",
          "We explain the payment plan, costs and next steps.",
          "We always recommend an independent lawyer and proper legal checks.",
        ],
      },
    ],
    faq: [
      {
        question: "Where should international buyers buy in Spain?",
        answer:
          "The Costa Blanca is a popular choice: climate, prices, flight connections and infrastructure. Costa Blanca North suits quality-focused buyers, while inland areas offer more land and tranquillity.",
      },
      {
        question: "Is it safe to buy property in Spain?",
        answer:
          "Yes, but the process needs the right checks. Use an independent lawyer, get up-to-date information on the property, and understand the contract, costs and documents before reserving.",
      },
      {
        question: "What extra costs apply when buying?",
        answer:
          "Depending on region and property, budget roughly 10–14% on top of the purchase price (taxes, notary, land registry, lawyer). New builds and resales are taxed differently — we will explain your case.",
      },
    ],
    related: [
      { label: "New build on the Costa Blanca", href: "/en/new-build-costa-blanca" },
      { label: "Property advisor for Spain", href: "/en/property-advisor-spain" },
    ],
  },
  {
    slug: "new-build-in-spain",
    title: "New build in Spain",
    eyebrow: "Buying a new build",
    hero: "Buy a new build in Spain – modern, efficient, secure",
    description:
      "New-build apartments, villas and projects across Spain with high energy efficiency and modern specifications. We guide you from selection through payment plan and bank guarantee to handover.",
    seoTitle: "New Build in Spain | Modern Properties",
    seoDescription:
      "New build in Spain: modern, energy-efficient apartments and villas. Advice on location, developer, payment plan, bank guarantee and handover — clear and secure.",
    primaryCta: { label: "Book a consultation", href: BOOKING },
    secondaryCta: { label: "Browse properties", href: "/eiendommer" },
    sections: [
      {
        heading: "The advantages of a new build",
        body: [
          "New builds offer modern layouts, good insulation, air conditioning and low running costs — often energy class A. Buying early lets you choose finishes and sometimes the layout.",
          "Spain is more than the Costa Blanca: the Costa Cálida, Costa del Sol and inland areas also offer attractive projects. The key is to settle on area and purpose before reserving.",
        ],
        bullets: [
          "Energy class A and low running costs.",
          "Modern specification, often with pool and communal areas.",
          "Choice of finishes when buying early — best units go first.",
        ],
      },
      {
        heading: "Buying a new build safely",
        body: [
          "With a new build you pay in stages as construction progresses. Deposits must be protected by a bank guarantee, and the developer should be carefully checked.",
          "We coordinate with the developer, bank and an independent lawyer so the contract, guarantees and handover dates all hold up.",
        ],
        bullets: [
          "Staged payments secured by a bank guarantee.",
          "Checks on developer, licences and handover date.",
          "Independent lawyer for the legal review.",
        ],
      },
    ],
    faq: [
      {
        question: "What should I check when buying a new build in Spain?",
        answer:
          "A vetted developer, deposits protected by a bank guarantee, a valid building licence and an independent lawyer. That keeps the purchase safe even when you pay in stages.",
      },
      {
        question: "How long does completion take?",
        answer:
          "Usually 12–24 months depending on the project. Key-ready new builds allow immediate move-in. We give you realistic timelines.",
      },
      {
        question: "Can I customise the finishes and layout?",
        answer:
          "When buying early, often yes — flooring, kitchen, bathrooms and sometimes the layout. The further the build has progressed, the less flexibility, so early advice pays off.",
      },
    ],
    related: [
      { label: "New build on the Costa Blanca", href: "/en/new-build-costa-blanca" },
      { label: "Buy property in Spain", href: "/en/property-in-spain" },
    ],
  },
  {
    slug: "new-build-costa-blanca",
    title: "New build Costa Blanca",
    eyebrow: "New build in Spain",
    hero: "New build on the Costa Blanca – modern, energy-efficient homes",
    description:
      "Modern new-build apartments, villas and projects on the Costa Blanca — with strong energy efficiency, considered design and secure guidance from selection to handover.",
    seoTitle: "New Build Costa Blanca | Modern Property in Spain",
    seoDescription:
      "New build on the Costa Blanca: modern apartments, villas and projects with high energy efficiency. Advice on location, developer, payment plan and handover.",
    primaryCta: { label: "Book a consultation", href: BOOKING },
    secondaryCta: { label: "Browse properties", href: "/eiendommer" },
    sections: [
      {
        heading: "Why new build?",
        body: [
          "New builds on the Costa Blanca offer modern layouts, high energy efficiency (often class A), air conditioning, good insulation and lower running costs. Many projects sit in sought-after locations with pools, communal areas and sea views.",
          "You typically pay as construction progresses, which spreads the investment — but means developer, bank guarantees and contract must be checked carefully.",
        ],
        bullets: [
          "Energy efficiency and low running costs.",
          "Modern specification and early-buyer choice.",
          "Staged payments with a bank guarantee.",
        ],
      },
      {
        heading: "The best locations go first",
        body: [
          "In good projects the best units — floor, aspect, corner, sea view — are taken quickly. Being prepared (budget, financing, NIE) lets you act when the right unit appears.",
          "We know the area and the developers and help you tell strong projects from weaker ones — in Dénia, Jávea, Calpe, Altea, Finestrat, Benidorm and nearby.",
        ],
        bullets: [
          "Costa Blanca North: quality, nature and sea views.",
          "Costa Blanca South: value and wide choice.",
          "We check developers, guarantees and realistic handover dates.",
        ],
      },
    ],
    faq: [
      {
        question: "How does payment work for a new build in Spain?",
        answer:
          "Typically a reservation, a deposit at contract, further instalments as building progresses, and the balance at handover. Deposits should be protected by a bank guarantee.",
      },
      {
        question: "Which Costa Blanca areas suit new build?",
        answer:
          "Costa Blanca North (Dénia, Jávea, Moraira, Calpe, Altea) is known for quality and nature. Finestrat and Benidorm offer modern projects with sea views; the south has wide choice at attractive prices.",
      },
      {
        question: "Is an energy class A rating important?",
        answer:
          "It lowers running costs and improves comfort and resale value. Most new projects today meet high standards for insulation, windows and climate control.",
      },
    ],
    related: [
      { label: "Buy property in Spain", href: "/en/property-in-spain" },
      { label: "Property advisor for Spain", href: "/en/property-advisor-spain" },
    ],
  },
  {
    slug: "property-advisor-spain",
    title: "Property advisor Spain",
    eyebrow: "Advice when buying",
    hero: "Property advisor for Spain – independent, on your side",
    description:
      "An advisor on your side: we help you understand the market, compare options and coordinate the process with agents, developers, bank and lawyer — on the Costa Blanca.",
    seoTitle: "Property Advisor Spain | Guidance When Buying",
    seoDescription:
      "Independent property advisor for Spain: market overview, area selection, comparing options, the buying process, NIE, lawyer and financing on the Costa Blanca.",
    primaryCta: { label: "Book a consultation", href: BOOKING },
    secondaryCta: { label: "Browse properties", href: "/eiendommer" },
    sections: [
      {
        heading: "What an advisor does for you",
        body: [
          "In Spain the agent often represents the seller. An advisor on your side helps you clarify your needs, find the right areas and properties, and coordinate the whole process — so you avoid costly mistakes.",
          "We are based on the Costa Blanca, know the developers and projects, and speak your language — saving you time, money and uncertainty.",
        ],
        bullets: [
          "Needs analysis: use, budget, area and timeline.",
          "Curated selection instead of a flood of listings.",
          "Coordination with agent, developer, bank, notary and lawyer.",
        ],
      },
      {
        heading: "Buy safely – step by step",
        body: [
          "The most common mistakes happen before the first viewing: the wrong lawyer, unclear taxes (Modelo 720, NIE, plusvalía) and poor exchange rates. We put the basics in the right order.",
          "Detailed legal and tax questions are always handled by independent professionals (lawyer, tax adviser) — we coordinate and keep the overview.",
        ],
        bullets: [
          "Independent lawyer, not just the seller's recommendation.",
          "NIE number and bank account before you make an offer.",
          "Clarify taxes and exchange rate before signing.",
        ],
      },
    ],
    faq: [
      {
        question: "What does a property advisor in Spain cost?",
        answer:
          "It depends on scope. Book a no-obligation first call — we will discuss how best to support you and which steps make sense.",
      },
      {
        question: "Do I still need a lawyer?",
        answer:
          "Yes. An advisor coordinates the process, but the legal review is always done by an independent lawyer. We strongly recommend this and work closely together.",
      },
      {
        question: "Which languages do you speak?",
        answer:
          "We advise international buyers and communicate in English and German, so you understand every step without a language barrier.",
      },
    ],
    related: [
      { label: "Buy property in Spain", href: "/en/property-in-spain" },
      { label: "New build on the Costa Blanca", href: "/en/new-build-costa-blanca" },
    ],
  },
  {
    slug: "plot-of-land-in-spain",
    title: "Plot of land in Spain",
    eyebrow: "Land & building",
    hero: "Buy a plot of land in Spain and build your home",
    description:
      "Your own plot on the Costa Blanca and a home built to your wishes — with guidance on buildability, licences, choosing a builder and a safe buying process.",
    seoTitle: "Buy Land in Spain | Build with Guidance",
    seoDescription:
      "Buy a plot of land in Spain and build: checks on buildability, licences and location, choosing builder and architect, and a safe buying process on the Costa Blanca.",
    primaryCta: { label: "Book a consultation", href: BOOKING },
    secondaryCta: { label: "Browse plots", href: "/eiendommer" },
    sections: [
      {
        heading: "Check buildability first, then buy",
        body: [
          "Not every plot is as buildable as it looks. Build ratio, minimum distances, connections (water, electricity) and the zoning plan decide what you may actually build.",
          "We check with a lawyer and architect what is possible on the plot — before you buy.",
        ],
        bullets: [
          "Urbano or rústico — that makes a big difference.",
          "Clarify build ratio, distances and connections.",
          "Realistic budget for plot + build + costs.",
        ],
      },
      {
        heading: "From idea to handover",
        body: [
          "Building your own home is the most individual option — but it needs planning: architect, building licence, builder and site supervision must be coordinated.",
          "We help with selection and coordination so quality, schedule and budget line up.",
        ],
        bullets: [
          "Architect and building licence (licencia de obra).",
          "Reputable builder with references and guarantees.",
          "Support all the way to handover.",
        ],
      },
    ],
    faq: [
      {
        question: "Can a foreigner buy land in Spain?",
        answer:
          "Yes. You need an NIE number and an independent lawyer. Crucially, check buildability and all licences before buying.",
      },
      {
        question: "What does building a house in Spain cost?",
        answer:
          "It depends on size, quality and location. Alongside the plot, budget for build costs, architect, licences and taxes. We help you build a realistic total budget.",
      },
      {
        question: "Urbano or rústico — what is the difference?",
        answer:
          "Urban land is intended for residential building; rural land (rústico) is heavily restricted. Always have this classification checked before buying.",
      },
    ],
    related: [
      { label: "Buy property in Spain", href: "/en/property-in-spain" },
      { label: "Property advisor for Spain", href: "/en/property-advisor-spain" },
    ],
  },
];

export function getSeoLandingPageEN(slug: string) {
  return seoLandingPagesEN.find((page) => page.slug === slug);
}
