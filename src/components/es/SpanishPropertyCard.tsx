import Image from "next/image";
import Link from "next/link";
import { getPrimaryImage, getPropertyArea, getPropertyRef, type Property } from "@/lib/realtyflow";
import {
  formatSpanishPrice,
  getSpanishPropertyHeading,
  getSpanishPropertyType,
} from "@/lib/spanishProperty";

export function SpanishPropertyCard({
  property,
  priority = false,
}: {
  property: Property;
  priority?: boolean;
}) {
  const ref = getPropertyRef(property);
  const href = `/es/propiedades/${encodeURIComponent(ref)}`;
  const heading = getSpanishPropertyHeading(property);
  const image = getPrimaryImage(property);
  const type = getSpanishPropertyType(property);
  const area = getPropertyArea(property);
  const pricePerM2 =
    property.price && area ? new Intl.NumberFormat("es-ES").format(Math.round(property.price / area)) : null;
  const facts = [
    property.bedrooms ? `${property.bedrooms} dorm.` : "",
    property.bathrooms ? `${property.bathrooms} baños` : "",
    area ? `${area} m²` : "",
    property.pool ? "Piscina" : "",
  ].filter(Boolean);

  return (
    <Link className="property-card" href={href} prefetch={priority}>
      <div className="property-image">
        {image ? (
          <Image
            src={image}
            alt={heading}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 380px"
            style={{ objectFit: "cover" }}
            priority={priority}
          />
        ) : null}
        <span>{type}</span>
      </div>
      <div className="property-body">
        <h3>{heading}</h3>
        <div className="property-price-row">
          <strong>{formatSpanishPrice(property.price)}</strong>
          {pricePerM2 && <span className="price-per-m2">{pricePerM2} €/m²</span>}
        </div>
        {facts.length > 0 && (
          <div className="facts">
            {facts.map((fact) => (
              <span key={fact}>{fact}</span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
