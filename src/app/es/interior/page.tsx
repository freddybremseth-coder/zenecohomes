import type { Metadata } from "next";
import Link from "next/link";
import { Droplets, Home, MapPin, Ruler, ShieldCheck, Sprout } from "lucide-react";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { homeLanguageLinks } from "@/lib/i18n";

const BASE = "https://www.zenecohomes.com";

export const metadata: Metadata = {
  title: "Interior de Alicante | Viviendas, fincas y terrenos",
  description:
    "Descubre viviendas, fincas y terrenos en el interior de Alicante: Pinoso, Biar, Villena, Sax, Aspe y Novelda. Más espacio, naturaleza y asesoramiento antes de comprar.",
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
    title: "Interior de Alicante | Zen Eco Homes",
    description: "Viviendas, fincas y terrenos con más espacio en el interior de Alicante.",
    url: `${BASE}/es/interior`,
    locale: "es_ES",
    type: "website",
  },
};

const highlights = [
  {
    icon: Ruler,
    title: "Más espacio por el presupuesto",
    text: "En muchas zonas del interior puedes encontrar parcelas mayores y más superficie que en la costa, aunque cada propiedad debe compararse de forma individual.",
  },
  {
    icon: Sprout,
    title: "Naturaleza y vida más tranquila",
    text: "Viñedos, almendros, olivos y pueblos con vida local durante todo el año. Una opción interesante para quien prioriza espacio, privacidad y ritmo cotidiano.",
  },
  {
    icon: Droplets,
    title: "Agua, electricidad y acceso",
    text: "En fincas y terrenos hay que comprobar de dónde viene el agua, la conexión eléctrica, el acceso legal y los costes reales antes de comprar.",
  },
  {
    icon: ShieldCheck,
    title: "Urbanismo antes que promesas",
    text: "Suelo urbano, urbanizable o rústico implica posibilidades diferentes. La edificabilidad y las licencias deben confirmarse documentalmente.",
  },
];

const areas = [
  { name: "Biar", text: "Pueblo histórico de montaña con naturaleza, servicios locales y conexión práctica con Villena y la provincia de Alicante." },
  { name: "Villena", text: "Ciudad interior con más servicios, buenas comunicaciones y acceso a una amplia zona rural y residencial." },
  { name: "Sax", text: "Localidad compacta del Vinalopó, próxima a Elda y Villena, con opciones urbanas y de campo." },
  { name: "Pinoso", text: "Conocido por vino, paisaje agrícola, grandes parcelas y un mercado relevante de villas y viviendas de campo." },
  { name: "Aspe", text: "Interior cercano a Alicante y al aeropuerto, con agricultura, servicios y numerosas zonas rurales alrededor del municipio." },
  { name: "Novelda", text: "Ciudad conocida por la piedra natural y su patrimonio modernista, con buena conexión hacia Alicante y el Vinalopó." },
];

export default function SpanishInlandPage() {
  return (
    <main lang="es">
      <SiteHeader locale="es" languageLinks={homeLanguageLinks("es")} />
      <section className="page-hero compact-hero image-hero">
        <p className="eyebrow">Interior de Alicante</p>
        <h1>Más espacio, naturaleza y otra forma de vivir en España</h1>
        <p>
          Biar, Villena, Sax, Pinoso, Aspe y Novelda muestran una Costa Blanca diferente. El interior puede ofrecer más terreno y tranquilidad, pero exige comprobar muy bien agua, electricidad, acceso, urbanismo y coste total.
        </p>
        <div className="hero-actions">
          <Link className="contact-button" href="/es/propiedades?region=innlandet"><Home size={18} /> Ver propiedades del interior</Link>
          <Link className="text-button light" href="/es#contacto">Hablar con un asesor</Link>
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
          <p className="eyebrow">Zonas del interior</p>
          <h2>¿Qué tipo de interior encaja contigo?</h2>
          <p>Hay grandes diferencias entre vivir en un pueblo con servicios, una urbanización, una finca aislada o una parcela para construir. Comparamos la vida cotidiana, no solo el precio.</p>
        </div>
      </section>

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
          <p className="eyebrow">Antes de comprar una finca o parcela</p>
          <h2>Lo barato puede salir caro si faltan comprobaciones</h2>
          <p>Especialmente en suelo rústico, no debes asumir que una construcción existente está regularizada o que una parcela permite construir lo que deseas. Un abogado y, cuando proceda, un arquitecto o técnico deben revisar la documentación.</p>
        </div>
        <div className="center-action">
          <Link className="text-button" href="/es/terreno-en-espana">Leer la guía de terrenos</Link>
        </div>
      </section>

      <section className="section area-intro">
        <div className="section-heading">
          <p className="eyebrow">Costa o interior</p>
          <h2>No hay una respuesta correcta para todos</h2>
          <p>La costa puede ofrecer más vida junto al mar y, según la zona, mayor demanda turística. El interior puede dar más espacio, privacidad y contacto con la naturaleza. La decisión debe partir de cómo vas a utilizar realmente la vivienda.</p>
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
