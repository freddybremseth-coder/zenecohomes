// Fixed CTA label, not a landing page or acquisition source. Never pass arbitrary URLs or user input.
export function bookingGuideOrigin(search: string): "buying_guide" | undefined {
  const values = new URLSearchParams(search).getAll("guide_origin");
  return values.length === 1 && values[0] === "buying_guide" ? "buying_guide" : undefined;
}
