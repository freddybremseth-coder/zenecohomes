import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, FileCheck2, KeyRound, Landmark, Scale, Search, WalletCards } from "lucide-react";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { homeLanguageLinks } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Proceso de compra de vivienda en España | Guía paso a paso",
  description:
    "Cómo comprar vivienda en España: presupuesto, NIE, abogado, reserva, comprobaciones, contrato, pagos, notaría y entrega de llaves.",
  alternates: { canonical: "/es/proceso-de-compra" },
};

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Definir uso, presupuesto y zona",
    body: "Antes de buscar viviendas concretas conviene decidir para qué se utilizará la propiedad, cuánto puedes invertir en total y qué zonas encajan con tu vida diaria. Incluye impuestos y gastos en el presupuesto desde el principio.",
  },
  {
    icon: WalletCards,
    number: "02",
    title: "Preparar financiación y divisa",
    body: "Si necesitas hipoteca, aclara la capacidad de financiación antes de comprometerte. Si el dinero procede de otra moneda, calcula también el efecto del tipo de cambio y el calendario de transferencias.",
  },
  {
    icon: FileCheck2,
    number: "03",
    title: "NIE y profesionales adecuados",
    body: "El NIE es necesario para muchas gestiones vinculadas a la compra. Recomendamos contar con un abogado independiente que revise la operación y coordine las comprobaciones jurídicas necesarias.",
  },
  {
    icon: CheckCircle2,
    number: "04",
    title: "Shortlist y visitas",
    body: "Confirmamos la información esencial antes de organizar visitas siempre que sea posible: disponibilidad, precio, ubicación, características y condiciones relevantes. La ruta se planifica para comparar opciones de forma eficiente.",
  },
  {
    icon: Landmark,
    number: "05",
    title: "Reserva: entender antes de pagar",
    body: "Una reserva puede retirar temporalmente la vivienda del mercado, pero las condiciones varían. Antes de transferir dinero debes saber qué reservas, cuánto pagas, qué ocurre si la operación no sigue adelante y qué documentación queda pendiente de revisar.",
  },
  {
    icon: Scale,
    number: "06",
    title: "Comprobación jurídica y técnica",
    body: "El abogado debe revisar titularidad, cargas, documentación y los aspectos legales aplicables. En terrenos, fincas, ampliaciones o dudas urbanísticas puede ser necesario incorporar arquitecto, técnico o información municipal.",
  },
  {
    icon: FileCheck2,
    number: "07",
    title: "Contrato y calendario de pagos",
    body: "En obra nueva y segunda mano la estructura contractual puede ser distinta. Deben quedar claros precio, hitos de pago, plazos, qué está incluido, condiciones de entrega y garantías que correspondan a la operación.",
  },
  {
    icon: KeyRound,
    number: "08",
    title: "Notaría, escritura y llaves",
    body: "La compraventa se formaliza normalmente mediante escritura pública ante notario. Después vienen registro, cambios de suministros, comunidad, seguros y otras tareas prácticas relacionadas con ser propietario en España.",
  },
];

const redFlags = [
  "Presión para transferir una reserva antes de recibir condiciones claras por escrito.",
  "Información importante que cambia entre el anuncio, la visita y el contrato.",
  "Promesas sobre edificabilidad, vistas, alquiler o plazos que no se pueden documentar.",
  "Costes adicionales que aparecen tarde y alteran significativamente el presupuesto.",
  "Una ruta de visitas basada en cantidad de citas, no en propiedades previamente filtradas.",
];

export default function SpanishBuyingProcessPage() {
  return (
    <main lang="es">
      <SiteHeader locale="es" languageLinks={homeLanguageLinks("es")} />

      <section className="page-hero compact-hero image-hero">
        <p className="eyebrow">Comprar con un proceso claro</p>
        <h1>Cómo comprar vivienda en España paso a paso</h1>
        <p>
          La compra no empieza con la firma. Empieza mucho antes: presupuesto, zona, información, profesionales y criterios claros. Cuanto más se prepare antes de reservar, menos decisiones importantes tendrás que tomar bajo presión.
        </p>
        <div className="hero-actions">
          <Link className="contact-button" href="/es#contacto">Hablar sobre mi compra <ArrowRight size={18} /></Link>
          <Link className="text-button light" href="/es/propiedades">Ver propiedades</Link>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">El recorrido completo</p>
          <h2>Ocho pasos desde la idea hasta las llaves</h2>
          <p>El orden exacto depende de la operación, pero esta estructura ayuda a evitar que la urgencia comercial se adelante a las comprobaciones importantes.</p>
        </div>
        <div className="card-list">
          {steps.map((step) => (
            <article className="info-card" key={step.number}>
              <step.icon />
              <div>
                <strong>{step.number}</strong>
                <h2>{step.title}</h2>
                <p>{step.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section proof-section">
        <div className="section-heading">
          <p className="eyebrow">Antes de transferir dinero</p>
          <h2>Señales que merecen una comprobación adicional</h2>
          <p>No significan necesariamente que una operación sea mala, pero sí que conviene obtener respuestas y documentación antes de seguir.</p>
        </div>
        <div className="check-list">
          {redFlags.map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      <section className="section split">
        <div>
          <p className="eyebrow">¿Cuánto hay que añadir al precio?</p>
          <h2>Trabaja siempre con el coste total</h2>
          <p>
            Impuestos y gastos dependen de la comunidad autónoma, de si compras obra nueva o segunda mano y de tu operación concreta. Como orientación inicial, muchos compradores reservan aproximadamente un 10–14 % adicional, pero el cálculo definitivo debe hacerse con los datos reales de la compra.
          </p>
          <p>
            Además del precio y los gastos de adquisición, considera financiación, cambio de divisa, comunidad, seguros, suministros, mobiliario, mantenimiento y posibles extras de obra nueva.
          </p>
        </div>
        <div className="feature-panel">
          <div>Precio real de la vivienda</div>
          <div>Impuestos y gastos de compra</div>
          <div>Honorarios profesionales</div>
          <div>Financiación y divisa</div>
          <div>Extras y puesta en marcha</div>
        </div>
      </section>

      <section className="section proof-section">
        <div className="section-heading">
          <p className="eyebrow">Relacionado</p>
          <h2>Profundiza antes de decidir</h2>
        </div>
        <div className="proof-grid">
          <article><h3>Elegir zona</h3><p>Compara costa norte, sur, Costa Cálida e interior.</p><Link className="text-button" href="/es/zonas">Comparar zonas <ArrowRight size={15} /></Link></article>
          <article><h3>Obra nueva</h3><p>Promotor, pagos, memoria de calidades, garantías y entrega.</p><Link className="text-button" href="/es/obra-nueva-en-espana">Leer guía <ArrowRight size={15} /></Link></article>
          <article><h3>Terrenos</h3><p>Urbanismo, acceso, agua, electricidad y edificabilidad antes de comprar.</p><Link className="text-button" href="/es/terreno-en-espana">Leer guía <ArrowRight size={15} /></Link></article>
        </div>
      </section>

      <section className="section" style={{ textAlign: "center" }}>
        <h2>¿Quieres preparar una compra o una visita?</h2>
        <p style={{ color: "var(--muted)", maxWidth: 720, margin: "0 auto 20px", lineHeight: 1.7 }}>
          Cuéntanos presupuesto, uso y fechas. Podemos ayudarte a ordenar la búsqueda y las preguntas antes de dedicar tiempo a las visitas.
        </p>
        <Link className="contact-button" href="/es#contacto">Contactar con Zen Eco Homes</Link>
      </section>

      <Footer locale="es" />
    </main>
  );
}
