import Link from "next/link";
import type { SiteLocale } from "@/lib/i18n";

type FooterLink = { label: string; href: string; external?: boolean };
type FooterGroup = { title: string; links: FooterLink[] };

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

const NORWEGIAN_GROUPS: FooterGroup[] = [
  {
    title: "Boliger og områder",
    links: [
      { label: "Boliger til salgs", href: "/eiendommer" },
      { label: "Områder", href: "/omrader" },
      { label: "Costa Blanca Nord", href: "/omrader/costa-blanca-nord" },
      { label: "Costa Blanca Sør", href: "/omrader/costa-blanca-sor" },
      { label: "Costa Cálida", href: "/omrader/costa-calida" },
      { label: "Innlandet", href: "/omrader/innlandet" },
      { label: "Tomter og bygging", href: "/omrader/innlandet/tomter" },
    ],
  },
  {
    title: "Kjøpe bolig",
    links: [
      { label: "Kjøpe bolig i Spania", href: "/guide/kjope-bolig-i-spania" },
      { label: "Kjøpsprosessen", href: "/kjopsprosessen" },
      { label: "Visningstur", href: "/visningstur" },
      { label: "Guider", href: "/guide" },
      { label: "Book boligprat", href: "/booking" },
    ],
  },
  {
    title: "Om Zen Eco Homes",
    links: [
      { label: "Om oss", href: "/om-oss" },
      { label: "Freddy Bremseth", href: "/om-oss/freddy" },
      { label: "Andrea Thorsnes Karlsen", href: "/om-oss/andrea" },
      { label: "Kundeomtaler", href: "/kundeomtaler" },
      { label: "Magasin", href: "/magasin" },
      { label: "Bedriftshytte i Spania", href: "/bedriftshytte-spania" },
      { label: "Zen Eco Homes Care", href: "https://care.zenecohomes.com", external: true },
    ],
  },
  {
    title: "Kontakt",
    links: [
      { label: "Booking", href: "/booking" },
      { label: "+47 960 09 965", href: "tel:+4796009965", external: true },
      { label: "freddy@zenecohomes.com", href: "mailto:freddy@zenecohomes.com", external: true },
      { label: "Benidorm, Spania", href: "/om-oss" },
      { label: "Min side", href: "/min-side" },
      { label: "Instagram · @zenecohomesspain", href: "https://www.instagram.com/zenecohomesspain/", external: true },
      { label: "YouTube · @ZenEcoHomes", href: "https://www.youtube.com/@ZenEcoHomes", external: true },
    ],
  },
];

const LINKS: Record<SiteLocale, FooterLink[]> = {
  no: [
    { label: "Boliger til salgs", href: "/eiendommer" },
    { label: "Områder", href: "/omrader" },
    { label: "Costa Blanca Nord", href: "/omrader/costa-blanca-nord" },
    { label: "Costa Blanca Sør", href: "/omrader/costa-blanca-sor" },
    { label: "Costa Cálida", href: "/omrader/costa-calida" },
    { label: "Innlandet", href: "/omrader/innlandet" },
    { label: "Kjøpe bolig i Spania", href: "/guide/kjope-bolig-i-spania" },
    { label: "Kjøpsprosessen", href: "/kjopsprosessen" },
    { label: "Visningstur", href: "/visningstur" },
    { label: "Guider", href: "/guide" },
    { label: "Book rådgivning", href: "/booking" },
    { label: "Om oss", href: "/om-oss" },
    { label: "Freddy", href: "/om-oss/freddy" },
    { label: "Kundeomtaler", href: "/kundeomtaler" },
    { label: "Magasin", href: "/magasin" },
    { label: "Bedriftshytte i Spania", href: "/bedriftshytte-spania" },
    { label: "Zen Eco Homes Care", href: "https://care.zenecohomes.com", external: true },
  ],
  de: [
    { label: "Immobilien", href: "/de/immobilien" },
    { label: "Regionen", href: "/de/regionen" },
    { label: "Kaufprozess", href: "/de/kaufprozess" },
    { label: "Ratgeber", href: "/de/ratgeber" },
  ],
  en: [
    { label: "Properties", href: "/en/properties" },
    { label: "Areas", href: "/en/areas" },
    { label: "Buying process", href: "/en/buying-process" },
    { label: "Guides", href: "/en/guides" },
  ],
  es: [
    { label: "Propiedades", href: "/es/propiedades" },
    { label: "Zonas", href: "/es/zonas" },
    { label: "Proceso de compra", href: "/es/proceso-de-compra" },
    { label: "Guías", href: "/es/guias" },
  ],
};

const CTA: Record<SiteLocale, { eyebrow: string; title: string; body: string; primary: string; primaryHref: string; secondary: string; secondaryHref: string }> = {
  no: {
    eyebrow: "Neste steg",
    title: "Vil du ha hjelp til å finne riktig bolig?",
    body: "Start med en kort boligprat, eller gå rett til boligene.",
    primary: "Book en kort boligprat",
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


export function Footer({
  locale = "no",
  showCta = true,
}: {
  locale?: SiteLocale;
  showCta?: boolean;
} = {}) {
  const links = LINKS[locale];
  const groups = locale === "no" ? NORWEGIAN_GROUPS : [{ title: SUBLINE[locale], links }];
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
            <img src="/assets/zeneco-header-light.svg?v=20260926-3" alt="Zen Eco Homes" width={900} height={190} />
          </Link>
          <p>{TAGLINE[locale]}</p>
          <small>{SUBLINE[locale]}</small>
        </div>

        <nav className="footer-2027-nav" aria-label="Footer">
          {groups.map((group) => (
            <div className="footer-2027-group" key={group.title}>
              <h3>{group.title}</h3>
              <div>
                {group.links.map((link) =>
                  link.external ? (
                    <a
                      key={link.href}
                      href={link.href}
                      {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link key={link.href} href={link.href}>{link.label}</Link>
                  ),
                )}
              </div>
            </div>
          ))}
        </nav>
      </div>

      <div className="footer-2027-bottom">
        <span>© {new Date().getFullYear()} Zen Eco Homes · Benidorm · Costa Blanca</span>
        {locale === "no" ? (
          <span>
            <Link href="/personvern">Personvern</Link> · <Link href="/informasjonskapsler">Informasjonskapsler</Link>
          </span>
        ) : <span>{SUBLINE[locale]}</span>}
      </div>
    </footer>
  );
}
