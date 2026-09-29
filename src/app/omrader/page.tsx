import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { bookUrl, generalGuideBook, placeBooks } from "@/lib/books";
import { homeLanguageLinks } from "@/lib/i18n";
import { regions } from "@/lib/realtyflow";

export const metadata: Metadata = {
  title: { absolute: "Områder i Spania | Costa Blanca, Cálida og innlandet" },
  description:
    "Sammenlign områder før boligkjøp i Spania. Utforsk Costa Blanca Nord, Costa Blanca Sør, Costa Cálida og innlandet, og finn området som passer livet ditt.",
  alternates: { canonical: "/omrader" },
  openGraph: {
    title: "Områder i Spania | Costa Blanca, Cálida og innlandet",
    description:
      "Velg område før bolig. Sammenlign Costa Blanca Nord, Costa Blanca Sør, Costa Cálida og innlandet før du starter boligsøket.",
    url: "https://www.zenecohomes.com/omrader",
    type: "website",
  },
};

const regionIntro: Record<string, string> = {
  "costa-blanca-nord":
    "Fjell, bukter, helårsbyer og et bredt marked fra Benidorm og Finestrat til Altea, Calpe, Dénia og Moraira.",
  "costa-blanca-sor":
    "Et stort og internasjonalt boligmarked rundt Guardamar, Torrevieja, Ciudad Quesada, Orihuela Costa og sørlige Alicante.",
  "costa-calida":
    "Kysten videre sørover med San Pedro del Pinatar, Los Alcázares, La Manga, Cartagena og flere nyere boligområder.",
  innlandet:
    "Mer plass, større tomter og et roligere hverdagsliv i blant annet Biar, Villena, Sax, Pinoso, Aspe og La Romana.",
};

export default function AreasPage() {
  const featuredBooks = placeBooks.slice(0, 6);

  return (
    <main>
      <SiteHeader languageLinks={homeLanguageLinks("no")} />

      <section className="page-hero compact-hero">
        <p className="eyebrow">Områder i Spania</p>
        <h1>Velg området før du velger boligen</h1>
        <p>
          Kyst, by og innland gir svært forskjellige hverdager. Start med regionen som passer bruken,
          avstandene og livsstilen din, og gå deretter videre til byene og boligene.
        </p>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Fire utgangspunkt</p>
          <h2>Sammenlign regionene</h2>
          <p>
            Denne siden er bevisst kort. Velg region først; de detaljerte område- og byguidene ligger ett nivå
            under, der de er enklere å finne både for deg og søkemotorer.
          </p>
        </div>

        <div className="area-choice-grid">
          {regions.map((region) => (
            <article className="area-choice-card" key={region.key}>
              <span>{region.description}</span>
              <h2>{region.label}</h2>
              <p>{regionIntro[region.key]}</p>
              <Link className="text-button" href={`/omrader/${region.key}`}>
                Utforsk {region.label} <ArrowRight size={16} />
              </Link>
            </article>
          ))}
        </div>

        <div className="center-action" style={{ marginTop: 34 }}>
          <Link className="contact-button" href="/guide/omradeguide-eiendomskjop-i-spania">
            Les områdeguiden for boligkjøp <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="section proof-section">
        <div className="section-heading">
          <p className="eyebrow">Let Me Guide You</p>
          <h2>Fordyp deg i stedene før du bestiller visning</h2>
          <p>
            Freddy Bremseths områdebøker gir mer plass til hverdagsliv, forskjeller mellom nabolag og praktiske
            vurderinger enn en vanlig boligsiden kan gjøre.
          </p>
        </div>

        <div className="magazine-grid">
          <article className="magazine-card">
            <Image
              className="magazine-cover-image"
              src={generalGuideBook.cover}
              alt="Costa Blanca – North, South or Inland? områdeguide"
              width={900}
              height={1200}
              sizes="(max-width: 700px) 100vw, 320px"
            />
            <div className="magazine-body">
              <h2>{generalGuideBook.title}</h2>
              <p>{generalGuideBook.blurb}</p>
              <a className="text-button" href={bookUrl(generalGuideBook.slug)} target="_blank" rel="noopener noreferrer">
                Les bokguiden <ArrowRight size={16} />
              </a>
            </div>
          </article>

          {featuredBooks.map((book) => (
            <article className="magazine-card" key={book.slug}>
              <Image
                className="magazine-cover-image"
                src={book.cover}
                alt={`Områdeguide til ${book.title}`}
                width={900}
                height={1200}
                sizes="(max-width: 700px) 100vw, 320px"
              />
              <div className="magazine-body">
                <h2>{book.title}</h2>
                <p>{book.blurb}</p>
                <a className="text-button" href={bookUrl(book.slug)} target="_blank" rel="noopener noreferrer">
                  Les bokguiden <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section">
        <div>
          <p className="eyebrow">Usikker på region?</p>
          <h2>Start med hverdagen du ønsker</h2>
          <p>Fortell hva som er viktigst for deg, så kan vi sammenligne regionene før du bruker tid på boliger.</p>
        </div>
        <Link className="contact-button" href="/booking">Få rådgivning <ArrowRight size={18} /></Link>
      </section>

      <Footer />
    </main>
  );
}
