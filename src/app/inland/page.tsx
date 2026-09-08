import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Check, Leaf, MapPin, ShieldCheck, Sun, Zap } from "lucide-react";
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
    <main className="inland-theme inland-journal">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteHeader locale="no" languageLinks={homeLanguageLinks("no")} />

      <section className="hero inland-hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">Alicante Inland · 38°37′ N</p>
          <h1>Et annet Spania, litt lenger inn</h1>
          <p className="hero-copy">
            Større tomter, roligere omgivelser og moderne villaer mellom vinmarker, fjell og levende småbyer. Vi starter med området – og med hva som faktisk kan bygges og fungere i hverdagen.
          </p>
          <div className="hero-actions">
            <a className="contact-button" href="#steder">Utforsk områdene <ArrowRight size={18} /></a>
            <a className="text-button light" href="#eiendommer">Se Aspe / Pinoso</a>
            <Link className="text-button light" href="/booking">Snakk med Freddy</Link>
          </div>
        </div>
      </section>

      <section className="inland-intro" id="steder">
        <div className="inland-intro-copy">
          <p className="eyebrow">Inland Journal</p>
          <h2>Innlandet er ikke ett marked</h2>
          <p>
            Biar og Banyeres gir fjell og kjøligere netter. Villena og Sax gir byservice og effektiv transport. Pinoso og Aspe har et mer etablert marked for moderne villaer og tomt. Velg stedet før du velger huset.
          </p>
        </div>
        <nav className="inland-index" aria-label="Områder i innlandet">
          {inlandTowns.map((town, index) => (
            <a href={`#${town.slug}`} key={town.slug}>
              <strong>{town.name}</strong>
              <span>{String(index + 1).padStart(2, "0")}</span>
            </a>
          ))}
        </nav>
      </section>

      <section className="inland-places" aria-label="Områdeprofiler">
        {inlandTowns.map((town, index) => (
          <article className="inland-place" id={town.slug} key={town.slug}>
            <div className="inland-place-image" style={{ backgroundImage: `url(${town.photo})` }} role="img" aria-label={town.name} />
            <div className="inland-place-copy">
              <div className="inland-place-meta">
                <span className="inland-place-number">{String(index + 1).padStart(2, "0")}</span>
                <span>{town.eyebrow}</span>
              </div>
              <h2>{town.name}</h2>
              <p>{town.intro}</p>
              <Link className="text-button area-property-link" href={`/inland/${town.slug}`}>
                <MapPin size={17} /> Utforsk {town.name}
              </Link>
            </div>
          </article>
        ))}
      </section>

      <section className="inland-selection" id="eiendommer">
        <div className="section-heading">
          <p className="eyebrow">ZenEco Inland Selection</p>
          <h2>Moderne boliger fra Aspe og Pinoso</h2>
          <p>
            Dette er den kuraterte innlandspoolen vi bruker på områdesidene: relevante moderne villaer, nybygg og passende innlandsprodukter fra Aspe og Pinoso – ikke tilfeldige kystleiligheter.
          </p>
        </div>
        {properties.length > 0 ? (
          <div className="property-grid editorial-property-grid">
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

      <section className="inland-context">
        <div>
          <p className="eyebrow">Før tomtekjøp</p>
          <h2>Arkitekturen begynner under bakken</h2>
        </div>
        <div>
          <p>
            Før et byggeprosjekt vurderes seriøst, bør regulering, adkomst, vann, strøm, avløp, grenser og totalbudsjett være forstått. En vakker tomt er ikke nødvendigvis en byggbar tomt.
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
          <div className="feature-panel">
            <div><ShieldCheck /> Dokumentasjon før reservasjon</div>
            <div><Zap /> Teknisk infrastruktur</div>
            <div><Sun /> Energieffektivitet og sol</div>
            <div><Leaf /> Plass, natur og privatliv</div>
          </div>
        </div>
      </section>

      <section className="inland-context">
        <div>
          <p className="eyebrow">Freddy · Benidorm / Biar</p>
          <h2>Kysten som base. Innlandet som erfaring.</h2>
        </div>
        <div>
          <p>
            Freddy bor i Benidorm. Familien har samtidig en oliveneiendom i Biar med rundt 1.500 trær. Det gir praktisk erfaring med land, vann, adkomst og forskjellen mellom et hus som fungerer på ferie og et sted som fungerer i hverdagen.
          </p>
          <Link className="text-button" href="/om-freddy">Les mer om Freddy <ArrowRight size={16} /></Link>
        </div>
      </section>

      <section className="section proof-section">
        <div className="section-heading">
          <p className="eyebrow">Vanlige spørsmål</p>
          <h2>Før du velger innlandet</h2>
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
            Tomt og moderne villa, roligere helårsbolig eller mer plass til familie og natur? Vi starter med området og totalbudsjettet før vi ser på konkrete alternativer.
          </p>
        </div>
        <ContactForm source={INLAND_BRAND.leadSource} />
      </section>

      <Footer />
    </main>
  );
}
