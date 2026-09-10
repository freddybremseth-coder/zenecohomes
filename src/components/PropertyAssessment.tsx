import { ShieldCheck } from "lucide-react";
import { PropertyConversionStory } from "@/components/PropertyConversionStory";
import type { Locale } from "@/lib/i18n";
import { getPropertyArea, getPropertyRef, type Property } from "@/lib/realtyflow";
import { FLAGSHIP_HEADING, getFlagshipAssessment } from "@/lib/flagshipAssessments";

type Bucket = "villa" | "leilighet" | "penthouse" | "rekkehus" | "bungalow" | "default";

function bucketOf(property: Property): Bucket {
  const t = String(property.property_type || property.type || "").toLowerCase();
  if (t.includes("penthouse")) return "penthouse";
  if (t.includes("villa") || t.includes("detached")) return "villa";
  if (t.includes("bungalow")) return "bungalow";
  if (t.includes("rekkehus") || t.includes("town") || t.includes("semi") || t.includes("quad") || t.includes("terraced")) return "rekkehus";
  if (t.includes("leilighet") || t.includes("apart") || t.includes("studio") || t.includes("flat") || t.includes("penth")) return "leilighet";
  return "default";
}

const LOCALE_TAG: Record<Locale, string> = { no: "nb-NO", en: "en-GB", de: "de-DE" };

const LABELS: Record<Locale, {
  heading: string;
  basis: string;
  check: string;
  view: string;
  firstAssessment: string;
  manualNote: string;
}> = {
  no: {
    heading: "Zen Eco Homes' førstevurdering",
    basis: "Det som skiller boligen i dataene",
    check: "Dette ville vi kontrollert før reservasjon",
    view: "Vår vurdering",
    firstAssessment: "Faktabasert førstevurdering fra oppgitte boligdata",
    manualNote: "Manuelt vurdert",
  },
  en: {
    heading: "Zen Eco Homes' first assessment",
    basis: "What stands out in the property data",
    check: "What we would verify before reservation",
    view: "Our view",
    firstAssessment: "Fact-led first assessment based on supplied property data",
    manualNote: "Manually reviewed",
  },
  de: {
    heading: "Ersteinschätzung von Zen Eco Homes",
    basis: "Was in den Immobiliendaten auffällt",
    check: "Was wir vor einer Reservierung prüfen würden",
    view: "Unsere Einschätzung",
    firstAssessment: "Faktenbasierte Ersteinschätzung aus den vorliegenden Immobiliendaten",
    manualNote: "Manuell geprüft",
  },
};

const TYPE_CHECK: Record<Bucket, Record<Locale, string>> = {
  villa: {
    no: "situasjonsplan og tomtegrense, sol gjennom dagen, avstand og innsyn mot naboer, samt om planlagt bygging rundt eiendommen kan påvirke utsikt eller privatliv",
    en: "the site plan and plot boundaries, sun throughout the day, privacy from neighbours, and whether future building nearby could affect views or privacy",
    de: "Lageplan und Grundstücksgrenzen, Sonnenverlauf, Privatsphäre zu Nachbarn sowie mögliche künftige Bebauung in der Umgebung",
  },
  leilighet: {
    no: "eksakt etasje og orientering, felleskostnader, parkering/bod, innsyn og hvilke fellesområder som faktisk følger boligen",
    en: "the exact floor and orientation, community fees, parking/storage, overlooking and which communal facilities actually belong to the property",
    de: "genaue Etage und Ausrichtung, Gemeinschaftskosten, Stellplatz/Abstellraum, Einsehbarkeit und die tatsächlich enthaltenen Gemeinschaftsbereiche",
  },
  penthouse: {
    no: "hvor mye av terrassen som er privat og dokumentert, sol og vind, innsyn, heis/adkomst og de løpende felleskostnadene",
    en: "how much of the terrace is private and documented, sun and wind exposure, privacy, lift/access and ongoing community fees",
    de: "welcher Teil der Terrasse privat und dokumentiert ist, Sonne und Wind, Privatsphäre, Aufzug/Zugang und laufende Gemeinschaftskosten",
  },
  rekkehus: {
    no: "grensen mellom privat og felles uteareal, parkering, felleskostnader, lysforhold og hvor tett nabobebyggelsen oppleves i praksis",
    en: "the boundary between private and communal outdoor space, parking, community fees, natural light and how close neighbouring homes feel in practice",
    de: "Abgrenzung von privatem und gemeinschaftlichem Außenbereich, Parken, Gemeinschaftskosten, Lichtverhältnisse und tatsächliche Nähe der Nachbarbebauung",
  },
  bungalow: {
    no: "privat uteareal, nivå/adkomst, orientering, fellesområder og om planløsningen fungerer like godt i hverdagen som på ferie",
    en: "private outdoor space, level/access, orientation, communal areas and whether the layout works as well for daily life as it does for holidays",
    de: "privater Außenbereich, Niveau/Zugang, Ausrichtung, Gemeinschaftsflächen und ob der Grundriss im Alltag ebenso gut funktioniert wie im Urlaub",
  },
  default: {
    no: "plantegning, orientering, leveransebeskrivelse, hva som faktisk er inkludert og forholdene rundt selve eiendommen",
    en: "the floor plan, orientation, specification, what is actually included and the immediate surroundings of the property",
    de: "Grundriss, Ausrichtung, Baubeschreibung, tatsächlich enthaltene Leistungen und das unmittelbare Umfeld der Immobilie",
  },
};

const REGION_CHECK: Record<string, Record<Locale, string>> = {
  "costa-blanca-nord": {
    no: "På Costa Blanca Nord ville vi i tillegg sammenlignet høyde/terreng, adkomst og reell kjøreavstand til hverdagsservice – ikke bare utsikten.",
    en: "On the Costa Blanca North we would also compare elevation/terrain, access and real driving time to everyday services — not only the view.",
    de: "An der Costa Blanca Nord würden wir zusätzlich Höhenlage/Gelände, Zufahrt und die reale Fahrzeit zur Alltagsversorgung vergleichen – nicht nur die Aussicht.",
  },
  "costa-blanca-sor": {
    no: "På Costa Blanca Sør er mikrobeliggenheten viktig: vi ville sett på hva som finnes og planlegges rundt prosjektet, og hvordan området fungerer utenfor høysesong.",
    en: "On the Costa Blanca South, micro-location matters: we would look at what already exists and what is planned around the development, and how the area works outside high season.",
    de: "An der Costa Blanca Süd ist die Mikrolage entscheidend: Wir würden prüfen, was rund um das Projekt bereits vorhanden oder geplant ist und wie das Gebiet außerhalb der Hochsaison funktioniert.",
  },
  "costa-calida": {
    no: "På Costa Cálida ville vi sammenlignet prosjektets ferdigstillelse, felleskostnader, nærservice og reell kjøreavstand til kyst og by før vi vurderte pris mot alternativer.",
    en: "On the Costa Cálida we would compare project completion, community fees, nearby services and real driving time to coast and town before judging price against alternatives.",
    de: "An der Costa Cálida würden wir Fertigstellungsstand, Gemeinschaftskosten, Nahversorgung und reale Fahrzeiten zu Küste und Stadt vergleichen, bevor wir den Preis einordnen.",
  },
  innlandet: {
    no: "I innlandet ville vi lagt ekstra vekt på regulering, lovlig adkomst, vann, strøm og tomtens faktiske byggbarhet før selve huset vurderes.",
    en: "Inland, we would put extra weight on zoning, legal access, water, electricity and the plot's actual buildability before judging the house itself.",
    de: "Im Inland würden wir vor der Bewertung des Hauses besonders auf Baurecht, legale Zufahrt, Wasser, Strom und die tatsächliche Bebaubarkeit des Grundstücks achten.",
  },
};

function townInsight(town: string, locale: Locale): string | null {
  const t = town.toLowerCase();
  if (t.includes("orihuela")) {
    return {
      no: "I Orihuela Costa kan to boliger med samme poststed ha ganske ulik hverdag; avstanden mellom urbanisasjon, strand, butikker og golf bør derfor vurderes konkret.",
      en: "In Orihuela Costa, two homes with the same postal area can offer very different day-to-day living; the real distance between the urbanisation, beach, shops and golf should be checked specifically.",
      de: "In Orihuela Costa können zwei Immobilien im selben Postgebiet im Alltag sehr unterschiedlich funktionieren; die tatsächlichen Wege zwischen Urbanisation, Strand, Einkauf und Golf sollten konkret geprüft werden.",
    }[locale];
  }
  if (t.includes("altea")) {
    return {
      no: "I Altea er høyde, adkomst og nabotomtenes byggemuligheter ofte like viktige som selve utsikten.",
      en: "In Altea, elevation, access and the building potential of neighbouring plots can matter as much as the view itself.",
      de: "In Altea sind Höhenlage, Zufahrt und die Bebaubarkeit der Nachbargrundstücke oft ebenso wichtig wie die Aussicht selbst.",
    }[locale];
  }
  if (t.includes("finestrat")) {
    return {
      no: "I Finestrat ville vi sett nøye på orientering, høyde, vind og hvordan den videre utbyggingen rundt prosjektet påvirker utsikt og privatliv.",
      en: "In Finestrat, we would look closely at orientation, elevation, wind and how further development around the project could affect views and privacy.",
      de: "In Finestrat würden wir Ausrichtung, Höhenlage, Wind und die Auswirkungen weiterer Bebauung auf Aussicht und Privatsphäre genau prüfen.",
    }[locale];
  }
  if (t.includes("pinoso") || t.includes("aspe")) {
    return {
      no: "Her er tomt og infrastruktur en større del av beslutningen: dokumentert byggbarhet, vann, strøm, adkomst og totalpris må vurderes samlet.",
      en: "Here, the plot and infrastructure form a bigger part of the decision: documented buildability, water, electricity, access and total cost should be assessed together.",
      de: "Hier sind Grundstück und Infrastruktur ein größerer Teil der Entscheidung: dokumentierte Bebaubarkeit, Wasser, Strom, Zufahrt und Gesamtkosten sollten zusammen bewertet werden.",
    }[locale];
  }
  return null;
}

function formatNumber(value: number, locale: Locale) {
  return new Intl.NumberFormat(LOCALE_TAG[locale], { maximumFractionDigits: 0 }).format(value);
}

function buildFacts(property: Property, locale: Locale, validEnergy: string): string[] {
  const area = getPropertyArea(property);
  const facts: string[] = [];

  if (property.bedrooms) {
    facts.push(locale === "no" ? `${property.bedrooms} soverom` : locale === "en" ? `${property.bedrooms} bedrooms` : `${property.bedrooms} Schlafzimmer`);
  }
  if (property.bathrooms) {
    facts.push(locale === "no" ? `${property.bathrooms} bad` : locale === "en" ? `${property.bathrooms} bathrooms` : `${property.bathrooms} Bäder`);
  }
  if (area) facts.push(`${formatNumber(area, locale)} m²`);
  if (property.plot_size) {
    facts.push(locale === "no" ? `tomt ${formatNumber(property.plot_size, locale)} m²` : locale === "en" ? `${formatNumber(property.plot_size, locale)} m² plot` : `Grundstück ${formatNumber(property.plot_size, locale)} m²`);
  }
  if (property.terrace_size) {
    facts.push(locale === "no" ? `terrasse ${formatNumber(property.terrace_size, locale)} m²` : locale === "en" ? `${formatNumber(property.terrace_size, locale)} m² terrace` : `Terrasse ${formatNumber(property.terrace_size, locale)} m²`);
  }
  if (property.pool) facts.push(locale === "no" ? "basseng oppgitt" : locale === "en" ? "pool stated" : "Pool angegeben");
  if (validEnergy) facts.push(locale === "no" ? `energiklasse ${validEnergy}` : locale === "en" ? `energy rating ${validEnergy}` : `Energieklasse ${validEnergy}`);

  if (property.price && area) {
    const perSqm = Math.round(property.price / area);
    facts.push(locale === "no" ? `ca. €${formatNumber(perSqm, locale)}/m²` : locale === "en" ? `about €${formatNumber(perSqm, locale)}/m²` : `ca. €${formatNumber(perSqm, locale)}/m²`);
  }

  return facts.slice(0, 7);
}

function buildConclusion(property: Property, bucket: Bucket, locale: Locale, validEnergy: string, town: string): string {
  const area = getPropertyArea(property);
  const hasOutdoor = Boolean(property.plot_size || property.terrace_size || property.pool);
  const strongEnergy = /^[AB][+-]?$/i.test(validEnergy);

  if (bucket === "villa" && hasOutdoor) {
    return {
      no: `Dette er en bolig hvor utearealet bør få like mye oppmerksomhet som selve huset${area ? ` på ${formatNumber(area, locale)} m²` : ""}. Hvis sol, privatliv og tomtesituasjon holder det bildene lover, er den verdt en grundig visning – men vi ville ikke reservert før situasjonsplan og leveranseomfang er kontrollert.`,
      en: `This is a property where the outdoor space deserves as much attention as the house itself${area ? ` at ${formatNumber(area, locale)} m²` : ""}. If sun, privacy and the plot situation match the presentation, it is worth a thorough viewing — but we would not reserve before checking the site plan and exact specification.`,
      de: `Bei dieser Immobilie verdient der Außenbereich mindestens so viel Aufmerksamkeit wie das Haus selbst${area ? ` mit ${formatNumber(area, locale)} m²` : ""}. Wenn Sonne, Privatsphäre und Grundstückssituation der Präsentation entsprechen, lohnt sich eine gründliche Besichtigung – reservieren würden wir aber erst nach Prüfung von Lageplan und Leistungsumfang.`,
    }[locale];
  }

  if (strongEnergy) {
    return {
      no: `Energiklasse ${validEnergy} er et positivt dokumentert punkt. Vi ville likevel brukt plantegning, orientering og leveransebeskrivelse til å avgjøre om boligen faktisk er bedre enn de nærmeste alternativene i ${town}.`,
      en: `Energy rating ${validEnergy} is a positive documented point. We would still use the floor plan, orientation and specification to decide whether this home is genuinely stronger than the closest alternatives in ${town}.`,
      de: `Die Energieklasse ${validEnergy} ist ein positives dokumentiertes Merkmal. Grundriss, Ausrichtung und Baubeschreibung sollten trotzdem entscheiden, ob diese Immobilie gegenüber den nächsten Alternativen in ${town} tatsächlich überzeugt.`,
    }[locale];
  }

  return {
    no: `På papiret er dette interessant nok til å undersøke videre, men feeddata alene er ikke grunnlag for en kjøpsanbefaling. Før vi ville satt den på en visningsliste, ville vi bedt om oppdatert plantegning, leveransebeskrivelse og konkret bekreftelse på hva som følger prisen.`,
    en: `On paper, this is interesting enough to investigate further, but feed data alone is not enough for a purchase recommendation. Before putting it on a viewing list, we would ask for an up-to-date floor plan, specification and clear confirmation of what is included in the price.`,
    de: `Auf dem Papier ist die Immobilie interessant genug für eine nähere Prüfung, doch Feed-Daten allein reichen nicht für eine Kaufempfehlung. Vor einer Aufnahme in die Besichtigungsliste würden wir einen aktuellen Grundriss, die Baubeschreibung und eine klare Bestätigung der im Preis enthaltenen Leistungen anfordern.`,
  }[locale];
}

export function PropertyAssessment({
  property,
  locale = "no",
  town,
  regionKey,
  typeLabel,
}: {
  property: Property;
  locale?: Locale;
  town: string;
  regionKey?: string;
  typeLabel: string;
}) {
  const labels = LABELS[locale];
  const conversionStory = (
    <PropertyConversionStory property={property} locale={locale} town={town} typeLabel={typeLabel} />
  );

  const flagship = getFlagshipAssessment(getPropertyRef(property), locale);
  if (flagship) {
    return (
      <>
        {conversionStory}
        <aside className="property-assessment flagship assessment-2027">
          <p className="eyebrow"><ShieldCheck size={15} /> {FLAGSHIP_HEADING[locale]}</p>
          <p className="assessment-kicker">{labels.manualNote}</p>
          <p>{flagship}</p>
        </aside>
      </>
    );
  }

  const bucket = bucketOf(property);
  const rawEnergy = String(property.energy_rating || "").trim();
  const validEnergy = /^[A-G][+-]?$/i.test(rawEnergy) ? rawEnergy.toUpperCase() : "";
  const facts = buildFacts(property, locale, validEnergy);
  const localInsight = townInsight(town, locale);
  const regionInsight = regionKey ? REGION_CHECK[regionKey]?.[locale] : undefined;
  const conclusion = buildConclusion(property, bucket, locale, validEnergy, town);

  const checkParts = [TYPE_CHECK[bucket][locale], localInsight || regionInsight].filter(Boolean);

  return (
    <>
      {conversionStory}
      <aside className="property-assessment assessment-2027">
        <div className="assessment-head">
          <p className="eyebrow"><ShieldCheck size={15} /> {labels.heading}</p>
          <span>{labels.firstAssessment}</span>
        </div>

        {facts.length > 0 && (
          <section className="assessment-block">
            <h3>{labels.basis}</h3>
            <div className="assessment-facts">
              {facts.map((fact) => <span key={fact}>{fact}</span>)}
            </div>
          </section>
        )}

        <section className="assessment-block">
          <h3>{labels.check}</h3>
          <p>{checkParts.join(". ")}.</p>
        </section>

        <section className="assessment-block assessment-verdict">
          <h3>{labels.view}</h3>
          <p>{conclusion}</p>
        </section>
      </aside>
    </>
  );
}
