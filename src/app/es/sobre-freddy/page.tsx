import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, MapPin, ShieldCheck } from "lucide-react";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { SpanishContactForm } from "@/components/es/SpanishContactForm";
import { homeLanguageLinks } from "@/lib/i18n";

const BASE = "https://www.zenecohomes.com";

export const metadata: Metadata = {
  title: "Sobre Freddy Bremseth | Asesor inmobiliario Costa Blanca",
  description:
    "Conoce a Freddy Bremseth, asesor inmobiliario de Zen Eco Homes, residente en Benidorm y dedicado a ayudar a compradores a entender zonas, propiedades y proceso de compra en la Costa Blanca.",
  alternates: {
    canonical: "/es/sobre-freddy",
    languages: {
      "nb-NO": `${BASE}/om-freddy`,
      "x-default": `${BASE}/om-freddy`,
      "es-ES": `${BASE}/es/sobre-freddy`,
    },
  },
  openGraph: {
    title: "Sobre Freddy Bremseth | Zen Eco Homes",
    description: "Asesoramiento inmobiliario en la Costa Blanca con la decisión del comprador en el centro.",
    url: `${BASE}/es/sobre-freddy`,
    locale: "es_ES",
    type: "profile",
    images: [`${BASE}/assets/freddy-bremseth.jpg`],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Freddy Bremseth",
  jobTitle: "Asesor inmobiliario",
  worksFor: { "@type": "Organization", name: "Zen Eco Homes", url: BASE },
  address: { "@type": "PostalAddress", addressLocality: "Benidorm", addressRegion: "Alicante", addressCountry: "ES" },
  knowsLanguage: ["no", "en", "es"],
  image: `${BASE}/assets/freddy-bremseth.jpg`,
  url: `${BASE}/es/sobre-freddy`,
};

export default function SpanishAboutFreddyPage() {
  return (
    <main lang="es">
      <SiteHeader locale="es" languageLinks={homeLanguageLinks("es")} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />

      <section className="page-hero compact-hero image-hero">
        <p className="eyebrow">Sobre Freddy</p>
        <h1>Asesoramiento inmobiliario con la decisión del comprador en el centro</h1>
        <p>
          Soy Freddy Bremseth. Vivo en Benidorm y ayudo a compradores a entender mejor el mercado inmobiliario de la Costa Blanca antes de tomar una decisión importante.
        </p>
        <div className="hero-actions">
          <Link className="contact-button" href="#contacto">Hablar conmigo <ArrowRight size={18} /></Link>
          <Link className="text-button light" href="/es/propiedades">Ver propiedades</Link>
        </div>
      </section>

      <section className="section split">
        <div>
          <p className="eyebrow">Experiencia</p>
          <h2>Una trayectoria profesional basada en personas, decisiones y resolución de problemas</h2>
          <p>
            Mi experiencia profesional viene de distintos sectores, pero con un hilo común: trabajar con personas, asumir responsabilidad, negociar, organizar procesos y convertir situaciones complejas en decisiones más claras.
          </p>
          <p>
            Durante trece años dirigí mi propia empresa de transporte en Noruega, con empleados y varios vehículos. También trabajé con compañías aéreas internacionales en Gardermoen y Fornebu. Más adelante pasé al sector tecnológico y de soluciones digitales, primero como responsable de soporte y después como Key Account Manager, trabajando con organizaciones de mayor tamaño, ventas de soluciones web y formación en posicionamiento en buscadores. También tengo formación y experiencia en fotografía.
          </p>
          <p>
            Esa combinación me resulta muy útil en inmobiliaria: escuchar qué necesita realmente una persona, hacer preguntas concretas, comparar información, negociar y mantener la visión de conjunto durante un proceso largo.
          </p>
        </div>
        <div style={{ position: "relative", minHeight: 480, borderRadius: 24, overflow: "hidden" }}>
          <Image src="/assets/freddy-bremseth.jpg" alt="Freddy Bremseth" fill sizes="(max-width: 900px) 100vw, 42vw" style={{ objectFit: "cover" }} priority />
        </div>
      </section>

      <section className="section proof-section">
        <div className="section-heading">
          <p className="eyebrow">Vivir en España</p>
          <h2>Benidorm como base, y una relación real con el interior de Alicante</h2>
          <p>
            Me instalé de forma permanente en la Costa Blanca en otoño de 2025. Hoy vivo en Benidorm y trabajo con el mercado inmobiliario a través de Zen Eco Homes, además de colaborar con actores establecidos del sector como Soleada.no.
          </p>
          <p>
            Mi familia también tiene una finca de olivos en Biar, con alrededor de 1.500 olivos. Eso me ha permitido conocer un lado de Alicante muy diferente al de las zonas turísticas: la vida en el interior, las fincas, el agua, los accesos, las parcelas y las diferencias prácticas entre vivir junto al mar y vivir más cerca de la naturaleza.
          </p>
        </div>
        <div className="proof-grid">
          <article><strong><MapPin size={22} /></strong><h3>Costa</h3><p>Benidorm, Villajoyosa, Finestrat, Albir, Altea, Polop y otras zonas de la Costa Blanca.</p></article>
          <article><strong><MapPin size={22} /></strong><h3>Interior</h3><p>Biar, Villena, Sax, Pinoso y otras zonas del interior de Alicante.</p></article>
          <article><strong><BriefcaseBusiness size={22} /></strong><h3>Red profesional</h3><p>Coordinación con vendedores, promotores, bancos y los profesionales jurídicos y técnicos necesarios en cada operación.</p></article>
        </div>
      </section>

      <section className="section rich-text">
        <p className="eyebrow">Cómo trabajo</p>
        <h2>La primera pregunta no es «¿qué vivienda puedo venderte?»</h2>
        <p>La primera pregunta es: <strong>«¿Qué intentas encontrar y por qué?»</strong></p>
        <p>
          Una vivienda puede ser para vacaciones, inversión, jubilación, residencia habitual o una combinación de varias cosas. Hay que saber cuánto quieres gastar en total, cuánto valoras el mar, si necesitas servicios a pie, qué importancia tienen aeropuerto, colegios o golf y cuánto mantenimiento quieres asumir.
        </p>
        <p>
          Solo después tiene sentido empezar a mirar viviendas. Por eso veo mi función principalmente como asesor inmobiliario: ayudarte a investigar alternativas, preguntar a promotores y vendedores, entender precios y costes adicionales, comparar zonas y proyectos y ordenar la información antes de comprometer dinero.
        </p>
      </section>

      <section className="section split">
        <div>
          <p className="eyebrow">Principio de trabajo</p>
          <h2>Un buen asesor también debe poder recomendarte que no compres</h2>
          <p>
            Si una ubicación, un proyecto o una solución no encaja con lo que realmente buscas, quiero que lo sepas antes de reservar. El objetivo no es que compres lo más rápido posible, sino que entiendas qué compras, por qué lo compras y cuáles son las alternativas.
          </p>
          <p>
            Cuando la operación requiere revisión jurídica, fiscal, técnica o notarial, esa parte debe realizarla el profesional cualificado correspondiente. Mi función es ayudarte a mantener el proceso ordenado y la decisión bien informada.
          </p>
          <div className="feature-panel">
            <div><ShieldCheck /> Asesoramiento antes que venta</div>
            <div><ShieldCheck /> Comparar antes de reservar</div>
            <div><ShieldCheck /> Profesionales adecuados para cada revisión</div>
          </div>
        </div>
        <div>
          <p className="eyebrow">Idiomas y disponibilidad</p>
          <h2>Estoy aquí, no a miles de kilómetros</h2>
          <p>
            Trabajo en noruego e inglés y utilizo español en mi vida diaria y en mi trabajo en España. Al vivir aquí, puedo seguir de cerca zonas, proyectos y cuestiones prácticas que son difíciles de entender únicamente desde un portal inmobiliario.
          </p>
          <Link className="contact-button" href="#contacto">Cuéntame qué buscas <ArrowRight size={18} /></Link>
        </div>
      </section>

      <section className="section" id="contacto">
        <p className="eyebrow">Contacto</p>
        <h2 style={{ fontFamily: "var(--display)", color: "var(--dark)", marginTop: 0 }}>¿Estás pensando en comprar en España?</h2>
        <p style={{ color: "var(--muted)", maxWidth: 680, lineHeight: 1.7 }}>Cuéntame brevemente tu situación y tus prioridades. Podemos empezar por comparar zonas antes de hablar de una vivienda concreta.</p>
        <div style={{ maxWidth: 760, marginTop: 18 }}><SpanishContactForm source="about-freddy-es" /></div>
      </section>

      <Footer locale="es" />
    </main>
  );
}
