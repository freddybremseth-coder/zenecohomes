import Link from "next/link";
import {
  getPrimaryImage,
  getPropertyArea,
  getPropertyRef,
  getPropertyTitle,
  getPropertyType,
  type Property,
} from "@/lib/realtyflow";

type PropertyCardLocale = "no" | "de" | "en";

function formatCardPrice(price: number | undefined, locale: PropertyCardLocale) {
  if (!price) {
    if (locale === "de") return "Preis auf Anfrage";
    if (locale === "en") return "Price on request";
    return "Pris på forespørsel";
  }
  return new Intl.NumberFormat(locale === "de" ? "de-DE" : locale === "en" ? "en-GB" : "nb-NO", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(price);
}

export function PropertyCard({
  property,
  priority = false,
  locale = "no",
  detailBasePath = "/eiendommer",
}: {
  property: Property;
  priority?: boolean;
  locale?: PropertyCardLocale;
  detailBasePath?: string;
}) {
  const href = `${detailBasePath}/${encodeURIComponent(getPropertyRef(property))}`;
  const title = getPropertyTitle(property);
  const image = getPrimaryImage(property);
  const facts = [
    property.bedrooms ? `${property.bedrooms} ${locale === "de" ? "Schlafz." : locale === "en" ? "beds" : "sov"}` : "",
    property.bathrooms ? `${property.bathrooms} ${locale === "de" ? "Bad" : locale === "en" ? "baths" : "bad"}` : "",
    getPropertyArea(property) ? `${getPropertyArea(property)} m²` : "",
  ].filter(Boolean);

  return (
    <Link className="property-card" href={href} prefetch={priority}>
      <div className="property-image" style={{ backgroundImage: `url(${image})` }}>
        <span>{getPropertyType(property)}</span>
      </div>
      <div className="property-body">
        <p>{property.location || property.town || "Costa Blanca"}</p>
        <h3>{title}</h3>
        <strong>{formatCardPrice(property.price, locale)}</strong>
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
