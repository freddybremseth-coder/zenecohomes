import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Check, Home, Leaf, MapPin, ShieldCheck, Sun, TreeDeciduous, Zap } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { PropertyCard } from "@/components/PropertyCard";
import { SiteHeader } from "@/components/SiteHeader";
import { homeLanguageLinks } from "@/lib/i18n";
import { INLAND_BRAND, inlandTowns } from "@/lib/inland";
import { getInlandShowcaseProperties } from "@/lib/inlandShowcase";

export const metadata: Metadata = {
  title: "Innlandet i Alicante | Tomt og moderne nybygg",
  description:
    "Utforsk tomter, moderne villaer og nybygg i innlandet rundt Biar, Villena, Sax, Pinoso, Aspe og Novelda. Sammenlign område, regulering, vann, strøm og totalbudsjett før kjøp.",
  alternates: {
    canonical: "/inland",
    languages: {
      "nb-NO": "https://www.zenecohomes.com/inland",
      "x-default": "https://www.zenecohomes.com/inland",
      "de-DE": "https://www.zenecohomes.com/de/inland",
      en: "https://www.zenecohomes.com/en/inland",
      "es-ES": "https://www.zenecohomes.com/es/interior",
    },
  },
  openGraph: {
    title: "Innlandet i Alicante | Moderne bolig og tomt",
    description:
      "Mer plass og natur – med hovedfokus på tomt, moderne villa og nybygg i utvalgte innlandsområder i Alicante.",
    url: "https://www.zenecohomes.com/inland",
    siteName: "Zen Eco Homes",
    locale: "nb_NO",
    type: "website",
  },
};

const faq = [
  {
    q: "Hvorfor vurdere innlandet fremfor kysten?",
    a: "Innlandet kan gi større tomt, mer privatliv og et roligere hverdagsliv. Til gjengjeld blir bil, avstander og teknisk infrastruktur viktigere. Valget bør styres av hvordan du faktisk vil bruke boligen.",
  },
  {
    q: "Er tomt og nybygg hovedfokuset deres i innlandet?",
    a: "Ja. Vi prioriterer tomter, moderne villaer og nybygg som kan gi mer forutsigbar standard og energieffektivitet. Dersom en eksisterende landeiendom er klart bedre for behovet ditt, kan vi også hjelpe deg å vurdere den.",
  },
  {
    q: "Hva må kontrolleres før jeg kjøper tomt?",
    a: "Regulering og byggbarhet, lovlig adkomst, vann, strøm, avløpsløsning, servitutter, grenser og realistisk totalbudsjett bør avklares før kjøp. Juridiske og tekniske kontroller skal utføres av kvalifiserte fagpersoner.",
  },
  {
    q: "Kjenner Freddy innlandet selv?",
    a: "Ja. Freddy bor i Benidorm, mens familien har en oliveneiendom i Biar med rundt 1.500 trær. Det gir praktisk kjennskap til både kysten og hverdagen, eiendommene og infrastrukturen i innlandet.",
  },
];

export default async function InlandPage() {
  const properties = await getInlandShowcaseProperties();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["RealEstateAgent", "LocalBusiness"],
        "@id": "https://www.zenecohomes.com/inland#agent",
        name: INLAND_BRAND.name,
        url: "https://www.zenecohomes.com/inland",
        description:
          "Zen Eco Homes hjelper kjøpere å vurdere tomter, moderne villaer og nybygg i utvalgte innlandsområder i Alicante.",
        parentOrganization: { "@id": "https://www.zenecohomes.com/#organization" },
        areaServed: inlandTowns.map((town) => town.name),
        founder: {
          "@type": "Person",
          name: "Freddy Bremseth",
          url: "https://www.zenecohomes.com/om-freddy",
          sameAs: "https://www.freddybremseth.com",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };

  return (
    <main className="inland-theme">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteHeader locale="no" languageLinks={homeLanguageLinks("no")} />

      <section className="hero inland-hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">Biar · Villena · Sax · Pinoso · Aspe · Novelda</p>
          <h1>Mer plass til en moderne bolig</h1>
          <p className="hero-copy">
            Innlandet kan gi større tomter, mer natur og mer privatliv enn kysten. Vi fokuserer først og fremst på
            tomt, moderne villa og nybygg – og hjelper deg å avklare område og grunnleggende forutsetninger før du binder deg.
          </p>
          <div className="hero-actions">
            <a className="contact-button" href="#eiendommer">Se aktuelle muligheter <ArrowRight size={18} /></a>
            <Link className="text-button light" href="/tomter">Se tomter</Link>
            <Link className="text-button light" href="/booking">Snakk med Freddy</Link>
          </div>
        </div>
      </section>

      <section className="trust-band inland-trust">
        <div>
          <strong>Moderne nybygg først</strong>
          <span>Tomt, villa og moderne byggeprosjekter er hovedretningen.</span>
        </div>
        <div>
          <strong>Lokal erfaring</strong>
          <span>Freddy bor i Benidorm; familien har oliveneiendom i Biar.</span>
        </div>
        <div>
          <strong>Kontroller før kjøp</strong>
          <span>Regulering, vann, strøm, adkomst og totalbudsjett må avklares.</span>
        </div>
      </section>

      <section className="section proof-section">
        <div className="section-heading">
          <p className="eyebrow">Hvem passer innlandet for?</p>
          <h2>Når plass og hverdagsliv betyr mer enn gangavstand til stranden</h2>
          <p>
            Innlandet er ikke et billigere alternativ til kysten for alle. Det er et annet valg: mer tomt og natur,
            mer bilbruk og større ansvar for å forstå infrastrukturen rundt eiendommen.
          </p>
        </div>
        <div className="proof-grid">
          <article><strong><TreeDeciduous size={22} /></strong><h3>Mer plass</h3><p>Større tomt, hage, basseng, uteområder og bedre avstand til naboer.</p></article>
          <article><strong><Home size={22} /></strong><h3>Bygg etter behov</h3><p>Moderne planløsning, energieffektivitet og materialvalg kan planlegges fra starten.</p></article>
          <article><strong><MapPin size={22} /></strong><h3>Mer spansk hverdag</h3><p>Helårsbyer og landsbyer hvor hverdagen i mindre grad styres av turistsesongen.</p></article>
        </div>
      </section>

      <section className="section split">
        <div>
          <p className="eyebrow">Før du kjøper tomt</p>
          <h2>Et fint bilde er ikke nok</h2>
          <p>
            Før en tomt eller et byggeprosjekt vurderes seriøst, bør du vite hva som faktisk kan bygges og hvilke
            kostnader som kommer før selve huset.
          </p>
          <div className="check-list">
            {[
              "Regulering, byggbarhet og kommunale rammer",
              "Lovlig og praktisk adkomst",
              "Vann, strøm og avløpsløsning",
              "Grenser, servitutter og dokumentasjon",
              "Arkitekt, lisens, grunnarbeid og realistisk buffer",
            ].map((item) => <span key={item}><Check size={18} /> {item}</span>)}
          </div>
          <p>
            Zen Eco Homes hjelper deg å samle informasjonen og koordinere neste steg. Juridiske og tekniske vurderinger
            skal gjøres av de kvalifiserte fagpersonene som er ansvarlige for hvert område.
          </p>
        </div>
        <div className="feature-panel">
          <div><ShieldCheck /> Dokumentasjon før reservasjon</div>
          <div><Zap /> Strøm og teknisk løsning</div>
          <div><Sun /> Solenergi og energieffektivitet</div>
          <div><Leaf /> Mer plass og natur</div>
        </div>
      </section>

      <section className="section area-profile-grid">
        <div className="section-heading">
          <p className="eyebrow">Velg område først</p>
          <h2>Innlandet består av ulike markeder</h2>
          <p>
            Biar, Villena, Sax, Pinoso og Hondón-dalene gir forskjellige avstander, landskap og hverdagsliv. Start med
            området, ikke med første tomt du finner.
          </p>
        </div>
        {inlandTowns.map((town) => (
          <article className="area-profile-card" key={town.slug}>
            <div style={{ backgroundImage: `url(${town.photo})` }} />
            <section>
              <span>{town.eyebrow}</span>
              <h2>{town.name}</h2>
              <p>{town.intro}</p>
              <Link className="text-button area-property-link" href={`/inland/${town.slug}`}>
                <MapPin size={17} /> Utforsk {town.name}
              </Link>
            </section>
          </article>
        ))}
      </section>

      <section className="section" id="eiendommer">
        <div className="section-heading">
          <p className="eyebrow">Kuratert innlandsutvalg</p>
          <h2>Aktuelle moderne boliger fra Aspe og Pinoso</h2>
          <p>
            For innlandssidene viser vi nå bare det relevante utvalget fra Aspe og Pinoso. Dette er moderne villaer,
            nybygg og andre passende innlandsprodukter – ikke leiligheter eller tilfeldige objekter fra Costa Blanca sør.
          </p>
        </div>
        {properties.length > 0 ? (
          <div className="property-grid">
            {properties.slice(0, 6).map((property, index) => (
              <PropertyCard key={property.id || property.ref || index} property={property} priority={index < 3} />
            ))}
          </div>
        ) : (
          <div className="section-heading">
            <p>Ingen aktuelle Aspe/Pinoso-objekter akkurat nå. Fortell oss hva du ønsker, så kan vi starte med område og tomt.</p>
          </div>
        )}
        <div className="center-action">
          <Link className="contact-button" href="/eiendommer?region=innlandet">Se alle innlandsmuligheter <ArrowRight size={18} /></Link>
        </div>
      </section>

      <section className="section proof-section">
        <div className="section-heading">
          <p className="eyebrow">Freddy og Biar</p>
          <h2>Praktisk erfaring fra innlandet – uten å late som det er det samme som kysten</h2>
          <p>
            Freddy bor i Benidorm. Familien har samtidig en oliveneiendom i Biar med rundt 1.500 trær. Arbeidet med
            eiendommen har gitt praktisk erfaring med blant annet land, vann, adkomst og forskjellene mellom kyst- og innlandsliv.
          </p>
        </div>
        <div className="center-action">
          <Link className="text-button" href="/om-freddy">Les mer om Freddy <ArrowRight size={16} /></Link>
        </div>
      </section>

      <section className="section proof-section">
        <div className="section-heading">
          <p className="eyebrow">Vanlige spørsmål</p>
          <h2>Før du bestemmer deg for innlandet</h2>
        </div>
        <div className="proof-grid inland-faq">
          {faq.map((item) => (
            <article key={item.q}><h3>{item.q}</h3><p>{item.a}</p></article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="kontakt">
        <div>
          <p className="eyebrow">Neste steg</p>
          <h2>Fortell oss hvordan du ønsker å bo</h2>
          <p>
            Tomt og moderne villa, roligere helårsbolig eller mer plass til familie og natur? Vi starter med området og
            totalbudsjettet før vi ser på konkrete alternativer.
          </p>
        </div>
        <ContactForm source={INLAND_BRAND.leadSource} />
      </section>

      <Footer />
    </main>
  );
}
