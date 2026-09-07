import type { SeoLandingPage } from "./seoLandingPages";

const BOOKING = "/es#contacto";

export const seoLandingPagesES: SeoLandingPage[] = [
  {
    slug: "vivienda-en-espana",
    title: "Vivienda en España",
    eyebrow: "Comprar vivienda en España",
    hero: "Comprar vivienda en España con una decisión bien informada",
    description:
      "Zen Eco Homes ayuda a compradores internacionales y residentes a valorar zona, presupuesto, tipo de vivienda, costes y proceso antes de reservar una propiedad en la Costa Blanca.",
    seoTitle: "Comprar vivienda en España | Asesoramiento en Costa Blanca",
    seoDescription:
      "¿Quieres comprar vivienda en España? Te ayudamos con zona, obra nueva, villas, apartamentos, NIE, abogado, costes y proceso de compra en la Costa Blanca.",
    primaryCta: { label: "Reservar una consulta", href: BOOKING },
    secondaryCta: { label: "Ver propiedades", href: "/es/propiedades" },
    sections: [
      {
        heading: "Primero la zona y el uso; después la vivienda",
        body: [
          "Es fácil empezar por las fotos, el precio o el número de dormitorios. Sin embargo, la decisión más importante suele ser dónde vivir y para qué se utilizará la vivienda. Servicios durante todo el año, acceso al aeropuerto, playas, colegios, golf, alquiler y reventa cambian mucho de una zona a otra.",
          "Nuestro trabajo empieza por entender tus necesidades, presupuesto realista y estilo de vida, y después reducir un mercado enorme a unas pocas alternativas que realmente tengan sentido.",
        ],
        bullets: [
          "Vivienda vacacional, residencia habitual, inversión o jubilación.",
          "Costa Blanca Norte, Costa Blanca Sur, Costa Cálida o interior.",
          "Obra nueva, segunda mano, villa, apartamento, adosado o terreno.",
        ],
      },
      {
        heading: "Un proceso de compra más claro",
        body: [
          "En España una misma propiedad puede aparecer con varias agencias y la disponibilidad de los portales no siempre está actualizada. Por eso conviene tener claros financiación, NIE, abogado y criterios de compra antes de entregar una reserva.",
          "Te ayudamos a comparar precio, ubicación, alternativas, costes y siguientes pasos. Las comprobaciones jurídicas las realiza siempre el profesional correspondiente, normalmente un abogado independiente elegido por el comprador.",
        ],
        bullets: [
          "Confirmar disponibilidad y precio actualizado.",
          "Entender impuestos, gastos y plan de pagos.",
          "Coordinar abogado, banco, promotor o vendedor cuando sea necesario.",
        ],
      },
    ],
    faq: [
      {
        question: "¿Dónde conviene comprar vivienda en la Costa Blanca?",
        answer:
          "Depende de cómo vas a utilizarla. La Costa Blanca Norte suele atraer a quien prioriza paisaje y calidad residencial; el sur ofrece una gran variedad de urbanizaciones y servicios; y el interior permite encontrar más espacio y tranquilidad.",
      },
      {
        question: "¿Es seguro comprar una vivienda en España?",
        answer:
          "Sí, siempre que se hagan las comprobaciones correctas. Conviene trabajar con un abogado, confirmar la situación de la vivienda y entender contrato, costes y documentación antes de reservar.",
      },
      {
        question: "¿Qué gastos adicionales hay al comprar?",
        answer:
          "Los impuestos y gastos dependen de la comunidad autónoma y de si es obra nueva o segunda mano. Como orientación inicial muchos compradores reservan aproximadamente un 10–14 % adicional, pero el cálculo debe hacerse para cada operación concreta.",
      },
    ],
    related: [
      { label: "Obra nueva en la Costa Blanca", href: "/es/obra-nueva-costa-blanca" },
      { label: "Asesor inmobiliario en España", href: "/es/asesor-inmobiliario-espana" },
    ],
  },
  {
    slug: "obra-nueva-en-espana",
    title: "Obra nueva en España",
    eyebrow: "Comprar obra nueva",
    hero: "Obra nueva en España: moderna, eficiente y bien planificada",
    description:
      "Apartamentos y villas de obra nueva con asesoramiento sobre ubicación, promotor, memoria de calidades, calendario de pagos, garantías y entrega.",
    seoTitle: "Obra nueva en España | Viviendas modernas con asesoramiento",
    seoDescription:
      "Compra obra nueva en España con una visión clara de ubicación, promotor, pagos, garantías, costes y entrega. Viviendas modernas en Costa Blanca y alrededores.",
    primaryCta: { label: "Reservar una consulta", href: BOOKING },
    secondaryCta: { label: "Ver propiedades", href: "/es/propiedades" },
    sections: [
      {
        heading: "Qué aporta una vivienda de obra nueva",
        body: [
          "La obra nueva suele ofrecer distribuciones actuales, mejor aislamiento, climatización eficiente y menor mantenimiento inicial. Comprar en una fase temprana también puede permitir elegir acabados o algunas opciones de distribución.",
          "Lo importante es no elegir solo por la infografía. Hay que valorar ubicación, orientación, equipamiento incluido, gastos de comunidad, promotor y coste total.",
        ],
        bullets: [
          "Mejor eficiencia energética y confort.",
          "Memoria de calidades y equipamiento definidos por contrato.",
          "Posibilidad de elegir determinadas opciones si se compra a tiempo.",
        ],
      },
      {
        heading: "Pagos, garantías y entrega",
        body: [
          "En una compra sobre plano los pagos se realizan normalmente por fases. Las cantidades anticipadas deben quedar correctamente protegidas y el contrato debe definir plazos, condiciones y documentación.",
          "Te ayudamos a ordenar la información y a coordinar las preguntas que deben resolver promotor, banco y abogado antes de comprometer una cantidad importante.",
        ],
        bullets: [
          "Calendario de pagos claro.",
          "Comprobación de garantías y licencias con los profesionales adecuados.",
          "Seguimiento hasta escritura y entrega de llaves.",
        ],
      },
    ],
    faq: [
      {
        question: "¿Qué debo comprobar antes de reservar una obra nueva?",
        answer:
          "Promotor, licencia, memoria de calidades, calendario de pagos, protección de cantidades anticipadas, fecha prevista de entrega y revisión del contrato por un abogado.",
      },
      {
        question: "¿Cuánto tarda una obra nueva?",
        answer:
          "Depende de la fase del proyecto. Una promoción sobre plano puede tardar aproximadamente entre 12 y 24 meses, mientras que una vivienda terminada puede escriturarse mucho antes.",
      },
      {
        question: "¿Puedo personalizar acabados?",
        answer:
          "En muchas promociones sí, especialmente al comprar en fases tempranas. Las posibilidades disminuyen a medida que avanza la obra.",
      },
    ],
    related: [
      { label: "Obra nueva Costa Blanca", href: "/es/obra-nueva-costa-blanca" },
      { label: "Vivienda en España", href: "/es/vivienda-en-espana" },
    ],
  },
  {
    slug: "obra-nueva-costa-blanca",
    title: "Obra nueva Costa Blanca",
    eyebrow: "Obra nueva en Alicante",
    hero: "Obra nueva en la Costa Blanca con asesoramiento antes de reservar",
    description:
      "Villas, apartamentos y proyectos modernos en Costa Blanca Norte y Sur. Comparamos ubicación, precio, promotor, calidades, costes y alternativas antes de que tomes una decisión.",
    seoTitle: "Obra nueva Costa Blanca | Villas y apartamentos",
    seoDescription:
      "Obra nueva en Costa Blanca: villas, apartamentos y promociones modernas. Asesoramiento sobre zona, promotor, pagos, calidades y entrega.",
    primaryCta: { label: "Hablar con un asesor", href: BOOKING },
    secondaryCta: { label: "Ver obra nueva", href: "/es/propiedades" },
    sections: [
      {
        heading: "Costa Blanca Norte, Sur o interior",
        body: [
          "No existe una única Costa Blanca. Finestrat, Benidorm, Altea, Calpe o Dénia ofrecen una experiencia distinta a Torrevieja, Orihuela Costa o las poblaciones del interior. Elegir bien la zona es tan importante como elegir bien el proyecto.",
          "Comparamos distancias, servicios, orientación, vistas, movilidad diaria y precio para que la recomendación parta de tu forma de vivir y no de una promoción concreta.",
        ],
        bullets: [
          "Costa Blanca Norte: paisaje, calidad residencial y proyectos con vistas.",
          "Costa Blanca Sur: oferta amplia, servicios y numerosas promociones.",
          "Interior: más terreno, tranquilidad y viviendas con más espacio.",
        ],
      },
      {
        heading: "No todas las promociones son iguales",
        body: [
          "Dos viviendas con el mismo número de dormitorios pueden diferir mucho en orientación, parcela, calidades, gastos, fase de construcción y condiciones de pago.",
          "Antes de reservar conviene comparar la unidad concreta y sus alternativas, confirmar qué está incluido y solicitar un cálculo realista del coste total.",
        ],
        bullets: [
          "Disponibilidad y precio actualizados.",
          "Memoria de calidades y extras.",
          "Plazos, pagos y entrega.",
        ],
      },
    ],
    faq: [
      {
        question: "¿Qué zonas tienen más obra nueva en Costa Blanca?",
        answer:
          "Finestrat y el entorno de Benidorm tienen mucha actividad, al igual que diversas zonas del sur de Alicante. La oferta cambia continuamente, por lo que conviene revisar disponibilidad real antes de desplazarse.",
      },
      {
        question: "¿Es mejor comprar al inicio de una promoción?",
        answer:
          "Puede ofrecer más elección de orientación, planta y acabados, pero exige revisar cuidadosamente garantías, calendario de pagos y solvencia del proyecto.",
      },
      {
        question: "¿Zen Eco Homes trabaja solo con una promotora?",
        answer:
          "No planteamos la búsqueda desde una única promoción. El objetivo es comparar opciones y ayudarte a decidir qué vivienda y qué zona encajan mejor con tus necesidades.",
      },
    ],
    related: [
      { label: "Comprar vivienda en España", href: "/es/vivienda-en-espana" },
      { label: "Asesoramiento inmobiliario", href: "/es/asesor-inmobiliario-espana" },
    ],
  },
  {
    slug: "asesor-inmobiliario-espana",
    title: "Asesor inmobiliario en España",
    eyebrow: "Asesoramiento antes que venta",
    hero: "Un asesor inmobiliario para ordenar tu compra en España",
    description:
      "Zen Eco Homes te ayuda a definir necesidades, comparar zonas y propiedades, entender costes y coordinar la compra con los profesionales adecuados.",
    seoTitle: "Asesor inmobiliario en España | Costa Blanca",
    seoDescription:
      "Asesoramiento inmobiliario en España para compradores: zona, presupuesto, propiedades, costes, NIE, abogado, financiación y coordinación en Costa Blanca.",
    primaryCta: { label: "Reservar una conversación", href: BOOKING },
    secondaryCta: { label: "Ver propiedades", href: "/es/propiedades" },
    sections: [
      {
        heading: "La función es ayudarte a decidir, no solo enseñarte viviendas",
        body: [
          "Un comprador puede ver cientos de anuncios y seguir sin saber qué zona, proyecto o precio tiene más sentido. El valor del asesoramiento está en reducir opciones, hacer las preguntas correctas y detectar pronto lo que no encaja.",
          "Freddy Bremseth vive en Benidorm y trabaja a diario con el mercado de la Costa Blanca. El enfoque de Zen Eco Homes es empezar por tus objetivos y acompañar la decisión con información y comparaciones.",
        ],
        bullets: [
          "Necesidades, presupuesto, uso y horizonte temporal.",
          "Selección y comparación de alternativas.",
          "Coordinación con promotor, vendedor, banco, notario y abogado cuando corresponda.",
        ],
      },
      {
        heading: "Saber cuándo decir que no",
        body: [
          "Una buena recomendación también puede ser descartar una vivienda. Si la ubicación, los costes, las condiciones o el proyecto no encajan con lo que buscas, es mejor saberlo antes de reservar.",
          "Las cuestiones jurídicas y fiscales se derivan a profesionales cualificados; Zen Eco Homes mantiene la visión de conjunto y ayuda a que cada paso llegue en el momento correcto.",
        ],
        bullets: [
          "Comparar antes de comprometerse.",
          "Confirmar datos en lugar de asumir que un anuncio está actualizado.",
          "Mantener separadas la recomendación comercial y la revisión jurídica.",
        ],
      },
    ],
    faq: [
      {
        question: "¿En qué idiomas atiende Freddy?",
        answer:
          "Freddy trabaja en noruego e inglés y utiliza español en su vida diaria y en su trabajo en España.",
      },
      {
        question: "¿Necesito además un abogado?",
        answer:
          "Sí. El asesor inmobiliario ayuda a ordenar y coordinar el proceso, pero la revisión jurídica debe hacerla un abogado cualificado que proteja tus intereses.",
      },
      {
        question: "¿Puedo pedir ayuda aunque todavía no sepa qué zona quiero?",
        answer:
          "Sí. De hecho, comparar costa norte, costa sur e interior antes de elegir una vivienda suele ahorrar mucho tiempo y evita empezar por el lugar equivocado.",
      },
    ],
    related: [
      { label: "Comprar vivienda en España", href: "/es/vivienda-en-espana" },
      { label: "Obra nueva Costa Blanca", href: "/es/obra-nueva-costa-blanca" },
    ],
  },
  {
    slug: "terreno-en-espana",
    title: "Terreno en España",
    eyebrow: "Terrenos y construcción",
    hero: "Comprar un terreno en España y construir con las comprobaciones correctas",
    description:
      "Antes de comprar un terreno hay que entender clasificación urbanística, edificabilidad, agua, electricidad, acceso, arquitecto, licencias y presupuesto total.",
    seoTitle: "Comprar terreno en España | Parcela y construcción",
    seoDescription:
      "Comprar terreno en España: edificabilidad, suelo urbano o rústico, agua, electricidad, acceso, licencias, arquitecto y presupuesto de construcción.",
    primaryCta: { label: "Hablar sobre terrenos", href: BOOKING },
    secondaryCta: { label: "Ver propiedades", href: "/es/propiedades" },
    sections: [
      {
        heading: "Primero comprobar qué se puede construir",
        body: [
          "Una parcela puede parecer perfecta y aun así tener limitaciones importantes. La clasificación del suelo, edificabilidad, retranqueos, acceso y disponibilidad de suministros determinan qué proyecto es viable.",
          "Antes de comprar conviene obtener confirmación documental y, cuando sea necesario, revisar la situación con abogado y arquitecto.",
        ],
        bullets: [
          "Clasificación urbanística y normativa aplicable.",
          "Agua, electricidad y acceso legal.",
          "Presupuesto realista de parcela, proyecto, obra e impuestos.",
        ],
      },
      {
        heading: "De la parcela a la vivienda terminada",
        body: [
          "Construir permite adaptar la vivienda a tus necesidades, pero requiere coordinar arquitecto, licencia, constructor, presupuesto y seguimiento de obra.",
          "Zen Eco Homes ayuda a ordenar las alternativas y a reunir la información necesaria antes de tomar decisiones económicas importantes.",
        ],
        bullets: [
          "Arquitecto y licencia de obra.",
          "Constructor con referencias, contrato y garantías claras.",
          "Seguimiento de presupuesto y calendario hasta la entrega.",
        ],
      },
    ],
    faq: [
      {
        question: "¿Puede un extranjero comprar terreno en España?",
        answer:
          "Sí. Como en cualquier compra inmobiliaria, necesitará NIE y es recomendable contar con un abogado. La prioridad es confirmar que el uso y la construcción previstos sean legalmente posibles.",
      },
      {
        question: "¿Qué diferencia hay entre suelo urbano y rústico?",
        answer:
          "Las posibilidades de construcción y las condiciones cambian mucho según la clasificación y la normativa municipal. No debe asumirse que una parcela rústica permite construir una vivienda.",
      },
      {
        question: "¿Cuánto cuesta construir una casa?",
        answer:
          "Depende de tamaño, calidades, terreno, proyecto y municipio. El cálculo debe incluir obra, arquitecto, técnicos, licencias, impuestos, acometidas, urbanización exterior y contingencia.",
      },
    ],
    related: [
      { label: "Vivienda en España", href: "/es/vivienda-en-espana" },
      { label: "Asesor inmobiliario en España", href: "/es/asesor-inmobiliario-espana" },
    ],
  },
];

export function getSeoLandingPageES(slug: string) {
  return seoLandingPagesES.find((page) => page.slug === slug);
}
