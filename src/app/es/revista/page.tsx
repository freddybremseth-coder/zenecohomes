import type { Metadata } from "next";
import { LocalizedMenuPage, localizedMenuPageMetadata } from "@/components/LocalizedMenuPage";

export function generateMetadata(): Metadata {
  return localizedMenuPageMetadata("es", "magazine");
}

export default function Page() {
  return <LocalizedMenuPage locale="es" pageKey="magazine" />;
}
