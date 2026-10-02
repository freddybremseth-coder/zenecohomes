"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState, type FocusEvent } from "react";
import { navLinks, withLocale, type SiteLocale } from "@/lib/i18n";

type LanguageLink = { locale: SiteLocale; href: string; current: boolean };

export function SiteHeader({
  locale = "no",
  languageLinks,
  homepage = false,
}: {
  homepage?: boolean;
  locale?: SiteLocale;
  languageLinks?: LanguageLink[];
} = {}) {
  const headerRef = useRef<HTMLElement>(null);
  const links = homepage ? [
    { label: "Boliger", href: "/eiendommer" },
    { label: "Områder", href: "/omrader" },
    { label: "Bedrift", href: "/bedriftshytte-spania" },
    { label: "Om oss", href: "/om-oss" },
    { label: "Meny", href: "#", children: [
      { label: "Kundeomtaler", href: "/kundeomtaler" },
      { label: "Visningstur", href: "/visningstur" },
      { label: "Slik hjelper vi deg", href: "/slik-hjelper-vi-deg" },
      { label: "Guide", href: "/guide" },
      { label: "Magasin", href: "/magasin" },
      { label: "Min side", href: "/min-side" },
      { label: "Keyholding", href: "https://care.zenecohomes.com", external: true },
    ] },
    { label: "Få rådgivning", href: "/booking", cta: true },
  ] : navLinks(locale);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState<"menu" | "language" | null>(null);

  useEffect(() => {
    if (!homepage) return;
    const dismiss = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setDropdown(null);
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        headerRef.current?.querySelector<HTMLButtonElement>('[aria-expanded="true"].home-dropdown-trigger')?.focus();
        setDropdown(null);
      }
    };
    document.addEventListener("pointerdown", dismiss);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("pointerdown", dismiss);
      document.removeEventListener("keydown", escape);
    };
  }, [homepage]);
  const [scrolled, setScrolled] = useState(false);
  const [hasHero, setHasHero] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    setHasHero(Boolean(document.querySelector("main > section.hero, main > section.image-hero")));
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.body.classList.add("ze-mobile-menu-open");

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.classList.remove("ze-mobile-menu-open");
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

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
    homepage ? "home-navigation" : "",
    menuOpen ? "menu-open" : "",
    hasHero && !scrolled && !menuOpen ? "over-hero" : "",
    scrolled || menuOpen ? "is-scrolled" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const skipLabel = { no: "Hopp til hovedinnhold", en: "Skip to main content", de: "Zum Hauptinhalt", es: "Saltar al contenido principal" }[locale];
  const navLabel = { no: "Hovednavigasjon", en: "Main navigation", de: "Hauptnavigation", es: "Navegación principal" }[locale];

  const closeMenus = () => {
    setMenuOpen(false);
    setDropdown(null);
  };
  const closeDropdownOnBlur = (event: FocusEvent<HTMLElement>) => {
    const next = event.relatedTarget;
    // Switching dropdowns must not move the mobile trigger before its click.
    if (next instanceof Element && next.closest(".home-dropdown-trigger")) return;
    if (!event.currentTarget.contains(next as Node)) setDropdown(null);
  };
  const languageOptions = languageLinks?.map((language) => (
    <Link key={language.locale} href={language.href} hrefLang={language.locale}
      aria-current={language.current ? "true" : undefined} onClick={closeMenus}>
      {language.locale}
    </Link>
  ));

  return (
    <header ref={headerRef} className={headerClass}>
      <a className="skip-link" href="#main-content" onClick={(event) => {
        const target = headerRef.current?.parentElement?.querySelector<HTMLElement>("section");
        if (target) {
          event.preventDefault();
          target.tabIndex = -1;
          target.focus();
          target.scrollIntoView({ block: "start" });
        }
      }}>{skipLabel}</a>
      <Link className="brand brand-2027" href={withLocale(locale, "/")} aria-label="Zen Eco Homes">
        <img
          className="brand-logo-image brand-logo-dark"
          src="/assets/zeneco-header-dark.svg?v=20260926-3"
          alt="Zen Eco Homes"
          width={900}
          height={190}
          decoding="async"
        />
        <img
          className="brand-logo-image brand-logo-light"
          src="/assets/zeneco-header-light.svg?v=20260926-3"
          alt=""
          aria-hidden="true"
          width={900}
          height={190}
          decoding="async"
        />
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
      <nav aria-label={navLabel} className={`nav${menuOpen ? " open" : ""}`} id="site-navigation">
        {links.map((link) =>
          link.children?.length ? (
            <div className="nav-dropdown" key={link.href} onBlur={closeDropdownOnBlur}>
              {homepage ? (
                <button className="home-dropdown-trigger" type="button" aria-expanded={dropdown === "menu"} aria-controls="home-more-links" onClick={() => setDropdown(dropdown === "menu" ? null : "menu")}>{link.label} <span aria-hidden="true">⌄</span></button>
              ) : (
                <Link className="nav-dropdown-trigger" href={link.href} onClick={closeMenus}>{link.label}</Link>
              )}
              <div className="nav-submenu" id={homepage ? "home-more-links" : undefined} hidden={homepage ? dropdown !== "menu" : undefined} aria-label={`${link.label} undermeny`}>
                {link.children.map((child) =>
                  child.external ? (
                    <a key={child.href} href={child.href} onClick={closeMenus} target="_blank" rel="noopener noreferrer">
                      {child.label}
                    </a>
                  ) : (
                    <Link key={child.href} href={child.href} onClick={closeMenus}>
                      {child.label}
                    </Link>
                  ),
                )}
              </div>
            </div>
          ) : link.external ? (
            <a key={link.href} href={link.href} onClick={closeMenus} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          ) : (
            <Link key={link.href} className={link.cta ? "nav-cta" : undefined} href={link.href} onClick={closeMenus}>
              {link.label}
            </Link>
          ),
        )}
        {languageLinks && languageLinks.length > 1 && (homepage ? (
          <div className="home-language-dropdown" onBlur={closeDropdownOnBlur}>
            <button type="button" className="home-dropdown-trigger" aria-label="Velg språk"
              aria-expanded={dropdown === "language"} aria-controls="home-language-links"
              onClick={() => setDropdown(dropdown === "language" ? null : "language")}>
              {locale.toUpperCase()} <span aria-hidden="true">⌄</span>
            </button>
            <span className="home-language-links" id="home-language-links" hidden={dropdown !== "language"}>
              {languageOptions}
            </span>
          </div>
        ) : <span className="language-switcher">{languageOptions}</span>)}
      </nav>
    </header>
  );
}
