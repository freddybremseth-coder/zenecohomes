import "@/components/property-detail-mobile.css";
import { StructuredPropertyDescription } from "@/components/StructuredPropertyDescription";
import { PropertyFloorplans } from "@/components/PropertyFloorplans";
import { PropertyHeroGallery } from "@/components/PropertyHeroGallery";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowLeft, Bath, BedDouble, BookOpen, Check, Coins, Home, LandPlot, MessageCircle, Ruler, Tag, Waves, Zap } from "lucide-react";
import { AreaInsight } from "@/components/AreaInsight";
import { ContactForm } from "@/components/ContactForm";
import { FavoriteButton } from "@/components/FavoriteButton";
import { MortgageCalculator } from "@/components/MortgageCalculator";
import { PropertyGallery } from "@/components/PropertyGallery";
import { Footer } from "@/components/Footer";
import { ReadMoreText } from "@/components/ReadMoreText";
import { SiteHeader } from "@/components/SiteHeader";
import type { Locale } from "@/lib/i18n";
import {
  getPropertyDetailPath,
  propertyLanguageLinks,
  propertyListLanguageLinks,
  propertyListPathByLocale,
} from "@/lib/propertyRouting";
import {
  formatPriceForLocale,
  getLocalizedPropertyDescription,
  getLocalizedPropertyTitle,
  getLocalizedPropertyType,
  getPrimaryImage,
  getPropertyArea,
  getPropertyImages,
  getPropertyRef,
  getPropertyTown,
  propertyMatchesRegion,
  regions,
  type Property,
} from "@/lib/realtyflow";
import { bookForProperty } from "@/lib/books";

type DetailText = {
  allProperties: string;
  notFound: string;
  backToProperties: string;
  bookViewing: string;
  about: string;
  descriptionFallback: string;
  fullOffer: string;
  readMore: string;
  readLess: string;
  decisionTitle: string;
  decisionItems: string[];
  processLink: string;
  processHref: string;
  costsTitle: string;
  costsBody: string;
  price: string;
  costs: string;
  total: string;
  clarify: string;
  financingLink: string;
  financingHref: string;
  rentalTitle: string;
  rentalBody: string;
  areaLink: string;
  areaHref: string;
  includedTitle: string;
  includedBody: string;
  newBuildLink: string;
  newBuildHref: string;
  nextStepsTitle: string;
  nextSteps: string[];
  images: string;
  areaTitle: string;
  areaBody: (location: string) => string;
  areaBadges: string[];
  bookLead: string;
  areaReadMore: string;
  bookCta: string;
  mapTitle: string;
  breadcrumbLabel: string;
  home: string;
  interested: string;
  interestedBody: string;
  askProperty: string;
  requestOffer: string;
  requestType: string;
  fullInfoTitle: string;
  fullInfoList: string[];
  residenceFallback: string;
  offerFallback: string;
};

const T: Record<Locale, DetailText> = {
  no: {
    allProperties: "Alle boliger",
    notFound: "Bolig ikke funnet",
    backToProperties: "Tilbake til boliger",
    bookViewing: "Book visning",
    about: "Om boligen",
    descriptionFallback:
      "Dette er et moderne nybygg/prosjekt i Spania. Kontakt oss for komplett prospekt, plantegninger og oppdatert tilgjengelighet.",
    fullOffer: "Be om komplett tilbud",
    readMore: "Les mer",
    readLess: "Vis mindre",
    decisionTitle: "Dette bør sjekkes før reservasjon",
    decisionItems: [
      "Oppdatert tilgjengelighet, pris og hva som faktisk er inkludert.",
      "Betalingsplan, byggefase og forventet overtakelse.",
      "Utbygger, kvalitet, garantier og tidligere leveranser.",
      "Avstand til strand, service, flyplass og helårsaktivitet.",
    ],
    processLink: "Les kjøpsprosessen",
    processHref: "/guide/kjope-bolig-i-spania",
    costsTitle: "Estimert kjøpskostnad",
    costsBody:
      "I Spania bør du normalt beregne ca. 13,5% ekstra til skatt, notar, register, advokat og øvrige kostnader.",
    price: "Pris",
    costs: "Ca. kostnader",
    total: "Estimert total",
    clarify: "Avklares",
    financingLink: "Finansiering, notar og NIE",
    financingHref: "/guide/finansiere-bolig-i-spania",
    rentalTitle: "Passer den for utleie?",
    rentalBody:
      "Vi vurderer beliggenhet, turistlisens, felleskostnader, sesong, målgruppe og konkurranse før du baserer kjøpet på forventet leieinntekt.",
    areaLink: "Vurder området",
    areaHref: "/guide/omradeguide-eiendomskjop-i-spania",
    includedTitle: "Hva er inkludert?",
    includedBody:
      "Be om komplett tilbud, så sjekker vi hvitevarer, belysning, basseng, hage, parkering, møbler, klima, solcellevalg og eventuelle tillegg.",
    newBuildLink: "Les om nybygg",
    newBuildHref: "/guide/nybygg-i-spania",
    nextStepsTitle: "Neste steg",
    nextSteps: [
      "Vi sjekker oppdatert tilgjengelighet, pris og betalingsplan.",
      "Du får prospekt, områdevurdering og relevante alternativer.",
      "Vi planlegger digital eller fysisk visning og hjelper deg videre i kjøpsprosessen.",
    ],
    images: "Bilder",
    areaTitle: "Område og beliggenhet",
    areaBody: (location) =>
      `Boligen ligger i ${location}. Vi vurderer alltid området sammen med deg: avstand til strand, golf, restauranter, helsetjenester, flyplass og hvordan stedet fungerer utenom høysesong.`,
    areaBadges: ["Norsk vurdering av området", "Alternativer i samme prisklasse", "Digital eller fysisk visning"],
    bookLead: "Fra Freddys guidebok",
    areaReadMore: "Les mer om området",
    bookCta: "Kjøp e-bok – 5 €",
    mapTitle: "Kart og beliggenhet",
    breadcrumbLabel: "Brødsmule",
    home: "Forside",
    interested: "Interessert?",
    interestedBody: "Send forespørsel, så hjelper vi deg med prospekt, visning og neste steg.",
    askProperty: "Spør om boligen",
    requestOffer: "Be om komplett tilbud",
    fullInfoTitle: "Få komplett informasjon om denne boligen",
    fullInfoList: [
      "Prospekt og plantegninger",
      "Oppdatert pris og tilgjengelighet",
      "Hva som er inkludert",
      "Estimert total kjøpskostnad",
      "Freddys vurdering",
      "Alternative boliger",
    ],
    requestType: "Komplett tilbud/prospekt",
    residenceFallback: "Moderne bolig til salgs i Spania. Kontakt Zen Eco Homes for prospekt, tilgjengelighet og visning.",
    offerFallback: "Bolig til salgs i Spania. Be om komplett prospekt, oppdatert tilgjengelighet og norsk rådgivning.",
  },
  de: {
    allProperties: "Alle Immobilien",
    notFound: "Immobilie nicht gefunden",
    backToProperties: "Zurück zu den Immobilien",
    bookViewing: "Besichtigung buchen",
    about: "Über die Immobilie",
    descriptionFallback:
      "Dies ist ein modernes Neubauprojekt in Spanien. Kontaktieren Sie uns für Exposé, Grundrisse und aktuelle Verfügbarkeit.",
    fullOffer: "Komplettes Angebot anfordern",
    readMore: "Mehr lesen",
    readLess: "Weniger anzeigen",
    decisionTitle: "Das sollten Sie vor der Reservierung prüfen",
    decisionItems: [
      "Aktuelle Verfügbarkeit, Preis und was tatsächlich enthalten ist.",
      "Zahlungsplan, Bauphase und voraussichtliche Übergabe.",
      "Bauträger, Qualität, Garantien und frühere Referenzen.",
      "Entfernung zu Strand, Service, Flughafen und ganzjähriger Infrastruktur.",
    ],
    processLink: "Beratung anfragen",
    processHref: "/de/immobilienberater-spanien",
    costsTitle: "Geschätzte Kaufkosten",
    costsBody:
      "In Spanien sollten Sie normalerweise ca. 13,5% zusätzlich für Steuern, Notar, Register, Anwalt und weitere Kosten einplanen.",
    price: "Preis",
    costs: "Ca. Kosten",
    total: "Geschätzte Summe",
    clarify: "Zu klären",
    financingLink: "Immobilienkauf in Spanien",
    financingHref: "/de/immobilie-in-spanien",
    rentalTitle: "Eignet sich die Immobilie zur Vermietung?",
    rentalBody:
      "Wir prüfen Lage, touristische Lizenz, Gemeinschaftskosten, Saison, Zielgruppe und Wettbewerb, bevor Sie den Kauf auf erwartete Mieteinnahmen stützen.",
    areaLink: "Region bewerten",
    areaHref: "/de/immobilie-in-spanien",
    includedTitle: "Was ist enthalten?",
    includedBody:
      "Fordern Sie das vollständige Angebot an. Wir prüfen Geräte, Beleuchtung, Pool, Garten, Parkplatz, Möbel, Klimaanlage, Solaroptionen und mögliche Extras.",
    newBuildLink: "Mehr über Neubau",
    newBuildHref: "/de/neubau-in-spanien",
    nextStepsTitle: "Nächste Schritte",
    nextSteps: [
      "Wir prüfen aktuelle Verfügbarkeit, Preis und Zahlungsplan.",
      "Sie erhalten Exposé, Regionseinschätzung und relevante Alternativen.",
      "Wir planen eine digitale oder persönliche Besichtigung und begleiten Sie weiter im Kaufprozess.",
    ],
    images: "Bilder",
    areaTitle: "Region und Lage",
    areaBody: (location) =>
      `Die Immobilie befindet sich in ${location}. Wir bewerten die Lage gemeinsam mit Ihnen: Entfernung zu Strand, Golf, Restaurants, Gesundheitsdiensten, Flughafen und wie der Ort außerhalb der Hochsaison funktioniert.`,
    areaBadges: ["Regionseinschätzung", "Alternativen in ähnlicher Preislage", "Digitale oder persönliche Besichtigung"],
    bookLead: "Aus Freddys Reiseführer",
    areaReadMore: "Mehr über die Gegend",
    bookCta: "E-Book kaufen – 5 €",
    mapTitle: "Karte und Lage",
    breadcrumbLabel: "Breadcrumb",
    home: "Startseite",
    interested: "Interessiert?",
    interestedBody: "Senden Sie eine Anfrage, dann helfen wir mit Exposé, Besichtigung und den nächsten Schritten.",
    askProperty: "Zur Immobilie fragen",
    requestOffer: "Komplettes Angebot",
    requestType: "Komplettes Angebot/Exposé",
    fullInfoTitle: "Komplette Informationen zu dieser Immobilie erhalten",
    fullInfoList: [
      "Exposé und Grundrisse",
      "Aktueller Preis und Verfügbarkeit",
      "Was inbegriffen ist",
      "Geschätzte Gesamtkaufkosten",
      "Freddys Einschätzung",
      "Alternative Immobilien",
    ],
    residenceFallback: "Moderne Immobilie zum Verkauf in Spanien. Kontaktieren Sie Zen Eco Homes für Exposé, Verfügbarkeit und Besichtigung.",
    offerFallback: "Immobilie zum Verkauf in Spanien. Fordern Sie Exposé, aktuelle Verfügbarkeit und Beratung an.",
  },
  en: {
    allProperties: "All properties",
    notFound: "Property not found",
    backToProperties: "Back to properties",
    bookViewing: "Book a viewing",
    about: "About the property",
    descriptionFallback:
      "This is a modern new build or development in Spain. Contact us for the full brochure, floor plans and updated availability.",
    fullOffer: "Request full offer",
    readMore: "Read more",
    readLess: "Show less",
    decisionTitle: "What to check before reservation",
    decisionItems: [
      "Updated availability, price and what is actually included.",
      "Payment plan, build phase and expected handover.",
      "Developer, quality, guarantees and previous deliveries.",
      "Distance to beach, services, airport and year-round activity.",
    ],
    processLink: "Talk to an advisor",
    processHref: "/en/property-advisor-spain",
    costsTitle: "Estimated purchase costs",
    costsBody:
      "In Spain you should normally allow around 13.5% extra for taxes, notary, registry, lawyer and other purchase costs.",
    price: "Price",
    costs: "Approx. costs",
    total: "Estimated total",
    clarify: "To be confirmed",
    financingLink: "Buying property in Spain",
    financingHref: "/en/property-in-spain",
    rentalTitle: "Is it suitable for rental?",
    rentalBody:
      "We assess location, tourist licence, community fees, seasonality, target group and competition before you base a purchase on expected rental income.",
    areaLink: "Assess the area",
    areaHref: "/en/property-in-spain",
    includedTitle: "What is included?",
    includedBody:
      "Ask for the full offer and we will check appliances, lighting, pool, garden, parking, furniture, air conditioning, solar options and any extras.",
    newBuildLink: "Read about new builds",
    newBuildHref: "/en/new-build-in-spain",
    nextStepsTitle: "Next steps",
    nextSteps: [
      "We check updated availability, price and payment plan.",
      "You receive the brochure, area assessment and relevant alternatives.",
      "We plan a virtual or in-person viewing and help you through the buying process.",
    ],
    images: "Images",
    areaTitle: "Area and location",
    areaBody: (location) =>
      `The property is in ${location}. We always assess the area with you: distance to beach, golf, restaurants, healthcare, airport and how the place works outside high season.`,
    areaBadges: ["Area assessment", "Alternatives in the same price range", "Virtual or in-person viewing"],
    bookLead: "From Freddy's guidebook",
    areaReadMore: "Read more about the area",
    bookCta: "Buy e-book – 5 €",
    mapTitle: "Map and location",
    breadcrumbLabel: "Breadcrumb",
    home: "Home",
    interested: "Interested?",
    interestedBody: "Send an enquiry and we will help with brochure, viewing and the next steps.",
    askProperty: "Ask about this property",
    requestOffer: "Request full offer",
    requestType: "Full offer/brochure",
    fullInfoTitle: "Get complete information about this property",
    fullInfoList: [
      "Brochure and floor plans",
      "Updated price and availability",
      "What is included",
      "Estimated total purchase cost",
      "Freddy's assessment",
      "Alternative properties",
    ],
    residenceFallback: "Modern property for sale in Spain. Contact Zen Eco Homes for brochure, availability and viewing.",
    offerFallback: "Property for sale in Spain. Request the full brochure, updated availability and advice.",
  },
};

export function PropertyNotFoundView({ locale }: { locale: Locale }) {
  const t = T[locale];
  return (
    <main lang={locale === "no" ? undefined : locale}>
      <SiteHeader locale={locale} languageLinks={propertyListLanguageLinks(locale)} />
      <section className="page-hero compact-hero">
        <h1>{t.notFound}</h1>
        <Link className="text-button" href={propertyListPathByLocale[locale]}>
          <ArrowLeft size={18} /> {t.backToProperties}
        </Link>
      </section>
      <Footer />
    </main>
  );
}

export function PropertyDetailView({ property, locale }: { property: Property; locale: Locale }) {
  const t = T[locale];
  const images = getPropertyImages(property);
  const mainImage = getPrimaryImage(property);
  const description = getLocalizedPropertyDescription(property, locale);
  const location = property.location || property.town || "Spania";
  const townDisplay = getPropertyTown(property) || location;
  const ref = getPropertyRef(property);
  const title = getLocalizedPropertyTitle(property, locale);
  const areaBook = bookForProperty(`${title} ${location} ${property.town || ""}`, locale);
  const areaRegionKey = regions.find((r) => propertyMatchesRegion(property, r.key))?.key;
  const localePrefix = locale === "no" ? "" : `/${locale}`;
  const areaPageHref =
    areaRegionKey === "innlandet"
      ? locale === "no" ? "/omrader/innlandet" : `${localePrefix}/inland`
      : areaRegionKey
        ? `/omrader/${areaRegionKey}`
        : "/omrader";
  const type = getLocalizedPropertyType(property, locale);
  // Ren, spesifikk overskrift ("Villa med 3 soverom i Finestrat") i stedet for
  // den rå, ofte maskinoversatte marketingtittelen.
  const bedroomWord = locale === "de" ? "Schlafzimmern" : locale === "en" ? "bedrooms" : "soverom";
  const withWord = locale === "de" ? "mit" : locale === "en" ? "with" : "med";
  const inWord = locale === "de" ? "in" : locale === "en" ? "in" : "i";
  const cleanHeading =
    townDisplay && type
      ? `${type}${property.bedrooms ? ` ${withWord} ${property.bedrooms} ${bedroomWord}` : ""} ${inWord} ${townDisplay}`
      : title;
  const unavailable = locale === "no" ? "Denne informasjonen er ikke tilgjengelig ved publisering, ta kontakt for oppdatert informasjon." : locale === "en" ? "This information was not available at publication. Contact us for an update." : "Diese Information war bei Veröffentlichung nicht verfügbar. Bitte fragen Sie nach aktuellen Angaben.";
  const completion = String(property.expected_completion_manual || property.expected_completion_source || "").trim();
  const rawStatus = String(property.status || "").trim().toLowerCase();
  const projectStatus = /under construction|under bygg|en construcci[oó]n|building/.test(rawStatus)
    ? (locale === "no" ? "Under bygging" : locale === "en" ? "Under construction" : "Im Bau")
    : /completed|finished|ferdig|entregado|ready/.test(rawStatus)
      ? (locale === "no" ? "Ferdigstilt" : locale === "en" ? "Completed" : "Fertiggestellt")
      : /planning|planlagt|off.plan|sobre plano/.test(rawStatus)
        ? (locale === "no" ? "Under planlegging" : locale === "en" ? "In planning" : "In Planung")
        : "";
  const amenities = Array.isArray(property.amenities_no) ? property.amenities_no.filter((item): item is string => typeof item === "string" && Boolean(item.trim())) : typeof property.amenities_no === "string" ? property.amenities_no.split(/[;\n]/).map(item => item.trim()).filter(Boolean) : [];
  const disclosedFeatures = [...amenities, ...(property.pool === true ? [locale === "no" ? "Basseng oppgitt" : "Pool listed"] : [])].filter((item,index,all)=>all.indexOf(item)===index);
  const estimatedCosts = property.price ? Math.round(property.price * 0.135) : 0;
  const estimatedTotal = property.price ? property.price + estimatedCosts : 0;
  const detailPath = getPropertyDetailPath(ref, locale);
  const propertyUrl = `https://www.zenecohomes.com${detailPath}`;
  const detailFacts = [
    { icon: <Tag />, label: `Ref ${ref}` },
    { icon: <Home />, label: type },
    property.bedrooms
      ? { icon: <BedDouble />, label: `${property.bedrooms} ${locale === "de" ? "Schlafzimmer" : locale === "en" ? "bedrooms" : "soverom"}` }
      : null,
    property.bathrooms
      ? { icon: <Bath />, label: `${property.bathrooms} ${locale === "de" ? "Bäder" : locale === "en" ? "bathrooms" : "bad"}` }
      : null,
    getPropertyArea(property) ? { icon: <Ruler />, label: `${getPropertyArea(property)} m²` } : null,
    property.plot_size
      ? { icon: <LandPlot />, label: `${property.plot_size} m² ${locale === "de" ? "Grundstück" : locale === "en" ? "plot" : "tomt"}` }
      : null,
    property.pool ? { icon: <Waves />, label: locale === "de" ? "Pool" : locale === "en" ? "Pool" : "Basseng" } : null,
    property.energy_rating
      ? { icon: <Zap />, label: `${locale === "de" ? "Energie" : locale === "en" ? "Energy" : "Energi"} ${property.energy_rating}` }
      : null,
    getPropertyArea(property) && property.price
      ? {
          icon: <Coins />,
          label: `${new Intl.NumberFormat(locale === "de" ? "de-DE" : locale === "en" ? "en-GB" : "nb-NO").format(
            Math.round(property.price / getPropertyArea(property)!),
          )} €/m²`,
        }
      : null,
  ].filter(Boolean) as Array<{ icon: ReactNode; label: string }>;

  const propertyJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Residence",
        "@id": `${propertyUrl}#residence`,
        name: title,
        description: description || t.residenceFallback,
        image: images.length ? images : [mainImage],
        numberOfRooms: property.bedrooms,
        floorSize: getPropertyArea(property)
          ? {
              "@type": "QuantitativeValue",
              value: getPropertyArea(property),
              unitCode: "MTK",
            }
          : undefined,
        address: {
          "@type": "PostalAddress",
          addressLocality: location,
          addressCountry: "ES",
        },
      },
      {
        "@type": "Product",
        "@id": `${propertyUrl}#offer`,
        name: title,
        description: description || t.offerFallback,
        image: images.length ? images : [mainImage],
        sku: ref,
        category: type,
        brand: {
          "@type": "Organization",
          name: "Zen Eco Homes",
          url: "https://www.zenecohomes.com",
        },
        offers: property.price
          ? {
              "@type": "Offer",
              url: propertyUrl,
              price: property.price,
              priceCurrency: "EUR",
              priceValidUntil: `${new Date().getFullYear() + 1}-12-31`,
              availability: "https://schema.org/InStock",
              seller: {
                "@type": "RealEstateAgent",
                name: "Zen Eco Homes",
                url: "https://www.zenecohomes.com",
              },
            }
          : undefined,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: t.home, item: "https://www.zenecohomes.com" },
          {
            "@type": "ListItem",
            position: 2,
            name: t.allProperties,
            item: `https://www.zenecohomes.com${propertyListPathByLocale[locale]}`,
          },
          { "@type": "ListItem", position: 3, name: title, item: propertyUrl },
        ],
      },
    ],
  };

  return (
    <main lang={locale === "no" ? undefined : locale}>
      <SiteHeader locale={locale} languageLinks={propertyLanguageLinks(ref, locale)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(propertyJsonLd) }} />
      <section className="property-detail-hero">
        <PropertyHeroGallery images={images.length ? images : mainImage ? [mainImage] : []} title={title} locale={locale} />
        <div>
          <Link className="back-link" href={propertyListPathByLocale[locale]}>
            <ArrowLeft size={18} /> {t.allProperties}
          </Link>
          <p className="eyebrow">{townDisplay}</p>
          <h1>{cleanHeading}</h1>
          <strong>{formatPriceForLocale(property.price, locale)}</strong>
          <div className="hero-actions">
            <FavoriteButton
              locale={locale}
              favorite={{
                ref,
                title,
                location: townDisplay,
                price: formatPriceForLocale(property.price, locale),
                href: detailPath,
                image: mainImage || undefined,
                priceNum: property.price || undefined,
                area: getPropertyArea(property) || undefined,
                bedrooms: property.bedrooms || undefined,
                bathrooms: property.bathrooms || undefined,
                energy: property.energy_rating || undefined,
                type: getLocalizedPropertyType(property, locale) || undefined,
              }}
            />
            <a href="#kontakt">
              <MessageCircle size={17} /> {locale === "no" ? "Få tilsendt salgsoppgaven" : locale === "en" ? "Request the property brochure" : "Exposé anfordern"}
            </a>
          </div>
        </div>
      </section>

      <section className="detail-layout">
        <div className="property-detail-primary">
          <div className="detail-facts">
            {detailFacts.map((fact) => (
              <span key={fact.label}>
                {fact.icon} {fact.label}
              </span>
            ))}
          </div>

          {images.length > 1 && (
            <section className="premium-gallery" id="bilder">
              <h2>{t.images}</h2>
              <PropertyGallery images={images} title={title} />
            </section>
          )}
          <section className="property-detail-section" id="om-boligen">
            <h2>{t.about}</h2>
            <StructuredPropertyDescription text={description || unavailable} locale={locale} />
            {property.terrace_size ? <p>{locale === "no" ? "Oppgitt terrasseareal" : "Terrace area"}: {property.terrace_size} m²</p> : null}
            {property.plot_size ? <p>{locale === "no" ? "Oppgitt tomteareal" : "Plot area"}: {property.plot_size} m²</p> : null}
          </section>
          <section className="property-detail-section">
            <h2>{locale === "no" ? "Prosjektstatus" : locale === "en" ? "Project status" : "Projektstatus"}</h2>
            <div className="property-project-grid">
              <div><h3>{locale === "no" ? "Ferdigstillelse" : locale === "en" ? "Completion" : "Fertigstellung"}</h3><p>{completion || unavailable}</p></div>
              <div><h3>{locale === "no" ? "Prosjektstatus" : locale === "en" ? "Construction status" : "Baustatus"}</h3><p>{projectStatus || unavailable}</p></div>
            </div>
          </section>
          <PropertyFloorplans images={property.floorplans || []} locale={locale} />
          <section className="sticky-card property-brochure-box" id="kontakt">
            <h2>{t.fullInfoTitle}</h2>
            <p>{locale === "no" ? "Få tilsendt tilgjengelig salgsoppgave, plantegninger og oppdatert informasjon. Vi sjekker dokumentasjonen for akkurat denne boligen." : "Request the available brochure, floor plans and updated details for this property."}</p>
            <ContactForm locale={locale} propertyRef={ref} propertyTitle={title} requestType={t.requestType} source={`property-${locale}-${ref}`} variant="compact" />
          </section>
          <section className="property-detail-section">
            <h2>{t.costsTitle}</h2>
            <p>{t.costsBody}</p>
            <dl className="property-cost-list">
              <div><dt>{t.price}</dt><dd>{formatPriceForLocale(property.price, locale)}</dd></div>
              <div><dt>{t.costs}</dt><dd>{property.price ? formatPriceForLocale(estimatedCosts,locale) : unavailable}</dd></div>
              <div><dt>{t.total}</dt><dd>{property.price ? formatPriceForLocale(estimatedTotal,locale) : unavailable}</dd></div>
            </dl>
            <p><small>{locale === "no" ? "Dette er et generelt budsjettanslag, ikke et bindende kostnadsoverslag. Skatter og gebyrer avhenger av bolig og kjøper." : "Illustrative estimate; actual taxes and fees depend on the transaction."}</small></p>
          </section>
          <section className="property-detail-section">
            <h2>{t.includedTitle}</h2>
            {disclosedFeatures.length ? <><p>{locale === "no" ? "Følgende egenskaper er oppgitt i boligdataene. Det må bekreftes i leveransebeskrivelsen hva som inngår i kjøpesummen." : "The following features are listed. Confirm what is included in the sale specification."}</p><ul>{disclosedFeatures.map(item=><li key={item}>{item}</li>)}</ul></> : <p>{unavailable}</p>}
          </section>
          <section className="property-detail-section">
            <h2>{t.rentalTitle}</h2><p>{t.rentalBody}</p>
            <p>{locale === "no" ? "Mulighet for utleie og eventuelle nødvendige lisenser må kontrolleres for denne boligen." : "Rental eligibility and any licences must be checked for this property."}</p>
          </section>
          <section className="property-detail-section">
            <h2>{t.decisionTitle}</h2><ul>{t.decisionItems.map(item=><li key={item}>{item}</li>)}</ul>
          </section>
          <section className="property-detail-section">
            <h2>{t.nextStepsTitle}</h2><ol>{t.nextSteps.map(item=><li key={item}>{item}</li>)}</ol>
            <a className="text-button" href="#kontakt">{locale === "no" ? "Be om salgsoppgaven" : t.requestOffer}</a>
          </section>
          <section className="area-context">
            <h2>{t.areaTitle}</h2>
            <p>{locale === "no" ? `Boligen ligger i ${townDisplay}. Se områdeguiden for mer informasjon om byen, hverdagsliv og nærområder.` : locale === "en" ? `The property is located in ${townDisplay}. Read our area guide for local information.` : `Die Immobilie liegt in ${townDisplay}. Lesen Sie mehr in unserem Gebietsführer.`}</p>
            <Link className="text-button" href={areaPageHref}>{t.areaReadMore}</Link>
            <AreaInsight regionKey={areaRegionKey} locale={locale} />
            <div className="area-book">
              <p className="area-book-lead">
                <BookOpen size={16} /> {t.bookLead}
              </p>
              <strong>«{areaBook.title}»</strong>
              <p>{areaBook.blurb}</p>
              <div className="area-book-actions">
                <Link className="text-button" href={areaPageHref}>
                  {t.areaReadMore}
                </Link>
                <a
                  className="contact-button"
                  href={areaBook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.bookCta}
                </a>
              </div>
            </div>
          </section>
          <section className="property-map">
            <h2>{t.mapTitle}</h2>
            <iframe
              title={`${t.mapTitle} – ${townDisplay}`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(`${townDisplay}, Alicante, Spain`)}&z=12&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </section>
          <section className="property-detail-section property-final-help">
            <h2>{locale === "no" ? "Vil du ha hjelp til å finne riktig bolig?" : locale === "en" ? "Need help finding the right property?" : "Hilfe bei der Immobiliensuche?"}</h2>
            <p>{locale === "no" ? "Vi hjelper deg å sammenligne denne boligen med relevante alternativer, og avklarer spørsmål før du bestemmer deg." : "We can help compare this property with alternatives and answer questions before you decide."}</p>
            <a className="text-button" href="#kontakt">{locale === "no" ? "Få personlig hjelp" : t.askProperty}</a>
          </section>
          <nav className="breadcrumb-nav" aria-label={t.breadcrumbLabel}>
            <Link href={locale === "no" ? "/" : `/${locale}`}>{t.home}</Link>
            <span>/</span>
            <Link href={propertyListPathByLocale[locale]}>{t.allProperties}</Link>
            <span>/</span>
            <span>{cleanHeading}</span>
          </nav>
        </div>

        <aside className="property-contact-column">
          <section className="sticky-card property-mortgage-box">
            <h2>{locale === "no" ? "Lånekalkulator" : locale === "en" ? "Mortgage calculator" : "Hypothekenrechner"}</h2>
            <MortgageCalculator price={property.price} locale={locale} />
          </section>
        </aside>
      </section>
      <a className="property-mobile-cta" href="#kontakt">{locale === "no" ? "Få tilsendt salgsoppgaven" : locale === "en" ? "Request the brochure" : "Exposé anfordern"}</a>
      <Footer />
    </main>
  );
}
