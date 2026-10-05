"use client";

import { useMemo, useState } from "react";
import {
  Building2,
  CalendarDays,
  ChevronDown,
  ChevronUp,
  Hotel,
  LineChart,
  Plus,
  Trash2,
  Users,
} from "lucide-react";

const euro = new Intl.NumberFormat("nb-NO", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

const VALUE_SCENARIOS = [0, 2, 3, 5];

type BusinessStay = {
  id: number;
  name: string;
  eventsPerYear: number;
  people: number;
  nights: number;
  pricePerPersonNight: number;
};

export type CorporateCalculatorResult = {
  propertyPrice: number;
  users: number;
  employeeWeeks: number;
  annualOperating: number;
  acquisitionPct: number;
  capitalPct: number;
  valuePct: number;
  holdingYears: number;
  annualCostBeforeValue: number;
  employeeCostPerWeek: number;
  businessStayNights: number;
  businessStayCount: number;
  participantNights: number;
  hotelAlternativeAnnual: number;
  estimatedFutureValue: number;
  scenarioValueChangeYearOne: number;
  stays: BusinessStay[];
};

function n(value: number, fallback = 0) {
  return Number.isFinite(value) && value >= 0 ? value : fallback;
}

const DEFAULT_STAYS: BusinessStay[] = [
  { id: 1, name: "Ledersamling", eventsPerYear: 2, people: 8, nights: 3, pricePerPersonNight: 180 },
  { id: 2, name: "Avdelingsreise", eventsPerYear: 3, people: 10, nights: 4, pricePerPersonNight: 160 },
  { id: 3, name: "Styresamling", eventsPerYear: 2, people: 6, nights: 3, pricePerPersonNight: 180 },
];

export function CorporateHomeCalculator() {
  const [propertyPrice, setPropertyPrice] = useState(450000);
  const [users, setUsers] = useState(50);
  const [employeeWeeks, setEmployeeWeeks] = useState(30);
  const [stays, setStays] = useState<BusinessStay[]>(DEFAULT_STAYS);

  const [showAdvanced, setShowAdvanced] = useState(false);
  const [annualOperating, setAnnualOperating] = useState(12000);
  const [acquisitionPct, setAcquisitionPct] = useState(12);
  const [capitalPct, setCapitalPct] = useState(4);
  const [valuePct, setValuePct] = useState(3);
  const [holdingYears, setHoldingYears] = useState(10);

  const result = useMemo<CorporateCalculatorResult>(() => {
    const price = n(propertyPrice, 450000);
    const peopleWithAccess = Math.max(1, n(users, 50));
    const employeeUseWeeks = Math.min(52, n(employeeWeeks, 30));

    const operating = n(annualOperating, 12000);
    const acquisition = price * (n(acquisitionPct, 12) / 100);
    const capitalBase = price + acquisition;
    const capitalCost = capitalBase * (n(capitalPct, 4) / 100);
    const years = Math.max(1, Math.round(n(holdingYears, 10)));
    const annualisedAcquisition = acquisition / years;
    const annualCostBeforeValue = operating + capitalCost + annualisedAcquisition;

    const normalizedStays = stays.map((stay) => ({
      ...stay,
      eventsPerYear: n(stay.eventsPerYear),
      people: n(stay.people),
      nights: n(stay.nights),
      pricePerPersonNight: n(stay.pricePerPersonNight),
    }));

    const businessStayCount = normalizedStays.reduce((sum, stay) => sum + stay.eventsPerYear, 0);
    const businessStayNights = normalizedStays.reduce(
      (sum, stay) => sum + stay.eventsPerYear * stay.nights,
      0,
    );
    const participantNights = normalizedStays.reduce(
      (sum, stay) => sum + stay.eventsPerYear * stay.people * stay.nights,
      0,
    );
    const hotelAlternativeAnnual = normalizedStays.reduce(
      (sum, stay) =>
        sum + stay.eventsPerYear * stay.people * stay.nights * stay.pricePerPersonNight,
      0,
    );

    const employeeCostPerWeek =
      employeeUseWeeks > 0 ? annualCostBeforeValue / employeeUseWeeks : annualCostBeforeValue;
    const estimatedFutureValue = price * Math.pow(1 + n(valuePct, 3) / 100, years);
    const scenarioValueChangeYearOne = price * (n(valuePct, 3) / 100);

    return {
      propertyPrice: price,
      users: peopleWithAccess,
      employeeWeeks: employeeUseWeeks,
      annualOperating: operating,
      acquisitionPct,
      capitalPct,
      valuePct,
      holdingYears: years,
      annualCostBeforeValue,
      employeeCostPerWeek,
      businessStayNights,
      businessStayCount,
      participantNights,
      hotelAlternativeAnnual,
      estimatedFutureValue,
      scenarioValueChangeYearOne,
      stays: normalizedStays,
    };
  }, [
    propertyPrice,
    users,
    employeeWeeks,
    stays,
    annualOperating,
    acquisitionPct,
    capitalPct,
    valuePct,
    holdingYears,
  ]);

  function updateStay(id: number, field: keyof BusinessStay, value: string | number) {
    setStays((current) =>
      current.map((stay) => (stay.id === id ? { ...stay, [field]: value } : stay)),
    );
  }

  function addStay() {
    setStays((current) => [
      ...current,
      {
        id: Math.max(0, ...current.map((stay) => stay.id)) + 1,
        name: "Nytt bedriftsopphold",
        eventsPerYear: 1,
        people: 8,
        nights: 3,
        pricePerPersonNight: 170,
      },
    ]);
  }

  function removeStay(id: number) {
    setStays((current) => current.filter((stay) => stay.id !== id));
  }

  function requestDecisionNote() {
    const detail = {
      ...result,
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
          <span><Users size={17} /> Ansatte / medlemmer med tilgang</span>
          <input
            type="number"
            min="1"
            step="1"
            value={users}
            onChange={(event) => setUsers(Number(event.target.value))}
          />
        </label>

        <label>
          <span><CalendarDays size={17} /> Ferie-/medlemsuker per år</span>
          <input
            type="number"
            min="0"
            max="52"
            step="1"
            value={employeeWeeks}
            onChange={(event) => setEmployeeWeeks(Number(event.target.value))}
          />
        </label>
      </div>

      <div className="corporate-stays">
        <div className="corporate-stays-heading">
          <div>
            <span className="corporate-stays-kicker"><Hotel size={17} /> Bedriftsopphold og hotellalternativ</span>
            <strong>Hva ville dere ellers betalt for overnatting?</strong>
            <small>
              Legg inn faktiske turer eller samlinger virksomheten normalt ville betalt hotell for.
              Ferieuker for ansatte eller medlemmer er ikke med i hotellbesparelsen.
            </small>
          </div>
          <button type="button" className="corporate-add-stay" onClick={addStay}>
            <Plus size={16} /> Legg til opphold
          </button>
        </div>

        <div className="corporate-stay-table" role="table" aria-label="Bedriftsopphold per år">
          <div className="corporate-stay-row corporate-stay-head" role="row">
            <span>Type opphold</span>
            <span>Antall/år</span>
            <span>Personer</span>
            <span>Netter</span>
            <span>Pris pers./natt</span>
            <span>Årskostnad</span>
            <span aria-hidden="true" />
          </div>

          {stays.map((stay) => {
            const annualCost =
              n(stay.eventsPerYear) *
              n(stay.people) *
              n(stay.nights) *
              n(stay.pricePerPersonNight);

            return (
              <div className="corporate-stay-row" role="row" key={stay.id}>
                <input
                  aria-label="Type opphold"
                  value={stay.name}
                  onChange={(event) => updateStay(stay.id, "name", event.target.value)}
                />
                <input
                  aria-label={"Antall " + stay.name + " per år"}
                  type="number"
                  min="0"
                  step="1"
                  value={stay.eventsPerYear}
                  onChange={(event) => updateStay(stay.id, "eventsPerYear", Number(event.target.value))}
                />
                <input
                  aria-label={"Personer per " + stay.name}
                  type="number"
                  min="0"
                  step="1"
                  value={stay.people}
                  onChange={(event) => updateStay(stay.id, "people", Number(event.target.value))}
                />
                <input
                  aria-label={"Netter per " + stay.name}
                  type="number"
                  min="0"
                  step="1"
                  value={stay.nights}
                  onChange={(event) => updateStay(stay.id, "nights", Number(event.target.value))}
                />
                <div className="corporate-number-field">
                  <input
                    aria-label={"Hotellpris per person per natt for " + stay.name}
                    type="number"
                    min="0"
                    step="10"
                    value={stay.pricePerPersonNight}
                    onChange={(event) =>
                      updateStay(stay.id, "pricePerPersonNight", Number(event.target.value))
                    }
                  />
                  <b>€</b>
                </div>
                <strong>{euro.format(annualCost)}</strong>
                <button
                  type="button"
                  className="corporate-remove-stay"
                  aria-label={"Fjern " + stay.name}
                  onClick={() => removeStay(stay.id)}
                >
                  <Trash2 size={15} />
                </button>
              </div>
            );
          })}
        </div>
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
        </div>
      )}

      <div className="corporate-calculator-results" aria-live="polite">
        <article className="corporate-result-primary">
          <span>Årlig kostnad ved boligen før verdiendring</span>
          <strong>{euro.format(result.annualCostBeforeValue)}</strong>
          <small>Drift, kapitalkostnad og kjøpskostnader fordelt over valgt eiertid.</small>
        </article>
        <article>
          <span>Ferie-/medlemsbruk</span>
          <strong>{result.employeeWeeks} uker</strong>
          <small>{euro.format(result.employeeCostPerWeek)} per tilgjengelig uke dersom årskostnaden ses mot disse ukene alene.</small>
        </article>
        <article className="corporate-result-hotel">
          <span><Hotel size={15} /> Alternativ hotellkostnad per år</span>
          <strong>{euro.format(result.hotelAlternativeAnnual)}</strong>
          <small>
            {result.businessStayCount} bedriftsopphold · {result.participantNights} personnetter.
            Dette er overnatting virksomheten ellers kunne ha kjøpt.
          </small>
        </article>
        <article>
          <span>Scenarioverdi etter {result.holdingYears} år</span>
          <strong>{euro.format(result.estimatedFutureValue)}</strong>
          <small>Ved {result.valuePct} % årlig verdiendring. Scenario, ikke prognose.</small>
        </article>
      </div>

      <div className="corporate-calculator-scenario-note">
        <strong>Hotellbeløpet er ikke automatisk en «besparelse».</strong>
        <span>
          Det viser alternativ overnattingskostnad for de konkrete bedriftsoppholdene dere har lagt inn.
          Ferie-/medlemsuker holdes utenfor dette regnestykket.
        </span>
      </div>

      <div className="corporate-calculator-scenario-note">
        <strong>Verdiutvikling holdes utenfor hovedkostnaden.</strong>
        <span>
          Med valgt scenario tilsvarer første års beregnede verdiendring {euro.format(result.scenarioValueChangeYearOne)}.
          Beløpet behandles ikke som kontantinntekt eller sikker besparelse.
        </span>
      </div>

      <button type="button" className="corporate-calculator-cta" onClick={requestDecisionNote}>
        Lag beslutningsnotat med disse tallene
      </button>

      <p className="corporate-calculator-note">
        Planleggingsverktøy, ikke investerings-, skatte-, juridisk eller regnskapsråd. Reise, servering,
        møterom og andre arrangementsutgifter er ikke med i hotellsammenligningen.
      </p>
    </div>
  );
}
