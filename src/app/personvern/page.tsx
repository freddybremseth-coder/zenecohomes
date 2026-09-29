import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { homeLanguageLinks } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Personvern hos Zen Eco Homes | Slik behandler vi data",
  description: "Les hvordan Zen Eco Homes behandler personopplysninger, hvorfor data samles inn, hvor lenge de lagres, hvem de deles med og hvilke rettigheter du har.",
  alternates: { canonical: "/personvern" },
};

export default function PrivacyPage() {
  return <main><SiteHeader languageLinks={homeLanguageLinks("no")} />
    <section className="page-hero compact-hero"><p className="eyebrow">Personvern</p><h1>Personvernerklæring</h1><p>Sist oppdatert 29. september 2026.</p></section>
    <section className="section article-body">
      <h2>Hvilke opplysninger vi behandler</h2><p>Vi kan behandle navn, telefonnummer, e-postadresse, boligpreferanser, budsjett, ønsket område, meldinger du sender oss og tekniske data som er nødvendige for å drive og sikre nettsiden.</p>
      <h2>Hvorfor opplysningene behandles</h2><p>Opplysningene brukes for å svare på henvendelser, levere rådgivning, følge opp boligønsker, administrere kundeforhold, forbedre nettstedet og oppfylle rettslige plikter.</p>
      <h2>Behandlingsgrunnlag</h2><p>Behandling skjer når det er nødvendig for å følge opp en forespørsel eller avtale, når vi har en berettiget interesse, når loven krever det, eller når du har gitt samtykke.</p>
      <h2>Lagring og deling</h2><p>Opplysninger lagres ikke lenger enn nødvendig for formålet. Data kan behandles av leverandører som hjelper oss med drift, CRM, analyse, kommunikasjon og booking, blant annet RealtyFlow/ChatGenius-baserte tjenester som brukes til kundeoppfølging, måling og booking. Begrensede målehendelser kan inneholde sidebane, boligreferanse og en pseudonym teknisk ID, men skal ikke brukes til å sende navn, telefon eller e-post som del av den anonyme trafikkmålingen.</p>
      <h2>Dine rettigheter</h2><p>Du kan be om innsyn, retting, sletting, begrensning eller dataportabilitet der reglene gir rett til det, og du kan protestere mot visse behandlinger eller trekke tilbake samtykke.</p>
      <h2>Kontakt</h2><p>Ta kontakt med Zen Eco Homes via kontaktinformasjonen på nettstedet dersom du har spørsmål om personvern eller ønsker å bruke rettighetene dine.</p>
    </section><Footer showCta={false}/>
  </main>;
}
