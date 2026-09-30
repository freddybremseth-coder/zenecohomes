"use client";

import { useCallback, useEffect, useState } from "react";
import { BellRing, CheckCircle2, Loader2 } from "lucide-react";
import { supabase } from "@/lib/supabase-browser";

type SavedSearch = {
  criteria?: Record<string, unknown>;
  alerts_enabled?: boolean;
};

export function PortalPropertyAlertsCard() {
  const [search, setSearch] = useState<SavedSearch | null>(null);
  const [ready, setReady] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState(false);

  const load = useCallback(async () => {
    if (!supabase) return;
    const { data } = await supabase.auth.getSession();
    const token = data.session?.access_token;
    if (!token) return;

    try {
      const res = await fetch("/api/portal/saved-search", {
        headers: { Authorization: `Bearer ${token}` },
        cache: "no-store",
      });
      const body = await res.json().catch(() => ({}));
      if (res.ok) setSearch(body.search || { criteria: {}, alerts_enabled: true });
    } finally {
      setReady(true);
    }
  }, []);

  useEffect(() => {
    void load();
    const onPreferences = () => void load();
    window.addEventListener("zeneco:portal-preferences-updated", onPreferences);
    return () => window.removeEventListener("zeneco:portal-preferences-updated", onPreferences);
  }, [load]);

  async function setAlerts(enabled: boolean) {
    if (!supabase || !search) return;
    setSaving(true);
    setSaved(false);
    setError(false);

    const { data } = await supabase.auth.getSession();
    const token = data.session?.access_token;
    if (!token) {
      setSaving(false);
      setError(true);
      return;
    }

    const res = await fetch("/api/portal/saved-search", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Mitt boligsøk",
        criteria: search.criteria || {},
        alertsEnabled: enabled,
      }),
    });

    if (res.ok) {
      setSearch((current) => ({ ...(current || {}), alerts_enabled: enabled }));
      setSaved(true);
    } else {
      setError(true);
    }
    setSaving(false);
  }

  if (!ready) return null;
  const enabled = search?.alerts_enabled !== false;

  return (
    <article className="portal-panel portal-alerts-card">
      <div className="panel-title">
        <BellRing size={20} />
        <h3>Boligvarsler</h3>
      </div>
      <p>Få beskjed når nye Zen Eco Homes-boliger matcher kriteriene du har lagret på Min side.</p>
      <label className="portal-alert-toggle">
        <input
          type="checkbox"
          checked={enabled}
          disabled={saving}
          onChange={(event) => void setAlerts(event.target.checked)}
        />
        <span>
          <strong>{enabled ? "Boligvarsler er på" : "Boligvarsler er av"}</strong>
          <small>Varslene bruker budsjett, område, boligtype og andre kriterier fra profilen din.</small>
        </span>
      </label>
      {saving && <p className="portal-inline-status"><Loader2 className="spin" size={15} /> Oppdaterer…</p>}
      {saved && <p className="portal-inline-status success"><CheckCircle2 size={15} /> Lagret.</p>}
      {error && <p className="form-error">Kunne ikke oppdatere boligvarsler akkurat nå.</p>}
    </article>
  );
}
