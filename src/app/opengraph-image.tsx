import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Hamam Sadek — Front-End Developer";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0a0a0f",
          backgroundImage:
            "radial-gradient(900px circle at 20% 0%, rgba(14,165,234,0.30), transparent 45%), radial-gradient(900px circle at 90% 100%, rgba(11,209,209,0.25), transparent 45%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            color: "#0bd1d1",
            fontSize: 30,
            fontWeight: 600,
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#0ea5ea",
            }}
          />
          Portfolio
        </div>

        <div
          style={{
            marginTop: 24,
            fontSize: 96,
            fontWeight: 800,
            color: "white",
            lineHeight: 1.05,
          }}
        >
          Hamam Sadek
        </div>

        <div
          style={{
            marginTop: 20,
            fontSize: 44,
            fontWeight: 700,
            background: "linear-gradient(90deg, #0ea5ea, #0bd1d1)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Front-End Developer
        </div>

        <div
          style={{
            marginTop: 28,
            fontSize: 28,
            color: "#9ca3af",
          }}
        >
          React · Next.js · Tailwind CSS
        </div>
      </div>
    ),
    { ...size }
  );
}
