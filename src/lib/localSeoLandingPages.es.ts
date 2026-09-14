import type { SeoLandingPage } from "./seoLandingPages";

const localPageES = ({
  slug,
  place,
  area,
  angle,
  highlights,
  filterHref,
  extraBody,
}: {
  slug: string;
  place: string;
  area: string;
  angle: string;
  highlights: string[];
  filterHref: string;
  extraBody: string;
}): SeoLandingPage => ({
  slug,
  title: `Vivienda en ${place}`,
  eyebrow: `${area} · guía de zona`,
  hero: `Comprar vivienda en ${place}`,
  description: `${place} puede ser una buena opción si buscas vivienda, obra nueva o inversión en ${area}. Zen Eco Homes te ayuda a valorar ubicación, precio, estilo de vida, accesos y el proceso de compra antes de reservar.`,
  seoTitle: `Vivienda en ${place} | Propiedades y asesoramiento`,
  seoDescription: `¿Buscas vivienda en ${place}? Conoce la zona, obra nueva, estilo de vida y proceso de compra con asesoramiento inmobiliario en España.`,
  primaryCta: { label: `Ver viviendas en ${place}`, href: filterHref },
  secondaryCta: { label: "Ver todas las propiedades", href: "/es/propiedades" },
  sections: [
    {
      heading: `¿Por qué considerar una vivienda en ${place}?`,
      body: [
        `Al valorar ${place}, conviene mirar más allá del precio y las fotos: vida diaria, distancia a servicios, orientación solar, reventa, acceso a playa o naturaleza y funcionamiento fuera de temporada son factores importantes.`,
        angle,
      ],
      bullets: highlights,
    },
    {
      heading: `Obra nueva, segunda mano o terreno en ${place}`,
      body: [
        "La elección entre obra nueva, segunda mano y terreno debe responder al presupuesto, al plazo y al nivel de mantenimiento o gestión que quieras asumir. La obra nueva suele ofrecer un estándar más previsible; una vivienda usada puede permitir más negociación; y construir da más libertad, pero exige más comprobaciones.",
        extraBody,
      ],
      bullets: [
        "Confirmar precio y disponibilidad antes de organizar una visita.",
        "Comparar con zonas alternativas y viviendas similares.",
        "Revisar contratos y documentación con un abogado antes de asumir compromisos importantes.",
      ],
    },
    {
      heading: "Cómo ayuda Zen Eco Homes",
      body: [
        `Te ayudamos a valorar si ${place} encaja realmente con tu estilo de vida, presupuesto y plan de compra. El objetivo es entender oportunidades y límites antes de enamorarte de una sola vivienda.`,
      ],
      bullets: [
        "Análisis de necesidades y presupuesto realista.",
        "Comparación de zona, precio y alternativas.",
        "Coordinación con promotor, vendedor, abogado y banco cuando sea necesario.",
        "Acompañamiento antes, durante y después de la compra.",
      ],
    },
  ],
  faq: [
    {
      question: `¿Es ${place} una buena zona para comprar vivienda?`,
      answer: `${place} puede ser una buena elección si encaja con el uso que darás a la vivienda, tu presupuesto y tu estilo de vida. Conviene comparar propiedades concretas, servicios, ubicación y uso durante todo el año antes de decidir.`,
    },
    {
      question: `¿Hay obra nueva en ${place}?`,
      answer: `Puede haber obra nueva o proyectos recientes en ${place} o sus alrededores, pero precio y disponibilidad cambian. Conviene confirmar el estado actual antes de planificar una visita o reserva.`,
    },
    {
      question: `¿Necesito asesoramiento para comprar en ${place}?`,
      answer: "El asesoramiento puede ser útil para comparar alternativas, entender el proceso de compra y coordinar los siguientes pasos. La revisión jurídica de contratos y documentación debe realizarla un abogado cualificado antes de asumir compromisos vinculantes.",
    },
  ],
  related: [
    { label: "Comprar vivienda en España", href: "/es/vivienda-en-espana" },
    { label: "Obra nueva Costa Blanca", href: "/es/obra-nueva-costa-blanca" },
    { label: "Asesor inmobiliario en España", href: "/es/asesor-inmobiliario-espana" },
  ],
});

export const localSeoLandingPagesES: SeoLandingPage[] = [
  localPageES({
    slug: "vivienda-en-altea",
    place: "Altea",
    area: "Costa Blanca Norte",
    angle:
      "Altea atrae especialmente a quienes valoran paisaje, casco antiguo, puerto deportivo, vistas y restauración. Combina tranquilidad con una conexión práctica a Albir, Benidorm, Calpe y el aeropuerto de Alicante-Elche.",
    highlights: [
      "Entorno atractivo, vistas y carácter mediterráneo.",
      "Conexión práctica con Albir, Calpe, Benidorm y servicios.",
      "Oferta de apartamentos modernos, villas y proyectos con vistas.",
      "Puede funcionar para uso habitual o segunda residencia según la micro-ubicación.",
    ],
    filterHref: "/es/propiedades?region=costa-blanca-nord&area=Altea",
    extraBody:
      "En Altea conviene prestar atención a desniveles, distancia real a servicios, orientación, vistas, gastos de comunidad y si la ubicación funciona para el día a día o principalmente para vacaciones.",
  }),
  localPageES({
    slug: "vivienda-en-albir",
    place: "Albir",
    area: "Costa Blanca Norte",
    angle:
      "Albir es una zona costera compacta y práctica, relativamente llana en buena parte del centro, con playa, restaurantes, comercios y servicios a poca distancia. Puede encajar con quien quiere una vida cotidiana sencilla y menor dependencia del coche.",
    highlights: [
      "Zona costera compacta con playa, restauración y servicios diarios.",
      "Centro práctico y bastante llano en buena parte del área.",
      "Próximo a Altea, Benidorm y l'Alfàs del Pi.",
      "Adecuado para apartamentos, vacaciones y uso durante todo el año.",
    ],
    filterHref: "/es/propiedades?region=costa-blanca-nord&area=Albir",
    extraBody:
      "En Albir la micro-ubicación importa mucho: algunas viviendas permiten ir andando a casi todo y otras requieren coche, algo que también influye en alquiler y reventa.",
  }),
  localPageES({
    slug: "vivienda-en-calpe",
    place: "Calpe",
    area: "Costa Blanca Norte",
    angle:
      "Calpe combina playas, vida urbana, puerto, restauración y el Peñón de Ifach. Puede encajar con compradores que quieren una localidad costera con servicios y oferta de apartamentos, áticos y villas.",
    highlights: [
      "Playas, puerto y servicios en una localidad costera consolidada.",
      "Oferta de apartamentos, áticos, villas y vivienda vacacional.",
      "Amplia actividad en temporada y servicios durante el resto del año.",
      "Interesante para quien busca costa con comodidad urbana.",
    ],
    filterHref: "/es/propiedades?region=costa-blanca-nord&area=Calpe",
    extraBody:
      "En Calpe conviene comparar distancia a playa, ruido, aparcamiento, vistas, edad del edificio, gastos de comunidad y funcionamiento de la zona fuera de temporada alta.",
  }),
  localPageES({
    slug: "vivienda-en-finestrat",
    place: "Finestrat",
    area: "Costa Blanca Norte",
    angle:
      "Finestrat tiene una presencia importante de obra nueva moderna en la Costa Blanca Norte. Muchas promociones combinan arquitectura actual con acceso a Benidorm, centros comerciales, golf y playas como Cala de Finestrat; las vistas y los tiempos reales de desplazamiento varían según la micro-ubicación.",
    highlights: [
      "Numerosas promociones modernas, villas y apartamentos.",
      "Cerca de Benidorm, centros comerciales, golf y playa.",
      "Adecuada para quien prioriza estándar moderno y posibilidades de vistas.",
      "Conviene comparar micro-ubicación, fase de obra y precio total.",
    ],
    filterHref: "/es/propiedades?region=costa-blanca-nord&area=Finestrat",
    extraBody:
      "En Finestrat conviene comparar fases de obra, orientación, vistas, ruido de carreteras, acceso a servicios y qué elementos están realmente incluidos en el precio anunciado.",
  }),
  localPageES({
    slug: "vivienda-en-polop",
    place: "Polop",
    area: "Costa Blanca Norte",
    angle:
      "Polop puede interesar a quien busca un entorno más tranquilo, vistas de montaña y la posibilidad de disponer de más espacio exterior que en zonas costeras más densas, manteniendo una distancia práctica en coche a La Nucía, Altea, Benidorm y la costa.",
    highlights: [
      "Entorno tranquilo con montaña, naturaleza y vistas.",
      "Opciones de villas, adosados y mayor espacio exterior en entornos menos densos.",
      "Villas, adosados y promociones de obra nueva.",
      "Interesante para quien busca más espacio y no necesita la playa a pie.",
    ],
    filterHref: "/es/propiedades?region=costa-blanca-nord&area=Polop",
    extraBody:
      "En Polop hay que valorar necesidad de coche, distancia a servicios, orientación, vistas, gastos comunitarios y si prefieres tranquilidad diaria frente a estar junto a la playa.",
  }),
  localPageES({
    slug: "vivienda-en-pinoso",
    place: "Pinoso",
    area: "Interior de Alicante",
    angle:
      "Pinoso atrae a quienes buscan parcela grande, tranquilidad, viñedos y la posibilidad de construir o comprar una vivienda moderna con más espacio. Encaja especialmente con un estilo de vida rural y más independiente.",
    highlights: [
      "Parcelas grandes, villas, fincas y construcción de vivienda nueva.",
      "Posibilidad de más espacio y privacidad que en zonas costeras más densas.",
      "Adecuado para naturaleza, privacidad y residencia a largo plazo.",
      "Es esencial comprobar agua, electricidad, acceso, suelo y permisos.",
    ],
    filterHref: "/es/propiedades?region=innlandet&area=Pinoso",
    extraBody:
      "En Pinoso la diligencia previa es especialmente importante para terrenos y construcción: clasificación del suelo, agua, electricidad, acceso, características del terreno y presupuesto total deben aclararse antes de reservar o comprar.",
  }),
];
