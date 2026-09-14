import Link from "next/link";
import { ArrowRight, MapPin, ShieldCheck } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { PropertyCard } from "@/components/PropertyCard";
import { SiteHeader } from "@/components/SiteHeader";
import { homeLanguageLinks } from "@/lib/i18n";
import { INLAND_BRAND, getInlandTown, inlandTowns } from "@/lib/inland";
import { getInlandLifestyleStory } from "@/lib/inlandLifestyle";
import { getInlandShowcaseProperties } from "@/lib/inlandShowcase";

export function generateStaticParams() {
  return inlandTowns.map((town) => ({ sted: town.slug }));
}

function displayTownIntro(town: (typeof inlandTowns)[number]) {
  if (town.slug === "biar") {
    return "Biar er en av de best bevarte middelalderlandsbyene i Alicante-provinsen – med borg, smale gater og levende landsbyliv hele året. Freddy bor i Benidorm, mens familien har en oliveneiendom i Biar med rundt 1.500 trær.";
  }
  return town.intro;
}

export async function generateMetadata({ params }: { params: Promise<{ sted: string }> }) {
  const { sted } = await params;
  const town = getInlandTown(sted);
  const region = town?.region || "Alicante";
  return {
    title: town ? `${town.name} | Innlandet i ${region} | Zen Eco Homes` : "Innlandet",
    description: town ? displayTownIntro(town) : INLAND_BRAND.description,
    alternates: { canonical: `/inland/${sted}` },
  };
}

export default async function InlandTownPage({ params }: { params: Promise<{ sted: string }> }) {
  const { sted } = await params;
  const town = getInlandTown(sted);

  if (!town) {
    return (
      <main className="inland-theme inland-journal">
        <SiteHeader languageLinks={homeLanguageLinks("no")} />
        <section className="page-hero compact-hero">
          <h1>Området ble ikke funnet</h1>
          <Link className="text-button light" href="/inland">Til innlandet</Link>
        </section>
        <Footer />
      </main>
    );
  }

  const properties = await getInlandShowcaseProperties();
  const otherTowns = inlandTowns.filter((item) => item.slug !== town.slug).slice(0, 6);
  const intro = displayTownIntro(town);
  const lifestyle = getInlandLifestyleStory(town.slug);

  return (
    <main className="inland-theme inland-journal inland-town-page">
      <SiteHeader locale="no" languageLinks={homeLanguageLinks("no")} />

      <section className="hero inland-hero town-hero" style={{ backgroundImage: `url(${town.photo})` }}>
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">Inland Journal · {town.eyebrow}</p>
          <h1>{town.name}</h1>
          <p className="hero-copy">{intro}</p>
          <div className="hero-actions">
            <a className="contact-button" href="#eiendommer">Se boligmodeller som kan bygges her <ArrowRight size={18} /></a>
            <a className="text-button light" href="#kontakt">Finn tomt i {town.name}</a>
            <Link className="text-button light" href="/inland">Til alle områder</Link>
          </div>
        </div>
      </section>

      <section className="inland-town-story">
        <div className="inland-town-story-heading">
          <p className="eyebrow">Om {town.name}</p>
          <h2>Passer {town.name} for deg?</h2>
        </div>
        <div className="inland-town-story-body">
          {town.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <div className="inland-town-highlights">
            {town.highlights.map((item) => (
              <span key={item}><ShieldCheck size={17} /> {item}</span>
            ))}
          </div>
        </div>
      </section>

      {lifestyle ? (
        <section className="inland-town-story inland-town-lifestyle">
          <div className="inland-town-story-heading">
            <p className="eyebrow">Livet i {town.name}</p>
            <h2>{lifestyle.title}</h2>
            <p>{lifestyle.lead}</p>
          </div>
          <div className="inland-town-story-body">
            {lifestyle.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <div className="inland-town-highlights">
              <span><ShieldCheck size={17} /> {lifestyle.suits}</span>
            </div>
          </div>
        </section>
      ) : null}

      <section className="inland-selection" id="eiendommer">
        <div className="section-heading">
          <p className="eyebrow">Boligmodeller · Aspe og Pinoso er bare utgangspunkt</p>
          <h2>Vil du bo i {town.name}? Vi finner tomten – så bygger vi riktig bolig der.</h2>
          <p>
            Villaene og nybyggene du ser under er konkrete boligmodeller og forslag som i dag er godt presentert gjennom prosjekter i Aspe og Pinoso. De er ikke en beskjed om at du må bo der. De viser arkitektur, planløsninger, standard og prisnivå vi kan bruke som utgangspunkt for et prosjekt i {town.name}.
          </p>
          <p>
            Vår oppgave er først å finne den riktige tomten i og rundt {town.name}. Når tomten er funnet, kontrollerer vi regulering, byggbarhet, adkomst, vann, strøm, grunnforhold og totaløkonomi. Deretter matcher og tilpasser vi boligmodellen til tomten og de lokale kravene. Moderne nybolig kan dermed utvikles også her når vi finner en tomt som tillater prosjektet.
          </p>
          <div className="inland-town-highlights">
            <span><MapPin size={17} /> 1. Du velger {town.name}</span>
            <span><ShieldCheck size={17} /> 2. Vi finner og kvalitetssikrer riktig tomt</span>
            <span><ShieldCheck size={17} /> 3. Boligmodellen tilpasses tomten, regelverket og budsjettet</span>
          </div>
        </div>
        {properties.length > 0 ? (
          <div className="property-grid editorial-property-grid">
            {properties.map((property, index) => (
              <PropertyCard
                key={property.id || property.ref || index}
                property={property}
                priority={index < 3}
                contextLabel={`Boligmodell – kan bygges på egnet tomt i ${town.name}`}
              />
            ))}
          </div>
        ) : (
          <div className="section-heading">
            <p>Boligmodellene er ikke tilgjengelige akkurat nå. Fortell oss hva du ønsker å bygge i {town.name}, så starter vi med å finne riktig tomt.</p>
          </div>
        )}
        <div className="center-action">
          <Link className="contact-button" href="/booking">Finn tomt og boligmodell i {town.name} <ArrowRight size={18} /></Link>
        </div>
      </section>

      <section className="inland-town-more">
        <div>
          <p className="eyebrow">Videre i innlandet</p>
          <h2>Se hvordan områdene skiller seg fra hverandre</h2>
        </div>
        <nav className="inland-index" aria-label="Flere områder i innlandet">
          {otherTowns.map((item, index) => (
            <Link href={`/inland/${item.slug}`} key={item.slug}>
              <strong>{item.name}</strong>
              <span>{String(index + 1).padStart(2, "0")}</span>
            </Link>
          ))}
        </nav>
      </section>

      <section className="inland-context">
        <div>
          <p className="eyebrow">ZenEco perspective</p>
          <h2>Område først. Tomt nummer to. Bolig nummer tre.</h2>
        </div>
        <div>
          <p>
            Et godt innlandsprosjekt starter ikke med en tilfeldig boligannonse. Først velger vi området og hverdagen du ønsker. Deretter finner vi en tomt i {town.name} som faktisk tåler prosjektet juridisk, teknisk og økonomisk. Først da låser vi boligmodell, plassering og løsninger.
          </p>
          <Link className="text-button area-property-link" href="/booking">
            <MapPin size={17} /> Snakk med Freddy om tomt i {town.name}
          </Link>
        </div>
      </section>

      <section className="contact-section" id="kontakt">
        <div>
          <p className="eyebrow">Neste steg</p>
          <h2>Vil du bygge moderne bolig i {town.name}?</h2>
          <p>Fortell oss hvordan du vil bo og omtrent hvilket budsjett du har. Vi starter med å finne og kvalitetssikre riktig tomt, og bruker deretter boligmodellene som forslag til hva prosjektet kan bli.</p>
        </div>
        <ContactForm source={`${INLAND_BRAND.leadSource}-${town.slug}`} />
      </section>

      <Footer />
    </main>
  );
}
