"use client";

import { useRef, useState } from "react";
import { trackConfirmedFormSubmission } from "@/lib/form-conversion";

const travelOptions = ["Innen 3 måneder", "Om 3-6 måneder", "Usikker"] as const;

export function ViewingTripForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const startedAt = useRef(Date.now());

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    const fields = Object.fromEntries(new FormData(form).entries());
    const travel = String(fields.travel_timing || "");
    if (!travelOptions.includes(travel as (typeof travelOptions)[number])) {
      setStatus("error");
      return;
    }
    const params = new URLSearchParams(window.location.search);
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fields.name,
          phone: fields.phone,
          email: fields.email,
          contact_website: fields.contact_website,
          message: [
            `Ønsket reisetidspunkt: ${travel}`,
            String(fields.comment || "").trim(),
          ].filter(Boolean).join("\n\n"),
          timeline: travel,
          source: "zenecohomes-visningstur",
          request_type: "visningstur",
          locale: "no",
          page_url: window.location.href,
          form_started_at: startedAt.current,
          utm_source: params.get("utm_source"),
          utm_medium: params.get("utm_medium"),
          utm_campaign: params.get("utm_campaign"),
          utm_content: params.get("utm_content"),
        }),
      });
      const result = await response.json().catch(() => null);
      if (!response.ok || result?.accepted !== true || !result?.submission_id) throw new Error("not accepted");
      trackConfirmedFormSubmission("visningstur", result.submission_id);
      form.reset();
      startedAt.current = Date.now();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="lead-form" onSubmit={submit}>
      <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
        <label>Website<input name="contact_website" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <label>Navn<input name="name" required autoComplete="name" maxLength={180} /></label>
      <label>Telefonnummer (valgfritt)<input name="phone" type="tel" autoComplete="tel" maxLength={80} /></label>
      <label>Epost<input name="email" type="email" required autoComplete="email" maxLength={320} /></label>
      <label>Når ønsker du å reise?
        <select name="travel_timing" defaultValue="" required>
          <option value="" disabled>Velg tidspunkt</option>
          {travelOptions.map(option => <option key={option} value={option}>{option}</option>)}
        </select>
      </label>
      <label>Kommentar (valgfritt)<textarea name="comment" rows={4} maxLength={6000} /></label>
      <p>Vi tar kontakt med deg så raskt vi har anledning.</p>
      <button className="submit-button" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sender..." : "Send"}
      </button>
      {status === "sent" && <p className="form-success" role="status" aria-live="polite">Takk! Vi har mottatt henvendelsen din.</p>}
      {status === "error" && <p className="form-error" role="alert">Noe gikk galt. Prøv igjen, eller ta kontakt direkte.</p>}
    </form>
  );
}
