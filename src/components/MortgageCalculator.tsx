"use client";

import { useMemo, useState } from "react";
import { Calculator } from "lucide-react";
import type { Locale } from "@/lib/i18n";

const T: Record<Locale, Record<string, string>> = {
  no: {
    title: "Boliglånskalkulator",
    price: "Kjøpesum",
    deposit: "Egenkapital",
    rate: "Rente",
    term: "Løpetid",
    years: "år",
    monthly: "Ca. per måned",
    loan: "Lånebeløp",
    total: "Totalt tilbakebetalt",
    note: "Veiledende. Spanske banker gir ofte 60–70 % lån til ikke-residenter. Faktiske vilkår avhenger av bank og profil.",
  },
  de: {
    title: "Hypothekenrechner",
    price: "Kaufpreis",
    deposit: "Eigenkapital",
    rate: "Zins",
    term: "Laufzeit",
    years: "Jahre",
    monthly: "Ca. pro Monat",
    loan: "Darlehen",
    total: "Gesamt zurückgezahlt",
    note: "Richtwert. Spanische Banken vergeben Nicht-Residenten oft 60–70 % Finanzierung. Die tatsächlichen Konditionen hängen von Bank und Profil ab.",
  },
  en: {
    title: "Mortgage calculator",
    price: "Purchase price",
    deposit: "Deposit",
    rate: "Rate",
    term: "Term",
    years: "years",
    monthly: "Approx. per month",
    loan: "Loan amount",
    total: "Total repaid",
    note: "Indicative. Spanish banks often lend 60–70 % to non-residents. Actual terms depend on bank and profile.",
  },
};

function fmt(n: number, locale: Locale) {
  return `€${Math.round(n).toLocaleString(locale === "de" ? "de-DE" : locale === "en" ? "en-GB" : "nb-NO")}`;
}

export function MortgageCalculator({ price, locale = "no" }: { price?: number; locale?: Locale }) {
  const t = T[locale];
  const base = price && price > 0 ? price : 400000;
  const [depositPct, setDepositPct] = useState(30);
  const [rate, setRate] = useState(3.5);
  const [term, setTerm] = useState(25);

  const { loan, monthly, total } = useMemo(() => {
    const loanAmt = Math.max(0, base * (1 - depositPct / 100));
    const r = rate / 100 / 12;
    const n = term * 12;
    const m = r > 0 ? (loanAmt * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1) : loanAmt / n;
    return { loan: loanAmt, monthly: m, total: m * n };
  }, [base, depositPct, rate, term]);

  return (
    <div className="mortgage-calc">
      <p className="eyebrow">
        <Calculator size={16} /> {t.title}
      </p>
      <div className="mortgage-row">
        <span>{t.price}</span>
        <strong>{fmt(base, locale)}</strong>
      </div>
      <label>
        {t.deposit}: <strong>{depositPct}%</strong> ({fmt((base * depositPct) / 100, locale)})
        <input type="range" min={10} max={80} step={5} value={depositPct} onChange={(e) => setDepositPct(Number(e.target.value))} />
      </label>
      <label>
        {t.rate}: <strong>{rate.toFixed(1)}%</strong>
        <input type="range" min={1} max={7} step={0.1} value={rate} onChange={(e) => setRate(Number(e.target.value))} />
      </label>
      <label>
        {t.term}: <strong>{term} {t.years}</strong>
        <input type="range" min={5} max={35} step={1} value={term} onChange={(e) => setTerm(Number(e.target.value))} />
      </label>
      <div className="mortgage-result">
        <div>
          <span>{t.monthly}</span>
          <strong>{fmt(monthly, locale)}</strong>
        </div>
        <div className="mortgage-sub">
          <span>
            {t.loan}: {fmt(loan, locale)}
          </span>
          <span>
            {t.total}: {fmt(total, locale)}
          </span>
        </div>
      </div>
      <p className="mortgage-note">{t.note}</p>
    </div>
  );
}
