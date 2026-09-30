"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Loader2, Mail, Phone, UserRoundPlus } from "lucide-react";

export function PortalJoinForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: String(data.name || ""),
        email: String(data.email || ""),
        phone: data.phone ? String(data.phone) : undefined,
        message: "Kunden ønsker å opprette Min side.",
        request_type: "portal-signup",
        source: "zeneco-min-side-signup",
        page_url: window.location.href,
      }),
    });

    if (res.ok) {
      const email = String(data.email || "").trim().toLowerCase();
      if (email) {
        await fetch("/api/portal/magic-link", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, locale: "no" }),
        }).catch(() => null);
      }
      setStatus("sent");
      form.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <section className="portal-join-card" aria-labelledby="portal-join-title">
      <div className="portal-card-heading">
        <div className="portal-card-icon portal-card-icon-gold" aria-hidden="true">
          <UserRoundPlus size={22} />
        </div>
        <div>
          <p className="eyebrow">Ny kunde</p>
          <h2 id="portal-join-title">Opprett Min side</h2>
          <p className="portal-card-intro">
            Få boligforslag, søkekriterier, favoritter, guider, dokumenter og meldinger samlet på ett sted.
            Etter innsending får du en e-post med en sikker aktiveringslenke.
          </p>
        </div>
      </div>

      {status === "sent" ? (
        <div className="form-success">
          <strong>Sjekk e-posten din.</strong>
          <p>Vi har sendt en sikker e-postlenke slik at du kan åpne Min side med en gang.</p>
        </div>
      ) : (
        <form onSubmit={submit} className="portal-join-form">
          <label>
            Navn
            <div className="portal-input-wrap">
              <UserRoundPlus size={17} />
              <input name="name" required autoComplete="name" placeholder="Navnet ditt" />
            </div>
          </label>
          <label>
            E-post
            <div className="portal-input-wrap">
              <Mail size={17} />
              <input name="email" type="email" required autoComplete="email" placeholder="din@epost.no" />
            </div>
          </label>
          <label>
            Telefon <span>(valgfritt)</span>
            <div className="portal-input-wrap">
              <Phone size={17} />
              <input name="phone" type="tel" autoComplete="tel" placeholder="+47 ..." />
            </div>
          </label>
          <button className="portal-create-button" type="submit" disabled={status === "sending"}>
            {status === "sending" ? <Loader2 size={18} className="spin" /> : <ArrowRight size={18} />}
            {status === "sending" ? "Sender…" : "Opprett Min side"}
          </button>
          {status === "error" && <p className="form-error">Kunne ikke sende akkurat nå. Prøv igjen.</p>}
        </form>
      )}
    </section>
  );
}
