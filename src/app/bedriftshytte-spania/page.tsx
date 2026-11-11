import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Footer } from "@/components/Footer";
import { PropertyCard } from "@/components/PropertyCard";
import { SiteHeader } from "@/components/SiteHeader";
import {
  getProperties,
  isPubliclyAvailableProperty,
  propertyMatchesType,
  type Property,
} from "@/lib/realtyflow";

export const metadata: Metadata = {
  title: "Bedriftshytte i Spania for norske virksomheter | Zen Eco Homes",
  description:
    "Gi ansatte eller medlemmer tilgang til en firmahytte i Spania. Få norsk rådgivning om bolig, kjøp, økonomi og oppfølging på Costa Blanca.",
  alternates: { canonical: "/bedriftshytte-spania" },
};

const benefits = [
  {
    title: "Et gode folk husker",
    copy: "Gi ansatte tilgang til en bedriftshytte i Spania som skaper rom for avslapning og kvalitetstid med familien.",
  },
  {
    title: "Fast base for samlinger",
    copy: "Bruk bedriftshytta som base for jobbsamlinger, arbeidsopphold og sosiale aktiviteter.",
  },
  {
    title: "En medlemsfordel som skaper verdi",
    copy: "Gi medlemmer tilgang til en bolig i Spania som gjør medlemskapet mer attraktivt.",
  },
  {
    title: "Del eierskapet med andre bedrifter",
    copy: "Gå sammen med andre bedrifter om å eie en bedriftshytte og dele på kostnader, ansvar og bruk.",
  },
];

const steps = [
  {
    title: "01 Avklar behovene",
    copy: "Vi kartlegger hvordan boligen skal brukes, hvem den skal være tilgjengelig for og hvilke løsninger som passer virksomheten.",
  },
  {
    title: "02 Få oversikt over økonomien",
    copy: "Vi gir dere oversikt over aktuelle boligpriser, kostnader og økonomiske rammer.",
  },
  {
    title: "03 Finn riktig bolig",
    copy: "Vi finner aktuelle boliger som passer virksomhetens ønsker og budsjett.",
  },
  {
    title: "04 Rådgivning uten kostnad",
    copy: "Vår rådgivning og hjelp gjennom kjøpsprosessen er kostnadsfri og uforpliktende.",
  },
  {
    title: "05 Zen Eco Care – oppfølging etter kjøpet",
    copy: "Gjennom Zen Eco Care kan vi tilby tilleggstjenester for blant annet tilsyn, rengjøring, nøkkelhold og vedlikehold.",
  },
];

export default async function CorporateHomesPage() {
  const properties = await getProperties(0, "zeneco");
  const featuredVillas: Property[] = properties
    .filter(isPubliclyAvailableProperty)
    .filter((property) => propertyMatchesType(property, "villa"))
    .slice(0, 3);

  return (
    <main className="corporate-page">
      <SiteHeader locale="no" />
      <section className="image-hero corporate-hero">
        <div className="corporate-hero-shade" />
        <div className="corporate-hero-inner">
          <h1>Bedriftshytte i Spania for norske virksomheter</h1>
          <p>
            Gi ansatte, ledere eller medlemmer tilgang til en firmahytte i Spania. Zen Eco Homes hjelper norske
            virksomheter med å vurdere muligheten, finne riktig bolig og følge opp kjøpet på Costa Blanca.
          </p>
          <div className="hero-actions">
            <Link className="contact-button" href="/kontakt-bedrift">
              Kontakt oss <ArrowRight size={18} />
            </Link>
            <Link className="text-button light" href="#boliger">
              Se boliger
            </Link>
          </div>
        </div>
      </section>

      <section className="section corporate-decision">
        <div className="section-heading">
          <h2>En bedriftshytte – mange muligheter</h2>
        </div>
        <div className="corporate-decision-grid">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              style={{
                padding: "1.5rem",
                borderRadius: "1rem",
                background: "var(--surface, #fff)",
                boxShadow: "0 6px 22px #172f4012",
              }}
            >
              <h3>{benefit.title}</h3>
              <p>{benefit.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section corporate-decision">
        <div className="section-heading">
          <h2>Norsk rådgiver med lokal kjennskap til Costa Blanca</h2>
          <p>
            Hos Zen Eco Homes får dere hjelp av norske rådgivere som kjenner det spanske boligmarkedet og bor på
            Costa Blanca. Vi har selv vært gjennom kjøpsprosessen og hjelper dere med å finne riktig bolig og en
            løsning som passer virksomhetens behov.
          </p>
          <Link className="text-button" href="/om-oss">
            Les mer om oss <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="section corporate-process">
        <div className="section-heading">
          <h2>Dette hjelper Zen Eco Homes med</h2>
          <p>Fra den første idéen til nøklene i hånden – og videre derfra. Zen Eco Homes hjelper dere gjennom hele prosessen.</p>
        </div>
        <div className="corporate-process-grid">
          {steps.map((step) => (
            <article key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </article>
          ))}
        </div>
        <div className="center-action">
          <Link className="contact-button" href="/kontakt-bedrift">
            Kontakt oss om bedriftshytte <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="section corporate-products" id="boliger">
        <div className="section-heading">
          <h2>Se boliger for bedriftshytte i Spania</h2>
        </div>
        {featuredVillas.length > 0 ? (
          <div className="property-grid">
            {featuredVillas.map((property, index) => (
              <PropertyCard key={property.id || property.ref || index} property={property} />
            ))}
          </div>
        ) : (
          <p>Ta kontakt, så finner vi aktuelle villaer som passer virksomhetens behov og budsjett.</p>
        )}
        <div className="center-action">
          <Link className="contact-button" href="/eiendommer">
            Se alle boliger <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="section corporate-decision">
        <div className="section-heading">
          <h2>Dette bør dere vite før dere kjøper</h2>
          <p>
            En bedriftshytte i Spania kan tilpasses både virksomhetens budsjett og hvordan boligen skal brukes. Det
            finnes flere muligheter for eierskap, kostnadsfordeling og organisering av oppholdene.
          </p>
        </div>
        <div className="corporate-decision-grid">
          <article
            style={{
              padding: "1.5rem",
              borderRadius: "1rem",
              background: "var(--surface, #fff)",
              boxShadow: "0 6px 22px #172f4012",
            }}
          >
            <h3>Kostnader</h3>
            <p>
              I tillegg til kjøpesummen kommer kjøpsomkostninger og løpende utgifter. Normalt bør man beregne rundt
              10–15 % av kjøpesummen i ekstra kostnader.
            </p>
          </article>
          <article
            style={{
              padding: "1.5rem",
              borderRadius: "1rem",
              background: "var(--surface, #fff)",
              boxShadow: "0 6px 22px #172f4012",
            }}
          >
            <h3>Skatt og bruk</h3>
            <p>
              En bedriftshytte kan være et skattefritt gode for ansatte når vilkårene er oppfylt. Med tydelige
              retningslinjer for booking og bruk kan virksomheten legge til rette for at flere får glede av boligen.
            </p>
          </article>
          <article
            style={{
              padding: "1.5rem",
              borderRadius: "1rem",
              background: "var(--surface, #fff)",
              boxShadow: "0 6px 22px #172f4012",
            }}
          >
            <h3>Les mer om mulighetene</h3>
            <p>
              Vi har samlet guider om økonomi, eierskap, skatteregler, beslutningsgrunnlag og praktisk bruk av
              bedriftshytte i Spania.
            </p>
          </article>
        </div>
        <div className="center-action hero-actions">
          <Link className="contact-button" href="/bedriftshytte-spania/guider">
            Se alle guider <ArrowRight size={18} />
          </Link>
          <Link
            className="contact-button"
            href="/bedriftshytte-spania/slik-presenterer-du-bedriftshytte-for-styret"
          >
            Sett opp beslutningsnotat <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="section corporate-decision">
        <div className="section-heading">
          <h2>Neste steg for deres virksomhet</h2>
          <p>
            Kontakt oss for en uforpliktende prat for å utforske mulighetene, eller send oss en e-post dersom dere
            har spørsmål. Sammen finner vi ut hva som kan passe for deres virksomhet.
          </p>
          <div className="hero-actions">
            <Link className="contact-button" href="/kontakt-bedrift">
              Kontakt oss <ArrowRight size={18} />
            </Link>
            <Link className="text-button" href="/eiendommer">
              Se boliger <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
