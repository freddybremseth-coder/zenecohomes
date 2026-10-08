export type EditorialLocale = "en" | "de" | "es";

export type LocalizedMagazineArticle = {
  key: "area-first" | "new-vs-resale" | "view-vs-walk";
  slug: string;
  title: string;
  excerpt: string;
  eyebrow: string;
  readingTime: string;
  intro: string[];
  sections: { heading: string; body: string[]; bullets?: string[] }[];
};

export const magazineArticles: Record<EditorialLocale, LocalizedMagazineArticle[]> = {
  en: [
    {
      key: "area-first",
      slug: "area-before-property",
      title: "Choose the area before you choose the property",
      excerpt: "Why daily life, access and seasonality usually matter more than an impressive listing when you buy on the Costa Blanca.",
      eyebrow: "Area strategy",
      readingTime: "6 min read",
      intro: [
        "It is easy to fall in love with a terrace, a sea view or a beautifully staged living room. The harder question is whether the location still works on an ordinary Tuesday in February.",
        "When I advise buyers, I prefer to narrow the area before we narrow the property list. That usually produces fewer viewings, better comparisons and fewer compromises that only become obvious after completion.",
      ],
      sections: [
        {
          heading: "Start with the life you want to live",
          body: [
            "Think about how often you will use the home, whether you want to walk to restaurants and the beach, how important airport access is, and whether you are comfortable depending on a car.",
            "A buyer who wants a lock-up-and-leave apartment close to everyday services should not use the same search logic as someone who wants privacy, land and quiet inland living.",
          ],
        },
        {
          heading: "Test the area outside the viewing",
          body: [
            "A property viewing shows you the home. It rarely shows you school traffic, evening noise, winter opening hours, steep walking routes or how long the supermarket trip actually takes.",
            "Spend time in the neighbourhood without the agent. Walk the route you expect to use, drive to the places that matter, and return at a different time of day if the property is a serious candidate.",
          ],
          bullets: [
            "Walkability and gradients",
            "Traffic and construction activity",
            "Year-round services",
            "Airport and road access",
            "Sun orientation and surrounding plots",
          ],
        },
        {
          heading: "A better area can make an ordinary property the better purchase",
          body: [
            "Buyers often compare homes as if the building were the entire product. In reality, location affects how often the property is used, how easy it is to rent or resell, and how much friction there is in everyday life.",
            "That is why I would rather show a client three relevant properties in the right area than ten attractive properties spread across places that do not fit the same lifestyle.",
          ],
        },
      ],
    },
    {
      key: "new-vs-resale",
      slug: "new-build-or-resale-costa-blanca",
      title: "New build or resale on the Costa Blanca?",
      excerpt: "A practical comparison of certainty, delivery time, maintenance, location and total cost before you decide what type of property to buy.",
      eyebrow: "Property choice",
      readingTime: "7 min read",
      intro: [
        "New build and resale are not simply two price categories. They are two different buying experiences with different strengths, risks and timelines.",
        "The right choice depends on what you value most: seeing exactly what you buy, moving in quickly, choosing a mature location, reducing maintenance, or getting a more modern specification.",
      ],
      sections: [
        {
          heading: "Why buyers choose new build",
          body: [
            "Modern layouts, new technical installations, better energy performance and lower expected maintenance are strong advantages. In some projects you can also choose finishes or options when you buy early enough.",
            "The trade-off is that you may be buying before completion. You therefore need to understand the developer, specification, payment plan, guarantees, delivery timing and what is actually included in the advertised price.",
          ],
        },
        {
          heading: "Why resale can be the better fit",
          body: [
            "With resale you can usually see the finished home, the real view, the surrounding buildings and the established neighbourhood. Completion can also be much faster.",
            "The uncertainty moves from construction and delivery to condition and history. Older electrical systems, plumbing, previous alterations and deferred maintenance should be taken seriously and checked where relevant.",
          ],
        },
        {
          heading: "Compare total outcome, not headline price",
          body: [
            "A resale property may need renovation or furnishing. A new build may have taxes, options, lighting, furniture, landscaping or other items outside the base price.",
            "The useful comparison is therefore total capital required, expected maintenance, delivery timing and how well the specific location fits your intended use.",
          ],
          bullets: [
            "Total purchase cost",
            "Time to completion",
            "Expected maintenance",
            "Energy performance",
            "Location maturity",
            "What is included in the specification",
          ],
        },
      ],
    },
    {
      key: "view-vs-walk",
      slug: "sea-view-or-walkability-costa-blanca",
      title: "Sea view or walkability: what matters more?",
      excerpt: "A sea view creates emotion. Walkability changes everyday use. Here is how to compare the two before paying a premium for either.",
      eyebrow: "Lifestyle choice",
      readingTime: "6 min read",
      intro: [
        "Sea view is one of the strongest emotional drivers in Costa Blanca property searches. Walkability is less dramatic in a photo, but it often determines how easy and enjoyable the property is to use.",
        "Neither is universally better. The important question is which benefit you will actually use most often, and what you are giving up to get it.",
      ],
      sections: [
        {
          heading: "The hidden cost of the view",
          body: [
            "A better view may mean a steeper hillside, more dependence on a car, stronger wind exposure or greater distance from shops and restaurants. In some areas the best views come with very practical trade-offs.",
            "Also check whether the view depends on an undeveloped neighbouring plot. A current open view is not automatically a protected view.",
          ],
        },
        {
          heading: "Walkability is a daily convenience",
          body: [
            "Being able to walk to a café, supermarket, beach or restaurant can make a holiday home feel much easier to use. It can also reduce the need for every guest or family member to drive.",
            "But 'walking distance' in an advert should be tested in real life. Ten minutes downhill can feel very different on the way back in summer.",
          ],
        },
        {
          heading: "Choose according to your actual use",
          body: [
            "If the home will be used for long stays, remote work or quieter living, a view and private outdoor space may matter more. If it is a frequent holiday base with teenagers, guests or short stays, walkability may create more practical value.",
            "The best property is often the one that balances both reasonably well rather than maximising one feature at the expense of everything else.",
          ],
        },
      ],
    },
  ],
  de: [
    {
      key: "area-first",
      slug: "region-vor-immobilie",
      title: "Erst die Region wählen, dann die Immobilie",
      excerpt: "Warum Alltag, Erreichbarkeit und Saison oft wichtiger sind als ein beeindruckendes Exposé an der Costa Blanca.",
      eyebrow: "Standortstrategie",
      readingTime: "6 Min. Lesezeit",
      intro: [
        "Eine große Terrasse, Meerblick oder ein perfekt eingerichtetes Wohnzimmer können sofort überzeugen. Schwieriger ist die Frage, ob der Standort auch an einem normalen Dienstag im Februar funktioniert.",
        "In der Beratung grenze ich deshalb zuerst die Region und erst danach die konkrete Immobilie ein. Das führt meist zu weniger Besichtigungen, besseren Vergleichen und weniger Kompromissen nach dem Kauf.",
      ],
      sections: [
        {
          heading: "Beginnen Sie mit dem Alltag, den Sie wirklich möchten",
          body: [
            "Überlegen Sie, wie oft Sie die Immobilie nutzen, ob Restaurants und Strand zu Fuß erreichbar sein sollen, wie wichtig die Flughafenanbindung ist und ob Sie im Alltag auf ein Auto angewiesen sein möchten.",
            "Wer eine pflegeleichte Ferienwohnung mit kurzen Wegen sucht, braucht eine andere Suchstrategie als jemand, der Ruhe, Grundstück und Privatsphäre im Hinterland möchte.",
          ],
        },
        {
          heading: "Testen Sie die Umgebung außerhalb der Besichtigung",
          body: [
            "Eine Besichtigung zeigt die Immobilie. Sie zeigt selten Schulverkehr, Abendgeräusche, Öffnungszeiten im Winter, starke Steigungen oder die tatsächliche Fahrzeit zum Supermarkt.",
            "Verbringen Sie deshalb Zeit im Viertel ohne Makler. Gehen Sie die Wege, die Sie später nutzen wollen, und besuchen Sie die Umgebung zu einer anderen Tageszeit erneut, wenn die Immobilie ernsthaft infrage kommt.",
          ],
          bullets: [
            "Fußläufigkeit und Steigungen",
            "Verkehr und Bautätigkeit",
            "Ganzjährige Infrastruktur",
            "Flughafen- und Straßenanbindung",
            "Sonnenausrichtung und Nachbargrundstücke",
          ],
        },
        {
          heading: "Die bessere Lage kann die unspektakulärere Immobilie zum besseren Kauf machen",
          body: [
            "Viele Käufer vergleichen Häuser und Wohnungen, als wäre das Gebäude das gesamte Produkt. Tatsächlich beeinflusst die Lage, wie oft die Immobilie genutzt wird, wie einfach sie später vermietet oder verkauft werden kann und wie bequem der Alltag ist.",
            "Deshalb zeige ich lieber drei passende Immobilien in der richtigen Region als zehn attraktive Objekte in Orten, die völlig unterschiedliche Lebensweisen erfordern.",
          ],
        },
      ],
    },
    {
      key: "new-vs-resale",
      slug: "neubau-oder-bestandsimmobilie-costa-blanca",
      title: "Neubau oder Bestandsimmobilie an der Costa Blanca?",
      excerpt: "Ein praktischer Vergleich von Sicherheit, Fertigstellung, Wartung, Lage und Gesamtkosten vor der Kaufentscheidung.",
      eyebrow: "Immobilienwahl",
      readingTime: "7 Min. Lesezeit",
      intro: [
        "Neubau und Bestandsimmobilie sind nicht nur zwei Preisgruppen. Es sind zwei unterschiedliche Kaufprozesse mit eigenen Vorteilen, Risiken und Zeitplänen.",
        "Die richtige Wahl hängt davon ab, was Ihnen wichtiger ist: genau sehen, was Sie kaufen, schnell einziehen, in einer gewachsenen Lage wohnen, Wartung reduzieren oder eine moderne Ausstattung erhalten.",
      ],
      sections: [
        {
          heading: "Warum Käufer sich für Neubau entscheiden",
          body: [
            "Moderne Grundrisse, neue technische Anlagen, bessere Energieeffizienz und geringerer Wartungsbedarf in den ersten Jahren sind klare Vorteile. Bei frühem Kauf lassen sich teilweise auch Materialien oder Optionen wählen.",
            "Dafür kaufen Sie möglicherweise vor Fertigstellung. Dann müssen Bauträger, Baubeschreibung, Zahlungsplan, Garantien, Liefertermin und enthaltene Leistungen genau verstanden werden.",
          ],
        },
        {
          heading: "Wann eine Bestandsimmobilie besser passt",
          body: [
            "Bei einer Bestandsimmobilie sehen Sie in der Regel das fertige Objekt, den tatsächlichen Ausblick, die Nachbarbebauung und das gewachsene Umfeld. Auch die Übergabe kann deutlich schneller erfolgen.",
            "Die Unsicherheit liegt dafür stärker im technischen Zustand und in der Historie. Ältere Elektrik, Leitungen, Umbauten und aufgeschobene Instandhaltung sollten bei Bedarf fachlich geprüft werden.",
          ],
        },
        {
          heading: "Vergleichen Sie das Gesamtergebnis statt nur den Angebotspreis",
          body: [
            "Eine Bestandsimmobilie kann Renovierung oder Möblierung benötigen. Beim Neubau können Steuern, Sonderwünsche, Beleuchtung, Möbel, Außenanlagen oder weitere Positionen außerhalb des Grundpreises liegen.",
            "Sinnvoll ist daher ein Vergleich von gesamtem Kapitalbedarf, Wartung, Lieferzeit und der Eignung der konkreten Lage für Ihre Nutzung.",
          ],
          bullets: [
            "Gesamtkaufkosten",
            "Zeit bis zur Übergabe",
            "Erwartete Wartung",
            "Energieeffizienz",
            "Reife der Lage",
            "Enthaltene Ausstattung",
          ],
        },
      ],
    },
    {
      key: "view-vs-walk",
      slug: "meerblick-oder-fusslaeufig-costa-blanca",
      title: "Meerblick oder kurze Wege: Was ist wichtiger?",
      excerpt: "Meerblick erzeugt Emotionen. Fußläufigkeit prägt den Alltag. So vergleichen Sie beide Vorteile vor dem Kauf.",
      eyebrow: "Lebensstil",
      readingTime: "6 Min. Lesezeit",
      intro: [
        "Meerblick gehört zu den stärksten emotionalen Faktoren bei der Immobiliensuche an der Costa Blanca. Fußläufigkeit wirkt auf Fotos weniger spektakulär, bestimmt aber oft, wie unkompliziert sich die Immobilie tatsächlich nutzen lässt.",
        "Keines von beiden ist grundsätzlich besser. Entscheidend ist, welchen Vorteil Sie häufiger nutzen und worauf Sie dafür verzichten.",
      ],
      sections: [
        {
          heading: "Der versteckte Preis des Ausblicks",
          body: [
            "Ein besserer Ausblick kann eine steilere Hanglage, mehr Autoabhängigkeit, stärkeren Wind oder größere Entfernung zu Geschäften und Restaurants bedeuten. In manchen Orten haben die besten Aussichten sehr praktische Nachteile.",
            "Prüfen Sie außerdem, ob der Ausblick von einem unbebauten Nachbargrundstück abhängt. Ein heute freier Blick ist nicht automatisch dauerhaft geschützt.",
          ],
        },
        {
          heading: "Fußläufigkeit ist täglicher Komfort",
          body: [
            "Wenn Café, Supermarkt, Strand oder Restaurant zu Fuß erreichbar sind, lässt sich eine Ferienimmobilie oft deutlich entspannter nutzen. Auch Gäste und Familienmitglieder sind weniger auf ein Auto angewiesen.",
            "Die Angabe 'zu Fuß erreichbar' sollte jedoch real getestet werden. Zehn Minuten bergab fühlen sich auf dem Rückweg im Sommer ganz anders an.",
          ],
        },
        {
          heading: "Entscheiden Sie nach der tatsächlichen Nutzung",
          body: [
            "Bei langen Aufenthalten, Homeoffice oder ruhigem Wohnen können Aussicht und privater Außenbereich wichtiger sein. Bei häufigen Kurzaufenthalten, Jugendlichen oder Gästen kann Fußläufigkeit mehr praktischen Wert schaffen.",
            "Die beste Immobilie ist häufig die, die beide Eigenschaften vernünftig kombiniert, statt eine davon auf Kosten aller anderen Kriterien zu maximieren.",
          ],
        },
      ],
    },
  ],
  es: [
    {
      key: "area-first",
      slug: "zona-antes-que-vivienda",
      title: "Elige primero la zona y después la vivienda",
      excerpt: "Por qué la vida diaria, los accesos y la estacionalidad suelen importar más que un anuncio espectacular en la Costa Blanca.",
      eyebrow: "Estrategia de zona",
      readingTime: "6 min de lectura",
      intro: [
        "Es fácil enamorarse de una terraza, unas vistas al mar o un salón perfectamente presentado. La pregunta más difícil es si la ubicación sigue funcionando un martes cualquiera de febrero.",
        "Cuando asesoro a compradores prefiero reducir primero las zonas y después la lista de viviendas. Normalmente eso significa menos visitas, comparaciones más útiles y menos compromisos que solo se descubren después de comprar.",
      ],
      sections: [
        {
          heading: "Empieza por la vida que quieres tener",
          body: [
            "Piensa con qué frecuencia usarás la vivienda, si quieres ir andando a restaurantes y playa, cuánto importa el acceso al aeropuerto y si te parece bien depender del coche.",
            "Quien busca un apartamento fácil de mantener y cerca de servicios necesita una estrategia distinta a quien busca privacidad, terreno y tranquilidad en el interior.",
          ],
        },
        {
          heading: "Prueba la zona fuera de la visita",
          body: [
            "Una visita enseña la vivienda. Rara vez enseña el tráfico escolar, el ruido nocturno, los horarios de invierno, las pendientes o cuánto tardas realmente en llegar al supermercado.",
            "Dedica tiempo al barrio sin el agente. Recorre a pie los trayectos que usarías y vuelve a otra hora si la vivienda es una candidata seria.",
          ],
          bullets: [
            "Distancias a pie y pendientes",
            "Tráfico y obras",
            "Servicios durante todo el año",
            "Acceso a aeropuerto y carreteras",
            "Orientación solar y parcelas cercanas",
          ],
        },
        {
          heading: "Una zona mejor puede convertir una vivienda normal en una compra mejor",
          body: [
            "Muchos compradores comparan viviendas como si el edificio fuera todo el producto. En realidad, la ubicación afecta a cuánto se usa, lo fácil que será alquilarla o venderla y la comodidad del día a día.",
            "Por eso prefiero enseñar tres viviendas relevantes en la zona correcta que diez propiedades atractivas repartidas entre lugares que exigen estilos de vida distintos.",
          ],
        },
      ],
    },
    {
      key: "new-vs-resale",
      slug: "obra-nueva-o-segunda-mano-costa-blanca",
      title: "¿Obra nueva o segunda mano en la Costa Blanca?",
      excerpt: "Una comparación práctica de plazos, mantenimiento, ubicación, certidumbre y coste total antes de decidir qué comprar.",
      eyebrow: "Tipo de vivienda",
      readingTime: "7 min de lectura",
      intro: [
        "Obra nueva y segunda mano no son simplemente dos niveles de precio. Son dos experiencias de compra distintas, con ventajas, riesgos y plazos diferentes.",
        "La mejor opción depende de lo que más valores: ver exactamente lo que compras, entrar pronto, elegir una zona consolidada, reducir mantenimiento o disponer de especificaciones más modernas.",
      ],
      sections: [
        {
          heading: "Por qué muchos compradores eligen obra nueva",
          body: [
            "Distribuciones modernas, instalaciones nuevas, mejor comportamiento energético y menos mantenimiento previsto durante los primeros años son ventajas claras. En algunos proyectos también puedes elegir acabados u opciones si compras con suficiente antelación.",
            "La contrapartida es que quizá compres antes de que la vivienda esté terminada. Debes entender al promotor, la memoria de calidades, el calendario de pagos, las garantías, la entrega y qué incluye realmente el precio anunciado.",
          ],
        },
        {
          heading: "Cuándo puede encajar mejor una vivienda de segunda mano",
          body: [
            "En segunda mano normalmente puedes ver la vivienda acabada, las vistas reales, los edificios vecinos y un entorno ya consolidado. La compra también puede completarse mucho antes.",
            "La incertidumbre se traslada al estado y al historial del inmueble. Instalaciones eléctricas antiguas, tuberías, reformas previas y mantenimiento aplazado deben revisarse cuando sea relevante.",
          ],
        },
        {
          heading: "Compara el resultado total, no solo el precio de anuncio",
          body: [
            "Una vivienda usada puede necesitar reforma o mobiliario. Una obra nueva puede sumar impuestos, extras, iluminación, muebles, jardín u otras partidas fuera del precio base.",
            "La comparación útil incluye capital total necesario, mantenimiento previsto, plazo de entrega y encaje de la ubicación con el uso real que darás a la vivienda.",
          ],
          bullets: [
            "Coste total de compra",
            "Tiempo hasta la entrega",
            "Mantenimiento previsto",
            "Eficiencia energética",
            "Madurez de la zona",
            "Qué incluye la memoria de calidades",
          ],
        },
      ],
    },
    {
      key: "view-vs-walk",
      slug: "vistas-al-mar-o-ir-a-pie-costa-blanca",
      title: "¿Vistas al mar o poder ir andando a todo?",
      excerpt: "Las vistas generan emoción; la movilidad a pie cambia el uso diario. Cómo comparar ambas ventajas antes de pagar por ellas.",
      eyebrow: "Estilo de vida",
      readingTime: "6 min de lectura",
      intro: [
        "Las vistas al mar son uno de los factores emocionales más fuertes al buscar vivienda en la Costa Blanca. Poder ir andando a servicios parece menos espectacular en una foto, pero a menudo determina lo fácil que resulta usar la vivienda.",
        "Ninguna opción es siempre mejor. Lo importante es qué ventaja vas a utilizar con más frecuencia y a qué renuncias para conseguirla.",
      ],
      sections: [
        {
          heading: "El coste oculto de las vistas",
          body: [
            "Mejores vistas pueden significar más pendiente, mayor dependencia del coche, más viento o más distancia a tiendas y restaurantes. En algunas zonas, las mejores panorámicas vienen acompañadas de compromisos muy prácticos.",
            "Comprueba también si las vistas dependen de una parcela vecina sin construir. Una vista abierta hoy no significa necesariamente una vista protegida para siempre.",
          ],
        },
        {
          heading: "Poder ir andando es comodidad diaria",
          body: [
            "Llegar a pie a una cafetería, supermercado, playa o restaurante puede hacer que una segunda residencia sea mucho más fácil de usar. También reduce la necesidad de que cada invitado o miembro de la familia conduzca.",
            "Pero la frase 'a poca distancia andando' debe comprobarse en la práctica. Diez minutos cuesta abajo pueden sentirse muy diferentes al regresar en verano.",
          ],
        },
        {
          heading: "Elige según el uso real",
          body: [
            "Si vas a pasar temporadas largas, trabajar desde casa o buscar tranquilidad, las vistas y el espacio exterior privado pueden pesar más. Si será una base de vacaciones frecuente con adolescentes, invitados o estancias cortas, caminar a servicios puede aportar más valor práctico.",
            "A menudo la mejor vivienda es la que equilibra razonablemente ambos factores, en lugar de maximizar uno sacrificando todo lo demás.",
          ],
        },
      ],
    },
  ],
};

export const magazineNoEquivalents: Record<LocalizedMagazineArticle["key"], string> = {
  "area-first": "/magasin/det-du-ikke-ser-i-boligannonsen",
  "new-vs-resale": "/magasin/nybygg-eller-bruktbolig-costa-blanca",
  "view-vs-walk": "/magasin/havutsikt-eller-gangavstand-costa-blanca",
};

export function findLocalizedMagazineArticle(locale: EditorialLocale, slug: string) {
  return magazineArticles[locale].find((article) => article.slug === slug);
}
