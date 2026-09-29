"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const ZenecoChatbot = dynamic(
  () => import("@/components/ZenecoChatbot").then((module) => module.ZenecoChatbot),
  { ssr: false },
);

/**
 * Keep the advisor available on every public page without putting the full
 * chat bundle on the critical rendering path. It mounts shortly after the
 * primary content has had a chance to paint and become interactive.
 */
export function LazyZenecoChatbot() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setReady(true), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  return ready ? <ZenecoChatbot /> : null;
}
