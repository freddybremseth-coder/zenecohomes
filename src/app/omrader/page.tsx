import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { bookUrl, placeBooks } from "@/lib/books";
import { homeLanguageLinks } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Områder i Spania | Costa Blanca, Cálida og innlandet",
  description: "Sammenlign Costa Blanca Nord, Costa Blanca Sør, Costa Cálida og innlandet før boligkjøp i Spania. Se områdeguider, boliger og praktiske forskjeller.",
  alternates: { canonical: "/omrader" },
};

const groups = [
  { title: "Costa Blanca Nord", href: "/omrader/costa-blanca-nord", places: "Altea · Albir · Calpe · Finestrat · Benidorm · Villajoyosa · Dénia · Moraira", text: "Kyst, helårsbyer, fjell og moderne boligprosjekter nord for Alicante." },
  { title: "Costa Blanca Sør", href: "/omrader/costa-blanca-sor", places: "Guardamar · Torrevieja · Ciudad Quesada · Orihuela Costa · Santa Pola", text: "Stort boligmarked med strand, golf og mange internasjonale områder." },
  { title: "Costa Cálida", href: "/omrader/costa-calida", places: "San Pedro · San Javier · Los Alcázares · La Manga · Murcia", text: "Et alternativ sør for Alicante med kyst, golf og et annet prisbilde." },
  { title: "Innlandet", href: "/omrader/innlandet", places: "Pinoso · Aspe · Biar · Villena · La Romana · Novelda", text: "Mer plass, større tomter og mulighet for moderne villa eller byggeprosjekt." },
];

export default function AreasPage() {
  return <main>
    <SiteHeader languageLinks={homeLanguageLinks("no")} />
    <section className="page-hero compact-hero">
      <p className="eyebrow">Områdeguide</p>
      <h1>Velg område før du velger bolig i Spania</h1>
      <p>Kyst, by og innland gir svært ulike hverdager. Bruk denne siden som startpunkt og gå videre til region- og byguidene.</p>
    </section>
    <section className="section">
      <div className="area-choice-grid editorial-area-grid">
        {groups.map(group => <article className="area-choice-card" key={group.title}>
          <span>{group.places}</span><h2>{group.title}</h2><p>{group.text}</p>
          <Link className="text-button" href={group.href}>Utforsk regionen <ArrowRight size={16}/></Link>
        </article>)}
      </div>
    </section>
    <section className="section">
      <div className="section-heading">
        <p className="eyebrow">Let Me Guide You</p>
        <h2>Områdebøker – les deg opp før du velger sted</h2>
        <p>
          Områdebøkene hører hjemme sammen med områdene. De gir mer dybde om hverdagsliv, nabolag og lokale forskjeller
          og kompletterer de kortere nettsidene.
        </p>
      </div>
      <div className="book-grid">
        {placeBooks.map((book) => (
          <a className="book-card" href={bookUrl(book.slug)} target="_blank" rel="noopener noreferrer" key={book.slug}>
            <div className="book-cover-wrap">
              <Image src={book.cover} alt={`Områdebok om ${book.title}`} fill sizes="(max-width: 700px) 80vw, 260px" />
            </div>
            <div className="book-card-body">
              <span><BookOpen size={14} /> Områdeguide</span>
              <h3>{book.title}</h3>
              <p>{book.blurb}</p>
              <strong>Les mer om boken</strong>
            </div>
          </a>
        ))}
      </div>
    </section>

    <section className="section split">
      <div><p className="eyebrow">Sammenlign før du bestemmer deg</p><h2>Hva bør du vurdere?</h2><p>Se på reisevei, helårsservice, klima, strand, skole, utleie, prisnivå og hvordan området fungerer utenfor høysesongen.</p><Link className="text-button" href="/guide/omradeguide-eiendomskjop-i-spania">Les områdeguiden <ArrowRight size={16}/></Link></div>
      <div><p className="eyebrow">Boliger</p><h2>Klar for å se konkrete alternativer?</h2><p>Gå videre til boligoversikten når du har snevret inn region eller område.</p><Link className="contact-button" href="/eiendommer">Se boliger</Link></div>
    </section>
    <Footer />
  </main>;
}
