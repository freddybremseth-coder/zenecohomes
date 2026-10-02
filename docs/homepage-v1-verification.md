# Forside v1 – kontroll før merge

Kontrollert 2. oktober 2026 mot lokal produksjonsbuild på `http://localhost:3100`.
Basert på `main` ved `288e5e3`.

## Kort diff

- Forsiden følger rekkefølgen hero, kundeomtaler, utvalgte boliger, områder, prosesskort, rådgivere, kontakt og footer.
- Forsidens navigasjon har «Meny» og kompakt språkdropdown. Øvrige sider beholder eksisterende navigasjon.
- Hero og metadata bruker bestilt tekst. Boligmatch-knappen går til den eksisterende flyten på `/eiendommer#boligmatch`.
- Kundeomtaler gjenbrukes ordrett, med én synlig omtale, forrige/neste og touch-sveiping. Andre sider beholder omtalegridet.
- Seks boliger hentes dynamisk fra eksisterende RealtyFlow-query; eksisterende PropertyCard gjenbrukes i et jevnt responsivt rutenett.
- Fire prosesskort og to likeverdige rådgiverkort er lagt til.
- Energisegmentet er flyttet uendret til rett under boligmatchen på `/eiendommer`.
- `/slik-hjelper-vi-deg` får permanent videresending til eksisterende `/kjopsprosessen`, siden den ønskede URL-en ikke fantes.
- SEO-audit validerer den bestilte metadata-teksten eksakt på forsiden. Generelle lengdekrav gjelder fortsatt andre sider.
- Hero-brødtekst, områdedata, kontaktseksjon, schema, analytics og tracking er bevart. Ingen eksisterende sider eller delte komponenter er slettet.

## Verifisert

- `npm run build`: bestått, inkludert SEO metadata- og strukturkontroll.
- `npx tsc --noEmit`: bestått.
- `node --test tests/*.test.mjs`: 7/7 bestått.
- `git diff --check`: bestått.
- Renderte metadata er eksakt som bestilt; én H1, seks H2 i korrekt rekkefølge, H3 på kortene. Canonical/hreflang og JSON-LD beholdt.
- 32 interne lenkemål (inkludert språk, alle seks boligkort og navigasjon) svarte HTTP 200 etter eventuelle redirects. Ingen nye 404-er.
- Keyholding svarte HTTP 200; klikk åpnet `https://care.zenecohomes.com/` i ny fane.
- Meny og språkdropdown åpner/lukker med klikk; Escape lukker. Mobilbytte mellom dropdowns er kontrollert etter retting av en fokus-/layoutfeil.
- Omtaler: forrige, neste, rundgang og native touch-sveiping via Chromium CDP bestått; alltid én synlig omtale.
- Hero-CTA lander ved boligmatchen; energisegmentet er neste seksjon. Freddy-, Andrea- og bookinglenker er klikket og verifisert. Språkbytte til engelsk er klikket og verifisert.
- Hele forsiden er visuelt inspisert på desktop, nettbrett og mobil. Kontrollbredder: 1440, 1024, 768, 390 og 320 px. Ingen horisontal overflow eller ødelagte bildekilder. Seks dynamiske boligkort på alle bredder.
- Nettleserkonsollen hadde ingen JavaScript-feil. CSS-preload-advarsler forekom under navigasjon.
- Hero-brødtekst, kontaktseksjon og alle omtaletekster er også sammenlignet maskinelt med basen og er uendret.

## Gjenstår før merge

**Andrea-portrett mangler.** Ingen egnet bildefil eller bildekilde finnes i prosjektet. Kortet bruker en synlig ATK-plassholder til brukeren har oppgitt bildet. Rådgiverseksjonen må visuelt kontrolleres igjen når bildet er lagt inn. Oppgaven er derfor ikke ferdig og PR skal forbli utkast.

**Eksisterende lint-feil:** `npm run lint` kjører `next lint`, som ikke støttes av prosjektets Next.js 16.2.4. Kommandoen avslutter med `Invalid project directory provided ... /lint` før kode analyseres. Samme script finnes i basen; ingen lint-konfigurasjon er endret som del av forsideoppgaven.

Det er ikke sendt testhenvendelser til CRM eller booking. Eksisterende skjemaer er bevart; navigasjonen frem til dem er verifisert.

## Lokale kontrollfiler

Skjermbilder ligger i arbeidskopiens `output/playwright/` og er ikke committet:

- `desktop-full.png`, `tablet-full.png`, `mobile-full.png`, `small-mobile-full.png`, `small-desktop-full.png`
- `desktop-menu.png`, `desktop-language.png`, `mobile-menu.png`, `mobile-language.png`, `mobile-swipe.png`
- `small-desktop-hero.png`, `mobile-process-viewport.png`, `mobile-advisors-viewport.png`, `mobile-footer-viewport.png`
- `mobile-boligmatch.png`, `mobile-energy.png`

Ingen merge eller produksjonspublisering er utført.
