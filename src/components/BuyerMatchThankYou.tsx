"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export function BuyerMatchThankYou() {
  const params = useSearchParams();
  const requested = params.get("results") || "";
  // Only accept our own property listing path, never external redirects.
  const results = requested.startsWith("/eiendommer?") && !requested.startsWith("//")
    ? requested : "/eiendommer";
  return <main className="mx-auto max-w-2xl px-5 py-24 text-center">
    <h1 className="text-3xl font-bold">Takk for Boligmatch</h1>
    <p className="mt-5 text-lg">Vi har mottatt ønskene dine. Her kan du se boliger som passer kriteriene dine.</p>
    <p className="mt-8"><Link href={results} className="inline-block rounded-lg bg-teal-700 px-5 py-3 font-semibold text-white">Se boliger som passer</Link></p>
    <p className="mt-6"><Link href="/" className="underline">Til forsiden</Link></p>
  </main>;
}
