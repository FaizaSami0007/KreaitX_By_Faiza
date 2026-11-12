import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 18,
          background: "#10172A",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#FFFFFF",
          fontWeight: 800,
          borderRadius: 8,
          border: "1px solid rgba(48, 71, 213, 0.4)",
        }}
      >
        <span style={{ color: "#FFFFFF" }}>K</span>
        <span style={{ color: "#3047D5" }}>X</span>
      </div>
    ),
    {
      ...size,
    }
  );
}
