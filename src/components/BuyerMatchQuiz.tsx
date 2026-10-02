"use client";

import { FormEvent, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Check, Send } from "lucide-react";

type Answers = Record<string, string>;

const steps = [
  {
    key: "dream",
    title: "Hva slags Spania ser du for deg?",
    options: ["Kystliv", "Rolig boligområde", "Innland og mer plass", "Investering / utleie", "Usikker"],
  },
  {
    key: "goal",
    title: "Hva er hovedmålet med boligen?",
    options: ["Feriebolig", "Pensjon / lengre opphold", "Investering og utleie", "Flytting til Spania", "Tomt og bygging"],
  },
  {
    key: "preferred_area",
    title: "Hvilket område vurderer du?",
    options: ["Costa Blanca Nord", "Costa Blanca Sør", "Costa Calida", "Usikker"],
  },
  {
    key: "priority",
    title: "Hva er viktigst for deg?",
    options: ["Trygg kjøpsprosess", "Mest bolig for pengene", "Havutsikt og kvalitet", "Gangavstand til strand", "Rolig livsstil"],
  },
  {
    key: "lifestyle",
    title: "Hvilken livsstil passer best?",
    options: ["Strand og restauranter", "Golf og resort", "Ro, natur og plass", "Helårsby med service"],
  },
  {
    key: "budget",
    title: "Hva er omtrent maksbudsjettet?",
    options: ["300000", "400000", "500000", "750000", "1000000", "1500000"],
    labels: ["€300 000", "€400 000", "€500 000", "€750 000", "€1 000 000", "€1 500 000+"],
  },
  {
    key: "bedrooms",
    title: "Hvor mange soverom trenger du minst?",
    options: ["1", "2", "3", "4"],
    labels: ["1+", "2+", "3+", "4+"],
  },
  {
    key: "airport",
    title: "Hvor viktig er kort vei til flyplass?",
    options: ["Maks 45 min", "Maks 60 min", "Inntil 90 min er ok"],
  },
  {
    key: "rental",
    title: "Er utleie viktig?",
    options: ["Viktig", "Ikke viktig", "Usikker"],
  },
] as const;

const regionKeys: Record<string, string> = {
  "Costa Blanca Nord": "costa-blanca-nord",
  "Costa Blanca Sør": "costa-blanca-sor",
  "Costa Calida": "costa-calida",
};

function lifestyleFilter(value?: string) {
  if (value === "Golf og resort") return "golf";
  if (value === "Strand og restauranter") return "sea";
  return "";
}

function buildMatchHref(data: Answers) {
  const query = new URLSearchParams();
  const region = regionKeys[data.preferred_area || ""];
  const budget = Number(data.budget || 0);
  const bedrooms = Number(data.bedrooms || 0);
  const lifestyle = lifestyleFilter(data.lifestyle);

  if (region) query.set("region", region);
  if (budget > 0) query.set("maxPrice", String(budget));
  if (bedrooms > 0) query.set("bedrooms", String(bedrooms));
  if (lifestyle) query.set("lifestyle", lifestyle);
  query.set("match", "quiz");

  return `/eiendommer?${query.toString()}#boliger`;
}

export function BuyerMatchQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const isContactStep = step === steps.length;
  const progress = Math.round(((step + 1) / (steps.length + 1)) * 100);
  const current = steps[step];

  const summary = useMemo(
    () =>
      [
        answers.preferred_area,
        answers.budget ? `maks €${Number(answers.budget).toLocaleString("nb-NO")}` : "",
        answers.bedrooms ? `${answers.bedrooms}+ soverom` : "",
      ].filter(Boolean).join(" · "),
    [answers],
  );

  function choose(key: string, value: string) {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    window.setTimeout(() => setStep((prev) => Math.min(prev + 1, steps.length)), 120);
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const contact = Object.fromEntries(new FormData(event.currentTarget).entries()) as Answers;
    const data = { ...answers, ...contact };
    const filteredHref = buildMatchHref(data);

    const message = [
      `Boligmatch: ${data.dream || "Ikke valgt"}`,
      `Mål: ${data.goal || "Ikke valgt"}`,
      `Område: ${data.preferred_area || "Usikker"}`,
      `Viktigst: ${data.priority || "Ikke valgt"}`,
      `Livsstil: ${data.lifestyle || "Ikke valgt"}`,
      `Budsjett: ${data.budget || "Ikke oppgitt"}`,
      `Soverom: ${data.bedrooms || "Ikke oppgitt"}`,
      `Flyplass: ${data.airport || "Ikke valgt"}`,
      `Utleie: ${data.rental || "Ikke valgt"}`,
      data.comment ? `Kommentar: ${data.comment}` : "",
    ].filter(Boolean).join("\n");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...data,
        message,
        source: "zenecohomes-buyer-match",
        request_type: "Boligmatch",
      }),
    });

    if (res.ok) {
      window.location.assign(filteredHref);
    } else {
      setStatus("error");
    }
  }

  return (
    <section className="section buyer-match buyer-match-steps" id="boligmatch">
      <div className="section-heading">
        <p className="eyebrow">Boligmatch</p>
        <h2>Finn boliger som passer deg</h2>
        <p>Svar på ett spørsmål om gangen. Til slutt sender du e-postadressen din, så kan vi følge opp med aktuelle boliger.</p>
      </div>

      <div className="quiz-step-card">
        <div className="quiz-progress" aria-label={`Steg ${step + 1} av ${steps.length + 1}`}>
          <span style={{ width: `${progress}%` }} />
        </div>

        {!isContactStep && current ? (
          <>
            <p className="quiz-step-count">Steg {step + 1} av {steps.length + 1}</p>
            <h3>{current.title}</h3>
            <div className="quiz-choice-grid">
              {current.options.map((option, index) => {
                const label = "labels" in current && current.labels ? current.labels[index] : option;
                const selected = answers[current.key] === option;
                return (
                  <button
                    className={selected ? "quiz-choice selected" : "quiz-choice"}
                    key={option}
                    type="button"
                    onClick={() => choose(current.key, option)}
                  >
                    {selected ? <Check size={18} /> : null}
                    <span>{label}</span>
                  </button>
                );
              })}
            </div>
          </>
        ) : (
          <form className="quiz-contact-step" onSubmit={onSubmit}>
            <p className="quiz-step-count">Siste steg</p>
            <h3>Hvor skal vi sende forslagene?</h3>
            {summary ? <p className="quiz-summary">{summary}</p> : null}
            <label>
              E-post
              <input name="email" type="email" required autoComplete="email" placeholder="din@epost.no" />
            </label>
            <label>
              Kommentar
              <textarea
                name="comment"
                rows={4}
                placeholder="Skriv gjerne dato for Spania-tur, spesielle ønsker eller noe vi bør vite."
              />
            </label>
            <button className="submit-button" disabled={status === "sending"} type="submit">
              <Send size={18} />
              {status === "sending" ? "Sender..." : "Send boligmatch"}
            </button>
            {status === "error" ? <p className="form-error">Noe gikk galt. Prøv igjen om litt.</p> : null}
          </form>
        )}

        <div className="quiz-step-actions">
          {step > 0 ? (
            <button type="button" className="text-button" onClick={() => setStep((prev) => Math.max(0, prev - 1))}>
              <ArrowLeft size={17} /> Tilbake
            </button>
          ) : <span />}
          {!isContactStep && answers[current?.key || ""] ? (
            <button type="button" className="text-button" onClick={() => setStep((prev) => Math.min(prev + 1, steps.length))}>
              Neste <ArrowRight size={17} />
            </button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
