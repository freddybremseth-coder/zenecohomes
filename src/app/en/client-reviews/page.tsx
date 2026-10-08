import type { Metadata } from "next";
import { LocalizedMenuPage, localizedMenuPageMetadata } from "@/components/LocalizedMenuPage";

export function generateMetadata(): Metadata {
  return localizedMenuPageMetadata("en", "reviews");
}

export default function Page() {
  return <LocalizedMenuPage locale="en" pageKey="reviews" />;
}
