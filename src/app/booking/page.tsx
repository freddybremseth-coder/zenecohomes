import type { Metadata } from "next";
import Link from "next/link";
import { CalendarClock } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { BookingTimeRequest } from "@/components/BookingTimeRequest";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { homeLanguageLinks } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Book boligprat om Spania | Råd fra Freddy Bremseth",
  description:
    "Book en uforpliktende boligprat om Spania med Freddy Bremseth. Få råd om område, budsjett, boligsøk, nybygg og neste steg i kjøpsprosessen i dag.",
  alternates: { canonical: "/booking" },
};

export default async function BookingPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const params = await searchParams;
  const infoMeeting = params.type === "infomote";
  return (
    <main className="booking-page">
      <SiteHeader locale="no" languageLinks={homeLanguageLinks("no")} />
      <section className="page-hero compact-hero image-hero">
        <p className="eyebrow"><CalendarClock size={15} /> 15-minutters boligprat</p>
        <h1>Ta en boligprat med oss</h1>
        <p>
          Send oss en kort henvendelse, eller velg ønsket tidspunkt for en uforpliktende boligprat.
        </p>
      </section>

      <section className="section booking-layout">
        <div>
          <p className="eyebrow">En uforpliktende boligprat</p>
          <h2>Hva kan en første samtale handle om?</h2>
          <p className="booking-lead">
            Vi kan snakke kort om hvilke områder som passer deg, budsjett og boligtype,
            kjøpsprosessen eller hvordan en visningstur kan planlegges.
            Du trenger ikke ha bestemt deg for en bolig på forhånd.
          </p>
        </div>
        <aside className="booking-form-panel" id="foresporsel">
          <h2>{infoMeeting ? "Meld interesse for infomøte" : "Ta kontakt med oss"}</h2>
          {infoMeeting ? (
            <ContactForm source="zenecohomes-infomote" requestType="infomote" variant="simple" />
          ) : (
            <BookingTimeRequest />
          )}
        </aside>
      </section>
      <section className="contact-section booking-info-meeting">
        <div>
          <p className="eyebrow">Digitalt infomøte</p>
          <h2>Vil du få beskjed om neste infomøte om boligkjøp i Spania?</h2>
          <p>
            Vi publiserer dato når neste møte er satt. Meld interesse nå, så bruker vi samme enkle kontaktskjema uten å opprette et ekstra skjema på siden.
          </p>
        </div>
        <Link className="contact-button" href="/booking?type=infomote#foresporsel">
          Meld interesse
        </Link>
      </section>
      <Footer />
    </main>
  );
}
