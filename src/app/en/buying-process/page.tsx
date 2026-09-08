import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { homeLanguageLinks } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Buying property in Spain | Step-by-step guide",
  description:
    "A practical overview of buying property in Spain, from needs and shortlist to reservation, legal checks, contract, notary and handover.",
  alternates: { canonical: "/en/buying-process" },
};

const steps = [
  ["1", "Define use and budget", "Clarify whether the property is for holidays, permanent living, retirement or investment, and calculate the total budget rather than only the asking price."],
  ["2", "Choose the right areas", "Compare everyday life, access, services, airport distance, seasonality and the type of property that fits the way you plan to use it."],
  ["3", "Build a short, relevant list", "Confirm availability and essential facts before arranging viewings. The aim is not the most viewings; it is the right viewings."],
  ["4", "Reservation", "Before paying a reservation amount, understand what is being reserved, the conditions, what is refundable and which documents still need to be checked."],
  ["5", "Independent legal and technical checks", "Use the appropriate Spanish professionals to verify ownership, charges, planning status, contracts and relevant technical matters before committing further."],
  ["6", "Contract and payment plan", "For new-build property, pay particular attention to specifications, payment milestones, bank guarantees where applicable, included items and delivery timing."],
  ["7", "Notary and completion", "The final deed is normally signed before a Spanish notary, followed by registration, taxes and practical handover steps."],
  ["8", "Keys and aftercare", "Utilities, community matters, insurance, keyholding and practical follow-up should be planned so the property is ready for use after completion."],
];

export default function EnglishBuyingProcessPage() {
  return (
    <main lang="en">
      <SiteHeader locale="en" languageLinks={homeLanguageLinks("en")} />
      <section className="page-hero compact-hero image-hero">
        <p className="eyebrow">Advice before reservation</p>
        <h1>Buying property in Spain, step by step</h1>
        <p>The process becomes much easier when area, property, costs and checks are handled in the right order. This is the framework we use with buyers.</p>
        <div className="hero-actions">
          <Link className="contact-button" href="/en#kontakt">Discuss your purchase <ArrowRight size={18} /></Link>
          <Link className="text-button light" href="/en/properties">View modern properties</Link>
        </div>
      </section>
      <section className="section">
        <div className="section-heading"><p className="eyebrow">Eight stages</p><h2>From first idea to handover</h2></div>
        <div className="card-list">
          {steps.map(([number, title, body]) => (
            <article className="info-card" key={number}>
              <CheckCircle2 />
              <div><p className="eyebrow">Step {number}</p><h2>{title}</h2><p>{body}</p></div>
            </article>
          ))}
        </div>
      </section>
      <section className="section" style={{ textAlign: "center" }}>
        <h2>Modern new build is our main focus</h2>
        <p style={{ maxWidth: 760, margin: "0 auto 22px", color: "var(--muted)", lineHeight: 1.8 }}>Zen Eco Homes primarily helps buyers compare modern new-build projects, contemporary villas and apartments. If the right solution turns out to be a resale property, we can still help you evaluate it rather than losing sight of your actual needs.</p>
        <Link className="contact-button" href="/en#kontakt">Talk to Freddy</Link>
      </section>
      <Footer locale="en" />
    </main>
  );
}
