import { Plane, Waves, CalendarDays, ThermometerSun } from "lucide-react";
import type { Locale } from "@/lib/i18n";

type Fact = { airport: string; coast: string; life: string; climate: string };

const DATA: Record<string, Record<Locale, Fact>> = {
  "costa-blanca-nord": {
    no: { airport: "45–75 min til Alicante flyplass", coast: "Ved og nær Middelhavet", life: "Etablerte helårsområder", climate: "Mildt middelhavsklima" },
    de: { airport: "45–75 Min. zum Flughafen Alicante", coast: "Am und nahe dem Mittelmeer", life: "Etablierte Ganzjahresorte", climate: "Mildes Mittelmeerklima" },
    en: { airport: "45–75 min to Alicante airport", coast: "On and near the Mediterranean", life: "Established year-round areas", climate: "Mild Mediterranean climate" },
  },
  "costa-blanca-sor": {
    no: { airport: "30–45 min til Alicante flyplass", coast: "Nær strender og saltlaguner", life: "Store helårsmiljøer", climate: "Blant Europas mildeste vintre" },
    de: { airport: "30–45 Min. zum Flughafen Alicante", coast: "Nahe Stränden und Salzlagunen", life: "Große Ganzjahres-Communities", climate: "Mildeste Winter Europas" },
    en: { airport: "30–45 min to Alicante airport", coast: "Near beaches and salt lagoons", life: "Large year-round communities", climate: "Among Europe's mildest winters" },
  },
  "costa-calida": {
    no: { airport: "Murcia (Corvera) i nærheten", coast: "Mar Menor og Middelhavet", life: "Roligere kystbyer", climate: "Varmt, tørt klima" },
    de: { airport: "Flughafen Murcia (Corvera) nah", coast: "Mar Menor und Mittelmeer", life: "Ruhigere Küstenstädte", climate: "Warmes, trockenes Klima" },
    en: { airport: "Murcia (Corvera) airport nearby", coast: "Mar Menor and Mediterranean", life: "Quieter coastal towns", climate: "Warm, dry climate" },
  },
  innlandet: {
    no: { airport: "30–60 min til Alicante flyplass", coast: "Kysten under en time unna", life: "Landsbyer som lever hele året", climate: "Friskere enn kysten, kjøligere netter" },
    de: { airport: "30–60 Min. zum Flughafen Alicante", coast: "Küste in unter einer Stunde", life: "Ganzjährig lebendige Dörfer", climate: "Frischer als die Küste, kühlere Nächte" },
    en: { airport: "30–60 min to Alicante airport", coast: "Coast under an hour away", life: "Villages alive all year", climate: "Fresher than the coast, cooler nights" },
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
