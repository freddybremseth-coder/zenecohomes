import { Check } from "lucide-react";
import {
  PropertyConversionCta,
  PropertyConversionViewTracker,
} from "@/components/PropertyConversionTracking";
import type { Locale } from "@/lib/i18n";
import { getPropertyConversionContent } from "@/lib/propertyConversion";
import { getPropertyRef, type Property } from "@/lib/realtyflow";
import styles from "./PropertyConversionStory.module.css";

const COPY: Record<Locale, {
  eyebrow: string;
  heading: string;
  lifestyle: string;
  fit: string;
  cta: string;
}> = {
  no: {
    eyebrow: "Førsteinntrykk",
    heading: "Derfor er denne boligen interessant",
    lifestyle: "Hvordan boligen kan fungere i hverdagen",
    fit: "Kan passe for",
    cta: "Få prospekt, plantegninger og vår vurdering",
  },
  en: {
    eyebrow: "First impression",
    heading: "Why this property is worth a closer look",
    lifestyle: "How the home could work day to day",
    fit: "Could suit",
    cta: "Get the brochure, floor plans and our assessment",
  },
  de: {
    eyebrow: "Erster Eindruck",
    heading: "Warum diese Immobilie eine nähere Prüfung wert ist",
    lifestyle: "Wie die Immobilie im Alltag funktionieren kann",
    fit: "Kann passen zu",
    cta: "Exposé, Grundrisse und unsere Einschätzung erhalten",
  },
};

export function PropertyConversionStory({
  property,
  locale = "no",
  town,
  typeLabel,
}: {
  property: Property;
  locale?: Locale;
  town: string;
  typeLabel: string;
}) {
  const copy = COPY[locale];
  const content = getPropertyConversionContent(property, locale, town, typeLabel);
  const propertyRef = getPropertyRef(property);
  const copySource = content.generated ? "realtyflow" as const : "fallback" as const;

  return (
    <section className={styles.story} data-conversion-copy={copySource}>
      <PropertyConversionViewTracker propertyRef={propertyRef} copySource={copySource} />
      <p className={styles.eyebrow}>{copy.eyebrow}</p>
      <h2>{copy.heading}</h2>
      <p className={styles.lead}>{content.sellingIntro}</p>

      {content.keyReasons.length > 0 && (
        <div className={styles.reasons}>
          {content.keyReasons.map((reason) => (
            <div className={styles.reason} key={reason}>
              <Check size={17} aria-hidden="true" />
              <span>{reason}</span>
            </div>
          ))}
        </div>
      )}

      <div className={styles.context}>
        <div>
          <h3>{copy.lifestyle}</h3>
          <p>{content.lifestyle}</p>
        </div>
        {content.idealFor.length > 0 && (
          <div>
            <h3>{copy.fit}</h3>
            <div className={styles.fit}>
              {content.idealFor.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
        )}
      </div>

      <div className={styles.ctaRow}>
        <PropertyConversionCta
          className={styles.cta}
          label={copy.cta}
          propertyRef={propertyRef}
          copySource={copySource}
        />
        <p>{content.ctaReason}</p>
      </div>
    </section>
  );
}
