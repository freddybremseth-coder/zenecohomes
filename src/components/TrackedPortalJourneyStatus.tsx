import { PortalActivityTracker } from "@/components/PortalActivityTracker";
import { PortalJourneyStatus } from "@/components/PortalJourneyStatus";

type JourneyLocale = "no" | "en" | "de" | "es";

export function TrackedPortalJourneyStatus({ locale = "no" }: { locale?: JourneyLocale }) {
  return (
    <>
      <PortalActivityTracker signal="session_active" />
      <PortalJourneyStatus locale={locale} />
    </>
  );
}
