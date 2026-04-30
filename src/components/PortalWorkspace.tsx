"use client";

import { FormEvent, useEffect, useState } from "react";
import {
  Bell,
  Building2,
  CheckCircle2,
  FileText,
  Heart,
  KeyRound,
  LayoutDashboard,
  LockKeyhole,
  LogOut,
  Mail,
  MessageSquareText,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import { supabase } from "@/lib/supabase-browser";

const buyerSteps = [
  { label: "Behov og budsjett", status: "Klar" },
  { label: "Områdevalg", status: "Pågår" },
  { label: "Boligmatch", status: "Neste" },
  { label: "Reservasjon", status: "Ikke startet" },
];

const savedProperties = [
  { ref: "demo-1", title: "Villa med basseng i Finestrat", location: "Finestrat", price: "Pris på forespørsel", href: "/eiendommer?area=Finestrat" },
  { ref: "demo-2", title: "Leilighet nær strand i Torrevieja", location: "Torrevieja", price: "Pris på forespørsel", href: "/eiendommer?area=Torrevieja" },
  { ref: "demo-3", title: "Golfbolig ved Los Alcazares", location: "Los Alcazares", price: "Pris på forespørsel", href: "/eiendommer?area=Los%20Alcazares" },
];

const portalRedirectUrl = "https://www.zenecohomes.com/auth/callback";

export function PortalWorkspace() {
  const [mode, setMode] = useState<"customer" | "admin">("customer");
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginStatus, setLoginStatus] = useState<"idle" | "sent" | "error" | "missing-config">("idle");
  const [sessionEmail, setSessionEmail] = useState<string | null>(null);
  const [favorites, setFavorites] = useState(savedProperties);

  useEffect(() => {
    function loadFavorites() {
      const stored = JSON.parse(localStorage.getItem("zeneco:favorites") || "[]") as typeof savedProperties;
      setFavorites(stored.length ? stored : savedProperties);
    }

    loadFavorites();
    window.addEventListener("zeneco:favorites-updated", loadFavorites);
    return () => window.removeEventListener("zeneco:favorites-updated", loadFavorites);
  }, []);

  useEffect(() => {
    if (!supabase) return;

    supabase.auth.getUser().then(({ data }) => {
      setSessionEmail(data.user?.email || null);
    });

    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      setSessionEmail(session?.user?.email || null);
    });

    return () => data.subscription.unsubscribe();
  }, []);

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

  async function sendMagicLink(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoginStatus("idle");

    if (!supabase) {
      setLoginStatus("missing-config");
      return;
    }

    const { error } = await supabase.auth.signInWithOtp({
      email: loginEmail,
      options: {
        emailRedirectTo: portalRedirectUrl,
        shouldCreateUser: false,
      },
    });

    setLoginStatus(error ? "error" : "sent");
  }

  async function signOut() {
    await supabase?.auth.signOut();
    setSessionEmail(null);
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
            <p className="eyebrow">{sessionEmail ? "Innlogget" : mode === "admin" ? "Admin" : "Kundeportal"}</p>
            <h2>{mode === "admin" ? "Kontrollrom for Zen Eco Homes" : "Din kjøpsreise i Spania"}</h2>
          </div>
          {sessionEmail ? (
            <button className="portal-session-button" onClick={signOut} type="button">
              <LogOut size={17} /> Logg ut {sessionEmail}
            </button>
          ) : (
            <span>
              <Bell size={17} /> Kobles mot RealtyFlow
            </span>
          )}
        </div>

        <div className="portal-grid">
          {!sessionEmail && (
            <article className="portal-panel access-panel">
              <div className="panel-title">
                <Mail size={20} />
                <h3>Har du fått tilgang?</h3>
              </div>
              <form onSubmit={sendMagicLink}>
                <label>
                  E-post
                  <input
                    name="email"
                    onChange={(event) => setLoginEmail(event.target.value)}
                    placeholder="din@epost.no"
                    required
                    type="email"
                    value={loginEmail}
                  />
                </label>
                <button type="submit">Send innloggingslenke</button>
                {loginStatus === "sent" && <p className="form-success">Sjekk e-posten din for innloggingslenke.</p>}
                {loginStatus === "error" && (
                  <p className="form-error">Kunne ikke sende lenke. Kontroller at du har fått tilgang først.</p>
                )}
                {loginStatus === "missing-config" && (
                  <p className="form-error">Supabase-nøkler mangler i Zeneco-prosjektet.</p>
                )}
              </form>
            </article>
          )}

          {!sessionEmail && (
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
          )}

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
              {favorites.map((property) => (
                <li key={property.ref}>
                  <Building2 size={17} />
                  <a href={property.href}>
                    <span>{property.title}</span>
                    <small>{property.location} · {property.price}</small>
                  </a>
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
                Forespørsler og tilgang styres i RealtyFlow. Når du lagrer boliger på nettsiden vises de her, slik at
                neste samtale kan handle om riktige områder, budsjett og aktuelle prosjekter.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
