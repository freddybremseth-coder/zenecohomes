import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, MapPin, Mountain, Palmtree, Waves } from "lucide-react";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { homeLanguageLinks } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Where to buy on the Costa Blanca | Areas guide",
  description:
    "Compare Costa Blanca North, Costa Blanca South, Costa Cálida and inland Alicante before choosing a property. Lifestyle, services, use and property type.",
  alternates: { canonical: "/en/areas" },
};

const zones = [
  {
    icon: Waves,
    title: "Costa Blanca North",
    areas: "Benidorm · Villajoyosa · Finestrat · Albir · Altea · Calpe · Moraira · Dénia",
    body: "A varied coastline with year-round cities, quieter towns, villa areas and modern developments. Distances, gradients and everyday access can differ greatly even within the same municipality.",
    goodFor: "Buyers who value sea, services, scenery and a wide choice of lifestyles.",
    href: "/en/properties?region=costa-blanca-nord",
  },
  {
    icon: Palmtree,
    title: "Costa Blanca South",
    areas: "Alicante · Santa Pola · Guardamar · Ciudad Quesada · Torrevieja · Orihuela Costa",
    body: "A large and established residential market with strong international demand. Compare micro-locations, access to services and how each area works outside the main holiday season.",
    goodFor: "Buyers looking for broad supply, established communities and easy access to beaches and services.",
    href: "/en/properties?region=costa-blanca-sor",
  },
  {
    icon: Building2,
    title: "Costa Cálida",
    areas: "San Pedro del Pinatar · San Javier · Los Alcázares · La Manga · Cartagena · Murcia",
    body: "South of Alicante, Murcia offers coastal living, golf, urban centres and modern developments. Price matters, but so do access, services, seasonality and how you plan to use the property.",
    goodFor: "Buyers open to comparing value, coast, golf and year-round use beyond Alicante.",
    href: "/en/properties?region=costa-calida",
  },
  {
    icon: Mountain,
    title: "Inland Alicante",
    areas: "Biar · Villena · Sax · Castalla · Pinoso · Monóvar · Aspe · Novelda",
    body: "More land, privacy and local Spanish life, with options ranging from modern villas to plots and fincas. Water, electricity, access, planning status and legality deserve extra attention here.",
    goodFor: "Buyers prioritising space, nature, privacy or a more rural way of life.",
    href: "/en/inland",
  },
];

export default function EnglishAreasPage() {
  return (
    <main lang="en">
      <SiteHeader locale="en" languageLinks={homeLanguageLinks("en")} />
      <section className="page-hero compact-hero image-hero">
        <p className="eyebrow">Choose the area before the property</p>
        <h1>North, south, Costa Cálida or inland?</h1>
        <p>A beautiful property can still be in the wrong place for you. We start with how you want to live, travel and use the property before narrowing the search.</p>
        <div className="hero-actions">
          <Link className="contact-button" href="/en#kontakt">Help me choose an area <ArrowRight size={18} /></Link>
          <Link className="text-button light" href="/en/properties">View properties</Link>
        </div>
      </section>
      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Four starting points</p>
          <h2>The difference is in everyday life</h2>
          <p>These broad areas are useful starting points. Within each one, individual towns, urbanisations and streets can feel very different.</p>
        </div>
        <div className="card-list">
          {zones.map((zone) => (
            <article className="info-card" key={zone.title}>
              <zone.icon />
              <div>
                <h2>{zone.title}</h2>
                <strong>{zone.areas}</strong>
                <p>{zone.body}</p>
                <p><strong>May suit you if:</strong> {zone.goodFor}</p>
                <Link className="text-button" href={zone.href}>Explore this area <ArrowRight size={15} /></Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="section proof-section">
        <div className="section-heading"><p className="eyebrow"><MapPin size={15} /> Before viewing</p><h2>Start with use, budget and location</h2></div>
        <p style={{ maxWidth: 760, margin: "0 auto", lineHeight: 1.8, textAlign: "center" }}>Zen Eco Homes focuses primarily on modern new-build properties and contemporary homes. If a resale property is clearly the better fit for your needs, we can still help you assess it rather than forcing you into the wrong product.</p>
      </section>
      <Footer locale="en" />
    </main>
  );
}
