"use client";

import { useState } from "react";
import { Send } from "lucide-react";

type Status = "idle" | "sending" | "sent" | "error";

export function CorporatePartnerLeadForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const params = new URLSearchParams(window.location.search);

    const message = [
      `Virksomhet: ${data.company || "-"}`,
      `Partnertype: ${data.partner_type || "-"}`,
      `Rolle: ${data.role || "-"}`,
      `Ønsket samarbeid: ${data.partnership_interest || "-"}`,
      "",
      `Kommentar: ${data.message || "-"}`,
    ].join("\n");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          source: "zeneco-corporate-partner",
          request_type: "corporate-partner",
          organization_name: data.company,
          organization_type: "Samarbeidspartner",
          contact_role: data.role,
          partner_type: data.partner_type,
          partnership_interest: data.partnership_interest,
          purchase_goal: "Samarbeid / henvisningspartner for Zen Corporate Homes",
          next_step: "Kort partnersamtale",
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
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="corporate-lead-form" onSubmit={onSubmit}>
      <div className="corporate-form-grid">
        <label>
          Virksomhet
          <input name="company" required placeholder="Firmanavn eller organisasjon" />
        </label>
        <label>
          Partnertype
          <select name="partner_type" defaultValue="accounting_tax">
            <option value="accounting_tax">Regnskap / revisjon / skatt</option>
            <option value="legal">Advokat / juridisk rådgivning</option>
            <option value="management_consulting">Bedriftsrådgivning</option>
            <option value="hr_recruitment">HR / rekruttering</option>
            <option value="business_membership">Nærings- / medlemsorganisasjon</option>
            <option value="corporate_travel">Bedriftsreise / reiserådgivning</option>
            <option value="wealth_advisory">Finansiell rådgivning</option>
            <option value="other">Annet</option>
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
          <input name="role" placeholder="Partner, rådgiver, daglig leder …" />
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

      <label>
        Hva slags samarbeid er mest aktuelt?
        <select name="partnership_interest" defaultValue="Henvisning av relevante bedriftskunder">
          <option>Henvisning av relevante bedriftskunder</option>
          <option>Tilbud til medlemmer eller medlemsbedrifter</option>
          <option>Felles kundearrangement eller webinar</option>
          <option>Faglig samarbeid rundt kjøpsprosessen</option>
          <option>Vil utforske mulighetene</option>
        </select>
      </label>

      <label>
        Kort kommentar
        <textarea
          name="message"
          rows={5}
          placeholder="Fortell gjerne kort om kundene eller medlemmene dere jobber med, og hvordan dere ser for dere et mulig samarbeid."
        />
      </label>

      <button className="submit-button" disabled={status === "sending"}>
        <Send size={18} />
        {status === "sending" ? "Sender …" : "Be om en kort partnersamtale"}
      </button>

      <p className="corporate-form-privacy">
        Opplysningene brukes kun til å vurdere og følge opp en mulig partnersamtale med Zen Corporate Homes.
      </p>

      {status === "sent" && (
        <p className="form-success">Takk. Henvendelsen er mottatt og registrert som en partnerhenvendelse.</p>
      )}
      {status === "error" && (
        <p className="form-error">Noe gikk galt. Prøv igjen, eller bruk booking-siden.</p>
      )}
    </form>
  );
}
