import type { Locale } from "@/lib/i18n";
import { getPropertyArea, type Property } from "@/lib/realtyflow";

export type PropertyConversionContent = {
  sellingIntro: string;
  keyReasons: string[];
  lifestyle: string;
  idealFor: string[];
  ctaReason: string;
  generated: boolean;
};

type StoredConversion = {
  selling_intro_no?: unknown;
  key_reasons_no?: unknown;
  lifestyle_no?: unknown;
  ideal_for_no?: unknown;
  cta_reason_no?: unknown;
  source_hash?: unknown;
};

function clean(value: unknown): string {
  return typeof value === "string" ? value.replace(/\s+/g, " ").trim() : "";
}

function textList(value: unknown): string[] {
  return Array.isArray(value) ? value.map(clean).filter(Boolean).slice(0, 6) : [];
}

function storedConversion(property: Property): StoredConversion | null {
  const raw = (property as Property & { conversion_no?: unknown }).conversion_no;
  if (!raw) return null;
  if (typeof raw === "string") {
    try {
      const parsed = JSON.parse(raw) as unknown;
      return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed as StoredConversion : null;
    } catch {
      return null;
    }
  }
  return typeof raw === "object" && !Array.isArray(raw) ? raw as StoredConversion : null;
}

function documentedFeatureLabels(property: Property, locale: Locale): string[] {
  const rawAmenities = (property as Property & { amenities_no?: unknown; garage?: unknown }).amenities_no;
  const amenities = Array.isArray(rawAmenities) ? rawAmenities.map(clean) : [];
  const hay = amenities.join(" ").toLowerCase();
  const labels: string[] = [];
  const add = (condition: boolean, no: string, en: string, de: string) => {
    if (condition) labels.push(locale === "en" ? en : locale === "de" ? de : no);
  };

  add(property.pool === true || /basseng|pool|piscina/.test(hay), "Basseng", "Pool", "Pool");
  add(/terrasse|terrace|terraza/.test(hay), "Terrasse", "Terrace", "Terrasse");
  add(/hage|garden|jard[ií]n/.test(hay), "Hage", "Garden", "Garten");
  add(/solarium/.test(hay), "Solarium", "Solarium", "Solarium");
  add((property as Property & { garage?: unknown }).garage === true || /garasje|garage|garaje/.test(hay), "Garasje", "Garage", "Garage");
  add(/parkering|parking|aparcamiento/.test(hay), "Parkering", "Parking", "Parkplatz");
  add(/heis|lift|ascensor/.test(hay), "Heis", "Lift", "Aufzug");
  add(/havutsikt|sea view|vistas al mar/.test(hay), "Havutsikt", "Sea view", "Meerblick");
  add(/aircondition|air conditioning|aire acondicionado/.test(hay), "Aircondition", "Air conditioning", "Klimaanlage");
  return Array.from(new Set(labels)).slice(0, 5);
}

function fallbackContent(property: Property, locale: Locale, town: string, typeLabel: string): PropertyConversionContent {
  const area = getPropertyArea(property);
  const features = documentedFeatureLabels(property, locale);
  const place = town || property.town || property.location || (locale === "de" ? "Spanien" : locale === "en" ? "Spain" : "Spania");
  const type = typeLabel || (locale === "de" ? "Immobilie" : locale === "en" ? "property" : "bolig");

  if (locale === "en") {
    const introFacts = [
      property.bedrooms ? `${property.bedrooms} bedrooms` : "",
      property.bathrooms ? `${property.bathrooms} bathrooms` : "",
      area ? `${Math.round(area)} m²` : "",
    ].filter(Boolean).join(", ");
    const reasons = [
      property.bedrooms ? `${property.bedrooms} separate bedrooms provide flexibility for family, guests or a home office.` : "",
      property.bathrooms && property.bathrooms > 1 ? `${property.bathrooms} bathrooms make everyday use easier when several people stay in the home.` : "",
      area ? `The stated living area is ${Math.round(area)} m².` : "",
      property.plot_size ? `The stated plot size is ${Math.round(property.plot_size)} m².` : "",
      ...features.map((feature) => `${feature} is stated in the property data.`),
    ].filter(Boolean).slice(0, 5);
    return {
      sellingIntro: `${type} in ${place}${introFacts ? ` with ${introFacts}` : ""}. ${features.length ? `The combination of ${features.slice(0, 3).join(", ").toLowerCase()} makes this property worth a closer look.` : "The layout, location and exact specification are worth comparing with the closest alternatives."}`,
      keyReasons: reasons,
      lifestyle: features.some((item) => /pool|terrace|garden|solarium/i.test(item))
        ? `${features.filter((item) => /pool|terrace|garden|solarium/i.test(item)).join(", ")} gives the home a clear outdoor-living focus. We would assess how this works in practice during a viewing.`
        : "The next step is to assess how the layout works in practice and what is actually included in the specification.",
      idealFor: [
        property.bedrooms && property.bedrooms >= 3 ? "Could suit a family or couple wanting several bedrooms." : "",
        property.bedrooms && property.bedrooms >= 2 ? "Could suit buyers wanting space for guests or a home office." : "",
        features.some((item) => /pool|terrace|garden|solarium/i.test(item)) ? "Could suit buyers who prioritise outdoor space." : "",
      ].filter(Boolean),
      ctaReason: "Request the brochure and floor plans and we will check current availability, what is included and how this home compares with relevant alternatives.",
      generated: false,
    };
  }

  if (locale === "de") {
    const introFacts = [
      property.bedrooms ? `${property.bedrooms} Schlafzimmer` : "",
      property.bathrooms ? `${property.bathrooms} Bäder` : "",
      area ? `${Math.round(area)} m²` : "",
    ].filter(Boolean).join(", ");
    const reasons = [
      property.bedrooms ? `${property.bedrooms} separate Schlafzimmer bieten Flexibilität für Familie, Gäste oder Homeoffice.` : "",
      property.bathrooms && property.bathrooms > 1 ? `${property.bathrooms} Bäder erleichtern die Nutzung, wenn mehrere Personen im Haus sind.` : "",
      area ? `Die angegebene Wohnfläche beträgt ${Math.round(area)} m².` : "",
      property.plot_size ? `Die angegebene Grundstücksfläche beträgt ${Math.round(property.plot_size)} m².` : "",
      ...features.map((feature) => `${feature} ist in den Immobiliendaten angegeben.`),
    ].filter(Boolean).slice(0, 5);
    return {
      sellingIntro: `${type} in ${place}${introFacts ? ` mit ${introFacts}` : ""}. ${features.length ? `Die Kombination aus ${features.slice(0, 3).join(", ")} macht die Immobilie für eine nähere Prüfung interessant.` : "Grundriss, Lage und genauer Leistungsumfang sollten mit den nächsten Alternativen verglichen werden."}`,
      keyReasons: reasons,
      lifestyle: features.some((item) => /Pool|Terrasse|Garten|Solarium/i.test(item))
        ? `${features.filter((item) => /Pool|Terrasse|Garten|Solarium/i.test(item)).join(", ")} geben der Immobilie einen deutlichen Außenbereich-Schwerpunkt. Wie gut das im Alltag funktioniert, würden wir bei einer Besichtigung prüfen.`
        : "Der nächste Schritt ist zu prüfen, wie der Grundriss im Alltag funktioniert und was tatsächlich im Leistungsumfang enthalten ist.",
      idealFor: [
        property.bedrooms && property.bedrooms >= 3 ? "Kann zu einer Familie oder einem Paar mit Wunsch nach mehreren Schlafzimmern passen." : "",
        property.bedrooms && property.bedrooms >= 2 ? "Kann zu Käufern passen, die Platz für Gäste oder Homeoffice wünschen." : "",
        features.some((item) => /Pool|Terrasse|Garten|Solarium/i.test(item)) ? "Kann zu Käufern passen, die Außenfläche priorisieren." : "",
      ].filter(Boolean),
      ctaReason: "Fordern Sie Exposé und Grundrisse an. Wir prüfen aktuelle Verfügbarkeit, enthaltene Leistungen und wie die Immobilie im Vergleich zu relevanten Alternativen abschneidet.",
      generated: false,
    };
  }

  const introFacts = [
    property.bedrooms ? `${property.bedrooms} soverom` : "",
    property.bathrooms ? `${property.bathrooms} bad` : "",
    area ? `${Math.round(area)} m²` : "",
  ].filter(Boolean).join(", ");
  const reasons = [
    property.bedrooms ? `${property.bedrooms} separate soverom gir fleksibilitet for familie, gjester eller hjemmekontor.` : "",
    property.bathrooms && property.bathrooms > 1 ? `${property.bathrooms} bad gjør boligen mer praktisk når flere bruker den samtidig.` : "",
    area ? `Oppgitt boligareal er ${Math.round(area)} m².` : "",
    property.plot_size ? `Tomten er oppgitt til ${Math.round(property.plot_size)} m².` : "",
    ...features.map((feature) => `${feature} er oppgitt i boligdataene.`),
  ].filter(Boolean).slice(0, 5);

  return {
    sellingIntro: `${type} i ${place}${introFacts ? ` med ${introFacts}` : ""}. ${features.length ? `Kombinasjonen av ${features.slice(0, 3).join(", ").toLowerCase()} gjør boligen verdt å se nærmere på.` : "Planløsning, beliggenhet og leveranse bør vurderes samlet mot de nærmeste alternativene."}`,
    keyReasons: reasons,
    lifestyle: features.some((item) => /basseng|terrasse|hage|solarium/i.test(item))
      ? `${features.filter((item) => /basseng|terrasse|hage|solarium/i.test(item)).join(", ")} gir boligen et tydelig utefokus. Hvordan dette fungerer i praksis er noe vi ville vurdert konkret på visning.`
      : "Neste steg er å vurdere hvordan planløsningen fungerer i praksis og hva som faktisk følger leveransen.",
    idealFor: [
      property.bedrooms && property.bedrooms >= 3 ? "Kan passe for familie eller par som ønsker flere soverom." : "",
      property.bedrooms && property.bedrooms >= 2 ? "Kan passe for kjøpere som ønsker plass til gjester eller hjemmekontor." : "",
      features.some((item) => /basseng|terrasse|hage|solarium/i.test(item)) ? "Kan passe for kjøpere som prioriterer uteareal." : "",
    ].filter(Boolean),
    ctaReason: "Be om komplett prospekt og plantegninger, så sjekker vi oppdatert tilgjengelighet, hva som faktisk er inkludert og hvordan boligen står seg mot relevante alternativer.",
    generated: false,
  };
}

export function getPropertyConversionContent(
  property: Property,
  locale: Locale,
  town: string,
  typeLabel: string,
): PropertyConversionContent {
  if (locale === "no") {
    const stored = storedConversion(property);
    if (stored) {
      const sellingIntro = clean(stored.selling_intro_no);
      const keyReasons = textList(stored.key_reasons_no);
      const lifestyle = clean(stored.lifestyle_no);
      const idealFor = textList(stored.ideal_for_no).slice(0, 4);
      const ctaReason = clean(stored.cta_reason_no);
      if (sellingIntro && keyReasons.length >= 3 && lifestyle && ctaReason) {
        return { sellingIntro, keyReasons, lifestyle, idealFor, ctaReason, generated: true };
      }
    }
  }
  return fallbackContent(property, locale, town, typeLabel);
}
