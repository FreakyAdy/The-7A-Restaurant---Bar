import { ImageResponse } from "next/og";

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
          background: "#0E241F",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#E1BB70",
          fontFamily: "serif",
          fontWeight: 700,
          border: "1px solid #C6A15B",
          borderRadius: 6,
        }}
      >
        7A
      </div>
    ),
    {
      ...size,
    }
  );
}
