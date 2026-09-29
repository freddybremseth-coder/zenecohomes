import type { Metadata } from "next";
import Link from "next/link";

import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { homeLanguageLinks } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Informasjonskapsler og sporing | Zen Eco Homes",
  description:
    "Se hvilke lagrings- og måleteknologier Zen Eco Homes bruker, hva de gjør og hvordan nettstedets begrensede søketrafikkmåling er utformet.",
  alternates: { canonical: "/informasjonskapsler" },
};

export default function CookiesPage() {
  return (
    <main>
      <SiteHeader languageLinks={homeLanguageLinks("no")} />
      <section className="page-hero compact-hero">
        <p className="eyebrow">Informasjonskapsler</p>
        <h1>Informasjonskapsler og sporing på zenecohomes.com</h1>
        <p>Sist oppdatert 29. september 2026.</p>
      </section>

      <section className="section">
        <article className="rich-text">
          <h2>Kort fortalt</h2>
          <p>
            Zen Eco Homes forsøker å holde trafikkmålingen begrenset. I den nåværende nettsidekoden er det ikke
            installert Google Analytics eller Google Tag Manager. Nettstedet har derimot en enkel måling av
            ankomst fra søk som sender offentlig sidesti og en begrenset henvisningskilde til RealtyFlow.
          </p>

          <h2>Søketrafikkmåling</h2>
          <p>
            Når nettleseren gir en relevant henvisningskilde, kan nettstedet registrere hvilken offentlig side
            du kom til og hvilken godkjent søke- eller AI-kilde besøket kom fra. Løsningen er laget slik at den
            ikke sender søketekst, URL-parametere, full henvisningsadresse, brukeridentifikator,
            nettleserfingeravtrykk eller informasjonskapsler.
          </p>
          <p>
            For å unngå å sende samme hendelse flere ganger i én nettleserøkt brukes nettleserens
            <strong> sessionStorage</strong>. Dette er lokal øktlagring og slettes normalt når økten avsluttes.
          </p>

          <h2>Nødvendig lokal lagring og tjenester</h2>
          <p>
            Enkelte funksjoner kan bruke nødvendig nettleserlagring eller sesjonsdata for å huske status mens du
            bruker nettstedet, for eksempel innlogging, favoritter eller andre funksjoner du aktivt bruker.
            Slike teknologier skal brukes for å levere funksjonen, sikkerhet eller nødvendig sesjonshåndtering.
          </p>

          <h2>Tredjepartstjenester</h2>
          <p>
            Nettstedet kan koble mot eksterne tjenester når du bruker funksjoner som CRM-oppfølging, kart,
            kundeportal eller andre integrasjoner. Disse tjenestene kan ha egne personvern- og
            lagringsmekanismer når de lastes eller åpnes. Vi skal ikke beskrive en teknologi som
            «nødvendig» dersom den i realiteten brukes til valgfri markedsføring.
          </p>

          <h2>Endringer i sporing</h2>
          <p>
            Dersom vi senere legger til analyse- eller markedsføringsteknologi som krever samtykke, skal siden og
            samtykkeløsningen oppdateres før slik sporing aktiveres.
          </p>

          <h2>Personopplysninger</h2>
          <p>
            Les <Link href="/personvern">personvernerklæringen</Link> for informasjon om hvilke
            personopplysninger vi behandler når du sender inn en forespørsel eller bruker tjenestene våre.
          </p>
        </article>
      </section>
      <Footer />
    </main>
  );
}
