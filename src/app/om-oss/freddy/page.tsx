import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { homeLanguageLinks } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Freddy Bremseth | Norsk rådgiver for bolig i Spania",
  description: "Møt Freddy Bremseth, norsk eiendomsrådgiver på Costa Blanca. Les om områdekunnskap, boligsøk, visning, kjøpsprosess og boligkjøp i Spania nå.",
  alternates: { canonical: "/om-oss/freddy" },
};

export default function FreddyPage() {
  return (
    <main className="team-profile-page">
      <SiteHeader languageLinks={homeLanguageLinks("no")} />
      <section className="page-hero compact-hero">
        <p className="eyebrow">Freddy Bremseth · Zen Eco Homes</p>
        <h1>Norsk eiendomsrådgiver på Costa Blanca</h1>
        <p>
          Freddy jobber med kjøpere som vil forstå området, alternativene og kjøpsprosessen før de reserverer bolig i Spania.
        </p>
        <div className="hero-actions">
          <Link className="contact-button" href="/booking">Book en prat <ArrowRight size={17}/></Link>
          <Link className="text-button light" href="/guide/kjope-bolig-i-spania">Les kjøperguiden</Link>
        </div>
      </section>

      <section className="section team-profile-intro">
        <div>
          <p className="eyebrow">Rollen</p>
          <h2>Fra et stort boligmarked til et håndterbart valg</h2>
          <p>
            Arbeidet dekker Costa Blanca Nord, Costa Blanca Sør, Costa Cálida og utvalgte innlandsområder.
            Målet er å redusere markedet til alternativer som passer kundens bruk, budsjett og prioriteringer.
          </p>
          <p>
            Rådgivningen starter derfor med område og behov før konkrete boliger velges. Det gjør det lettere å
            sammenligne relevante alternativer og bruke visningstiden bedre.
          </p>
        </div>
        <aside className="team-profile-focus">
          <p className="eyebrow">Arbeidsområder</p>
          <span><CheckCircle2 size={18}/> Behov, budsjett og områdevalg</span>
          <span><CheckCircle2 size={18}/> Boligsøk og shortlist</span>
          <span><CheckCircle2 size={18}/> Koordinering av visninger</span>
          <span><CheckCircle2 size={18}/> Informasjon og neste steg i kjøpsreisen</span>
        </aside>
      </section>

      <section className="section team-profile-links">
        <div>
          <p className="eyebrow">Fordypning</p>
          <h2>Les mer før du bestemmer deg</h2>
          <p>Guidene og områdesidene er laget for å gi et bedre beslutningsgrunnlag før du bruker tid på konkrete boliger.</p>
        </div>
        <nav>
          <Link href="/omrader">Sammenlign områder <ArrowRight size={16}/></Link>
          <Link href="/guide/kjope-bolig-i-spania">Kjøpe bolig i Spania <ArrowRight size={16}/></Link>
          <Link href="/visningstur">Planlegg visningstur <ArrowRight size={16}/></Link>
          <Link href="/kjopsprosessen">Se kjøpsprosessen <ArrowRight size={16}/></Link>
        </nav>
      </section>

      <Footer />
    </main>
  );
}
