import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, MapPin, Mountain, Palmtree, Waves } from "lucide-react";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { homeLanguageLinks } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Zonas para comprar vivienda | Costa Blanca y Costa Cálida",
  description:
    "Compara Costa Blanca Norte, Costa Blanca Sur, Costa Cálida e interior de Alicante antes de elegir vivienda. Estilo de vida, servicios, uso y tipo de propiedad.",
  alternates: { canonical: "/es/zonas" },
};

const zones = [
  {
    icon: Waves,
    title: "Costa Blanca Norte",
    areas: "Benidorm · Villajoyosa · Finestrat · Albir · Altea · Calpe · Moraira · Dénia",
    body: "Una costa variada, con ciudades activas todo el año, pueblos más tranquilos, zonas de villas, apartamentos modernos y urbanizaciones con vistas. La topografía y la distancia real a servicios pueden cambiar mucho incluso dentro del mismo municipio.",
    goodFor: "Quien valora mar, servicios, conexiones y una amplia variedad de estilos de vida.",
    href: "/es/propiedades?region=costa-blanca-nord",
  },
  {
    icon: Palmtree,
    title: "Costa Blanca Sur",
    areas: "Alicante · Santa Pola · Guardamar · Ciudad Quesada · Torrevieja · Orihuela Costa",
    body: "Amplia oferta residencial y turística, muchas urbanizaciones consolidadas y una mezcla de vivienda habitual, segunda residencia y producto orientado al mercado internacional. Conviene comparar microzonas, distancias y funcionamiento fuera de temporada.",
    goodFor: "Quien busca mucha oferta, urbanizaciones establecidas y proximidad a playas y servicios.",
    href: "/es/propiedades?region=costa-blanca-sor",
  },
  {
    icon: Building2,
    title: "Costa Cálida",
    areas: "San Pedro del Pinatar · San Javier · Los Alcázares · La Manga · Cartagena · Murcia",
    body: "Al sur de Alicante, la Región de Murcia ofrece costa, golf, núcleos urbanos y proyectos de obra nueva. No debe valorarse solo por precio: comunicaciones, servicios, temporada y el uso previsto de la vivienda son igual de importantes.",
    goodFor: "Compradores abiertos a mirar más allá de Alicante y comparar coste, costa, golf y uso anual.",
    href: "/es/propiedades?region=costa-calida",
  },
  {
    icon: Mountain,
    title: "Interior de Alicante",
    areas: "Biar · Villena · Sax · Castalla · Pinoso · Monóvar · Aspe · Novelda",
    body: "Más terreno, naturaleza y vida local, con opciones que van desde casas de pueblo hasta fincas y parcelas. Aquí las comprobaciones de agua, electricidad, acceso, clasificación del suelo y legalidad de construcciones son especialmente importantes.",
    goodFor: "Quien prioriza espacio, privacidad, naturaleza o un proyecto de vida más rural.",
    href: "/es/interior",
  },
];

const questions = [
  "¿La vivienda será para vacaciones, residencia habitual, jubilación o inversión?",
  "¿Necesitas poder caminar a restaurantes, tiendas y playa o prefieres más terreno y tranquilidad?",
  "¿Cuánto tiempo quieres pasar conduciendo hasta aeropuerto, colegio, hospital o servicios cotidianos?",
  "¿Quieres vivir en una zona internacional o integrarte más en una población española?",
  "¿El alquiler forma parte del presupuesto o solo sería una posibilidad ocasional?",
  "¿Prefieres obra nueva y menor mantenimiento o una vivienda usada con otra ubicación o carácter?",
];

export default function SpanishAreasPage() {
  return (
    <main lang="es">
      <SiteHeader locale="es" languageLinks={homeLanguageLinks("es")} />

      <section className="page-hero compact-hero image-hero">
        <p className="eyebrow">Elegir zona antes que vivienda</p>
        <h1>¿Costa Blanca Norte, Sur, Costa Cálida o interior?</h1>
        <p>
          Una vivienda puede ser atractiva y aun así estar en el lugar equivocado para ti. Comparamos cómo quieres vivir, desplazarte y utilizar la propiedad antes de reducir la búsqueda a unas pocas zonas.
        </p>
        <div className="hero-actions">
          <Link className="contact-button" href="/es#contacto">Ayúdame a elegir zona <ArrowRight size={18} /></Link>
          <Link className="text-button light" href="/es/propiedades">Ver propiedades</Link>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Cuatro puntos de partida</p>
          <h2>La diferencia está en el día a día</h2>
          <p>Las zonas siguientes son categorías útiles para empezar. Dentro de cada una hay diferencias importantes entre municipios, urbanizaciones y calles.</p>
        </div>
        <div className="card-list">
          {zones.map((zone) => (
            <article className="info-card" key={zone.title}>
              <zone.icon />
              <div>
                <h2>{zone.title}</h2>
                <strong>{zone.areas}</strong>
                <p>{zone.body}</p>
                <p><strong>Puede encajar si:</strong> {zone.goodFor}</p>
                <Link className="text-button" href={zone.href}>Explorar esta zona <ArrowRight size={15} /></Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section proof-section">
        <div className="section-heading">
          <p className="eyebrow"><MapPin size={15} /> Antes de mirar anuncios</p>
          <h2>Seis preguntas que reducen cientos de opciones</h2>
        </div>
        <div className="check-list">
          {questions.map((question) => <span key={question}>{question}</span>)}
        </div>
      </section>

      <section className="section split">
        <div>
          <p className="eyebrow">Una visita bien preparada</p>
          <h2>Menos kilómetros y más información útil</h2>
          <p>
            Una buena ruta de visitas no consiste en llenar el día de citas. Antes de viajar intentamos confirmar disponibilidad, ubicación, precio, características esenciales y si la propiedad encaja con tus criterios. Después agrupamos las visitas de forma geográfica y realista.
          </p>
          <p>
            El objetivo es dedicar tu tiempo en España a comparar opciones que tienen sentido, no a recorrer anuncios que podrían haberse descartado antes.
          </p>
        </div>
        <div className="feature-panel">
          <div>1 · Definir uso y presupuesto</div>
          <div>2 · Comparar zonas</div>
          <div>3 · Confirmar información</div>
          <div>4 · Crear una shortlist</div>
          <div>5 · Organizar visitas eficientes</div>
        </div>
      </section>

      <section className="section" style={{ textAlign: "center" }}>
        <h2>¿No sabes todavía qué zona elegir?</h2>
        <p style={{ color: "var(--muted)", maxWidth: 700, margin: "0 auto 20px", lineHeight: 1.7 }}>
          Es normal. Cuéntanos cómo imaginas tu vida en España y empezaremos por comparar las zonas, no por intentar venderte una vivienda concreta.
        </p>
        <Link className="contact-button" href="/es#contacto">Hablar con Freddy</Link>
      </section>

      <Footer locale="es" />
    </main>
  );
}
