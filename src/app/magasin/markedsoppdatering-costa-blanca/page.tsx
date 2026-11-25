import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { homeLanguageLinks } from "@/lib/i18n";
import { monthlyMarketUpdates } from "@/lib/monthly-market-updates";
import { articlePath } from "@/lib/magazine";

export const metadata: Metadata = {
  title: "Markedsoppdateringer Costa Blanca | Priser, utleie og regler",
  description: "Finn oppdaterte markedsrapporter for Costa Blanca. Velg måned og les om boligpriser, utleie, nye lover og kjøperråd med kilder.",
  alternates: { canonical: "/magasin/markedsoppdatering-costa-blanca" },
  openGraph: {
    title: "Markedsoppdateringer Costa Blanca | Zen Eco Homes",
    description: "Kildebaserte markedsrapporter og endringer i boligmarkedet på Costa Blanca.",
    url: "https://www.zenecohomes.com/magasin/markedsoppdatering-costa-blanca",
    images: [{ url: "https://www.zenecohomes.com/assets/magasin-covers/ChatGPT-bilde 19. okt. 2026, 19_14_54-1.png", alt: "Kystlandskap på Costa Blanca" }]
  }
};

const norwegianMonth = new Intl.DateTimeFormat("nb-NO", { month: "long", year: "numeric", timeZone: "UTC" });
const reports = [...monthlyMarketUpdates].sort((a, b) => b.date.localeCompare(a.date));
const monthReports = reports.filter((report, index) => reports.findIndex((other) => other.date.slice(0, 7) === report.date.slice(0, 7)) === index);
const fullDate = new Intl.DateTimeFormat("nb-NO", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

export default function MarketSeriesPage() {
  return (
    <main>
      <SiteHeader languageLinks={homeLanguageLinks("no")} />
      <section className="section" style={{ background: "#17232a", color: "#fff", paddingTop: "clamp(5rem,8vw,6rem)", paddingBottom: "clamp(2rem,5vw,3.5rem)", borderRadius: "0 0 18px 18px" }}>
        <div style={{ boxSizing: "border-box", width: "100%", paddingInline: "clamp(24px,4vw,56px)", paddingTop: 24 }}>
          <p className="eyebrow" style={{ marginBottom: 12, color: "#d9e7e3" }}>MARKED OG PRISER</p>
          <h1 style={{ fontSize: "clamp(1.85rem,5vw,3.65rem)", lineHeight: 1.14, maxWidth: "100%", overflowWrap: "normal", wordBreak: "normal", hyphens: "auto", marginBottom: 16 }}>
            Markedsoppdateringer fra Costa Blanca
          </h1>
          <p style={{ maxWidth: "62ch", fontSize: "clamp(1rem,1.6vw,1.2rem)", lineHeight: 1.55, color: "#dee3e2" }}>
            Velg rapporten du vil lese. Her finner du boligpriser, viktige lovendringer og råd for deg som vurderer boligkjøp i Spania.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingBlock: "clamp(2rem,4vw,4rem)" }}>
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <h2 style={{ fontSize: "clamp(1.55rem,3vw,2.4rem)", lineHeight: 1.2, marginBottom: 12 }}>Velg markedsrapport</h2>
          <p style={{ marginBottom: 18, maxWidth: "68ch" }}>Nyeste oppdatering ligger øverst. Bruk snarveiene for å gå direkte til en måned.</p>
          <nav aria-label="Velg rapport" style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 26 }}>
            {monthReports.map((report) => (
              <a key={report.slug} href={`#${report.slug}`} style={{ display: "inline-flex", padding: "9px 14px", border: "1px solid #9daaa5", borderRadius: 999, color: "#173e3b", fontWeight: 650, textDecoration: "none", background: "#fff" }}>
                {norwegianMonth.format(new Date(`${report.date}T12:00:00Z`))}
              </a>
            ))}
          </nav>
          <div style={{ display: "grid", gap: 18 }}>
            {reports.map((report, index) => (
              <article className="market-report-card" key={report.slug} id={report.slug} style={{ scrollMarginTop: 110, display: "grid", gridTemplateColumns: "minmax(0,1fr)", border: "1px solid #d9d5c9", borderRadius: 18, background: "#fff", overflow: "hidden" }}>
                <div className="market-report-card-inner" style={{ display: "grid", gridTemplateColumns: "minmax(0, 34%) minmax(0, 1fr)", gap: 0 }}>
                  <Link className="market-report-card-image" href={articlePath(report)} style={{ display: "block", position: "relative", minHeight: 180, height: "100%", background: "#e9e4d8" }} aria-label={`Les ${report.title}`}>
                    <Image src={report.image} alt={report.imageAlt} fill sizes="(max-width: 640px) 116px, 380px" style={{ objectFit: report.image.endsWith(".svg") ? "contain" : "cover" }} />
                  </Link>
                  <div className="market-report-card-content" style={{ padding: "clamp(1rem,3vw,1.7rem)", display: "grid", gap: 10 }}>
                    <p className="eyebrow" style={{ margin: 0 }}>{index === 0 ? "NYESTE · " : ""}{fullDate.format(new Date(`${report.date}T12:00:00Z`))} · {report.readingTime}</p>
                    <h3 style={{ fontSize: "clamp(1.25rem,2.5vw,1.7rem)", lineHeight: 1.25, margin: 0, overflowWrap: "break-word" }}>
                      <Link href={articlePath(report)} style={{ color: "inherit", textDecoration: "none" }}>{report.title}</Link>
                    </h3>
                    <p style={{ margin: 0, lineHeight: 1.6 }}>{report.excerpt}</p>
                    <Link href={articlePath(report)} style={{ fontWeight: 700, textDecoration: "underline", textUnderlineOffset: 4 }}>Les rapporten →</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div style={{ marginTop: 28, lineHeight: 1.7, maxWidth: "72ch" }}>
            <p>Rapportene er daterte. Se også <Link href="/magasin/boligmarkedet-costa-blanca-hosten-2026" style={{ textDecoration: "underline" }}>markedsgjennomgangen fra høsten</Link> og <Link href="/guide" style={{ textDecoration: "underline" }}>våre kjøperguider</Link>.</p>
            <p>Vil du vurdere konkrete boliger? <Link href="/booking" style={{ fontWeight: 700, textDecoration: "underline" }}>Book en boligprat</Link>.</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
