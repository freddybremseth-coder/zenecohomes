"use client";

import { useEffect, useState } from "react";
import { FileText, Send } from "lucide-react";

type Status = "idle" | "sending" | "sent" | "error";

type StayContext = {
  name: string;
  eventsPerYear: number;
  people: number;
  nights: number;
  pricePerPersonNight: number;
};

type CalculatorContext = {
  propertyPrice?: number;
  users?: number;
  employeeWeeks?: number;
  businessStayCount?: number;
  participantNights?: number;
  annualOperating?: number;
  acquisitionPct?: number;
  capitalPct?: number;
  valuePct?: number;
  holdingYears?: number;
  annualCostBeforeValue?: number;
  employeeCostPerWeek?: number;
  hotelAlternativeAnnual?: number;
  estimatedFutureValue?: number;
  stays?: StayContext[];
};

const euro = new Intl.NumberFormat("nb-NO", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

export function CorporateLeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [calculatorContext, setCalculatorContext] = useState<CalculatorContext | null>(null);
  const [userCount, setUserCount] = useState("");

  useEffect(() => {
    function applyContext(detail: CalculatorContext | null) {
      if (!detail) return;
      setCalculatorContext(detail);
      if (detail.users) setUserCount(String(detail.users));
    }

    try {
      const stored = window.sessionStorage.getItem("zeneco-corporate-calculator");
      if (stored) applyContext(JSON.parse(stored));
    } catch {
      // Ignore malformed or unavailable session storage.
    }

    function onCalculator(event: Event) {
      applyContext((event as CustomEvent<CalculatorContext>).detail);
    }

    window.addEventListener("zeneco:corporate-calculator", onCalculator);
    return () => window.removeEventListener("zeneco:corporate-calculator", onCalculator);
  }, []);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    const stayLines =
      calculatorContext?.stays?.map(
        (stay) =>
          `- ${stay.name}: ${stay.eventsPerYear} opphold/år × ${stay.people} personer × ${stay.nights} netter × ${euro.format(stay.pricePerPersonNight)} per person/natt`,
      ) ?? [];

    const calculatorLines = calculatorContext
      ? [
          "",
          "Beslutningsgrunnlag fra kalkulator:",
          `Kjøpesum: ${calculatorContext.propertyPrice ? euro.format(calculatorContext.propertyPrice) : "-"}`,
          `Ansatte/medlemmer med tilgang: ${calculatorContext.users ?? "-"}`,
          `Ferie-/medlemsbruk: ${calculatorContext.employeeWeeks ?? "-"} uker per år`,
          `Bedriftsopphold: ${calculatorContext.businessStayCount ?? "-"} per år / ${calculatorContext.participantNights ?? "-"} personnetter`,
          `Årlig kostnad før verdiendring: ${calculatorContext.annualCostBeforeValue ? euro.format(calculatorContext.annualCostBeforeValue) : "-"}`,
          `Alternativ hotellkostnad for bedriftsopphold: ${calculatorContext.hotelAlternativeAnnual ? euro.format(calculatorContext.hotelAlternativeAnnual) : "-"}`,
          ...stayLines,
          `Verdiscenario: ${calculatorContext.valuePct ?? "-"} % i ${calculatorContext.holdingYears ?? "-"} år`,
        ]
      : [];

    const message = [
      `Virksomhet/organisasjon: ${data.company || "-"}`,
      `Type: ${data.organization_type || "-"}`,
      `Antall ansatte/medlemmer: ${data.users || "-"}`,
      `Rolle: ${data.role || "-"}`,
      `Ønsket modell: ${data.model || "-"}`,
      `Budsjett: ${data.budget || "-"}`,
      `Tidslinje: ${data.timeline || "-"}`,
      "",
      `Behov: ${data.needs || "-"}`,
      ...calculatorLines,
    ].join("\n");

    try {
      const params = new URLSearchParams(window.location.search);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          source: "zeneco-corporate-decision-note",
          preferred_area: "Costa Blanca / åpen for forslag",
          budget: data.budget,
          timeline: data.timeline,
          purchase_goal: "Bedriftshytte / firmabolig / medlemsbolig i Spania",
          next_step: "Beslutningsnotat til styret",
          request_type: "corporate-home-decision-note",
          organization_name: data.company,
          organization_type: data.organization_type,
          contact_role: data.role,
          user_count: data.users,
          corporate_model: data.model,
          calculator_context: calculatorContext,
          message,
          page_url: window.location.href,
          utm_source: params.get("utm_source"),
          utm_medium: params.get("utm_medium"),
          utm_campaign: params.get("utm_campaign"),
          utm_content: params.get("utm_content"),
        }),
      });

      if (!response.ok) throw new Error("submit");
      form.reset();
      setUserCount("");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="corporate-lead-form" onSubmit={onSubmit}>
      {calculatorContext && (
        <div className="corporate-form-calculator-context">
          <FileText size={20} />
          <div>
            <strong>Tallene fra kalkulatoren er tatt med</strong>
            <span>
              {calculatorContext.propertyPrice ? euro.format(calculatorContext.propertyPrice) : "Valgt kjøpesum"} ·{" "}
              {calculatorContext.employeeWeeks ?? 0} ferie-/medlemsuker ·{" "}
              {calculatorContext.businessStayCount ?? 0} bedriftsopphold ·{" "}
              {calculatorContext.valuePct ?? 0} % verdiscenario
            </span>
          </div>
        </div>
      )}

      <div className="corporate-form-grid">
        <label>
          Virksomhet / organisasjon
          <input name="company" required placeholder="Firmanavn eller organisasjon" />
        </label>
        <label>
          Type
          <select name="organization_type" defaultValue="Bedrift">
            <option>Bedrift</option>
            <option>Forening</option>
            <option>Medlemsorganisasjon</option>
            <option>Konsern</option>
            <option>Annet</option>
          </select>
        </label>
      </div>

      <div className="corporate-form-grid">
        <label>
          Kontaktperson
          <input name="name" required placeholder="Navn" />
        </label>
        <label>
          Rolle
          <input name="role" placeholder="Daglig leder, HR, CFO, styreleder …" />
        </label>
      </div>

      <div className="corporate-form-grid">
        <label>
          E-post
          <input name="email" type="email" required placeholder="navn@firma.no" />
        </label>
        <label>
          Telefon
          <input name="phone" placeholder="+47 …" />
        </label>
      </div>

      <div className="corporate-form-grid">
        <label>
          Ansatte / medlemmer
          <input
            name="users"
            type="number"
            min="1"
            placeholder="f.eks. 50"
            value={userCount}
            onChange={(event) => setUserCount(event.target.value)}
          />
        </label>
        <label>
          Budsjett
          <select name="budget" defaultValue="€300 000–€500 000">
            <option>Under €300 000</option>
            <option>€300 000–€500 000</option>
            <option>€500 000–€750 000</option>
            <option>€750 000–€1 000 000</option>
            <option>Over €1 000 000</option>
            <option>Ikke avklart</option>
          </select>
        </label>
      </div>

      <div className="corporate-form-grid">
        <label>
          Modell
          <select name="model" defaultValue="Ansattbolig / bedriftshytte">
            <option>Ansattbolig / bedriftshytte</option>
            <option>Medlemsbolig for forening eller organisasjon</option>
            <option>Delt bedriftsbolig for flere virksomheter</option>
            <option>Vil ha forslag</option>
          </select>
        </label>
        <label>
          Tidslinje
          <select name="timeline" defaultValue="3–12 måneder">
            <option>0–3 måneder</option>
            <option>3–12 måneder</option>
            <option>12–24 måneder</option>
            <option>Utforsker muligheten</option>
          </select>
        </label>
      </div>

      <label>
        Hva ønsker dere å få til?
        <textarea
          name="needs"
          rows={5}
          placeholder="Fortell kort om mål, brukere, boligtype, område eller hva styret trenger for å kunne ta stilling."
        />
      </label>

      <button className="submit-button" disabled={status === "sending"}>
        <Send size={18} />
        {status === "sending" ? "Sender …" : "Be om beslutningsnotat"}
      </button>

      <p className="corporate-form-privacy">
        Opplysningene brukes til å lage et første beslutningsgrunnlag og følge opp henvendelsen. Ingen generell boligspam.
      </p>

      {status === "sent" && (
        <p className="form-success">
          Takk. Forespørselen er mottatt. Vi bruker opplysningene som grunnlag for en kort behovsavklaring og beslutningsnotatet.
        </p>
      )}
      {status === "error" && (
        <p className="form-error">Noe gikk galt. Prøv igjen, eller bruk booking-knappen på siden.</p>
      )}
    </form>
  );
}
