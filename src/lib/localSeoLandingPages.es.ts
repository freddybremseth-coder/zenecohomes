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
        `${place} es una de las zonas que muchos compradores valoran cuando buscan una base en España. Conviene mirar más allá del precio y las fotos: vida diaria, distancia a servicios, orientación solar, reventa, acceso a playa o naturaleza y funcionamiento fuera de temporada son factores importantes.`,
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
      answer: `Suele haber obra nueva o proyectos recientes en ${place} o sus alrededores, aunque precio y disponibilidad cambian con rapidez. Conviene confirmar el estado real antes de planificar una visita o reserva.`,
    },
    {
      question: `¿Necesito asesoramiento para comprar en ${place}?`,
      answer: "Puede ser muy útil para comparar alternativas, entender el proceso de compra, ordenar costes y coordinar los siguientes pasos con los profesionales locales adecuados.",
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
      "Altea atrae especialmente a quienes valoran paisaje, casco antiguo, puerto deportivo, vistas y un ambiente residencial cuidado. Combina tranquilidad con distancias razonables a Albir, Benidorm, Calpe y el aeropuerto de Alicante-Elche.",
    highlights: [
      "Entorno atractivo, vistas y carácter mediterráneo.",
      "Cerca de Albir, Calpe, Benidorm y servicios durante todo el año.",
      "Oferta de apartamentos modernos, villas y proyectos con vistas.",
      "Adecuada para uso habitual, largas estancias y segunda residencia.",
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
      "Albir es popular por ser compacto, práctico y relativamente llano, con playa, restaurantes, comercios y servicios a poca distancia. Encaja bien con quien quiere una vida cotidiana sencilla sin depender siempre del coche.",
    highlights: [
      "Zona consolidada y popular entre compradores internacionales.",
      "Centro práctico y bastante llano, cerca de playa y servicios.",
      "Próximo a Altea, Benidorm, l'Alfàs del Pi y el aeropuerto.",
      "Buena opción para apartamentos, vacaciones y uso durante todo el año.",
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
      "Finestrat es una de las zonas con mayor actividad de obra nueva moderna en la Costa Blanca Norte. Muchas promociones combinan vistas, arquitectura actual, cercanía a Benidorm, centros comerciales, golf y playas como Cala de Finestrat.",
    highlights: [
      "Numerosas promociones modernas, villas y apartamentos.",
      "Cerca de Benidorm, centros comerciales, golf y playa.",
      "Adecuada para quien prioriza vistas y estándar moderno.",
      "Zona relevante para comparar obra nueva e inversión.",
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
      "Polop puede interesar a quien busca un entorno más tranquilo, vistas de montaña y más espacio que en las localidades costeras más consolidadas, manteniendo distancias prácticas a La Nucía, Altea, Benidorm y la costa.",
    highlights: [
      "Entorno tranquilo con montaña, naturaleza y vistas.",
      "En algunos segmentos ofrece más espacio por el presupuesto.",
      "Villas, adosados y promociones de obra nueva.",
      "Interesante para uso durante todo el año y familias que buscan más espacio.",
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
      "Más espacio y tranquilidad que en muchas zonas costeras.",
      "Adecuado para naturaleza, privacidad y residencia a largo plazo.",
      "Es esencial comprobar agua, electricidad, acceso, suelo y permisos.",
    ],
    filterHref: "/es/propiedades?region=innlandet&area=Pinoso",
    extraBody:
      "En Pinoso la diligencia previa es especialmente importante para terrenos y construcción: clasificación del suelo, agua, electricidad, acceso, características del terreno y presupuesto total deben aclararse antes de reservar o comprar.",
  }),
];
