import Link from "next/link";
import type { Locale } from "@/lib/i18n";

type LanguageLink = { locale: Locale; href: string; current: boolean };

export function SiteHeader({
  languageLinks,
}: {
  locale?: Locale;
  languageLinks?: LanguageLink[];
} = {}) {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Zen Eco Homes">
        Zen<span>Eco</span>Homes
      </Link>
      <nav className="nav">
        <Link href="/eiendommer">Boliger</Link>
        <Link href="/tomter">Tomter</Link>
        <Link href="/omrader">Områder</Link>
        <Link href="/kjopsprosessen">Kjøpsprosess</Link>
        <Link href="/magasin">Magasin</Link>
        <a href="https://www.freddybremseth.com" target="_blank" rel="noopener noreferrer">
          Om Freddy
        </a>
        <Link className="nav-cta" href="/min-side">
          Min side
        </Link>
        {languageLinks && languageLinks.length > 1 && (
          <span style={{ display: "inline-flex", gap: 8, alignItems: "center", marginLeft: 4 }}>
            {languageLinks.map((l) => (
              <Link
                key={l.locale}
                href={l.href}
                hrefLang={l.locale}
                aria-current={l.current ? "true" : undefined}
                style={{
                  textTransform: "uppercase",
                  fontSize: "0.78rem",
                  fontWeight: 800,
                  letterSpacing: "0.04em",
                  opacity: l.current ? 1 : 0.55,
                }}
              >
                {l.locale}
              </Link>
            ))}
          </span>
        )}
      </nav>
    </header>
  );
}
