import type { Metadata } from "next";
import { LocalizedMenuPage, localizedMenuPageMetadata } from "@/components/LocalizedMenuPage";

export function generateMetadata(): Metadata {
  return localizedMenuPageMetadata("de", "corporate");
}

export default function Page() {
  return <LocalizedMenuPage locale="de" pageKey="corporate" />;
}
