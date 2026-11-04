"use client";

export function CookieSettingsButton() {
  return <button type="button" className="button button-secondary" onClick={() => window.dispatchEvent(new Event("zeneco:open-cookie-settings"))}>Endre valg for informasjonskapsler</button>;
}
