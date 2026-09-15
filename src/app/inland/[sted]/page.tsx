import Link from "next/link";
import { ArrowRight, MapPin, ShieldCheck } from "lucide-react";
import { Footer } from "@/components/Footer";
import { InlandContactForm } from "@/components/InlandContactForm";
import { PropertyCard } from "@/components/PropertyCard";
import { SiteHeader } from "@/components/SiteHeader";
import { homeLanguageLinks } from "@/lib/i18n";
import { INLAND_BRAND, getInlandTown, inlandTowns } from "@/lib/inland";
import { getInlandLifestyleStory } from "@/lib/inlandLifestyle";
import { getInlandShowcaseProperties, getInlandTownProperties } from "@/lib/inlandShowcase";

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

  const localProperties = await getInlandTownProperties(town.matchTerms);
  const hasLocalProperties = localProperties.length > 0;
  const properties = hasLocalProperties ? localProperties : await getInlandShowcaseProperties();
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
            <a className="contact-button" href="#eiendommer">
              {hasLocalProperties ? `Se aktuelle boliger i ${town.name}` : "Se boligmodeller og inspirasjon"} <ArrowRight size={18} />
            </a>
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
          {hasLocalProperties ? (
            <>
              <p className="eyebrow">Aktuelle boliger · lokale treff</p>
              <h2>Boliger i og rundt {town.name}</h2>
              <p>
                Disse boligene matcher {town.name} eller nærliggende stedsnavn som er registrert for området i datakildene våre. Tilgjengelighet, pris og prosjektdetaljer kan endres, så vi bekrefter status før visning eller reservasjon.
              </p>
              <p>
                Finner du ikke riktig bolig blant treffene, stopper ikke søket her. Vi kan også finne egnet tomt i området og vurdere en moderne boligmodell mot regulering, byggbarhet, adkomst, vann, strøm, grunnforhold og totalbudsjett.
              </p>
              <div className="inland-town-highlights">
                <span><MapPin size={17} /> Lokale treff prioriteres først</span>
                <span><ShieldCheck size={17} /> Status og dokumentasjon bekreftes før neste steg</span>
                <span><ShieldCheck size={17} /> Tomt + ny bolig er et alternativ når ferdig bolig ikke passer</span>
              </div>
            </>
          ) : (
            <>
              <p className="eyebrow">Modeller og inspirasjon · ikke lokale annonser</p>
              <h2>Ingen lokale treff akkurat nå – se hva et prosjekt i {town.name} kan ta utgangspunkt i.</h2>
              <p>
                Vi har ikke et egnet lokalt boligtreff i {town.name} i datakildene akkurat nå. Villaene og nybyggene under er derfor modeller og referanser fra Aspe og Pinoso. De ligger ikke nødvendigvis i {town.name}, og de skal ikke leses som lokale boligannonser.
              </p>
              <p>
                Hvis du vil bo i {town.name}, starter vi med å finne riktig tomt. Deretter må regulering, byggbarhet, adkomst, vann, strøm, grunnforhold og totaløkonomi kontrolleres før vi kan si om en bestemt boligmodell kan brukes eller tilpasses på tomten.
              </p>
              <div className="inland-town-highlights">
                <span><MapPin size={17} /> 1. Du velger {town.name}</span>
                <span><ShieldCheck size={17} /> 2. Vi finner og kvalitetssikrer riktig tomt</span>
                <span><ShieldCheck size={17} /> 3. Mulig boligmodell vurderes mot tomten, regelverket og budsjettet</span>
              </div>
            </>
          )}
        </div>
        {properties.length > 0 ? (
          <div className="property-grid editorial-property-grid">
            {properties.map((property, index) => (
              <PropertyCard
                key={property.id || property.ref || index}
                property={property}
                priority={index < 3}
                contextLabel={
                  hasLocalProperties
                    ? `Aktuelt treff i eller rundt ${town.name}`
                    : `Inspirasjon fra Aspe/Pinoso – mulighet i ${town.name} må verifiseres`
                }
              />
            ))}
          </div>
        ) : (
          <div className="section-heading">
            <p>Vi har ingen egnede boliger eller modellreferanser å vise akkurat nå. Fortell oss hva du ønsker i {town.name}, så starter vi med området og finner neste mulighet.</p>
          </div>
        )}
        <div className="center-action">
          <Link className="contact-button" href="/booking">
            {hasLocalProperties ? `Snakk med Freddy om bolig eller tomt i ${town.name}` : `Finn tomt og boligmulighet i ${town.name}`} <ArrowRight size={18} />
          </Link>
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
          <h2>Vil du finne bolig eller bygge moderne i {town.name}?</h2>
          <p>Fortell oss hvordan du vil bo og omtrent hvilket budsjett du har. Vi sjekker lokale boliger først. Hvis riktig bolig ikke finnes, kan vi gå videre med tomt og vurdere hvilke boligmodeller som faktisk lar seg gjennomføre der.</p>
        </div>
        <InlandContactForm source={`${INLAND_BRAND.leadSource}-${town.slug}`} />
      </section>

      <Footer />
    </main>
  );
}
