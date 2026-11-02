"use client";

import { useRef, useState } from "react";
import { trackConfirmedFormSubmission } from "@/lib/form-conversion";

type Meeting = { id: string; label: string; time: string };

export function InformationMeetingSignup({ meetings }: { meetings: Meeting[] }) {
  const [selected, setSelected] = useState(meetings[0]?.id || "");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const startedAt = useRef(Date.now());
  const chosen = meetings.find(m => m.id === selected);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!chosen) return;
    setStatus("sending");
    const form = event.currentTarget;
    const fields = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...fields,
          source: "zenecohomes-infomote",
          locale: "no",
          request_type: "infomote",
          message: `Påmelding til digitalt informasjonsmøte: ${chosen.label}, kl. ${chosen.time} (spansk tid).`,
          meeting_date: chosen.id.slice(0, 10),
          meeting_time: chosen.time,
          page_url: window.location.href,
          form_started_at: startedAt.current,
        }),
      });
      const result = await response.json().catch(() => null);
      if (!response.ok || !result?.accepted || !result.submission_id) throw new Error("Not accepted");
      trackConfirmedFormSubmission("infomote", result.submission_id);
      setStatus("sent");
      form.reset();
      startedAt.current = Date.now();
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="booking-layout" style={{ alignItems: "start" }}>
      <div style={{ display: "grid", gap: 12 }}>
        {meetings.map(meeting => (
          <button key={meeting.id} type="button" onClick={() => setSelected(meeting.id)}
            aria-pressed={selected === meeting.id}
            style={{ textAlign: "left", padding: "18px 20px", borderRadius: 12, border: selected === meeting.id ? "2px solid #286c60" : "1px solid #cbd5d1", background: selected === meeting.id ? "#eef7f3" : "#fff", color: "#183e36", cursor: "pointer" }}>
            <strong style={{ display: "block", textTransform: "capitalize" }}>{meeting.label}</strong>
            <span>Kl. {meeting.time} · Digitalt</span>
            {selected === meeting.id && <span style={{ display: "block", fontSize: 13 }}>Valgt møte</span>}
          </button>
        ))}
      </div>
      <aside className="booking-form-panel">
        <h3>Meld deg på</h3>
        <p>{chosen ? `${chosen.label} · kl. ${chosen.time} (spansk tid)` : "Velg et møte."}</p>
        <form className="lead-form" onSubmit={submit}>
          <div aria-hidden="true" style={{ position: "absolute", left: "-10000px" }}>
            <label>Nettside<input name="contact_website" tabIndex={-1} autoComplete="off" /></label>
          </div>
          <label>Navn<input name="name" autoComplete="name" required /></label>
          <label>E-post<input name="email" type="email" autoComplete="email" required /></label>
          <label>Telefon (valgfritt)<input name="phone" type="tel" autoComplete="tel" /></label>
          <button className="submit-button" type="submit" disabled={!chosen || status === "sending"}>{status === "sending" ? "Sender …" : "Meld meg på"}</button>
          {status === "sent" && <p className="form-success" role="status">Takk! Vi har mottatt påmeldingen. Vi bekrefter møtet og sender lenken på e-post.</p>}
          {status === "error" && <p className="form-error" role="alert">Påmeldingen kunne ikke sendes. Prøv igjen.</p>}
        </form>
        <p style={{ fontSize: 13 }}>Gratis og uforpliktende. Vi bruker opplysningene til å følge opp påmeldingen.</p>
      </aside>
    </div>
  );
}
