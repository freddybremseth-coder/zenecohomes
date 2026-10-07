"use client";

import Link from "next/link";
import { Calculator, Info } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type Currency = "EUR" | "NOK";
type PurchaseType = "new" | "resale";
type HomeUse = "second" | "habitual";

type FinanceRates = {
  eurNok?: number;
  updatedAt?: string;
  exchangeSource?: string;
};

const euro = new Intl.NumberFormat("nb-NO", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

const nok = new Intl.NumberFormat("nb-NO", {
  style: "currency",
  currency: "NOK",
  maximumFractionDigits: 0,
});

function toNumber(value: string) {
  const parsed = Number(value.replace(/\s/g, "").replace(",", "."));
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : 0;
}

function formatRate(value: number) {
  return new Intl.NumberFormat("nb-NO", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 2,
  }).format(value);
}

export function PurchaseBudgetCalculator() {
  const [currency, setCurrency] = useState<Currency>("EUR");
  const [budget, setBudget] = useState("500000");
  const [purchaseType, setPurchaseType] = useState<PurchaseType>("new");
  const [homeUse, setHomeUse] = useState<HomeUse>("second");
  const [otherCostsPct, setOtherCostsPct] = useState("1.5");
  const [reserve, setReserve] = useState("0");
  const [eurNok, setEurNok] = useState(11.75);
  const [rateMeta, setRateMeta] = useState<Pick<FinanceRates, "updatedAt" | "exchangeSource">>({});

  useEffect(() => {
    let active = true;

    fetch("/api/finance/rates")
      .then((response) => (response.ok ? response.json() : null))
      .then((data: FinanceRates | null) => {
        if (!active || !data) return;
        if (Number.isFinite(data.eurNok) && Number(data.eurNok) > 0) {
          setEurNok(Number(data.eurNok));
        }
        setRateMeta({
          updatedAt: data.updatedAt,
          exchangeSource: data.exchangeSource,
        });
      })
      .catch(() => {
        // Fallback rate keeps the calculator usable if the rate service is unavailable.
      });

    return () => {
      active = false;
    };
  }, []);

  const result = useMemo(() => {
    const inputBudget = toNumber(budget);
    const inputReserve = toNumber(reserve);
    const totalBudgetEur = currency === "NOK" ? inputBudget / eurNok : inputBudget;
    const reserveEur = currency === "NOK" ? inputReserve / eurNok : inputReserve;
    const availableForPurchase = Math.max(0, totalBudgetEur - reserveEur);
    const otherRate = Math.min(0.1, Math.max(0, toNumber(otherCostsPct) / 100));
    const ajdRate = homeUse === "habitual" ? 0.001 : 0.014;

    const purchaseCosts = (price: number) => {
      if (purchaseType === "new") {
        const iva = price * 0.1;
        const ajd = price * ajdRate;
        const other = price * otherRate;
        return { iva, ajd, itp: 0, other, total: iva + ajd + other };
      }

      const itpRate = price > 1_000_000 ? 0.11 : 0.09;
      const itp = price * itpRate;
      const other = price * otherRate;
      return { iva: 0, ajd: 0, itp, other, total: itp + other };
    };

    let low = 0;
    let high = availableForPurchase;

    for (let i = 0; i < 80; i += 1) {
      const mid = (low + high) / 2;
      const total = mid + purchaseCosts(mid).total;
      if (total <= availableForPurchase) {
        low = mid;
      } else {
        high = mid;
      }
    }

    const maxPriceEur = Math.max(0, Math.floor(low / 1000) * 1000);
    const costs = purchaseCosts(maxPriceEur);
    const usedBudgetEur = maxPriceEur + costs.total + reserveEur;
    const remainingEur = Math.max(0, totalBudgetEur - usedBudgetEur);

    return {
      totalBudgetEur,
      reserveEur,
      maxPriceEur,
      costs,
      usedBudgetEur,
      remainingEur,
      otherRate,
      ajdRate,
    };
  }, [budget, currency, eurNok, homeUse, otherCostsPct, purchaseType, reserve]);

  const inputCurrencyLabel = currency === "EUR" ? "€" : "NOK";
  const currentTaxLabel =
    purchaseType === "new"
      ? homeUse === "habitual"
        ? "10 % IVA + 0,1 % AJD"
        : "10 % IVA + 1,4 % AJD"
      : result.maxPriceEur > 1_000_000
        ? "11 % ITP"
        : "9 % ITP";

  return (
    <section className="purchase-budget-calc" aria-labelledby="purchase-budget-title">
      <div className="purchase-budget-calc-heading">
        <span className="purchase-budget-calc-icon" aria-hidden="true">
          <Calculator size={22} />
        </span>
        <div>
          <p className="eyebrow">Totalbudsjett → maksimal kjøpesum</p>
          <h2 id="purchase-budget-title">Hvor dyr bolig kan du faktisk se etter?</h2>
          <p>
            Start med hele rammen din. Kalkulatoren regner bakover og trekker fra skatter,
            kjøpskostnader og eventuell reserve.
          </p>
        </div>
      </div>

      <div className="purchase-budget-calc-grid">
        <div className="purchase-budget-calc-form">
          <label>
            <span>Totalramme</span>
            <div className="purchase-budget-input-with-unit">
              <input
                type="number"
                min="0"
                step="10000"
                value={budget}
                onChange={(event) => setBudget(event.target.value)}
                aria-label="Totalramme"
              />
              <select
                value={currency}
                onChange={(event) => setCurrency(event.target.value as Currency)}
                aria-label="Valuta for totalrammen"
              >
                <option value="EUR">EUR</option>
                <option value="NOK">NOK</option>
              </select>
            </div>
          </label>

          {currency === "NOK" && (
            <label>
              <span>EUR/NOK-kurs</span>
              <input
                type="number"
                min="1"
                step="0.01"
                value={eurNok}
                onChange={(event) => setEurNok(Math.max(1, toNumber(event.target.value)))}
              />
              <small>
                {rateMeta.exchangeSource ? rateMeta.exchangeSource + " · " : ""}
                Du kan overstyre kursen med tilbudet du faktisk får.
              </small>
            </label>
          )}

          <label>
            <span>Boligtype</span>
            <select
              value={purchaseType}
              onChange={(event) => setPurchaseType(event.target.value as PurchaseType)}
            >
              <option value="new">Nybygg fra utbygger</option>
              <option value="resale">Bruktbolig</option>
            </select>
          </label>

          {purchaseType === "new" ? (
            <label>
              <span>Hvordan skal boligen brukes?</span>
              <select
                value={homeUse}
                onChange={(event) => setHomeUse(event.target.value as HomeUse)}
              >
                <option value="second">Ferie-/sekundærbolig</option>
                <option value="habitual">Egen fast bolig (vivienda habitual)</option>
              </select>
              <small>
                Valget påvirker AJD-satsen i Comunitat Valenciana. Vilkårene må bekreftes i den
                konkrete handelen.
              </small>
            </label>
          ) : (
            <div className="purchase-budget-inline-note">
              <Info size={17} />
              <span>
                Kalkulatoren bruker generell ITP. Reduserte satser for særskilte kjøpergrupper er
                ikke modellert.
              </span>
            </div>
          )}

          <label>
            <span>Andre kjøpskostnader</span>
            <div className="purchase-budget-input-with-unit single-unit">
              <input
                type="number"
                min="0"
                max="10"
                step="0.1"
                value={otherCostsPct}
                onChange={(event) => setOtherCostsPct(event.target.value)}
              />
              <span>%</span>
            </div>
            <small>
              Veiledende margin for advokat, notar, register og øvrige transaksjonskostnader.
              Juster hvis du har konkrete tilbud.
            </small>
          </label>

          <label>
            <span>Reserve etter overtakelse</span>
            <div className="purchase-budget-input-with-unit single-unit">
              <input
                type="number"
                min="0"
                step="5000"
                value={reserve}
                onChange={(event) => setReserve(event.target.value)}
              />
              <span>{inputCurrencyLabel}</span>
            </div>
            <small>Valgfritt: møbler, tilvalg, oppstart eller likviditetsbuffer.</small>
          </label>
        </div>

        <div className="purchase-budget-calc-result" aria-live="polite">
          <p className="purchase-budget-result-label">Realistisk maksimal kjøpesum</p>
          <strong className="purchase-budget-result-price">{euro.format(result.maxPriceEur)}</strong>
          {currency === "NOK" && (
            <span className="purchase-budget-result-nok">
              ca. {nok.format(result.maxPriceEur * eurNok)}
            </span>
          )}

          <p className="purchase-budget-result-copy">
            Med en totalramme på{" "}
            <strong>
              {currency === "EUR"
                ? euro.format(toNumber(budget))
                : nok.format(toNumber(budget))}
            </strong>{" "}
            bør du med disse forutsetningene filtrere boligjakten rundt{" "}
            <strong>{euro.format(result.maxPriceEur)}</strong>, ikke helt opp mot totalrammen.
          </p>

          <dl className="purchase-budget-breakdown">
            <div>
              <dt>Kjøpesum</dt>
              <dd>{euro.format(result.maxPriceEur)}</dd>
            </div>
            {purchaseType === "new" ? (
              <>
                <div>
                  <dt>IVA · 10 %</dt>
                  <dd>{euro.format(result.costs.iva)}</dd>
                </div>
                <div>
                  <dt>AJD · {formatRate(result.ajdRate * 100)} %</dt>
                  <dd>{euro.format(result.costs.ajd)}</dd>
                </div>
              </>
            ) : (
              <div>
                <dt>ITP · {result.maxPriceEur > 1_000_000 ? "11" : "9"} %</dt>
                <dd>{euro.format(result.costs.itp)}</dd>
              </div>
            )}
            <div>
              <dt>Andre kjøpskostnader · {formatRate(result.otherRate * 100)} %</dt>
              <dd>{euro.format(result.costs.other)}</dd>
            </div>
            {result.reserveEur > 0 && (
              <div>
                <dt>Reserve etter overtakelse</dt>
                <dd>{euro.format(result.reserveEur)}</dd>
              </div>
            )}
            <div className="purchase-budget-breakdown-total">
              <dt>Estimert total</dt>
              <dd>{euro.format(result.usedBudgetEur)}</dd>
            </div>
          </dl>

          <div className="purchase-budget-tax-basis">
            <Info size={17} />
            <p>
              Skattegrunnlag brukt nå: <strong>{currentTaxLabel}</strong> i Comunitat Valenciana.
              Kalkulatoren er et planleggingsverktøy, ikke juridisk eller skattemessig rådgivning.
            </p>
          </div>

          <div className="purchase-budget-actions">
            <Link
              className="contact-button"
              href={"/eiendommer?maxPrice=" + Math.max(0, result.maxPriceEur)}
            >
              Se boliger innenfor rammen
            </Link>
            <Link className="text-button" href="/booking">
              Få et konkret regnestykke
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
