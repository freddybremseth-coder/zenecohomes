import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { homeLanguageLinks } from "@/lib/i18n";
import { articlesInSilo } from "@/lib/magazine";

export const metadata = {
  title: "Guider om boligkjøp i Spania | Råd fra Zen Eco Homes",
  description:
    "Finn de viktigste guidene om boligkjøp i Spania: kostnader, nybygg, områder, finansiering, NIE, juridikk, skatt, utleie og livet som boligeier.",
  alternates: { canonical: "/guide" },
  openGraph: {
    title: "Guider om boligkjøp i Spania | Zen Eco Homes",
    description:
      "Et ryddig kunnskapssenter med de viktigste guidene før, under og etter boligkjøp i Spania.",
    url: "https://www.zenecohomes.com/guide",
    type: "website",
  },
};

type GuideItem = {
  slug: string;
  title: string;
  excerpt: string;
  href: string;
  image: string;
  imageAlt: string;
  readingTime: string;
  category: string;
  updated: string;
};

const specialGuides: GuideItem[] = [
  {
    slug: "kjope-bolig-i-spania",
    title: "Kjøpe bolig i Spania (2026) – dette må du vite",
    excerpt: "Hovedguiden til områdevalg, boligtype, visning, juridisk kontroll, NIE, finansiering, notar og overtakelse.",
    href: "/guide/kjope-bolig-i-spania",
    image: "/assets/magasin-covers/kjopsprosess.svg",
    imageAlt: "Illustrasjon av kjøpsprosessen ved boligkjøp i Spania",
    readingTime: "18 min lesing",
    category: "Hovedguide",
    updated: "2026-10-07",
  },
  {
    slug: "kostnader-boligkjop-spania",
    title: "Hva koster det å kjøpe bolig i Spania?",
    excerpt: "ITP, IVA, AJD, advokat, notar, register og finansiering – med interaktiv kalkulator for totalbudsjettet.",
    href: "/guide/kostnader-boligkjop-spania",
    image: "/assets/magasin-covers/finansiering.svg",
    imageAlt: "Illustrasjon av kostnader og totalbudsjett ved boligkjøp i Spania",
    readingTime: "10 min lesing",
    category: "Kostnader",
    updated: "2026-10-07",
  },
  {
    slug: "nybygg-i-spania",
    title: "Nybygg i Spania – komplett guide",
    excerpt: "Utbygger, betalingsplan, bankgaranti, IVA og AJD, energieffektivitet, tilvalg, ferdigstillelse og overtakelse samlet i én guide.",
    href: "/guide/nybygg-i-spania",
    image: "/assets/magasin-covers/energi-baerekraft.svg",
    imageAlt: "Illustrasjon av moderne nybygg i Spania",
    readingTime: "14 min lesing",
    category: "Nybygg",
    updated: "2026-10-07",
  },
];

const groups = [
  {
    id: "start",
    eyebrow: "Start her",
    title: "Helheten, budsjettet og finansieringen",
    intro: "De tre guidene som gir deg rammen før du begynner å bruke tid på konkrete boliger.",
    slugs: ["kjope-bolig-i-spania", "kostnader-boligkjop-spania", "finansiere-bolig-i-spania"],
  },
  {
    id: "velge",
    eyebrow: "Velge riktig",
    title: "Område, nybygg og tomt",
    intro: "Fordyp deg i hvor og hva du bør kjøpe før du lager en konkret shortlist.",
    slugs: ["omradeguide-eiendomskjop-i-spania", "nybygg-i-spania", "guide-tomtekjop-bygging-i-spania"],
  },
  {
    id: "prosess",
    eyebrow: "Trygg gjennomføring",
    title: "Juridikk, NIE, bank og boliglån",
    intro: "Guidene du trenger når kjøpet går fra plan til kontrakter, finansiering og gjennomføring.",
    slugs: [
      "juridiske-fallgruver-boligkjop-spania",
      "nie-skattenummer-spania",
      "boliglan-spansk-bank-nordmenn",
      "spansk-bankkonto-valutaveksling",
    ],
  },
  {
    id: "eie",
    eyebrow: "Eie og bruke",
    title: "Kostnader, utleie, pensjon, salg og arv",
    intro: "Spørsmålene som blir viktige når du skal eie, bruke, leie ut, selge eller overføre boligen.",
    slugs: [
      "lopende-kostnader-eie-bolig-spania",
      "utleie-inntektspotensial-bolig-spania",
      "flytte-til-spania-som-pensjonist",
      "skatt-ved-salg-bolig-spania",
      "arv-gaveskatt-bolig-spania",
    ],
  },
] as const;

function GuideCard({ item }: { item: GuideItem }) {
  return (
    <article className="magazine-card guide-library-card">
      <Image
        className="magazine-cover-image"
        src={item.image}
        alt={item.imageAlt}
        width={1200}
        height={760}
      />
      <div className="magazine-body">
        <p className="magazine-meta">
          {item.category} · Sist oppdatert {new Intl.DateTimeFormat("nb-NO").format(new Date(item.updated))}
        </p>
        <h3>{item.title}</h3>
        <p>{item.excerpt}</p>
        <div className="magazine-actions">
          <span className="guide-reading-time"><Clock size={15} /> {item.readingTime}</span>
          <Link className="text-button" href={item.href}>Les guide <ArrowRight size={16} /></Link>
        </div>
      </div>
    </article>
  );
}

export default function GuideHub() {
  const contentGuides = articlesInSilo("guide");
  const contentItems: GuideItem[] = contentGuides.map((article) => ({
    slug: article.slug,
    title: article.title,
    excerpt: article.excerpt,
    href: `/guide/${article.slug}`,
    image: article.image,
    imageAlt: article.imageAlt || `Illustrasjon til guiden ${article.title}`,
    readingTime: article.readingTime,
    category: article.category,
    updated: article.updated,
  }));
  const catalog = new Map([...contentItems, ...specialGuides].map((item) => [item.slug, item]));

  return (
    <main>
      <SiteHeader languageLinks={homeLanguageLinks("no")} />

      <section className="page-hero compact-hero image-hero guide-hub-hero">
        <div className="guide-hero-layout">
          <div className="guide-hero-copy">
            <p className="eyebrow">Kunnskap uten innholdsstøy</p>
            <h1>Guider om boligkjøp i Spania</h1>
            <p>
              Her samler vi de viktigste fordypningene du trenger før, under og etter boligkjøpet.
              Vi holder Guide bevisst ryddig: brede og varige spørsmål ligger her, mens markedsoppdateringer,
              meninger og mer redaksjonelle saker ligger i Magasin.
            </p>
            <div className="hero-actions">
              <Link className="contact-button" href="/guide/kjope-bolig-i-spania">
                Start med hovedguiden <ArrowRight size={17} />
              </Link>
              <Link className="text-button light" href="/booking">Få personlig rådgivning</Link>
            </div>
          </div>

          <aside className="guide-hero-panel" aria-label="Finn riktig guide">
            <p className="eyebrow">Finn riktig svar</p>
            <h2>Hva vil du vite?</h2>
            <nav>
              <Link href="/guide/kjope-bolig-i-spania">Hvordan kjøper jeg bolig? <ArrowRight size={15} /></Link>
              <Link href="/guide/kostnader-boligkjop-spania">Hva koster kjøpet? <ArrowRight size={15} /></Link>
              <Link href="/guide/finansiere-bolig-i-spania">Hvordan finansierer jeg? <ArrowRight size={15} /></Link>
              <Link href="/guide/omradeguide-eiendomskjop-i-spania">Hvor bør jeg kjøpe? <ArrowRight size={15} /></Link>
              <Link href="/guide/nybygg-i-spania">Hva må jeg vite om nybygg? <ArrowRight size={15} /></Link>
              <Link href="/guide/juridiske-fallgruver-boligkjop-spania">Hva kan gå galt? <ArrowRight size={15} /></Link>
            </nav>
          </aside>
        </div>
      </section>

      <section className="guide-index-band" aria-label="Guideoversikt">
        <div>
          <span>Hopp til:</span>
          {groups.map((group) => <a href={`#${group.id}`} key={group.id}>{group.title}</a>)}
        </div>
      </section>

      {groups.map((group) => {
        const items = group.slugs.map((slug) => catalog.get(slug)).filter(Boolean) as GuideItem[];
        return (
          <section className="section guide-topic-section" id={group.id} key={group.id}>
            <div className="section-heading guide-section-heading">
              <p className="eyebrow">{group.eyebrow}</p>
              <h2>{group.title}</h2>
              <p>{group.intro}</p>
            </div>
            <div className="magazine-grid guide-library-grid">
              {items.map((item) => <GuideCard item={item} key={item.slug} />)}
            </div>
          </section>
        );
      })}

      <section className="section proof-section guide-magazine-bridge">
        <div className="section-heading">
          <p className="eyebrow">Vil du lese mer?</p>
          <h2>Aktuelle saker og erfaringer finner du i Magasin</h2>
          <p>
            Guidene gir deg grundige svar på de viktigste spørsmålene rundt boligkjøpet. I Magasin finner du
            markedsoppdateringer, sammenligninger, erfaringer og aktuelle saker fra Costa Blanca og boligmarkedet i Spania.
          </p>
        </div>
        <div className="hero-actions guide-magazine-actions">
          <Link className="contact-button" href="/magasin">Gå til Magasin <ArrowRight size={17} /></Link>
          <Link className="text-button" href="/eiendommer">Se boliger <ArrowRight size={16} /></Link>
        </div>
      </section>

      <section className="contact-section guide-contact-section">
        <div>
          <p className="eyebrow">Vil du slippe å sortere alt alene?</p>
          <h2>Få hjelp til å finne riktig område og riktig neste steg</h2>
          <p>Fortell hvordan du vil bruke boligen, budsjettet og når du vurderer å kjøpe. Da kan vi snevre inn både kunnskapen og boligene.</p>
        </div>
        <Link className="contact-button" href="/booking">Book boligprat <ArrowRight size={18} /></Link>
      </section>

      <Footer />
    </main>
  );
}
