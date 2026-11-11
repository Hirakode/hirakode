import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Hirakode — L’intelligence prend forme";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default async function SocialImage() {
  const directory = join(process.cwd(), "node_modules/@fontsource/instrument-serif/files");
  const [regular, italic] = await Promise.all([
    readFile(join(directory, "instrument-serif-latin-400-normal.woff")),
    readFile(join(directory, "instrument-serif-latin-400-italic.woff")),
  ]);
  return new ImageResponse(
    <div style={{ display: "flex", width: "100%", height: "100%", background: "#111013", color: "#F5F0EE", padding: "55px 65px", flexDirection: "column", justifyContent: "space-between" }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 25 }}><span>Hirakode</span><span style={{ fontSize: 16, color: "#C0C4CA" }}>Solutions & transformation IA</span></div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}><div style={{ display: "flex", flexDirection: "column", fontFamily: "Instrument", fontSize: 112, lineHeight: 1 }}><span>L’intelligence.</span><div style={{ display: "flex", gap: 20 }}><span>Prend</span><span style={{ fontStyle: "italic", color: "#D2AE62" }}>forme.</span></div></div><svg width="265" height="265" viewBox="0 0 80 80"><path d="M34 13 10 27v26l24 14V53l-13-8V35l13-8Z" fill="#C0C4CA"/><path d="m46 13 24 14v26L46 67V53l13-8V35l-13-8Z" fill="#D2AE62"/><path d="M31 36h18v8H31z" fill="#7D1A33"/></svg></div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 16, color: "#C0C4CA", borderTop: "1px solid #6A6C6F", paddingTop: 20 }}><span>Studio indépendant · France</span><span>hirakode.com</span></div>
    </div>,
    { ...size, fonts: [{ name: "Instrument", data: regular, weight: 400, style: "normal" }, { name: "Instrument", data: italic, weight: 400, style: "italic" }] },
  );
}
