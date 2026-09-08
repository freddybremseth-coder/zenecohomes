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

export async function generateMetadata({ params }: { params: Promise<{ sted: string }> }) {
  const { sted } = await params;
  const town = getInlandTown(sted);
  return {
    title: town ? `${town.title} | ${INLAND_BRAND.name}` : "Innlandet",
    description: town?.intro || INLAND_BRAND.description,
    alternates: { canonical: `/inland/${sted}` },
  };
}

export default async function InlandTownPage({ params }: { params: Promise<{ sted: string }> }) {
  const { sted } = await params;
  const town = getInlandTown(sted);

  if (!town) {
    return (
      <main className="inland-theme">
        <SiteHeader languageLinks={homeLanguageLinks("no")} />
        <section className="page-hero compact-hero">
          <h1>Området ble ikke funnet</h1>
          <Link className="text-button light" href="/inland">
            Til innlandet
          </Link>
        </section>
        <Footer />
      </main>
    );
  }

  const properties = await getInlandShowcaseProperties();
  const otherTowns = inlandTowns.filter((item) => item.slug !== town.slug).slice(0, 4);

  return (
    <main className="inland-theme">
      <SiteHeader locale="no" languageLinks={homeLanguageLinks("no")} />

      <section className="hero inland-hero town-hero" style={{ backgroundImage: `url(${town.photo})` }}>
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">
            {INLAND_BRAND.name} · {town.eyebrow}
          </p>
          <h1>{town.title}</h1>
          <p className="hero-copy">{town.intro}</p>
          <div className="portal-actions">
            <a className="contact-button" href="#eiendommer">
              Se aktuelle innlandsboliger <ArrowRight size={18} />
            </a>
            <a className="text-button light" href="#kontakt">
              Spør oss om {town.name}
            </a>
          </div>
        </div>
      </section>

      <section className="section region-landing-grid">
        <article>
          <p className="eyebrow">Om {town.name}</p>
          <h2>Passer {town.name} for deg?</h2>
          {town.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="region-proof-list">
            {town.highlights.map((item) => (
              <span key={item}>
                <ShieldCheck size={17} /> {item}
              </span>
            ))}
          </div>
        </article>
        <aside>
          <strong>{properties.length}</strong>
          <span>kuraterte moderne innlandsboliger fra Aspe og Pinoso</span>
          <strong>Benidorm + Biar</strong>
          <span>Freddy bor i Benidorm; familien har oliveneiendom i Biar</span>
        </aside>
      </section>

      <section className="section" id="eiendommer">
        <div className="section-heading">
          <p className="eyebrow">Kuratert innlandsutvalg</p>
          <h2>Aktuelle moderne boliger fra Aspe og Pinoso</h2>
          <p>
            Disse boligene ligger i dagens relevante innlandsutvalg i Aspe og Pinoso. De vises på alle områdesidene som
            eksempler på moderne villaer og nybygg som passer innlandsstrategien. Vi viser ikke tilfeldige leiligheter eller
            objekter fra Costa Blanca sør her, og vi påstår heller ikke at en Aspe-bolig fysisk ligger i {town.name}.
          </p>
        </div>
        {properties.length > 0 ? (
          <div className="property-grid">
            {properties.slice(0, 6).map((property, index) => (
              <PropertyCard key={property.id || property.ref || index} property={property} />
            ))}
          </div>
        ) : (
          <div className="section-heading">
            <p>
              Ingen aktuelle Aspe/Pinoso-objekter akkurat nå. <a href="#kontakt">Fortell oss hva du ser etter</a>, så starter vi med område, tomt og riktig boligtype.
            </p>
          </div>
        )}
        <div className="center-action">
          <Link className="text-button" href="/eiendommer?region=innlandet">
            Se alle innlandsmuligheter <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="section area-profile-grid">
        <div className="section-heading">
          <p className="eyebrow">Flere områder</p>
          <h2>Utforsk resten av innlandet</h2>
        </div>
        {otherTowns.map((item) => (
          <article className="area-profile-card" key={item.slug}>
            <div style={{ backgroundImage: `url(${item.photo})` }} />
            <section>
              <span>{item.eyebrow}</span>
              <h2>{item.name}</h2>
              <p>{item.intro}</p>
              <Link className="text-button area-property-link" href={`/inland/${item.slug}`}>
                <MapPin size={17} /> Utforsk {item.name}
              </Link>
            </section>
          </article>
        ))}
      </section>

      <section className="contact-section" id="kontakt">
        <div>
          <p className="eyebrow">Neste steg</p>
          <h2>Nysgjerrig på {town.name}?</h2>
          <p>Fortell oss hva du ser etter, så deler vi ærlige vurderinger, aktuelle muligheter og det du bør vite om området.</p>
        </div>
        <ContactForm source={`${INLAND_BRAND.leadSource}-${town.slug}`} />
      </section>

      <Footer />
    </main>
  );
}
