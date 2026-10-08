import type { Metadata } from "next";
import { LocalizedMenuPage, localizedMenuPageMetadata } from "@/components/LocalizedMenuPage";

export function generateMetadata(): Metadata {
  return localizedMenuPageMetadata("es", "about");
}

export default function Page() {
  return <LocalizedMenuPage locale="es" pageKey="about" />;
}
