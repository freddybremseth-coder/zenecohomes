import type { SeoLandingPage } from "./seoLandingPages";

// English area pages (long-tail): "property in Altea", "property in Calpe" etc.
// Same factory pattern as the Norwegian localSeoLandingPages.

const localPageEN = ({
  slug,
  place,
  area,
  angle,
  highlights,
  filterHref,
  extraBody,
}: {
  slug: string;
  place: string;
  area: string;
  angle: string;
  highlights: string[];
  filterHref: string;
  extraBody: string;
}): SeoLandingPage => ({
  slug,
  title: `Property in ${place}`,
  eyebrow: `${area} · area guide`,
  hero: `Buy property in ${place}`,
  description: `${place} is worth considering if you are looking at property, a new build or an investment on the ${area}. Zen Eco Homes helps you assess area, price level, lifestyle, access and a safe buying process before you reserve.`,
  seoTitle: `Property in ${place} | New Build & Advice`,
  seoDescription: `Considering property in ${place}? Read about the area, new builds, price level, lifestyle and a safe buying process with an advisor in Spain.`,
  primaryCta: { label: `See properties in ${place}`, href: filterHref },
  secondaryCta: { label: "Compare areas", href: "/omrader" },
  sections: [
    {
      heading: `Why consider property in ${place}?`,
      body: [
        `When considering ${place}, look beyond price and photos: daily life, distance to services, sun exposure, resale, access to beach or nature, and how the place works outside high season matter just as much.`,
        angle,
      ],
      bullets: highlights,
    },
    {
      heading: `New build, resale or plot in ${place}`,
      body: [
        `The choice between new build, resale and plot should follow your budget, timeline and how much risk you want. New builds often mean a more predictable standard and lower maintenance; resales can offer more room to negotiate. A plot and building gives the most freedom but needs more thorough checks.`,
        extraBody,
      ],
      bullets: [
        "Confirm up-to-date price and availability before viewing.",
        "Compare with alternative areas and similar properties.",
        "Use a lawyer before signing binding agreements or paying a reservation.",
      ],
    },
    {
      heading: "How Zen Eco Homes helps",
      body: [
        `We help you judge whether ${place} actually fits your lifestyle, budget and buying plan. The goal is for you to understand both the opportunities and the limits before you fall for a single property.`,
      ],
      bullets: [
        "Needs analysis and a realistic budget.",
        "Assessment of area, price level and alternatives.",
        "Coordination with agent, developer, lawyer and bank where relevant.",
        "Support before, during and after the purchase.",
      ],
    },
  ],
  faq: [
    {
      question: `Is ${place} a good place to buy property in Spain?`,
      answer: `${place} can be a good choice if the area suits your use, budget and lifestyle. The key is to compare specific properties, location, services and year-round use before deciding.`,
    },
    {
      question: `Are there new builds in ${place}?`,
      answer: `New builds or newer projects may be available in or around ${place}, but availability and price change. Always confirm current status before planning a viewing or reservation.`,
    },
    {
      question: `Do I need an advisor when buying in ${place}?`,
      answer: `Advisory support can help you compare alternatives, understand the buying process and coordinate next steps with local parties. Legal review should be carried out by a qualified lawyer before binding agreements.`,
    },
  ],
  related: [
    { label: "Buy property in Spain", href: "/en/property-in-spain" },
    { label: "New build on the Costa Blanca", href: "/en/new-build-costa-blanca" },
    { label: "Property advisor for Spain", href: "/en/property-advisor-spain" },
  ],
});

export const localSeoLandingPagesEN: SeoLandingPage[] = [
  localPageEN({
    slug: "property-in-altea",
    place: "Altea",
    area: "Costa Blanca North",
    angle:
      "Altea is especially appealing to buyers who want beautiful surroundings, a whitewashed old town, a marina, views and restaurants. It combines a calmer residential feel with practical access to Albir, Benidorm, Calpe and Alicante-Elche airport.",
    highlights: [
      "For buyers who value beautiful surroundings, views and quality.",
      "Practical access to Albir, Calpe, Benidorm and services.",
      "Suited to modern apartments, villas and view projects.",
      "Can work for year-round or holiday use depending on the micro-location.",
    ],
    filterHref: "/en/properties?region=costa-blanca-nord&area=Altea",
    extraBody:
      "In Altea pay particular attention to elevation changes, driving distance to daily services, sun orientation, views, community fees and whether the area suits everyday or mainly holiday use.",
  }),
  localPageEN({
    slug: "property-in-albir",
    place: "Albir",
    area: "Costa Blanca North",
    angle:
      "Albir is a compact, practical coastal area that is relatively flat across much of the centre, close to the beach and well served with restaurants, shops and services. It can suit buyers who want an easy daily life with less reliance on a car.",
    highlights: [
      "Compact coastal area with beach, restaurants and daily services.",
      "Relatively flat and practical centre in much of the area.",
      "Near Altea, Benidorm and Alfaz del Pi.",
      "Suited to apartments, holiday and year-round use.",
    ],
    filterHref: "/en/properties?region=costa-blanca-nord&area=Albir",
    extraBody:
      "In Albir the exact position within the area matters. Some homes are within walking distance of everything; others need more driving — which affects use, rental and resale.",
  }),
  localPageEN({
    slug: "property-in-calpe",
    place: "Calpe",
    area: "Costa Blanca North",
    angle:
      "Calpe combines beach, town life, a marina, restaurants and the Peñón de Ifach landmark. It suits buyers who want a distinct coastal town with services and a choice of apartments, penthouses and villas.",
    highlights: [
      "Coastal profile with beaches, marina and town life.",
      "Suited to apartments, penthouses, villas and holiday homes.",
      "Broad services and a clear summer season.",
      "For buyers who want beachside living with urban comfort.",
    ],
    filterHref: "/en/properties?region=costa-blanca-nord&area=Calpe",
    extraBody:
      "In Calpe consider distance to the beach, noise, parking, views, building age and how well the property works outside high season.",
  }),
  localPageEN({
    slug: "property-in-finestrat",
    place: "Finestrat",
    area: "Costa Blanca North",
    angle:
      "Finestrat has a substantial presence of modern new-build development on the Costa Blanca North. Many projects combine contemporary architecture with access to Benidorm, shopping, golf and beaches such as Cala de Finestrat; views and actual journey times vary by micro-location.",
    highlights: [
      "Many modern new builds, villas and apartment projects.",
      "Near Benidorm, shopping centres, golf and beach.",
      "For buyers who want a modern standard and potential views.",
      "Compare micro-location, build phase and total price between projects.",
    ],
    filterHref: "/en/properties?region=costa-blanca-nord&area=Finestrat",
    extraBody:
      "In Finestrat compare build phases, views, road noise, access to services and what is included in the new-build price. Price levels can vary significantly between projects.",
  }),
  localPageEN({
    slug: "property-in-polop",
    place: "Polop",
    area: "Costa Blanca North",
    angle:
      "Polop suits buyers who want calmer surroundings, mountain views and the possibility of more space around the home than in denser coastal areas, while remaining within practical driving reach of Altea, La Nucía, Benidorm and the coast.",
    highlights: [
      "Calmer area with mountains, nature and views.",
      "Options for villas, townhouses and larger outdoor areas in less dense surroundings.",
      "Suited to villas, townhouses and new-build projects.",
      "Can suit buyers who want more space and do not need the beach within walking distance.",
    ],
    filterHref: "/en/properties?region=costa-blanca-nord&area=Polop",
    extraBody:
      "In Polop consider transport needs, distance to daily services, sun exposure, views and community fees — and whether you prefer a calmer daily life over a beachside location.",
  }),
  localPageEN({
    slug: "property-in-pinoso",
    place: "Pinoso",
    area: "Alicante inland",
    angle:
      "Pinoso appeals to buyers who want a large plot, calmer surroundings, nature, vineyards and the option to build or buy a modern home with more space. It is especially suited to a more rural, independent lifestyle in Spain.",
    highlights: [
      "Suited to large plots, villas, fincas and modern new build.",
      "Potential for more space and privacy than in denser coastal areas.",
      "For buyers who want nature, privacy and a long-term lifestyle.",
      "Check water, electricity, access, zoning and building permits.",
    ],
    filterHref: "/en/properties?area=Pinoso",
    extraBody:
      "In Pinoso due diligence is extra important for plots and new build. Zoning, water, electricity, access, ground conditions and total budget should be clarified before reserving or buying.",
  }),
];
