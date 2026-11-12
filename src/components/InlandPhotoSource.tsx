/**
 * A link back to the exact Wikimedia file for inland-town photos.
 * Photographer and license can be inspected on the original file page;
 * do not invent either when catalog metadata has not been audited yet.
 */
export function InlandPhotoSource({ name, photo }: { name: string; photo: string }) {
  let sourceUrl: string | null = null;
  try {
    const parsed = new URL(photo);
    if (parsed.hostname === "upload.wikimedia.org" && parsed.pathname.includes("/wikipedia/commons/")) {
      const last = decodeURIComponent(parsed.pathname.split("/").pop() || "");
      const file = last.replace(/^\d+px-/, "");
      if (file) sourceUrl = `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file)}`;
    }
  } catch {
    // An unparseable URL must not be exposed as a claimed file source.
  }
  if (!sourceUrl) return null;
  return (
    <small style={{ display: "block", color: "#64748b", fontSize: "0.72rem", marginTop: "0.35rem" }}>
      Foto fra {name} · <a href={sourceUrl} target="_blank" rel="noopener noreferrer">Fotokilde, opphav og lisens (Wikimedia Commons)</a>
      {" · Utsnitt kan forekomme"}
    </small>
  );
}
