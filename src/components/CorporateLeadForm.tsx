"use client";

import { useState } from "react";
import { Send } from "lucide-react";

type Status = "idle" | "sending" | "sent" | "error";

export function CorporateLeadForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

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
    ].join("\n");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          source: "zeneco-corporate-homes",
          preferred_area: "Costa Blanca / åpen for forslag",
          budget: data.budget,
          timeline: data.timeline,
          purchase_goal: "Bedriftshytte / medlemsbolig i Spania",
          next_step: "B2B avklaringssamtale",
          request_type: "corporate-home",
          message,
          page_url: window.location.origin + window.location.pathname,
        }),
      });

      if (!response.ok) throw new Error("submit");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="corporate-lead-form" onSubmit={onSubmit}>
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
          <input name="users" type="number" min="1" placeholder="f.eks. 50" />
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
          <select name="model" defaultValue="Bedriftshytte for ansatte">
            <option>Bedriftshytte for ansatte</option>
            <option>Medlemsbolig for organisasjon</option>
            <option>Felles løsning for flere bedrifter</option>
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
          placeholder="Fortell kort om mål, antall brukere, ønsket område, boligtype og hvordan dere ser for dere bruken."
        />
      </label>

      <button className="submit-button" disabled={status === "sending"}>
        <Send size={18} />
        {status === "sending" ? "Sender …" : "Be om bedriftsvurdering"}
      </button>

      {status === "sent" && (
        <p className="form-success">Takk. Vi har mottatt forespørselen og tar kontakt for en kort behovsavklaring.</p>
      )}
      {status === "error" && (
        <p className="form-error">Noe gikk galt. Prøv igjen, eller bruk booking-knappen på siden.</p>
      )}
    </form>
  );
}
