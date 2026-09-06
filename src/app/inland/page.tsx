import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  BookOpen,
  Check,
  Grape,
  Home,
  Landmark,
  Leaf,
  MapPin,
  Ruler,
  ShieldCheck,
  Snowflake,
  Sprout,
  Sun,
  TreeDeciduous,
  Zap,
} from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { PropertyCard } from "@/components/PropertyCard";
import { SiteHeader } from "@/components/SiteHeader";
import { homeLanguageLinks } from "@/lib/i18n";
import { INLAND_BRAND, inlandTowns } from "@/lib/inland";
import { getInlandProperties } from "@/lib/inlandFeed";

export const metadata: Metadata = {
  title: "Innlandet på Costa Blanca – finca, landsbyhus og gård",
  description: INLAND_BRAND.description,
  alternates: {
    canonical: "/inland",
    languages: {
      "nb-NO": "https://www.zenecohomes.com/inland",
      "x-default": "https://www.zenecohomes.com/inland",
      "de-DE": "https://www.zenecohomes.com/de/inland",
      en: "https://www.zenecohomes.com/en/inland",
    },
  },
  openGraph: {
    title: `${INLAND_BRAND.name} | Finca og landsbyhus i innlandet`,
    description: INLAND_BRAND.tagline,
    url: "https://www.zenecohomes.com/inland",
    siteName: "Zen Eco Homes",
    locale: "nb_NO",
    type: "website",
  },
};

const highlights = [
  {
    icon: Ruler,
    title: "Mer plass for pengene",
    text: "Større tomter og lavere pris per kvadratmeter enn ved kysten. Rom for basseng, hage, gjestehus eller dyrking.",
  },
  {
    icon: Sprout,
    title: "Ro, natur og selvforsyning",
    text: "Vingårder, mandeltrær og åpne landskap. Perfekt for en roligere hverdag og en mer selvforsynt livsstil.",
  },
];

const faq = [
  {
    q: "Hva koster en finca i innlandet sammenlignet med kysten?",
    a: "For prisen av en leilighet ved kysten får du ofte et landsted med flere mål tomt i innlandet. Prisnivået varierer mye med stand, beliggenhet og dokumentasjon – derfor starter vi alltid med en ærlig vurdering av hva budsjettet ditt faktisk rekker til.",
  },
  {
    q: "Er det trygt å kjøpe finca på rustikk tomt?",
    a: "Ja, når det gjøres riktig. Landeiendommer har andre regler enn boliger i by: byggetillatelser, vannrettigheter, brønner og hva som faktisk er lovlig oppført må sjekkes før du signerer noe. Det er nettopp dette vi hjelper deg gjennom.",
  },
  {
    q: "Hvor langt er det til kysten og flyplassen?",
    a: "De fleste innlandsområdene ligger 30–60 minutter fra Alicante flyplass. Hondón-dalene og Castalla er nærmest, Villena har i tillegg høyhastighetstog som tar deg til Alicante på rundt 20 minutter.",
  },
  {
    q: "Kan jeg bo i innlandet hele året?",
    a: "Landsbyene her er levende hele året – de lever av landbruk, industri og lokalt næringsliv, ikke av turisme. Skoler, helsetilbud og butikker holder åpent i februar som i juli. Vintrene er kjøligere enn ved kysten, så god oppvarming er et av punktene vi alltid vurderer.",
  },
];

export default async function InlandPage() {
  const properties = await getInlandProperties();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["RealEstateAgent", "LocalBusiness"],
        "@id": "https://www.zenecohomes.com/inland#agent",
        name: INLAND_BRAND.name,
        url: "https://www.zenecohomes.com/inland",
        description: INLAND_BRAND.description,
        parentOrganization: { "@id": "https://www.zenecohomes.com/#organization" },
        areaServed: inlandTowns.map((town) => town.name),
        founder: {
          "@type": "Person",
          name: "Freddy Bremseth",
          url: "https://www.freddybremseth.com",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };

  return (
    <main className="inland-theme">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteHeader locale="no" languageLinks={homeLanguageLinks("no")} />

      <section className="hero inland-hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">{INLAND_BRAND.name} · Biar · Villena · Sax · Pinoso</p>
          <h1>Det ekte Spania ligger en time fra stranden</h1>
          <p className="hero-copy">
            Fincaer med oliventrær, landsbyhus med historie og gårder med plass til drømmene – til priser
            kysten sluttet å tilby for lenge siden. Vi bor her selv, og hjelper deg å kjøpe trygt.
          </p>
          <div className="portal-actions">
            <a className="contact-button" href="#eiendommer">
              Se innlandseiendommer <ArrowRight size={18} />
            </a>
            <a className="text-button light" href="#freddy">
              Møt rådgiveren som bor her
            </a>
          </div>
        </div>
      </section>

      <section className="trust-band inland-trust">
        <div>
          <strong>Vi bor her selv</strong>
          <span>Rådgiveren din bor i Biar og driver egen olivengård i innlandet</span>
        </div>
        <div>
          <strong>Fincaer og landsbyhus</strong>
          <span>Eiendomstyper og tomter som ikke lenger finnes ved kysten</span>
        </div>
        <div>
          <strong>Trygt landkjøp</strong>
          <span>Rustikk tomt, vann, brønner og dokumentasjon sjekkes før du signerer</span>
        </div>
      </section>

      <section className="section card-list">
        {highlights.map((item) => (
          <article className="info-card" key={item.title}>
            <item.icon />
            <div>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="section split" id="freddy">
        <div>
          <p className="eyebrow">Din rådgiver bor i innlandet</p>
          <h2>«Jeg valgte selv innlandet – og hjelper deg å gjøre det trygt»</h2>
          <p>
            Freddy Bremseth har bodd og jobbet med eiendom i Spania i en årrekke – og da han skulle velge sitt
            eget sted, ble det ikke kysten, men middelalderlandsbyen Biar. Der driver han i dag sin egen
            olivengård, midt i landskapet han hjelper norske kjøpere inn i.
          </p>
          <p>
            Det gir deg en rådgiver som kjenner innlandet fra innsiden: hvilke landsbyer som lever hele året,
            hva en finca faktisk krever, hva vann- og byggerettigheter betyr i praksis – og hva eiendommene er
            verdt, ikke bare hva de annonseres for.
          </p>
          <div className="check-list">
            {[
              "Norsk rådgivning fra første idé til overtakelse",
              "Lokalkunnskap fra Biar, Villena, Sax, Pinoso og dalene rundt",
              "Uavhengig vurdering av pris, stand og dokumentasjon",
            ].map((item) => (
              <span key={item}>
                <Check size={18} /> {item}
              </span>
            ))}
          </div>
        </div>
        <div className="feature-panel">
          <div>
            <Home /> Bor selv i Biar
          </div>
          <div>
            <TreeDeciduous /> Driver egen olivengård
          </div>
          <div>
            <ShieldCheck /> Uavhengig norsk rådgiver
          </div>
          <div>
            <Landmark /> Kjenner landsbyene innenfra
          </div>
        </div>
      </section>

      <section className="section inland-gallery-section">
        <div className="section-heading">
          <p className="eyebrow">Livet i innlandet</p>
          <h2>Slik ser hverdagen ut</h2>
          <p>
            Oliven- og mandellunder, middelalderlandsbyer med borg på høyden og fjell som skifter farge gjennom
            dagen. Dette er landskapet du våkner til – roligere, grønnere og mer ekte enn kysten.
          </p>
        </div>
        <div className="inland-gallery">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1780234215509-992d69f3d5da?auto=format&fit=crop&w=900&q=75"
              alt="Landsby i innlandet med flislagt kirketårn, frukthager og fjell"
              loading="lazy"
            />
            <figcaption>Landsbyliv med historie</figcaption>
          </figure>
          <figure>
            <img
              src="https://images.unsplash.com/photo-1767022094253-e24308b8947e?auto=format&fit=crop&w=900&q=75"
              alt="Olivenlunder på en skråning under et klippefjell i innlandet"
              loading="lazy"
            />
            <figcaption>Oliven- og mandellunder</figcaption>
          </figure>
          <figure>
            <img
              src="https://images.unsplash.com/photo-1763498535698-3bc5c0c59cc0?auto=format&fit=crop&w=900&q=75"
              alt="Frukthage med fjell i horisonten i det spanske innlandet"
              loading="lazy"
            />
            <figcaption>Fjell og frukthager</figcaption>
          </figure>
          <figure>
            <img
              src="https://images.unsplash.com/photo-1633368098503-d4ff388f4f82?auto=format&fit=crop&w=900&q=75"
              alt="Ekte spansk landsby med terrakottatak omgitt av grønne åser"
              loading="lazy"
            />
            <figcaption>Ekte spanske landsbyer</figcaption>
          </figure>
        </div>
      </section>

      <section className="section" id="eiendommer">
        <div className="section-heading">
          <p className="eyebrow">Bygg din bolig</p>
          <h2>Boliger du kan bygge i innlandet</h2>
          <p>
            Boligene under er byggemodeller som passer innlandet – fra fincaer og landsbyhus til moderne villaer.
            De kan settes opp på din egen tomt, og vi hjelper deg å finne riktig tomt der du ønsker å bo.
          </p>
        </div>
        {properties.length > 0 ? (
          <div className="property-grid">
            {properties.slice(0, 6).map((property, index) => (
              <PropertyCard key={property.id || property.ref || index} property={property} priority={index < 3} />
            ))}
          </div>
        ) : (
          <div className="section-heading">
            <p>
              Akkurat nå har vi ingen publiserte innlandseiendommer – men vi vet ofte om fincaer og landsbyhus
              før de annonseres. <a href="#kontakt">Fortell oss hva du ser etter</a>, så varsler vi deg først.
            </p>
          </div>
        )}
        <div className="center-action">
          <Link className="text-button" href="/eiendommer?region=innlandet">
            Se alle innlandseiendommer <ArrowRight size={18} />
          </Link>
        </div>
        <p className="area-disclaimer">
          Boligtypene kan bygges på alle innlandsstedene våre. Prisene inkluderer en beregnet tomtekostnad (fra
          50 000–85 000 euro) – endelig tomtepris regnes ut fra tomten du velger. Ligger tomten lenger unna, kan
          transport og arbeidskraft gi noe ekstra kostnad. Alt avklarer vi tydelig med deg før vi blir enige.
        </p>
      </section>

      <section className="section split inland-build">
        <div>
          <p className="eyebrow">
            <Sun size={16} /> Bygg nytt – energismart
          </p>
          <h2>Nybygg som er billig å eie, både vinter og sommer</h2>
          <p>
            I innlandet anbefaler vi å bygge nytt. Da kan vi gjøre boligen energismart fra grunnen av: kraftig
            isolasjon som holder på varmen om vinteren og stenger heten ute om sommeren, og solpanel som kutter
            strømregningen. Resultatet er lave driftskostnader og en behagelig innetemperatur hele året.
          </p>
          <p>
            Det er også framtidsrettet: fra 2030 ventes strengere energikrav for salg og utleie av bolig i
            Spania (EU-direktivet om bygningers energiytelse). En energieffektiv bolig står da langt sterkere –
            både i bruk, ved utleie og ved videresalg.
          </p>
          <a className="text-button" href="https://books.freddybremseth.com/book/spania-2030" target="_blank" rel="noopener noreferrer">
            Les mer i «Spania 2030» <ArrowRight size={16} />
          </a>
        </div>
        <div className="feature-panel">
          <div>
            <Snowflake /> Isolasjon for vinter
          </div>
          <div>
            <Sun /> Skjerming mot sommervarme
          </div>
          <div>
            <Zap /> Solpanel og lave driftskostnader
          </div>
          <div>
            <ShieldCheck /> Klar for energikravene fra 2030
          </div>
        </div>
      </section>

      <section className="section area-profile-grid">
        <div className="section-heading">
          <p className="eyebrow">Velg ditt innland</p>
          <h2>Landsbyene og dalene vi anbefaler</h2>
          <p>
            Innlandet er ikke ett sted – det er fjellandsbyer, vinbyer og stille daler med hver sin karakter.
            Start med området, så finner vi eiendommen.
          </p>
        </div>
        {inlandTowns.map((town) => (
          <article className="area-profile-card" key={town.slug}>
            <div style={{ backgroundImage: `url(${town.photo})` }} />
            <section>
              <span>{town.eyebrow}</span>
              <h2>{town.name}</h2>
              <p>{town.intro}</p>
              <Link className="text-button area-property-link" href={`/inland/${town.slug}`}>
                <MapPin size={17} /> Utforsk {town.name}
              </Link>
            </section>
          </article>
        ))}
      </section>

      <section className="section proof-section">
        <div className="section-heading">
          <p className="eyebrow">Derfor er innlandskjøp annerledes</p>
          <h2>Landeiendom krever mer enn en visning</h2>
          <p>
            Fincaer og landsteder selges ofte med uklare grenser, uregistrerte utbygg og vannløsninger du ikke
            finner i prospektet. Det er ikke farlig – men det må sjekkes av noen som vet hvor de skal lete.
          </p>
        </div>
        <div className="proof-grid">
          <article>
            <strong>01</strong>
            <h3>Tomt og dokumentasjon</h3>
            <p>Rustikk eller urban tomt? Er alt på eiendommen lovlig oppført og registrert? Vi sjekker før du forelsker deg.</p>
          </article>
          <article>
            <strong>02</strong>
            <h3>Vann, brønn og strøm</h3>
            <p>Byvann, vanningsrettigheter, brønn eller tank – vi vurderer hva løsningen faktisk betyr for hverdag og verdi.</p>
          </article>
          <article>
            <strong>03</strong>
            <h3>Riktig pris og stand</h3>
            <p>Vi vurderer byggets stand, oppvarming og oppgraderingsbehov, og forhandler ut fra hva eiendommen er verdt.</p>
          </article>
        </div>
        <div className="center-action">
          <Link className="text-button" href="/kjopsprosessen">
            Se hele kjøpsprosessen <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="dona-band">
        <div>
          <p className="eyebrow">
            <Grape size={16} /> Fra vår egen gård
          </p>
          <h2>Smaken av livet her: Doña Anna</h2>
          <p>
            På gården i Biar produserer vi Doña Anna – økologisk extra virgin olivenolje med sporbar
            opprinnelse. Det er ikke en sidegeskjeft; det er grunnen til at vi kan si at vi kjenner
            innlandslivet fra innsiden. Jorden, vannet, naboene og rytmen i landsbyen.
          </p>
          <a className="text-button" href="https://donaanna.com" target="_blank" rel="noopener noreferrer">
            Besøk donaanna.com <ArrowRight size={16} />
          </a>
        </div>
        <div className="feature-panel">
          <div>
            <Leaf /> Økologisk olivengård i Biar
          </div>
          <div>
            <ShieldCheck /> Sporbar opprinnelse
          </div>
        </div>
      </section>

      <section className="section area-intro">
        <div className="section-heading">
          <p className="eyebrow">Kyst eller innland?</p>
          <h2>Vi hjelper deg å velge riktig</h2>
          <p>
            Kysten gir enklere utleie, strand og mer service. Innlandet gir mer tomt, ro og natur. Valget bør styres
            av livsstil og hvordan du faktisk skal bruke boligen – og vi hjelper deg å sammenligne ærlig.
          </p>
          <div className="cta-row">
            <a className="contact-button" href="/eiendommer">
              <Home size={18} /> Se boliger
            </a>
            <a className="text-button dark" href="/kjopsprosessen">
              Les om kjøpsprosessen <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section className="section book-band">
        <div className="book-band-body">
          <p className="eyebrow">
            <BookOpen size={16} /> Fra forfatteren
          </p>
          <h2>«Costa Blanca — North, South or Inland?»</h2>
          <p>
            Bok 1 i Freddys serie <em>Let Me Guide You</em> – en ærlig, praktisk guide til å velge riktig del av
            Costa Blanca (nord, sør eller innland) før du kjøper. Hva hvert område faktisk er, og hvordan du
            velger godt.
          </p>
          <a
            className="contact-button"
            href="https://books.freddybremseth.com/book/guide-costa-blanca"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kjøp e-bok – 5 € <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <section className="section proof-section">
        <div className="section-heading">
          <p className="eyebrow">Vanlige spørsmål</p>
          <h2>Lurer du på det samme som andre kjøpere?</h2>
        </div>
        <div className="proof-grid inland-faq">
          {faq.map((item) => (
            <article key={item.q}>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="kontakt">
        <div>
          <p className="eyebrow">Neste steg</p>
          <h2>Fortell oss om innlandsdrømmen din</h2>
          <p>
            Finca med oliventrær? Landsbyhus i Biar? Gård med plass til hester? Fortell oss hva du ser for
            deg, så svarer vi med områder, eiendommer og en ærlig vurdering av budsjettet.
          </p>
        </div>
        <ContactForm source={INLAND_BRAND.leadSource} />
      </section>

      <Footer />
    </main>
  );
}
