"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";
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

const labels: Record<Locale, { saved: string; save: string; offer: string; portal: string }> = {
  no: { saved: "Lagret", save: "Lagre favoritt", offer: "Vil du samle favoritter og boligmatch på Min side?", portal: "Åpne / opprett Min side" },
  de: { saved: "Gespeichert", save: "Favorit speichern", offer: "Favoriten und passende Immobilien in Mein Bereich sammeln?", portal: "Mein Bereich öffnen" },
  en: { saved: "Saved", save: "Save favourite", offer: "Keep favourites and property matches in My account?", portal: "Open / create My account" },
};

export function FavoriteButton({ favorite, locale = "no" }: { favorite: Favorite; locale?: Locale }) {
  const [saved, setSaved] = useState(false);
  const [showPortalOffer, setShowPortalOffer] = useState(false);
  const text = labels[locale];

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("zeneco:favorites") || "[]") as Favorite[];
    setSaved(favorites.some((item) => item.ref === favorite.ref));
  }, [favorite.ref]);

  function toggleFavorite() {
    const favorites = JSON.parse(localStorage.getItem("zeneco:favorites") || "[]") as Favorite[];
    const next = saved
      ? favorites.filter((item) => item.ref !== favorite.ref)
      : [favorite, ...favorites.filter((item) => item.ref !== favorite.ref)].slice(0, 20);
    localStorage.setItem("zeneco:favorites", JSON.stringify(next));
    const nextSaved = !saved;
    setSaved(nextSaved);
    setShowPortalOffer(nextSaved);
    window.dispatchEvent(new Event("zeneco:favorites-updated"));
  }

  const portalHref = locale === "en" ? "/en/min-side?from=favorite" : locale === "de" ? "/de/min-side?from=favorite" : "/min-side?from=favorite";

  return (
    <div className="favorite-action-wrap">
      <button className={`favorite-button${saved ? " active" : ""}`} type="button" onClick={toggleFavorite}>
        <Heart size={17} /> {saved ? text.saved : text.save}
      </button>
      {showPortalOffer && saved && (
        <div className="favorite-portal-offer" role="status">
          <span>{text.offer}</span>
          <Link href={portalHref}>
            {text.portal} <ArrowRight size={15} />
          </Link>
        </div>
      )}
    </div>
  );
}
