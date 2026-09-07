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
  no: "Nybygg · Costa Blanca · Costa Cálida",
  de: "Neubau · Costa Blanca · Costa Cálida",
  en: "New builds · Costa Blanca · Costa Cálida",
  es: "Obra nueva · Costa Blanca · Costa Cálida",
};

const LINKS: Record<SiteLocale, FooterLink[]> = {
  no: [
    { label: "Bolig i Spania", href: "/bolig-i-spania" },
    { label: "Nybygg Costa Blanca", href: "/nybygg-costa-blanca" },
    { label: "Eiendomsrådgiver Spania", href: "/eiendomsradgiver-spania" },
    { label: "Tomt i Spania", href: "/tomt-i-spania" },
    { label: "Om Freddy", href: "/om-freddy" },
    { label: "freddybremseth.com", href: "https://www.freddybremseth.com", external: true },
  ],
  de: [
    { label: "Immobilien", href: "/de/immobilien" },
    { label: "Neubau Costa Blanca", href: "/de/neubau-costa-blanca" },
    { label: "Immobilienberater Spanien", href: "/de/immobilienberater-spanien" },
    { label: "Inland", href: "/de/inland" },
    { label: "Über Freddy", href: "https://www.freddybremseth.com", external: true },
  ],
  en: [
    { label: "Properties", href: "/en/properties" },
    { label: "New build Costa Blanca", href: "/en/new-build-costa-blanca" },
    { label: "Property advisor Spain", href: "/en/property-advisor-spain" },
    { label: "Inland", href: "/en/inland" },
    { label: "About Freddy", href: "https://www.freddybremseth.com", external: true },
  ],
  es: [
    { label: "Propiedades", href: "/es/propiedades" },
    { label: "Obra nueva Costa Blanca", href: "/es/obra-nueva-costa-blanca" },
    { label: "Asesor inmobiliario en España", href: "/es/asesor-inmobiliario-espana" },
    { label: "Interior", href: "/es/interior" },
    { label: "Sobre Freddy", href: "/es/sobre-freddy" },
  ],
};

const MUSIC: Record<SiteLocale, string> = {
  no: "Re-Master Freddy (musikk)",
  de: "Re-Master Freddy (Musik)",
  en: "Re-Master Freddy (music)",
  es: "Re-Master Freddy (música)",
};

export function Footer({ locale = "no" }: { locale?: SiteLocale } = {}) {
  const links = LINKS[locale];

  return (
    <footer>
      <span>© {new Date().getFullYear()} Zen Eco Homes</span>
      <span>{TAGLINE[locale]}</span>
      <span>{SUBLINE[locale]}</span>
      <nav aria-label="Footer" style={{ display: "flex", flexWrap: "wrap", gap: "14px", justifyContent: "center" }}>
        {links.map((l) =>
          l.external ? (
            <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
              {l.label}
            </a>
          ) : (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ),
        )}
        <a href="https://remaster.freddybremseth.com" target="_blank" rel="noopener noreferrer">
          {MUSIC[locale]}
        </a>
      </nav>
    </footer>
  );
}
