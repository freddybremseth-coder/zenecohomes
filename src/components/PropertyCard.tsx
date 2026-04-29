import Link from "next/link";
import {
  formatPrice,
  getPrimaryImage,
  getPropertyArea,
  getPropertyRef,
  getPropertyTitle,
  getPropertyType,
  type Property,
} from "@/lib/realtyflow";

export function PropertyCard({ property, priority = false }: { property: Property; priority?: boolean }) {
  const href = `/eiendommer/${encodeURIComponent(getPropertyRef(property))}`;
  const title = getPropertyTitle(property);
  const image = getPrimaryImage(property);

  return (
    <Link className="property-card" href={href} prefetch={priority}>
      <div className="property-image" style={{ backgroundImage: `url(${image})` }}>
        <span>{getPropertyType(property)}</span>
      </div>
      <div className="property-body">
        <p>{property.location || property.town || "Costa Blanca"}</p>
        <h3>{title}</h3>
        <strong>{formatPrice(property.price)}</strong>
        <div className="facts">
          <span>{property.bedrooms || 3} sov</span>
          <span>{property.bathrooms || 2} bad</span>
          <span>{getPropertyArea(property) || 120} m²</span>
        </div>
      </div>
    </Link>
  );
}
