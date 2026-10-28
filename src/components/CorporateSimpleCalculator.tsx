"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const eur = new Intl.NumberFormat("nb-NO", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });
const PURCHASE_COST_RATE = 0.12;
const CAPITAL_RATE = 0.04;
const HOLDING_YEARS = 10;

export function CorporateSimpleCalculator() {
  const [totalBudget, setTotalBudget] = useState(500000);
  const [users, setUsers] = useState(50);
  const [weeks, setWeeks] = useState(30);
  const [operating, setOperating] = useState(9000);
  const [page, setPage] = useState<1 | 2>(1);
  const estimate = useMemo(() => {
    const propertyPrice = totalBudget / (1 + PURCHASE_COST_RATE);
    const purchaseCosts = totalBudget - propertyPrice;
    const annualCapitalCost = totalBudget * CAPITAL_RATE;
    const annualCost = operating + annualCapitalCost + purchaseCosts / HOLDING_YEARS;
    return { propertyPrice, purchaseCosts, annualCapitalCost, annualCost, perWeek: weeks > 0 ? annualCost / weeks : null };
  }, [totalBudget, operating, weeks]);

  function saveAndRequest() {
    const detail = {
      propertyPrice: estimate.propertyPrice,
      totalBudget,
      propertyType: "used",
      users,
      employeeWeeks: weeks,
      annualOperating: operating,
      acquisitionPct: PURCHASE_COST_RATE * 100,
      acquisitionCost: estimate.purchaseCosts,
      capitalPct: CAPITAL_RATE * 100,
      annualCapitalCost: estimate.annualCapitalCost,
      holdingYears: HOLDING_YEARS,
      valuePct: 0,
      estimatedFutureValue: estimate.propertyPrice,
      annualCostBeforeValue: estimate.annualCost,
      employeeCostPerWeek: estimate.perWeek,
      assumptions: "Totalbudsjettet inkluderer 12 % illustrerte kjøpsomkostninger. Årlig modellkostnad inkluderer driftskostnader, 4 % alternativ kapitalkostnad og kjøpsomkostninger fordelt over 10 år. Ingen faktisk lånebetaling eller verdiutvikling beregnes. Individuell vurdering er nødvendig.",
    };
    try { sessionStorage.setItem("zeneco-corporate-calculator", JSON.stringify(detail)); } catch {}
    window.dispatchEvent(new CustomEvent("zeneco:corporate-calculator", { detail }));
    document.getElementById("bedriftsvurdering")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function numberField(label: string, value: number, setter: (value: number) => void, max = 1000000000) {
    return <label><span>{label}</span><div className="corporate-number-field">
      <input aria-label={label} type="number" min="0" max={max} step="1" value={value}
        onChange={event => setter(Math.max(0, Math.min(max, Number(event.target.value) || 0)))} />
    </div></label>;
  }

  return <div className="corporate-calculator">
    {page === 1 ? <>
      <h3>Opplysninger og beregning</h3>
      <p>Legg inn totalbudsjettet, inkludert kjøpskostnader, og noen enkle opplysninger om bruken.</p>
      <div className="corporate-calculator-inputs">
        {numberField("Totalbudsjett (€)", totalBudget, setTotalBudget)}
        {numberField("Ansatte / medlemmer", users, setUsers)}
        {numberField("Bruksuker per år", weeks, setWeeks, 52)}
        {numberField("Årlige driftskostnader (€)", operating, setOperating)}
      </div>
      <button type="button" className="corporate-calculator-cta" onClick={() => setPage(2)}>
        Vis resultatet <ArrowRight size={17} />
      </button>
    </> : <>
      <button type="button" className="corporate-calculator-toggle" onClick={() => setPage(1)}>
        <ArrowLeft size={17} /> Endre opplysninger
      </button>
      <h3>Resultater – veiledende estimater</h3>
      <div className="corporate-calculator-results" aria-live="polite">
        <article className="corporate-result-primary">
          <span>Estimert kjøpesum</span><strong>{eur.format(estimate.propertyPrice)}</strong>
          <small>Boligprisen innenfor det oppgitte totalbudsjettet.</small>
        </article>
        <article><span>Totalbudsjett</span><strong>{eur.format(totalBudget)}</strong><small>Inkluderer estimerte kjøpsomkostninger.</small></article>
        <article><span>Estimerte kjøpsomkostninger</span><strong>{eur.format(estimate.purchaseCosts)}</strong><small>12 % av boligprisen i denne illustrasjonen.</small></article>
        <article><span>Årlig drift</span><strong>{eur.format(operating)}</strong></article>
        <article><span>Årlig modellkostnad</span><strong>{eur.format(estimate.annualCost)}</strong>
          <small>Drift, alternativ kapitalkostnad og fordelte kjøpsomkostninger. Ikke låneterminer.</small>
        </article>
        <article><span>Kostnad per bruksuke</span><strong>{estimate.perWeek === null ? "Ikke beregnbar" : eur.format(estimate.perWeek)}</strong>
          <small>Basert på {weeks} bruksuker og {users} potensielle brukere.</small>
        </article>
      </div>
      <p className="corporate-calculator-note">Veiledende beregning med 12 % kjøpsomkostninger, 4 % alternativ kapitalkostnad og 10 års eiertid. Faktiske satser, lån og øvrige forutsetninger må vurderes individuelt.</p>
      <button type="button" className="corporate-calculator-cta" onClick={saveAndRequest}>
        Få en detaljert kostnadsoversikt på e-post <ArrowRight size={17} />
      </button>
      <p style={{ marginTop: 16 }}><Link href="/bedriftshytte-spania/slik-presenterer-du-bedriftshytte-for-styret">Se den omfattende styrekalkulatoren →</Link></p>
    </>}
  </div>;
}
