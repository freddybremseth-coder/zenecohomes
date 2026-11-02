import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { Footer } from "@/components/Footer";
import { InformationMeetingSignup } from "@/components/InformationMeetingSignup";
import { homeLanguageLinks } from "@/lib/i18n";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Digitale informasjonsmøter om bolig i Spania | Zen Eco Homes",
  description: "Delta på gratis digitalt informasjonsmøte om boligkjøp på Costa Blanca. Se kommende møter tirsdag kveld og torsdag formiddag.",
  alternates: { canonical: "/informasjonsmøte" },
};

function upcomingMeetings() {
  const now = new Date();
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat("en-GB", { timeZone: "Europe/Madrid", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", hourCycle: "h23" })
      .formatToParts(now).filter(p => p.type !== "literal").map(p => [p.type, Number(p.value)])
  );
  const start = new Date(Date.UTC(parts.year, parts.month - 1, parts.day, 12));
  const entries: { id: string; label: string; time: string }[] = [];
  for (let offset = 0; offset < 35 && entries.length < 8; offset++) {
    const date = new Date(start.getTime() + offset * 86400000);
    const weekday = date.getUTCDay();
    if (weekday !== 2 && weekday !== 4) continue;
    const hour = weekday === 2 ? 20 : 11;
    if (offset === 0 && parts.hour >= hour) continue;
    const label = new Intl.DateTimeFormat("nb-NO", { weekday: "long", day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(date);
    entries.push({ id: date.toISOString().slice(0, 10) + (weekday === 2 ? "T20" : "T11"), label, time: weekday === 2 ? "20.00–21.00" : "11.00–12.00" });
  }
  return entries;
}

export default function InformationMeetingPage() {
  const meetings = upcomingMeetings();
  return (
    <main className="info-meetings-page">
      <SiteHeader locale="no" languageLinks={homeLanguageLinks("no")} />
      <section className="page-hero compact-hero">
        <p className="eyebrow">Gratis · Digitalt via Google Meet</p>
        <h1>Digitalt informasjonsmøte om boligkjøp i Spania</h1>
        <p>Interessen for bolig i Spania er stor. Derfor tilbyr vi faste digitale informasjonsmøter hvor du kan bli bedre kjent med Costa Blanca, boligmarkedet og veien til et trygt boligkjøp.</p>
      </section>
      <section className="section" style={{ maxWidth: 1040, margin: "0 auto" }}>
        <p className="eyebrow">Dette snakker vi om</p>
        <h2>Få svar før du begynner boligjakten</h2>
        <p>Våre norske boligrådgivere deler erfaringer om områder og prisnivå på Costa Blanca, valg av bolig, kjøpsprosessen, omkostninger og vanlige spørsmål fra boligkjøpere. Du kan lytte og stille spørsmål – helt uforpliktende.</p>
        <p><strong>Alle møtene er digitale.</strong> Du kan delta hjemmefra via Google Meet. Møtelenken sendes etter at påmeldingen er bekreftet.</p>
      </section>
      <section className="section" id="pamelding" style={{ maxWidth: 1040, margin: "0 auto" }}>
        <p className="eyebrow">Faste møtetider · Spansk tid</p>
        <h2>Kommende informasjonsmøter</h2>
        <p>Vi holder digitale møter tirsdager kl. 20.00–21.00 og torsdager kl. 11.00–12.00.</p>
        <InformationMeetingSignup meetings={meetings} />
      </section>
      <section className="contact-section">
        <div>
          <h2>Foretrekker du en kort og uforpliktende boligprat?</h2>
          <p>Ønsker du en samtale på tomannshånd, kan vi ringe deg for en uforpliktende boligprat.</p>
        </div>
        <Link className="contact-button" href="/booking">Book boligprat</Link>
      </section>
      <Footer showCta={false} />
    </main>
  );
}
