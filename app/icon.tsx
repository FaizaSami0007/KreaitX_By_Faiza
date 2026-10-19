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
          background: "#34312F",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#FFFFFF",
          fontWeight: 800,
          borderRadius: 8,
          border: "1px solid rgba(255, 90, 31, 0.4)",
        }}
      >
        <span style={{ color: "#FFFFFF" }}>K</span>
        <span style={{ color: "#FF5A1F" }}>X</span>
      </div>
    ),
    {
      ...size,
    }
  );
}
