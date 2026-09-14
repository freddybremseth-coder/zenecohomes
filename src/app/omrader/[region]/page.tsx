import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, MapPin, ShieldCheck } from "lucide-react";
import { Footer } from "@/components/Footer";
import { MeetFreddy } from "@/components/MeetFreddy";
import { PropertyCard } from "@/components/PropertyCard";
import { SiteHeader } from "@/components/SiteHeader";
import { areaExcerpt, areaPresentationImage, placeBookForArea } from "@/lib/areaGuideContent";
import { booksForRegion, bookUrl, generalGuideBook } from "@/lib/books";
import { homeLanguageLinks } from "@/lib/i18n";
import {
  areaMatchesRegion,
  getAreaProfiles,
  getProperties,
  propertyMatchesRegion,
  type RegionKey,
  regions,
} from "@/lib/realtyflow";

const regionCopy: Record<RegionKey, { title: string; intro: string; proof: string[] }> = {
  "costa-blanca-nord": {
    title: "Nybygg på Costa Blanca Nord",
    intro:
      "Costa Blanca Nord passer for deg som vil kombinere fjell, hav, etablerte byer og en mer eksklusiv helårsprofil. Her finner du Altea, Albir, Calpe, Finestrat, Polop, Moraira, Javea og Denia.",
    proof: ["Sterke områder for helårsbruk", "God forbindelse til Alicante og Valencia", "Mange moderne villa- og leilighetsprosjekter"],
  },
  "costa-blanca-sor": {
    title: "Nybygg på Costa Blanca Sør",
    intro:
      "Costa Blanca Sør har et stort og variert boligtilbud og mange områder som passer for strandliv, golf og enkel hverdag. Her finner du blant annet Torrevieja, Orihuela Costa, Guardamar, Ciudad Quesada og Santa Pola.",
    proof: ["Stort utvalg av nybygg", "Mange golf- og strandnære prosjekter", "Praktisk forbindelse til Alicante-Elche flyplass"],
  },
  "costa-calida": {
    title: "Nybygg på Costa Calida",
    intro:
      "Costa Calida og Murcia-regionen passer for deg som ønsker nye prosjekter, golfresorter, roligere omgivelser og et annet alternativ til Costa Blanca. Områdene rundt Los Alcazares, San Pedro del Pinatar, La Manga og Altaona er særlig aktuelle.",
    proof: ["Bredt utvalg av nybygg og golfprosjekter", "Mar Menor, Middelhavet og roligere kystbyer", "Murcia-regionen som alternativ til Costa Blanca"],
  },
  innlandet: {
    title: "Bolig i innlandet i Alicante og Murcia",
    intro:
      "Innlandet passer for deg som vil ha spanske landsbyer og byer, større tomter, fincaer og moderne villaer med mer plass rundt boligen. Avstanden til kyst og flyplass varierer betydelig etter område. Her finner du blant annet Biar, Busot, Villena, Sax, Castalla, Pinoso, Hondón de las Nieves, Aspe, Novelda og Jumilla.",
    proof: ["Fincaer, landsbyhus, tomter og moderne villaer", "Mange levende helårssamfunn", "Lokal erfaring gjennom familiens oliveneiendom i Biar"],
  },
};

const regionFaq: Record<RegionKey, { q: string; a: string }[]> = {
  "costa-blanca-nord": [
    {
      q: "Hvor langt er det til flyplassen fra Costa Blanca Nord?",
      a: "Det varierer med sted. Med bil er Altea rundt 44 minutter, Calpe rundt 52 minutter og Dénia rundt 1 time og 7 minutter fra Alicante-Elche flyplass under normale forhold. Dénia og Jávea kan også ha Valencia flyplass som et alternativ.",
    },
    {
      q: "Kan man bo på Costa Blanca Nord hele året?",
      a: "Ja. Mange av byene er etablerte helårssamfunn med butikker, skoler, helsetjenester og lokalt næringsliv også utenom turistsesongen. Servicenivået varierer mellom kommunene.",
    },
    {
      q: "Er Costa Blanca Nord dyrere enn Costa Blanca Sør?",
      a: "Det finnes ikke én prisforskjell som gjelder hele nord og sør. Pris påvirkes av by, nabolag, utsikt, nybyggstandard, tomt og avstand til sjøen. Vi sammenligner derfor konkrete områder og boliger fremfor å bruke én regionpris.",
    },
  ],
  "costa-blanca-sor": [
    {
      q: "Hvorfor velge Costa Blanca Sør?",
      a: "Sør har et stort utvalg av nybygg, mange golfbaner, lange strender og store internasjonale miljøer. Pris og standard varierer betydelig mellom de enkelte områdene og prosjektene.",
    },
    {
      q: "Hvor nær er flyplassen fra Costa Blanca Sør?",
      a: "Avstanden varierer mye: Santa Pola er rundt 13 minutter med bil fra Alicante-Elche flyplass, Guardamar rundt 29 minutter, Torrevieja rundt 41 minutter og Orihuela Costa rundt 49 minutter under normale forhold.",
    },
    {
      q: "Passer Costa Blanca Sør for helårsbruk?",
      a: "Ja, mange steder har store etablerte helårsmiljøer og god service. Enkelte rene ferieurbanisasjoner er likevel betydelig roligere utenfor høysesongen, så vi vurderer det konkrete området.",
    },
  ],
  "costa-calida": [
    {
      q: "Hva kjennetegner Costa Cálida?",
      a: "Murcia-kysten omfatter blant annet Mar Menor, Middelhavskyst, golfresorter og både ferieområder og helårssamfunn. Karakteren varierer mye mellom La Manga, San Pedro del Pinatar, Los Alcázares og områdene lenger inn i regionen.",
    },
    {
      q: "Hvilken flyplass bruker man på Costa Cálida?",
      a: "Región de Murcia International Airport (Corvera) betjener Murcia-regionen. Alicante-Elche flyplass kan også være praktisk fra deler av den nordlige Costa Cálida; hvilken som er best avhenger av det konkrete stedet og flytilbudet.",
    },
    {
      q: "Er Costa Cálida rimeligere enn Costa Blanca?",
      a: "Ikke nødvendigvis. Pris avhenger av sted, prosjekt, boligtype, kvalitet og tilbud i markedet. Vi sammenligner konkrete alternativer i stedet for å anta at én hel region alltid er billigere enn en annen.",
    },
  ],
  innlandet: [
    {
      q: "Hvor langt er innlandet fra kysten og flyplassen?",
      a: "Det varierer betydelig. Flere områder i Alicante-provinsen ligger omtrent 20–60 minutter fra Alicante-Elche flyplass, mens dypere innlandsområder ligger lenger unna. Jumilla ligger for eksempel rundt 1 time og 15 minutter med bil fra Alicante-Elche flyplass og rundt 1 time og 4 minutter fra Murcia (Corvera). Kystavstanden varierer tilsvarende.",
    },
    {
      q: "Hva får jeg for pengene i innlandet kontra kysten?",
      a: "Innlandet gir ofte mulighet til å vurdere større tomter, fincaer, landsbyhus og moderne villaer på egen tomt. Men pris og byggekostnad må vurderes konkret sammen med tomt, regulering, vann, strøm, adkomst og grunnforhold.",
    },
    {
      q: "Er innlandslandsbyene levende hele året?",
      a: "Mange innlandsbyer har et lokalt helårsliv basert på landbruk, industri, handel og tjenester, men størrelse og servicetilbud varierer. Derfor vurderer vi skole, helsetjenester, butikker og transport for det konkrete stedet kunden vurderer.",
    },
  ],
};

export function generateStaticParams() {
  return regions.map((region) => ({ region: region.key }));
}

export async function generateMetadata({ params }: { params: Promise<{ region: RegionKey }> }) {
  const { region } = await params;
  const copy = regionCopy[region];
  return {
    title: copy?.title || "Område",
    description: copy?.intro || "Finn nybygg og områder i Spania med Zen Eco Homes.",
    alternates: {
      canonical: `/omrader/${region}`,
    },
  };
}

export default async function RegionPage({ params }: { params: Promise<{ region: RegionKey }> }) {
  const { region } = await params;
  const selected = regions.find((item) => item.key === region);
  const copy = regionCopy[region];

  if (!selected || !copy) {
    return (
      <main>
        <SiteHeader languageLinks={homeLanguageLinks("no")} />
        <section className="page-hero compact-hero">
          <h1>Område ikke funnet</h1>
          <Link className="text-button light" href="/omrader">Til områder</Link>
        </section>
        <Footer />
      </main>
    );
  }

  const [profiles, properties] = await Promise.all([getAreaProfiles(), getProperties()]);
  const regionProfiles = profiles.filter((profile) => areaMatchesRegion(profile, region));
  const regionProperties = properties.filter((property) => propertyMatchesRegion(property, region));
  const regionBooks = booksForRegion(region);
  const regionFaqItems = regionFaq[region as RegionKey] || [];
  const faqJsonLd =
    regionFaqItems.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: regionFaqItems.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }
      : null;

  return (
    <main>
      <SiteHeader languageLinks={homeLanguageLinks("no")} />
      <section className="page-hero compact-hero image-hero">
        <p className="eyebrow">Regionguide</p>
        <h1>{copy.title}</h1>
        <p>{copy.intro}</p>
        <div className="portal-actions">
          <Link className="contact-button" href={`/eiendommer?region=${region}`}>
            Se {regionProperties.length} boliger <ArrowRight size={18} />
          </Link>
          <Link className="text-button light" href="/kjopsprosessen">
            Slik kjøper du trygt
          </Link>
        </div>
      </section>

      <section className="section region-landing-grid">
        <article>
          <p className="eyebrow">Vurdering</p>
          <h2>Passer området for deg?</h2>
          <p>{selected.description}</p>
          <div className="region-proof-list">
            {copy.proof.map((item) => (
              <span key={item}>
                <ShieldCheck size={17} /> {item}
              </span>
            ))}
          </div>
        </article>
        <aside>
          <strong>{regionProperties.length}</strong>
          <span>publiserte boliger i regionen</span>
          <strong>{regionProfiles.length}</strong>
          <span>områdeprofiler fra oss</span>
        </aside>
      </section>

      {regionProfiles.length > 0 && (
        <section className="section area-profile-grid region-area-section">
          <div className="section-heading">
            <p className="eyebrow">Steder</p>
            <h2>Områder i {selected.label}</h2>
            <p>Les om stedet her først. Der vi har en Let Me Guide You-bok, viser vi også et utdrag fra selve områdeguiden.</p>
          </div>
          {regionProfiles.slice(0, 6).map((profile) => {
            const image = areaPresentationImage(profile, properties);
            const book = placeBookForArea(profile.name);
            const excerpt = areaExcerpt(profile.name);
            return (
              <article className="area-profile-card" key={profile.id || profile.name}>
                <div style={{ backgroundImage: `url(${image})` }} />
                <section>
                  <span>{profile.region || selected.label}</span>
                  <h2>{profile.name}</h2>
                  {profile.hero_blurb && <strong>{profile.hero_blurb}</strong>}
                  {profile.description && <p>{profile.description}</p>}
                  {book && excerpt.length > 0 && (
                    <div className="area-guide-reading">
                      <p className="eyebrow"><BookOpen size={14} /> Fra Let Me Guide You: {book.title}</p>
                      {excerpt.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    </div>
                  )}
                  <div className="area-guide-actions">
                    <a className="text-button area-property-link" href={`/eiendommer?region=${region}&area=${encodeURIComponent(profile.name)}`}>
                      <MapPin size={17} /> Se boliger i {profile.name}
                    </a>
                  </div>
                </section>
              </article>
            );
          })}
        </section>
      )}

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Aktuelle boliger</p>
          <h2>Utvalgte nybygg i {selected.label}</h2>
        </div>
        <div className="property-grid">
          {regionProperties.slice(0, 6).map((property, index) => (
            <PropertyCard key={property.id || property.ref || index} property={property} />
          ))}
        </div>
        <div className="center-action">
          <Link className="text-button" href={`/eiendommer?region=${region}`}>
            Se alle boliger i {selected.label} <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {region === "innlandet" && (
        <section className="section book-band">
          <div className="book-band-body">
            <p className="eyebrow">
              <BookOpen size={16} /> Fra forfatteren
            </p>
            <h2>«{generalGuideBook.title}»</h2>
            <p>{generalGuideBook.blurb}</p>
            <p>Hele boken finner du som videre lesning nederst på siden.</p>
          </div>
        </section>
      )}

      {faqJsonLd && (
        <section className="section proof-section">
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
          <div className="section-heading">
            <p className="eyebrow">Vanlige spørsmål</p>
            <h2>{selected.label} – spørsmål og svar</h2>
          </div>
          <div className="proof-grid inland-faq">
            {regionFaqItems.map((item) => (
              <article key={item.q}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      <MeetFreddy />

      {(regionBooks.length > 0 || region === "innlandet") && (
        <section className="book-showcase region-book-links-end">
          <div className="book-showcase-inner">
            <div className="book-showcase-heading">
              <p className="eyebrow">
                <BookOpen size={16} /> Videre lesning · helt til slutt
              </p>
              <h2>Vil du lese hele guiden?</h2>
              <p>
                Du har nå fått områdeinnholdet på Zen Eco Homes. Her, helt nederst, kan du gå videre til hele boken dersom du ønsker mer dybde.
              </p>
            </div>
            <div className="book-grid">
              {region === "innlandet" && (
                <a
                  className="book-card"
                  href={bookUrl(generalGuideBook.slug)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="book-cover-wrap">
                    <Image src={generalGuideBook.cover} alt={`Bokomslag: ${generalGuideBook.title}`} fill sizes="(max-width: 900px) 88vw, 330px" />
                  </div>
                  <div className="book-card-body">
                    <span><BookOpen size={14} /> Costa Blanca</span>
                    <h3>{generalGuideBook.title}</h3>
                    <p>{generalGuideBook.blurb}</p>
                    <strong>Les hele boken på books.freddybremseth.com</strong>
                  </div>
                </a>
              )}
              {regionBooks.map((book) => (
                <a
                  className="book-card"
                  href={bookUrl(book.slug)}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={book.slug}
                >
                  <div className="book-cover-wrap">
                    <Image src={book.cover} alt={`Bokomslag: ${book.title}`} fill sizes="(max-width: 900px) 88vw, 330px" />
                  </div>
                  <div className="book-card-body">
                    <span>
                      <BookOpen size={14} /> {book.town}
                    </span>
                    <h3>{book.title}</h3>
                    <p>{book.blurb}</p>
                    <strong>Les hele guiden på books.freddybremseth.com</strong>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
