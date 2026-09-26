"use client";

import { useMemo, useState } from "react";
import { Building2, CalendarDays, Calculator, Users } from "lucide-react";

const euro = new Intl.NumberFormat("nb-NO", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

function positive(value: number, fallback: number) {
  return Number.isFinite(value) && value > 0 ? value : fallback;
}

export function CorporateHomeCalculator() {
  const [propertyPrice, setPropertyPrice] = useState(450000);
  const [annualOperating, setAnnualOperating] = useState(12000);
  const [users, setUsers] = useState(50);
  const [weeks, setWeeks] = useState(40);

  const result = useMemo(() => {
    const price = positive(propertyPrice, 450000);
    const operating = positive(annualOperating, 12000);
    const people = positive(users, 50);
    const usedWeeks = Math.min(52, positive(weeks, 40));
    const fiveYearWeeks = usedWeeks * 5;

    return {
      perUserCapital: price / people,
      perUserAnnual: operating / people,
      annualPerWeek: operating / usedWeeks,
      fiveYearUseIndicator: (price + operating * 5) / fiveYearWeeks,
    };
  }, [propertyPrice, annualOperating, users, weeks]);

  return (
    <div className="corporate-calculator">
      <div className="corporate-calculator-inputs">
        <label>
          <span><Building2 size={17} /> Kjøpesum</span>
          <div className="corporate-number-field">
            <input
              type="number"
              min="100000"
              step="10000"
              value={propertyPrice}
              onChange={(event) => setPropertyPrice(Number(event.target.value))}
            />
            <b>EUR</b>
          </div>
        </label>
        <label>
          <span><Calculator size={17} /> Årlig drift, estimat</span>
          <div className="corporate-number-field">
            <input
              type="number"
              min="1000"
              step="1000"
              value={annualOperating}
              onChange={(event) => setAnnualOperating(Number(event.target.value))}
            />
            <b>EUR</b>
          </div>
        </label>
        <label>
          <span><Users size={17} /> Ansatte / medlemmer</span>
          <input
            type="number"
            min="1"
            step="1"
            value={users}
            onChange={(event) => setUsers(Number(event.target.value))}
          />
        </label>
        <label>
          <span><CalendarDays size={17} /> Planlagte bruksuker per år</span>
          <input
            type="number"
            min="1"
            max="52"
            step="1"
            value={weeks}
            onChange={(event) => setWeeks(Number(event.target.value))}
          />
        </label>
      </div>

      <div className="corporate-calculator-results" aria-live="polite">
        <article>
          <span>Kjøpesum fordelt per bruker</span>
          <strong>{euro.format(result.perUserCapital)}</strong>
        </article>
        <article>
          <span>Årlig drift per bruker</span>
          <strong>{euro.format(result.perUserAnnual)}</strong>
        </article>
        <article>
          <span>Årlig drift per planlagt bruksuke</span>
          <strong>{euro.format(result.annualPerWeek)}</strong>
        </article>
        <article>
          <span>Enkel 5-års kostnadsindikator per bruksuke</span>
          <strong>{euro.format(result.fiveYearUseIndicator)}</strong>
        </article>
      </div>

      <p className="corporate-calculator-note">
        Illustrasjonen er kun et planleggingsverktøy. Den inkluderer ikke finansiering, kjøpskostnader, skatt,
        verdiendring, videresalgsverdi eller individuelle juridiske og regnskapsmessige forhold.
      </p>
    </div>
  );
}
