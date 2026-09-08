"use client";

import { useCallback, useEffect, useState } from "react";
import { CalendarClock, CheckCircle2, Loader2, PauseCircle, Route } from "lucide-react";
import { supabase } from "@/lib/supabase-browser";

type JourneyLocale = "no" | "en" | "de" | "es";
type JourneyStage = "NEW" | "CONTACT" | "QUALIFIED" | "MATCHING" | "VIEWING" | "NEGOTIATION" | "RESERVED" | "ON_HOLD" | "WON";
type JourneyStatus = { stage: JourneyStage; progress: number; completed: boolean; paused?: boolean; nextFollowup?: string | null; waitingUntil?: string | null };
type StageCopy = { title: string; description: string; nextStep: string };

const stageCopy: Record<JourneyLocale, Record<JourneyStage, StageCopy>> = {
  no: {
    NEW: { title: "Vi starter med behovene dine", description: "Vi samler informasjon om budsjett, områder og hvordan du ønsker å bruke boligen.", nextStep: "Neste steg er å avklare behovene og rammene for boligjakten." },
    CONTACT: { title: "Vi kartlegger boligønskene dine", description: "Dialogen er i gang, og vi bygger et tydeligere bilde av hva som passer deg.", nextStep: "Vi avklarer de viktigste valgene før vi begynner å snevre inn boligene." },
    QUALIFIED: { title: "Behov og budsjett er avklart", description: "Vi har et godt nok grunnlag til å begynne å finne relevante alternativer.", nextStep: "Neste steg er å velge områder og bygge en kort, relevant boligliste." },
    MATCHING: { title: "Vi finner og vurderer aktuelle boliger", description: "Vi sammenligner boliger mot ønskene dine og sorterer bort alternativer som ikke passer.", nextStep: "Marker gjerne boliger som interessante eller ikke for deg. Det gjør neste utvalg mer presist." },
    VIEWING: { title: "Visninger planlegges eller gjennomføres", description: "Vi konsentrerer oss om de mest aktuelle boligene og forsøker å gjøre visningsdagene effektive.", nextStep: "Neste steg er å vurdere boligene etter visning og avgjøre hvilke som skal undersøkes videre." },
    NEGOTIATION: { title: "En aktuell bolig vurderes nærmere", description: "Pris, vilkår eller andre viktige detaljer avklares før en beslutning.", nextStep: "Neste steg er å få de nødvendige avklaringene før du bestemmer deg for å gå videre." },
    RESERVED: { title: "Boligen er reservert", description: "Prosessen går videre med dokumentasjon, kontroller og avtalte steg frem mot gjennomføring.", nextStep: "Følg dokumentasjonen og milepælene frem mot signering og overtakelse." },
    ON_HOLD: { title: "Boligjakten er satt på pause", description: "Vi har registrert at prosessen skal vente en periode før vi fortsetter.", nextStep: "Vi tar opp tråden igjen når tidspunktet er riktig for deg." },
    WON: { title: "Kjøpsprosessen er gjennomført", description: "Boligkjøpet er registrert som gjennomført. Videre oppfølging kan fortsette etter behov.", nextStep: "Ta kontakt når du trenger praktisk oppfølging, nøkkelhåndtering eller annen hjelp etter kjøpet." },
  },
  en: {
    NEW: { title: "We start with your needs", description: "We collect the key information about budget, areas and how you plan to use the property.", nextStep: "The next step is to clarify the priorities and framework for your search." },
    CONTACT: { title: "We are mapping your property preferences", description: "The dialogue is underway and we are building a clearer picture of what will suit you.", nextStep: "We clarify the main choices before narrowing down the properties." },
    QUALIFIED: { title: "Needs and budget are clarified", description: "We now have enough information to begin identifying relevant options.", nextStep: "The next step is to choose the right areas and build a short, relevant property list." },
    MATCHING: { title: "We are finding and assessing suitable properties", description: "We compare properties with your preferences and remove options that do not fit.", nextStep: "Mark properties as interesting or not for you. This makes the next selection more precise." },
    VIEWING: { title: "Viewings are being planned or carried out", description: "We focus on the strongest options and aim to make viewing days as efficient as possible.", nextStep: "The next step is to assess the properties after viewing and decide which ones deserve further checks." },
    NEGOTIATION: { title: "A property is being assessed in more detail", description: "Price, terms or other important details are being clarified before a decision.", nextStep: "The next step is to obtain the necessary answers before deciding whether to proceed." },
    RESERVED: { title: "The property is reserved", description: "The process now continues with documentation, checks and the agreed steps towards completion.", nextStep: "Follow the documentation and milestones towards signing and handover." },
    ON_HOLD: { title: "The property search is paused", description: "We have registered that the process should wait for a period before continuing.", nextStep: "We will pick up the process again when the timing is right for you." },
    WON: { title: "The purchase process is completed", description: "The property purchase is registered as completed. Further support can continue as needed.", nextStep: "Contact us whenever you need practical follow-up, keyholding or other assistance after the purchase." },
  },
  de: {
    NEW: { title: "Wir beginnen mit Ihren Bedürfnissen", description: "Wir sammeln die wichtigsten Informationen zu Budget, Regionen und geplanter Nutzung der Immobilie.", nextStep: "Als Nächstes klären wir die Prioritäten und den Rahmen Ihrer Immobiliensuche." },
    CONTACT: { title: "Wir konkretisieren Ihre Immobilienwünsche", description: "Der Dialog läuft und wir gewinnen ein klareres Bild davon, was zu Ihnen passt.", nextStep: "Wir klären die wichtigsten Entscheidungen, bevor wir die Auswahl eingrenzen." },
    QUALIFIED: { title: "Bedarf und Budget sind geklärt", description: "Wir haben nun eine gute Grundlage, um passende Optionen zu suchen.", nextStep: "Als Nächstes wählen wir passende Regionen und erstellen eine kurze, relevante Immobilienliste." },
    MATCHING: { title: "Wir suchen und prüfen passende Immobilien", description: "Wir gleichen Objekte mit Ihren Wünschen ab und sortieren unpassende Alternativen aus.", nextStep: "Markieren Sie interessante oder unpassende Immobilien. So wird die nächste Auswahl präziser." },
    VIEWING: { title: "Besichtigungen werden geplant oder durchgeführt", description: "Wir konzentrieren uns auf die besten Optionen und planen Besichtigungstage möglichst effizient.", nextStep: "Danach bewerten wir die Immobilien und entscheiden, welche weiter geprüft werden sollen." },
    NEGOTIATION: { title: "Eine Immobilie wird genauer geprüft", description: "Preis, Bedingungen oder andere wichtige Details werden vor einer Entscheidung geklärt.", nextStep: "Als Nächstes beschaffen wir die notwendigen Antworten, bevor Sie über das weitere Vorgehen entscheiden." },
    RESERVED: { title: "Die Immobilie ist reserviert", description: "Der Prozess geht nun mit Dokumenten, Prüfungen und den vereinbarten Schritten bis zum Abschluss weiter.", nextStep: "Verfolgen Sie Dokumente und Meilensteine bis zur Unterzeichnung und Übergabe." },
    ON_HOLD: { title: "Die Immobiliensuche ist pausiert", description: "Wir haben vermerkt, dass der Prozess vorerst warten soll.", nextStep: "Wir nehmen die Suche wieder auf, wenn der Zeitpunkt für Sie passt." },
    WON: { title: "Der Kaufprozess ist abgeschlossen", description: "Der Immobilienkauf ist als abgeschlossen registriert. Weitere Betreuung ist bei Bedarf möglich.", nextStep: "Kontaktieren Sie uns für praktische Betreuung, Schlüsselservice oder weitere Hilfe nach dem Kauf." },
  },
  es: {
    NEW: { title: "Empezamos por tus necesidades", description: "Recopilamos la información clave sobre presupuesto, zonas y cómo quieres utilizar la vivienda.", nextStep: "El siguiente paso es definir las prioridades y el marco de la búsqueda." },
    CONTACT: { title: "Estamos definiendo tus preferencias", description: "La conversación ya está en marcha y estamos concretando qué tipo de vivienda y zona encajan contigo.", nextStep: "Aclaramos las decisiones principales antes de reducir la selección de viviendas." },
    QUALIFIED: { title: "Necesidades y presupuesto definidos", description: "Ya tenemos una base suficiente para empezar a identificar opciones relevantes.", nextStep: "El siguiente paso es elegir las zonas adecuadas y preparar una selección corta de viviendas." },
    MATCHING: { title: "Estamos buscando y valorando viviendas", description: "Comparamos las viviendas con tus preferencias y descartamos las opciones que no encajan.", nextStep: "Marca las viviendas que te interesan o que no son para ti. Así afinamos la siguiente selección." },
    VIEWING: { title: "Las visitas se están planificando o realizando", description: "Nos centramos en las mejores opciones e intentamos organizar las visitas de la forma más eficiente posible.", nextStep: "Después de las visitas valoramos las viviendas y decidimos cuáles conviene estudiar con más detalle." },
    NEGOTIATION: { title: "Estamos estudiando una vivienda con más detalle", description: "Se están aclarando precio, condiciones u otros puntos importantes antes de tomar una decisión.", nextStep: "El siguiente paso es obtener las respuestas necesarias antes de decidir si quieres continuar." },
    RESERVED: { title: "La vivienda está reservada", description: "El proceso continúa con documentación, comprobaciones y los pasos acordados hasta completar la compra.", nextStep: "Sigue la documentación y los hitos hasta la firma y la entrega de llaves." },
    ON_HOLD: { title: "La búsqueda está en pausa", description: "Hemos registrado que el proceso debe esperar un tiempo antes de continuar.", nextStep: "Retomaremos la búsqueda cuando sea el momento adecuado para ti." },
    WON: { title: "El proceso de compra está completado", description: "La compra está registrada como completada. Podemos seguir ayudándote después de la entrega si lo necesitas.", nextStep: "Contacta con nosotros cuando necesites seguimiento práctico, custodia de llaves u otra ayuda después de la compra." },
  },
};

const ui = {
  no: { eyebrow: "Din kjøpsreise", progress: "Fremdrift", next: "Neste steg", followup: "Planlagt oppfølging", loading: "Henter status for kjøpsreisen…", dateLocale: "nb-NO" },
  en: { eyebrow: "Your buying journey", progress: "Progress", next: "Next step", followup: "Planned follow-up", loading: "Loading your buying journey…", dateLocale: "en-GB" },
  de: { eyebrow: "Ihr Kaufprozess", progress: "Fortschritt", next: "Nächster Schritt", followup: "Geplante Rückmeldung", loading: "Kaufstatus wird geladen…", dateLocale: "de-DE" },
  es: { eyebrow: "Tu proceso de compra", progress: "Progreso", next: "Siguiente paso", followup: "Seguimiento previsto", loading: "Cargando el estado de tu compra…", dateLocale: "es-ES" },
} as const;

function formatDate(value: string | null | undefined, locale: JourneyLocale) {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  return new Intl.DateTimeFormat(ui[locale].dateLocale, { day: "numeric", month: "long", year: "numeric" }).format(date);
}

export function PortalJourneyStatus({ locale = "no" }: { locale?: JourneyLocale }) {
  const [ready, setReady] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<JourneyStatus | null>(null);
  const [error, setError] = useState(false);

  const load = useCallback(async () => {
    if (!supabase) { setReady(true); setSignedIn(false); return; }
    const { data } = await supabase.auth.getSession();
    const token = data.session?.access_token;
    setSignedIn(Boolean(token));
    setReady(true);
    if (!token) { setStatus(null); return; }
    setLoading(true); setError(false);
    try {
      const res = await fetch("/api/portal/journey-status", { headers: { Authorization: `Bearer ${token}` }, cache: "no-store" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus((await res.json()) as JourneyStatus);
    } catch { setError(true); setStatus(null); } finally { setLoading(false); }
  }, []);

  useEffect(() => {
    void load();
    if (!supabase) return;
    const { data } = supabase.auth.onAuthStateChange(() => void load());
    return () => data.subscription.unsubscribe();
  }, [load]);

  if (!ready || !signedIn) return null;
  if (loading) return <article className="portal-panel wide-panel" style={{ marginBottom: 24 }}><p><Loader2 size={16} className="spin" /> {ui[locale].loading}</p></article>;
  if (error || !status || !stageCopy[locale][status.stage]) return null;

  const copy = stageCopy[locale][status.stage];
  const followupDate = formatDate(status.waitingUntil || status.nextFollowup, locale);
  const StatusIcon = status.completed ? CheckCircle2 : status.paused ? PauseCircle : Route;

  return (
    <article className="portal-panel wide-panel" style={{ marginBottom: 24 }}>
      <div className="panel-title"><StatusIcon size={20} /><div><p className="eyebrow" style={{ marginBottom: 4 }}>{ui[locale].eyebrow}</p><h3>{copy.title}</h3></div></div>
      <p>{copy.description}</p>
      <div aria-label={`${ui[locale].progress} ${status.progress}%`} style={{ margin: "18px 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12, marginBottom: 7 }}><small>{ui[locale].progress}</small><strong>{status.progress}%</strong></div>
        <div style={{ height: 9, borderRadius: 999, overflow: "hidden", background: "rgba(16,42,50,.10)" }}><div style={{ width: `${Math.max(0, Math.min(100, status.progress))}%`, height: "100%", background: "currentColor", opacity: 0.75 }} /></div>
      </div>
      <div style={{ borderTop: "1px solid rgba(16,42,50,.12)", paddingTop: 14 }}>
        <strong>{ui[locale].next}</strong><p style={{ marginBottom: followupDate ? 10 : 0 }}>{copy.nextStep}</p>
        {followupDate && <p style={{ display: "flex", gap: 8, alignItems: "center", margin: 0 }}><CalendarClock size={16} /> {ui[locale].followup}: {followupDate}</p>}
      </div>
    </article>
  );
}
