"use client";

import { FormEvent, useState } from "react";
import {
  Bell,
  Building2,
  CheckCircle2,
  FileText,
  Heart,
  KeyRound,
  LayoutDashboard,
  LockKeyhole,
  Mail,
  MessageSquareText,
  ShieldCheck,
  UserRound,
} from "lucide-react";

const buyerSteps = [
  { label: "Behov og budsjett", status: "Klar" },
  { label: "Områdevalg", status: "Pågår" },
  { label: "Boligmatch", status: "Neste" },
  { label: "Reservasjon", status: "Ikke startet" },
];

const savedProperties = [
  "Villa med basseng i Finestrat",
  "Leilighet nær strand i Torrevieja",
  "Golfbolig ved Los Alcazares",
];

export function PortalWorkspace() {
  const [mode, setMode] = useState<"customer" | "admin">("customer");
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");

  async function requestAccess(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("idle");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          source: mode === "admin" ? "zenecohomes-admin-access" : "zenecohomes-customer-access",
          message: `Ber om tilgang til ${mode === "admin" ? "adminpanel" : "kundeportal"}. ${data.message || ""}`,
        }),
      });
      if (!res.ok) throw new Error("Access request failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="portal-shell">
      <aside className="portal-sidebar">
        <div>
          <span className="portal-icon">
            <LockKeyhole size={22} />
          </span>
          <h2>Min side</h2>
          <p>Samle boligmatch, dokumenter, meldinger og neste steg i kjøpsreisen.</p>
        </div>
        <div className="portal-mode">
          <button className={mode === "customer" ? "active" : ""} onClick={() => setMode("customer")} type="button">
            <UserRound size={17} /> Kunde
          </button>
          <button className={mode === "admin" ? "active" : ""} onClick={() => setMode("admin")} type="button">
            <ShieldCheck size={17} /> Admin
          </button>
        </div>
        <a className="portal-admin-link" href="https://realtyflow.chatgenius.pro">
          <LayoutDashboard size={18} /> Åpne RealtyFlow
        </a>
      </aside>

      <div className="portal-main">
        <div className="portal-topline">
          <div>
            <p className="eyebrow">{mode === "admin" ? "Admin" : "Kundeportal"}</p>
            <h2>{mode === "admin" ? "Kontrollrom for Zen Eco Homes" : "Din kjøpsreise i Spania"}</h2>
          </div>
          <span>
            <Bell size={17} /> Kobles mot RealtyFlow
          </span>
        </div>

        <div className="portal-grid">
          <article className="portal-panel access-panel">
            <div className="panel-title">
              <KeyRound size={20} />
              <h3>{mode === "admin" ? "Admin-tilgang" : "Be om innlogging"}</h3>
            </div>
            <form onSubmit={requestAccess}>
              <label>
                Navn
                <input name="name" required placeholder="Ditt navn" />
              </label>
              <label>
                E-post
                <input name="email" required type="email" placeholder="din@epost.no" />
              </label>
              <label>
                Telefon
                <input name="phone" placeholder="+47..." />
              </label>
              <label>
                Melding
                <textarea name="message" placeholder="Kort om hva du trenger tilgang til" />
              </label>
              <button type="submit">{mode === "admin" ? "Send adminforespørsel" : "Send innloggingsforespørsel"}</button>
              {status === "sent" && <p className="form-success">Forespørselen er sendt til RealtyFlow.</p>}
              {status === "error" && <p className="form-error">Kunne ikke sende akkurat nå. Prøv igjen.</p>}
            </form>
          </article>

          <article className="portal-panel">
            <div className="panel-title">
              <CheckCircle2 size={20} />
              <h3>Kjøperstatus</h3>
            </div>
            <div className="buyer-steps">
              {buyerSteps.map((step) => (
                <div key={step.label}>
                  <span>{step.label}</span>
                  <strong>{step.status}</strong>
                </div>
              ))}
            </div>
          </article>

          <article className="portal-panel">
            <div className="panel-title">
              <Heart size={20} />
              <h3>Favoritter</h3>
            </div>
            <ul className="portal-list">
              {savedProperties.map((property) => (
                <li key={property}>
                  <Building2 size={17} />
                  <span>{property}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="portal-panel">
            <div className="panel-title">
              <FileText size={20} />
              <h3>Dokumenter</h3>
            </div>
            <ul className="portal-list">
              <li>
                <FileText size={17} />
                <span>Kjøpsguide og sjekkliste</span>
              </li>
              <li>
                <FileText size={17} />
                <span>Reservasjonsdokumenter</span>
              </li>
              <li>
                <FileText size={17} />
                <span>Notar og finansiering</span>
              </li>
            </ul>
          </article>

          <article className="portal-panel wide-panel">
            <div className="panel-title">
              <MessageSquareText size={20} />
              <h3>Meldinger og oppfølging</h3>
            </div>
            <div className="message-preview">
              <Mail size={19} />
              <p>
                Neste steg er å koble denne flaten mot kundeprofil, favoritter og meldinger i RealtyFlow. Forespørsler
                fra skjemaet går allerede inn via Zen Eco Homes sitt kontakt-API.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
