"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks, withLocale, type SiteLocale } from "@/lib/i18n";

type LanguageLink = { locale: SiteLocale; href: string; current: boolean };

export function SiteHeader({
  locale = "no",
  languageLinks,
}: {
  locale?: SiteLocale;
  languageLinks?: LanguageLink[];
} = {}) {
  const links = navLinks(locale);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hasHero, setHasHero] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    setHasHero(Boolean(document.querySelector("main > section.hero, main > section.image-hero")));
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const openLabel =
    locale === "de" ? "Menü öffnen" : locale === "en" ? "Open menu" : locale === "es" ? "Abrir menú" : "Åpne meny";
  const closeLabel =
    locale === "de"
      ? "Menü schließen"
      : locale === "en"
        ? "Close menu"
        : locale === "es"
          ? "Cerrar menú"
          : "Lukk meny";

  const headerClass = [
    "site-header",
    hasHero && !scrolled && !menuOpen ? "over-hero" : "",
    scrolled || menuOpen ? "is-scrolled" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={headerClass}>
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
