import Link from "next/link";
import { ArrowRight, Building2, MapPin, ShieldCheck } from "lucide-react";

import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { Testimonials } from "@/components/Testimonials";
import { homeLanguageLinks } from "@/lib/i18n";

export const metadata = {
  title: { absolute: "Om Zen Eco Homes | Norsk eiendomsrådgivning i Spania" },
  description:
    "Bli kjent med Zen Eco Homes og hvordan vi hjelper norske boligkjøpere i Spania med områdevalg, boligsøk, visninger, kjøpsprosess og oppfølging.",
  alternates: { canonical: "/om-oss" },
};

export default function AboutPage() {
  return (
    <main>
      <SiteHeader languageLinks={homeLanguageLinks("no")} />

      <section className="page-hero compact-hero">
        <p className="eyebrow">Om Zen Eco Homes</p>
        <h1>Rådgivning først. Boligen etterpå.</h1>
        <p>
          Zen Eco Homes hjelper kjøpere å forstå område, behov, budsjett og kjøpsprosess før de bruker tid på
          tilfeldige boliger. Hovedfokuset er moderne nybygg, villaer, leiligheter og gjennomførbare prosjekter
          på Costa Blanca, Costa Cálida og i utvalgte innlandsområder.
        </p>
      </section>

      <section className="section proof-section">
        <div className="section-heading">
          <p className="eyebrow">Slik jobber vi</p>
          <h2>En kjøperreise bygget rundt beslutningen din</h2>
          <p>
            Vi prøver ikke å vise flest mulig boliger. Vi starter med det som avgjør om boligen faktisk passer:
            hverdagen du ønsker, geografien, totaløkonomien og hvordan boligen skal brukes.
          </p>
        </div>
        <div className="proof-grid">
          <article>
            <strong><MapPin size={24} /></strong>
            <h3>Område før bolig</h3>
            <p>Vi sammenligner områder og avstander før vi lager shortlist.</p>
            <Link className="text-button" href="/omrader">Se områder <ArrowRight size={16} /></Link>
          </article>
          <article>
            <strong><Building2 size={24} /></strong>
            <h3>Reelle alternativer</h3>
            <p>Vi sorterer boligtyper, prosjekter og tilgjengelighet mot behov og budsjett.</p>
            <Link className="text-button" href="/eiendommer">Se boliger <ArrowRight size={16} /></Link>
          </article>
          <article>
            <strong><ShieldCheck size={24} /></strong>
            <h3>Tryggere prosess</h3>
            <p>Du får en strukturert vei fra behovskartlegging til overtakelse og videre oppfølging.</p>
            <Link className="text-button" href="/kjopsprosessen">Kjøpsprosessen <ArrowRight size={16} /></Link>
          </article>
        </div>
      </section>

      <section className="section split">
        <div className="section-heading">
          <p className="eyebrow">Menneskene bak</p>
          <h2>Personlig rådgivning med lokal forankring</h2>
          <p>
            Freddy Bremseth er norsk eiendomsrådgiver bosatt i Benidorm og følger kjøpere gjennom områdevalg,
            boligsøk, visninger og neste steg. Zen Eco Homes samarbeider også med relevante fagpersoner og
            partnere når kjøpet krever juridisk, teknisk eller praktisk kompetanse.
          </p>
          <Link className="contact-button" href="/om-oss/freddy">
            Les om Freddy <ArrowRight size={17} />
          </Link>
        </div>
        <div className="feature-panel">
          <div><ShieldCheck /> Norsk oppfølging</div>
          <div><MapPin /> Lokal områdekunnskap</div>
          <div><Building2 /> Moderne bolig og nybygg</div>
          <div><ArrowRight /> Oppfølging også etter kjøpet</div>
        </div>
      </section>

      <Testimonials />

      <section className="section proof-section">
        <div className="section-heading">
          <p className="eyebrow">Neste steg</p>
          <h2>Start med en kort og uforpliktende avklaring</h2>
          <p>Fortell hvordan boligen skal brukes og hva som er viktigst for deg, så starter vi med riktig område.</p>
        </div>
        <div className="center-action">
          <Link className="contact-button" href="/booking">Book rådgivning <ArrowRight size={18} /></Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
