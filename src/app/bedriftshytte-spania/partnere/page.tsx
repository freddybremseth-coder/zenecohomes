import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Handshake,
  Network,
  Scale,
  Users,
} from "lucide-react";
import { CorporatePartnerLeadForm } from "@/components/CorporatePartnerLeadForm";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Samarbeidspartner | Zen Corporate Homes",
  description:
    "For norske rådgivere, regnskapsmiljøer, advokatfirmaer, HR-selskaper og organisasjoner som vil introdusere relevante bedrifter til Zen Corporate Homes på Costa Blanca.",
  alternates: { canonical: "/bedriftshytte-spania/partnere" },
  openGraph: {
    title: "Bli samarbeidspartner med Zen Corporate Homes",
    description:
      "Et norsk partneropplegg for rådgivere og organisasjoner med bedriftskunder eller medlemmer som kan være relevante for en bedriftshytte eller firmabolig i Spania.",
    url: "https://www.zenecohomes.com/bedriftshytte-spania/partnere",
    type: "website",
  },
};

const partnerTypes = [
  {
    icon: Scale,
    title: "Regnskap, revisjon og juss",
    text: "Dere kjenner virksomhetenes struktur, beslutningsprosesser og behov. Vi håndterer eiendomssiden på Costa Blanca.",
  },
  {
    icon: Users,
    title: "HR, rekruttering og People",
    text: "For kunder som jobber aktivt med rekruttering, retention og konkrete ansattgoder.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Bedriftsrådgivere",
    text: "For rådgivere som møter eierledere og styrer i spørsmål om organisasjon, kapitalbruk og langsiktige tiltak.",
  },
  {
    icon: Network,
    title: "Nærings- og medlemsorganisasjoner",
    text: "For organisasjoner som vil introdusere konseptet til medlemsbedrifter eller utforske en egen medlemsmodell.",
  },
];

const process = [
  ["01", "Dere introduserer ideen", "En kunde eller medlemsbedrift viser interesse for bedriftshytte, firmabolig eller medlemsbolig i Spania."],
  ["02", "Vi tar behovsavklaringen", "Zen Corporate Homes kartlegger brukere, modell, budsjett, områder og praktisk drift før vi foreslår eiendom."],
  ["03", "Kundens egne rådgivere beholder fagansvaret", "Skatt, selskapsstruktur, arbeidsrett og regnskap kvalitetssikres av kundens kvalifiserte rådgivere."],
  ["04", "Zen håndterer eiendomsløpet", "Vi finner relevante boliger, lager shortlist, koordinerer visninger og følger prosessen på Costa Blanca."],
  ["05", "Lokal oppfølging kan fortsette etter kjøpet", "Property Care kan håndtere nøkkelhold, tilsyn og praktiske tjenester når kunden ønsker det."],
];

export default function CorporatePartnersPage() {
  return (
    <main className="corporate-page">
      <SiteHeader locale="no" />

      <section className="image-hero corporate-hero">
        <div className="corporate-hero-shade" />
        <div className="corporate-hero-inner">
          <p className="eyebrow">Zen Corporate Homes · Partnerkanal Norge</p>
          <h1>Har dere bedriftskunder som kan ha nytte av en bolig i Spania?</h1>
          <p>
            Vi samarbeider med norske rådgivere og organisasjoner som møter bedrifter med behov for ansattgoder,
            ledelsesopphold, medlemsfordeler eller en langsiktig firmabolig på Costa Blanca.
          </p>
          <div className="hero-actions">
            <a className="contact-button" href="#partnersamtale">
              Ta en kort partnersamtale <ArrowRight size={18} />
            </a>
            <Link className="text-button light" href="/bedriftshytte-spania">
              Se Corporate Homes-konseptet
            </Link>
          </div>
          <div className="corporate-hero-points">
            <span><CheckCircle2 size={16} /> Norsk kundedialog</span>
            <span><CheckCircle2 size={16} /> Lokal eiendomskompetanse</span>
            <span><CheckCircle2 size={16} /> Ingen krav om eksklusivitet</span>
          </div>
        </div>
      </section>

      <section className="corporate-intro">
        <div>
          <p className="eyebrow">En tydelig rollefordeling</p>
          <h2>Dere beholder kunderelasjonen. Vi tar eiendomsløpet i Spania.</h2>
        </div>
        <p>
          Partnerkanalen er laget for virksomheter som allerede har tillit hos norske bedrifter eller medlemmer.
          Dere trenger ikke bli eiendomsmeglere eller bygge Spania-kompetanse. Når en relevant kunde ønsker å utforske
          muligheten, kan Zen Corporate Homes håndtere behovsavklaring, områdevalg, boligshortlist, visning og lokal oppfølging.
        </p>
      </section>

      <section className="section corporate-products">
        <div className="section-heading">
          <p className="eyebrow">Hvem passer partnerkanalen for?</p>
          <h2>Rådgivere og organisasjoner som allerede møter de riktige virksomhetene</h2>
        </div>
        <div className="corporate-product-grid">
          {partnerTypes.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title}>
                <Icon size={26} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section corporate-process">
        <div className="section-heading">
          <p className="eyebrow">Slik fungerer det</p>
          <h2>Fra introduksjon til konkret Corporate Home-vurdering</h2>
        </div>
        <div className="corporate-process-grid">
          {process.map(([number, title, text]) => (
            <article key={number}>
              <strong>{number}</strong>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="corporate-split">
        <div className="corporate-split-card corporate-tax-card">
          <Handshake size={28} />
          <p className="eyebrow">Partnerens rolle</p>
          <h2>Introduksjon og faglig tillit</h2>
          <p>
            Dere kan introdusere et konsept som er relevant for kunden, delta i første samtale hvis ønskelig og
            fortsette å være kundens rådgiver på deres eget fagområde.
          </p>
          <p>
            Samarbeidsmodell, ansvarsdeling og eventuell honorering avtales skriftlig før konkrete henvisninger.
            Vi lover ikke provisjon eller økonomiske vilkår før dette er avklart mellom partene.
          </p>
        </div>

        <div className="corporate-split-card corporate-care-card">
          <Building2 size={28} />
          <p className="eyebrow">Zen Corporate Homes sin rolle</p>
          <h2>Behov, bolig, visning og lokal oppfølging</h2>
          <p>
            Vi gjør Corporate Home Assessment, finner et begrenset utvalg relevante boliger og følger kunden gjennom
            eiendomsprosessen på Costa Blanca. Etter kjøpet kan lokal drift og nøkkelhold organiseres separat.
          </p>
          <Link className="contact-button" href="/bedriftshytte-spania/guider">
            Se Corporate-guidene <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="section corporate-decision">
        <div className="section-heading">
          <p className="eyebrow">Hva får partneren?</p>
          <h2>Et konsept dere kan introdusere uten å bygge en ny tjeneste selv</h2>
        </div>
        <div className="corporate-decision-grid">
          <div><Handshake /><strong>Tydelig overlevering</strong><span>Vi tar eiendomsdialogen videre når kunden ønsker det.</span></div>
          <div><BriefcaseBusiness /><strong>Bedriftsvurdering</strong><span>Kunden får et konkret beslutningsgrunnlag før boligjakten starter.</span></div>
          <div><Building2 /><strong>Relevant shortlist</strong><span>Boligene matches mot budsjett, kapasitet, modell og faktisk bruk.</span></div>
          <div><Users /><strong>Langsiktig oppfølging</strong><span>Partneren kan beholde rådgiverrollen mens Zen følger eiendommen lokalt.</span></div>
        </div>
      </section>

      <section className="corporate-contact" id="partnersamtale">
        <div className="corporate-contact-copy">
          <p className="eyebrow">Neste steg</p>
          <h2>Utforsk om partnerkanalen passer deres virksomhet</h2>
          <p>
            Fortell kort hvem dere jobber med og hvordan et samarbeid kan være relevant. Vi starter med en kort,
            uforpliktende samtale og avtaler eventuelle kommersielle rammer før konkrete henvisninger.
          </p>
          <div className="corporate-contact-note">
            <Handshake size={20} />
            <span>Partnerhenvendelser registreres separat fra vanlige bolig- og Corporate Home-kjøperleads.</span>
          </div>
          <Link className="text-button" href="/booking">
            Book en samtale direkte <ArrowRight size={16} />
          </Link>
        </div>
        <CorporatePartnerLeadForm />
      </section>

      <Footer />
    </main>
  );
}
