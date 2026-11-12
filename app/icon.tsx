import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

const symbolBase64 =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAm0lEQVR42mNgGAWjYBQMRuCc8v4/FnyTCmb8J8WAH+ianZLfN9PFcgIGfaGL5fgMdEl5f5sulpNiMM0sx2UBXS1Ht2hALKdrnA96yweFA3A74l0VTS0kMiTe0tS3RDki9f1Rmgb1oCoF8av98IeuKZ2aNeEfcgxycNjPQo22AMW+INsMoKJfWKrfv6SGoFPy29BBUViNglEw6AEAc3bphl+wH3UAAAAASUVORK5CYII=";

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
          background: "#FFFFFF",
          borderRadius: 6,
        }}
      >
        {/* Official KreaitX Geometric Symbol */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={symbolBase64}
          alt="KreaitX"
          width={28}
          height={28}
          style={{ objectFit: "contain" }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
