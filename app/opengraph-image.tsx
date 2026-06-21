import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const runtime = "edge";
export const alt = `${site.name} · ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0A0A0B",
          padding: "72px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          color: "#F5F2EB",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "monospace",
            fontSize: 18,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#8A8A93",
          }}
        >
          <span>Sachin Kurup · CS '26</span>
          <span>Vol. 01 · 26.06</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 144,
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              fontWeight: 400,
            }}
          >
            Sachin Kurup
          </div>
          <div
            style={{
              marginTop: 36,
              fontSize: 34,
              fontStyle: "italic",
              lineHeight: 1.25,
              color: "#F5F2EB",
              maxWidth: 920,
            }}
          >
            {site.tagline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: "monospace",
            fontSize: 16,
            color: "#8A8A93",
            borderTop: "1px solid #1F1F23",
            paddingTop: 24,
          }}
        >
          <span>Amrita Vishwa Vidyapeetham · B.Tech. CSE</span>
          <span style={{ color: "#E5654F" }}>ACL 2026 · Production multi-agent systems</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
