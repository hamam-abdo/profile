import { ImageResponse } from "next/og";
import { colors } from "@/constants/tokens";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Hamam Sadek | Front-End Developer";

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
          backgroundColor: colors.canvas,
          borderTop: `16px solid ${colors.fg}`,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            color: colors.muted,
            fontSize: 30,
            fontWeight: 600,
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: colors.fg,
            }}
          />
          Portfolio
        </div>

        <div
          style={{
            marginTop: 24,
            fontSize: 96,
            fontWeight: 800,
            color: colors.fg,
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
            color: colors.muted,
          }}
        >
          Front-End Developer
        </div>

        <div
          style={{
            marginTop: 28,
            fontSize: 28,
            color: colors.muted,
          }}
        >
          Next.js · React · TypeScript
        </div>
      </div>
    ),
    { ...size }
  );
}
