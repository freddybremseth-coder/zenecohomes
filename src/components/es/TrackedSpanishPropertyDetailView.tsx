import { PortalActivityTracker } from "@/components/PortalActivityTracker";
import { SpanishPropertyDetailView } from "@/components/es/SpanishPropertyDetailView";
import type { Property } from "@/lib/realtyflow";

export function TrackedSpanishPropertyDetailView({ property }: { property: Property }) {
  return (
    <>
      <PortalActivityTracker signal="property_view" propertyId={String(property.id)} />
      <SpanishPropertyDetailView property={property} />
    </>
  );
}
