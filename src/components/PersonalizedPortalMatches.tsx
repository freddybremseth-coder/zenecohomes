"use client";

import { useCallback, useEffect, useState } from "react";
import { Building2, CheckCircle2, Loader2, RefreshCw, Sparkles, ThumbsDown, ThumbsUp } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { supabase } from "@/lib/supabase-browser";

type MatchProperty = {
  id: string;
  ref?: string;
  title?: string;
  location?: string;
  price?: number;
  bedrooms?: number;
  bathrooms?: number;
  built_area?: number;
  nexus_match_score?: number;
  nexus_match_label?: "STRONG" | "GOOD" | "POSSIBLE" | "WEAK";
  nexus_match_reasons?: string[];
  nexus_match_cautions?: string[];
  learning_confidence?: "high" | "medium" | "low";
  feedback_action?: "interested" | "not_for_me" | null;
};

type CatalogPayload = {
  personalized?: boolean;
  properties?: MatchProperty[];
  generatedAt?: string;
};

type FeedbackState = { status: "saving" | "saved" | "error"; action?: "interested" | "not_for_me" };

const strings = {
  no: {
    eyebrow: "Nexus personlig shortlist",
    title: "Boligene som passer deg best akkurat nå",
    intro: "Listen rangeres fra kundedialogen, boligønskene dine og tidligere tilbakemeldinger. Jo mer du markerer, jo mer presis blir neste shortlist.",
    login: "Logg inn på Min side for å se din personlige shortlist.",
    interested: "Interessant",
    notForMe: "Ikke for meg",
    savedInterested: "Notert — Freddy får beskjed om at du er aktiv og interessert.",
    savedNo: "Notert — denne filtreres bort fra neste utvalg.",
    empty: "Ingen personlige boligforslag er klare ennå. Oppdater boligønskene dine eller send Freddy en melding.",
    refresh: "Oppdater shortlist",
    reason: "Hvorfor denne matcher",
  },
  en: {
    eyebrow: "Nexus personal shortlist",
    title: "The properties that fit you best right now",
    intro: "The list is ranked from your dialogue, preferences and previous feedback. Every signal makes the next shortlist more precise.",
    login: "Log in to My account to see your personal shortlist.",
    interested: "Interested",
    notForMe: "Not for me",
    savedInterested: "Noted — Freddy is alerted that you are active and interested.",
    savedNo: "Noted — this property will be filtered from the next shortlist.",
    empty: "No personal property suggestions are ready yet. Update your preferences or send Freddy a message.",
    refresh: "Refresh shortlist",
    reason: "Why this matches",
  },
  de: {
    eyebrow: "Nexus persönliche Auswahl",
    title: "Die Immobilien, die aktuell am besten zu Ihnen passen",
    intro: "Die Reihenfolge basiert auf Dialog, Wünschen und bisherigem Feedback. Jede Rückmeldung verbessert die nächste Auswahl.",
    login: "Melden Sie sich an, um Ihre persönliche Auswahl zu sehen.",
    interested: "Interessant",
    notForMe: "Nicht für mich",
    savedInterested: "Notiert — Freddy sieht, dass Sie aktiv und interessiert sind.",
    savedNo: "Notiert — diese Immobilie wird aus der nächsten Auswahl gefiltert.",
    empty: "Noch keine persönlichen Vorschläge. Aktualisieren Sie Ihre Wünsche oder senden Sie Freddy eine Nachricht.",
    refresh: "Auswahl aktualisieren",
    reason: "Warum passend",
  },
} as const;

function money(value?: number) {
  if (!value) return "Pris på forespørsel";
  return new Intl.NumberFormat("nb-NO", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(value);
}

export function PersonalizedPortalMatches({ locale = "no" }: { locale?: Locale }) {
  const t = strings[locale];
  const [sessionReady, setSessionReady] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [properties, setProperties] = useState<MatchProperty[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<Record<string, FeedbackState>>({});

  const load = useCallback(async () => {
    if (!supabase) return;
    setLoading(true);
    setError(null);
    const { data } = await supabase.auth.getSession();
    const token = data.session?.access_token;
    setSignedIn(Boolean(token));
    setSessionReady(true);
    if (!token) {
      setProperties([]);
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/portal/personalized-catalog", {
        headers: { Authorization: `Bearer ${token}` },
        cache: "no-store",
      });
      const body = (await res.json().catch(() => ({}))) as CatalogPayload & { error?: string };
      if (!res.ok) throw new Error(body.error || `HTTP ${res.status}`);
      setProperties(Array.isArray(body.properties) ? body.properties.slice(0, 8) : []);
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
      setProperties([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load();
    if (!supabase) return;
    const { data } = supabase.auth.onAuthStateChange(() => void load());
    return () => data.subscription.unsubscribe();
  }, [load]);

  async function sendFeedback(propertyId: string, action: "interested" | "not_for_me") {
    if (!supabase) return;
    setFeedback((current) => ({ ...current, [propertyId]: { status: "saving", action } }));
    const { data } = await supabase.auth.getSession();
    const token = data.session?.access_token;
    if (!token) {
      setFeedback((current) => ({ ...current, [propertyId]: { status: "error", action } }));
      return;
    }

    const res = await fetch("/api/portal/property-feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ propertyId, action }),
    });

    if (!res.ok) {
      setFeedback((current) => ({ ...current, [propertyId]: { status: "error", action } }));
      return;
    }

    setFeedback((current) => ({ ...current, [propertyId]: { status: "saved", action } }));
    if (action === "not_for_me") {
      setProperties((current) => current.filter((property) => property.id !== propertyId));
    } else {
      setProperties((current) => current.map((property) => property.id === propertyId ? { ...property, feedback_action: "interested" } : property));
    }
  }

  return (
    <article className="portal-panel wide-panel" style={{ marginBottom: 24 }}>
      <div className="panel-title">
        <Sparkles size={20} />
        <div>
          <p className="eyebrow" style={{ marginBottom: 4 }}>{t.eyebrow}</p>
          <h3>{t.title}</h3>
        </div>
      </div>
      <p>{t.intro}</p>

      {!sessionReady || loading ? (
        <p><Loader2 size={16} className="spin" /> {sessionReady ? "Laster..." : "Kobler til..."}</p>
      ) : !signedIn ? (
        <p>{t.login}</p>
      ) : error ? (
        <div>
          <p className="form-error">{error}</p>
          <button type="button" onClick={() => void load()}><RefreshCw size={15} /> {t.refresh}</button>
        </div>
      ) : properties.length === 0 ? (
        <p>{t.empty}</p>
      ) : (
        <div className="portal-match-list" style={{ display: "grid", gap: 14 }}>
          {properties.map((property, index) => {
            const state = feedback[property.id];
            return (
              <div key={property.id} style={{ border: "1px solid rgba(16,42,50,.14)", borderRadius: 16, padding: 16, background: "#fff" }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "flex-start", flexWrap: "wrap" }}>
                  <div style={{ display: "flex", gap: 10, minWidth: 0 }}>
                    <Building2 size={18} />
                    <div>
                      <div style={{ fontWeight: 800 }}>{index + 1}. {property.ref || property.title || property.id}</div>
                      <div style={{ marginTop: 4 }}>{property.title}</div>
                      <small>{property.location || "Spania"} · {money(property.price)} · {property.bedrooms || 0} sov · {property.bathrooms || 0} bad</small>
                    </div>
                  </div>
                  <div style={{ fontWeight: 800 }}>{property.nexus_match_label || "MATCH"} {property.nexus_match_score ?? "–"}/100</div>
                </div>

                {(property.nexus_match_reasons || []).length > 0 && (
                  <div style={{ marginTop: 10 }}>
                    <small><strong>{t.reason}:</strong> {(property.nexus_match_reasons || []).slice(0, 2).join(" · ")}</small>
                  </div>
                )}

                <div style={{ marginTop: 12, display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
                  <a className="text-button" href={`/eiendommer/${encodeURIComponent(property.ref || property.id)}`}>Se boligen</a>
                  <button type="button" disabled={state?.status === "saving"} onClick={() => void sendFeedback(property.id, "interested")}>
                    {state?.status === "saving" && state.action === "interested" ? <Loader2 size={14} /> : property.feedback_action === "interested" ? <CheckCircle2 size={14} /> : <ThumbsUp size={14} />} {t.interested}
                  </button>
                  <button type="button" disabled={state?.status === "saving"} onClick={() => void sendFeedback(property.id, "not_for_me")}>
                    {state?.status === "saving" && state.action === "not_for_me" ? <Loader2 size={14} /> : <ThumbsDown size={14} />} {t.notForMe}
                  </button>
                </div>

                {state?.status === "saved" && <p className="form-success" style={{ marginTop: 10 }}>{state.action === "interested" ? t.savedInterested : t.savedNo}</p>}
                {state?.status === "error" && <p className="form-error" style={{ marginTop: 10 }}>Kunne ikke lagre tilbakemeldingen akkurat nå.</p>}
              </div>
            );
          })}
        </div>
      )}
    </article>
  );
}
