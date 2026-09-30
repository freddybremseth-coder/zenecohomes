"use client";

import { useCallback, useEffect, useState } from "react";
import { ArrowRight, Building2, Heart, Loader2 } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { supabase } from "@/lib/supabase-browser";

type Favorite = {
  id?: string;
  ref?: string;
  title?: string;
  location?: string;
  price?: number;
};

function money(value: number | undefined, locale: Locale) {
  if (!value) return "";
  const numberLocale = locale === "en" ? "en-GB" : locale === "de" ? "de-DE" : "nb-NO";
  return new Intl.NumberFormat(numberLocale, {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

function href(locale: Locale, favorite: Favorite) {
  const id = encodeURIComponent(favorite.ref || favorite.id || "");
  if (locale === "en") return `/en/properties/${id}`;
  if (locale === "de") return `/de/immobilien/${id}`;
  return `/eiendommer/${id}`;
}

export function PortalFavoritesCard({ locale = "no" }: { locale?: Locale }) {
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    if (!supabase) {
      setLoading(false);
      return;
    }
    const { data } = await supabase.auth.getSession();
    const token = data.session?.access_token;
    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/portal/favorites", {
        headers: { Authorization: `Bearer ${token}` },
        cache: "no-store",
      });
      const body = await res.json().catch(() => ({}));
      if (res.ok && Array.isArray(body.favorites)) setFavorites(body.favorites);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load();
    const update = () => void load();
    window.addEventListener("zeneco:portal-favorites-updated", update);
    window.addEventListener("zeneco:favorites-updated", update);
    return () => {
      window.removeEventListener("zeneco:portal-favorites-updated", update);
      window.removeEventListener("zeneco:favorites-updated", update);
    };
  }, [load]);

  return (
    <article className="portal-panel" id="portal-favorites">
      <div className="panel-title">
        <Heart size={20} />
        <h3>{locale === "en" ? "Favourites" : locale === "de" ? "Favoriten" : "Favoritter"}</h3>
      </div>

      {loading ? (
        <p className="message-empty"><Loader2 size={15} className="spin" /> Henter favoritter…</p>
      ) : favorites.length ? (
        <>
          <ul className="portal-list">
            {favorites.map((favorite) => (
              <li key={favorite.ref || favorite.id}>
                <Building2 size={17} />
                <a href={href(locale, favorite)}>
                  <span>{favorite.title || favorite.ref || "Bolig"}</span>
                  <small>{[favorite.location, money(favorite.price, locale)].filter(Boolean).join(" · ")}</small>
                </a>
              </li>
            ))}
          </ul>
          {favorites.length > 1 && locale === "no" && (
            <a className="text-button" href="/sammenlign">
              Sammenlign boliger <ArrowRight size={15} />
            </a>
          )}
        </>
      ) : (
        <p className="message-empty">
          {locale === "en" ? "You have no saved favourites yet." : locale === "de" ? "Sie haben noch keine Favoriten gespeichert." : "Du har ikke lagret noen favoritter ennå."}
        </p>
      )}
    </article>
  );
}
