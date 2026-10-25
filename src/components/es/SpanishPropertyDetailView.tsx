import { PropertyProjectFacts } from "@/components/PropertyProjectFacts";
import { StructuredPropertyDescription } from "@/components/StructuredPropertyDescription";
import { PropertyFloorplans } from "@/components/PropertyFloorplans";
import { ResilientImage } from "@/components/ResilientImage";
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
          <ResilientImage src={mainImage} alt={heading} fill sizes="100vw" priority style={{ objectFit: "cover", zIndex: 0 }} />
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
        <div className="property-detail-primary">
          <div className="detail-facts">
            {facts.map((fact) => (
              <span key={fact.label}>{fact.icon} {fact.label}</span>
            ))}
          </div>

          <StructuredPropertyDescription text={description} locale="es" />

          <PropertyProjectFacts property={property} locale={"es"} />

          <PropertyFloorplans images={property.floorplans || []} locale="es" />

          <section className="buyer-next-steps">
            <h2>Descubre esta vivienda</h2>
            <p>Solicita la información completa del proyecto, los planos disponibles y una visita presencial o virtual. Te ayudamos a encontrar la vivienda y las opciones que mejor se adapten a lo que buscas.</p>
            <a className="text-button" href="#contacto">Solicitar información sobre esta vivienda →</a>
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
              Descubre la zona de {town}, su entorno y las posibilidades de disfrutar de esta vivienda durante todo el año. Solicita información sobre los servicios y puntos de interés cercanos.
            </p>
            <div>
              <span>Descubre el entorno</span>
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
