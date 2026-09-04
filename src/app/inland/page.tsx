import { Home, MapPin, Sprout, Droplets, Ruler, ShieldCheck } from "lucide-react";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { homeLanguageLinks } from "@/lib/i18n";

export const metadata = {
  title: "Inland – bolig og tomt i innlandet i Spania | Pinoso, Aspe, Novelda",
  description:
    "Utforsk innlandet på Costa Blanca: større tomter, finca-eiendommer, nybygg og ro rundt Pinoso, Aspe og Novelda. Norsk rådgivning på vann, strøm, adkomst og trygg kjøpsprosess.",
  alternates: {
    canonical: "/inland",
    languages: {
      "nb-NO": "https://www.zenecohomes.com/inland",
      "x-default": "https://www.zenecohomes.com/inland",
      "de-DE": "https://www.zenecohomes.com/de/inland",
      en: "https://www.zenecohomes.com/en/inland",
    },
  },
  openGraph: {
    title: "Inland i Spania | Zen Eco Homes",
    description:
      "Bolig, tomt og finca i innlandet på Costa Blanca. Mer plass, natur og lavere pris per kvadratmeter – med trygg norsk rådgivning.",
    url: "https://www.zenecohomes.com/inland",
    type: "website",
  },
};

const highlights = [
  {
    icon: Ruler,
    title: "Mer plass for pengene",
    text: "Større tomter og lavere pris per kvadratmeter enn ved kysten. Rom for basseng, hage, gjestehus eller dyrking.",
  },
  {
    icon: Sprout,
    title: "Ro, natur og selvforsyning",
    text: "Vingårder, mandeltrær og åpne landskap. Perfekt for en roligere hverdag og en mer selvforsynt livsstil.",
  },
  {
    icon: Droplets,
    title: "Vann, strøm og adkomst",
    text: "Vi sjekker vannkilde (kommunalt nett, vannlag, brønn eller tank), strømtilkobling og lovlig dokumentert adkomst før du binder deg.",
  },
  {
    icon: ShieldCheck,
    title: "Trygg regulering",
    text: "Rustico, urbano eller urbanizable? Vi avklarer hva du faktisk kan bygge, og hvilke tillatelser som trengs.",
  },
];

const areas = [
  {
    name: "Pinoso",
    text: "Kjent for vin, salt og landlige finca-eiendommer. Store tomter, gode byggemuligheter og et hyggelig lokalsamfunn.",
  },
  {
    name: "Aspe",
    text: "Frodig innland med druer og oliven, kort vei til Alicante og flyplass. Mer urbant tilbud kombinert med landlig ro.",
  },
  {
    name: "Novelda",
    text: "Historisk by med marmorindustri og modernistisk arkitektur. Godt utgangspunkt for tomt, nybygg og større eiendommer.",
  },
];

export default function InlandPage() {
  return (
    <main>
      <SiteHeader languageLinks={homeLanguageLinks("no")} />
      <section className="page-hero compact-hero image-hero">
        <p className="eyebrow">Ny tjeneste · Innlandet i Spania</p>
        <h1>Inland – bolig, tomt og finca i innlandet</h1>
        <p>
          Vil du ha mer plass, natur og ro enn ved kysten? I innlandet rundt Pinoso, Aspe og Novelda finner du
          større tomter, finca-eiendommer og nybygg til en lavere pris per kvadratmeter – med trygg norsk
          rådgivning hele veien.
        </p>
        <div className="hero-actions">
          <a className="contact-button" href="/tomter">
            Se tomter i innlandet
          </a>
          <a className="text-button" href="/#kontakt">
            Snakk med rådgiver
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
          <p className="eyebrow">Populære innlandsområder</p>
          <h2>Hvor i innlandet passer for deg?</h2>
          <p>
            Innlandet gir ofte mer tomt, natur og lavere pris – men vann, strøm, adkomst og regulering varierer mye
            fra eiendom til eiendom. Vi hjelper deg å sammenligne.
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
          <p className="eyebrow">Neste steg</p>
          <h2>Kyst eller innland – vi hjelper deg å velge riktig</h2>
          <p>
            Kysten gir enklere utleie, strand og mer service. Innlandet gir mer tomt, ro og natur. Valget bør styres
            av livsstil og hvordan du faktisk skal bruke boligen.
          </p>
          <div className="hero-actions">
            <a className="contact-button" href="/eiendommer">
              <Home size={18} /> Se boliger
            </a>
            <a className="text-button" href="/kjopsprosessen">
              Les om kjøpsprosessen
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
