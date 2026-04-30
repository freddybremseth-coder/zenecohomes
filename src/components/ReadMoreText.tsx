"use client";

import { useState } from "react";

export function ReadMoreText({ text, initialLength = 520 }: { text: string; initialLength?: number }) {
  const [expanded, setExpanded] = useState(false);
  const looksSourceTruncated = /\.\.\.$/.test(text.trim());
  const shouldTruncate = text.length > initialLength;
  const showAction = shouldTruncate || looksSourceTruncated;
  const visibleText = shouldTruncate && !expanded ? `${text.slice(0, initialLength).trim()}...` : text;

  return (
    <div className="read-more-text">
      <p>{visibleText}</p>
      {showAction && (
        <button type="button" onClick={() => setExpanded(!expanded)}>
          {shouldTruncate ? (expanded ? "Vis mindre" : "Les mer") : "Be om komplett prospekt"}
        </button>
      )}
    </div>
  );
}
