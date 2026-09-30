"use client";

import { useCallback, useEffect, useState } from "react";
import { CheckCircle2, Loader2, ShieldCheck } from "lucide-react";
import { supabase } from "@/lib/supabase-browser";

type SavedSearch = {
  criteria?: Record<string, unknown>;
  criteria_updated_at?: string | null;
  confirmation_sent_at?: string | null;
  confirmed_at?: string | null;
};

const labels: Record<string, string> = {
  region: "Region",
  area: "Område",
  budgetMin: "Budsjett fra",
  budgetMax: "Budsjett til",
  propertyType: "Boligtype",
  bedrooms: "Soverom",
  bathrooms: "Bad",
  lifestyle: "Livsstil",
  timeline: "Tidslinje",
};

export function PortalCriteriaConfirmation() {
  const [search, setSearch] = useState<SavedSearch | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "saving" | "confirmed" | "error">("loading");

  const load = useCallback(async () => {
    if (!supabase) return;
    const { data } = await supabase.auth.getSession();
    const token = data.session?.access_token;
    if (!token) {
      setStatus("idle");
      return;
    }

    try {
      const res = await fetch("/api/portal/saved-search", {
        headers: { Authorization: `Bearer ${token}` },
        cache: "no-store",
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error("load failed");
      setSearch(body.search || null);
      setStatus("idle");
    } catch {
      setStatus("error");
    }
  }, []);

  useEffect(() => {
    void load();
    if (!supabase) return;
    const { data } = supabase.auth.onAuthStateChange(() => void load());
    return () => data.subscription.unsubscribe();
  }, [load]);

  async function confirm() {
    if (!supabase) return;
    setStatus("saving");
    const { data } = await supabase.auth.getSession();
    const token = data.session?.access_token;
    if (!token) return setStatus("error");

    const res = await fetch("/api/portal/saved-search", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ action: "confirm" }),
    });

    if (!res.ok) return setStatus("error");
    setStatus("confirmed");
    setSearch((current) => current ? { ...current, confirmed_at: new Date().toISOString() } : current);
  }

  const criteria = search?.criteria || {};
  const summary = Object.entries(criteria)
    .filter(([key, value]) => labels[key] && value !== "" && value !== null && value !== undefined && value !== false)
    .map(([key, value]) => ({ label: labels[key], value: String(value) }));

  if (status === "loading") {
    return <div className="portal-criteria-confirmation compact"><Loader2 className="spin" size={17} /> Henter boligkriteriene…</div>;
  }

  if (!search?.criteria_updated_at || search.confirmed_at || status === "confirmed") {
    return status === "confirmed" ? (
      <div className="portal-criteria-confirmation confirmed">
        <CheckCircle2 size={19} />
        <span>Boligkriteriene er bekreftet.</span>
      </div>
    ) : null;
  }

  return (
    <article className="portal-criteria-confirmation" id="portal-criteria-confirmation">
      <div className="portal-criteria-confirmation-heading">
        <span className="portal-criteria-confirmation-icon"><ShieldCheck size={20} /></span>
        <div>
          <p className="eyebrow">Boligønskene dine</p>
          <h2>Bekreft at kriteriene er riktige</h2>
          <p>Disse kriteriene ligger nå til grunn for boligmatch og eventuelle boligvarsler.</p>
        </div>
      </div>

      {summary.length > 0 && (
        <div className="portal-criteria-chips">
          {summary.map((item) => <span key={item.label}><strong>{item.label}</strong> {item.value}</span>)}
        </div>
      )}

      <div className="portal-criteria-actions">
        <button type="button" className="contact-button" onClick={() => void confirm()} disabled={status === "saving"}>
          {status === "saving" ? <Loader2 size={17} className="spin" /> : <CheckCircle2 size={17} />}
          {status === "saving" ? "Bekrefter…" : "Ja, kriteriene er riktige"}
        </button>
        <a className="text-button" href="#portal-preferences">Endre kriteriene</a>
      </div>

      {status === "error" && <p className="form-error">Kunne ikke bekrefte akkurat nå. Prøv igjen.</p>}
    </article>
  );
}
