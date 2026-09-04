import Link from "next/link";
import {
  formatPriceForLocale,
  getPrimaryImage,
  getPropertyArea,
  getPropertyRef,
  getLocalizedPropertyTitle,
  getLocalizedPropertyType,
  type Property,
  type PropertyLocale,
} from "@/lib/realtyflow";

export function PropertyCard({
  property,
  priority = false,
  locale = "no",
  detailBasePath = "/eiendommer",
}: {
  property: Property;
  priority?: boolean;
  locale?: PropertyLocale;
  detailBasePath?: string;
}) {
  const href = `${detailBasePath}/${encodeURIComponent(getPropertyRef(property))}`;
  const title = getLocalizedPropertyTitle(property, locale);
  const image = getPrimaryImage(property);
  const type = getLocalizedPropertyType(property, locale);
  const facts = [
    property.bedrooms ? `${property.bedrooms} ${locale === "de" ? "Schlafz." : locale === "en" ? "beds" : "sov"}` : "",
    property.bathrooms ? `${property.bathrooms} ${locale === "de" ? "Bad" : locale === "en" ? "baths" : "bad"}` : "",
    getPropertyArea(property) ? `${getPropertyArea(property)} m²` : "",
  ].filter(Boolean);

  return (
    <Link className="property-card" href={href} prefetch={priority}>
      <div className="property-image" style={{ backgroundImage: `url(${image})` }}>
        <span>{type}</span>
      </div>
      <div className="property-body">
        <p>{property.location || property.town || "Costa Blanca"}</p>
        <h3>{title}</h3>
        <strong>{formatPriceForLocale(property.price, locale)}</strong>
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
