import type { Metadata } from "next";
import Link from "next/link";
import { Droplets, Home, MapPin, Ruler, ShieldCheck, Sprout } from "lucide-react";
import { Footer } from "@/components/Footer";
import { InlandAreaFinder } from "@/components/InlandAreaFinder";
import { SiteHeader } from "@/components/SiteHeader";
import { homeLanguageLinks } from "@/lib/i18n";

const BASE = "https://www.zenecohomes.com";

export const metadata: Metadata = {
  title: "Interior de Alicante y Murcia | Terrenos, fincas y villas de obra nueva",
  description:
    "Descubre el interior de Alicante y Murcia: Biar, Busot, Villena, Hondón, Pinoso, Aspe, Novelda, Jumilla y más. Primero elegimos la zona; después buscamos el terreno adecuado y la vivienda moderna que pueda construirse allí.",
  alternates: {
    canonical: "/es/interior",
    languages: {
      "nb-NO": `${BASE}/inland`,
      "x-default": `${BASE}/inland`,
      "de-DE": `${BASE}/de/inland`,
      en: `${BASE}/en/inland`,
      "es-ES": `${BASE}/es/interior`,
    },
  },
  openGraph: {
    title: "Interior de Alicante y Murcia | Zen Eco Homes",
    description: "Elige primero la zona. Te ayudamos a encontrar un terreno adecuado y a valorar qué modelo de villa moderna puede construirse allí.",
    url: `${BASE}/es/interior`,
    locale: "es_ES",
    type: "website",
  },
};

const highlights = [
  {
    icon: Ruler,
    title: "Primero la zona, después el terreno y la vivienda",
    text: "Empezamos por el lugar donde realmente quieres vivir. Después buscamos una parcela adecuada y valoramos qué modelo de vivienda encaja con urbanismo, terreno y presupuesto.",
  },
  {
    icon: Sprout,
    title: "Cerca de la costa, montaña o tierra de vino",
    text: "Busot mantiene la costa cerca; Biar y Banyeres tienen más carácter de montaña; Pinoso, Hondón y Jumilla ofrecen una identidad más rural y vitivinícola.",
  },
  {
    icon: Droplets,
    title: "Agua, electricidad, acceso y terreno",
    text: "Una parcela solo es interesante si funcionan los aspectos prácticos. Hay que comprobar agua, electricidad, acceso legal, situación urbanística y condiciones del terreno para cada parcela concreta.",
  },
  {
    icon: ShieldCheck,
    title: "Edificabilidad antes que promesas",
    text: "Un modelo de villa sirve como inspiración, pero no significa que pueda construirse en cualquier parcela. Edificabilidad, retranqueos, servicios, licencias y coste total deben comprobarse antes de comprar.",
  },
];

const areas = [
  {
    name: "Busot",
    text: "Ambiente de pueblo de montaña cerca de Alicante y de la costa. Interesante para quien busca más tranquilidad y espacio sin adentrarse demasiado en el interior.",
  },
  {
    name: "Biar",
    text: "Pueblo histórico de montaña entre olivos y almendros, con estaciones más marcadas. Nuestra familia tiene una propiedad de olivos en Biar, por lo que también conocemos la zona desde la experiencia cotidiana.",
  },
  {
    name: "Villena",
    text: "Ciudad interior con servicios amplios y estación de alta velocidad. Villena AV conecta con Alicante en unos 20 minutos y con Madrid en algo más de dos horas; la estación está fuera del centro urbano.",
  },
  {
    name: "Hondón de las Nieves",
    text: "Vida de pueblo entre viñedos, almendros y olivos, con un entorno internacional consolidado y conexión práctica hacia Aspe, Elche y la costa.",
  },
  {
    name: "Pinoso",
    text: "Tierra de vino con mercado de parcelas, casas de campo y villas modernas. Es una zona de referencia para varios modelos que mostramos, pero no el único lugar donde puede plantearse una vivienda adecuada.",
  },
  {
    name: "Jumilla",
    text: "Una opción más profunda en el interior de la Región de Murcia, con Monastrell, bodegas, una ciudad autosuficiente y paisaje abierto para quien busca una identidad interior más marcada.",
  },
];

export default function SpanishInlandPage() {
  return (
    <main lang="es">
      <SiteHeader locale="es" languageLinks={homeLanguageLinks("es")} />
      <section className="page-hero compact-hero image-hero">
        <p className="eyebrow">Interior de Alicante y Murcia</p>
        <h1>Primero eliges la zona. Después buscamos el terreno y la vivienda adecuada.</h1>
        <p>
          Las villas modernas que mostramos en Aspe y Pinoso son ejemplos y modelos de vivienda, no una limitación geográfica.
          Si prefieres Busot, Biar, Villena, Hondón, Jumilla u otra zona interior adecuada, nuestro trabajo es encontrar allí
          la parcela correcta y valorar qué modelo puede construirse o adaptarse.
        </p>
        <div className="hero-actions">
          <Link className="contact-button" href="#finn-omrade">Encuentra tu zona del interior</Link>
          <Link className="text-button light" href="/es#contacto">Cuéntanos dónde quieres vivir</Link>
        </div>
      </section>

      <section className="section card-list">
        {highlights.map((item) => (
          <article className="info-card" key={item.title}>
            <item.icon />
            <div><h2>{item.title}</h2><p>{item.text}</p></div>
          </article>
        ))}
      </section>

      <section className="section area-intro">
        <div className="section-heading">
          <p className="eyebrow">Distintas formas de vivir en el interior</p>
          <h2>¿Qué zona encaja con tu vida diaria?</h2>
          <p>
            El interior no es un único mercado. Distancia a costa y aeropuertos, clima, servicios, tipos de parcela y normativa urbanística
            cambian mucho de un municipio a otro. Por eso empezamos por cómo quieres vivir y después comparamos ubicaciones.
          </p>
        </div>
      </section>

      <InlandAreaFinder locale="es" />

      <section className="section card-list">
        {areas.map((area) => (
          <article className="info-card" key={area.name}>
            <MapPin />
            <div><h2>{area.name}</h2><p>{area.text}</p></div>
          </article>
        ))}
      </section>

      <section className="section proof-section">
        <div className="section-heading">
          <p className="eyebrow">Villas modernas de obra nueva</p>
          <h2>El modelo puede cambiar de lugar. La parcela tiene que funcionar.</h2>
          <p>
            Las viviendas de Aspe y Pinoso ofrecen referencias concretas de arquitectura, distribución, calidades y presupuesto.
            Si prefieres otra zona, usamos esos modelos como punto de partida y buscamos una parcela donde urbanismo, superficie edificable,
            acceso, agua, electricidad, terreno y presupuesto total hagan viable el proyecto.
          </p>
        </div>
      </section>

      <section className="section proof-section">
        <div className="section-heading">
          <p className="eyebrow">Antes de comprar una finca o parcela</p>
          <h2>La documentación manda</h2>
          <p>
            Especialmente en suelo rústico, no hay que asumir que una construcción existente está regularizada o que una parcela permite
            construir lo que deseas. Un abogado y, cuando proceda, un arquitecto o técnico deben revisar la documentación y la viabilidad.
          </p>
        </div>
        <div className="center-action">
          <Link className="text-button" href="/es/terreno-en-espana">Leer la guía de terrenos</Link>
        </div>
      </section>

      <section className="section area-intro">
        <div className="section-heading">
          <p className="eyebrow">Siguiente paso</p>
          <h2>Dinos el estilo de vida y la zona, no solo la casa</h2>
          <p>
            Podemos comparar interior cercano a la costa, pueblos de montaña, zonas de vino y áreas rurales más profundas antes de elegir una propiedad.
            Así no dejamos que la oferta disponible en un momento concreto decida dónde vas a vivir.
          </p>
          <div className="hero-actions">
            <Link className="contact-button" href="/es/propiedades">Comparar propiedades</Link>
            <Link className="text-button light" href="/es#contacto">Cuéntanos tu plan</Link>
          </div>
        </div>
      </section>

      <Footer locale="es" />
    </main>
  );
}
