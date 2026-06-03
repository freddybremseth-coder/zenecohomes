import Link from "next/link";
import { navLinks, withLocale, type Locale } from "@/lib/i18n";

type LanguageLink = { locale: Locale; href: string; current: boolean };

export function SiteHeader({
  locale = "no",
  languageLinks,
}: {
  locale?: Locale;
  languageLinks?: LanguageLink[];
} = {}) {
  const links = navLinks(locale);

  return (
    <header className="site-header">
      <Link className="brand" href={withLocale(locale, "/")} aria-label="Zen Eco Homes">
        Zen<span>Eco</span>Homes
      </Link>
      <nav className="nav">
        {links.map((link) =>
          link.external ? (
            <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          ) : (
            <Link key={link.href} className={link.cta ? "nav-cta" : undefined} href={link.href}>
              {link.label}
            </Link>
          ),
        )}
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
