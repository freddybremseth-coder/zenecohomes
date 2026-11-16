"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export function BuyerMatchThankYou() {
  const params = useSearchParams();
  const requested = params.get("results") || "";
  // Filtered property listing is internal; never follow arbitrary redirect URLs.
  const results = requested.startsWith("/eiendommer?") && !requested.startsWith("//") && !requested.includes("\\")
    ? requested : "/eiendommer";
  return (
    <main style={{ maxWidth: 740, margin: "100px auto", padding: "32px 24px", minHeight: "45vh" }}>
      <h1>Takk for Boligmatch</h1>
      <p>Vi har registrert boligønskene dine. Se boligene som passer kriteriene mens vi vurderer aktuelle alternativer.</p>
      <p><Link className="contact-button" href={results}>Se boliger som passer</Link></p>
      <p><Link href="/">Tilbake til forsiden</Link></p>
    </main>
  );
}
