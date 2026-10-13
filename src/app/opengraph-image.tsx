import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name}: same-day electrician in Kuala Lumpur and Selangor`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The brand font, so link previews on WhatsApp and Facebook match the site.
const fontDir = join(process.cwd(), "assets/fonts");
const [extraBold, medium] = await Promise.all([
  readFile(join(fontDir, "PlusJakartaSans-ExtraBold.ttf")),
  readFile(join(fontDir, "PlusJakartaSans-Medium.ttf")),
]);

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#0b1b33",
        padding: "64px 72px",
        color: "white",
        fontFamily: "Plus Jakarta Sans",
        fontWeight: 500,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <svg width="84" height="84" viewBox="0 0 64 64">
          <path
            d="M29.4 4.9a4 4 0 0 1 5.2 0l24.6 20.6a4 4 0 0 1 1.4 3.1V56a4 4 0 0 1-4 4H7.4a4 4 0 0 1-4-4V28.6a4 4 0 0 1 1.4-3.1Z"
            fill="#1d5bd6"
          />
          <path
            d="M35.6 20.5 22.3 39.6h9.1l-3 14.9 14.3-20.4h-9.3l2.2-13.6Z"
            fill="#f5b700"
            transform="translate(32.5 39) scale(1.18) translate(-32.5 -37.5)"
          />
        </svg>
        <div style={{ display: "flex", fontSize: 46, fontWeight: 800, gap: 12, letterSpacing: -0.5 }}>
          My Power Care<span style={{ color: "#8fb3ff" }}>KL</span>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 72, fontWeight: 800, lineHeight: 1.05, maxWidth: 980, letterSpacing: -1.5 }}>
          Electrician in Kuala Lumpur & Selangor
        </div>
        <div style={{ marginTop: 24, fontSize: 30, color: "rgba(255,255,255,0.75)" }}>
          Tripping · Wiring · DB box · Lighting · Water heaters
        </div>
      </div>
      <div style={{ display: "flex", gap: 16, fontSize: 28 }}>
        <div
          style={{
            display: "flex",
            background: "#f5b700",
            color: "#0b1b33",
            padding: "10px 20px",
            borderRadius: 8,
            fontWeight: 700,
          }}
        >
          Same-day service
        </div>
        <div style={{ display: "flex", background: "rgba(255,255,255,0.12)", padding: "10px 20px", borderRadius: 8 }}>
          {site.warrantyMonths}-month warranty
        </div>
        <div style={{ display: "flex", background: "rgba(255,255,255,0.12)", padding: "10px 20px", borderRadius: 8 }}>
          {site.domain}
        </div>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "Plus Jakarta Sans", data: medium, weight: 500, style: "normal" },
        { name: "Plus Jakarta Sans", data: extraBold, weight: 800, style: "normal" },
      ],
    },
  );
}
