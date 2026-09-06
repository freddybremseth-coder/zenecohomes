"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Scale, X, ArrowRight, Heart } from "lucide-react";
import type { Locale } from "@/lib/i18n";

type Favorite = {
  ref: string;
  title: string;
  location: string;
  price: string;
  href: string;
  image?: string;
  priceNum?: number;
  area?: number;
  bedrooms?: number;
  bathrooms?: number;
  energy?: string;
  type?: string;
};

const T: Record<Locale, {
  title: string;
  lead: string;
  empty: string;
  emptyCta: string;
  emptyHref: string;
  remove: string;
  view: string;
  price: string;
  type: string;
  area: string;
  perM2: string;
  bedrooms: string;
  bathrooms: string;
  energy: string;
  location: string;
  na: string;
  hint: string;
}> = {
  no: {
    title: "Sammenlign boliger",
    lead: "Boligene du har lagret ligger her side ved side, slik at du raskt ser forskjellene i pris, areal og standard.",
    empty: "Du har ikke lagret noen boliger ennå. Trykk «Lagre favoritt» på en bolig, så dukker den opp her.",
    emptyCta: "Se boliger",
    emptyHref: "/eiendommer",
    remove: "Fjern",
    view: "Se boligen",
    price: "Pris",
    type: "Boligtype",
    area: "Boareal",
    perM2: "Pris per m²",
    bedrooms: "Soverom",
    bathrooms: "Bad",
    energy: "Energiklasse",
    location: "Område",
    na: "—",
    hint: "Tips: du kan lagre inntil 20 boliger og sammenligne dem her.",
  },
  de: {
    title: "Immobilien vergleichen",
    lead: "Ihre gespeicherten Immobilien liegen hier nebeneinander, damit Sie Preis, Fläche und Ausstattung schnell vergleichen können.",
    empty: "Sie haben noch keine Immobilien gespeichert. Tippen Sie bei einer Immobilie auf «Favorit speichern», dann erscheint sie hier.",
    emptyCta: "Immobilien ansehen",
    emptyHref: "/de/immobilien",
    remove: "Entfernen",
    view: "Immobilie ansehen",
    price: "Preis",
    type: "Typ",
    area: "Wohnfläche",
    perM2: "Preis pro m²",
    bedrooms: "Schlafzimmer",
    bathrooms: "Bäder",
    energy: "Energieklasse",
    location: "Gegend",
    na: "—",
    hint: "Tipp: Sie können bis zu 20 Immobilien speichern und hier vergleichen.",
  },
  en: {
    title: "Compare properties",
    lead: "The properties you saved are lined up here side by side, so you can quickly see the differences in price, size and standard.",
    empty: "You haven't saved any properties yet. Tap «Save favourite» on a property and it will appear here.",
    emptyCta: "Browse properties",
    emptyHref: "/en/properties",
    remove: "Remove",
    view: "View property",
    price: "Price",
    type: "Type",
    area: "Living area",
    perM2: "Price per m²",
    bedrooms: "Bedrooms",
    bathrooms: "Bathrooms",
    energy: "Energy rating",
    location: "Area",
    na: "—",
    hint: "Tip: you can save up to 20 properties and compare them here.",
  },
};

function formatPerM2(fav: Favorite, locale: Locale): string {
  if (!fav.priceNum || !fav.area) return T[locale].na;
  const value = Math.round(fav.priceNum / fav.area);
  const nf = new Intl.NumberFormat(locale === "no" ? "nb-NO" : locale === "de" ? "de-DE" : "en-GB");
  return `${nf.format(value)} €/m²`;
}

export function CompareView({ locale = "no" }: { locale?: Locale }) {
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const [ready, setReady] = useState(false);
  const t = T[locale];

  useEffect(() => {
    function load() {
      try {
        const stored = JSON.parse(localStorage.getItem("zeneco:favorites") || "[]") as Favorite[];
        setFavorites(stored);
      } catch {
        setFavorites([]);
      }
      setReady(true);
    }
    load();
    window.addEventListener("zeneco:favorites-updated", load);
    return () => window.removeEventListener("zeneco:favorites-updated", load);
  }, []);

  function remove(ref: string) {
    const next = favorites.filter((f) => f.ref !== ref);
    setFavorites(next);
    try {
      localStorage.setItem("zeneco:favorites", JSON.stringify(next));
      window.dispatchEvent(new Event("zeneco:favorites-updated"));
    } catch {
      /* ignore */
    }
  }

  if (!ready) return null;

  if (!favorites.length) {
    return (
      <div className="compare-empty">
        <Heart size={32} />
        <p>{t.empty}</p>
        <Link className="compare-cta" href={t.emptyHref}>
          {t.emptyCta} <ArrowRight size={16} />
        </Link>
      </div>
    );
  }

  const rows: { label: string; render: (f: Favorite) => string }[] = [
    { label: t.price, render: (f) => f.price || t.na },
    { label: t.perM2, render: (f) => formatPerM2(f, locale) },
    { label: t.type, render: (f) => f.type || t.na },
    { label: t.location, render: (f) => f.location || t.na },
    { label: t.area, render: (f) => (f.area ? `${f.area} m²` : t.na) },
    { label: t.bedrooms, render: (f) => (f.bedrooms ? String(f.bedrooms) : t.na) },
    { label: t.bathrooms, render: (f) => (f.bathrooms ? String(f.bathrooms) : t.na) },
    { label: t.energy, render: (f) => f.energy || t.na },
  ];

  return (
    <div className="compare-wrap">
      <div className="compare-scroll">
        <table className="compare-table">
          <thead>
            <tr>
              <th className="compare-corner" />
              {favorites.map((f) => (
                <th key={f.ref} className="compare-head">
                  <div className="compare-card-media">
                    {f.image ? (
                      <Image src={f.image} alt={f.title} fill sizes="220px" style={{ objectFit: "cover" }} />
                    ) : null}
                    <button
                      className="compare-remove"
                      type="button"
                      onClick={() => remove(f.ref)}
                      aria-label={t.remove}
                    >
                      <X size={15} />
                    </button>
                  </div>
                  <Link className="compare-card-title" href={f.href}>
                    {f.title}
                  </Link>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label}>
                <th scope="row">{row.label}</th>
                {favorites.map((f) => (
                  <td key={f.ref}>{row.render(f)}</td>
                ))}
              </tr>
            ))}
            <tr>
              <th scope="row" />
              {favorites.map((f) => (
                <td key={f.ref}>
                  <Link className="compare-view-link" href={f.href}>
                    {t.view} <ArrowRight size={14} />
                  </Link>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      <p className="compare-hint">
        <Scale size={15} /> {t.hint}
      </p>
    </div>
  );
}
