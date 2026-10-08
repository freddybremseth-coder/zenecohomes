import type { Metadata } from "next";
import { LocalizedMenuPage, localizedMenuPageMetadata } from "@/components/LocalizedMenuPage";

export function generateMetadata(): Metadata {
  return localizedMenuPageMetadata("en", "viewing");
}

export default function Page() {
  return <LocalizedMenuPage locale="en" pageKey="viewing" />;
}
