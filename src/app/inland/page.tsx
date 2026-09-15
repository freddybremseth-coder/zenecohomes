import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Check, Leaf, MapPin, ShieldCheck, Sun, Zap } from "lucide-react";
import { AreaExplorerMap, type AreaExplorerLocation } from "@/components/AreaExplorerMap";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { InlandAreaFinder } from "@/components/InlandAreaFinder";
import { PropertyCard } from "@/components/PropertyCard";
import { SiteHeader } from "@/components/SiteHeader";
import { getAreaMapCoordinate } from "@/lib/areaMapLocations";
import { homeLanguageLinks } from "@/lib/i18n";
import { INLAND_BRAND, inlandTowns } from "@/lib/inland";
import { getInlandShowcaseProperties } from "@/lib/inlandShowcase";

export const metadata: Metadata = {
  title: "Innlandet i Alicante og Murcia | Tomt og moderne nybygg",
  description:
    "Velg hvor du vil bo i innlandet i Alicante og Murcia. Vi finner og kvalitetssikrer riktig tomt, og bruker moderne villaer og nybygg som boligmodeller for prosjektet ditt.",
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
    title: "Innlandet i Alicante og Murcia | Moderne bolig og tomt",
    description:
      "Velg området først. Vi finner riktig tomt og matcher den med en moderne boligmodell som kan gjennomføres innen lokale rammer og totalbudsjett.",
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
    a: "Ja. Vår jobb er først å hjelpe deg å velge riktig område og deretter finne en tomt som faktisk fungerer for prosjektet. Når tomten er kvalitetssikret, matcher vi den med en moderne boligmodell og et realistisk totalbudsjett.",
  },
  {
    q: "Kan boligmodellene fra Aspe og Pinoso bygges i de andre innlandsområdene?",
    a: "Ja. Boligene vi viser fra Aspe og Pinoso er først og fremst konkrete boligmodeller og forslag – ikke en begrensning på hvor du må bo. Moderne nyboliger kan utvikles i alle områdene vi presenterer når vi finner en tomt der regulering, byggbarhet, adkomst, vann, strøm, grunnforhold og øvrige krav tillater prosjektet. Vår oppgave er å finne og kvalitetssikre den riktige tomten i området du ønsker.",
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

function displayTownIntro(town: (typeof inlandTowns)[number]) {
  if (town.slug === "biar") {
    return "Biar er en av de best bevarte middelalderlandsbyene i Alicante-provinsen – med borg, smale gater og levende landsbyliv hele året. Freddy bor i Benidorm, mens familien har en oliveneiendom i Biar med rundt 1.500 trær.";
  }
  return town.intro;
}

export default async function InlandPage() {
  const properties = await getInlandShowcaseProperties();
  const mapLocations: AreaExplorerLocation[] = inlandTowns.flatMap((town) => {
    const coordinates = getAreaMapCoordinate(town.name);
    if (!coordinates) return [];
    return [{
      id: town.slug,
      name: town.name,
      ...coordinates,
      region: town.region === "Murcia" ? "Murcia Inland" : "Alicante Inland",
      description: displayTownIntro(town),
      image: town.photo,
      href: `/inland/${town.slug}`,
      propertyHref: "#eiendommer",
    }];
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["RealEstateAgent", "LocalBusiness"],
        "@id": "https://www.zenecohomes.com/inland#agent",
        name: INLAND_BRAND.name,
        url: "https://www.zenecohomes.com/inland",
        description:
          "Zen Eco Homes hjelper kjøpere å velge innlandsområde, finne og kvalitetssikre riktig tomt og utvikle moderne villa eller nybygg i Alicante og Murcia.",
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
          <p className="eyebrow">Alicante & Murcia Inland</p>
          <h1>Et annet Spania, litt lenger inn</h1>
          <p className="hero-copy">
            Du velger området og hvordan du vil leve. Vi finner og kvalitetssikrer riktig tomt. Deretter velger og tilpasser vi en moderne boligmodell som passer stedet, regelverket og budsjettet ditt.
          </p>
          <div className="hero-actions">
            <a className="contact-button" href="#finn-omrade">Finn ditt innlandsområde <ArrowRight size={18} /></a>
            <a className="text-button light" href="#steder">Se alle områder</a>
            <Link className="text-button light" href="/booking">Snakk med Freddy</Link>
          </div>
        </div>
      </section>

      <section className="inland-intro" id="steder">
        <div className="inland-intro-copy">
          <p className="eyebrow">Inland Journal</p>
          <h2>Innlandet er ikke ett marked</h2>
          <p>
            Biar og Banyeres gir fjell og kjøligere netter. Busot gir fjellandsby med kysten fortsatt nær. Villena og Sax gir byservice og effektiv transport. Pinoso og Hondón gir vinland, villaer og større tomter, mens Jumilla tar deg enda dypere inn i Monastrell-landet i Murcia. Velg stedet først. Boligmodellen kommer etterpå.
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

      <InlandAreaFinder />

      <AreaExplorerMap
        locations={mapLocations}
        label="Se innlandsstedene på kartet"
        intro="Velg først stedet du liker. Boligmodellene fra Aspe og Pinoso som vises lenger ned er forslag og referanser – de er ikke bundet til disse to stedene. Vi kan bruke samme type moderne nybygg i andre innlandsområder når vi finner en egnet og byggbar tomt."
      />

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
              <p>{displayTownIntro(town)}</p>
              <Link className="text-button area-property-link" href={`/inland/${town.slug}`}>
                <MapPin size={17} /> Utforsk {town.name}
              </Link>
            </div>
          </article>
        ))}
      </section>

      <section className="inland-selection" id="eiendommer">
        <div className="section-heading">
          <p className="eyebrow">Boligmodeller · ikke stedbundne objekter</p>
          <h2>Velg området først. Vi finner tomten. Boligen kommer etterpå.</h2>
          <p>
            Villaene og nybyggene du ser under er konkrete modeller og forslag vi i dag har godt presentert gjennom prosjekter i Aspe og Pinoso. Det betyr ikke at du må kjøpe eller bygge i Aspe eller Pinoso. De viser hva slags moderne bolig, planløsning, arkitektur og standard vi kan ta utgangspunkt i når vi planlegger prosjektet ditt.
          </p>
          <p>
            Ønsker du å bo i Busot, Biar, Villena, Sax, Hondón de las Nieves, Jumilla eller et av de andre områdene, starter vi der. Vi leter etter en tomt som passer ønsket ditt og kvalitetssikrer regulering, byggbarhet, adkomst, vann, strøm, grunnforhold og totaløkonomi. Når riktig tomt er funnet, matcher og tilpasser vi boligmodellen til tomten og de lokale rammene.
          </p>
          <div className="feature-panel">
            <div><MapPin /> 1. Velg området du vil bo i</div>
            <div><ShieldCheck /> 2. Vi finner og kvalitetssikrer riktig tomt</div>
            <div><Check /> 3. Vi matcher og tilpasser boligmodellen</div>
          </div>
        </div>
        {properties.length > 0 ? (
          <div className="property-grid editorial-property-grid">
            {properties.map((property, index) => (
              <PropertyCard
                key={property.id || property.ref || index}
                property={property}
                priority={index < 3}
                contextLabel="Boligmodell – kan bygges på annen egnet tomt"
              />
            ))}
          </div>
        ) : (
          <div className="section-heading">
            <p>Boligmodellene er ikke tilgjengelige akkurat nå. Fortell oss hvor du ønsker å bo og hva du ønsker å bygge, så starter vi med å finne riktig tomt.</p>
          </div>
        )}
        <div className="center-action">
          <Link className="contact-button" href="/booking">Finn riktig tomt og boligmodell <ArrowRight size={18} /></Link>
        </div>
      </section>

      <section className="inland-context">
        <div>
          <p className="eyebrow">Før tomtekjøp</p>
          <h2>Arkitekturen begynner under bakken</h2>
        </div>
        <div>
          <p>
            Før et byggeprosjekt vurderes seriøst, bør regulering, adkomst, vann, strøm, avløp, grenser og totalbudsjett være forstått. En vakker tomt er ikke nødvendigvis en byggbar tomt – derfor er tomtearbeidet selve nøkkelen til å kunne bygge boligen du ønsker i området du har valgt.
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
          <h2>Fortell oss hvor og hvordan du ønsker å bo</h2>
          <p>
            Vi starter med området du ønsker. Deretter finner og kvalitetssikrer vi tomten, før vi vurderer hvilken moderne boligmodell som passer tomten, regelverket og totalbudsjettet best.
          </p>
        </div>
        <ContactForm source={INLAND_BRAND.leadSource} />
      </section>

      <Footer />
    </main>
  );
}
