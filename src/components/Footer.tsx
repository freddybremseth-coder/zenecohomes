import Link from "next/link";
import type { SiteLocale } from "@/lib/i18n";

type FooterLink = { label: string; href: string; external?: boolean };

const TAGLINE: Record<SiteLocale, string> = {
  no: "Norsk eiendomsrådgiver på Costa Blanca · Rådgivning først. Boligen etterpå.",
  de: "Immobilienberater an der Costa Blanca · Beratung zuerst. Die Immobilie danach.",
  en: "Property advisor on the Costa Blanca · Advice first. The property second.",
  es: "Asesor inmobiliario en la Costa Blanca · Primero el asesoramiento. Después, la vivienda.",
};

const SUBLINE: Record<SiteLocale, string> = {
  no: "Moderne nybygg · Costa Blanca · Costa Cálida · Innlandet",
  de: "Moderner Neubau · Costa Blanca · Costa Cálida · Inland",
  en: "Modern new builds · Costa Blanca · Costa Cálida · Inland",
  es: "Obra nueva moderna · Costa Blanca · Costa Cálida · Interior",
};

const LINKS: Record<SiteLocale, FooterLink[]> = {
  no: [
    { label: "Boliger", href: "/eiendommer" },
    { label: "Områder", href: "/omrader" },
    { label: "Innlandet", href: "/inland" },
    { label: "Tomter", href: "/tomter" },
    { label: "Kjøpsprosess", href: "/kjopsprosessen" },
    { label: "Magasin", href: "/magasin" },
    { label: "Om Freddy", href: "/om-freddy" },
  ],
  de: [
    { label: "Immobilien", href: "/de/immobilien" },
    { label: "Regionen", href: "/de/regionen" },
    { label: "Inland", href: "/de/inland" },
    { label: "Kaufprozess", href: "/de/kaufprozess" },
    { label: "Ratgeber", href: "/de/ratgeber" },
    { label: "Über Freddy", href: "/de/ueber-freddy" },
  ],
  en: [
    { label: "Properties", href: "/en/properties" },
    { label: "Areas", href: "/en/areas" },
    { label: "Inland", href: "/en/inland" },
    { label: "Buying process", href: "/en/buying-process" },
    { label: "Guides", href: "/en/guides" },
    { label: "About Freddy", href: "/en/about-freddy" },
  ],
  es: [
    { label: "Propiedades", href: "/es/propiedades" },
    { label: "Zonas", href: "/es/zonas" },
    { label: "Interior", href: "/es/interior" },
    { label: "Terrenos", href: "/es/terreno-en-espana" },
    { label: "Proceso de compra", href: "/es/proceso-de-compra" },
    { label: "Guías", href: "/es/guias" },
    { label: "Sobre Freddy", href: "/es/sobre-freddy" },
  ],
};

const CTA: Record<SiteLocale, { eyebrow: string; title: string; body: string; primary: string; primaryHref: string; secondary: string; secondaryHref: string }> = {
  no: {
    eyebrow: "Neste steg",
    title: "Finn boligen som passer livet du vil ha i Spania.",
    body: "Start med område, bruk og budsjett. Så finner vi boligene som faktisk er verdt tiden din.",
    primary: "Book boligprat",
    primaryHref: "/booking",
    secondary: "Se boliger",
    secondaryHref: "/eiendommer",
  },
  de: {
    eyebrow: "Nächster Schritt",
    title: "Finden Sie die Immobilie, die zu Ihrem Leben in Spanien passt.",
    body: "Starten Sie mit Region, Nutzung und Budget. Danach konzentrieren wir uns auf die wirklich passenden Optionen.",
    primary: "Gespräch anfragen",
    primaryHref: "/de/termin",
    secondary: "Immobilien ansehen",
    secondaryHref: "/de/immobilien",
  },
  en: {
    eyebrow: "Next step",
    title: "Find the home that fits the life you want in Spain.",
    body: "Start with area, use and budget. Then we focus on the homes that are genuinely worth your time.",
    primary: "Book a property call",
    primaryHref: "/en/booking",
    secondary: "View properties",
    secondaryHref: "/en/properties",
  },
  es: {
    eyebrow: "Siguiente paso",
    title: "Encuentra la vivienda que encaja con la vida que quieres en España.",
    body: "Empezamos por zona, uso y presupuesto. Después nos centramos en las viviendas que realmente merecen tu tiempo.",
    primary: "Solicitar una llamada",
    primaryHref: "/es/cita",
    secondary: "Ver propiedades",
    secondaryHref: "/es/propiedades",
  },
};

const MUSIC: Record<SiteLocale, string> = {
  no: "Re-Master Freddy",
  de: "Re-Master Freddy",
  en: "Re-Master Freddy",
  es: "Re-Master Freddy",
};

export function Footer({
  locale = "no",
  showCta = true,
}: {
  locale?: SiteLocale;
  showCta?: boolean;
} = {}) {
  const links = LINKS[locale];
  const cta = CTA[locale];

  return (
    <footer className="site-footer-2027">
      {showCta && (
        <div className="footer-2027-cta">
          <div>
            <p className="eyebrow">{cta.eyebrow}</p>
            <h2>{cta.title}</h2>
            <p>{cta.body}</p>
          </div>
          <div className="footer-2027-actions">
            <Link className="footer-primary" href={cta.primaryHref}>{cta.primary}</Link>
            <Link className="footer-secondary" href={cta.secondaryHref}>{cta.secondary} →</Link>
          </div>
        </div>
      )}

      <div className="footer-2027-main">
        <div className="footer-2027-brand">
          <Link className="footer-wordmark" href={locale === "no" ? "/" : `/${locale}`} aria-label="Zen Eco Homes">
            <span className="footer-monogram" aria-hidden="true">ZE</span>
            <span>
              <strong>Zen Eco</strong>
              <small>Homes · Costa Blanca</small>
            </span>
          </Link>
          <p>{TAGLINE[locale]}</p>
          <small>{SUBLINE[locale]}</small>
        </div>

        <nav className="footer-2027-nav" aria-label="Footer">
          {links.map((link) =>
            link.external ? (
              <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a>
            ) : (
              <Link key={link.href} href={link.href}>{link.label}</Link>
            ),
          )}
        </nav>
      </div>

      <div className="footer-2027-bottom">
        <span>© {new Date().getFullYear()} Zen Eco Homes</span>
        <span>Benidorm · Costa Blanca</span>
        <a href="https://remaster.freddybremseth.com" target="_blank" rel="noopener noreferrer">♫ {MUSIC[locale]}</a>
      </div>
    </footer>
  );
}
