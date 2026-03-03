import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "JSolutions - AI Agents, Chatbots & Automations";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0d0d0d",
          fontFamily: "monospace",
        }}
      >
        {/* Background pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            opacity: 0.5,
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
            zIndex: 1,
          }}
        >
          {/* Logo */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span
              style={{
                fontSize: 72,
                fontWeight: 700,
                color: "#f5f5f5",
              }}
            >
              J
            </span>
            <span
              style={{
                width: 16,
                height: 16,
                borderRadius: "50%",
                backgroundColor: "#c4f542",
              }}
            />
          </div>

          {/* Tagline */}
          <p
            style={{
              fontSize: 24,
              color: "#c4f542",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginTop: 8,
            }}
          >
            AI & Automation
          </p>

          {/* Services */}
          <div
            style={{
              display: "flex",
              gap: 24,
              marginTop: 16,
            }}
          >
            <span style={{ fontSize: 28 }}>🤖</span>
            <span style={{ fontSize: 28 }}>💬</span>
            <span style={{ fontSize: 28 }}>⚡</span>
          </div>

          <p
            style={{
              fontSize: 20,
              color: "#8b8b8b",
              marginTop: 16,
            }}
          >
            j-solutions.nl
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
