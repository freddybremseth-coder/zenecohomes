import type { SeoLandingPage } from "./seoLandingPages";

const localPage = ({
  slug,
  place,
  area,
  angle,
  highlights,
  filterHref,
  extraBody,
}: {
  slug: string;
  place: string;
  area: string;
  angle: string;
  highlights: string[];
  filterHref: string;
  extraBody: string;
}): SeoLandingPage => ({
  slug,
  title: `Bolig i ${place}`,
  eyebrow: `${area} · områdeguide`,
  hero: `Bolig i ${place} for norske kjøpere`,
  description: `${place} passer for deg som vurderer bolig, nybygg eller investering på ${area}. Zen Eco Homes hjelper deg å vurdere område, prisnivå, livsstil, tilgjengelighet og trygg kjøpsprosess før reservasjon.`,
  seoTitle: `Bolig i ${place} | Nybygg og eiendom på ${area}`,
  seoDescription: `Vurderer du bolig i ${place}? Les om område, nybygg, prisnivå, livsstil og trygg kjøpsprosess med norsk rådgiver i Spania.`,
  primaryCta: { label: `Se boliger i ${place}`, href: filterHref },
  secondaryCta: { label: "Sammenlign områder", href: "/omrader" },
  sections: [
    {
      heading: `Hvorfor vurdere bolig i ${place}?`,
      body: [
        `Når du vurderer ${place}, bør området vurderes ut fra mer enn pris og bilder: hverdagsliv, avstand til service, solforhold, fremtidig videresalg, tilgang til strand eller natur og hvordan stedet fungerer utenom høysesong er minst like viktig.`,
        angle,
      ],
      bullets: highlights,
    },
    {
      heading: `Nybygg, bruktbolig eller tomt i ${place}`,
      body: [
        `Valget mellom nybygg, bruktbolig og tomt bør styres av budsjett, tidshorisont og hvor mye risiko du ønsker å ta. Nybygg gir ofte mer forutsigbar standard og lavere vedlikehold, mens bruktbolig kan gi mer forhandlingsrom. Tomt og bygging gir størst frihet, men krever grundigere kontroll.`,
        extraBody,
      ],
      bullets: [
        "Få bekreftet oppdatert pris og tilgjengelighet før visning.",
        "Sammenlign med alternative områder og lignende boliger.",
        "Bruk advokat før du signerer bindende avtaler eller betaler reservasjon.",
      ],
    },
    {
      heading: "Slik hjelper Zen Eco Homes",
      body: [
        `Vi hjelper deg å vurdere om ${place} faktisk passer for din livsstil, økonomi og kjøpsplan. Målet er at du skal forstå både mulighetene og begrensningene før du forelsker deg i en enkelt bolig.`,
      ],
      bullets: [
        "Behovsavklaring og realistisk budsjett.",
        "Vurdering av område, prisnivå og alternativer.",
        "Koordinering med megler, utbygger, advokat og bank der det er relevant.",
        "Oppfølging før, under og etter kjøpet.",
      ],
    },
  ],
  faq: [
    {
      question: `Er ${place} et godt sted å kjøpe bolig i Spania?`,
      answer: `${place} kan være et godt valg dersom området passer til din bruk, ditt budsjett og ønsket livsstil. Det viktigste er å sammenligne konkrete boliger, beliggenhet, service og helårsbruk før du bestemmer deg.`,
    },
    {
      question: `Finnes det nybygg i ${place}?`,
      answer: `Det finnes nybygg eller nyere prosjekter i eller rundt flere av områdene vi dekker, men tilgjengelighet og pris endrer seg. Få alltid bekreftet aktuell status i ${place} før du planlegger visning eller reservasjon.`,
    },
    {
      question: `Trenger jeg rådgiver når jeg kjøper bolig i ${place}?`,
      answer: `Rådgivning kan hjelpe deg å sammenligne alternativer, forstå kjøpsprosessen og koordinere neste steg med lokale aktører. Juridisk kontroll bør utføres av kvalifisert advokat før bindende avtaler.`,
    },
  ],
  related: [
    { label: "Bolig i Spania", href: "/bolig-i-spania" },
    { label: "Nybygg Costa Blanca", href: "/nybygg-costa-blanca" },
    { label: "Områdeguide for eiendomskjøp i Spania", href: "/guide/omradeguide-eiendomskjop-i-spania" },
  ],
});

export const localSeoLandingPages: SeoLandingPage[] = [
  localPage({
    slug: "bolig-i-altea",
    place: "Altea",
    area: "Costa Blanca Nord",
    angle:
      "Altea er spesielt interessant for kjøpere som ønsker vakre omgivelser, hvitkalket gamleby, marina, utsikt og restauranter. Området kan passe godt for deg som vil kombinere livskvalitet og ro med praktisk forbindelse til Albir, Benidorm, Calpe og Alicante-Elche flyplass.",
    highlights: [
      "Passer for kjøpere som ønsker vakre omgivelser, utsikt og kvalitetsfølelse.",
      "Praktisk forbindelse til Albir, Calpe, Benidorm og flere serviceområder.",
      "Aktuelt for moderne leiligheter, villaer og utsiktsprosjekter.",
      "Kan fungere både for helårsbruk og feriebruk, avhengig av mikrobeliggenhet.",
    ],
    filterHref: "/eiendommer?region=costa-blanca-nord&area=Altea",
    extraBody:
      "I Altea bør du være særlig oppmerksom på høydeforskjeller, kjøreavstand til daglige tjenester, solretning, utsikt, felleskostnader og om området passer for hverdagsbruk eller primært feriebruk.",
  }),
  localPage({
    slug: "bolig-i-albir",
    place: "Albir",
    area: "Costa Blanca Nord",
    angle:
      "Albir er et kompakt og praktisk kystområde som er relativt flatt i store deler av sentrum, nært stranden og har et godt utvalg av restauranter, butikker og tjenester. Det kan passe godt for kjøpere som ønsker en enkel hverdag med mindre behov for bil.",
    highlights: [
      "Kompakt kystområde med strand, restauranter og daglige tjenester.",
      "Flatt og praktisk sentrum i store deler av området.",
      "Nær Altea, Benidorm og Alfaz del Pi.",
      "Aktuelt for leiligheter, feriebolig og helårsbruk.",
    ],
    filterHref: "/eiendommer?region=costa-blanca-nord&area=Albir",
    extraBody:
      "I Albir er beliggenhet internt i området viktig. Noen boliger gir gangavstand til det meste, mens andre krever mer bilbruk. Dette påvirker både bruk, utleie og videresalg.",
  }),
  localPage({
    slug: "bolig-i-calpe",
    place: "Calpe",
    area: "Costa Blanca Nord",
    angle:
      "Calpe kombinerer strand, byliv, marina, restauranter og det kjente Peñón de Ifach-landemerket. Området passer for deg som ønsker en tydelig kystby med servicetilbud og mulighet for både leilighet, penthouse og villa.",
    highlights: [
      "Tydelig kystprofil med strender, marina og byliv.",
      "Aktuelt for leiligheter, penthouse, villaer og ferieboliger.",
      "Bredt servicetilbud og tydelig sommersesong.",
      "Passer kjøpere som ønsker strandnært liv og urban komfort.",
    ],
    filterHref: "/eiendommer?region=costa-blanca-nord&area=Calpe",
    extraBody:
      "I Calpe bør du vurdere avstand til strand, støy, parkeringsforhold, utsikt, byggets alder og hvor godt boligen fungerer utenom høysesong.",
  }),
  localPage({
    slug: "bolig-i-finestrat",
    place: "Finestrat",
    area: "Costa Blanca Nord",
    angle:
      "Finestrat har et stort innslag av moderne nybygg på Costa Blanca Nord. Mange prosjekter kombinerer moderne arkitektur med nærhet til Benidorm, shopping, golf og strender som Cala de Finestrat; utsikt og faktisk reisevei varierer mellom mikrobeliggenhetene.",
    highlights: [
      "Mange moderne nybygg, villaer og leilighetsprosjekter.",
      "Nær Benidorm, kjøpesentre, golf og strand.",
      "Aktuelt for kjøpere som ønsker moderne standard og utsiktsmuligheter.",
      "Sammenlign mikrobeliggenhet, byggefase og totalpris mellom prosjektene.",
    ],
    filterHref: "/eiendommer?region=costa-blanca-nord&area=Finestrat",
    extraBody:
      "I Finestrat bør du sammenligne byggefaser, utsikt, støy fra veier, tilgang til service og hva som er inkludert i nybyggprisen. Prisnivået kan variere betydelig mellom prosjektene.",
  }),
  localPage({
    slug: "bolig-i-polop",
    place: "Polop",
    area: "Costa Blanca Nord",
    angle:
      "Polop passer for kjøpere som ønsker roligere omgivelser, fjellutsikt og mulighet for mer plass rundt boligen enn i tettere kystområder. Samtidig er Altea, La Nucía, Benidorm og kysten innen praktisk kjøreavstand.",
    highlights: [
      "Roligere område med fjell, natur og utsikt.",
      "Mulighet for villa, rekkehus og større uteareal i mindre tettbygde omgivelser.",
      "Aktuelt for villaer, rekkehus og nybyggprosjekter.",
      "Passer kjøpere som ønsker mer plass og ikke trenger strand i gangavstand.",
    ],
    filterHref: "/eiendommer?region=costa-blanca-nord&area=Polop",
    extraBody:
      "I Polop bør du vurdere transportbehov, avstand til daglige tjenester, solforhold, utsikt, felleskostnader og om du ønsker en roligere hverdag fremfor strandnær beliggenhet.",
  }),
  localPage({
    slug: "bolig-i-pinoso",
    place: "Pinoso",
    area: "innlandet i Alicante",
    angle:
      "Pinoso er interessant for kjøpere som ønsker stor tomt, roligere omgivelser, natur, vinmarker og mulighet for å bygge eller kjøpe moderne bolig med mer plass. Området passer spesielt godt for deg som ønsker en mer landlig og selvstendig livsstil i Spania.",
    highlights: [
      "Aktuelt for store tomter, villaer, finca og moderne nybygg.",
      "Mulighet for mer plass og privatliv enn i tettere kystområder.",
      "Passer kjøpere som ønsker natur, privatliv og langsiktig livsstil.",
      "Viktig å kontrollere vann, strøm, adkomst, regulering og byggetillatelse.",
    ],
    filterHref: "/eiendommer?area=Pinoso",
    extraBody:
      "I Pinoso er due diligence ekstra viktig ved tomt og nybygg. Reguleringsforhold, vann, strøm, adkomst, grunnforhold og totalbudsjett bør avklares før reservasjon eller kjøp.",
  }),
];
