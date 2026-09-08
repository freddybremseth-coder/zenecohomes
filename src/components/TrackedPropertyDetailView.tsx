import { PortalActivityTracker } from "@/components/PortalActivityTracker";
import { PropertyDetailView } from "@/components/PropertyDetailView";
import type { Locale } from "@/lib/i18n";
import type { Property } from "@/lib/realtyflow";

export function TrackedPropertyDetailView({ property, locale }: { property: Property; locale: Locale }) {
  return (
    <>
      <PortalActivityTracker signal="property_view" propertyId={String(property.id)} />
      <PropertyDetailView property={property} locale={locale} />
    </>
  );
}
