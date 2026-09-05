"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import type { Locale } from "@/lib/i18n";

type ContactFormProps = {
  source?: string;
  propertyRef?: string;
  propertyTitle?: string;
  requestType?: string;
  locale?: Locale;
  /** "full" = alle felt (varm norsk trafikk). "compact" = 5 felt (kald DE/EN-trafikk). */
  variant?: "full" | "compact";
};

type Strings = {
  name: string;
  namePh: string;
  phone: string;
  email: string;
  emailPh: string;
  area: string;
  areaOptions: string[];
  budget: string;
  budgetPh: string;
  propertyType: string;
  propertyTypeOptions: string[];
  bedrooms: string;
  timeline: string;
  timelineOptions: string[];
  purchaseGoal: string;
  purchaseGoalOptions: string[];
  financing: string;
  financingOptions: string[];
  spainExp: string;
  spainExpOptions: string[];
  nextStep: string;
  nextStepOptions: string[];
  message: string;
  messagePh: string;
  messagePhProp: (title: string) => string;
  submit: string;
  sending: string;
  success: string;
  error: string;
};

const T: Record<Locale, Strings> = {
  no: {
    name: "Navn",
    namePh: "Ditt navn",
    phone: "Telefon",
    email: "E-post",
    emailPh: "din@epost.no",
    area: "Område",
    areaOptions: ["Costa Blanca Nord", "Costa Blanca Sør", "Costa Calida", "Åpen for forslag"],
    budget: "Budsjett",
    budgetPh: "f.eks 350 000",
    propertyType: "Boligtype",
    propertyTypeOptions: ["Nybygg", "Villa", "Leilighet", "Rekkehus"],
    bedrooms: "Min. soverom",
    timeline: "Tidslinje",
    timelineOptions: ["Klar nå", "Innen 3 mnd", "6-12 mnd", "Planlegger fremtidig pensjon"],
    purchaseGoal: "Bruk av boligen",
    purchaseGoalOptions: ["Feriebolig", "Pensjon / lengre opphold", "Investering og utleie", "Flytting til Spania", "Tomt og bygging"],
    financing: "Finansiering",
    financingOptions: ["Finansiering klar", "Trenger låneavklaring", "Skal selge bolig først", "Ikke avklart ennå"],
    spainExp: "Spania-erfaring",
    spainExpOptions: ["Har vært i området før", "Har kjøpt i Spania før", "Første gang vi vurderer Spania", "Usikker på område"],
    nextStep: "Ønsket neste steg",
    nextStepOptions: ["Få shortlist", "Digital visning", "Planlegge Spania-tur", "Avklaringssamtale"],
    message: "Hva ser du etter?",
    messagePh: "Fortell kort om ønsker, område, livsstil og behov.",
    messagePhProp: (title) => `Jeg ønsker komplett tilbud/prospekt for ${title}.`,
    submit: "Send forespørsel",
    sending: "Sender...",
    success: "Takk. Vi har mottatt forespørselen din.",
    error: "Noe gikk galt. Prøv igjen eller send e-post direkte.",
  },
  de: {
    name: "Name",
    namePh: "Ihr Name",
    phone: "Telefon",
    email: "E-Mail",
    emailPh: "ihre@email.de",
    area: "Region",
    areaOptions: ["Costa Blanca Nord", "Costa Blanca Süd", "Costa Cálida", "Offen für Vorschläge"],
    budget: "Budget",
    budgetPh: "z. B. 350.000",
    propertyType: "Immobilientyp",
    propertyTypeOptions: ["Neubau", "Villa", "Wohnung", "Reihenhaus"],
    bedrooms: "Min. Schlafzimmer",
    timeline: "Zeithorizont",
    timelineOptions: ["Sofort bereit", "Innerhalb 3 Monaten", "6–12 Monate", "Plane für die Zukunft"],
    purchaseGoal: "Nutzung der Immobilie",
    purchaseGoalOptions: ["Ferienimmobilie", "Ruhestand / längerer Aufenthalt", "Kapitalanlage und Vermietung", "Umzug nach Spanien", "Grundstück und Bau"],
    financing: "Finanzierung",
    financingOptions: ["Finanzierung steht", "Finanzierung zu klären", "Verkaufe zuerst eine Immobilie", "Noch offen"],
    spainExp: "Spanien-Erfahrung",
    spainExpOptions: ["War schon in der Region", "Habe schon in Spanien gekauft", "Erwäge Spanien zum ersten Mal", "Region noch unklar"],
    nextStep: "Gewünschter nächster Schritt",
    nextStepOptions: ["Auswahlliste erhalten", "Digitale Besichtigung", "Spanien-Reise planen", "Klärungsgespräch"],
    message: "Wonach suchen Sie?",
    messagePh: "Beschreiben Sie kurz Wünsche, Region, Lebensstil und Bedarf.",
    messagePhProp: (title) => `Ich möchte ein komplettes Angebot/Exposé für ${title}.`,
    submit: "Anfrage senden",
    sending: "Senden...",
    success: "Danke. Wir haben Ihre Anfrage erhalten.",
    error: "Etwas ist schiefgelaufen. Bitte erneut versuchen oder direkt per E-Mail.",
  },
  en: {
    name: "Name",
    namePh: "Your name",
    phone: "Phone",
    email: "Email",
    emailPh: "you@email.com",
    area: "Area",
    areaOptions: ["Costa Blanca North", "Costa Blanca South", "Costa Cálida", "Open to suggestions"],
    budget: "Budget",
    budgetPh: "e.g. 350,000",
    propertyType: "Property type",
    propertyTypeOptions: ["New build", "Villa", "Apartment", "Townhouse"],
    bedrooms: "Min. bedrooms",
    timeline: "Timeline",
    timelineOptions: ["Ready now", "Within 3 months", "6–12 months", "Planning for the future"],
    purchaseGoal: "Use of the property",
    purchaseGoalOptions: ["Holiday home", "Retirement / longer stays", "Investment and rental", "Moving to Spain", "Plot and building"],
    financing: "Financing",
    financingOptions: ["Financing ready", "Need mortgage clarification", "Selling a property first", "Not yet decided"],
    spainExp: "Spain experience",
    spainExpOptions: ["Have visited the area", "Have bought in Spain before", "Considering Spain for the first time", "Unsure about the area"],
    nextStep: "Preferred next step",
    nextStepOptions: ["Get a shortlist", "Virtual viewing", "Plan a trip to Spain", "A clarifying call"],
    message: "What are you looking for?",
    messagePh: "Briefly tell us your wishes, area, lifestyle and needs.",
    messagePhProp: (title) => `I would like a full offer/brochure for ${title}.`,
    submit: "Send enquiry",
    sending: "Sending...",
    success: "Thank you. We have received your enquiry.",
    error: "Something went wrong. Please try again or email us directly.",
  },
};

export function ContactForm({
  source,
  propertyRef,
  propertyTitle,
  requestType = "general",
  locale = "no",
  variant = "full",
}: ContactFormProps) {
  const t = T[locale];
  const full = variant === "full";
  const leadSource = source || `zenecohomes-${locale}`;
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...data,
        source: leadSource,
        locale,
        property_ref: propertyRef,
        property_title: propertyTitle,
        request_type: requestType,
      }),
    });

    if (res.ok) {
      setStatus("sent");
      form.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <form className="lead-form" onSubmit={onSubmit}>
      <div className="form-grid">
        <label>
          {t.name}
          <input name="name" required placeholder={t.namePh} />
        </label>
        <label>
          {t.phone}
          <input name="phone" placeholder="+34..." />
        </label>
      </div>
      <label>
        {t.email}
        <input name="email" type="email" required placeholder={t.emailPh} />
      </label>
      {!propertyRef && (
        <div className="form-grid">
          <label>
            {t.area}
            <select name="preferred_area" defaultValue={t.areaOptions[0]}>
              {t.areaOptions.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </label>
          <label>
            {t.budget}
            <input name="budget" placeholder={t.budgetPh} />
          </label>
        </div>
      )}
      {full && (
        <>
          <div className="form-grid">
            <label>
              {t.propertyType}
              <select name="property_type" defaultValue={t.propertyTypeOptions[0]}>
                {t.propertyTypeOptions.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </label>
            <label>
              {t.bedrooms}
              <input name="bedrooms" type="number" min="1" placeholder="2" />
            </label>
          </div>
          <label>
            {t.timeline}
            <select name="timeline" defaultValue={t.timelineOptions[1]}>
              {t.timelineOptions.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </label>
          <div className="form-grid">
            <label>
              {t.purchaseGoal}
              <select name="purchase_goal" defaultValue={t.purchaseGoalOptions[0]}>
                {t.purchaseGoalOptions.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </label>
            <label>
              {t.financing}
              <select name="financing_status" defaultValue={t.financingOptions[3]}>
                {t.financingOptions.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </label>
          </div>
          <div className="form-grid">
            <label>
              {t.spainExp}
              <select name="spain_experience" defaultValue={t.spainExpOptions[0]}>
                {t.spainExpOptions.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </label>
            <label>
              {t.nextStep}
              <select name="next_step" defaultValue={t.nextStepOptions[0]}>
                {t.nextStepOptions.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </label>
          </div>
        </>
      )}
      <label>
        {t.message}
        <textarea
          name="message"
          rows={5}
          placeholder={propertyTitle ? t.messagePhProp(propertyTitle) : t.messagePh}
        />
      </label>
      <button className="submit-button" disabled={status === "sending"}>
        <Send size={18} />
        {status === "sending" ? t.sending : t.submit}
      </button>
      {status === "sent" && <p className="form-success">{t.success}</p>}
      {status === "error" && <p className="form-error">{t.error}</p>}
    </form>
  );
}
