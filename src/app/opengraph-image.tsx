import { ImageResponse } from "next/og";
import { SITE_URL } from "@/lib/site";

export const alt = "Atik Hasan Anik — Full-Stack Web Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpengraphImage() {
  const host = new URL(SITE_URL).host.toUpperCase();

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          backgroundColor: "#ffffff",
          color: "#0a0a0a",
          padding: "56px",
          border: "14px solid #0a0a0a",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "3px solid #0a0a0a",
            paddingBottom: "18px",
            fontSize: 22,
            letterSpacing: "3px",
          }}
        >
          <span>PORTFOLIO // 2026</span>
          <span>DHAKA // BANGLADESH</span>
        </div>

        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            paddingTop: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 118,
              fontWeight: 900,
              lineHeight: 0.82,
              letterSpacing: "-6px",
            }}
          >
            <span>ATIK HASAN</span>
            <span>ANIK</span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginTop: "32px",
              fontSize: 28,
              letterSpacing: "4px",
            }}
          >
            <span
              style={{
                display: "flex",
                width: "48px",
                height: "10px",
                backgroundColor: "#0a0a0a",
              }}
            />
            <span>FULL-STACK WEB DEVELOPER</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            borderTop: "3px solid #0a0a0a",
            paddingTop: "18px",
            fontSize: 20,
            letterSpacing: "2.5px",
          }}
        >
          <span>NEXT.JS / REACT / TYPESCRIPT</span>
          <span>{host}</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
