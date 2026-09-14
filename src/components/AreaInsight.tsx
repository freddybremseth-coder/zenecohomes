import { Plane, Waves, CalendarDays, ThermometerSun } from "lucide-react";
import type { Locale } from "@/lib/i18n";

type Fact = { airport: string; coast: string; life: string; climate: string };

const DATA: Record<string, Record<Locale, Fact>> = {
  "costa-blanca-nord": {
    no: { airport: "Ca. 40–70 min til Alicante-Elche flyplass", coast: "Ved og nær Middelhavet", life: "Etablerte helårsområder", climate: "Mildt middelhavsklima" },
    de: { airport: "Ca. 40–70 Min. zum Flughafen Alicante-Elche", coast: "Am und nahe dem Mittelmeer", life: "Etablierte Ganzjahresorte", climate: "Mildes Mittelmeerklima" },
    en: { airport: "About 40–70 min to Alicante-Elche airport", coast: "On and near the Mediterranean", life: "Established year-round areas", climate: "Mild Mediterranean climate" },
  },
  "costa-blanca-sor": {
    no: { airport: "Ca. 15–50 min til Alicante-Elche flyplass", coast: "Nær strender og saltlaguner", life: "Store helårsmiljøer", climate: "Mildt vinterklima" },
    de: { airport: "Ca. 15–50 Min. zum Flughafen Alicante-Elche", coast: "Nahe Stränden und Salzlagunen", life: "Große Ganzjahres-Communities", climate: "Mildes Winterklima" },
    en: { airport: "About 15–50 min to Alicante-Elche airport", coast: "Near beaches and salt lagoons", life: "Large year-round communities", climate: "Mild winter climate" },
  },
  "costa-calida": {
    no: { airport: "Murcia (Corvera) – avstand varierer", coast: "Mar Menor og Middelhavet", life: "Roligere kystbyer", climate: "Varmt, tørt klima" },
    de: { airport: "Murcia (Corvera) – Entfernung je nach Ort", coast: "Mar Menor und Mittelmeer", life: "Ruhigere Küstenstädte", climate: "Warmes, trockenes Klima" },
    en: { airport: "Murcia (Corvera) – distance varies by area", coast: "Mar Menor and Mediterranean", life: "Quieter coastal towns", climate: "Warm, dry climate" },
  },
  innlandet: {
    no: { airport: "Flyplassavstand varierer etter område", coast: "Kystavstand varierer etter område", life: "Mange levende helårssamfunn", climate: "Mer utpreget innlandsklima" },
    de: { airport: "Flughafenentfernung je nach Gebiet", coast: "Entfernung zur Küste je nach Gebiet", life: "Viele lebendige Ganzjahresorte", climate: "Ausgeprägteres Inlandklima" },
    en: { airport: "Airport distance varies by area", coast: "Coast distance varies by area", life: "Many active year-round communities", climate: "More pronounced inland climate" },
  },
};

const HEADING: Record<Locale, string> = { no: "Om området", de: "Über die Gegend", en: "About the area" };

export function AreaInsight({ regionKey, locale = "no" }: { regionKey?: string; locale?: Locale }) {
  const fact = (regionKey && DATA[regionKey]?.[locale]) || null;
  if (!fact) return null;
  const items = [
    { icon: <Plane />, label: fact.airport },
    { icon: <Waves />, label: fact.coast },
    { icon: <CalendarDays />, label: fact.life },
    { icon: <ThermometerSun />, label: fact.climate },
  ];
  return (
    <div className="area-insight">
      <p className="eyebrow">{HEADING[locale]}</p>
      <div className="area-insight-grid">
        {items.map((it, i) => (
          <span key={i}>
            {it.icon} {it.label}
          </span>
        ))}
      </div>
    </div>
  );
}
