"use client";

import { useId, useState, type KeyboardEvent } from "react";
import { ArrowUpRight, BarChart3, Compass, MapPin, Users, UtensilsCrossed } from "lucide-react";
import type { FactSource, PriceFact, TownAreaFacts } from "@/lib/areaFactData";

function priceGrowth(fact: PriceFact, years: 1 | 2 | 3 | 4) {
  const now = fact.months[2026];
  const baseline = fact.months[2026 - years];
  return now && baseline > 0 ? (now / baseline - 1) * 100 : null;
}

type TabId = "fakta" | "priser" | "opplevelser";
const TABS: { id: TabId; title: string }[] = [
  { id: "fakta", title: "Nøkkeltall" },
  { id: "priser", title: "Boligpriser" },
  { id: "opplevelser", title: "Opplevelser" },
];

function Source({ source }: { source: FactSource }) {
  return (
    <a className="area-facts-source" href={source.url} target="_blank" rel="noopener noreferrer">
      Kilde: {source.label} <ArrowUpRight size={13} aria-hidden="true" />
    </a>
  );
}
function Stat({
  label, value, footnote, source,
}: { label: string; value: string; footnote?: string; source?: FactSource }) {
  return (
    <div className="area-fact-stat">
      <dt>{label}</dt>
      <dd>{value}</dd>
      {footnote && <p>{footnote}</p>}
      {source && <Source source={source} />}
    </div>
  );
}

export function AreaFactsTabs({ facts }: { facts: TownAreaFacts }) {
  const [tab, setTab] = useState<TabId>("fakta");
  const id = useId().replace(/:/g, "");
  const format = (n: number) => new Intl.NumberFormat("nb-NO").format(n);
  const keyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const next = event.key === "ArrowRight" ? index + 1 : event.key === "ArrowLeft" ? index - 1 : null;
    if (next !== null) {
      event.preventDefault();
      const selected = TABS[(next + TABS.length) % TABS.length];
      setTab(selected.id);
      document.getElementById(`${id}-tab-${selected.id}`)?.focus();
    }
    if (event.key === "Home" || event.key === "End") {
      event.preventDefault();
      const selected = TABS[event.key === "Home" ? 0 : TABS.length - 1];
      setTab(selected.id);
      document.getElementById(`${id}-tab-${selected.id}`)?.focus();
    }
  };

  return (
    <section className="section area-facts-section" aria-labelledby={`${id}-heading`}>
      <div className="area-facts-intro">
        <div>
          <p className="eyebrow"><Compass size={16} aria-hidden="true" /> LOKAL INNSIKT</p>
          <h2 id={`${id}-heading`}>Fakta om {facts.name}</h2>
          <p>Et raskt beslutningsgrunnlag med dokumenterte tall, beliggenhet og opplevelser.</p>
        </div>
        <p className="area-facts-trust">Tall gjelder oppgitt kommune og måleår. Manglende data blir ikke anslått.</p>
      </div>
      <div className="area-facts-surface">
        <div className="area-facts-tabs" role="tablist" aria-label={`Faktakategorier for ${facts.name}`}>
          {TABS.map((item, index) => (
            <button
              type="button"
              key={item.id}
              id={`${id}-tab-${item.id}`}
              role="tab"
              aria-controls={`${id}-panel-${item.id}`}
              aria-selected={tab === item.id}
              tabIndex={tab === item.id ? 0 : -1}
              onKeyDown={(event) => keyDown(event, index)}
              className={tab === item.id ? "active" : ""}
              onClick={() => setTab(item.id)}
            >
              {item.id === "fakta" ? <Users size={16} /> : item.id === "priser" ? <BarChart3 size={16} /> : <MapPin size={16} />}
              {item.title}
            </button>
          ))}
        </div>
        <div role="tabpanel" id={`${id}-panel-${tab}`} aria-labelledby={`${id}-tab-${tab}`} tabIndex={0} className="area-facts-panel">
          {tab === "fakta" && (
            <>
              <dl className="area-facts-grid">
                <Stat
                  label="Innbyggere"
                  value={facts.population ? format(facts.population.value) : "Ikke verifisert"}
                  footnote={facts.population
                    ? `${facts.population.municipality} kommune · ${facts.population.year}`
                    : "Kun offisielle kommunetall publiseres."}
                  source={facts.population?.source}
                />
                <Stat
                  label="Til Alicante flyplass"
                  value={facts.airportDirectKm !== null ? `ca. ${facts.airportDirectKm} km` : "Se rute i kart"}
                  footnote={facts.airportDirectKm !== null ? "Luftlinje fra stedets sentrum – ikke kjøreavstand." : "Avstand fra bolig må sjekkes."}
                />
                <Stat
                  label="Til nærmeste strand"
                  value={facts.beachNote ? "Se strandsoner" : "Adresseavhengig"}
                  footnote={facts.beachNote || "Avstand kan ikke fastslås uten adresse."}
                />
                <Stat
                  label="Nasjonaliteter"
                  value={facts.nationality?.length ? `${facts.nationality.length} dokumenterte grupper` : "Ikke verifisert"}
                  footnote="Fordeling må bygge på INEs kommunetabeller, ikke turisme eller synsinntrykk."
                />
                <Stat label="Restauranter" value={facts.restaurants ? `ca. ${format(facts.restaurants.value)}` : "Ikke verifisert"} footnote="Antall krever kilde, datodato og avgrensning." source={facts.restaurants?.source} />
                <Stat label="Barer og kaféer" value={facts.bars ? `ca. ${format(facts.bars.value)}` : "Ikke verifisert"} footnote="Ulike registre kan telle virksomhetene forskjellig." source={facts.bars?.source} />
              </dl>
              <div className="area-facts-links">
                <a href={facts.airportMapsUrl} rel="noopener noreferrer" target="_blank">Beregn kjørerute til flyplassen <ArrowUpRight size={15} /></a>
                <a href={facts.beachMapsUrl} rel="noopener noreferrer" target="_blank">Se strender i kart <ArrowUpRight size={15} /></a>
              </div>
            </>
          )}
          {tab === "priser" && (
            facts.price ? (
              <div className="area-facts-prices">
                <div className="area-facts-price-header">
                  <div>
                    <span className="area-facts-small-title">Annonsert pris · september 2026</span>
                    <strong>{format(facts.price.months[2026])} €/m²</strong>
                    <p>{facts.price.municipality} kommune</p>
                  </div>
                  <Source source={facts.price.source} />
                </div>
                <h3>Samlet prisendring siste 1–4 år</h3>
                <div className="area-facts-price-bars">
                  {([1, 2, 3, 4] as const).map((years) => {
                    const change = priceGrowth(facts.price!, years);
                    return (
                      <div className="area-facts-price-row" key={years}>
                        <span>{years} år</span>
                        <div className="area-facts-price-track">
                          <div className="area-facts-price-fill" style={{ width: `${Math.min(100, Math.max(0, Math.abs(change ?? 0) / 60 * 100))}%` }} />
                        </div>
                        <strong>{change === null ? "–" : `${change >= 0 ? "+" : ""}${change.toLocaleString("nb-NO", { maximumFractionDigits: 1, minimumFractionDigits: 1 })} %`}</strong>
                      </div>
                    );
                  })}
                </div>
                <p className="area-facts-method">Sammenligner september hvert år, ikke gjennomsnittlig årlig vekst. Idealista måler annonserte priser, ikke registrerte salgspriser. Metoden ble endret i juli 2026; eldre tall bør derfor tolkes med forsiktighet.</p>
              </div>
            ) : (
              <div className="area-facts-pending">
                <BarChart3 size={29} />
                <h3>Kommunetall er ikke kvalitetssikret ennå</h3>
                <p>Vi publiserer fireårsutviklingen når samme datakilde og geografiske avgrensning er kontrollert. Vi bruker ikke tall fra nabokommunen som om de gjelder dette området.</p>
                <a href="https://www.idealista.com/sala-de-prensa/informes-precio-vivienda/" target="_blank" rel="noopener noreferrer">Åpne Idealistas prisrapporter <ArrowUpRight size={15} /></a>
              </div>
            )
          )}
          {tab === "opplevelser" && (
            <div className="area-facts-experiences">
              <h3>Viktige steder og attraksjoner</h3>
              {facts.attractions.length ? (
                <>
                  <ul>{facts.attractions.map((place) => <li key={place}><MapPin size={16} aria-hidden="true" />{place}</li>)}</ul>
                  {facts.attractionSource && <Source source={facts.attractionSource} />}
                </>
              ) : (
                <p>Vi har foreløpig ikke tilstrekkelig kildegrunnlag for en egen attraksjonsliste. Se lokal områdeguide og kart for flere alternativer.</p>
              )}
              <div className="area-facts-dining"><UtensilsCrossed size={20} aria-hidden="true" /><p>Restauranter og barer endrer seg ofte. Antall publiseres først når geografisk avgrensning, registreringsmetode og datodato er bekreftet.</p></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
