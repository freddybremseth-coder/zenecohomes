/**
 * RealtyFlow area descriptions may contain literal "\n\n" or "\r\n"
 * characters (rather than actual line breaks). Normalize at the display
 * boundary; leave the original editorial source untouched.
 *
 * Keep prose readable even when a source uses single newlines as soft wraps.
 * Do not treat arbitrary backslash sequences as formatting commands.
 *
 * @param {string | null | undefined} value
 * @returns {string[]}
 */
export function splitAreaParagraphs(value) {
  if (typeof value !== "string" || !value.trim()) return [];

  const normalized = value
    .replace(/\r\n?/g, "\n")
    .replace(/\\+r\\+n|\\+n|\\+r/g, "\n")
    .replace(/\u2028|\u2029/g, "\n")
    .trim();

  return normalized
    .split(/\n[\t ]*\n+/)
    .map((paragraph) => paragraph.replace(/\s*\n\s*/g, " ").replace(/[ \t]+/g, " ").trim())
    .filter(Boolean);
}

/**
 * For summaries, map labels and hero blurbs that must be a single line.
 * @param {string | null | undefined} value
 * @returns {string}
 */
export function oneLineAreaText(value) {
  return splitAreaParagraphs(value).join(" ");
}
