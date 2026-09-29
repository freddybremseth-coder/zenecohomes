import type { Metadata } from "next";
import Link from "next/link";

import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { homeLanguageLinks } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Personvernerklæring | Zen Eco Homes",
  description:
    "Les hvordan Zen Eco Homes behandler personopplysninger når du bruker nettstedet, sender inn boligforespørsel, bestiller rådgivning eller bruker våre digitale tjenester.",
  alternates: { canonical: "/personvern" },
};

export default function PrivacyPage() {
  return (
    <main>
      <SiteHeader languageLinks={homeLanguageLinks("no")} />
      <section className="page-hero compact-hero">
        <p className="eyebrow">Personvern</p>
        <h1>Personvernerklæring for Zen Eco Homes</h1>
        <p>Sist oppdatert 29. september 2026.</p>
      </section>

      <section className="section">
        <article className="rich-text">
          <h2>Hvem behandler opplysningene?</h2>
          <p>
            Zen Eco Homes behandler personopplysninger som mottas gjennom zenecohomes.com og tilknyttede
            kjøper- og kontakttjenester. Spørsmål om personvern kan sendes til
            {" "}<a href="mailto:freddy@zenecohomes.com">freddy@zenecohomes.com</a>.
          </p>

          <h2>Hvilke opplysninger kan vi samle inn?</h2>
          <p>Vi behandler først og fremst opplysninger du selv velger å sende til oss, for eksempel:</p>
          <ul>
            <li>navn, e-postadresse og telefonnummer,</li>
            <li>ønsket område, boligtype, budsjett, tidslinje og kjøpsmål,</li>
            <li>opplysninger om finansiering eller ønsket neste steg når du fyller ut et relevant skjema,</li>
            <li>meldinger, boligreferanser og annen informasjon du sender i forbindelse med en forespørsel,</li>
            <li>opplysninger knyttet til Min side eller andre tjenester du selv velger å bruke.</li>
          </ul>
          <p>
            Nettstedet registrerer også begrenset teknisk informasjon som er nødvendig for drift og sikkerhet.
            For søketrafikk kan nettstedet registrere hvilken offentlig side som ble besøkt og en begrenset,
            normalisert henvisningskilde. Denne målingen er laget uten å sende søketekst, full henvisningsadresse,
            brukeridentifikator eller nettleserfingeravtrykk.
          </p>

          <h2>Hvorfor behandler vi opplysningene?</h2>
          <ul>
            <li>for å besvare forespørsler og følge opp boliginteresse,</li>
            <li>for å finne, sammenligne og foreslå relevante boliger og områder,</li>
            <li>for å planlegge rådgivning, visning og kjøpsprosess,</li>
            <li>for å levere funksjoner du ber om, som lagret søk eller kjøperoppfølging,</li>
            <li>for å drifte, sikre og forbedre nettstedet og forstå overordnet trafikk fra søk.</li>
          </ul>

          <h2>Behandlingsgrunnlag</h2>
          <p>
            Når du ber oss om boligoppfølging eller rådgivning, er behandlingen nødvendig for å håndtere
            forespørselen din og eventuelt forberede eller gjennomføre en avtale. For nødvendig drift og
            sikkerhet kan behandlingen bygge på vår berettigede interesse i å drive en sikker og fungerende
            tjeneste. Dersom en aktivitet krever samtykke, skal samtykke innhentes før den behandlingen starter.
          </p>

          <h2>Hvem kan opplysningene deles med?</h2>
          <p>
            Vi bruker tekniske leverandører for blant annet hosting, database, CRM og kundeoppfølging. Opplysninger
            kan behandles i RealtyFlow/ChatGenius-løsninger når det er nødvendig for å registrere og følge opp en
            boligforespørsel. Tekniske driftsdata kan også behandles av leverandører som brukes til hosting og
            database. Vi deler ikke personopplysninger med andre aktører bare for at de skal markedsføre egne
            tjenester til deg.
          </p>
          <p>
            Dersom du ber oss involvere en utbygger, megler, advokat, bank eller annen fagperson i en konkret
            kjøpsprosess, kan relevante opplysninger deles når det er nødvendig og forventet for å følge opp
            forespørselen. Du skal få informasjon når en slik deling er vesentlig for prosessen.
          </p>

          <h2>Hvor lenge lagres opplysningene?</h2>
          <p>
            Opplysninger lagres så lenge de er nødvendige for formålet de ble samlet inn for, for å følge opp
            kundeforholdet og for å oppfylle eventuelle lovpålagte dokumentasjonskrav. Når opplysningene ikke
            lenger er nødvendige, skal de slettes eller anonymiseres i tråd med gjeldende krav og våre
            driftsrutiner.
          </p>

          <h2>Dine rettigheter</h2>
          <p>
            Avhengig av situasjonen kan du ha rett til innsyn, retting, sletting, begrensning, dataportabilitet
            og til å protestere mot behandling. Dersom behandlingen bygger på samtykke, kan samtykket trekkes
            tilbake. Du kan kontakte oss på e-postadressen over for å utøve rettighetene dine.
          </p>

          <h2>Informasjonskapsler og lokal lagring</h2>
          <p>
            Se vår <Link href="/informasjonskapsler">side om informasjonskapsler og sporing</Link> for informasjon
            om teknologiene nettstedet bruker.
          </p>

          <h2>Endringer</h2>
          <p>
            Erklæringen oppdateres når funksjoner, leverandører eller behandlingsmåter endres. Datoen øverst viser
            når denne versjonen sist ble revidert.
          </p>
        </article>
      </section>
      <Footer />
    </main>
  );
}
