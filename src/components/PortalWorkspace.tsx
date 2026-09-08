"use client";

import { FormEvent, useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n";
import {
  ArrowRight,
  Building2,
  Calculator,
  FileText,
  Heart,
  LockKeyhole,
  LogOut,
  MessageSquareText,
  SlidersHorizontal,
  UserRound,
} from "lucide-react";
import { supabase } from "@/lib/supabase-browser";

type SavedProperty = {
  ref: string;
  title: string;
  location: string;
  price: string;
  href: string;
};

type PortalDocument = {
  id: string;
  type: string;
  title: string;
  summary?: string;
  content?: string;
  publishedAt?: string;
  source?: string;
};

type PortalMessage = {
  id: string;
  sender_type: "customer" | "admin" | "system";
  sender_name?: string;
  body: string;
  attachments?: { name?: string; url?: string }[];
  created_at: string;
};

type FinanceRates = {
  eurNok: number;
  updatedAt: string;
  exchangeSource: string;
  purchaseCostRate: number;
  loanAssumptions: {
    spainRate: number;
    norwayRate: number;
    sourceNote: string;
  };
};

type Preferences = {
  budgetMin: string;
  budgetMax: string;
  region: string;
  area: string;
  propertyType: string;
  bedrooms: string;
  bathrooms: string;
  lifestyle: string;
  timeline: string;
  wantsPlots: boolean;
  minPlotArea: string;
  maxPlotPrice: string;
  notes: string;
};

const initialPreferences: Preferences = {
  budgetMin: "",
  budgetMax: "",
  region: "",
  area: "",
  propertyType: "",
  bedrooms: "",
  bathrooms: "",
  lifestyle: "",
  timeline: "",
  wantsPlots: false,
  minPlotArea: "",
  maxPlotPrice: "",
  notes: "",
};

type PortalStrings = {
  sidebarTitle: string;
  sidebarDesc: string;
  portalLabel: string;
  loggedIn: string;
  topHeading: string;
  signOut: string;
  preferencesTitle: string;
  budgetFrom: string;
  budgetTo: string;
  region: string;
  allRegions: string;
  area: string;
  areaPlaceholder: string;
  propertyType: string;
  allTypes: string;
  apartment: string;
  townhouse: string;
  lifestyle: string;
  open: string;
  pool: string;
  sea: string;
  golf: string;
  bedrooms: string;
  bathrooms: string;
  timeline: string;
  notSelected: string;
  readyNow: string;
  withinThreeMonths: string;
  sixToTwelveMonths: string;
  later: string;
  wantsPlots: string;
  plotAreaFrom: string;
  plotPriceTo: string;
  notes: string;
  notesPlaceholder: string;
  savePreferences: string;
  savingPreferences: string;
  preferencesSaved: string;
  preferencesError: string;
  favoritesTitle: string;
  favoritesEmpty: string;
  compare: string;
  documentsTitle: string;
  documentsEmpty: string;
  readMore: string;
  readLess: string;
  calculatorTitle: string;
  propertyPrice: string;
  equity: string;
  years: string;
  spainRate: string;
  norwayRate: string;
  purchaseCosts: string;
  totalBudget: string;
  estimatedLoan: string;
  monthlySpainNorway: string;
  rateNote: string;
  messagesTitle: string;
  messagesEmpty: string;
  messagePlaceholder: string;
  attachmentPlaceholder: string;
  sendMessage: string;
  sendingMessage: string;
  messageSent: string;
  messageError: string;
  you: string;
};

const PORTAL_STRINGS: Record<Locale, PortalStrings> = {
  no: {
    sidebarTitle: "Min side",
    sidebarDesc: "Boligønsker, favoritter, dokumenter, kalkyler og dialog samlet på ett sted.",
    portalLabel: "Kundeportal",
    loggedIn: "Innlogget",
    topHeading: "Din boligreise i Spania",
    signOut: "Logg ut",
    preferencesTitle: "Mine boligønsker",
    budgetFrom: "Budsjett fra",
    budgetTo: "Budsjett til",
    region: "Region",
    allRegions: "Alle regioner",
    area: "Område/sted",
    areaPlaceholder: "Calpe, Altea, Torrevieja...",
    propertyType: "Boligtype",
    allTypes: "Alle typer",
    apartment: "Leilighet",
    townhouse: "Rekkehus",
    lifestyle: "Livsstil",
    open: "Åpen",
    pool: "Basseng",
    sea: "Nær sjø / havutsikt",
    golf: "Golf",
    bedrooms: "Soverom",
    bathrooms: "Bad",
    timeline: "Tidslinje",
    notSelected: "Ikke valgt",
    readyNow: "Klar nå",
    withinThreeMonths: "Innen 3 mnd",
    sixToTwelveMonths: "6–12 mnd",
    later: "Senere",
    wantsPlots: "Jeg vurderer også tomt",
    plotAreaFrom: "Tomteareal fra",
    plotPriceTo: "Tomtepris til",
    notes: "Notat",
    notesPlaceholder: "Fortell om beliggenhet, utsikt, avstand til strand/golf, overtakelse eller andre ønsker.",
    savePreferences: "Lagre ønskene mine",
    savingPreferences: "Lagrer…",
    preferencesSaved: "Ønskene er lagret. Freddy får beskjed om oppdateringen.",
    preferencesError: "Kunne ikke lagre ønskene akkurat nå.",
    favoritesTitle: "Favoritter",
    favoritesEmpty: "Du har ikke lagret noen favoritter ennå.",
    compare: "Sammenlign boliger",
    documentsTitle: "Dokumenter",
    documentsEmpty: "Ingen dokumenter er delt med deg ennå.",
    readMore: "Les mer",
    readLess: "Vis mindre",
    calculatorTitle: "Kjøpskalkulator",
    propertyPrice: "Boligpris EUR",
    equity: "Egenkapital EUR",
    years: "År",
    spainRate: "Spania %",
    norwayRate: "Norge %",
    purchaseCosts: "Ca. skatt og kostnader",
    totalBudget: "Total kjøpsramme",
    estimatedLoan: "Estimert lån",
    monthlySpainNorway: "Mnd. Spania / Norge",
    rateNote: "Renter og kjøpskostnader er veiledende og kan variere.",
    messagesTitle: "Meldinger og neste steg",
    messagesEmpty: "Ingen meldinger eller avtalte neste steg er registrert ennå.",
    messagePlaceholder: "Skriv en melding til Freddy / Zen Eco Homes...",
    attachmentPlaceholder: "Vedlegg/lenke, f.eks. PDF eller delt dokument",
    sendMessage: "Send melding",
    sendingMessage: "Sender…",
    messageSent: "Meldingen er sendt.",
    messageError: "Kunne ikke sende meldingen.",
    you: "Du",
  },
  en: {
    sidebarTitle: "My account",
    sidebarDesc: "Preferences, favourites, documents, calculations and dialogue in one place.",
    portalLabel: "Customer portal",
    loggedIn: "Signed in",
    topHeading: "Your property journey in Spain",
    signOut: "Sign out",
    preferencesTitle: "My property preferences",
    budgetFrom: "Budget from",
    budgetTo: "Budget to",
    region: "Region",
    allRegions: "All regions",
    area: "Area/location",
    areaPlaceholder: "Calpe, Altea, Torrevieja...",
    propertyType: "Property type",
    allTypes: "All types",
    apartment: "Apartment",
    townhouse: "Townhouse",
    lifestyle: "Lifestyle",
    open: "Open",
    pool: "Pool",
    sea: "Near the sea / sea view",
    golf: "Golf",
    bedrooms: "Bedrooms",
    bathrooms: "Bathrooms",
    timeline: "Timeline",
    notSelected: "Not selected",
    readyNow: "Ready now",
    withinThreeMonths: "Within 3 months",
    sixToTwelveMonths: "6–12 months",
    later: "Later",
    wantsPlots: "I am also considering a plot",
    plotAreaFrom: "Plot area from",
    plotPriceTo: "Plot price to",
    notes: "Notes",
    notesPlaceholder: "Tell us about location, views, distance to beach/golf, completion timing or other preferences.",
    savePreferences: "Save my preferences",
    savingPreferences: "Saving…",
    preferencesSaved: "Your preferences are saved. Freddy is notified about the update.",
    preferencesError: "Could not save your preferences right now.",
    favoritesTitle: "Favourites",
    favoritesEmpty: "You have not saved any favourites yet.",
    compare: "Compare properties",
    documentsTitle: "Documents",
    documentsEmpty: "No documents have been shared with you yet.",
    readMore: "Read more",
    readLess: "Show less",
    calculatorTitle: "Purchase calculator",
    propertyPrice: "Property price EUR",
    equity: "Equity EUR",
    years: "Years",
    spainRate: "Spain %",
    norwayRate: "Norway %",
    purchaseCosts: "Approx. taxes and costs",
    totalBudget: "Total purchase budget",
    estimatedLoan: "Estimated loan",
    monthlySpainNorway: "Monthly Spain / Norway",
    rateNote: "Rates and purchase costs are indicative and may vary.",
    messagesTitle: "Messages and next steps",
    messagesEmpty: "No messages or agreed next steps have been registered yet.",
    messagePlaceholder: "Write a message to Freddy / Zen Eco Homes...",
    attachmentPlaceholder: "Attachment/link, e.g. PDF or shared document",
    sendMessage: "Send message",
    sendingMessage: "Sending…",
    messageSent: "Your message has been sent.",
    messageError: "Could not send the message.",
    you: "You",
  },
  de: {
    sidebarTitle: "Mein Bereich",
    sidebarDesc: "Wünsche, Favoriten, Dokumente, Berechnungen und Dialog an einem Ort.",
    portalLabel: "Kundenportal",
    loggedIn: "Angemeldet",
    topHeading: "Ihre Immobilienreise in Spanien",
    signOut: "Abmelden",
    preferencesTitle: "Meine Immobilienwünsche",
    budgetFrom: "Budget von",
    budgetTo: "Budget bis",
    region: "Region",
    allRegions: "Alle Regionen",
    area: "Gebiet/Ort",
    areaPlaceholder: "Calpe, Altea, Torrevieja...",
    propertyType: "Immobilientyp",
    allTypes: "Alle Typen",
    apartment: "Wohnung",
    townhouse: "Reihenhaus",
    lifestyle: "Lebensstil",
    open: "Offen",
    pool: "Pool",
    sea: "Meeresnähe / Meerblick",
    golf: "Golf",
    bedrooms: "Schlafzimmer",
    bathrooms: "Bäder",
    timeline: "Zeitrahmen",
    notSelected: "Nicht ausgewählt",
    readyNow: "Jetzt bereit",
    withinThreeMonths: "Innerhalb 3 Monate",
    sixToTwelveMonths: "6–12 Monate",
    later: "Später",
    wantsPlots: "Ich erwäge auch ein Grundstück",
    plotAreaFrom: "Grundstücksfläche ab",
    plotPriceTo: "Grundstückspreis bis",
    notes: "Notiz",
    notesPlaceholder: "Beschreiben Sie Lage, Aussicht, Entfernung zu Strand/Golf, Übergabe oder andere Wünsche.",
    savePreferences: "Meine Wünsche speichern",
    savingPreferences: "Wird gespeichert…",
    preferencesSaved: "Ihre Wünsche wurden gespeichert. Freddy wird über die Aktualisierung informiert.",
    preferencesError: "Ihre Wünsche konnten gerade nicht gespeichert werden.",
    favoritesTitle: "Favoriten",
    favoritesEmpty: "Sie haben noch keine Favoriten gespeichert.",
    compare: "Immobilien vergleichen",
    documentsTitle: "Dokumente",
    documentsEmpty: "Es wurden noch keine Dokumente mit Ihnen geteilt.",
    readMore: "Mehr lesen",
    readLess: "Weniger anzeigen",
    calculatorTitle: "Kaufrechner",
    propertyPrice: "Immobilienpreis EUR",
    equity: "Eigenkapital EUR",
    years: "Jahre",
    spainRate: "Spanien %",
    norwayRate: "Norwegen %",
    purchaseCosts: "Ca. Steuern und Kosten",
    totalBudget: "Gesamter Kaufrahmen",
    estimatedLoan: "Geschätztes Darlehen",
    monthlySpainNorway: "Monatlich Spanien / Norwegen",
    rateNote: "Zinsen und Kaufkosten sind Richtwerte und können variieren.",
    messagesTitle: "Nachrichten und nächste Schritte",
    messagesEmpty: "Noch keine Nachrichten oder vereinbarten nächsten Schritte.",
    messagePlaceholder: "Nachricht an Freddy / Zen Eco Homes schreiben...",
    attachmentPlaceholder: "Anhang/Link, z. B. PDF oder geteiltes Dokument",
    sendMessage: "Nachricht senden",
    sendingMessage: "Wird gesendet…",
    messageSent: "Die Nachricht wurde gesendet.",
    messageError: "Die Nachricht konnte nicht gesendet werden.",
    you: "Sie",
  },
};

function formatEuro(value: number | undefined, locale: Locale) {
  if (value === undefined || Number.isNaN(value)) return "–";
  const numberLocale = locale === "en" ? "en-GB" : locale === "de" ? "de-DE" : "nb-NO";
  return new Intl.NumberFormat(numberLocale, {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatNok(value: number | undefined, locale: Locale) {
  if (value === undefined || Number.isNaN(value)) return "–";
  const numberLocale = locale === "en" ? "en-GB" : locale === "de" ? "de-DE" : "nb-NO";
  return new Intl.NumberFormat(numberLocale, {
    style: "currency",
    currency: "NOK",
    maximumFractionDigits: 0,
  }).format(value);
}

function calculateMonthlyPayment(principal: number, annualRate: number, years: number) {
  if (!principal || !annualRate || !years) return 0;
  const months = years * 12;
  const monthlyRate = annualRate / 12;
  return (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
}

export function PortalWorkspace({ locale = "no" }: { locale?: Locale } = {}) {
  const p = PORTAL_STRINGS[locale];
  const [authReady, setAuthReady] = useState(false);
  const [sessionEmail, setSessionEmail] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<SavedProperty[]>([]);
  const [documents, setDocuments] = useState<PortalDocument[]>([]);
  const [messages, setMessages] = useState<PortalMessage[]>([]);
  const [messageText, setMessageText] = useState("");
  const [attachmentUrl, setAttachmentUrl] = useState("");
  const [messageStatus, setMessageStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [expandedDocument, setExpandedDocument] = useState<string | null>(null);
  const [financeRates, setFinanceRates] = useState<FinanceRates | null>(null);
  const [calculator, setCalculator] = useState({
    price: "",
    ownCapital: "",
    years: "25",
    spainRate: "",
    norwayRate: "",
  });
  const [preferences, setPreferences] = useState<Preferences>(initialPreferences);
  const [signalStatus, setSignalStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");

  useEffect(() => {
    function loadFavorites() {
      try {
        const stored = JSON.parse(localStorage.getItem("zeneco:favorites") || "[]");
        setFavorites(Array.isArray(stored) ? stored : []);
      } catch {
        setFavorites([]);
      }
    }

    loadFavorites();
    window.addEventListener("zeneco:favorites-updated", loadFavorites);
    return () => window.removeEventListener("zeneco:favorites-updated", loadFavorites);
  }, []);

  useEffect(() => {
    if (!supabase) {
      setAuthReady(true);
      return;
    }

    supabase.auth.getUser().then(({ data }) => {
      setSessionEmail(data.user?.email || null);
      setAuthReady(true);
    });

    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      setSessionEmail(session?.user?.email || null);
      setAuthReady(true);
    });

    return () => data.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!sessionEmail) return;
    try {
      const stored = JSON.parse(localStorage.getItem(`zeneco:portal-preferences:${sessionEmail}`) || "null");
      if (stored && typeof stored === "object") {
        setPreferences((current) => ({ ...current, ...stored }));
      }
    } catch {
      // CRM remains the authoritative destination even if local convenience state is unavailable.
    }
  }, [sessionEmail]);

  useEffect(() => {
    if (!sessionEmail || !supabase) return;

    supabase.auth.getSession().then(({ data }) => {
      const token = data.session?.access_token;
      if (!token) return;
      fetch("/api/portal/documents", {
        headers: { Authorization: `Bearer ${token}` },
        cache: "no-store",
      })
        .then((res) => res.json())
        .then((data) => setDocuments(Array.isArray(data.documents) ? data.documents : []))
        .catch(() => setDocuments([]));
    });
  }, [sessionEmail]);

  useEffect(() => {
    if (!sessionEmail || !supabase) return;

    supabase.auth.getSession().then(({ data }) => {
      const token = data.session?.access_token;
      if (!token) return;
      fetch("/api/portal/messages", {
        headers: { Authorization: `Bearer ${token}` },
        cache: "no-store",
      })
        .then((res) => res.json())
        .then((data) => setMessages(Array.isArray(data.messages) ? data.messages : []))
        .catch(() => setMessages([]));
    });
  }, [sessionEmail, messageStatus]);

  useEffect(() => {
    fetch("/api/finance/rates")
      .then((res) => res.json())
      .then((data) => {
        setFinanceRates(data);
        setCalculator((current) => ({
          ...current,
          spainRate: current.spainRate || String(Math.round(Number(data.loanAssumptions?.spainRate || 0.0425) * 10000) / 100),
          norwayRate: current.norwayRate || String(Math.round(Number(data.loanAssumptions?.norwayRate || 0.055) * 10000) / 100),
        }));
      })
      .catch(() => {});
  }, []);

  const purchasePrice = Number(calculator.price || 0);
  const purchaseCostRate = financeRates?.purchaseCostRate ?? 0.135;
  const purchaseCosts = purchasePrice * purchaseCostRate;
  const totalPrice = purchasePrice + purchaseCosts;
  const loanAmount = Math.max(0, totalPrice - Number(calculator.ownCapital || 0));
  const years = Number(calculator.years || 25);
  const spainMonthly = calculateMonthlyPayment(loanAmount, Number(calculator.spainRate || 0) / 100, years);
  const norwayMonthly = calculateMonthlyPayment(loanAmount, Number(calculator.norwayRate || 0) / 100, years);

  async function signOut() {
    await supabase?.auth.signOut();
    setSessionEmail(null);
  }

  async function savePreferences(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!supabase || !sessionEmail) return;

    setSignalStatus("saving");
    const { data } = await supabase.auth.getSession();
    const token = data.session?.access_token;
    if (!token) {
      setSignalStatus("error");
      return;
    }

    const res = await fetch("/api/portal/preferences", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ preferences }),
    });

    if (res.ok) {
      try {
        localStorage.setItem(`zeneco:portal-preferences:${sessionEmail}`, JSON.stringify(preferences));
      } catch {
        // Saving to CRM succeeded; local persistence is only a convenience.
      }
      setSignalStatus("saved");
    } else {
      setSignalStatus("error");
    }
  }

  async function sendPortalMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!supabase || (!messageText.trim() && !attachmentUrl.trim())) return;

    setMessageStatus("sending");
    const { data } = await supabase.auth.getSession();
    const token = data.session?.access_token;
    if (!token) {
      setMessageStatus("error");
      return;
    }

    const res = await fetch("/api/portal/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        body: messageText,
        attachmentUrl,
        attachmentName: attachmentUrl ? "Vedlegg" : "",
      }),
    });

    if (res.ok) {
      const data = await res.json();
      if (data.message) setMessages((current) => [...current, data.message]);
      setMessageText("");
      setAttachmentUrl("");
      setMessageStatus("sent");
    } else {
      setMessageStatus("error");
    }
  }

  if (!authReady || !sessionEmail) return null;

  return (
    <section className="portal-shell">
      <aside className="portal-sidebar">
        <div>
          <span className="portal-icon">
            <LockKeyhole size={22} />
          </span>
          <h2>{p.sidebarTitle}</h2>
          <p>{p.sidebarDesc}</p>
        </div>
        <div className="portal-mode single">
          <span>
            <UserRound size={17} /> {p.portalLabel}
          </span>
        </div>
      </aside>

      <div className="portal-main">
        <div className="portal-topline">
          <div>
            <p className="eyebrow">{p.loggedIn}</p>
            <h2>{p.topHeading}</h2>
          </div>
          <button className="portal-session-button" onClick={signOut} type="button">
            <LogOut size={17} /> {p.signOut} {sessionEmail}
          </button>
        </div>

        <div className="portal-grid">
          <article className="portal-panel wide-panel portal-search-panel">
            <div className="panel-title">
              <SlidersHorizontal size={20} />
              <h3>{p.preferencesTitle}</h3>
            </div>
            <form className="portal-preferences" onSubmit={savePreferences}>
              <div className="form-grid">
                <label>
                  {p.budgetFrom}
                  <input
                    inputMode="numeric"
                    onChange={(event) => setPreferences((current) => ({ ...current, budgetMin: event.target.value }))}
                    placeholder="250000"
                    value={preferences.budgetMin}
                  />
                </label>
                <label>
                  {p.budgetTo}
                  <input
                    inputMode="numeric"
                    onChange={(event) => setPreferences((current) => ({ ...current, budgetMax: event.target.value }))}
                    placeholder="650000"
                    value={preferences.budgetMax}
                  />
                </label>
              </div>

              <div className="form-grid">
                <label>
                  {p.region}
                  <select
                    onChange={(event) => setPreferences((current) => ({ ...current, region: event.target.value }))}
                    value={preferences.region}
                  >
                    <option value="">{p.allRegions}</option>
                    <option>Costa Blanca Nord</option>
                    <option>Costa Blanca Sør</option>
                    <option>Costa Cálida</option>
                  </select>
                </label>
                <label>
                  {p.area}
                  <input
                    onChange={(event) => setPreferences((current) => ({ ...current, area: event.target.value }))}
                    placeholder={p.areaPlaceholder}
                    value={preferences.area}
                  />
                </label>
              </div>

              <div className="form-grid">
                <label>
                  {p.propertyType}
                  <select
                    onChange={(event) => setPreferences((current) => ({ ...current, propertyType: event.target.value }))}
                    value={preferences.propertyType}
                  >
                    <option value="">{p.allTypes}</option>
                    <option>Villa</option>
                    <option>{p.apartment}</option>
                    <option>{p.townhouse}</option>
                    <option>Penthouse</option>
                  </select>
                </label>
                <label>
                  {p.lifestyle}
                  <select
                    onChange={(event) => setPreferences((current) => ({ ...current, lifestyle: event.target.value }))}
                    value={preferences.lifestyle}
                  >
                    <option value="">{p.open}</option>
                    <option value="pool">{p.pool}</option>
                    <option value="sea">{p.sea}</option>
                    <option value="golf">{p.golf}</option>
                  </select>
                </label>
              </div>

              <div className="form-grid compact-fields">
                <label>
                  {p.bedrooms}
                  <input
                    min="0"
                    onChange={(event) => setPreferences((current) => ({ ...current, bedrooms: event.target.value }))}
                    type="number"
                    value={preferences.bedrooms}
                  />
                </label>
                <label>
                  {p.bathrooms}
                  <input
                    min="0"
                    onChange={(event) => setPreferences((current) => ({ ...current, bathrooms: event.target.value }))}
                    type="number"
                    value={preferences.bathrooms}
                  />
                </label>
                <label>
                  {p.timeline}
                  <select
                    onChange={(event) => setPreferences((current) => ({ ...current, timeline: event.target.value }))}
                    value={preferences.timeline}
                  >
                    <option value="">{p.notSelected}</option>
                    <option>{p.readyNow}</option>
                    <option>{p.withinThreeMonths}</option>
                    <option>{p.sixToTwelveMonths}</option>
                    <option>{p.later}</option>
                  </select>
                </label>
              </div>

              <label className="portal-checkbox">
                <input
                  checked={preferences.wantsPlots}
                  onChange={(event) => setPreferences((current) => ({ ...current, wantsPlots: event.target.checked }))}
                  type="checkbox"
                />
                {p.wantsPlots}
              </label>

              {preferences.wantsPlots && (
                <div className="form-grid">
                  <label>
                    {p.plotAreaFrom}
                    <input
                      inputMode="numeric"
                      onChange={(event) => setPreferences((current) => ({ ...current, minPlotArea: event.target.value }))}
                      placeholder="1000"
                      value={preferences.minPlotArea}
                    />
                  </label>
                  <label>
                    {p.plotPriceTo}
                    <input
                      inputMode="numeric"
                      onChange={(event) => setPreferences((current) => ({ ...current, maxPlotPrice: event.target.value }))}
                      placeholder="75000"
                      value={preferences.maxPlotPrice}
                    />
                  </label>
                </div>
              )}

              <label>
                {p.notes}
                <textarea
                  onChange={(event) => setPreferences((current) => ({ ...current, notes: event.target.value }))}
                  placeholder={p.notesPlaceholder}
                  value={preferences.notes}
                />
              </label>

              <button disabled={signalStatus === "saving"} type="submit">
                {signalStatus === "saving" ? p.savingPreferences : p.savePreferences}
              </button>
              {signalStatus === "saved" && <p className="form-success">{p.preferencesSaved}</p>}
              {signalStatus === "error" && <p className="form-error">{p.preferencesError}</p>}
            </form>
          </article>

          <article className="portal-panel">
            <div className="panel-title">
              <Heart size={20} />
              <h3>{p.favoritesTitle}</h3>
            </div>
            {favorites.length ? (
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
            ) : (
              <p className="message-empty">{p.favoritesEmpty}</p>
            )}
            {favorites.length > 1 && (
              <a className="text-button" href="/sammenlign">
                {p.compare} <ArrowRight size={15} />
              </a>
            )}
          </article>

          <article className="portal-panel">
            <div className="panel-title">
              <FileText size={20} />
              <h3>{p.documentsTitle}</h3>
            </div>
            {documents.length ? (
              <ul className="portal-list">
                {documents.map((document) => (
                  <li key={document.id} className="portal-document-item">
                    <FileText size={17} />
                    <div>
                      <span>{document.title}</span>
                      {document.summary && <small>{document.summary}</small>}
                      {document.content && expandedDocument === document.id && (
                        <p className="portal-document-content">{document.content}</p>
                      )}
                      {document.content && (
                        <button
                          className="text-button"
                          type="button"
                          onClick={() => setExpandedDocument(expandedDocument === document.id ? null : document.id)}
                        >
                          {expandedDocument === document.id ? p.readLess : p.readMore}
                        </button>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="message-empty">{p.documentsEmpty}</p>
            )}
          </article>

          <article className="portal-panel">
            <div className="panel-title">
              <Calculator size={20} />
              <h3>{p.calculatorTitle}</h3>
            </div>
            <div className="portal-calculator">
              <label>
                {p.propertyPrice}
                <input
                  inputMode="numeric"
                  onChange={(event) => setCalculator((current) => ({ ...current, price: event.target.value }))}
                  placeholder="450000"
                  value={calculator.price}
                />
              </label>
              <label>
                {p.equity}
                <input
                  inputMode="numeric"
                  onChange={(event) => setCalculator((current) => ({ ...current, ownCapital: event.target.value }))}
                  placeholder="150000"
                  value={calculator.ownCapital}
                />
              </label>
              <div className="form-grid compact-fields">
                <label>
                  {p.years}
                  <input
                    inputMode="numeric"
                    onChange={(event) => setCalculator((current) => ({ ...current, years: event.target.value }))}
                    value={calculator.years}
                  />
                </label>
                <label>
                  {p.spainRate}
                  <input
                    inputMode="decimal"
                    onChange={(event) => setCalculator((current) => ({ ...current, spainRate: event.target.value }))}
                    value={calculator.spainRate}
                  />
                </label>
                <label>
                  {p.norwayRate}
                  <input
                    inputMode="decimal"
                    onChange={(event) => setCalculator((current) => ({ ...current, norwayRate: event.target.value }))}
                    value={calculator.norwayRate}
                  />
                </label>
              </div>
              <div className="calculator-results">
                <div>
                  <small>{p.purchaseCosts}</small>
                  <strong>{formatEuro(purchaseCosts, locale)}</strong>
                </div>
                <div>
                  <small>{p.totalBudget}</small>
                  <strong>{formatEuro(totalPrice, locale)}</strong>
                  <span>{formatNok(totalPrice * (financeRates?.eurNok || 0), locale)}</span>
                </div>
                <div>
                  <small>{p.estimatedLoan}</small>
                  <strong>{formatEuro(loanAmount, locale)}</strong>
                </div>
                <div>
                  <small>{p.monthlySpainNorway}</small>
                  <strong>{formatEuro(spainMonthly, locale)} / {formatEuro(norwayMonthly, locale)}</strong>
                </div>
              </div>
              <p className="calculator-note">
                {financeRates?.eurNok ? `EUR/NOK ${financeRates.eurNok.toFixed(4)} · ` : ""}{p.rateNote}
              </p>
            </div>
          </article>

          <article className="portal-panel wide-panel">
            <div className="panel-title">
              <MessageSquareText size={20} />
              <h3>{p.messagesTitle}</h3>
            </div>
            <div className="portal-message-box">
              <div className="portal-message-thread">
                {messages.length ? messages.map((message) => (
                  <div
                    key={message.id}
                    className={`portal-message ${message.sender_type === "customer" ? "from-customer" : "from-admin"}`}
                  >
                    <small>
                      {message.sender_type === "customer" ? p.you : message.sender_name || "Zen Eco Homes"} · {new Date(message.created_at).toLocaleString(locale === "en" ? "en-GB" : locale === "de" ? "de-DE" : "nb-NO")}
                    </small>
                    <p>{message.body}</p>
                    {message.attachments?.map((attachment, index) => attachment.url ? (
                      <a key={`${message.id}-${index}`} href={attachment.url} rel="noopener noreferrer" target="_blank">
                        {attachment.name || attachment.url}
                      </a>
                    ) : null)}
                  </div>
                )) : (
                  <p className="message-empty">{p.messagesEmpty}</p>
                )}
              </div>

              <form className="portal-message-form" onSubmit={sendPortalMessage}>
                <textarea
                  onChange={(event) => setMessageText(event.target.value)}
                  placeholder={p.messagePlaceholder}
                  value={messageText}
                />
                <input
                  onChange={(event) => setAttachmentUrl(event.target.value)}
                  placeholder={p.attachmentPlaceholder}
                  type="url"
                  value={attachmentUrl}
                />
                <button disabled={messageStatus === "sending"} type="submit">
                  {messageStatus === "sending" ? p.sendingMessage : p.sendMessage}
                </button>
                {messageStatus === "sent" && <p className="form-success">{p.messageSent}</p>}
                {messageStatus === "error" && <p className="form-error">{p.messageError}</p>}
              </form>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
