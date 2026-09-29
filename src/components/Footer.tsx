import Image from "next/image";
import Link from "next/link";
import { CARE_URL, type SiteLocale } from "@/lib/i18n";

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
  no: [],
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
    { label: "Proceso de compra", href: "/es/proceso-de-compra" },
    { label: "Guías", href: "/es/guias" },
    { label: "Sobre Freddy", href: "/es/sobre-freddy" },
  ],
};

const NORWEGIAN_GROUPS: Array<{ title: string; links: FooterLink[] }> = [
  {
    title: "Boliger og områder",
    links: [
      { label: "Boliger til salgs", href: "/eiendommer" },
      { label: "Områder", href: "/omrader" },
      { label: "Costa Blanca Nord", href: "/omrader/costa-blanca-nord" },
      { label: "Costa Blanca Sør", href: "/omrader/costa-blanca-sor" },
      { label: "Costa Cálida", href: "/omrader/costa-calida" },
      { label: "Innlandet", href: "/omrader/innlandet" },
    ],
  },
  {
    title: "Kjøpe bolig",
    links: [
      { label: "Kjøpe bolig i Spania", href: "/guide/kjope-bolig-i-spania" },
      { label: "Kjøpsprosessen", href: "/kjopsprosessen" },
      { label: "Visningstur", href: "/visningstur" },
      { label: "Guider", href: "/guide" },
      { label: "Book rådgivning", href: "/booking" },
    ],
  },
  {
    title: "Om Zen Eco Homes",
    links: [
      { label: "Om oss", href: "/om-oss" },
      { label: "Freddy", href: "/om-oss/freddy" },
      { label: "Kundeomtaler", href: "/kundeomtaler" },
      { label: "Magasin", href: "/magasin" },
      { label: "Bedriftshytte i Spania", href: "/bedriftshytte-spania" },
      { label: "Zen Eco Homes Care", href: CARE_URL, external: true },
    ],
  },
  {
    title: "Kontakt",
    links: [
      { label: "Booking", href: "/booking" },
      { label: "freddy@zenecohomes.com", href: "mailto:freddy@zenecohomes.com", external: true },
      { label: "+47 960 09 965", href: "tel:+4796009965", external: true },
      { label: "Benidorm, Alicante, Spania", href: "/om-oss" },
      { label: "Min side", href: "/min-side" },
    ],
  },
];

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

function FooterLinkItem({ link }: { link: FooterLink }) {
  return link.external ? (
    <a href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}>
      {link.label}
    </a>
  ) : (
    <Link href={link.href}>{link.label}</Link>
  );
}

export function Footer({
  locale = "no",
  showCta = false,
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
            <Image src="/assets/zeneco-header-light.svg" alt="Zen Eco Homes" width={300} height={64} />
          </Link>
          <p>{TAGLINE[locale]}</p>
          <small>{SUBLINE[locale]}</small>
        </div>

        {locale === "no" ? (
          <div
            className="footer-2027-nav"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: "28px 34px",
              alignItems: "start",
            }}
          >
            {NORWEGIAN_GROUPS.map((group) => (
              <nav key={group.title} aria-label={group.title} style={{ display: "grid", gap: 10 }}>
                <strong style={{ color: "white", fontSize: "0.85rem", letterSpacing: ".08em", textTransform: "uppercase" }}>
                  {group.title}
                </strong>
                {group.links.map((link) => <FooterLinkItem key={link.href} link={link} />)}
              </nav>
            ))}
          </div>
        ) : (
          <nav className="footer-2027-nav" aria-label="Footer">
            {links.map((link) => <FooterLinkItem key={link.href} link={link} />)}
          </nav>
        )}
      </div>

      <div className="footer-2027-bottom">
        <span>© {new Date().getFullYear()} Zen Eco Homes · Benidorm, Alicante, Spania</span>
        {locale === "no" ? (
          <span style={{ display: "inline-flex", gap: 14, flexWrap: "wrap" }}>
            <Link href="/personvern">Personvern</Link>
            <Link href="/informasjonskapsler">Informasjonskapsler</Link>
          </span>
        ) : (
          <span>Zen Eco Homes</span>
        )}
      </div>
    </footer>
  );
}
