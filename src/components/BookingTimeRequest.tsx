"use client";

import { useRef, useState } from "react";
import { Send } from "lucide-react";
import { trackConfirmedFormSubmission } from "@/lib/form-conversion";

type ContactChoice = "schedule" | "asap";

const madridDate = () => new Date().toLocaleDateString("sv-SE", { timeZone: "Europe/Madrid" });
const madridTime = () => new Date().toLocaleTimeString("en-GB", {
  timeZone: "Europe/Madrid", hour: "2-digit", minute: "2-digit", hour12: false,
});

const timeOptions = Array.from({ length: 49 }, (_, index) => {
  const totalMinutes = 9 * 60 + index * 15;
  return `${String(Math.floor(totalMinutes / 60)).padStart(2, "0")}:${String(totalMinutes % 60).padStart(2, "0")}`;
});

export function BookingTimeRequest() {
  const [choice, setChoice] = useState<ContactChoice>("asap");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [validationError, setValidationError] = useState("");
  const startedAt = useRef(Date.now());
  const today = madridDate();

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fields = Object.fromEntries(new FormData(form).entries());
    setValidationError("");
    if (choice === "schedule") {
      const selectedDate = String(fields.date || "");
      const selectedTime = String(fields.time || "");
      if (!selectedDate || !timeOptions.includes(selectedTime) || selectedDate < madridDate() ||
          (selectedDate === madridDate() && selectedTime <= madridTime())) {
        setValidationError("Velg en fremtidig dato og et tidspunkt mellom kl. 09:00 og 21:00.");
        return;
      }
    }

    const message = [
      choice === "schedule"
        ? `Ønsker boligprat ${fields.date} kl. ${fields.time} (spansk tid). Avventer bekreftelse.`
        : "Ønsker å bli kontaktet ved første anledning.",
      String(fields.message || "").trim(),
    ].filter(Boolean).join("\n\n");

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
          message,
          source: "zenecohomes-booking",
          request_type: "booking",
          page_url: window.location.href,
          form_started_at: startedAt.current,
          utm_source: query.get("utm_source"),
          utm_medium: query.get("utm_medium"),
          utm_campaign: query.get("utm_campaign"),
          utm_content: query.get("utm_content"),
        }),
      });
      const result = await response.json().catch(() => null);
      if (!response.ok || result?.accepted !== true || !result?.submission_id) throw new Error("Request not accepted");
      trackConfirmedFormSubmission("boligprat", result.submission_id);
      form.reset();
      setChoice("asap");
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
        <label>Telefonnummer<input name="phone" type="tel" autoComplete="tel" required placeholder="+47..." /></label>
      </div>
      <label>E-post<input name="email" type="email" autoComplete="email" required placeholder="din@epost.no" /></label>

      <fieldset style={{ border: 0, padding: 0, margin: "0.4rem 0 0.75rem", minWidth: 0 }}>
        <legend style={{ fontWeight: 700, marginBottom: "0.6rem" }}>Hvordan vil du bli kontaktet?</legend>
        <div style={{ display: "grid", gap: "0.7rem" }}>
          <label style={{ display: "flex", alignItems: "center", gap: "0.65rem", cursor: "pointer" }}>
            <input type="radio" name="contact_choice" value="schedule" checked={choice === "schedule"} onChange={() => { setChoice("schedule"); setValidationError(""); }} style={{ width: "1.1rem", height: "1.1rem", accentColor: "#735d37", flexShrink: 0 }} />
            Book tid for samtale
          </label>
          <label style={{ display: "flex", alignItems: "center", gap: "0.65rem", cursor: "pointer" }}>
            <input type="radio" name="contact_choice" value="asap" checked={choice === "asap"} onChange={() => { setChoice("asap"); setValidationError(""); }} style={{ width: "1.1rem", height: "1.1rem", accentColor: "#735d37", flexShrink: 0 }} />
            Kontakt meg ved første anledning
          </label>
        </div>
      </fieldset>

      {choice === "schedule" && (
        <div className="form-grid">
          <label>Ønsket dato<input name="date" type="date" min={today} required /></label>
          <label>Ønsket klokkeslett (spansk tid)
            <select name="time" defaultValue="" required>
              <option value="" disabled>Velg tidspunkt</option>
              {timeOptions.map((time) => <option key={time} value={time}>{time}</option>)}
            </select>
          </label>
        </div>
      )}

      <label>Melding (valgfritt)
        <textarea name="message" rows={4} placeholder="Skriv gjerne kort om hva du ønsker å snakke om" />
      </label>
      <p className="booking-note">Vi dobbeltsjekker kalenderen og bekrefter skriftlig til deg at ønsket tidspunkt passer.</p>
      {validationError && <p className="form-error" role="alert">{validationError}</p>}
      <button className="submit-button" type="submit" disabled={status === "sending"}>
        <Send size={18} /> {status === "sending" ? "Sender..." : "Send forespørsel"}
      </button>
      {status === "sent" && <p className="form-success" role="status">Takk! Vi har mottatt henvendelsen din og tar kontakt.</p>}
      {status === "error" && <p className="form-error" role="alert">Noe gikk galt. Prøv igjen eller send oss en e-post.</p>}
    </form>
  );
}
