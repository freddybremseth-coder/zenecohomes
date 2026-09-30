"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
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
  primary_image?: string;
  property_type?: string;
};

type CatalogPayload = {
  personalized?: boolean;
  properties?: MatchProperty[];
  generatedAt?: string;
};

type FeedbackState = { status: "saving" | "saved" | "error"; action?: "interested" | "not_for_me" };

const strings = {
  no: {
    eyebrow: "Din personlige boligliste",
    title: "Boligene som passer deg best akkurat nå",
    intro: "Listen rangeres ut fra boligønskene dine, dialogen vår og tidligere tilbakemeldinger. Jo mer du markerer, desto mer presist blir neste utvalg.",
    interested: "Interessant",
    notForMe: "Ikke for meg",
    savedInterested: "Notert — Freddy får beskjed om at du er aktiv og interessert.",
    savedNo: "Notert — denne filtreres bort fra neste utvalg.",
    empty: "Ingen boliger matcher søket akkurat nå. Juster kriteriene og prøv igjen.",
    refresh: "Oppdater boliglisten",
    searchTitle: "Søk i boligene",
    searchIntro: "Bruk søket selv om du ikke har favoritter ennå. Resultatene filtreres direkte i Min side.",
    area: "Område",
    maxPrice: "Makspris",
    bedrooms: "Min. soverom",
    propertyType: "Boligtype",
    allTypes: "Alle typer",
    clear: "Nullstill",
    reason: "Hvorfor denne passer",
    loading: "Laster boliglisten…",
    view: "Se boligen",
    locationFallback: "Spania",
    bedroom: "sov",
    bathroom: "bad",
    feedbackError: "Kunne ikke lagre tilbakemeldingen akkurat nå.",
  },
  en: {
    eyebrow: "Your personal property list",
    title: "The properties that fit you best right now",
    intro: "The list is ranked from your preferences, our dialogue and previous feedback. Every signal makes the next selection more precise.",
    interested: "Interested",
    notForMe: "Not for me",
    savedInterested: "Noted — Freddy is alerted that you are active and interested.",
    savedNo: "Noted — this property will be filtered from the next selection.",
    empty: "No properties match your search right now. Adjust the filters and try again.",
    refresh: "Refresh property list",
    searchTitle: "Search properties",
    searchIntro: "Use the search even if you have no favourites yet. Results are filtered directly in My account.",
    area: "Area",
    maxPrice: "Max price",
    bedrooms: "Min. bedrooms",
    propertyType: "Property type",
    allTypes: "All types",
    clear: "Reset",
    reason: "Why this fits",
    loading: "Loading your property list…",
    view: "View property",
    locationFallback: "Spain",
    bedroom: "beds",
    bathroom: "baths",
    feedbackError: "Could not save your feedback right now.",
  },
  de: {
    eyebrow: "Ihre persönliche Immobilienliste",
    title: "Die Immobilien, die aktuell am besten zu Ihnen passen",
    intro: "Die Reihenfolge basiert auf Ihren Wünschen, unserem Dialog und bisherigen Rückmeldungen. Jede Rückmeldung verbessert die nächste Auswahl.",
    interested: "Interessant",
    notForMe: "Nicht für mich",
    savedInterested: "Notiert — Freddy sieht, dass Sie aktiv und interessiert sind.",
    savedNo: "Notiert — diese Immobilie wird aus der nächsten Auswahl gefiltert.",
    empty: "Aktuell passen keine Immobilien zu Ihrer Suche. Passen Sie die Filter an.",
    refresh: "Immobilienliste aktualisieren",
    searchTitle: "Immobilien suchen",
    searchIntro: "Nutzen Sie die Suche auch ohne Favoriten. Die Ergebnisse werden direkt im Kundenbereich gefiltert.",
    area: "Gebiet",
    maxPrice: "Maximalpreis",
    bedrooms: "Min. Schlafzimmer",
    propertyType: "Immobilientyp",
    allTypes: "Alle Typen",
    clear: "Zurücksetzen",
    reason: "Warum passend",
    loading: "Immobilienliste wird geladen…",
    view: "Immobilie ansehen",
    locationFallback: "Spanien",
    bedroom: "Schlafz.",
    bathroom: "Bäder",
    feedbackError: "Ihre Rückmeldung konnte gerade nicht gespeichert werden.",
  },
} as const;

const matchLabels = {
  no: { STRONG: "Svært god match", GOOD: "God match", POSSIBLE: "Mulig match", WEAK: "Svak match" },
  en: { STRONG: "Strong match", GOOD: "Good match", POSSIBLE: "Possible match", WEAK: "Weak match" },
  de: { STRONG: "Sehr gute Übereinstimmung", GOOD: "Gute Übereinstimmung", POSSIBLE: "Mögliche Übereinstimmung", WEAK: "Schwache Übereinstimmung" },
} as const;

function money(value: number | undefined, locale: Locale) {
  if (!value) {
    return locale === "en" ? "Price on request" : locale === "de" ? "Preis auf Anfrage" : "Pris på forespørsel";
  }
  const numberLocale = locale === "en" ? "en-GB" : locale === "de" ? "de-DE" : "nb-NO";
  return new Intl.NumberFormat(numberLocale, {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

function propertyHref(locale: Locale, property: MatchProperty) {
  const id = encodeURIComponent(property.ref || property.id);
  if (locale === "en") return `/en/properties/${id}`;
  if (locale === "de") return `/de/immobilien/${id}`;
  return `/eiendommer/${id}`;
}

export function PersonalizedPortalMatches({ locale = "no" }: { locale?: Locale }) {
  const t = strings[locale];
  const [sessionReady, setSessionReady] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [properties, setProperties] = useState<MatchProperty[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<Record<string, FeedbackState>>({});
  const [searchArea, setSearchArea] = useState("");
  const [searchMaxPrice, setSearchMaxPrice] = useState("");
  const [searchBedrooms, setSearchBedrooms] = useState("");
  const [searchType, setSearchType] = useState("");

  const load = useCallback(async () => {
    if (!supabase) {
      setSessionReady(true);
      setSignedIn(false);
      return;
    }

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
      setProperties(Array.isArray(body.properties) ? body.properties : []);
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

  const filteredProperties = useMemo(() => {
    const areaNeedle = searchArea.trim().toLowerCase();
    const maxPrice = Number(searchMaxPrice || 0);
    const minBedrooms = Number(searchBedrooms || 0);
    const typeNeedle = searchType.trim().toLowerCase();

    return properties
      .filter((property) => !areaNeedle || String(property.location || "").toLowerCase().includes(areaNeedle) || String(property.title || "").toLowerCase().includes(areaNeedle))
      .filter((property) => !maxPrice || !property.price || Number(property.price) <= maxPrice)
      .filter((property) => !minBedrooms || Number(property.bedrooms || 0) >= minBedrooms)
      .filter((property) => !typeNeedle || String(property.property_type || "").toLowerCase().includes(typeNeedle))
      .slice(0, 12);
  }, [properties, searchArea, searchMaxPrice, searchBedrooms, searchType]);

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
      setProperties((current) =>
        current.map((property) =>
          property.id === propertyId ? { ...property, feedback_action: "interested" } : property,
        ),
      );
    }
  }

  if (!sessionReady || !signedIn) return null;

  return (
    <article className="portal-properties-focus">
      <div className="portal-properties-heading">
        <div>
          <p className="eyebrow">{t.eyebrow}</p>
          <h2>{t.title}</h2>
          <p>{t.intro}</p>
        </div>
        <button className="portal-refresh-button" type="button" onClick={() => void load()}>
          <RefreshCw size={16} /> {t.refresh}
        </button>
      </div>

      <div className="portal-property-search">
        <div>
          <h3>{t.searchTitle}</h3>
          <p>{t.searchIntro}</p>
        </div>
        <div className="portal-property-search-grid">
          <label>
            {t.area}
            <input value={searchArea} onChange={(event) => setSearchArea(event.target.value)} placeholder="Altea, Benidorm, Finestrat..." />
          </label>
          <label>
            {t.maxPrice}
            <input inputMode="numeric" value={searchMaxPrice} onChange={(event) => setSearchMaxPrice(event.target.value)} placeholder="400000" />
          </label>
          <label>
            {t.bedrooms}
            <input min="0" type="number" value={searchBedrooms} onChange={(event) => setSearchBedrooms(event.target.value)} placeholder="3" />
          </label>
          <label>
            {t.propertyType}
            <select value={searchType} onChange={(event) => setSearchType(event.target.value)}>
              <option value="">{t.allTypes}</option>
              <option value="villa">Villa</option>
              <option value="apartment">{locale === "de" ? "Wohnung" : locale === "en" ? "Apartment" : "Leilighet"}</option>
              <option value="townhouse">{locale === "de" ? "Reihenhaus" : locale === "en" ? "Townhouse" : "Rekkehus"}</option>
              <option value="penthouse">Penthouse</option>
            </select>
          </label>
        </div>
        {(searchArea || searchMaxPrice || searchBedrooms || searchType) && (
          <button className="text-button" type="button" onClick={() => {
            setSearchArea("");
            setSearchMaxPrice("");
            setSearchBedrooms("");
            setSearchType("");
          }}>{t.clear}</button>
        )}
      </div>

      {loading ? (
        <div className="portal-properties-state"><Loader2 size={18} className="spin" /> {t.loading}</div>
      ) : error ? (
        <div className="portal-properties-state">
          <p className="form-error">{error}</p>
          <button type="button" onClick={() => void load()}><RefreshCw size={15} /> {t.refresh}</button>
        </div>
      ) : filteredProperties.length === 0 ? (
        <div className="portal-properties-state">
          <Building2 size={22} />
          <p>{t.empty}</p>
          <a className="contact-button" href={locale === "en" ? "/en/properties" : locale === "de" ? "/de/immobilien" : "/eiendommer"}>
            {locale === "en" ? "Browse all properties" : locale === "de" ? "Alle Immobilien ansehen" : "Se alle boliger"}
          </a>
        </div>
      ) : (
        <div className="portal-property-cards">
          {filteredProperties.map((property) => {
            const state = feedback[property.id];
            const label = property.nexus_match_label
              ? matchLabels[locale][property.nexus_match_label]
              : "Match";
            return (
              <article className="portal-property-card" key={property.id}>
                <a className="portal-property-image" href={propertyHref(locale, property)}>
                  {property.primary_image ? (
                    <img src={property.primary_image} alt={property.title || property.ref || "Bolig"} loading="lazy" />
                  ) : (
                    <span><Building2 size={28} /></span>
                  )}
                </a>
                <div className="portal-property-card-body">
                  <div className="portal-property-card-topline">
                    <span>{label} · {property.nexus_match_score ?? "–"}/100</span>
                    {property.ref && <small>{property.ref}</small>}
                  </div>
                  <h3>{property.title || property.ref || property.id}</h3>
                  <p>{property.location || t.locationFallback}</p>
                  <strong>{money(property.price, locale)}</strong>
                  <div className="portal-property-facts">
                    <span>{property.bedrooms || 0} {t.bedroom}</span>
                    <span>{property.bathrooms || 0} {t.bathroom}</span>
                    {property.built_area ? <span>{property.built_area} m²</span> : null}
                  </div>
                  {(property.nexus_match_reasons || []).length > 0 && (
                    <small className="portal-property-reason"><strong>{t.reason}:</strong> {(property.nexus_match_reasons || []).slice(0, 2).join(" · ")}</small>
                  )}
                  <div className="portal-property-actions">
                    <a className="text-button" href={propertyHref(locale, property)}>{t.view}</a>
                    <button type="button" disabled={state?.status === "saving"} onClick={() => void sendFeedback(property.id, "interested")}>
                      {state?.status === "saving" && state.action === "interested"
                        ? <Loader2 size={14} className="spin" />
                        : property.feedback_action === "interested"
                          ? <CheckCircle2 size={14} />
                          : <ThumbsUp size={14} />} {t.interested}
                    </button>
                    <button type="button" disabled={state?.status === "saving"} onClick={() => void sendFeedback(property.id, "not_for_me")}>
                      {state?.status === "saving" && state.action === "not_for_me" ? <Loader2 size={14} className="spin" /> : <ThumbsDown size={14} />} {t.notForMe}
                    </button>
                  </div>
                  {state?.status === "saved" && <p className="form-success">{state.action === "interested" ? t.savedInterested : t.savedNo}</p>}
                  {state?.status === "error" && <p className="form-error">{t.feedbackError}</p>}
                </div>
              </article>
            );
          })}
        </div>
      )}
    </article>
  );
}
