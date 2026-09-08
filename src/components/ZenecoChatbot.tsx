"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { ArrowRight, MessageCircle, Send, Sparkles, X } from "lucide-react";

type Locale = "no" | "en" | "de" | "es";
type Stage = "chat" | "name" | "phone" | "email" | "done";
type ChatMessage = { role: "assistant" | "user"; text: string };
type BuyerProfile = {
  goal?: string;
  area?: string;
  budget?: string;
  propertyType?: string;
  bedrooms?: string;
  timeline?: string;
  priorities: string[];
};

type LeadInfo = {
  name: string;
  phone: string;
  email?: string;
};

const UI: Record<Locale, {
  title: string;
  subtitle: string;
  welcome: string;
  placeholder: string;
  quick: Array<{ label: string; text: string }>;
  handoff: string;
  nameAsk: string;
  phoneAsk: (name: string) => string;
  emailAsk: string;
  phoneOnly: string;
  emailPlaceholder: string;
  done: string;
  whatsapp: string;
  keepChatting: string;
  close: string;
  send: string;
}> = {
  no: {
    title: "Zen Eco rådgiver",
    subtitle: "Spør først · kontakt senere",
    welcome: "Hei! Du trenger ikke fylle ut noe. Fortell meg hva du vurderer i Spania, så hjelper jeg deg å sortere område, boligtype og neste steg.",
    placeholder: "Skriv fritt – f.eks. «3 soverom nær sjøen, maks 550 000»",
    quick: [
      { label: "Finn riktig område", text: "Jeg er usikker på hvilket område som passer best" },
      { label: "Moderne nybygg", text: "Jeg vil se på moderne nybygg" },
      { label: "Tomt + bygge", text: "Jeg vurderer tomt og å bygge i innlandet" },
      { label: "Hva koster det totalt?", text: "Hva bør jeg beregne i totale kjøpskostnader?" },
    ],
    handoff: "La Freddy følge opp dette",
    nameAsk: "Klart. Først: hva heter du?",
    phoneAsk: (name) => `Takk, ${name}. Hvilket telefonnummer er best å nå deg på?`,
    emailAsk: "Fint. Vil du også legge til e-post for boliglenker og skriftlig oppfølging? Det er valgfritt.",
    phoneOnly: "Bare telefon",
    emailPlaceholder: "E-post (valgfritt)",
    done: "Da er behovet ditt oppsummert. Du kan sende det direkte til Freddy på WhatsApp, eller fortsette å spørre meg her.",
    whatsapp: "Send sammendrag til Freddy",
    keepChatting: "Fortsett å spørre",
    close: "Lukk chat",
    send: "Send",
  },
  en: {
    title: "Zen Eco advisor",
    subtitle: "Advice first · contact later",
    welcome: "Hi! No form needed. Tell me what you are considering in Spain and I’ll help you narrow down area, property type and next step.",
    placeholder: "Write freely – e.g. “3 bedrooms near the sea, max €550,000”",
    quick: [
      { label: "Choose an area", text: "I am unsure which area suits me best" },
      { label: "Modern new builds", text: "I want to look at modern new builds" },
      { label: "Plot + build", text: "I am considering a plot and building inland" },
      { label: "Total purchase cost", text: "What should I budget for in total purchase costs?" },
    ],
    handoff: "Ask Freddy to follow up",
    nameAsk: "Of course. First, what is your name?",
    phoneAsk: (name) => `Thanks, ${name}. What phone number is best for reaching you?`,
    emailAsk: "Would you also like to add an email for property links and written follow-up? It is optional.",
    phoneOnly: "Phone only",
    emailPlaceholder: "Email (optional)",
    done: "Your requirements are summarized. You can send them directly to Freddy on WhatsApp or keep asking me questions here.",
    whatsapp: "Send summary to Freddy",
    keepChatting: "Keep chatting",
    close: "Close chat",
    send: "Send",
  },
  de: {
    title: "Zen Eco Berater",
    subtitle: "Beratung zuerst · Kontakt später",
    welcome: "Hallo! Kein Formular nötig. Erzählen Sie mir, was Sie in Spanien suchen, dann helfe ich bei Region, Immobilientyp und nächstem Schritt.",
    placeholder: "Frei schreiben – z. B. „3 Schlafzimmer, Meeresnähe, max. 550.000 €“",
    quick: [
      { label: "Region wählen", text: "Ich bin unsicher, welche Region am besten passt" },
      { label: "Moderner Neubau", text: "Ich interessiere mich für moderne Neubauten" },
      { label: "Grundstück + Bau", text: "Ich erwäge ein Grundstück und einen Neubau im Inland" },
      { label: "Gesamtkosten", text: "Mit welchen Gesamtkosten muss ich beim Kauf rechnen?" },
    ],
    handoff: "Freddy soll mich kontaktieren",
    nameAsk: "Gerne. Wie heißen Sie?",
    phoneAsk: (name) => `Danke, ${name}. Unter welcher Telefonnummer sind Sie am besten erreichbar?`,
    emailAsk: "Möchten Sie zusätzlich eine E-Mail für Immobilienlinks und schriftliche Informationen angeben? Optional.",
    phoneOnly: "Nur Telefon",
    emailPlaceholder: "E-Mail (optional)",
    done: "Ihre Wünsche sind zusammengefasst. Sie können sie direkt per WhatsApp an Freddy senden oder hier weiterfragen.",
    whatsapp: "Zusammenfassung an Freddy senden",
    keepChatting: "Weiter fragen",
    close: "Chat schließen",
    send: "Senden",
  },
  es: {
    title: "Asesor Zen Eco",
    subtitle: "Primero asesoramiento · contacto después",
    welcome: "¡Hola! No necesitas rellenar ningún formulario. Cuéntame qué estás valorando en España y te ayudo a ordenar zona, tipo de vivienda y siguiente paso.",
    placeholder: "Escribe libremente – p. ej. «3 dormitorios cerca del mar, máximo 550.000 €»",
    quick: [
      { label: "Elegir zona", text: "No sé qué zona me encaja mejor" },
      { label: "Obra nueva moderna", text: "Quiero ver obra nueva moderna" },
      { label: "Parcela + construir", text: "Estoy valorando parcela y construir en el interior" },
      { label: "Coste total", text: "¿Qué gastos totales debo calcular para la compra?" },
    ],
    handoff: "Que Freddy me contacte",
    nameAsk: "Perfecto. Primero, ¿cómo te llamas?",
    phoneAsk: (name) => `Gracias, ${name}. ¿Cuál es el mejor teléfono para contactarte?`,
    emailAsk: "¿Quieres añadir también un email para recibir enlaces de viviendas e información por escrito? Es opcional.",
    phoneOnly: "Solo teléfono",
    emailPlaceholder: "Email (opcional)",
    done: "He resumido lo que buscas. Puedes enviárselo directamente a Freddy por WhatsApp o seguir preguntándome aquí.",
    whatsapp: "Enviar resumen a Freddy",
    keepChatting: "Seguir preguntando",
    close: "Cerrar chat",
    send: "Enviar",
  },
};

function detectLocale(pathname: string): Locale {
  if (pathname.startsWith("/en/" ) || pathname === "/en") return "en";
  if (pathname.startsWith("/de/" ) || pathname === "/de") return "de";
  if (pathname.startsWith("/es/" ) || pathname === "/es") return "es";
  return "no";
}

function normalizeNumber(value: string) {
  return value.replace(/[^\d+]/g, "").slice(0, 24);
}

function parseProfile(text: string, profile: BuyerProfile): BuyerProfile {
  const lower = text.toLowerCase();
  const next: BuyerProfile = { ...profile, priorities: [...profile.priorities] };

  if (/ferie|holiday|vacation|urlaub|vacaciones/.test(lower)) next.goal = "Feriebolig";
  if (/flytt|fast bolig|permanent|relocat|umzug|mudanz/.test(lower)) next.goal = "Flytting / fast bolig";
  if (/invest|utleie|rental|vermiet|alquiler/.test(lower)) next.goal = "Investering / utleie";
  if (/pensjon|retire|ruhestand|jubil/.test(lower)) next.goal = "Pensjon / lengre opphold";
  if (/tomt|plot|land|grundstück|parcela|bygge|build|bauen|constru/.test(lower)) next.goal = next.goal || "Tomt / bygging";

  const areas: Array<[RegExp, string]> = [
    [/altea|albir|finestrat|polop|calpe|moraira|denia|jávea|javea|benidorm|villajoyosa/, "Costa Blanca Nord"],
    [/torrevieja|orihuela|guardamar|quesada|rojales|pilar de la horadada/, "Costa Blanca Sør"],
    [/pinoso|aspe|biar|sax|villena|monóvar|monovar|innland|inland|interior/, "Innlandet"],
    [/costa cálida|costa calida|murcia|los alcázares|los alcazares|san javier/, "Costa Cálida"],
  ];
  for (const [regex, label] of areas) if (regex.test(lower)) next.area = label;

  if (/villa|chalet/.test(lower)) next.propertyType = "Villa";
  else if (/leilighet|apartment|wohnung|piso|apartamento/.test(lower)) next.propertyType = "Leilighet";
  else if (/penthouse|ático|atico/.test(lower)) next.propertyType = "Penthouse";
  else if (/rekkehus|townhouse|reihenhaus|adosado/.test(lower)) next.propertyType = "Rekkehus";
  else if (/nybygg|new build|neubau|obra nueva/.test(lower)) next.propertyType = "Nybygg";
  else if (/tomt|plot|grundstück|parcela/.test(lower)) next.propertyType = "Tomt";

  const budgetMatch = text.match(/(?:€|eur|euro|maks|max|under|budget|budsjett|hasta|máx|maximo|maximal)?\s*([1-9][\d\s.,]{2,})\s*(k|000)?/i);
  if (budgetMatch) {
    let digits = budgetMatch[1].replace(/[^\d]/g, "");
    let amount = Number(digits);
    if (budgetMatch[2]?.toLowerCase() === "k" || (amount > 0 && amount < 5000)) amount *= 1000;
    if (amount >= 50000) next.budget = `€${amount.toLocaleString("de-DE")}`;
  }

  const bedrooms = text.match(/(?:^|\s)([1-6])\s*(?:soverom|bed|bedroom|schlafzimmer|dormitorio)/i)
    || text.match(/(?:soverom|bedrooms?|schlafzimmer|dormitorios?)\s*[:x-]?\s*([1-6])/i);
  if (bedrooms) next.bedrooms = bedrooms[1];

  if (/nå|snart|0-3|3 mnd|3 måned|this year|i år|dieses jahr|este año/.test(lower)) next.timeline = "Nær fremtid";
  if (/6-12|neste år|next year|nächstes jahr|próximo año/.test(lower)) next.timeline = "6–12 måneder";

  const priorities: Array<[RegExp, string]> = [
    [/sjø|strand|sea|beach|meer|playa/, "nær sjø/strand"],
    [/utsikt|view|aussicht|vista/, "utsikt"],
    [/basseng|pool|piscina/, "basseng"],
    [/golf/, "golf"],
    [/rolig|quiet|ruhe|tranquil/, "rolig område"],
    [/gåavstand|walking|walkable|fuß|pie/, "gåavstand til service"],
    [/sol|sun|sonne/, "gode solforhold"],
  ];
  for (const [regex, label] of priorities) {
    if (regex.test(lower) && !next.priorities.includes(label)) next.priorities.push(label);
  }
  return next;
}

function profileSummary(profile: BuyerProfile, fallback = "") {
  return [
    profile.goal ? `Mål: ${profile.goal}` : "",
    profile.area ? `Område: ${profile.area}` : "",
    profile.propertyType ? `Boligtype: ${profile.propertyType}` : "",
    profile.budget ? `Budsjett: ${profile.budget}` : "",
    profile.bedrooms ? `Soverom: ${profile.bedrooms}` : "",
    profile.timeline ? `Tidslinje: ${profile.timeline}` : "",
    profile.priorities.length ? `Prioriterer: ${profile.priorities.join(", ")}` : "",
    fallback ? `Samtale: ${fallback}` : "",
  ].filter(Boolean).join("\n");
}

function advisorReply(locale: Locale, text: string, profile: BuyerProfile, userTurns: number) {
  const lower = text.toLowerCase();

  if (locale === "no") {
    if (/kost|skatt|avgift|total|13/.test(lower)) {
      return "Ved kjøp i Spania bør vi skille annonsepris fra totalbudsjett. Som arbeidsmargin er det fornuftig å legge inn kjøpskostnader i tillegg, men nøyaktig nivå avhenger av nybygg/brukt, region og finansiering. Er dette nybygg eller er du åpen for begge deler?";
    }
    if (/tomt|bygge|pinoso|aspe|innland/.test(lower)) {
      return "For tomt og bygging ville jeg først avklart budsjett for både tomt og hus, deretter regulering, adkomst, vann, strøm og grunnforhold. Moderne modeller fra Aspe og Pinoso kan også være relevante andre steder i innlandet når tomten tillater det. Har du allerede en tomt, eller starter du fra null?";
    }
    if (/område|hvor|nord|sør|innland|calida/.test(lower) && !profile.area) {
      return "Jeg ville valgt område ut fra hvordan boligen skal brukes: Nord passer ofte den som prioriterer landskap, helårsmiljø og et høyere kvalitetssegment; Sør har større utvalg og mye strand/golf; innlandet gir mer plass og byggefrihet. Hva er viktigst for deg: sjø, byliv eller plass/ro?";
    }
    if (profile.area && profile.budget && profile.propertyType) {
      return `Nå har jeg et ganske godt bilde: ${profile.propertyType.toLowerCase()} i ${profile.area}, rundt ${profile.budget}${profile.bedrooms ? ` og ${profile.bedrooms} soverom` : ""}. Neste nyttige steg er å skille mellom «må ha» og «fint å ha». Hva er den ene tingen du ikke vil kompromisse på?`;
    }
    if (userTurns === 1) {
      return "Bra start. Jeg bruker svarene dine til å snevre inn valgene i stedet for å vise deg hundre tilfeldige boliger. Hva er omtrent øvre totalbudsjett?";
    }
    if (!profile.area) return "Det hjelper. Neste jeg ville avklart er område, fordi samme budsjett gir svært forskjellige boliger på Nord, Sør og i innlandet. Har du et område i tankene, eller skal jeg hjelpe deg å sammenligne?";
    if (!profile.budget) return "Da har vi retningen. Hva er omtrent øvre totalbudsjett? Et intervall holder — du trenger ikke være helt presis.";
    return "Det er nyttig. Jeg ville nå sammenlignet noen få reelle alternativer mot ønskene dine, fremfor å utvide søket mer. Fortell gjerne én ting til som er viktigst — eller la Freddy følge opp med konkrete forslag.";
  }

  if (locale === "en") {
    if (/plot|build|inland|pinoso|aspe/.test(lower)) return "For a plot-and-build route, I would first separate the land budget from the house budget, then verify planning rules, access, water, electricity and ground conditions. Modern models around Aspe and Pinoso can also be relevant elsewhere inland where the plot allows it. Do you already own a plot?";
    if (!profile.budget) return "That helps. What is your approximate upper total budget? A range is enough.";
    if (!profile.area) return "The next useful decision is location, because the same budget buys very different homes on the North, South and inland. Do you already have an area in mind?";
    return "Good — I now have enough to narrow this down meaningfully. What is the one feature you would not compromise on?";
  }
  if (locale === "de") {
    if (/grundstück|bauen|inland|pinoso|aspe/.test(lower)) return "Bei Grundstück und Neubau würde ich zuerst Grundstücks- und Hausbudget trennen und dann Baurecht, Zufahrt, Wasser, Strom und Boden prüfen. Moderne Modelle aus Aspe und Pinoso können auch in anderen Inland-Lagen relevant sein, wenn das Grundstück passt. Haben Sie bereits ein Grundstück?";
    if (!profile.budget) return "Das hilft. Wie hoch ist ungefähr Ihr maximales Gesamtbudget? Eine Spanne reicht völlig.";
    if (!profile.area) return "Als Nächstes würde ich die Region eingrenzen, denn dasselbe Budget führt im Norden, Süden und Inland zu sehr unterschiedlichen Ergebnissen. Haben Sie schon eine Region im Kopf?";
    return "Gut — damit lässt sich die Suche bereits sinnvoll eingrenzen. Welche Eigenschaft ist für Sie nicht verhandelbar?";
  }
  if (/parcela|constru|interior|pinoso|aspe/.test(lower)) return "Para parcela y construcción separaría primero el presupuesto de parcela y vivienda, y después comprobaría normativa, acceso, agua, electricidad y terreno. Los modelos modernos de Aspe y Pinoso también pueden ser referencias válidas para otras zonas del interior si la parcela lo permite. ¿Ya tienes parcela?";
  if (!profile.budget) return "Perfecto. ¿Cuál sería aproximadamente tu presupuesto total máximo? Un intervalo es suficiente.";
  if (!profile.area) return "El siguiente paso útil es elegir zona, porque con el mismo presupuesto cambia mucho lo que puedes comprar en Norte, Sur o interior. ¿Tienes alguna zona en mente?";
  return "Bien — ya puedo acotar bastante mejor la búsqueda. ¿Cuál es la característica en la que no quieres hacer concesiones?";
}

export function ZenecoChatbot() {
  const [open, setOpen] = useState(false);
  const [locale, setLocale] = useState<Locale>("no");
  const [stage, setStage] = useState<Stage>("chat");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [profile, setProfile] = useState<BuyerProfile>({ priorities: [] });
  const [lead, setLead] = useState<LeadInfo>({ name: "", phone: "" });
  const [userTurns, setUserTurns] = useState(0);
  const [pageContext, setPageContext] = useState("");
  const [sendingLead, setSendingLead] = useState(false);
  const [leadSaved, setLeadSaved] = useState(false);

  const c = UI[locale];

  useEffect(() => {
    const nextLocale = detectLocale(window.location.pathname);
    setLocale(nextLocale);
    setPageContext(`${document.title} · ${window.location.href}`);
    setMessages([{ role: "assistant", text: UI[nextLocale].welcome }]);
  }, []);

  const conversationText = useMemo(
    () => messages.filter((m) => m.role === "user").map((m) => m.text).join(" | "),
    [messages],
  );

  const summary = useMemo(
    () => profileSummary(profile, conversationText),
    [profile, conversationText],
  );

  const whatsappUrl = useMemo(() => {
    const text = [
      `Hei Freddy, jeg har brukt Zen Eco-rådgiveren på zenecohomes.com.`,
      lead.name ? `Navn: ${lead.name}` : "",
      lead.phone ? `Telefon: ${lead.phone}` : "",
      summary,
      pageContext ? `Side: ${pageContext}` : "",
    ].filter(Boolean).join("\n\n");
    return `https://wa.me/4796009965?text=${encodeURIComponent(text)}`;
  }, [lead.name, lead.phone, pageContext, summary]);

  function appendUser(text: string) {
    const nextProfile = parseProfile(text, profile);
    const nextTurns = userTurns + 1;
    setProfile(nextProfile);
    setUserTurns(nextTurns);
    setMessages((prev) => [
      ...prev,
      { role: "user", text },
      { role: "assistant", text: advisorReply(locale, text, nextProfile, nextTurns) },
    ]);
  }

  function submitChat(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = input.trim();
    if (!text) return;
    setInput("");

    if (stage === "name") {
      setLead((prev) => ({ ...prev, name: text }));
      setMessages((prev) => [...prev, { role: "user", text }, { role: "assistant", text: c.phoneAsk(text) }]);
      setStage("phone");
      return;
    }

    if (stage === "phone") {
      const phone = normalizeNumber(text);
      if (phone.replace(/\D/g, "").length < 6) {
        setMessages((prev) => [...prev, { role: "user", text }, { role: "assistant", text: locale === "no" ? "Det nummeret ser litt kort ut. Skriv gjerne med landskode, for eksempel +47 eller +34." : "That number looks a little short. Please include the country code if possible." }]);
        return;
      }
      setLead((prev) => ({ ...prev, phone }));
      setMessages((prev) => [...prev, { role: "user", text: phone }, { role: "assistant", text: c.emailAsk }]);
      setStage("email");
      return;
    }

    if (stage === "email") {
      if (!/^\S+@\S+\.\S+$/.test(text)) {
        setMessages((prev) => [...prev, { role: "user", text }, { role: "assistant", text: locale === "no" ? "Skriv en gyldig e-post, eller velg «Bare telefon»." : "Please enter a valid email, or choose phone only." }]);
        return;
      }
      setLead((prev) => ({ ...prev, email: text }));
      void saveLead(text);
      return;
    }

    appendUser(text);
  }

  async function saveLead(email: string) {
    setSendingLead(true);
    const nextLead = { ...lead, email };
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: nextLead.name,
          email,
          phone: nextLead.phone,
          preferred_area: profile.area,
          budget: profile.budget,
          property_type: profile.propertyType,
          bedrooms: profile.bedrooms,
          timeline: profile.timeline,
          purchase_goal: profile.goal,
          next_step: "Personlig oppfølging fra Freddy",
          source: "zenecohomes-chatbot-conversation",
          request_type: "Chatbot – kvalifisert samtale",
          page_url: typeof window !== "undefined" ? window.location.href : undefined,
          message: `${summary}\n\nSide: ${pageContext}`,
        }),
      });
      if (!response.ok) throw new Error("Lead save failed");
      setLeadSaved(true);
      setMessages((prev) => [...prev, { role: "user", text: email }, { role: "assistant", text: c.done }]);
      setStage("done");
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", text: locale === "no" ? "Jeg fikk ikke lagret e-posten automatisk akkurat nå. Du kan fortsatt sende hele sammendraget direkte til Freddy på WhatsApp." : "I could not save the email automatically right now. You can still send the full summary directly to Freddy on WhatsApp." }]);
      setStage("done");
    } finally {
      setSendingLead(false);
    }
  }

  function choosePhoneOnly() {
    setMessages((prev) => [...prev, { role: "user", text: c.phoneOnly }, { role: "assistant", text: c.done }]);
    setStage("done");
  }

  function startHandoff() {
    setStage("name");
    setMessages((prev) => [...prev, { role: "assistant", text: c.nameAsk }]);
  }

  function keepChatting() {
    setStage("chat");
    setMessages((prev) => [...prev, { role: "assistant", text: locale === "no" ? "Selvsagt. Hva vil du se nærmere på?" : locale === "es" ? "Claro. ¿Qué quieres analizar ahora?" : locale === "de" ? "Natürlich. Was möchten Sie als Nächstes genauer ansehen?" : "Of course. What would you like to look at next?" }]);
  }

  const showHandoff = stage === "chat" && userTurns >= 2;

  return (
    <div className="chatbot-shell chatbot-2027">
      {open && (
        <section className="chatbot-panel" aria-label={c.title}>
          <header className="chatbot-header-2027">
            <div className="chatbot-brandmark" aria-hidden="true">ZE</div>
            <div>
              <strong>{c.title}</strong>
              <span>{c.subtitle}</span>
            </div>
            <button type="button" onClick={() => setOpen(false)} aria-label={c.close}>
              <X size={18} />
            </button>
          </header>

          <div className="chatbot-messages" aria-live="polite">
            {messages.map((message, index) => (
              <p className={message.role} key={`${message.role}-${index}`}>{message.text}</p>
            ))}
          </div>

          {stage === "chat" && userTurns === 0 && (
            <div className="chatbot-quick-actions">
              {c.quick.map((item) => (
                <button key={item.label} type="button" onClick={() => appendUser(item.text)}>{item.label}</button>
              ))}
            </div>
          )}

          {showHandoff && (
            <button className="chatbot-handoff" type="button" onClick={startHandoff}>
              <Sparkles size={16} /> {c.handoff} <ArrowRight size={16} />
            </button>
          )}

          {stage === "email" && (
            <button className="chatbot-phone-only" type="button" onClick={choosePhoneOnly}>{c.phoneOnly}</button>
          )}

          {stage === "done" && (
            <div className="chatbot-complete-actions">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={16} /> {c.whatsapp}
              </a>
              <button type="button" onClick={keepChatting}>{c.keepChatting}</button>
              {leadSaved && <small>✓ CRM</small>}
            </div>
          )}

          {stage !== "done" && (
            <form className="chatbot-input chatbot-input-2027" onSubmit={submitChat}>
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder={stage === "email" ? c.emailPlaceholder : stage === "name" ? (locale === "no" ? "Navnet ditt" : "Your name") : stage === "phone" ? (locale === "no" ? "Telefonnummer" : "Phone number") : c.placeholder}
                autoComplete={stage === "email" ? "email" : stage === "name" ? "name" : stage === "phone" ? "tel" : "off"}
                inputMode={stage === "phone" ? "tel" : stage === "email" ? "email" : "text"}
                disabled={sendingLead}
              />
              <button type="submit" aria-label={c.send} disabled={sendingLead}><Send size={16} /></button>
            </form>
          )}
          <p className="chatbot-privacy-note">
            {locale === "no" ? "Du kan bruke rådgiveren uten å oppgi kontaktinfo." : locale === "es" ? "Puedes usar el asesor sin dejar datos de contacto." : locale === "de" ? "Sie können den Berater ohne Kontaktdaten nutzen." : "You can use the advisor without sharing contact details."}
          </p>
        </section>
      )}
      <button className="chatbot-toggle" type="button" onClick={() => setOpen((value) => !value)} aria-label={c.title}>
        <MessageCircle size={22} />
        <span>{locale === "no" ? "Spør rådgiveren" : locale === "es" ? "Pregunta al asesor" : locale === "de" ? "Berater fragen" : "Ask the advisor"}</span>
      </button>
    </div>
  );
}
