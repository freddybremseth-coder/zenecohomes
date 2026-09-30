"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { supabase } from "@/lib/supabase-browser";

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
    let cancelled = false;

    async function syncFavoriteState() {
      const favorites = JSON.parse(localStorage.getItem("zeneco:favorites") || "[]") as Favorite[];
      const localSaved = favorites.some((item) => item.ref === favorite.ref);
      if (!cancelled) setSaved(localSaved);

      if (!supabase) return;
      const { data } = await supabase.auth.getSession();
      const token = data.session?.access_token;
      if (!token) return;

      try {
        const res = await fetch("/api/portal/favorites", {
          headers: { Authorization: `Bearer ${token}` },
          cache: "no-store",
        });
        const body = await res.json().catch(() => ({}));
        const remoteSaved = Array.isArray(body.favorites)
          ? body.favorites.some((item: { ref?: string }) => item.ref === favorite.ref)
          : false;

        if (localSaved && !remoteSaved) {
          await fetch("/api/portal/favorites", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ ref: favorite.ref, source: "website_favorite" }),
          });
          if (!cancelled) setSaved(true);
        } else if (!cancelled) {
          setSaved(remoteSaved || localSaved);
        }
      } catch {
        // Local favorites remain available if portal sync is temporarily unavailable.
      }
    }

    void syncFavoriteState();
    return () => { cancelled = true; };
  }, [favorite.ref]);

  async function toggleFavorite() {
    const favorites = JSON.parse(localStorage.getItem("zeneco:favorites") || "[]") as Favorite[];
    const next = saved
      ? favorites.filter((item) => item.ref !== favorite.ref)
      : [favorite, ...favorites.filter((item) => item.ref !== favorite.ref)].slice(0, 20);
    localStorage.setItem("zeneco:favorites", JSON.stringify(next));
    const nextSaved = !saved;
    setSaved(nextSaved);
    setShowPortalOffer(nextSaved);
    window.dispatchEvent(new Event("zeneco:favorites-updated"));

    if (!supabase) return;
    const { data } = await supabase.auth.getSession();
    const token = data.session?.access_token;
    if (!token) return;

    try {
      await fetch("/api/portal/favorites", {
        method: nextSaved ? "POST" : "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ref: favorite.ref, source: "website_favorite" }),
      });
      window.dispatchEvent(new Event("zeneco:portal-favorites-updated"));
    } catch {
      // Optimistic local save remains; a later visit can resync it.
    }
  }

  const portalHref = locale === "en" ? "/en/min-side?from=favorite" : locale === "de" ? "/de/min-side?from=favorite" : "/min-side?from=favorite";

  return (
    <div className="favorite-action-wrap">
      <button className={`favorite-button${saved ? " active" : ""}`} type="button" onClick={() => void toggleFavorite()}>
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
