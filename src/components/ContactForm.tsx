"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export function ContactForm({ source = "zenecohomes-next" }: { source?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, source }),
    });

    if (res.ok) {
      setStatus("sent");
      form.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <form className="lead-form" onSubmit={onSubmit}>
      <div className="form-grid">
        <label>
          Navn
          <input name="name" required placeholder="Ditt navn" />
        </label>
        <label>
          Telefon
          <input name="phone" placeholder="+47..." />
        </label>
      </div>
      <label>
        E-post
        <input name="email" type="email" required placeholder="din@epost.no" />
      </label>
      <div className="form-grid">
        <label>
          Område
          <select name="preferred_area" defaultValue="Costa Blanca Nord">
            <option>Costa Blanca Nord</option>
            <option>Costa Blanca Sør</option>
            <option>Costa Calida</option>
            <option>Åpen for forslag</option>
          </select>
        </label>
        <label>
          Budsjett
          <input name="budget" placeholder="f.eks 350 000" />
        </label>
      </div>
      <div className="form-grid">
        <label>
          Boligtype
          <select name="property_type" defaultValue="Nybygg">
            <option>Nybygg</option>
            <option>Villa</option>
            <option>Leilighet</option>
            <option>Rekkehus</option>
          </select>
        </label>
        <label>
          Min. soverom
          <input name="bedrooms" type="number" min="1" placeholder="2" />
        </label>
      </div>
      <label>
        Tidslinje
        <select name="timeline" defaultValue="Innen 3 mnd">
          <option>Klar nå</option>
          <option>Innen 3 mnd</option>
          <option>6-12 mnd</option>
          <option>Planlegger fremtidig pensjon</option>
        </select>
      </label>
      <label>
        Hva ser du etter?
        <textarea name="message" rows={5} placeholder="Fortell kort om ønsker, område, livsstil og behov." />
      </label>
      <button className="submit-button" disabled={status === "sending"}>
        <Send size={18} />
        {status === "sending" ? "Sender..." : "Send forespørsel"}
      </button>
      {status === "sent" && <p className="form-success">Takk. Vi har mottatt forespørselen din.</p>}
      {status === "error" && <p className="form-error">Noe gikk galt. Prøv igjen eller send e-post direkte.</p>}
    </form>
  );
}
