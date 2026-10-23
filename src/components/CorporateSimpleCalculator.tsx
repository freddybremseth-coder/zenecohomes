"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const eur = new Intl.NumberFormat("nb-NO", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });
export function CorporateSimpleCalculator() {
  const [price, setPrice] = useState(450000);
  const [users, setUsers] = useState(50);
  const [weeks, setWeeks] = useState(30);
  const [operating, setOperating] = useState(9000);
  const estimate = useMemo(() => {
    const purchaseCosts = price * 0.12;
    const annualCost = operating + (price + purchaseCosts) * 0.04 + purchaseCosts / 10;
    return { purchaseCosts, annualCost, perWeek: weeks > 0 ? annualCost / weeks : null };
  }, [price, operating, weeks]);
  function saveAndRequest() {
    const detail = {
      propertyPrice: price, totalBudget: price + estimate.purchaseCosts,
      propertyType: "used", users, employeeWeeks: weeks,
      annualOperating: operating, acquisitionPct: 12, acquisitionCost: estimate.purchaseCosts,
      capitalPct: 4, annualCapitalCost: (price + estimate.purchaseCosts) * 0.04,
      holdingYears: 10, valuePct: 0, estimatedFutureValue: price,
      annualCostBeforeValue: estimate.annualCost, employeeCostPerWeek: estimate.perWeek,
      assumptions: "Forenklet illustrasjon: 12 % kjøpsomkostninger, 4 % alternativ kapitalkostnad, 10 års fordeling av kjøpsomkostninger. Ingen finansiering eller verdiendring medregnet. Individuell vurdering er nødvendig.",
    };
    try { sessionStorage.setItem("zeneco-corporate-calculator", JSON.stringify(detail)); } catch {}
    window.dispatchEvent(new CustomEvent("zeneco:corporate-calculator", { detail }));
    document.getElementById("bedriftsvurdering")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  return <div className="corporate-calculator">
    <h3>Få en rask økonomisk oversikt</h3>
    <p>Fyll inn fire tall. Resultatet er et enkelt planleggingsestimat.</p>
    <div className="corporate-calculator-inputs">
      {([["Kjøpesum (€)",price,setPrice],["Ansatte / medlemmer",users,setUsers],["Bruksuker per år",weeks,setWeeks],["Årlig drift (€)",operating,setOperating]] as const).map(([label,value,setter])=>
        <label key={label}><span>{label}</span><div className="corporate-number-field"><input aria-label={label} type="number" min="0" max={label==="Bruksuker per år"?"52":undefined} value={value} onChange={e=>setter(Math.max(0,Math.min(label==="Bruksuker per år"?52:1e9, Number(e.target.value)||0)))}/></div></label>
      )}
    </div>
    <div className="corporate-calculator-results" aria-live="polite">
      <article><span>Estimert investering inkl. kjøpskostnader</span><strong>{eur.format(price + estimate.purchaseCosts)}</strong></article>
      <article><span>Årlig modellkostnad</span><strong>{eur.format(estimate.annualCost)}</strong><small>Inkluderer drift, alternativ kapitalkostnad og fordelte kjøpskostnader. Ikke lånebetaling.</small></article>
      <article><span>Kostnad per bruksuke</span><strong>{estimate.perWeek === null ? "–" : eur.format(estimate.perWeek)}</strong></article>
    </div>
    <p className="corporate-calculator-note">Illustrasjon med antatt 12 % kjøpskostnader, 4 % alternativ kapitalkostnad og 10 års eiertid. Ikke et tilbud, lånekalkyle eller verdianslag.</p>
    <button type="button" className="corporate-calculator-cta" onClick={saveAndRequest}>Få utvidet oversikt på e-post <ArrowRight size={17}/></button>
    <p style={{marginTop:16}}><Link href="/bedriftshytte-spania/slik-presenterer-du-bedriftshytte-for-styret">Åpne den omfattende styrekalkulatoren →</Link></p>
  </div>;
}
