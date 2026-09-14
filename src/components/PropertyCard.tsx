import Image from "next/image";
import Link from "next/link";
import {
  formatPriceForLocale,
  getPrimaryImage,
  getPropertyArea,
  getPropertyRef,
  getPropertyTown,
  getLocalizedPropertyTitle,
  getLocalizedPropertyType,
  normalizeSearchText,
  type Property,
  type PropertyLocale,
} from "@/lib/realtyflow";

const NUM_LOCALE: Record<PropertyLocale, string> = { no: "nb-NO", de: "de-DE", en: "en-GB" };

// Gjør ropende STORE-BOKSTAV-marketingtitler om til lesbar setningsform.
function toReadable(value: string) {
  return value && value === value.toUpperCase()
    ? value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
    : value;
}

function getModelName(property: Property) {
  const value = (property as Property & { model_name?: unknown }).model_name;
  return typeof value === "string" ? value.trim() : "";
}

function getDisplayHeading(property: Property, locale: PropertyLocale) {
  const localizedTitle = toReadable(getLocalizedPropertyTitle(property, locale));
  const modelName = getModelName(property);
  const town = getPropertyTown(property);

  let heading = localizedTitle;
  if (modelName && !normalizeSearchText(heading).includes(normalizeSearchText(modelName))) {
    heading = `${modelName} – ${heading}`;
  }
  if (town && !normalizeSearchText(heading).includes(normalizeSearchText(town))) {
    heading = `${heading} – ${town}`;
  }
  return heading;
}

export function PropertyCard({
  property,
  priority = false,
  locale = "no",
  detailBasePath = "/eiendommer",
  contextLabel,
}: {
  property: Property;
  priority?: boolean;
  locale?: PropertyLocale;
  detailBasePath?: string;
  contextLabel?: string;
}) {
  const href = `${detailBasePath}/${encodeURIComponent(getPropertyRef(property))}`;
  const image = getPrimaryImage(property);
  const type = getLocalizedPropertyType(property, locale);
  const heading = getDisplayHeading(property, locale);
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
        <span className="property-type-chip">{type}</span>
        <div className="property-price-tag">
          <strong>{formatPriceForLocale(property.price, locale)}</strong>
          {pricePerM2 && <span>{pricePerM2} €/m²</span>}
        </div>
      </div>
      <div className="property-body">
        {contextLabel ? <p>{contextLabel}</p> : null}
        <h3>{heading}</h3>
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
