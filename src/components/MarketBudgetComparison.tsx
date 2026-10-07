import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

const priceLevels = [
  {
    label: "Under €300.000",
    title: "Tre helt forskjellige kjøp under samme prisgrense",
    intro:
      "Under €300.000 finner du ikke én bestemt boligtype. Samme budsjett kan gi penthouse, 2-soveromsleilighet eller en mindre bolig i Finestrat.",
    rows: [
      ["SP0674", "Villajoyosa", "€252.000", "Penthouse · 3 soverom"],
      ["N9860", "Villajoyosa", "€275.000", "Leilighet · 2 soverom · 82 m²"],
      ["N6149", "Finestrat", "€280.000", "Leilighet · 1 soverom"],
    ],
    takeaway:
      "Prisfilteret alene forteller lite. Boligtype, mikrobeliggenhet, prosjekt og hva som faktisk er inkludert må sammenlignes før du konkluderer.",
  },
  {
    label: "Rundt €430.000",
    title: "Nesten samme pris – ulik boligtype",
    intro:
      "To Finestrat-boliger ligger bare €2.400 fra hverandre, men boligtypen og arealet er forskjellig.",
    rows: [
      ["SP1663", "Finestrat", "€430.000", "Leilighet · 2 soverom"],
      ["N8643", "Finestrat", "€432.400", "Bungalow · 2 soverom"],
    ],
    takeaway:
      "Når prisforskjellen er liten, bør du sammenligne uteareal, etasje, planløsning, energiklasse, fellesanlegg og hvordan boligen skal brukes.",
  },
  {
    label: "€375.000–€516.000",
    title: "Beliggenhet, boligtype og størrelse begynner å dra i ulike retninger",
    intro:
      "I dette intervallet ser du tydelig hvorfor «rundt €500.000» ikke beskriver én bestemt standard eller boligtype.",
    rows: [
      ["N9203", "Villajoyosa", "€375.000", "Leilighet · 2 soverom · 81 m² · basseng"],
      ["N9098", "Benidorm", "€456.000", "Villa · 3 soverom · 140 m² · 801 m² tomt"],
      ["N9096", "Benidorm", "€516.000", "Villa · 4 soverom · 155 m² · 801 m² tomt"],
    ],
    takeaway:
      "De ekstra euroene kjøper ikke bare flere kvadratmeter. De kan kjøpe en annen hverdag, boligtype, tomt, antall rom eller en mer attraktiv mikrobeliggenhet.",
  },
  {
    label: "Rundt €600.000",
    title: "Benidorm, Polop eller Finestrat – samme budsjett, tre hverdager",
    intro:
      "Tre boliger ligger innenfor omtrent €10.000, men er svært forskjellige produkter.",
    rows: [
      ["N9095", "Benidorm", "€594.000", "Villa · 4 soverom · 801 m² tomt"],
      ["N8511", "Polop", "€602.000", "Villa · 3 soverom · 426 m² tomt"],
      ["SP1617", "Finestrat", "€604.000", "Penthouse · 3 soverom"],
    ],
    takeaway:
      "På dette nivået bør område og bruk styre først: by og service, mer ro og tomt, eller enklere feriebruk i et moderne prosjekt.",
  },
  {
    label: "€650.000–€736.000",
    title: "Finestrat viser hvorfor pris og €/m² ikke kan stå alene",
    intro:
      "Innenfor et relativt smalt prisintervall varierer publisert boligflate og tomtestørrelse kraftig.",
    rows: [
      ["N9010", "Finestrat", "€650.000", "Villa · 3 soverom · færre publiserte nøkkeltall"],
      ["N9835", "Finestrat", "€690.950", "Villa · 114 m² bolig · 521 m² tomt"],
      ["N8313", "Finestrat", "€700.000", "Villa · 314 m² bolig · 271 m² tomt"],
      ["N8058", "Finestrat", "€709.900", "Villa · 155 m² bolig · 598 m² tomt"],
      ["SP1296", "Finestrat", "€735.000", "Villa · 202 m² bolig · 421 m² tomt · basseng"],
      ["N9834", "Finestrat", "€735.950", "Villa · 128 m² bolig · 457 m² tomt · basseng"],
    ],
    takeaway:
      "Store avvik i publiserte nøkkeltall er et signal om å kontrollere datagrunnlaget, hva arealet faktisk inkluderer, tomten, utsikten, leveringsnivået og prosjektets kvaliteter.",
  },
] as const;

export function MarketBudgetComparison() {
  return (
    <section className="market-budget-comparison" aria-labelledby="market-budget-comparison-title">
      <div className="market-budget-comparison-heading">
        <p className="eyebrow">Prisnivåer og steder</p>
        <h2 id="market-budget-comparison-title">Åpne prisnivået du vil sammenligne</h2>
        <p>
          I stedet for mange nesten like artikler samler vi de konkrete sammenligningene her.
          Prisene er markedsøyeblikksbilder og må bekreftes på nytt før visning eller reservasjon.
        </p>
      </div>

      <div className="market-budget-accordion">
        {priceLevels.map((level, index) => (
          <details key={level.label} open={index === 0}>
            <summary>
              <span>
                <strong>{level.label}</strong>
                <small>{level.title}</small>
              </span>
              <span className="market-budget-summary-action">Se sammenligning</span>
            </summary>
            <div className="market-budget-panel">
              <p>{level.intro}</p>
              <div className="market-budget-table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Ref.</th>
                      <th>Område</th>
                      <th>Pris</th>
                      <th>Eksempel</th>
                    </tr>
                  </thead>
                  <tbody>
                    {level.rows.map((row) => (
                      <tr key={row[0]}>
                        <td>{row[0]}</td>
                        <td><MapPin size={14} aria-hidden="true" /> {row[1]}</td>
                        <td>{row[2]}</td>
                        <td>{row[3]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="market-budget-takeaway"><strong>Hva dette viser:</strong> {level.takeaway}</p>
            </div>
          </details>
        ))}
      </div>

      <div className="market-budget-links">
        <Link href="/omrader/costa-blanca-nord">
          Sammenlign områdene <ArrowRight size={15} />
        </Link>
        <Link href="/eiendommer?region=costa-blanca-nord">
          Se dagens boliger <ArrowRight size={15} />
        </Link>
      </div>
    </section>
  );
}
