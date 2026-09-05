import { ImageResponse } from "next/og";
import {
  getProperty,
  getPrimaryImage,
  getPropertyTown,
  getPropertyArea,
  getLocalizedPropertyType,
  formatPriceForLocale,
} from "@/lib/realtyflow";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const property = await getProperty(decodeURIComponent(id));
  const image = property ? getPrimaryImage(property) : "";
  const town = property ? getPropertyTown(property) || property.location || "Spania" : "Spania";
  const type = property ? getLocalizedPropertyType(property, "no") : "Bolig";
  const price = property ? formatPriceForLocale(property.price, "no") : "";
  const area = property ? getPropertyArea(property) : null;
  const facts = [
    property?.bedrooms ? `${property.bedrooms} soverom` : "",
    property?.bathrooms ? `${property.bathrooms} bad` : "",
    area ? `${area} m²` : "",
  ].filter(Boolean);

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", fontFamily: "sans-serif" }}>
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={image} alt="" width={1200} height={630} style={{ position: "absolute", width: 1200, height: 630, objectFit: "cover" }} />
        ) : (
          <div style={{ position: "absolute", width: 1200, height: 630, background: "#2f3a22" }} />
        )}
        <div
          style={{
            position: "absolute",
            width: 1200,
            height: 630,
            background: "linear-gradient(180deg, rgba(23,30,16,0.12) 0%, rgba(23,30,16,0.32) 45%, rgba(23,30,16,0.9) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            top: 40,
            left: 56,
            right: 56,
            color: "#ffffff",
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: 4,
          }}
        >
          <div style={{ display: "flex" }}>
            <span>ZEN</span>
            <span style={{ color: "#c9a96a", margin: "0 5px" }}>ECO</span>
            <span>HOMES</span>
          </div>
          <div style={{ fontSize: 24, letterSpacing: 0, color: "#dfe6cf" }}>{town}</div>
        </div>
        <div style={{ position: "absolute", left: 56, right: 56, bottom: 48, display: "flex", flexDirection: "column", color: "#ffffff" }}>
          <div style={{ fontSize: 40, fontWeight: 700 }}>{`${type} i ${town}`}</div>
          <div style={{ display: "flex", alignItems: "baseline", marginTop: 10 }}>
            <span style={{ fontSize: 60, fontWeight: 800 }}>{price}</span>
          </div>
          {facts.length > 0 && <div style={{ fontSize: 30, color: "#e7edda", marginTop: 6 }}>{facts.join("  ·  ")}</div>}
        </div>
      </div>
    ),
    size,
  );
}
