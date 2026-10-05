"use client";

import { useMemo, useState } from "react";
import {
  Building2,
  CalendarDays,
  Calculator,
  ChevronDown,
  ChevronUp,
  Hotel,
  LineChart,
  Users,
} from "lucide-react";

const euro = new Intl.NumberFormat("nb-NO", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

const VALUE_SCENARIOS = [0, 2, 3, 5];

function nonNegative(value: number, fallback = 0) {
  return Number.isFinite(value) && value >= 0 ? value : fallback;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export type CorporateCalculatorResult = {
  propertyPrice: number;
  users: number;
  employeeWeeks: number;
  workWeeks: number;
  totalWeeks: number;
  annualOperating: number;
  acquisitionPct: number;
  capitalPct: number;
  valuePct: number;
  holdingYears: number;
  annualCostBeforeValue: number;
  costPerUseWeek: number;
  hotelWorkAlternative: number;
  estimatedFutureValue: number;
  scenarioValueChangeYearOne: number;
};

export function CorporateHomeCalculator() {
  const [propertyPrice, setPropertyPrice] = useState(450000);
  const [users, setUsers] = useState(50);
  const [employeeWeeks, setEmployeeWeeks] = useState(30);
  const [workWeeks, setWorkWeeks] = useState(10);

  const [showAdvanced, setShowAdvanced] = useState(false);
  const [annualOperating, setAnnualOperating] = useState(12000);
  const [acquisitionPct, setAcquisitionPct] = useState(12);
  const [capitalPct, setCapitalPct] = useState(4);
  const [valuePct, setValuePct] = useState(3);
  const [holdingYears, setHoldingYears] = useState(10);
  const [peoplePerWorkStay, setPeoplePerWorkStay] = useState(8);
  const [hotelNightRate, setHotelNightRate] = useState(180);
  const [hotelNights, setHotelNights] = useState(5);

  const result = useMemo<CorporateCalculatorResult>(() => {
    const price = Math.max(0, nonNegative(propertyPrice, 450000));
    const people = Math.max(1, nonNegative(users, 50));
    const employee = clamp(nonNegative(employeeWeeks, 30), 0, 52);
    const work = clamp(nonNegative(workWeeks, 10), 0, 52 - employee);
    const totalWeeks = employee + work;

    const operating = nonNegative(annualOperating, 12000);
    const acquisition = price * (nonNegative(acquisitionPct, 12) / 100);
    const capitalBase = price + acquisition;
    const capitalCost = capitalBase * (nonNegative(capitalPct, 4) / 100);
    const annualisedAcquisition = holdingYears > 0 ? acquisition / holdingYears : acquisition;
    const annualCostBeforeValue = operating + capitalCost + annualisedAcquisition;
    const costPerUseWeek = totalWeeks > 0 ? annualCostBeforeValue / totalWeeks : annualCostBeforeValue;

    const rooms = Math.max(1, Math.ceil(nonNegative(peoplePerWorkStay, 8) / 2));
    const hotelPerWorkWeek = rooms * nonNegative(hotelNightRate, 180) * nonNegative(hotelNights, 5);
    const hotelWorkAlternative = hotelPerWorkWeek * work;

    const years = Math.max(1, Math.round(nonNegative(holdingYears, 10)));
    const estimatedFutureValue = price * Math.pow(1 + nonNegative(valuePct, 3) / 100, years);
    const scenarioValueChangeYearOne = price * (nonNegative(valuePct, 3) / 100);

    return {
      propertyPrice: price,
      users: people,
      employeeWeeks: employee,
      workWeeks: work,
      totalWeeks,
      annualOperating: operating,
      acquisitionPct,
      capitalPct,
      valuePct,
      holdingYears: years,
      annualCostBeforeValue,
      costPerUseWeek,
      hotelWorkAlternative,
      estimatedFutureValue,
      scenarioValueChangeYearOne,
    };
  }, [
    propertyPrice,
    users,
    employeeWeeks,
    workWeeks,
    annualOperating,
    acquisitionPct,
    capitalPct,
    valuePct,
    holdingYears,
    peoplePerWorkStay,
    hotelNightRate,
    hotelNights,
  ]);

  function requestDecisionNote() {
    const detail = {
      ...result,
      peoplePerWorkStay,
      hotelNightRate,
      hotelNights,
      generatedAt: new Date().toISOString(),
    };

    window.sessionStorage.setItem("zeneco-corporate-calculator", JSON.stringify(detail));
    window.dispatchEvent(new CustomEvent("zeneco:corporate-calculator", { detail }));
    document.getElementById("bedriftsvurdering")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

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
          <span><CalendarDays size={17} /> Uker til ansatte / medlemmer</span>
          <input
            type="number"
            min="0"
            max="52"
            step="1"
            value={employeeWeeks}
            onChange={(event) => setEmployeeWeeks(Number(event.target.value))}
          />
        </label>

        <label>
          <span><Calculator size={17} /> Arbeids- og samlinguker</span>
          <input
            type="number"
            min="0"
            max="52"
            step="1"
            value={workWeeks}
            onChange={(event) => setWorkWeeks(Number(event.target.value))}
          />
        </label>
      </div>

      <button
        type="button"
        className="corporate-calculator-toggle"
        aria-expanded={showAdvanced}
        onClick={() => setShowAdvanced((value) => !value)}
      >
        {showAdvanced ? <ChevronUp size={17} /> : <ChevronDown size={17} />}
        {showAdvanced ? "Skjul økonomiske forutsetninger" : "Juster økonomiske forutsetninger"}
      </button>

      {showAdvanced && (
        <div className="corporate-calculator-advanced">
          <label>
            <span>Årlig drift</span>
            <div className="corporate-number-field">
              <input type="number" min="0" step="1000" value={annualOperating} onChange={(event) => setAnnualOperating(Number(event.target.value))} />
              <b>EUR</b>
            </div>
          </label>
          <label>
            <span>Kjøpskostnader</span>
            <div className="corporate-number-field">
              <input type="number" min="0" step="0.5" value={acquisitionPct} onChange={(event) => setAcquisitionPct(Number(event.target.value))} />
              <b>%</b>
            </div>
          </label>
          <label>
            <span>Kapitalkostnad</span>
            <div className="corporate-number-field">
              <input type="number" min="0" step="0.25" value={capitalPct} onChange={(event) => setCapitalPct(Number(event.target.value))} />
              <b>%</b>
            </div>
          </label>
          <label>
            <span>Eiertid i modellen</span>
            <div className="corporate-number-field">
              <input type="number" min="1" max="30" step="1" value={holdingYears} onChange={(event) => setHoldingYears(Number(event.target.value))} />
              <b>år</b>
            </div>
          </label>

          <div className="corporate-calculator-scenario">
            <span><LineChart size={17} /> Scenario for årlig verdiendring</span>
            <div className="corporate-scenario-buttons">
              {VALUE_SCENARIOS.map((scenario) => (
                <button
                  type="button"
                  key={scenario}
                  className={valuePct === scenario ? "active" : ""}
                  aria-pressed={valuePct === scenario}
                  onClick={() => setValuePct(scenario)}
                >
                  {scenario} %
                </button>
              ))}
            </div>
          </div>

          <label>
            <span>Personer på arbeidsopphold</span>
            <input type="number" min="1" step="1" value={peoplePerWorkStay} onChange={(event) => setPeoplePerWorkStay(Number(event.target.value))} />
          </label>
          <label>
            <span>Hotellpris per rom/natt</span>
            <div className="corporate-number-field">
              <input type="number" min="0" step="10" value={hotelNightRate} onChange={(event) => setHotelNightRate(Number(event.target.value))} />
              <b>EUR</b>
            </div>
          </label>
          <label>
            <span>Netter per arbeidsopphold</span>
            <input type="number" min="1" max="14" step="1" value={hotelNights} onChange={(event) => setHotelNights(Number(event.target.value))} />
          </label>
        </div>
      )}

      <div className="corporate-calculator-results" aria-live="polite">
        <article className="corporate-result-primary">
          <span>Årlig kostnad før verdiendring</span>
          <strong>{euro.format(result.annualCostBeforeValue)}</strong>
          <small>Drift, kapitalkostnad og kjøpskostnader fordelt over valgt eiertid.</small>
        </article>
        <article>
          <span>Kostnad per planlagt bruksuke</span>
          <strong>{euro.format(result.costPerUseWeek)}</strong>
          <small>Basert på {result.totalWeeks} totale bruksuker.</small>
        </article>
        <article>
          <span><Hotel size={15} /> Hotellalternativ for arbeidsukene</span>
          <strong>{euro.format(result.hotelWorkAlternative)}</strong>
          <small>Kun {result.workWeeks} arbeids-/samlinguker sammenlignes med hotell.</small>
        </article>
        <article>
          <span>Scenarioverdi etter {result.holdingYears} år</span>
          <strong>{euro.format(result.estimatedFutureValue)}</strong>
          <small>Ved {result.valuePct} % årlig verdiendring. Dette er et scenario, ikke en prognose.</small>
        </article>
      </div>

      <div className="corporate-calculator-scenario-note">
        <strong>Verdiutvikling holdes utenfor hovedkostnaden.</strong>
        <span>
          Med valgt scenario tilsvarer første års beregnede verdiendring {euro.format(result.scenarioValueChangeYearOne)}.
          Beløpet er ikke behandlet som kontantinntekt eller sikker besparelse.
        </span>
      </div>

      <button type="button" className="corporate-calculator-cta" onClick={requestDecisionNote}>
        Lag beslutningsnotat med disse tallene
      </button>

      <p className="corporate-calculator-note">
        Planleggingsverktøy, ikke investerings-, skatte-, juridisk eller regnskapsråd. Flyreiser er ikke inkludert.
        Alle forutsetninger kan endres, og verdiutvikling er usikker.
      </p>
    </div>
  );
}
