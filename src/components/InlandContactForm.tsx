"use client";

import { useEffect, useState } from "react";
import { ContactForm } from "@/components/ContactForm";

const VALID_INTENTS = new Set(["coast", "mountain", "city", "wine", "deep"]);

export function InlandContactForm({ source }: { source: string }) {
  const [requestType, setRequestType] = useState("inland-town");

  useEffect(() => {
    const intent = new URLSearchParams(window.location.search).get("intent");
    if (intent && VALID_INTENTS.has(intent)) {
      setRequestType(`inland-profile-${intent}`);
    }
  }, []);

  return <ContactForm source={source} requestType={requestType} />;
}
