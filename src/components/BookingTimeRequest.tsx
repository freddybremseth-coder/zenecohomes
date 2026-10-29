"use client";

import { useRef, useState } from "react";
import { CalendarDays } from "lucide-react";
import { trackConfirmedFormSubmission } from "@/lib/form-conversion";

export function BookingTimeRequest() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const startedAt = useRef(Date.now());
  const today = new Date().toLocaleDateString("en-CA", { timeZone: "Europe/Madrid" });

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fields = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    try {
      const query = new URLSearchParams(window.location.search);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fields.name,
          phone: fields.phone,
          email: fields.email,
          contact_website: fields.contact_website,
          message: `Ønsker boligprat ${fields.date} kl. ${fields.time} (spansk tid).\n${fields.message || ""}`,
          source: "zenecohomes-booking-time-request",
          request_type: "booking",
          page_url: window.location.href,
          form_started_at: startedAt.current,
          utm_source: query.get("utm_source"),
          utm_medium: query.get("utm_medium"),
          utm_campaign: query.get("utm_campaign"),
        }),
      });
      const result = await response.json().catch(() => null);
      if (!response.ok || result?.accepted !== true || !result?.submission_id) throw new Error("Request not accepted");
      trackConfirmedFormSubmission("booking", result.submission_id);
      form.reset();
      setStatus("sent");
      startedAt.current = Date.now();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="lead-form" onSubmit={submit}>
      <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
        <label>Website<input name="contact_website" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <div className="form-grid">
        <label>Navn<input name="name" autoComplete="name" required placeholder="Ditt navn" /></label>
        <label>Telefon<input name="phone" type="tel" autoComplete="tel" placeholder="+47..." /></label>
      </div>
      <label>E-post<input name="email" type="email" autoComplete="email" required placeholder="din@epost.no" /></label>
      <div className="form-grid">
        <label>Ønsket dato<input name="date" type="date" min={today} required /></label>
        <label>Ønsket klokkeslett (spansk tid)<input name="time" type="time" required /></label>
      </div>
      <label>Hva ønsker du å snakke om? (valgfritt)<textarea name="message" rows={3} placeholder="Område, budsjett eller andre spørsmål" /></label>
      <p className="booking-note">Dette er en forespørsel om tidspunkt. Vi bekrefter avtalen etter at vi har sjekket kalenderen.</p>
      <button className="submit-button" type="submit" disabled={status === "sending"}>
        <CalendarDays size={18} /> {status === "sending" ? "Sender..." : "Be om dette tidspunktet"}
      </button>
      {status === "sent" && <p className="form-success" role="status">Takk! Vi har mottatt ønsket tidspunkt og tar kontakt for å bekrefte avtalen.</p>}
      {status === "error" && <p className="form-error" role="alert">Noe gikk galt. Prøv igjen eller bruk kontaktskjemaet.</p>}
    </form>
  );
}
