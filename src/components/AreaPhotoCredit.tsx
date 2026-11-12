import { getEditorialAreaPhoto } from "@/lib/areaVisuals";

/** Visible creator / license / file-source attribution for curated area photos. */
export function AreaPhotoCredit({ areaName }: { areaName: string }) {
  const photo = getEditorialAreaPhoto(areaName);
  if (!photo) return null;

  return (
    <small style={{ display: "block", marginTop: "0.35rem", color: "#64748b", fontSize: "0.72rem" }}>
      Foto: <a href={photo.sourceUrl} target="_blank" rel="noopener noreferrer">{photo.credit.author} / Wikimedia Commons</a>
      {" · "}
      {photo.credit.licenseUrl ? (
        <a href={photo.credit.licenseUrl} target="_blank" rel="noopener noreferrer">{photo.credit.license}</a>
      ) : (
        photo.credit.license
      )}
      {" · Utsnitt kan forekomme"}
    </small>
  );
}
