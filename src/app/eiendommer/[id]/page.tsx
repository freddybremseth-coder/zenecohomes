import Link from "next/link";
import { ArrowLeft, Bath, BedDouble, Home, Ruler, Tag } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import {
  formatPrice,
  getPrimaryImage,
  getProperties,
  getProperty,
  getPropertyArea,
  getPropertyDescription,
  getPropertyImages,
  getPropertyRef,
  getPropertyTitle,
  getPropertyType,
} from "@/lib/realtyflow";

export async function generateStaticParams() {
  const properties = await getProperties(30);
  return properties.map((property) => ({ id: encodeURIComponent(getPropertyRef(property)) }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const property = await getProperty(decodeURIComponent(id));
  return { title: `${property ? getPropertyTitle(property) : "Bolig"} | Zen Eco Homes` };
}

export default async function PropertyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const property = await getProperty(decodeURIComponent(id));

  if (!property) {
    return (
      <main>
        <SiteHeader />
        <section className="page-hero compact-hero">
          <h1>Bolig ikke funnet</h1>
          <Link className="text-button" href="/eiendommer">
            <ArrowLeft size={18} /> Tilbake til boliger
          </Link>
        </section>
        <Footer />
      </main>
    );
  }

  const images = getPropertyImages(property);
  const mainImage = getPrimaryImage(property);
  const description = getPropertyDescription(property);

  return (
    <main>
      <SiteHeader />
      <section className="property-detail-hero" style={{ backgroundImage: `url(${mainImage})` }}>
        <div>
          <Link className="back-link" href="/eiendommer">
            <ArrowLeft size={18} /> Alle boliger
          </Link>
          <p className="eyebrow">{property.location || property.town || "Costa Blanca"}</p>
          <h1>{getPropertyTitle(property)}</h1>
          <strong>{formatPrice(property.price)}</strong>
        </div>
      </section>

      <section className="detail-layout">
        <div>
          <div className="detail-facts">
            <span>
              <Tag /> Ref {getPropertyRef(property)}
            </span>
            <span>
              <Home /> {getPropertyType(property)}
            </span>
            <span>
              <BedDouble /> {property.bedrooms || 0} soverom
            </span>
            <span>
              <Bath /> {property.bathrooms || 0} bad
            </span>
            <span>
              <Ruler /> {getPropertyArea(property) || 0} m²
            </span>
          </div>

          <article className="rich-text">
            <h2>Om boligen</h2>
            <p>
              {description ||
                "Dette er et moderne nybygg/prosjekt i Spania. Kontakt oss for komplett prospekt, plantegninger og oppdatert tilgjengelighet."}
            </p>
          </article>

          {images.length > 1 && (
            <div className="gallery-grid">
              {images.slice(1, 7).map((image) => (
                <div key={image} style={{ backgroundImage: `url(${image})` }} />
              ))}
            </div>
          )}
        </div>

        <aside className="sticky-card">
          <h2>Interessert?</h2>
          <p>Send forespørsel, så hjelper vi deg med prospekt, visning og neste steg.</p>
          <ContactForm source={`property-${getPropertyRef(property)}`} />
        </aside>
      </section>
      <Footer />
    </main>
  );
}
