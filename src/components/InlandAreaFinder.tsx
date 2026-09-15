import Link from "next/link";
import { ArrowRight, Building2, Grape, Leaf, Mountain, Waves } from "lucide-react";

const profiles = [
  {
    title: "Kysten fortsatt nær",
    text: "For deg som vil ha mer luft og landsbyfølelse, men fortsatt ønsker enkel tilgang til sjø, Alicante og kystliv.",
    icon: Waves,
    towns: [
      { name: "Busot", slug: "busot" },
      { name: "Monforte del Cid", slug: "monforte-del-cid" },
      { name: "Aspe", slug: "aspe" },
    ],
  },
  {
    title: "Fjell og kjøligere innland",
    text: "For deg som prioriterer natur, høyde, tydeligere årstider og historiske landsbyer fremfor strandnærhet.",
    icon: Mountain,
    towns: [
      { name: "Biar", slug: "biar" },
      { name: "Banyeres de Mariola", slug: "banyeres-de-mariola" },
      { name: "Castalla", slug: "castalla" },
    ],
  },
  {
    title: "Byservice og transport",
    text: "For deg som vil bo i innlandet uten å gi slipp på butikker, helsetjenester, skoler og gode forbindelser videre.",
    icon: Building2,
    towns: [
      { name: "Villena", slug: "villena" },
      { name: "Sax", slug: "sax" },
      { name: "Novelda", slug: "novelda" },
    ],
  },
  {
    title: "Vinland, tomt og finca",
    text: "For deg som ser etter mer landlig preg, vinmarker, større tomter og et prosjekt der plass og uteområder er viktige.",
    icon: Grape,
    towns: [
      { name: "Pinoso", slug: "pinoso" },
      { name: "Hondón de las Nieves", slug: "hondon-de-las-nieves" },
      { name: "La Romana", slug: "la-romana" },
      { name: "Monóvar", slug: "monovar" },
    ],
  },
  {
    title: "Dypere innland og større horisonter",
    text: "For deg som ønsker tydelig innlandsklima, vinby, større avstand til kysten og et mer selvstendig by- og landliv.",
    icon: Leaf,
    towns: [{ name: "Jumilla", slug: "jumilla" }],
  },
] as const;

const comparisons = [
  {
    area: "Busot / Monforte / Aspe",
    bestFor: "Kystnært innland",
    feel: "Landsby eller mindre by med enklere vei mot Alicante og kysten",
    check: "Mikrobeliggenhet, trafikk, tomt og faktisk avstand til daglig service",
  },
  {
    area: "Biar / Banyeres / Castalla",
    bestFor: "Fjell, natur og tydeligere årstider",
    feel: "Historiske landsbyer, høyere terreng og mer uttalt innlandspreg",
    check: "Vinterklima, høyde, adkomst og hvor ofte du skal til kysten",
  },
  {
    area: "Villena / Sax / Novelda",
    bestFor: "Byservice og praktisk hverdag",
    feel: "Mer urban hverdag med butikker, tjenester og transportforbindelser",
    check: "Nabolag, støy, lokal trafikk og hvor landlig du faktisk vil bo",
  },
  {
    area: "Pinoso / Hondón / La Romana / Monóvar",
    bestFor: "Tomt, finca og vinland",
    feel: "Mer landlig, større variasjon i tomter og tydelig vin- og jordbrukslandskap",
    check: "Vann, strøm, adkomst, regulering og avstand til helsetjenester og handel",
  },
  {
    area: "Jumilla",
    bestFor: "Dypere innland og vinby",
    feel: "Selvstendig by omgitt av Monastrell-landskap og større åpne arealer",
    check: "Reisevei til kyst og flyplass, klima og hvor mye bilkjøring som passer deg",
  },
] as const;

export function InlandAreaFinder() {
  return (
    <>
      <section className="inland-area-finder" id="finn-omrade">
        <div className="inland-area-finder-heading">
          <p className="eyebrow">Finn ditt innlandsområde</p>
          <h2>Start med hverdagen du ønsker – ikke med boligannonsen</h2>
          <p>
            Velg det som betyr mest for deg. Dette er ikke en fasit, men en rask måte å snevre inn hvilke områder som bør undersøkes først før vi begynner med tomt og boligmodell.
          </p>
        </div>

        <div className="inland-profile-grid">
          {profiles.map((profile) => {
            const Icon = profile.icon;
            return (
              <article className="inland-profile-card" key={profile.title}>
                <div className="inland-profile-icon" aria-hidden="true"><Icon size={24} /></div>
                <h3>{profile.title}</h3>
                <p>{profile.text}</p>
                <div className="inland-profile-links" aria-label={`Aktuelle områder for ${profile.title}`}>
                  {profile.towns.map((town) => (
                    <Link href={`/inland/${town.slug}`} key={town.slug}>
                      {town.name} <ArrowRight size={14} />
                    </Link>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <p className="inland-area-finder-note">
          Moderne boligmodeller er ikke låst til én av gruppene. Når området er valgt, må en konkret tomt og lokale regler avgjøre hva som faktisk kan bygges.
        </p>
      </section>

      <section className="inland-comparison" aria-labelledby="inland-comparison-title">
        <div className="inland-comparison-heading">
          <p className="eyebrow">Sammenlign før du velger</p>
          <h2 id="inland-comparison-title">Fem forskjellige måter å bo i innlandet på</h2>
          <p>
            Sammenlign livsstil og praktiske hensyn først. Pris og tilgjengelighet må vurderes med ferske, konkrete boliger og tomter når vi vet hvilket delmarked du faktisk vurderer.
          </p>
        </div>

        <div className="inland-comparison-scroll">
          <table className="inland-comparison-table">
            <thead>
              <tr>
                <th>Områdegruppe</th>
                <th>Passer best hvis du vil ha</th>
                <th>Hverdagsfølelse</th>
                <th>Viktig å avklare</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row) => (
                <tr key={row.area}>
                  <th scope="row">{row.area}</th>
                  <td>{row.bestFor}</td>
                  <td>{row.feel}</td>
                  <td>{row.check}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
