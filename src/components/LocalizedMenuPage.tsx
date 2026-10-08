import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, CheckCircle2, Handshake, MapPin, Quote, Users } from "lucide-react";

import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { Testimonials } from "@/components/Testimonials";
import type { SiteLocale } from "@/lib/i18n";
import { CARE_URL } from "@/lib/i18n";
import { magazineArticles, type EditorialLocale } from "@/lib/localizedMagazine";

export type LocalizedMenuPageKey =
  | "about"
  | "reviews"
  | "viewing"
  | "corporate"
  | "corporate-guides"
  | "partners"
  | "magazine";

type Locale = EditorialLocale;

const ROUTES: Record<LocalizedMenuPageKey, Record<"no" | Locale, string>> = {
  about: { no: "/om-oss", en: "/en/about-us", de: "/de/ueber-uns", es: "/es/sobre-nosotros" },
  reviews: { no: "/kundeomtaler", en: "/en/client-reviews", de: "/de/kundenstimmen", es: "/es/opiniones-clientes" },
  viewing: { no: "/visningstur", en: "/en/viewing-trip", de: "/de/besichtigungsreise", es: "/es/viaje-de-visitas" },
  corporate: { no: "/bedriftshytte-spania", en: "/en/corporate", de: "/de/unternehmen", es: "/es/empresas" },
  "corporate-guides": {
    no: "/bedriftshytte-spania/guider",
    en: "/en/corporate/guides",
    de: "/de/unternehmen/ratgeber",
    es: "/es/empresas/guias",
  },
  partners: {
    no: "/bedriftshytte-spania/partnere",
    en: "/en/corporate/partners",
    de: "/de/unternehmen/partner",
    es: "/es/empresas/colaboradores",
  },
  magazine: { no: "/magasin", en: "/en/magazine", de: "/de/magazin", es: "/es/revista" },
};

const HOME: Record<Locale, string> = { en: "/en", de: "/de", es: "/es" };
const BOOKING: Record<Locale, string> = { en: "/en/booking", de: "/de/termin", es: "/es/cita" };
const PROPERTIES: Record<Locale, string> = { en: "/en/properties", de: "/de/immobilien", es: "/es/propiedades" };
const AREAS: Record<Locale, string> = { en: "/en/areas", de: "/de/regionen", es: "/es/zonas" };
const GUIDES: Record<Locale, string> = { en: "/en/guides", de: "/de/ratgeber", es: "/es/guias" };
const BUYING: Record<Locale, string> = { en: "/en/buying-process", de: "/de/kaufprozess", es: "/es/proceso-de-compra" };
const FREDDY: Record<Locale, string> = { en: "/en/about-freddy", de: "/de/ueber-freddy", es: "/es/sobre-freddy" };

const META: Record<LocalizedMenuPageKey, Record<Locale, { title: string; description: string }>> = {
  about: {
    en: {
      title: "About Zen Eco Homes | Property Advice on Costa Blanca",
      description: "Meet Zen Eco Homes and see how we help property buyers compare areas, budgets and homes before viewings, purchase, completion and aftercare in Spain.",
    },
    de: {
      title: "Über Zen Eco Homes | Immobilienberatung Costa Blanca",
      description: "Lernen Sie Zen Eco Homes kennen und erfahren Sie, wie wir Käufer bei Region, Budget, Auswahl, Besichtigung, Kauf, Übergabe und Betreuung begleiten.",
    },
    es: {
      title: "Sobre Zen Eco Homes | Asesoramiento Costa Blanca",
      description: "Conoce Zen Eco Homes y cómo ayudamos a comparar zonas, presupuesto y viviendas antes de las visitas, la compra, la entrega y el seguimiento en España.",
    },
  },
  reviews: {
    en: {
      title: "Client Reviews | Zen Eco Homes Property Advice Spain",
      description: "Read genuine client feedback about property advice, area selection, buying support and viewings with Freddy Bremseth and Zen Eco Homes in Spain.",
    },
    de: {
      title: "Kundenstimmen | Zen Eco Homes Immobilienberatung Spanien",
      description: "Lesen Sie echte Kundenstimmen über Beratung, Regionswahl, Immobiliensuche, Besichtigungen und Kaufbegleitung mit Zen Eco Homes in Spanien.",
    },
    es: {
      title: "Opiniones de clientes | Zen Eco Homes en España",
      description: "Lee opiniones reales sobre asesoramiento, elección de zona, búsqueda de vivienda, visitas y acompañamiento en la compra con Zen Eco Homes en España.",
    },
  },
  viewing: {
    en: {
      title: "Property Viewing Trip to Spain | Zen Eco Homes",
      description: "Plan a focused viewing trip to Spain with area, budget and shortlist agreed before you travel, so the homes you see are genuinely relevant to you.",
    },
    de: {
      title: "Besichtigungsreise nach Spanien | Zen Eco Homes",
      description: "Planen Sie eine strukturierte Besichtigungsreise mit Region, Budget und Vorauswahl vor der Anreise, damit nur wirklich passende Immobilien gezeigt werden.",
    },
    es: {
      title: "Viaje de visitas inmobiliarias | Zen Eco Homes",
      description: "Organiza un viaje de visitas a España con zona, presupuesto y shortlist definidos antes de viajar para ver solo viviendas realmente relevantes.",
    },
  },
  corporate: {
    en: {
      title: "Corporate Homes in Spain | Costa Blanca Business Property",
      description: "Explore company-owned or company-use property on the Costa Blanca for staff stays, work retreats and member use, with structured property advice and local support.",
    },
    de: {
      title: "Firmenimmobilie in Spanien | Costa Blanca Unternehmen",
      description: "Prüfen Sie Firmenwohnungen an der Costa Blanca für Mitarbeiter, Arbeitsaufenthalte und Organisationen mit strukturierter Beratung und lokaler Betreuung.",
    },
    es: {
      title: "Vivienda corporativa en España | Costa Blanca Empresas",
      description: "Valora una vivienda corporativa en la Costa Blanca para empleados, estancias de trabajo u organizaciones con asesoramiento inmobiliario y apoyo local.",
    },
  },
  "corporate-guides": {
    en: {
      title: "Corporate Property Guides Spain | Zen Corporate Homes",
      description: "Practical guides for companies and organisations considering property in Spain: use, governance, costs, ownership, booking, operations and local follow-up.",
    },
    de: {
      title: "Ratgeber Firmenimmobilien Spanien | Zen Corporate Homes",
      description: "Praktische Ratgeber für Unternehmen zu Nutzung, Kosten, Eigentum, Buchung, internen Regeln, Betrieb und lokaler Betreuung von Immobilien in Spanien.",
    },
    es: {
      title: "Guías de vivienda corporativa | Zen Corporate Homes",
      description: "Guías prácticas para empresas sobre uso, costes, propiedad, reservas, normas internas, operación y seguimiento local de viviendas corporativas en España.",
    },
  },
  partners: {
    en: {
      title: "Partner with Zen Corporate Homes | Spain Property Advice",
      description: "Partner with Zen Corporate Homes if you advise companies, associations or employee groups that may benefit from structured property solutions in Spain.",
    },
    de: {
      title: "Partner von Zen Corporate Homes | Immobilien Spanien",
      description: "Werden Sie Partner, wenn Sie Unternehmen, Verbände oder Mitarbeitergruppen beraten, für die strukturierte Immobilienlösungen in Spanien relevant sind.",
    },
    es: {
      title: "Colabora con Zen Corporate Homes | Vivienda en España",
      description: "Colabora con Zen Corporate Homes si asesoras a empresas, asociaciones o colectivos que puedan necesitar soluciones inmobiliarias estructuradas en España.",
    },
  },
  magazine: {
    en: {
      title: "Costa Blanca Property Magazine | Zen Eco Homes",
      description: "Read market context, property comparisons and practical lifestyle articles about buying and living on the Costa Blanca, written for international buyers.",
    },
    de: {
      title: "Costa Blanca Immobilien Magazin | Zen Eco Homes",
      description: "Lesen Sie Marktbeobachtungen, Immobilienvergleiche und praktische Beiträge über Kauf und Leben an der Costa Blanca für internationale Käufer.",
    },
    es: {
      title: "Revista inmobiliaria Costa Blanca | Zen Eco Homes",
      description: "Lee análisis de mercado, comparativas de viviendas y artículos prácticos sobre comprar y vivir en la Costa Blanca para compradores internacionales.",
    },
  },
};

type Section = { heading: string; body: string[]; bullets?: string[] };

type PageCopy = {
  eyebrow: string;
  title: string;
  lead: string;
  sections: Section[];
  primary: string;
  secondary?: string;
};

const COPY: Record<LocalizedMenuPageKey, Record<Locale, PageCopy>> = {
  about: {
    en: {
      eyebrow: "About Zen Eco Homes",
      title: "Advice first. Property second.",
      lead: "We help buyers narrow down area, budget, property type and process before they commit to a specific home in Spain.",
      sections: [
        { heading: "We start with the decision, not the listing", body: ["Your intended use, total budget and preferred lifestyle are clarified before we build a shortlist. That reduces noise and makes viewings more useful.", "Once the direction is clear, we help coordinate the property search, viewings and practical next steps around the purchase."] },
        { heading: "Local perspective with an international buyer mindset", body: ["Zen Eco Homes is based on the Costa Blanca and works with buyers who need more than a property feed. We focus on the questions that affect daily life: access, seasonality, maintenance, total costs and how the area actually works."] },
        { heading: "The people behind the advice", body: ["Freddy Bremseth leads property advice and buyer support. Andrea Thorsnes Karlsen works with client follow-up, marketing, content and the digital buyer journey.", "The shared goal is simple: make the buying process easier to understand and help clients make fewer, better decisions."] },
      ],
      primary: "Talk to an advisor",
      secondary: "Read about Freddy",
    },
    de: {
      eyebrow: "Über Zen Eco Homes",
      title: "Erst die Beratung. Dann die Immobilie.",
      lead: "Wir helfen Käufern, Region, Budget, Immobilientyp und Ablauf zu klären, bevor sie sich auf ein konkretes Objekt in Spanien festlegen.",
      sections: [
        { heading: "Wir beginnen mit der Entscheidung, nicht mit dem Exposé", body: ["Nutzung, Gesamtbudget und gewünschter Alltag werden geklärt, bevor wir eine Vorauswahl erstellen. So entsteht weniger Informationsrauschen und jede Besichtigung wird relevanter.", "Ist die Richtung klar, begleiten wir Immobiliensuche, Besichtigungen und die praktischen nächsten Schritte des Kaufs."] },
        { heading: "Lokale Perspektive für internationale Käufer", body: ["Zen Eco Homes arbeitet an der Costa Blanca mit Käufern, die mehr als nur Immobilienangebote brauchen. Wichtig sind Alltag, Erreichbarkeit, Saison, Wartung, Gesamtkosten und die tatsächliche Funktion eines Standorts."] },
        { heading: "Die Menschen hinter der Beratung", body: ["Freddy Bremseth verantwortet Immobilienberatung und Käuferbegleitung. Andrea Thorsnes Karlsen arbeitet mit Kundenbetreuung, Marketing, Inhalten und der digitalen Käuferreise.", "Das gemeinsame Ziel: den Kaufprozess verständlicher machen und bessere Entscheidungen mit weniger Umwegen ermöglichen."] },
      ],
      primary: "Beratung anfragen",
      secondary: "Mehr über Freddy",
    },
    es: {
      eyebrow: "Sobre Zen Eco Homes",
      title: "Primero el asesoramiento. Después la vivienda.",
      lead: "Ayudamos a definir zona, presupuesto, tipo de vivienda y proceso antes de comprometerse con una propiedad concreta en España.",
      sections: [
        { heading: "Empezamos por la decisión, no por el anuncio", body: ["Aclaramos uso, presupuesto total y estilo de vida antes de preparar una shortlist. Así reducimos ruido y hacemos que cada visita sea más útil.", "Cuando la dirección está clara, ayudamos a coordinar búsqueda, visitas y los siguientes pasos prácticos de la compra."] },
        { heading: "Perspectiva local para compradores internacionales", body: ["Zen Eco Homes trabaja en la Costa Blanca con compradores que necesitan algo más que un listado de viviendas. Nos centramos en accesos, estacionalidad, mantenimiento, costes totales y cómo funciona realmente cada zona."] },
        { heading: "Las personas detrás del asesoramiento", body: ["Freddy Bremseth dirige el asesoramiento inmobiliario y el acompañamiento al comprador. Andrea Thorsnes Karlsen trabaja con seguimiento de clientes, marketing, contenidos y experiencia digital.", "El objetivo común es sencillo: hacer el proceso más comprensible y ayudar a tomar menos decisiones, pero mejores."] },
      ],
      primary: "Hablar con un asesor",
      secondary: "Conoce a Freddy",
    },
  },
  reviews: {
    en: { eyebrow: "Client reviews", title: "Real feedback from property buyers", lead: "Trust is better built through real client journeys than through marketing claims.", sections: [], primary: "Get property advice", secondary: "See how we help" },
    de: { eyebrow: "Kundenstimmen", title: "Echte Erfahrungen von Immobilienkäufern", lead: "Vertrauen entsteht besser durch reale Kundenerfahrungen als durch Werbeversprechen.", sections: [], primary: "Beratung anfragen", secondary: "So helfen wir" },
    es: { eyebrow: "Opiniones de clientes", title: "Experiencias reales de compradores", lead: "La confianza se construye mejor con experiencias reales que con promesas comerciales.", sections: [], primary: "Solicitar asesoramiento", secondary: "Cómo te ayudamos" },
  },
  viewing: {
    en: {
      eyebrow: "Viewing trip to Spain",
      title: "A viewing trip should create clarity, not more random options",
      lead: "We agree area, budget and requirements before you travel, then coordinate a small number of properties that are genuinely worth seeing.",
      sections: [
        { heading: "Prepare before you book flights", body: ["We clarify how the property will be used, the realistic total budget and the areas that fit your priorities. Availability and prices are checked again as close to the trip as practical."], bullets: ["Use and total budget", "Area and travel distances", "Property shortlist", "Current price and availability"] },
        { heading: "Fewer, better viewings", body: ["A productive day is not measured by the number of doors opened. We leave enough time to compare the property, surroundings, access, noise, sun, construction activity and practical daily life."] },
        { heading: "Plan time for the area itself", body: ["If possible, spend two or three days in the area. Use part of the stay without appointments so you can test restaurants, supermarkets, routes, beach access and how the place feels outside the viewing."] },
        { heading: "No pressure to reserve", body: ["If one home stands out, the next step is to collect the unanswered questions and understand price, specification, documents and payment structure before moving forward."] },
      ],
      primary: "Plan a viewing trip",
      secondary: "Compare areas",
    },
    de: {
      eyebrow: "Besichtigungsreise nach Spanien",
      title: "Eine Besichtigungsreise soll Klarheit schaffen",
      lead: "Region, Budget und Anforderungen werden vor der Reise geklärt. Danach koordinieren wir eine kleine Auswahl wirklich relevanter Immobilien.",
      sections: [
        { heading: "Vor dem Flug vorbereiten", body: ["Wir klären Nutzung, realistisches Gesamtbudget und passende Regionen. Preis und Verfügbarkeit werden möglichst kurz vor der Reise erneut bestätigt."], bullets: ["Nutzung und Gesamtbudget", "Region und Fahrzeiten", "Immobilienauswahl", "Aktueller Preis und Verfügbarkeit"] },
        { heading: "Weniger, aber bessere Besichtigungen", body: ["Ein erfolgreicher Tag wird nicht an der Anzahl geöffneter Türen gemessen. Es bleibt Zeit für Vergleich, Umgebung, Zufahrt, Lärm, Sonne, Bautätigkeit und praktische Alltagsthemen."] },
        { heading: "Zeit für die Region einplanen", body: ["Wenn möglich, verbringen Sie zwei oder drei Tage vor Ort. Nutzen Sie einen Teil der Zeit ohne Termine, um Restaurants, Supermärkte, Wege, Strandzugang und das Gefühl des Ortes selbst zu testen."] },
        { heading: "Kein Reservierungsdruck", body: ["Wenn eine Immobilie heraussticht, sammeln wir offene Fragen zu Preis, Ausstattung, Dokumenten und Zahlungsstruktur, bevor der nächste Schritt erfolgt."] },
      ],
      primary: "Besichtigungsreise planen",
      secondary: "Regionen vergleichen",
    },
    es: {
      eyebrow: "Viaje de visitas a España",
      title: "Un viaje de visitas debe aportar claridad",
      lead: "Definimos zona, presupuesto y requisitos antes del viaje y coordinamos una selección pequeña de viviendas que realmente merece la pena visitar.",
      sections: [
        { heading: "Prepárate antes de reservar vuelos", body: ["Aclaramos uso, presupuesto total realista y zonas adecuadas. Precio y disponibilidad se vuelven a comprobar lo más cerca posible de la fecha del viaje."], bullets: ["Uso y presupuesto total", "Zona y desplazamientos", "Shortlist de viviendas", "Precio y disponibilidad actuales"] },
        { heading: "Menos visitas, mejor comparadas", body: ["Un buen día no se mide por cuántas puertas abrimos. Dejamos tiempo para comparar vivienda, entorno, acceso, ruido, sol, obras cercanas y funcionamiento cotidiano."] },
        { heading: "Reserva tiempo para conocer la zona", body: ["Si puedes, pasa dos o tres días en el área. Utiliza parte del tiempo sin citas para probar restaurantes, supermercados, trayectos, playa y cómo se siente el lugar fuera de una visita."] },
        { heading: "Sin presión para reservar", body: ["Si una vivienda destaca, el siguiente paso es reunir las preguntas pendientes y entender precio, memoria, documentación y estructura de pagos antes de avanzar."] },
      ],
      primary: "Planificar viaje de visitas",
      secondary: "Comparar zonas",
    },
  },
  corporate: {
    en: {
      eyebrow: "Zen Corporate Homes",
      title: "A property in Spain can be a business tool — if the use is clear",
      lead: "We help companies, associations and organisations assess whether a Costa Blanca property makes sense for staff stays, retreats, member use or a combination.",
      sections: [
        { heading: "Start with purpose and users", body: ["Define who may use the property, how often, for what purpose and under which internal rules before discussing specific homes.", "A property for small leadership retreats has different requirements from one intended as a broad employee benefit."] },
        { heading: "Build a decision case before the property shortlist", body: ["Purchase price is only one input. Include acquisition costs, annual running costs, capital use, expected occupancy, administration and alternative accommodation costs.", "Tax, accounting and ownership structure depend on the organisation and relevant jurisdictions and should be checked by qualified advisers."] },
        { heading: "Then choose the area and property", body: ["Once use and economics are clear, we can compare Costa Blanca locations, capacity, workspaces, airport access, parking, pool, privacy and operational requirements."] },
        { heading: "Local follow-up matters", body: ["A corporate property needs practical routines when no one is staying there. Keyholding, inspections, cleaning coordination and issue handling can be organised through local property care."] },
      ],
      primary: "Discuss a corporate property",
      secondary: "Read corporate guides",
    },
    de: {
      eyebrow: "Zen Corporate Homes",
      title: "Eine Immobilie in Spanien kann ein Unternehmensinstrument sein",
      lead: "Wir helfen Unternehmen, Verbänden und Organisationen zu prüfen, ob eine Immobilie an der Costa Blanca für Mitarbeiter, Workshops, Mitglieder oder mehrere Zwecke sinnvoll ist.",
      sections: [
        { heading: "Mit Zweck und Nutzergruppe beginnen", body: ["Legen Sie fest, wer die Immobilie nutzen darf, wie oft, wofür und nach welchen internen Regeln, bevor konkrete Objekte diskutiert werden.", "Eine Immobilie für kleine Führungstreffen hat andere Anforderungen als ein breit zugängliches Mitarbeiterangebot."] },
        { heading: "Entscheidungsgrundlage vor der Immobilienauswahl", body: ["Neben dem Kaufpreis gehören Erwerbsnebenkosten, laufende Kosten, Kapitaleinsatz, erwartete Nutzung, Verwaltung und alternative Übernachtungskosten in die Betrachtung.", "Steuern, Bilanzierung und Eigentumsstruktur hängen von Organisation und Ländern ab und sollten mit qualifizierten Beratern geprüft werden."] },
        { heading: "Danach Region und Immobilie auswählen", body: ["Sind Nutzung und Wirtschaftlichkeit geklärt, vergleichen wir Regionen, Kapazität, Arbeitsplätze, Flughafenanbindung, Parken, Pool, Privatsphäre und Betriebsanforderungen."] },
        { heading: "Lokale Betreuung ist Teil des Modells", body: ["Eine Firmenimmobilie braucht klare Abläufe, wenn niemand vor Ort ist. Schlüsselhaltung, Kontrollen, Reinigung und Problemlösung können lokal organisiert werden."] },
      ],
      primary: "Firmenimmobilie besprechen",
      secondary: "Ratgeber lesen",
    },
    es: {
      eyebrow: "Zen Corporate Homes",
      title: "Una vivienda en España puede ser una herramienta empresarial",
      lead: "Ayudamos a empresas, asociaciones y organizaciones a valorar si una vivienda en la Costa Blanca encaja para empleados, reuniones, miembros o varios usos.",
      sections: [
        { heading: "Empieza por el propósito y los usuarios", body: ["Define quién puede usar la vivienda, con qué frecuencia, para qué y bajo qué normas internas antes de analizar propiedades concretas.", "Una vivienda para pequeñas reuniones de dirección necesita cosas distintas a una solución abierta a un grupo amplio de empleados."] },
        { heading: "Prepara el caso de decisión antes de la shortlist", body: ["El precio es solo una parte. Incluye costes de compra, gastos anuales, uso del capital, ocupación prevista, administración y alternativas de alojamiento.", "Fiscalidad, contabilidad y estructura de propiedad dependen de la organización y de las jurisdicciones implicadas y deben revisarse con asesores cualificados."] },
        { heading: "Después elige zona y vivienda", body: ["Con el uso y la economía claros, podemos comparar zonas, capacidad, puestos de trabajo, aeropuerto, aparcamiento, piscina, privacidad y necesidades operativas."] },
        { heading: "El seguimiento local forma parte de la solución", body: ["Una vivienda corporativa necesita rutinas cuando está vacía. Custodia de llaves, inspecciones, limpieza y gestión de incidencias pueden coordinarse localmente."] },
      ],
      primary: "Hablar sobre vivienda corporativa",
      secondary: "Leer guías corporativas",
    },
  },
  "corporate-guides": {
    en: {
      eyebrow: "Corporate knowledge centre",
      title: "Five questions to answer before a company buys property in Spain",
      lead: "Use these guides as a management checklist before spending time on specific properties.",
      sections: [
        { heading: "1. What problem should the property solve?", body: ["Employee benefit, work retreats, member use, recurring accommodation or a combination all lead to different requirements. Write the purpose down first."] },
        { heading: "2. Who gets access and how is use governed?", body: ["Define user groups, booking principles, peak periods, guests, cancellations, responsibilities and documentation before launch."] },
        { heading: "3. What is the real economic comparison?", body: ["Compare total purchase and running costs with realistic hotel or rental alternatives. Include capital use and administration rather than relying on a simple cost-per-night claim."] },
        { heading: "4. Which advisers must be involved?", body: ["Property advice does not replace tax, accounting or legal advice. The organisation should obtain the right home-country and Spanish expertise for ownership, employee use and reporting."] },
        { heading: "5. How will the property operate locally?", body: ["Plan keyholding, cleaning, inspections, maintenance, guest preparation and incident handling before completion, not after the first problem."] },
      ],
      primary: "Get a first corporate assessment",
      secondary: "Corporate Homes overview",
    },
    de: {
      eyebrow: "Corporate Wissenscenter",
      title: "Fünf Fragen vor dem Kauf einer Firmenimmobilie in Spanien",
      lead: "Nutzen Sie diese Themen als Management-Checkliste, bevor Zeit in konkrete Immobilien investiert wird.",
      sections: [
        { heading: "1. Welches Problem soll die Immobilie lösen?", body: ["Mitarbeitervorteil, Workshops, Mitgliedernutzung oder wiederkehrende Unterkunft führen zu unterschiedlichen Anforderungen. Der Zweck sollte zuerst schriftlich festgehalten werden."] },
        { heading: "2. Wer darf die Immobilie nutzen?", body: ["Definieren Sie Nutzergruppen, Buchungsregeln, Hochsaison, Gäste, Stornierungen, Verantwortung und Dokumentation vor dem Start."] },
        { heading: "3. Wie sieht der echte wirtschaftliche Vergleich aus?", body: ["Vergleichen Sie Kauf- und Betriebskosten mit realistischen Hotel- oder Mietalternativen. Kapitaleinsatz und Verwaltung gehören ebenfalls in die Rechnung."] },
        { heading: "4. Welche Berater werden benötigt?", body: ["Immobilienberatung ersetzt keine Steuer-, Bilanz- oder Rechtsberatung. Für Eigentum, Mitarbeitervorteile und Berichterstattung sollten passende Fachleute im Heimatland und in Spanien eingebunden werden."] },
        { heading: "5. Wie wird die Immobilie vor Ort betrieben?", body: ["Schlüssel, Reinigung, Kontrollen, Wartung, Gästebereitstellung und Störungen sollten vor der Übergabe organisiert sein."] },
      ],
      primary: "Erste Unternehmensbewertung anfragen",
      secondary: "Corporate Homes Überblick",
    },
    es: {
      eyebrow: "Centro de conocimiento corporativo",
      title: "Cinco preguntas antes de que una empresa compre vivienda en España",
      lead: "Utiliza estas guías como checklist de dirección antes de dedicar tiempo a viviendas concretas.",
      sections: [
        { heading: "1. ¿Qué problema debe resolver la vivienda?", body: ["Beneficio para empleados, reuniones de trabajo, uso de miembros o alojamiento recurrente generan necesidades diferentes. Define primero el propósito."] },
        { heading: "2. ¿Quién tendrá acceso y cómo se organiza?", body: ["Define usuarios, reglas de reserva, temporadas de alta demanda, invitados, cancelaciones, responsabilidades y documentación antes de poner en marcha el modelo."] },
        { heading: "3. ¿Cuál es la comparación económica real?", body: ["Compara coste total de compra y operación con alternativas realistas de hotel o alquiler. Incluye uso del capital y administración."] },
        { heading: "4. ¿Qué asesores deben participar?", body: ["El asesoramiento inmobiliario no sustituye al fiscal, contable o jurídico. La organización debe contar con profesionales adecuados tanto en su país como en España."] },
        { heading: "5. ¿Cómo funcionará la vivienda localmente?", body: ["Llaves, limpieza, inspecciones, mantenimiento, preparación de estancias e incidencias deben planificarse antes de la entrega."] },
      ],
      primary: "Solicitar primera evaluación corporativa",
      secondary: "Ver Corporate Homes",
    },
  },
  partners: {
    en: {
      eyebrow: "Partner channel",
      title: "A local property partner for the clients you already advise",
      lead: "We work with advisers, associations and professional networks that want a structured Costa Blanca property route for relevant clients, members or companies.",
      sections: [
        { heading: "Who the partnership can fit", body: ["Financial advisers, accountants, HR advisers, member organisations, relocation specialists and other trusted advisers may encounter clients considering property in Spain.", "The partnership works best when roles are clear: the partner keeps its trusted relationship while Zen handles the property process locally."] },
        { heading: "What we can take responsibility for", body: ["Needs assessment, area comparison, property shortlist, viewing coordination, purchase-process support and practical local follow-up can be handled within one property workflow."] },
        { heading: "What we do not replace", body: ["We do not replace the partner's legal, tax, accounting or regulated advice. Where specialist advice is required, the client should continue to use appropriately qualified professionals."] },
        { heading: "Commercial terms before referrals", body: ["Any referral or commercial model should be agreed before specific introductions, with clear expectations about lead ownership, communication and compensation where relevant."] },
      ],
      primary: "Discuss a partnership",
      secondary: "Corporate Homes",
    },
    de: {
      eyebrow: "Partnerkanal",
      title: "Ein lokaler Immobilienpartner für Ihre bestehenden Kunden",
      lead: "Wir arbeiten mit Beratern, Verbänden und Netzwerken, die für relevante Kunden, Mitglieder oder Unternehmen einen strukturierten Immobilienweg an der Costa Blanca anbieten möchten.",
      sections: [
        { heading: "Für wen eine Partnerschaft passen kann", body: ["Finanzberater, Steuerberater, HR-Berater, Mitgliederorganisationen, Relocation-Spezialisten und andere Vertrauenspersonen treffen regelmäßig auf Kunden mit Spanienplänen.", "Das Modell funktioniert am besten bei klaren Rollen: Der Partner behält seine Beratungsbeziehung, Zen übernimmt den lokalen Immobilienprozess."] },
        { heading: "Welche Aufgaben wir übernehmen können", body: ["Bedarfsanalyse, Regionsvergleich, Immobilienauswahl, Besichtigungskoordination, Kaufbegleitung und lokale Nachbetreuung können in einem strukturierten Ablauf gebündelt werden."] },
        { heading: "Was wir nicht ersetzen", body: ["Wir ersetzen keine Rechts-, Steuer-, Bilanz- oder regulierte Beratung des Partners. Spezialfragen gehören weiterhin zu entsprechend qualifizierten Fachleuten."] },
        { heading: "Kommerzielle Regeln vor Empfehlungen", body: ["Empfehlungs- oder Vergütungsmodelle sollten vor konkreten Kontakten vereinbart werden, inklusive Rollen, Kommunikation und Vergütung, soweit relevant."] },
      ],
      primary: "Partnerschaft besprechen",
      secondary: "Corporate Homes",
    },
    es: {
      eyebrow: "Canal de colaboradores",
      title: "Un socio inmobiliario local para los clientes que ya asesoras",
      lead: "Trabajamos con asesores, asociaciones y redes profesionales que quieren ofrecer una vía inmobiliaria estructurada en la Costa Blanca a clientes, miembros o empresas.",
      sections: [
        { heading: "Para quién puede encajar", body: ["Asesores financieros, contables, consultores de RR. HH., organizaciones de miembros, especialistas en relocation y otros profesionales de confianza pueden encontrarse con clientes interesados en España.", "El modelo funciona mejor con roles claros: el colaborador mantiene su relación de confianza y Zen gestiona el proceso inmobiliario local."] },
        { heading: "Qué podemos asumir", body: ["Análisis de necesidades, comparación de zonas, shortlist, coordinación de visitas, acompañamiento en la compra y seguimiento local pueden organizarse dentro de un mismo flujo."] },
        { heading: "Qué no sustituimos", body: ["No sustituimos asesoramiento jurídico, fiscal, contable o regulado del colaborador. Las cuestiones especializadas deben seguir en manos de profesionales cualificados."] },
        { heading: "Condiciones comerciales antes de derivar clientes", body: ["Cualquier modelo de referral o compensación debe acordarse antes de presentaciones concretas, con claridad sobre roles, comunicación y remuneración cuando corresponda."] },
      ],
      primary: "Hablar de colaboración",
      secondary: "Corporate Homes",
    },
  },
  magazine: {
    en: { eyebrow: "Magazine", title: "Property, areas and everyday life on the Costa Blanca", lead: "Market context, comparisons and practical editorial articles that add depth beyond a property listing.", sections: [], primary: "View properties", secondary: "Buyer guides" },
    de: { eyebrow: "Magazin", title: "Immobilien, Regionen und Alltag an der Costa Blanca", lead: "Marktkontext, Vergleiche und praktische redaktionelle Beiträge, die über ein Immobilienexposé hinausgehen.", sections: [], primary: "Immobilien ansehen", secondary: "Ratgeber" },
    es: { eyebrow: "Revista", title: "Vivienda, zonas y vida cotidiana en la Costa Blanca", lead: "Contexto de mercado, comparativas y artículos prácticos que aportan más información que un simple anuncio.", sections: [], primary: "Ver propiedades", secondary: "Guías de compra" },
  },
};

function languageLinks(key: LocalizedMenuPageKey, locale: Locale) {
  return (["no", "de", "en", "es"] as const).map((code) => ({
    locale: code as SiteLocale,
    href: ROUTES[key][code],
    current: code === locale,
  }));
}

export function localizedMenuPageMetadata(locale: Locale, key: LocalizedMenuPageKey): Metadata {
  const meta = META[key][locale];
  const languages: Record<string, string> = {
    "nb-NO": "https://www.zenecohomes.com" + ROUTES[key].no,
    "x-default": "https://www.zenecohomes.com" + ROUTES[key].no,
    "de-DE": "https://www.zenecohomes.com" + ROUTES[key].de,
    en: "https://www.zenecohomes.com" + ROUTES[key].en,
    "es-ES": "https://www.zenecohomes.com" + ROUTES[key].es,
  };
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: ROUTES[key][locale], languages },
  };
}

function primaryHref(locale: Locale, key: LocalizedMenuPageKey) {
  if (key === "magazine") return PROPERTIES[locale];
  return BOOKING[locale];
}

function secondaryHref(locale: Locale, key: LocalizedMenuPageKey) {
  if (key === "about") return FREDDY[locale];
  if (key === "reviews") return BUYING[locale];
  if (key === "viewing") return AREAS[locale];
  if (key === "corporate") return ROUTES["corporate-guides"][locale];
  if (key === "corporate-guides") return ROUTES.corporate[locale];
  if (key === "partners") return ROUTES.corporate[locale];
  return GUIDES[locale];
}

function SectionList({ sections }: { sections: Section[] }) {
  return (
    <div className="card-list">
      {sections.map((section, index) => (
        <article className="info-card" key={section.heading}>
          <CheckCircle2 />
          <div>
            <p className="eyebrow">{String(index + 1).padStart(2, "0")}</p>
            <h2>{section.heading}</h2>
            {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {section.bullets ? <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul> : null}
          </div>
        </article>
      ))}
    </div>
  );
}

function MagazineCards({ locale }: { locale: Locale }) {
  const prefix = locale === "en" ? "/en/magazine" : locale === "de" ? "/de/magazin" : "/es/revista";
  const read = locale === "en" ? "Read article" : locale === "de" ? "Artikel lesen" : "Leer artículo";
  return (
    <div className="magazine-grid">
      {magazineArticles[locale].map((article) => (
        <article className="magazine-card" key={article.slug}>
          <div className="magazine-body">
            <p className="magazine-meta">{article.eyebrow} · {article.readingTime}</p>
            <h2>{article.title}</h2>
            <p>{article.excerpt}</p>
            <Link className="text-button" href={prefix + "/" + article.slug}>
              {read} <ArrowRight size={16} />
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}

export function LocalizedMenuPage({ locale, pageKey }: { locale: Locale; pageKey: LocalizedMenuPageKey }) {
  const copy = COPY[pageKey][locale];
  const corporateLabel = locale === "en" ? "Corporate Homes" : locale === "de" ? "Firmenimmobilien" : "Vivienda corporativa";

  return (
    <main lang={locale}>
      <SiteHeader locale={locale} languageLinks={languageLinks(pageKey, locale)} />

      <section className="page-hero compact-hero image-hero">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h1>{copy.title}</h1>
        <p>{copy.lead}</p>
        <div className="hero-actions">
          <Link className="contact-button" href={primaryHref(locale, pageKey)}>
            {copy.primary} <ArrowRight size={17} />
          </Link>
          {copy.secondary ? <Link className="text-button light" href={secondaryHref(locale, pageKey)}>{copy.secondary}</Link> : null}
        </div>
      </section>

      {pageKey === "reviews" ? (
        <>
          <Testimonials locale={locale} />
          <section className="section split">
            <div>
              <p className="eyebrow">{locale === "en" ? "How we use feedback" : locale === "de" ? "Wie wir Rückmeldungen nutzen" : "Cómo usamos las opiniones"}</p>
              <h2>{locale === "en" ? "Context matters more than stars alone" : locale === "de" ? "Kontext ist wichtiger als Sterne allein" : "El contexto importa más que las estrellas"}</h2>
              <p>{locale === "en" ? "Public reviews are labelled with their source. Direct client quotes are used with consent, and translated quotes are clearly described as translations." : locale === "de" ? "Öffentliche Bewertungen werden mit Quelle gekennzeichnet. Direkte Kundenzitate werden mit Zustimmung verwendet; Übersetzungen werden als solche beschrieben." : "Las reseñas públicas indican su fuente. Los testimonios directos se usan con consentimiento y las traducciones se identifican como tales."}</p>
            </div>
            <aside className="feature-panel">
              <div><Quote /><strong>{locale === "en" ? "Real journeys" : locale === "de" ? "Reale Erfahrungen" : "Experiencias reales"}</strong><span>{locale === "en" ? "Feedback from different stages of the buying process." : locale === "de" ? "Rückmeldungen aus verschiedenen Phasen des Kaufprozesses." : "Opiniones de distintas fases del proceso de compra."}</span></div>
            </aside>
          </section>
        </>
      ) : pageKey === "magazine" ? (
        <>
          <section className="section proof-section">
            <div className="section-heading">
              <p className="eyebrow">{locale === "en" ? "Editorial focus" : locale === "de" ? "Redaktioneller Fokus" : "Enfoque editorial"}</p>
              <h2>{locale === "en" ? "Three useful reads to start with" : locale === "de" ? "Drei Beiträge zum Einstieg" : "Tres lecturas para empezar"}</h2>
              <p>{locale === "en" ? "These articles are written specifically for the English edition rather than sending you to Norwegian content." : locale === "de" ? "Diese Beiträge wurden für die deutsche Ausgabe erstellt und führen nicht zurück zu norwegischem Inhalt." : "Estos artículos están creados para la edición en español y no te devuelven a contenido en noruego."}</p>
            </div>
            <MagazineCards locale={locale} />
          </section>
          <section className="section split">
            <div>
              <p className="eyebrow">{locale === "en" ? "Guide or magazine?" : locale === "de" ? "Ratgeber oder Magazin?" : "¿Guía o revista?"}</p>
              <h2>{locale === "en" ? "Evergreen answers live in Guides" : locale === "de" ? "Dauerhafte Antworten stehen in den Ratgebern" : "Las respuestas permanentes están en Guías"}</h2>
              <p>{locale === "en" ? "Use Guides for buying process, areas, new build and practical decisions. Use Magazine for comparisons, market context and experience-based articles." : locale === "de" ? "Ratgeber behandeln Kaufprozess, Regionen, Neubau und praktische Entscheidungen. Das Magazin bietet Vergleiche, Marktkontext und Erfahrungsartikel." : "Guías reúne proceso de compra, zonas, obra nueva y decisiones prácticas. Revista se centra en comparativas, contexto de mercado y experiencia."}</p>
            </div>
            <aside className="feature-panel">
              <div><MapPin /><strong>{locale === "en" ? "Start with area and use" : locale === "de" ? "Mit Region und Nutzung beginnen" : "Empieza por zona y uso"}</strong><span>{locale === "en" ? "Then compare the properties that fit." : locale === "de" ? "Danach passende Immobilien vergleichen." : "Después compara las viviendas que encajan."}</span></div>
            </aside>
          </section>
        </>
      ) : (
        <section className="section">
          <SectionList sections={copy.sections} />
        </section>
      )}

      {(pageKey === "corporate" || pageKey === "corporate-guides" || pageKey === "partners") ? (
        <section className="section proof-section">
          <div className="proof-grid">
            <article><BriefcaseBusiness /><h3>{corporateLabel}</h3><p>{locale === "en" ? "Property advice based on business use, not a residential sales script." : locale === "de" ? "Immobilienberatung ausgehend von Unternehmensnutzung statt klassischem Verkauf." : "Asesoramiento basado en el uso empresarial, no en un guion de venta residencial."}</p></article>
            <article><Users /><h3>{locale === "en" ? "Users first" : locale === "de" ? "Nutzer zuerst" : "Primero los usuarios"}</h3><p>{locale === "en" ? "Capacity, access and governance shape the property brief." : locale === "de" ? "Kapazität, Zugang und Regeln bestimmen das Anforderungsprofil." : "Capacidad, acceso y normas definen el tipo de vivienda necesario."}</p></article>
            <article><Handshake /><h3>{locale === "en" ? "Specialists stay involved" : locale === "de" ? "Fachberater bleiben eingebunden" : "Los especialistas siguen implicados"}</h3><p>{locale === "en" ? "Legal, tax and accounting questions stay with qualified advisers." : locale === "de" ? "Recht, Steuern und Bilanzierung bleiben bei qualifizierten Fachleuten." : "Las cuestiones jurídicas, fiscales y contables siguen con profesionales cualificados."}</p></article>
          </div>
        </section>
      ) : null}

      <section className="contact-section">
        <div>
          <p className="eyebrow">{locale === "en" ? "Next step" : locale === "de" ? "Nächster Schritt" : "Siguiente paso"}</p>
          <h2>{locale === "en" ? "Tell us what you are trying to achieve" : locale === "de" ? "Sagen Sie uns, was Sie erreichen möchten" : "Cuéntanos qué quieres conseguir"}</h2>
          <p>{locale === "en" ? "We can help narrow the area, property type and next step before you spend time on irrelevant options." : locale === "de" ? "Wir helfen, Region, Immobilientyp und nächsten Schritt einzugrenzen, bevor Zeit in unpassende Optionen fließt." : "Podemos ayudarte a concretar zona, tipo de vivienda y siguiente paso antes de perder tiempo con opciones que no encajan."}</p>
        </div>
        <Link className="contact-button" href={BOOKING[locale]}>{copy.primary}</Link>
      </section>

      <Footer locale={locale} />
    </main>
  );
}

export const localizedMenuRoutes = ROUTES;
export const localizedEditorialHome = HOME;
export { CARE_URL };
