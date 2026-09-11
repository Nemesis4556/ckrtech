import { ImageResponse } from "next/og";

export const alt = "CKR TECH — Yazılım Mühendisliği ve Dijital Ürün Stüdyosu";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#f8f9fa",
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #e1e3e4 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              background: "#0037b0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: 18,
              fontWeight: 700,
            }}
          >
            CK
          </div>
          <div style={{ fontSize: 24, fontWeight: 700, color: "#191c1d" }}>
            CKR TECH
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            maxWidth: 900,
          }}
        >
          <div
            style={{
              fontSize: 58,
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: -1.5,
              color: "#191c1d",
            }}
          >
            Dijital fikirleri, çalışan ürünlere dönüştürüyoruz.
          </div>
          <div style={{ fontSize: 24, color: "#434655" }}>
            Web deneyimleri, özel yazılımlar ve dijital ürünler.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
