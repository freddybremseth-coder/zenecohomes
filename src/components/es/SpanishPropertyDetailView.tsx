import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Bath, BedDouble, Check, Coins, Home, LandPlot, MessageCircle, Ruler, Tag, Waves, Zap } from "lucide-react";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { SpanishContactForm } from "@/components/es/SpanishContactForm";
import { SpanishPropertyGallery } from "@/components/es/SpanishPropertyGallery";
import {
  getPrimaryImage,
  getPropertyArea,
  getPropertyImages,
  getPropertyRef,
  type Property,
} from "@/lib/realtyflow";
import {
  formatSpanishPrice,
  getSpanishPropertyDescription,
  getSpanishPropertyHeading,
  getSpanishPropertyPlace,
  getSpanishPropertyTitle,
  getSpanishPropertyType,
} from "@/lib/spanishProperty";

const BASE = "https://www.zenecohomes.com";

export function SpanishPropertyNotFoundView() {
  return (
    <main lang="es">
      <SiteHeader locale="es" />
      <section className="page-hero compact-hero">
        <p className="eyebrow">Propiedades</p>
        <h1>Vivienda no encontrada</h1>
        <p>La referencia puede haber dejado de estar disponible o haber cambiado. Podemos ayudarte a encontrar alternativas.</p>
        <div className="hero-actions">
          <Link className="contact-button" href="/es/propiedades">Ver propiedades</Link>
          <Link className="text-button light" href="/es#contacto">Contactar</Link>
        </div>
      </section>
      <Footer locale="es" />
    </main>
  );
}

export function SpanishPropertyDetailView({ property }: { property: Property }) {
  const ref = getPropertyRef(property);
  const title = getSpanishPropertyTitle(property);
  const heading = getSpanishPropertyHeading(property);
  const type = getSpanishPropertyType(property);
  const description = getSpanishPropertyDescription(property);
  const town = getSpanishPropertyPlace(property) || "Costa Blanca";
  const images = getPropertyImages(property);
  const mainImage = getPrimaryImage(property);
  const area = getPropertyArea(property);
  const detailPath = `/es/propiedades/${encodeURIComponent(ref)}`;
  const propertyUrl = `${BASE}${detailPath}`;
  const lowerCosts = property.price ? Math.round(property.price * 0.1) : null;
  const upperCosts = property.price ? Math.round(property.price * 0.14) : null;
  const lowerTotal = property.price && lowerCosts ? property.price + lowerCosts : null;
  const upperTotal = property.price && upperCosts ? property.price + upperCosts : null;
  const languageLinks = [
    { locale: "no" as const, href: `/eiendommer/${encodeURIComponent(ref)}`, current: false },
    { locale: "de" as const, href: `/de/immobilien/${encodeURIComponent(ref)}`, current: false },
    { locale: "en" as const, href: `/en/properties/${encodeURIComponent(ref)}`, current: false },
    { locale: "es" as const, href: detailPath, current: true },
  ];
  const facts = [
    { icon: <Tag />, label: `Ref ${ref}` },
    { icon: <Home />, label: type },
    property.bedrooms ? { icon: <BedDouble />, label: `${property.bedrooms} dormitorios` } : null,
    property.bathrooms ? { icon: <Bath />, label: `${property.bathrooms} baños` } : null,
    area ? { icon: <Ruler />, label: `${area} m²` } : null,
    property.plot_size ? { icon: <LandPlot />, label: `${property.plot_size} m² de parcela` } : null,
    property.pool ? { icon: <Waves />, label: "Piscina" } : null,
    property.energy_rating ? { icon: <Zap />, label: `Energía ${property.energy_rating}` } : null,
    area && property.price
      ? { icon: <Coins />, label: `${new Intl.NumberFormat("es-ES").format(Math.round(property.price / area))} €/m²` }
      : null,
  ].filter(Boolean) as Array<{ icon: React.ReactNode; label: string }>;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Residence",
        "@id": `${propertyUrl}#residence`,
        name: heading,
        description,
        image: images.length ? images : [mainImage],
        numberOfRooms: property.bedrooms,
        floorSize: area ? { "@type": "QuantitativeValue", value: area, unitCode: "MTK" } : undefined,
        address: { "@type": "PostalAddress", addressLocality: town, addressCountry: "ES" },
      },
      {
        "@type": "Product",
        "@id": `${propertyUrl}#offer`,
        name: title,
        description,
        image: images.length ? images : [mainImage],
        sku: ref,
        category: type,
        brand: { "@type": "Organization", name: "Zen Eco Homes", url: BASE },
        offers: property.price
          ? {
              "@type": "Offer",
              url: propertyUrl,
              price: property.price,
              priceCurrency: "EUR",
              availability: "https://schema.org/InStock",
              seller: { "@type": "RealEstateAgent", name: "Zen Eco Homes", url: BASE },
            }
          : undefined,
      },
    ],
  };

  return (
    <main lang="es">
      <SiteHeader locale="es" languageLinks={languageLinks} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="property-detail-hero">
        {mainImage ? (
          <Image src={mainImage} alt={heading} fill sizes="100vw" priority style={{ objectFit: "cover", zIndex: 0 }} />
        ) : null}
        <div>
          <Link className="back-link" href="/es/propiedades">
            <ArrowLeft size={18} /> Todas las propiedades
          </Link>
          <p className="eyebrow">{town}</p>
          <h1>{heading}</h1>
          <strong>{formatSpanishPrice(property.price)}</strong>
          <div className="hero-actions">
            <a href="#contacto">
              <MessageCircle size={17} /> Solicitar información
            </a>
          </div>
        </div>
      </section>

      <section className="detail-layout">
        <div>
          <div className="detail-facts">
            {facts.map((fact) => (
              <span key={fact.label}>{fact.icon} {fact.label}</span>
            ))}
          </div>

          <article className="rich-text">
            <h2>Sobre la vivienda</h2>
            {description.split(/\n{2,}/).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </article>

          <section className="decision-grid">
            <article>
              <h2>Qué conviene comprobar antes de reservar</h2>
              <ul>
                <li>Precio y disponibilidad actualizados de la unidad concreta.</li>
                <li>Qué incluye el precio y qué elementos son extras.</li>
                <li>Contrato, calendario de pagos, garantías y fecha prevista de entrega.</li>
                <li>Situación jurídica y urbanística revisada por el profesional correspondiente.</li>
                <li>Distancias reales a servicios y funcionamiento de la zona durante todo el año.</li>
              </ul>
              <Link className="text-button" href="/es/asesor-inmobiliario-espana">Cómo te ayudamos</Link>
            </article>

            <article>
              <h2>Coste total orientativo</h2>
              <p>
                Los impuestos y gastos dependen de la operación y de si se trata de obra nueva o segunda mano. Como primera orientación, muchos compradores reservan aproximadamente un 10–14 % adicional al precio.
              </p>
              <div className="cost-box">
                <span>Precio</span>
                <strong>{formatSpanishPrice(property.price)}</strong>
                <span>Gastos orientativos</span>
                <strong>{lowerCosts && upperCosts ? `${formatSpanishPrice(lowerCosts)} – ${formatSpanishPrice(upperCosts)}` : "A confirmar"}</strong>
                <span>Total orientativo</span>
                <strong>{lowerTotal && upperTotal ? `${formatSpanishPrice(lowerTotal)} – ${formatSpanishPrice(upperTotal)}` : "A confirmar"}</strong>
              </div>
              <small>El cálculo definitivo debe hacerse para la vivienda y situación fiscal concretas.</small>
            </article>

            <article>
              <h2>¿Puede funcionar para alquiler?</h2>
              <p>
                Antes de basar la compra en ingresos de alquiler hay que estudiar normativa aplicable, licencias, gastos de comunidad, estacionalidad, demanda y competencia en la ubicación concreta.
              </p>
              <Link className="text-button" href="/es/vivienda-en-espana">Comprar vivienda en España</Link>
            </article>

            <article>
              <h2>¿Qué está incluido?</h2>
              <p>
                Pide la información completa para confirmar cocina y electrodomésticos, climatización, iluminación, piscina, jardín, aparcamiento, mobiliario, placas solares y cualquier suplemento relevante.
              </p>
              <Link className="text-button" href="/es/obra-nueva-en-espana">Guía de obra nueva</Link>
            </article>
          </section>

          <section className="buyer-next-steps">
            <h2>Siguientes pasos</h2>
            {[
              "Confirmamos precio, disponibilidad y condiciones actuales.",
              "Te enviamos documentación, planos y alternativas comparables.",
              "Organizamos visita virtual o presencial y coordinamos el siguiente paso de la compra.",
            ].map((step, index) => (
              <div key={step}><span>{index + 1}</span><p>{step}</p></div>
            ))}
          </section>

          {images.length > 1 && (
            <section className="premium-gallery">
              <h2>Imágenes</h2>
              <SpanishPropertyGallery images={images} title={heading} />
            </section>
          )}

          <section className="area-context">
            <h2>Zona y ubicación</h2>
            <p>
              La vivienda está en {town}. Para valorar una compra estudiamos también distancia a playa, servicios, golf, centros sanitarios, aeropuerto y cómo funciona la zona fuera de la temporada alta.
            </p>
            <div>
              <span>Valoración de la zona</span>
              <span>Alternativas en un presupuesto similar</span>
              <span>Visita virtual o presencial</span>
            </div>
          </section>

          <section className="property-map">
            <h2>Mapa y ubicación</h2>
            <iframe
              title={`Mapa – ${town}`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(`${town}, Spain`)}&z=12&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </section>

          <nav className="breadcrumb-nav" aria-label="Ruta de navegación">
            <Link href="/es">Inicio</Link><span>/</span><Link href="/es/propiedades">Propiedades</Link><span>/</span><span>{heading}</span>
          </nav>
        </div>

        <aside className="sticky-card">
          <h2>Solicita la información completa de esta vivienda</h2>
          <ul className="property-info-list">
            {[
              "Ficha completa y planos",
              "Precio y disponibilidad actualizados",
              "Qué está incluido",
              "Estimación del coste total",
              "Valoración de Freddy",
              "Viviendas alternativas comparables",
            ].map((item) => (
              <li key={item}><Check size={15} /> {item}</li>
            ))}
          </ul>
          <div id="contacto" />
          <SpanishContactForm
            propertyRef={ref}
            propertyTitle={heading}
            requestType="Información completa de la vivienda"
            source={`property-es-${ref}`}
          />
        </aside>
      </section>
      <Footer locale="es" />
    </main>
  );
}
