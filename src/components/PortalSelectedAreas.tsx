"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { ArrowRight, MapPin } from "lucide-react";
import { supabase } from "@/lib/supabase-browser";

type AreaProfile = {
  name?: string;
  slug?: string;
  region?: string;
  hero_blurb?: string;
  description?: string;
  highlights?: string[];
  photo_url?: string;
};

function normalize(value: unknown) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

const northNames = new Set([
  "albir","altea","benidorm","benissa","calpe","denia","denia","el campello",
  "finestrat","la nucia","moraira","polop","villajoyosa","xalo jalon","javea","xabia",
]);

function regionSlug(profile: AreaProfile) {
  const region = normalize(profile.region);
  const name = normalize(profile.name);
  if (region.includes("costa blanca sor")) return "costa-blanca-sor";
  if (region.includes("costa calida")) return "costa-calida";
  if (region.includes("costa blanca nord")) return "costa-blanca-nord";
  if (region.includes("innland")) return "innlandet";
  if (northNames.has(name)) return "costa-blanca-nord";
  return "";
}

function profileHref(profile: AreaProfile) {
  const region = regionSlug(profile);
  if (!region || !profile.slug) return `/eiendommer?area=${encodeURIComponent(profile.name || "")}`;
  return `/omrader/${region}/${profile.slug}`;
}

export function PortalSelectedAreas() {
  const [profiles, setProfiles] = useState<AreaProfile[]>([]);
  const [preferences, setPreferences] = useState<Record<string, unknown>>({});
  const [ready, setReady] = useState(false);

  const load = useCallback(async () => {
    if (!supabase) return;
    const { data } = await supabase.auth.getSession();
    const token = data.session?.access_token;
    if (!token) return;

    try {
      const [prefsRes, areasRes] = await Promise.all([
        fetch("/api/portal/preferences", {
          headers: { Authorization: `Bearer ${token}` },
          cache: "no-store",
        }),
        fetch("/api/portal/areas", { cache: "no-store" }),
      ]);
      const prefs = await prefsRes.json().catch(() => ({}));
      const areas = await areasRes.json().catch(() => ({}));
      if (prefsRes.ok) setPreferences(prefs.preferences || {});
      if (areasRes.ok) setProfiles(Array.isArray(areas.profiles) ? areas.profiles : []);
    } finally {
      setReady(true);
    }
  }, []);

  useEffect(() => {
    void load();
    const onUpdate = (event: Event) => {
      const detail = (event as CustomEvent<Record<string, unknown>>).detail;
      if (detail) setPreferences(detail);
    };
    window.addEventListener("zeneco:portal-preferences-updated", onUpdate);
    return () => window.removeEventListener("zeneco:portal-preferences-updated", onUpdate);
  }, [load]);

  const selected = useMemo(() => {
    const areaText = String(preferences.area || "");
    const regionText = normalize(preferences.region);
    const tokens = areaText
      .split(/[,;/\n]+/)
      .map((item) => normalize(item))
      .filter(Boolean);

    if (tokens.length) {
      return profiles
        .filter((profile) => {
          const name = normalize(profile.name);
          const slug = normalize(profile.slug);
          return tokens.some((token) => name.includes(token) || token.includes(name) || slug.includes(token));
        })
        .slice(0, 4);
    }

    if (regionText) {
      return profiles
        .filter((profile) => {
          const profileRegion = normalize(profile.region);
          if (profileRegion.includes(regionText) || regionText.includes(profileRegion)) return true;
          if (regionText.includes("costa blanca nord") && northNames.has(normalize(profile.name))) return true;
          return false;
        })
        .slice(0, 3);
    }

    return [];
  }, [profiles, preferences]);

  if (!ready || !selected.length) return null;

  return (
    <section className="portal-selected-areas" aria-labelledby="portal-selected-areas-title">
      <div className="portal-selected-areas-heading">
        <div>
          <p className="eyebrow">Områdene du vurderer</p>
          <h2 id="portal-selected-areas-title">Bli bedre kjent med områdene</h2>
          <p>Områdevalget er ofte minst like viktig som selve boligen. Her er en kort oversikt over stedene som ligger i profilen din.</p>
        </div>
      </div>

      <div className="portal-selected-area-grid">
        {selected.map((profile) => {
          const intro = profile.hero_blurb || String(profile.description || "").split(/\n\n+/)[0];
          const highlights = Array.isArray(profile.highlights) ? profile.highlights.slice(0, 4) : [];
          return (
            <article className="portal-selected-area-card" key={profile.slug || profile.name}>
              <div className="portal-selected-area-title">
                <MapPin size={18} />
                <div>
                  <h3>{profile.name}</h3>
                  {profile.region && <small>{profile.region}</small>}
                </div>
              </div>
              {intro && <p>{intro}</p>}
              {highlights.length > 0 && (
                <ul>
                  {highlights.map((item) => <li key={item}>{item}</li>)}
                </ul>
              )}
              <a className="text-button" href={profileHref(profile)}>
                Les mer om {profile.name} <ArrowRight size={15} />
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}
