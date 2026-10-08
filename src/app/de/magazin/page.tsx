import type { Metadata } from "next";
import { LocalizedMenuPage, localizedMenuPageMetadata } from "@/components/LocalizedMenuPage";

export function generateMetadata(): Metadata {
  return localizedMenuPageMetadata("de", "magazine");
}

export default function Page() {
  return <LocalizedMenuPage locale="de" pageKey="magazine" />;
}
