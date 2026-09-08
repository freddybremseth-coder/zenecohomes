import Link from "next/link";
import { ArrowRight, MapPin, ShieldCheck } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { PropertyCard } from "@/components/PropertyCard";
import { SiteHeader } from "@/components/SiteHeader";
import { homeLanguageLinks } from "@/lib/i18n";
import { INLAND_BRAND, getInlandTown, inlandTowns } from "@/lib/inland";
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
  return {
    title: town ? `${town.name} | Innlandet i Alicante | Zen Eco Homes` : "Innlandet",
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
            <a className="contact-button" href="#eiendommer">Se Aspe / Pinoso <ArrowRight size={18} /></a>
            <a className="text-button light" href="#kontakt">Spør om {town.name}</a>
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

      <section className="inland-selection" id="eiendommer">
        <div className="section-heading">
          <p className="eyebrow">ZenEco Inland Selection</p>
          <h2>Moderne boliger fra Aspe og Pinoso</h2>
          <p>
            Vi bruker samme kuraterte innlandspool på alle stedssidene. Boligene nedenfor er relevante moderne villaer og nybygg fra Aspe og Pinoso – de presenteres som aktuelle innlandseksempler, ikke som om de fysisk ligger i {town.name}.
          </p>
        </div>
        {properties.length > 0 ? (
          <div className="property-grid editorial-property-grid">
            {properties.slice(0, 6).map((property, index) => (
              <PropertyCard key={property.id || property.ref || index} property={property} priority={index < 2} />
            ))}
          </div>
        ) : (
          <div className="section-heading">
            <p>Ingen aktuelle Aspe/Pinoso-objekter akkurat nå. Fortell oss hva du ser etter, så starter vi med område, tomt og riktig boligtype.</p>
          </div>
        )}
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
          <h2>Område først. Bolig etterpå.</h2>
        </div>
        <div>
          <p>
            Et innlandskjøp handler like mye om avstander, lokalt hverdagsliv, vann, adkomst og tomt som om huset. Vi hjelper deg å sammenligne {town.name} med andre relevante områder før du bestemmer deg.
          </p>
          <Link className="text-button area-property-link" href="/booking">
            <MapPin size={17} /> Snakk med Freddy om innlandet
          </Link>
        </div>
      </section>

      <section className="contact-section" id="kontakt">
        <div>
          <p className="eyebrow">Neste steg</p>
          <h2>Nysgjerrig på {town.name}?</h2>
          <p>Fortell oss hva du ser etter, så deler vi vurderinger, aktuelle muligheter og det du bør vite om området.</p>
        </div>
        <ContactForm source={`${INLAND_BRAND.leadSource}-${town.slug}`} />
      </section>

      <Footer />
    </main>
  );
}
