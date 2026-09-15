import { Home, MapPin, Sprout, Droplets, Ruler, ShieldCheck } from "lucide-react";
import { Footer } from "@/components/Footer";
import { InlandAreaFinder } from "@/components/InlandAreaFinder";
import { SiteHeader } from "@/components/SiteHeader";
import { homeLanguageLinks } from "@/lib/i18n";

export const metadata = {
  title: "Inland Alicante & Murcia | Plots, fincas and modern new-build villas",
  description:
    "Explore inland Alicante and Murcia: Biar, Busot, Villena, Hondón, Pinoso, Aspe, Novelda, Jumilla and more. Choose the area first; Zen Eco Homes helps find a suitable plot and the right modern home model.",
  alternates: {
    canonical: "/en/inland",
    languages: {
      "nb-NO": "https://www.zenecohomes.com/inland",
      "x-default": "https://www.zenecohomes.com/inland",
      "de-DE": "https://www.zenecohomes.com/de/inland",
      en: "https://www.zenecohomes.com/en/inland",
      "es-ES": "https://www.zenecohomes.com/es/interior",
    },
  },
  openGraph: {
    title: "Inland Alicante & Murcia | Zen Eco Homes",
    description:
      "Choose your inland area first. We help find a suitable plot and assess which modern villa model can be built there.",
    url: "https://www.zenecohomes.com/en/inland",
    type: "website",
  },
};

const highlights = [
  {
    icon: Ruler,
    title: "Area first, plot second, home third",
    text: "Start with the place you actually want to live. We then look for a suitable plot and assess which modern home model fits the planning rules, site and budget.",
  },
  {
    icon: Sprout,
    title: "Coast-near, mountain or wine country",
    text: "Busot keeps the coast close; Biar and Banyeres bring mountain character; Pinoso, Hondón and Jumilla offer a stronger wine-country and rural feel.",
  },
  {
    icon: Droplets,
    title: "Water, power, access and ground conditions",
    text: "A plot is only interesting when the practical fundamentals work. Water, electricity, legal access, planning status and ground conditions must be checked for the specific site.",
  },
  {
    icon: ShieldCheck,
    title: "Buildability before the dream",
    text: "A villa model is inspiration, not permission to build anywhere. Planning, permitted footprint, setbacks, services and total project cost must be verified before committing to a plot.",
  },
];

const areas = [
  {
    name: "Busot",
    text: "Mountain-village character near Alicante and the coast. Useful for buyers who want more space and quiet without moving deep inland.",
  },
  {
    name: "Biar",
    text: "Historic mountain town with olive and almond landscapes, a stronger sense of seasons and a direct family connection through our olive property in the area.",
  },
  {
    name: "Villena",
    text: "A larger inland town with broad services and a high-speed rail station. Villena AV connects to Alicante in around 20 minutes by train and Madrid in a little over two hours; the station is outside the town centre.",
  },
  {
    name: "Hondón de las Nieves",
    text: "Village life among vineyards, almond and olive trees, with a long-established international-owner environment and practical links towards Aspe, Elche and the coast.",
  },
  {
    name: "Pinoso",
    text: "Wine country with a strong market for plots, country homes and modern villas. A useful reference area for the home models we show, but not the only place where a suitable model may be built.",
  },
  {
    name: "Jumilla",
    text: "A deeper inland option in the Region of Murcia, with Monastrell, bodegas, a self-contained town and open countryside for buyers who want a stronger inland identity.",
  },
];

export default function EnglishInlandPage() {
  return (
    <main lang="en">
      <SiteHeader locale="en" languageLinks={homeLanguageLinks("en")} />
      <section className="page-hero compact-hero image-hero">
        <p className="eyebrow">Alicante & Murcia Inland</p>
        <h1>Choose the area first. Then we find the plot and the right home.</h1>
        <p>
          Modern villas shown in Aspe and Pinoso are examples and home models — not a geographical restriction.
          If you prefer Busot, Biar, Villena, Hondón, Jumilla or another suitable inland area, our job is to help
          find the right plot there and assess which model can be built or adapted to it.
        </p>
        <div className="hero-actions">
          <a className="contact-button" href="#finn-omrade">
            Find your inland area
          </a>
          <a className="text-button light" href="/en#kontakt">
            Tell us where you want to live
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
          <p className="eyebrow">Different ways to live inland</p>
          <h2>Which inland area fits your everyday life?</h2>
          <p>
            Inland is not one market. Distance to the coast and airports, climate, services, plot types and planning
            conditions vary considerably. We start with how you want to live and compare locations from there.
          </p>
        </div>
      </section>

      <InlandAreaFinder locale="en" />

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

      <section className="section proof-section">
        <div className="section-heading">
          <p className="eyebrow">Modern new-build villas</p>
          <h2>The model can move. The plot has to work.</h2>
          <p>
            The Aspe and Pinoso homes give you concrete architecture, layouts, specifications and budget references.
            When you prefer another area, we use those models as a starting point and look for a plot where planning,
            permitted build size, access, water, electricity, terrain and the total project budget make the project viable.
          </p>
        </div>
      </section>

      <section className="section area-intro">
        <div className="section-heading">
          <p className="eyebrow">Next step</p>
          <h2>Tell us the lifestyle and location — not just the house</h2>
          <p>
            We can compare coast-near inland, mountain towns, wine country and deeper rural areas before choosing a
            property. That prevents the available listing from deciding where you live.
          </p>
          <div className="hero-actions">
            <a className="contact-button" href="/en/properties">
              <Home size={18} /> Browse current homes and models
            </a>
            <a className="text-button light" href="/en#kontakt">
              Get in touch
            </a>
          </div>
        </div>
      </section>

      <Footer locale="en" />
    </main>
  );
}
