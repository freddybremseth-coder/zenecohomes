import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, MapPin } from "lucide-react";
import { Footer } from "@/components/Footer";
import { MeetFreddy } from "@/components/MeetFreddy";
import { PropertyCard } from "@/components/PropertyCard";
import { SiteHeader } from "@/components/SiteHeader";
import { areaExcerpt, areaPresentationImage, placeBookForArea } from "@/lib/areaGuideContent";
import { areaProfileSlug, areaSlug } from "@/lib/areaRoutes";
import { bookUrl } from "@/lib/books";
import { homeLanguageLinks } from "@/lib/i18n";
import {
  areaMatchesRegion,
  getAreaProfiles,
  getProperties,
  propertyMatchesArea,
  regions,
  type RegionKey,
} from "@/lib/realtyflow";

const PUBLIC_REGIONS = new Set<RegionKey>(["costa-blanca-nord", "costa-blanca-sor", "costa-calida"]);

function exactTitle(name: string) {
  const candidates = [
    `${name} i Spania | Boliger og områdeguide | Zen Eco Homes`,
    `${name} | Boliger og områdeguide | Zen Eco Homes`,
    `${name} | Boliger i Spania | Zen Eco Homes`,
  ];
  return candidates.find((value) => value.length >= 50 && value.length <= 60)
    || candidates.find((value) => value.length <= 60)
    || candidates[2].slice(0, 60).replace(/\s+\S*$/, "");
}

function exactDescription(name: string) {
  let value = `Se boliger og nybygg i ${name}, Spania. Les lokal områdeguide om beliggenhet, hverdagsliv, avstander, boligtyper og hva du bør vurdere før boligkjøp.`;
  if (value.length < 140) value += " Få råd fra Zen Eco Homes.";
  if (value.length > 160) value = value.slice(0, 157).replace(/\s+\S*$/, "").trim() + "…";
  return value;
}

async function getProfile(region: RegionKey, sted: string) {
  if (!PUBLIC_REGIONS.has(region)) return null;
  const profiles = await getAreaProfiles();
  return profiles.find((profile) =>
    areaMatchesRegion(profile, region)
    && (areaProfileSlug(profile) === sted || areaSlug(profile.name) === sted)
  ) || null;
}

export async function generateStaticParams() {
  const profiles = await getAreaProfiles();
  return (["costa-blanca-nord", "costa-blanca-sor", "costa-calida"] as RegionKey[]).flatMap((region) =>
    profiles
      .filter((profile) => areaMatchesRegion(profile, region))
      .map((profile) => ({ region, sted: areaProfileSlug(profile) }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ region: RegionKey; sted: string }>;
}): Promise<Metadata> {
  const { region, sted } = await params;
  const profile = await getProfile(region, sted);
  if (!profile) return { title: "Område i Spania | Zen Eco Homes" };
  return {
    title: exactTitle(profile.name),
    description: exactDescription(profile.name),
    alternates: { canonical: `/omrader/${region}/${sted}` },
  };
}

export default async function AreaTownPage({
  params,
}: {
  params: Promise<{ region: RegionKey; sted: string }>;
}) {
  const { region, sted } = await params;
  const profile = await getProfile(region, sted);
  const selectedRegion = regions.find((item) => item.key === region);

  if (!profile || !selectedRegion) {
    return (
      <main>
        <SiteHeader languageLinks={homeLanguageLinks("no")} />
        <section className="page-hero compact-hero">
          <h1>Området ble ikke funnet</h1>
          <Link className="text-button light" href="/omrader">Til områder</Link>
        </section>
        <Footer />
      </main>
    );
  }

  const properties = await getProperties(0, "zeneco");
  const localProperties = properties.filter((property) => propertyMatchesArea(property, profile.name)).slice(0, 6);
  const excerpt = areaExcerpt(profile.name);
  const book = placeBookForArea(profile.name);
  const image = areaPresentationImage(profile, properties);

  return (
    <main>
      <SiteHeader languageLinks={homeLanguageLinks("no")} />
      <section className="page-hero compact-hero image-hero">
        <p className="eyebrow">{selectedRegion.label} · områdeguide</p>
        <h1>Bolig og hverdagsliv i {profile.name}</h1>
        <p>{profile.hero_blurb || profile.description || `Les om ${profile.name} før du velger bolig i området.`}</p>
        <div className="hero-actions">
          <Link className="contact-button" href={`/eiendommer?region=${region}&area=${encodeURIComponent(profile.name)}`}>
            Se boliger i {profile.name} <ArrowRight size={17} />
          </Link>
          <Link className="text-button light" href={`/omrader/${region}`}>Til {selectedRegion.label}</Link>
        </div>
      </section>

      <section className="section split">
        <div>
          <p className="eyebrow">Om {profile.name}</p>
          <h2>Hvordan er det å bo og kjøpe bolig her?</h2>
          {profile.description && <p>{profile.description}</p>}
          {excerpt.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <p>
            Sammenlign stedet med andre alternativer i <Link href={`/omrader/${region}`}>{selectedRegion.label}</Link>,
            eller bruk <Link href="/guide/omradeguide-eiendomskjop-i-spania">områdeguiden for boligkjøp i Spania</Link>
            dersom du fortsatt vurderer flere regioner.
          </p>
        </div>
        <div>
          <Image
            src={image}
            alt={`${profile.name} i ${selectedRegion.label}`}
            width={1200}
            height={850}
            sizes="(max-width: 800px) 100vw, 50vw"
            style={{ width: "100%", height: "auto", borderRadius: "var(--radius-2027)" }}
          />
        </div>
      </section>

      {book && (
        <section className="section proof-section">
          <div className="section-heading">
            <p className="eyebrow"><BookOpen size={14} /> Let Me Guide You</p>
            <h2>Les mer om {book.title}</h2>
            <p>{book.blurb}</p>
          </div>
          <div className="hero-actions">
            <a className="contact-button" href={bookUrl(book.slug)} target="_blank" rel="noopener noreferrer">
              Se områdeboken <ArrowRight size={17} />
            </a>
            <Link className="text-button" href="/omrader">Se alle områder</Link>
          </div>
        </section>
      )}

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow"><MapPin size={14} /> Aktuelle boliger</p>
          <h2>Boliger i {profile.name}</h2>
          <p>
            Utvalget under hentes fra den publiserte boligbasen. Bruk hele boligoversikten for flere filtre,
            eller kontakt oss dersom du vil at vi skal koordinere en kort shortlist. Før du reserverer kan du også
            bruke <Link href="/guide/kjope-bolig-i-spania">hovedguiden for å kjøpe bolig i Spania</Link> for å
            kontrollere kjøpssteg, kostnader, NIE, finansiering og juridisk oppfølging.
          </p>
        </div>
        {localProperties.length ? (
          <div className="property-grid">
            {localProperties.map((property, index) => <PropertyCard key={property.id || index} property={property} />)}
          </div>
        ) : (
          <div className="info-card">
            <h3>Ingen publiserte lokale treff akkurat nå</h3>
            <p>Utvalget endrer seg løpende. Se hele regionen eller be oss sjekke konkrete prosjekter og bruktboliger.</p>
          </div>
        )}
        <div className="hero-actions" style={{ marginTop: 28 }}>
          <Link className="contact-button" href={`/eiendommer?region=${region}&area=${encodeURIComponent(profile.name)}`}>
            Se alle boliger i {profile.name}
          </Link>
          <Link className="text-button" href="/visningstur">Planlegg visningstur</Link>
        </div>
      </section>

      <MeetFreddy />
      <Footer />
    </main>
  );
}
