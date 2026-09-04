"use client";

import { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import type { Locale } from "@/lib/i18n";

type Favorite = {
  ref: string;
  title: string;
  location: string;
  price: string;
  href: string;
};

const labels: Record<Locale, { saved: string; save: string }> = {
  no: { saved: "Lagret", save: "Lagre favoritt" },
  de: { saved: "Gespeichert", save: "Favorit speichern" },
  en: { saved: "Saved", save: "Save favourite" },
};

export function FavoriteButton({ favorite, locale = "no" }: { favorite: Favorite; locale?: Locale }) {
  const [saved, setSaved] = useState(false);
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
    setSaved(!saved);
    window.dispatchEvent(new Event("zeneco:favorites-updated"));
  }

  return (
    <button className={`favorite-button${saved ? " active" : ""}`} type="button" onClick={toggleFavorite}>
      <Heart size={17} /> {saved ? text.saved : text.save}
    </button>
  );
}
