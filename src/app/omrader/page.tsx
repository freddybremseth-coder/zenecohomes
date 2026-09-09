import { AreaExplorerMap, type AreaExplorerLocation } from "@/components/AreaExplorerMap";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { areaExcerpt, areaPresentationImage, placeBookForArea } from "@/lib/areaGuideContent";
import { getAreaMapCoordinate } from "@/lib/areaMapLocations";
import { bookUrl, type PlaceBook } from "@/lib/books";
import { homeLanguageLinks } from "@/lib/i18n";
import { areaMatchesRegion, getAreaProfiles, getProperties, regions } from "@/lib/realtyflow";

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
  const [profiles, properties] = await Promise.all([getAreaProfiles(), getProperties()]);
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
        image: areaPresentationImage(profile, properties),
        href: `#${areaAnchor(profile.name, profile.slug)}`,
        propertyHref: `/eiendommer?region=${group.key}&area=${encodeURIComponent(profile.name)}`,
      }];
    }),
  );

  const guideBooks = profiles
    .map((profile) => placeBookForArea(profile.name))
    .filter((book): book is PlaceBook => Boolean(book))
    .filter((book, index, books) => books.findIndex((item) => item.slug === book.slug) === index);

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
          flytting. Deretter gir det mening å sammenligne konkrete prosjekter og boliger. For områdene der Freddy har
          skrevet en Let Me Guide You-bok, har vi også tatt inn redigerte utdrag fra selve guiden slik at du kan lese
          deg opp her før du går videre.
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
                const image = areaPresentationImage(profile, properties);
                const book = placeBookForArea(profile.name);
                const excerpt = areaExcerpt(profile.name);
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

                      {book && excerpt.length > 0 && (
                        <div className="areas-2027-book-excerpt">
                          <p className="eyebrow">Fra Let Me Guide You: {book.title}</p>
                          {excerpt.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                        </div>
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

      {guideBooks.length > 0 && (
        <section className="areas-2027-books-end section">
          <p className="eyebrow">Videre lesning · helt til slutt</p>
          <h2>Vil du gå dypere inn i et område?</h2>
          <p>
            Områdeinnholdet over kan leses her på ZenEco Homes. Først når du er ferdig med området, kan du gå videre
            til hele Let Me Guide You-boken.
          </p>
          <div className="areas-2027-books-end-grid">
            {guideBooks.map((book) => (
              <a href={bookUrl(book.slug)} target="_blank" rel="noopener noreferrer" key={book.slug}>
                <img src={book.cover} alt={`Bokomslag: ${book.title}`} loading="lazy" />
                <span>
                  <small>Let Me Guide You</small>
                  <strong>{book.title}</strong>
                  <em>Les hele guiden på books.freddybremseth.com</em>
                </span>
              </a>
            ))}
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
