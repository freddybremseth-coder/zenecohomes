import Link from "next/link";
import {
  formatPriceForLocale,
  getPrimaryImage,
  getPropertyArea,
  getPropertyRef,
  getPropertyTown,
  getLocalizedPropertyTitle,
  getLocalizedPropertyType,
  type Property,
  type PropertyLocale,
} from "@/lib/realtyflow";

const NUM_LOCALE: Record<PropertyLocale, string> = { no: "nb-NO", de: "de-DE", en: "en-GB" };

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
  const town = getPropertyTown(property) || property.location || "Costa Blanca";
  const area = getPropertyArea(property);
  const pricePerM2 =
    property.price && area ? new Intl.NumberFormat(NUM_LOCALE[locale]).format(Math.round(property.price / area)) : null;
  const facts = [
    property.bedrooms ? `${property.bedrooms} ${locale === "de" ? "Schlafz." : locale === "en" ? "beds" : "sov"}` : "",
    property.bathrooms ? `${property.bathrooms} ${locale === "de" ? "Bad" : locale === "en" ? "baths" : "bad"}` : "",
    area ? `${area} m²` : "",
    property.pool ? (locale === "no" ? "Basseng" : "Pool") : "",
  ].filter(Boolean);

  return (
    <Link className="property-card" href={href} prefetch={priority}>
      <div className="property-image" style={{ backgroundImage: `url(${image})` }}>
        <span>{type}</span>
      </div>
      <div className="property-body">
        <p>{town}</p>
        <h3>{title}</h3>
        <div className="property-price-row">
          <strong>{formatPriceForLocale(property.price, locale)}</strong>
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
