import { ImageResponse } from "next/og";
import { colors } from "@/constants/tokens";

// Site favicon: the initials on the mono identity (canvas on fg 16.24:1).
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: colors.fg,
          borderRadius: 14,
          color: colors.canvas,
          fontSize: 34,
          fontWeight: 800,
          letterSpacing: -2,
          fontFamily: "sans-serif",
        }}
      >
        HS
      </div>
    ),
    size
  );
}
