"use client";

import { useState } from "react";
import { BookOpen, Check, Download, Loader2 } from "lucide-react";

const PDF_URL = "/guides/kjoperguide-nybygg-spania-2026.pdf";

const POINTS = [
  "«12–14 %-regelen»: hva et nybygg faktisk koster utover prislappen",
  "Den juridiske sjekklisten: NIE, advokat og hva du må kontrollere",
  "Bankgaranti og byggetillatelse – slik sikres pengene dine",
  "Overtakelse, snagging og 7 røde flagg jeg ser etter",
];

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function GuideDownload() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error" | "invalid">("idle");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setStatus("invalid");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name || "Guide-nedlasting",
          email,
          request_type: "guide-download",
          source: "kjoperguide-pdf",
          message: "Ønsker Kjøperguiden for nybygg i Spania (PDF).",
        }),
      });
      if (res.ok) {
        setStatus("done");
        // Åpne PDF-en i ny fane med det samme.
        window.open(PDF_URL, "_blank", "noopener");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="guide-download" id="kjoperguide">
      <div className="guide-download-inner">
        <div className="guide-download-copy">
          <p className="eyebrow"><BookOpen size={15} /> Gratis kjøperguide</p>
          <h2>Kjøperguiden for nybygg i Spania (2026/2027)</h2>
          <p>
            9 siders praktisk guide på norsk: unngå fellene, forstå de faktiske kostnadene og sikre
            verdiene dine – fra reservasjon til utlevert nøkkel.
          </p>
          <ul className="guide-download-points">
            {POINTS.map((p) => (
              <li key={p}>
                <Check size={16} /> {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="guide-download-form-wrap">
          {status === "done" ? (
            <div className="guide-download-done">
              <Check size={22} />
              <strong>Guiden er på vei!</strong>
              <p>Nedlastingen åpnet i en ny fane. Fikk du den ikke, bruk knappen under.</p>
              <a className="contact-button" href={PDF_URL} target="_blank" rel="noopener noreferrer">
                <Download size={17} /> Last ned guiden
              </a>
            </div>
          ) : (
            <form className="guide-download-form" onSubmit={submit}>
              <label>
                Navn
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ditt navn"
                />
              </label>
              <label>
                E-post
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "invalid" || status === "error") setStatus("idle");
                  }}
                  placeholder="din@epost.no"
                  required
                />
              </label>
              <button className="contact-button" type="submit" disabled={status === "sending"}>
                {status === "sending" ? <Loader2 size={17} className="spin" /> : <Download size={17} />}
                {status === "sending" ? "Sender …" : "Send meg guiden"}
              </button>
              {status === "invalid" && <p className="guide-download-msg error">Skriv inn en gyldig e-postadresse.</p>}
              {status === "error" && <p className="guide-download-msg error">Noe gikk galt. Prøv igjen om litt.</p>}
              <p className="guide-download-privacy">Vi sender kun guiden og relevant informasjon. Meld av når som helst.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
