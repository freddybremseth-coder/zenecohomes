import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, MapPin, ShieldCheck } from "lucide-react";
import { Footer } from "@/components/Footer";
import { PropertyCard } from "@/components/PropertyCard";
import { SiteHeader } from "@/components/SiteHeader";
import { homeLanguageLinks } from "@/lib/i18n";
import { booksForRegion, bookUrl, generalGuideBook } from "@/lib/books";
import { MeetFreddy } from "@/components/MeetFreddy";
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
    proof: ["Sterke områder for helårsbruk", "Kort vei til Alicante og Valencia", "Mange moderne villa- og leilighetsprosjekter"],
  },
  "costa-blanca-sor": {
    title: "Nybygg på Costa Blanca Sør",
    intro:
      "Costa Blanca Sør har stort utvalg, lavere inngangspriser og mange områder som passer for strandliv, golf og enkel hverdag. Her finner du blant annet Torrevieja, Orihuela Costa, Guardamar, Ciudad Quesada og Santa Pola.",
    proof: ["Stort utvalg av nybygg", "Mange golf- og strandnære prosjekter", "Praktisk avstand til Alicante flyplass"],
  },
  "costa-calida": {
    title: "Nybygg på Costa Calida",
    intro:
      "Costa Calida og Murcia-regionen passer for deg som ønsker nye prosjekter, golfresorter, roligere omgivelser og ofte mer bolig for pengene. Områdene rundt Los Alcazares, San Pedro del Pinatar, La Manga og Altaona er særlig aktuelle.",
    proof: ["Ofte mer bolig for budsjettet", "Golf, laguner og roligere kystbyer", "Spennende vekstområde for nybygg"],
  },
  innlandet: {
    title: "Bolig i innlandet på Costa Blanca",
    intro:
      "Innlandet passer for deg som vil ha ekte spanske landsbyer, store tomter, fincaer og mer eiendom for pengene – med kysten under en time unna. Her finner du Biar, Villena, Sax, Castalla, Pinoso, Monóvar og Hondón-dalene.",
    proof: ["Fincaer, landsbyhus og store tomter", "Levende, helårsåpne spanske landsbyer", "Rådgiver som selv bor i Biar"],
  },
};

const regionFaq: Record<RegionKey, { q: string; a: string }[]> = {
  "costa-blanca-nord": [
    {
      q: "Hvor langt er det til flyplassen fra Costa Blanca Nord?",
      a: "De nordlige byene som Altea, Calpe og Dénia ligger typisk 45–75 minutter fra Alicante flyplass. Dénia og Jávea har i tillegg Valencia flyplass innen rekkevidde.",
    },
    {
      q: "Kan man bo på Costa Blanca Nord hele året?",
      a: "Ja. Dette er etablerte helårsområder med full service, sykehus, skoler og et levende lokalmiljø også utenom turistsesongen.",
    },
    {
      q: "Er Costa Blanca Nord dyrere enn Costa Blanca Sør?",
      a: "Generelt ja. De nordlige byene har ofte høyere kvadratmeterpris og en mer eksklusiv profil, men også mer variert natur med fjell og bukter.",
    },
  ],
  "costa-blanca-sor": [
    {
      q: "Hvorfor velge Costa Blanca Sør?",
      a: "Sør har stort utvalg av nybygg, lavere inngangspriser, flate og lettgåtte områder, mange golfbaner og store internasjonale miljøer.",
    },
    {
      q: "Hvor nær er flyplassen fra Costa Blanca Sør?",
      a: "Mange sørlige områder som Torrevieja, Orihuela Costa og Guardamar ligger rundt 30–45 minutter fra Alicante flyplass.",
    },
    {
      q: "Passer Costa Blanca Sør for helårsbruk?",
      a: "Ja, med store etablerte utlendingsmiljøer og full service. Enkelte rene ferieurbanisasjoner er likevel roligere om vinteren.",
    },
  ],
  "costa-calida": [
    {
      q: "Hva kjennetegner Costa Cálida?",
      a: "Murcia-kysten med den varme Mar Menor-lagunen, golfresorter og ofte mer bolig for pengene. Roligere og mindre turistpreget enn Costa Blanca.",
    },
    {
      q: "Hvilken flyplass bruker man på Costa Cálida?",
      a: "Murcia (Corvera) flyplass ligger nærmest, mens Alicante flyplass også er innen rekkevidde fra de nordlige delene.",
    },
    {
      q: "Er Costa Cálida rimeligere enn Costa Blanca?",
      a: "Ofte ja. Inngangsprisene er gjerne lavere, særlig på nybygg i golfresortene rundt Los Alcázares og San Pedro del Pinatar.",
    },
  ],
  innlandet: [
    {
      q: "Hvor langt er innlandet fra kysten og flyplassen?",
      a: "De fleste innlandsområdene ligger 30–60 minutter fra Alicante flyplass og under en time fra strendene.",
    },
    {
      q: "Hva får jeg for pengene i innlandet kontra kysten?",
      a: "Ofte betydelig mer tomt og bolig per krone – finca, landsbyhus eller gård med plass, gjerne til lavere pris per kvadratmeter enn tilsvarende ved kysten.",
    },
    {
      q: "Er innlandslandsbyene levende hele året?",
      a: "Ja. De lever av landbruk, industri og lokalt næringsliv – ikke av turisme – så skoler, helsetilbud og butikker holder åpent hele året.",
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
          <span>områdeprofiler fra RealtyFlow</span>
        </aside>
      </section>

      {regionProfiles.length > 0 && (
        <section className="section area-profile-grid region-area-section">
          <div className="section-heading">
            <p className="eyebrow">Steder</p>
            <h2>Områder i {selected.label}</h2>
          </div>
          {regionProfiles.slice(0, 6).map((profile) => (
            <article className={`area-profile-card${profile.photo_url ? "" : " no-photo"}`} key={profile.id || profile.name}>
              {profile.photo_url && <div style={{ backgroundImage: `url(${profile.photo_url})` }} />}
              <section>
                <span>{profile.region || selected.label}</span>
                <h2>{profile.name}</h2>
                {profile.hero_blurb && <strong>{profile.hero_blurb}</strong>}
                {profile.description && <p>{profile.description}</p>}
                <a className="text-button area-property-link" href={`/eiendommer?region=${region}&area=${encodeURIComponent(profile.name)}`}>
                  <MapPin size={17} /> Se boliger i {profile.name}
                </a>
              </section>
            </article>
          ))}
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
            <a
              className="contact-button"
              href={bookUrl(generalGuideBook.slug)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Kjøp e-bok – 5 € <ArrowRight size={18} />
            </a>
          </div>
        </section>
      )}

      {regionBooks.length > 0 && (
        <section className="book-showcase">
          <div className="book-showcase-inner">
            <div className="book-showcase-heading">
              <p className="eyebrow">
                <BookOpen size={16} /> Områdebøker
              </p>
              <h2>Les deg opp på {selected.label} før du kjøper</h2>
              <p>
                Freddy har skrevet egne lokalguider for flere av byene her – om hverdagsliv, nabolag, kostnader og
                hva hvert sted faktisk er. E-bøker til 5 euro på books.freddybremseth.com.
              </p>
            </div>
            <div className="book-grid">
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
                    <strong>Kjøpes for 5 euro</strong>
                  </div>
                </a>
              ))}
            </div>
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
      <Footer />
    </main>
  );
}
