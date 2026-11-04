"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { COOKIE_CONSENT_EVENT, readCookieConsent, saveCookieConsent } from "@/lib/cookie-consent";

const GA_ID = "G-CLD2P12KW2";

export function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);
  const [settings, setSettings] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const existing = readCookieConsent();
    setVisible(!existing);
    setAnalytics(existing?.analytics ?? false);
    setMarketing(existing?.marketing ?? false);
    const reopen = () => {
      const latest = readCookieConsent();
      setAnalytics(latest?.analytics ?? false);
      setMarketing(latest?.marketing ?? false);
      setSettings(true);
      setVisible(true);
    };
    window.addEventListener("zeneco:open-cookie-settings", reopen);
    return () => window.removeEventListener("zeneco:open-cookie-settings", reopen);
  }, []);

  useEffect(() => {
    const syncAnalytics = () => {
      if (!readCookieConsent()?.analytics) return;
      const w = window as typeof window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void };
      w.dataLayer = w.dataLayer || [];
      w.gtag = (...args: unknown[]) => { w.dataLayer?.push(args); };
      w.gtag("js", new Date());
      w.gtag("config", GA_ID);
      if (!document.getElementById("zeneco-analytics-script")) {
        const script = document.createElement("script");
        script.id = "zeneco-analytics-script";
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
        document.head.appendChild(script);
      }
    };
    syncAnalytics();
    window.addEventListener(COOKIE_CONSENT_EVENT, syncAnalytics);
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, syncAnalytics);
  }, []);

  function choose(next: { analytics: boolean; marketing: boolean }) {
    saveCookieConsent(next);
    // Remove previously enabled analytics cookies when consent is withdrawn.
    if (!next.analytics) {
      for (const cookie of document.cookie.split(";")) {
        const name = cookie.split("=")[0]?.trim();
        if (name === "_ga" || name?.startsWith("_ga_")) {
          document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
          document.cookie = `${name}=; Max-Age=0; path=/; domain=.zenecohomes.com; SameSite=Lax`;
        }
      }
      // Existing GA scripts cannot be unloaded reliably; restart without tracking.
      if (document.getElementById("zeneco-analytics-script")) window.location.reload();
    }
    setVisible(false);
    setSettings(false);
  }

  if (!visible) return null;
  return (
    <div className="cookie-consent-backdrop">
      <section className="cookie-consent-panel" role="dialog" aria-modal="true" aria-label="Valg av informasjonskapsler">
        <h2>Vi respekterer personvernet ditt</h2>
        <p>Vi bruker nødvendige informasjonskapsler for at nettstedet skal fungere. Med ditt samtykke kan vi også bruke analyse for å forbedre nettsiden. Markedsføring er valgfritt og ikke aktivert på nettstedet nå.</p>
        <p>Les mer i vår <Link href="/informasjonskapsler">informasjon om informasjonskapsler</Link>.</p>
        {settings && <div className="cookie-consent-options">
          <label><span><strong>Nødvendige</strong><small>For sikkerhet og grunnleggende funksjoner. Alltid aktive.</small></span><input type="checkbox" checked disabled /></label>
          <label><span><strong>Analyse</strong><small>Google Analytics og måling av bruk av boligsidene.</small></span><input type="checkbox" checked={analytics} onChange={(e) => setAnalytics(e.target.checked)} /></label>
          <label><span><strong>Markedsføring</strong><small>Til eventuell fremtidig annonseringssporing. Ingen slike skript lastes nå.</small></span><input type="checkbox" checked={marketing} onChange={(e) => setMarketing(e.target.checked)} /></label>
        </div>}
        <div className="cookie-consent-actions">
          <button type="button" onClick={() => choose({ analytics: false, marketing: false })}>Avvis</button>
          <button type="button" onClick={() => settings ? choose({ analytics, marketing }) : setSettings(true)}>{settings ? "Lagre valg" : "Innstillinger"}</button>
          <button type="button" onClick={() => choose({ analytics: true, marketing: true })}>Godta alle</button>
        </div>
      </section>
    </div>
  );
}
