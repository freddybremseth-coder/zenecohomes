import { Home, MapPin, Sprout, Droplets, Ruler, ShieldCheck } from "lucide-react";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { homeLanguageLinks } from "@/lib/i18n";

export const metadata = {
  title: "Inland – property and plots in the Spanish interior | Pinoso, Aspe, Novelda",
  description:
    "Explore the Costa Blanca interior: larger plots, finca properties, new builds and peace and quiet around Pinoso, Aspe and Novelda. English-speaking advice on water, power, access and a safe buying process.",
  alternates: {
    canonical: "/en/inland",
    languages: {
      "nb-NO": "https://www.zenecohomes.com/inland",
      "x-default": "https://www.zenecohomes.com/inland",
      "de-DE": "https://www.zenecohomes.com/de/inland",
      en: "https://www.zenecohomes.com/en/inland",
    },
  },
  openGraph: {
    title: "Inland in Spain | Zen Eco Homes",
    description:
      "Property, plots and fincas in the Costa Blanca interior. More space, nature and lower price per square metre – with trusted English-speaking advice.",
    url: "https://www.zenecohomes.com/en/inland",
    type: "website",
  },
};

const highlights = [
  {
    icon: Ruler,
    title: "More space for your money",
    text: "Larger plots and a lower price per square metre than on the coast. Room for a pool, garden, guest house or growing your own.",
  },
  {
    icon: Sprout,
    title: "Peace, nature and self-sufficiency",
    text: "Vineyards, almond trees and open landscapes. Perfect for a calmer everyday life and a more self-sufficient lifestyle.",
  },
  {
    icon: Droplets,
    title: "Water, power and access",
    text: "We check the water source (mains, water community, well or tank), electricity connection and legally documented access before you commit.",
  },
  {
    icon: ShieldCheck,
    title: "Safe zoning",
    text: "Rústico, urbano or urbanizable? We clarify what you can actually build and which permits are required.",
  },
];

const areas = [
  {
    name: "Pinoso",
    text: "Known for wine, salt and rural finca properties. Large plots, good building potential and a welcoming community.",
  },
  {
    name: "Aspe",
    text: "Lush interior with grapes and olives, a short drive to Alicante and the airport. More amenities combined with rural calm.",
  },
  {
    name: "Novelda",
    text: "Historic town with marble industry and modernist architecture. A great base for plots, new builds and larger properties.",
  },
];

export default function EnglishInlandPage() {
  return (
    <main lang="en">
      <SiteHeader locale="en" languageLinks={homeLanguageLinks("en")} />
      <section className="page-hero compact-hero image-hero">
        <p className="eyebrow">New service · The Spanish interior</p>
        <h1>Inland – property, plots and fincas in the interior</h1>
        <p>
          Want more space, nature and quiet than on the coast? In the interior around Pinoso, Aspe and Novelda you
          will find larger plots, finca properties and new builds at a lower price per square metre – with trusted
          English-speaking advice all the way.
        </p>
        <div className="hero-actions">
          <a className="contact-button" href="/tomter">
            View plots inland
          </a>
          <a className="text-button light" href="/en#kontakt">
            Talk to an advisor
          </a>
        </div>
      </section>

      <section className="section card-list">
        {highlights.map((item) => (
          <article className="info-card" key={item.title}>
            <item.icon />
            <div>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="section area-intro">
        <div className="section-heading">
          <p className="eyebrow">Popular inland areas</p>
          <h2>Where in the interior suits you?</h2>
          <p>
            The interior often gives you more land, nature and lower prices – but water, power, access and zoning
            vary a lot from property to property. We help you compare.
          </p>
        </div>
      </section>

      <section className="section card-list">
        {areas.map((area) => (
          <article className="info-card" key={area.name}>
            <MapPin />
            <div>
              <h2>{area.name}</h2>
              <p>{area.text}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="section area-intro">
        <div className="section-heading">
          <p className="eyebrow">Next step</p>
          <h2>Coast or interior – we help you choose right</h2>
          <p>
            The coast gives easier rentals, the beach and more amenities. The interior gives more land, quiet and
            nature. The choice should be driven by lifestyle and how you will actually use the home.
          </p>
          <div className="hero-actions">
            <a className="contact-button" href="/en/properties">
              <Home size={18} /> Browse properties
            </a>
            <a className="text-button light" href="/en#kontakt">
              Get in touch
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
