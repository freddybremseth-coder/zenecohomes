import { AreaExplorerMap, type AreaExplorerLocation } from "@/components/AreaExplorerMap";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { getAreaMapCoordinate } from "@/lib/areaMapLocations";
import { homeLanguageLinks } from "@/lib/i18n";
import { areaMatchesRegion, getAreaProfiles, regions } from "@/lib/realtyflow";

export const metadata = {
  title: "Områder i Spania for boligkjøp | Costa Blanca, Costa Cálida og Alicante",
  description:
    "Finn riktig område for boligkjøp i Spania. Sammenlign Costa Blanca Nord, Costa Blanca Sør, Costa Cálida og utvalgte områder før du velger bolig.",
  alternates: { canonical: "/omrader" },
  openGraph: {
    title: "Områder i Spania for boligkjøp | Zen Eco Homes",
    description:
      "Sammenlign områder før du kjøper bolig i Spania: Costa Blanca Nord, Costa Blanca Sør, Costa Cálida og utvalgte byer.",
    url: "https://www.zenecohomes.com/omrader",
    type: "website",
  },
};

export const dynamic = "force-dynamic";

function areaAnchor(name: string, slug?: string | null) {
  const base = slug || name;
  return `area-${base
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")}`;
}

export default async function AreasPage() {
  const profiles = await getAreaProfiles();
  const groupedProfiles = regions.map((region) => ({
    ...region,
    profiles: profiles.filter((profile) => areaMatchesRegion(profile, region.key)),
  }));

  const mapLocations: AreaExplorerLocation[] = groupedProfiles.flatMap((group) =>
    group.profiles.flatMap((profile) => {
      const coordinates = getAreaMapCoordinate(profile.name);
      if (!coordinates) return [];
      return [{
        id: `${group.key}-${profile.id || profile.slug || profile.name}`,
        name: profile.name,
        ...coordinates,
        region: profile.region || group.label,
        description: profile.hero_blurb || profile.description || group.description,
        image: profile.photo_url || "/assets/areas.jpg",
        href: `#${areaAnchor(profile.name, profile.slug)}`,
        propertyHref: `/eiendommer?region=${group.key}&area=${encodeURIComponent(profile.name)}`,
      }];
    }),
  );

  return (
    <main className="areas-2027-page">
      <SiteHeader languageLinks={homeLanguageLinks("no")} />

      <section className="areas-2027-hero">
        <div className="areas-2027-hero-image" aria-hidden="true" />
        <div className="areas-2027-hero-overlay" />
        <div className="areas-2027-hero-copy">
          <p className="eyebrow">ZenEco Area Journal</p>
          <h1>Velg området før du velger boligen</h1>
          <p>
            Costa Blanca er ikke ett marked. Landskap, prisnivå, service, internasjonalt miljø og hverdagsliv endrer
            seg merkbart fra nord til sør og videre inn i landet. Start med stedet som passer livet du vil ha.
          </p>
        </div>
      </section>

      <nav className="areas-2027-index" aria-label="Regioner">
        {groupedProfiles.map((group, index) => (
          <a href={`#${group.key}`} key={group.key}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{group.label}</strong>
          </a>
        ))}
      </nav>

      <section className="areas-2027-intro section">
        <p className="eyebrow">Områdevalg</p>
        <h2>En flott bolig i feil område blir sjelden et godt kjøp.</h2>
        <p>
          Se først på hvordan du ønsker å bruke boligen: helårsbolig, ferie, vinterbase, investering eller fremtidig
          flytting. Deretter gir det mening å sammenligne konkrete prosjekter og boliger.
        </p>
      </section>

      <AreaExplorerMap
        locations={mapLocations}
        label="Se hvor områdene faktisk ligger"
        intro="Navnet alene sier ofte lite. Trykk på en markør for en kort forklaring, og gå videre til områdehistorien eller boligene hvis stedet virker interessant."
      />

      {groupedProfiles.map((group, groupIndex) => (
        <section className="areas-2027-region" id={group.key} key={group.key}>
          <header className="areas-2027-region-header">
            <div>
              <span>{String(groupIndex + 1).padStart(2, "0")}</span>
              <p className="eyebrow">Region</p>
              <h2>{group.label}</h2>
              <p>{group.description}</p>
            </div>
            <div className="areas-2027-region-actions">
              <a className="text-button" href={`/omrader/${group.key}`}>Les regionguide</a>
              <a className="text-button" href={`/eiendommer?region=${group.key}`}>Se boliger i regionen</a>
            </div>
          </header>

          <div className="areas-2027-journal">
            {group.profiles.length > 0 ? (
              group.profiles.map((profile, index) => {
                const image = profile.photo_url || "/assets/areas.jpg";
                return (
                  <article
                    className={`areas-2027-story${index % 2 ? " reverse" : ""}`}
                    id={areaAnchor(profile.name, profile.slug)}
                    key={profile.id || profile.slug || profile.name}
                  >
                    <div className="areas-2027-story-image">
                      <img src={image} alt={profile.name} loading={groupIndex === 0 && index < 2 ? "eager" : "lazy"} />
                    </div>
                    <div className="areas-2027-story-copy">
                      <span className="areas-2027-story-number">{String(index + 1).padStart(2, "0")}</span>
                      <p className="eyebrow">{profile.region || group.label}</p>
                      <h3>{profile.name}</h3>
                      {profile.hero_blurb && <strong>{profile.hero_blurb}</strong>}
                      {profile.description && <p>{profile.description}</p>}
                      {Array.isArray(profile.highlights) && profile.highlights.length > 0 && (
                        <ul>
                          {profile.highlights.slice(0, 4).map((highlight) => <li key={highlight}>{highlight}</li>)}
                        </ul>
                      )}
                      <div className="areas-2027-story-actions">
                        <a className="text-button" href={`/eiendommer?region=${group.key}&area=${encodeURIComponent(profile.name)}`}>
                          Se boliger i {profile.name}
                        </a>
                        <a className="text-button subtle" href={`/omrader/${group.key}`}>
                          Utforsk regionen
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })
            ) : (
              <div className="areas-2027-empty">
                <p>Vi bygger ut områdeprofilene for denne regionen. Regionguiden og boligene er allerede tilgjengelige.</p>
                <a className="text-button" href={`/omrader/${group.key}`}>Les regionguide</a>
              </div>
            )}
          </div>
        </section>
      ))}

      <section className="areas-2027-closing section">
        <p className="eyebrow">Usikker på hvor du passer best?</p>
        <h2>Beskriv hverdagen du vil ha. Så snevrer vi inn områdene før vi ser på boliger.</h2>
        <div>
          <a className="contact-button" href="/#boligmatch">Start Boligmatchen</a>
          <a className="text-button" href="/booking">Book en prat</a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
