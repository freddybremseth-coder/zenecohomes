"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false);
  const openLabel = locale === "de" ? "Menü öffnen" : locale === "en" ? "Open menu" : "Åpne meny";
  const closeLabel = locale === "de" ? "Menü schließen" : locale === "en" ? "Close menu" : "Lukk meny";

  return (
    <header className="site-header">
      <Link className="brand" href={withLocale(locale, "/")} aria-label="Zen Eco Homes">
        Zen<span>Eco</span>Homes
      </Link>
      <button
        aria-controls="site-navigation"
        aria-expanded={menuOpen}
        aria-label={menuOpen ? closeLabel : openLabel}
        className="mobile-menu-toggle"
        onClick={() => setMenuOpen((open) => !open)}
        title={menuOpen ? closeLabel : openLabel}
        type="button"
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
      <nav className={`nav${menuOpen ? " open" : ""}`} id="site-navigation">
        {links.map((link) =>
          link.external ? (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          ) : (
            <Link key={link.href} className={link.cta ? "nav-cta" : undefined} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </Link>
          ),
        )}
        {languageLinks && languageLinks.length > 1 && (
          <span className="language-switcher">
            {languageLinks.map((l) => (
              <Link
                key={l.locale}
                href={l.href}
                hrefLang={l.locale}
                aria-current={l.current ? "true" : undefined}
                onClick={() => setMenuOpen(false)}
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
