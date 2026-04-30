"use client";

import { useState } from "react";

export function ReadMoreText({ text, initialLength = 520 }: { text: string; initialLength?: number }) {
  const [expanded, setExpanded] = useState(false);
  const shouldTruncate = text.length > initialLength;
  const visibleText = shouldTruncate && !expanded ? `${text.slice(0, initialLength).trim()}...` : text;

  return (
    <div className="read-more-text">
      <p>{visibleText}</p>
      {shouldTruncate && (
        <button type="button" onClick={() => setExpanded(!expanded)}>
          {expanded ? "Vis mindre" : "Les mer"}
        </button>
      )}
    </div>
  );
}
