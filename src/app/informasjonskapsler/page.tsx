import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { homeLanguageLinks } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Informasjonskapsler | Cookies og sporing hos Zen Eco Homes",
  description: "Les hvilke informasjonskapsler og sporingsteknologier Zen Eco Homes kan bruke, hvorfor de brukes, og hvordan du kan styre eller slette valgene dine.",
  alternates: { canonical: "/informasjonskapsler" },
};

export default function CookiesPage() {
  return <main><SiteHeader languageLinks={homeLanguageLinks("no")} />
    <section className="page-hero compact-hero"><p className="eyebrow">Cookies</p><h1>Informasjonskapsler og sporing</h1><p>Sist oppdatert 29. september 2026.</p></section>
    <section className="section article-body">
      <h2>Informasjonskapsler og annen nettleserlagring</h2>
      <p>
        Nettsteder kan bruke både informasjonskapsler og andre lagringsmekanismer i nettleseren, som
        localStorage og sessionStorage. Zen Eco Homes bruker i dag slik nettleserlagring for konkrete funksjoner
        og for begrenset måling av hvordan bolig- og søkesidene brukes.
      </p>
      <h2>Favoritter og sammenligning</h2>
      <p>
        Når du lagrer en bolig som favoritt, lagres boligreferansen lokalt i nettleseren under Zen Eco Homes.
        Det gjør at favorittene kan vises igjen og brukes i sammenligningsverktøyet. Denne informasjonen slettes
        dersom du fjerner favorittene eller sletter nettleserens nettsteddata.
      </p>
      <h2>Måling av bolig- og søketrafikk</h2>
      <p>
        På boligdetaljer brukes en pseudonym teknisk måle-ID og midlertidig deduplisering i nettleseren for å
        unngå at samme visning telles gjentatte ganger. Målingen lagrer boligreferanse, hendelsestype og hvilken
        innholdsversjon som ble vist – ikke navn, telefon eller e-post.
      </p>
      <p>
        Ved ankomst fra enkelte søke- og AI-kilder kan nettstedet sende sidebanen og en redusert kildehenvisning
        til RealtyFlow for å forstå hvilke sider som blir funnet. Full referrer, søketekst, URL-parametre,
        brukeridentifikatorer og nettleserfingeravtrykk sendes ikke av denne målingen.
      </p>
      <h2>Booking, portal og eksterne funksjoner</h2>
      <p>
        Bookingfunksjoner kan laste en tjeneste fra appointment.chatgenius.pro, og kundeverktøy kan bruke lokal
        nettleserlagring for lagrede preferanser. Eksterne tjenester kan bruke nødvendige tekniske mekanismer for
        å levere funksjonen når den lastes inn. Personopplysninger du selv sender inn behandles som beskrevet i
        personvernerklæringen.
      </p>
      <h2>Dine valg</h2>
      <p>
        Du kan se og slette lagrede nettsteddata i nettleserens innstillinger. Funksjoner som favoritter kan da
        nullstilles. Dersom vi senere tar i bruk valgfrie markedsførings- eller analysekategorier som krever
        samtykke, skal disse håndteres med et egnet samtykkevalg før de aktiveres.
      </p>
      <h2>Kontakt</h2><p>Kontakt Zen Eco Homes dersom du har spørsmål om teknologiene som brukes på nettstedet.</p>
    </section><Footer showCta={false}/>
  </main>;
}
