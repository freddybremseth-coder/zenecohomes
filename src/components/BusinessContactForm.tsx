"use client";

import { useRef, useState } from "react";
import { trackConfirmedFormSubmission } from "@/lib/form-conversion";

export function BusinessContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const startedAt = useRef(Date.now());

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fields = Object.fromEntries(new FormData(form).entries());
    const query = new URLSearchParams(window.location.search);
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...fields,
          organization_name: fields.company,
          source: "zeneco-corporate-contact",
          request_type: "kontakt_bedrift",
          locale: "no",
          page_url: window.location.href,
          form_started_at: startedAt.current,
          utm_source: query.get("utm_source"),
          utm_medium: query.get("utm_medium"),
          utm_campaign: query.get("utm_campaign"),
          utm_content: query.get("utm_content"),
        }),
      });
      const result = await response.json().catch(() => null);
      if (!response.ok || result?.accepted !== true || !result?.submission_id) {
        setStatus("error");
        return;
      }
      trackConfirmedFormSubmission("kontakt_bedrift", result.submission_id);
      form.reset();
      startedAt.current = Date.now();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
        <label>Website<input name="contact_website" autoComplete="off" tabIndex={-1} /></label>
      </div>
      <label>
        Bedriftsnavn
        <input name="company" autoComplete="organization" maxLength={240} required />
      </label>
      <label>
        Navn (kontaktperson)
        <input name="name" autoComplete="name" maxLength={180} required />
      </label>
      <label>
        Telefonnummer (kontaktperson)
        <input name="phone" type="tel" autoComplete="tel" maxLength={80} required />
      </label>
      <label>
        Epost (kontaktperson)
        <input name="email" type="email" autoComplete="email" maxLength={320} required />
      </label>
      <label>
        Melding (valgfritt)
        <textarea name="message" rows={6} maxLength={6000} />
      </label>
      <button className="submit-button" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sender …" : "Send"}
      </button>
      {status === "sent" && <p className="form-success" role="status" aria-live="polite">Takk! Henvendelsen er sendt. Vi tar kontakt så raskt vi kan.</p>}
      {status === "error" && <p className="form-error" role="alert">Henvendelsen kunne ikke sendes. Prøv igjen, eller send e-post til freddy@zenecohomes.com.</p>}
    </form>
  );
}
