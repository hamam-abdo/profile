import { ImageResponse } from "next/og";
import { colors } from "@/constants/tokens";

// Home-screen icon (iOS): same mark as the favicon, square — iOS rounds it.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
          color: colors.canvas,
          fontSize: 88,
          fontWeight: 800,
          letterSpacing: -4,
          fontFamily: "sans-serif",
        }}
      >
        HS
      </div>
    ),
    size
  );
}
