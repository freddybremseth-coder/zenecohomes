import { ImageResponse } from "next/og";

export const alt = "Zen Eco Homes – nybygg og boliger i Spania";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "linear-gradient(135deg, #1e2416 0%, #2f3a22 55%, #55692f 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 34, letterSpacing: 6, fontWeight: 700 }}>
          <span>ZEN</span>
          <span style={{ color: "#c9a96a", margin: "0 6px" }}>ECO</span>
          <span>HOMES</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.05, maxWidth: 900 }}>
            Nybygg og boliger i Spania
          </div>
          <div style={{ fontSize: 32, marginTop: 20, color: "#dfe6cf", maxWidth: 860 }}>
            Norsk rådgivning på Costa Blanca, Costa Blanca Sør, Costa Cálida og innlandet
          </div>
        </div>
        <div style={{ fontSize: 26, color: "#c9a96a" }}>zenecohomes.com</div>
      </div>
    ),
    size,
  );
}
