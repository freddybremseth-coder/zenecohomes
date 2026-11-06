"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { COOKIE_CONSENT_EVENT, readCookieConsent, saveCookieConsent } from "@/lib/cookie-consent";

const GA_ID = "G-CLD2P12KW2";

const COOKIE_TEXT = {
  no: {
    aria: "Valg av informasjonskapsler", title: "Vi respekterer personvernet ditt",
    explanation: "Vi bruker nødvendige informasjonskapsler for at nettstedet skal fungere. Med ditt samtykke kan vi også bruke analyse for å forbedre nettsiden. Markedsføring er valgfritt og ikke aktivert på nettstedet nå.",
    read: "Les mer i vår", policy: "informasjon om informasjonskapsler",
    necessary: "Nødvendige", necessaryInfo: "For sikkerhet og grunnleggende funksjoner. Alltid aktive.",
    analytics: "Analyse", analyticsInfo: "Google Analytics og måling av bruk av boligsidene.",
    marketing: "Markedsføring", marketingInfo: "Til eventuell fremtidig annonseringssporing. Ingen slike skript lastes nå.",
    reject: "Avvis", save: "Lagre valg", settings: "Innstillinger", accept: "Godta alle",
  },
  de: {
    aria: "Cookie-Einstellungen", title: "Wir respektieren Ihre Privatsphäre",
    explanation: "Wir verwenden notwendige Cookies, damit unsere Website funktioniert. Mit Ihrer Einwilligung können wir Analysedaten nutzen, um die Website zu verbessern. Marketing ist optional und derzeit nicht aktiviert.",
    read: "Weitere Informationen in unserer", policy: "Cookie-Richtlinie",
    necessary: "Notwendig", necessaryInfo: "Für Sicherheit und grundlegende Funktionen. Immer aktiv.",
    analytics: "Analyse", analyticsInfo: "Google Analytics und Nutzungsstatistiken unserer Immobilienseiten.",
    marketing: "Marketing", marketingInfo: "Für eine mögliche künftige Werbemessung. Derzeit werden keine solchen Skripte geladen.",
    reject: "Ablehnen", save: "Auswahl speichern", settings: "Einstellungen", accept: "Alle akzeptieren",
  },
  en: {
    aria: "Cookie preferences", title: "We respect your privacy",
    explanation: "We use essential cookies to keep the website working. With your consent, we may use analytics to improve it. Marketing cookies are optional and currently not active.",
    read: "Read more in our", policy: "cookie policy",
    necessary: "Essential", necessaryInfo: "For security and core functionality. Always enabled.",
    analytics: "Analytics", analyticsInfo: "Google Analytics and usage measurement on property pages.",
    marketing: "Marketing", marketingInfo: "Reserved for potential future advertising measurement. No such scripts are currently loaded.",
    reject: "Reject", save: "Save choices", settings: "Settings", accept: "Accept all",
  },
  es: {
    aria: "Preferencias de cookies", title: "Respetamos tu privacidad",
    explanation: "Utilizamos cookies necesarias para el funcionamiento del sitio web. Con tu consentimiento, podemos utilizar analítica para mejorarlo. El marketing es opcional y actualmente no está activado.",
    read: "Más información en nuestra", policy: "política de cookies",
    necessary: "Necesarias", necessaryInfo: "Para la seguridad y las funciones básicas. Siempre activas.",
    analytics: "Analítica", analyticsInfo: "Google Analytics y medición del uso de las páginas de propiedades.",
    marketing: "Marketing", marketingInfo: "Para posibles mediciones publicitarias futuras. Actualmente no se carga ningún script de este tipo.",
    reject: "Rechazar", save: "Guardar preferencias", settings: "Configuración", accept: "Aceptar todas",
  },
} as const;



export function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);
  const [locale, setLocale] = useState<keyof typeof COOKIE_TEXT>("no");
  const [settings, setSettings] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const pathLocale = window.location.pathname.split("/")[1];
    setLocale(pathLocale === "de" || pathLocale === "en" || pathLocale === "es" ? pathLocale : "no");
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
    // Basic Consent Mode v2: do not load Google's tag or send cookieless
    // pings before a visitor affirmatively opts in to analytics.
    const w = window as typeof window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void };
    // The inline head script owns the synchronous consent default and gtag queue.
    // Never overwrite gtag here: doing so can disrupt tag initialization.
    if (!w.gtag) return;

    const syncAnalytics = () => {
      const allowed = readCookieConsent()?.analytics === true;
      // Marketing tags are not in use. Keep all advertising signals denied.
      w.gtag?.("consent", "update", {
        analytics_storage: allowed ? "granted" : "denied",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      });
      if (!allowed || document.getElementById("zeneco-analytics-script")) return;
      w.gtag?.("js", new Date());
      w.gtag?.("config", GA_ID);
      const script = document.createElement("script");
      script.id = "zeneco-analytics-script";
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
      document.head.appendChild(script);
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
  const t = COOKIE_TEXT[locale];
  return (
    <div className="cookie-consent-backdrop">
      <section className="cookie-consent-panel" role="dialog" aria-modal="true" aria-label={t.aria}>
        <h2>{t.title}</h2>
        <p>{t.explanation}</p>
        <p>{t.read} <Link href="/informasjonskapsler">{t.policy}</Link>.</p>
        {settings && <div className="cookie-consent-options">
          <label><span><strong>{t.necessary}</strong><small>{t.necessaryInfo}</small></span><input type="checkbox" checked disabled /></label>
          <label><span><strong>{t.analytics}</strong><small>{t.analyticsInfo}</small></span><input type="checkbox" checked={analytics} onChange={(e) => setAnalytics(e.target.checked)} /></label>
          <label><span><strong>{t.marketing}</strong><small>{t.marketingInfo}</small></span><input type="checkbox" checked={marketing} onChange={(e) => setMarketing(e.target.checked)} /></label>
        </div>}
        <div className="cookie-consent-actions">
          <button type="button" onClick={() => choose({ analytics: false, marketing: false })}>{t.reject}</button>
          <button type="button" onClick={() => settings ? choose({ analytics, marketing }) : setSettings(true)}>{settings ? t.save : t.settings}</button>
          <button type="button" onClick={() => choose({ analytics: true, marketing: true })}>{t.accept}</button>
        </div>
      </section>
    </div>
  );
}
