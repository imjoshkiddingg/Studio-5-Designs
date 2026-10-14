import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Open Graph image — the preview card shown when the site is shared.
// Rendered from code at 1200×630, in the site's editorial style:
// Playfair Display (serif) for the headline, Inter (sans) for UI text.

export const alt = "Studio 5 Designs, Inc. — Where Purpose Finds Form";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Fetch a .ttf for the given Google Fonts CSS URL (ImageResponse needs ttf/otf).
async function loadFont(cssUrl: string): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(cssUrl, {
      headers: { "User-Agent": "Mozilla/5.0" },
    }).then((r) => r.text());
    const ttf = css.match(/url\((https:\/\/[^)]+\.ttf)\)/)?.[1];
    if (!ttf) return null;
    return await fetch(ttf).then((r) => r.arrayBuffer());
  } catch {
    return null;
  }
}

export default async function OpengraphImage() {
  const [logoData, playfair, inter] = await Promise.all([
    readFile(join(process.cwd(), "public/studio-5-logo2.png")),
    loadFont(
      "https://fonts.googleapis.com/css2?family=Playfair+Display:ital@0;1&display=swap"
    ),
    loadFont("https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap"),
  ]);
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  const serif = playfair ? "Playfair Display" : "Georgia, serif";
  const sans = inter ? "Inter" : "Helvetica, Arial, sans-serif";

  const fonts = [
    ...(playfair
      ? [{ name: "Playfair Display", data: playfair, style: "normal" as const }]
      : []),
    ...(inter ? [{ name: "Inter", data: inter, style: "normal" as const }] : []),
  ];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#FBFBFA",
          padding: "72px",
          fontFamily: sans,
        }}
      >
        {/* Top: logo */}
        <div style={{ display: "flex" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={150} height={150} alt="" />
        </div>

        {/* Middle: display headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "#1A1A1A",
            fontFamily: serif,
            fontSize: "92px",
            lineHeight: 1.02,
            letterSpacing: "-2px",
          }}
        >
          <span>Designed to last.</span>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <span>Built to</span>
            <span style={{ width: "26px" }} />
            <span style={{ color: "#C8492E", fontStyle: "italic" }}>matter.</span>
          </div>
        </div>

        {/* Bottom: tagline */}
        <div
          style={{
            display: "flex",
            fontFamily: sans,
            fontSize: "26px",
            color: "rgba(26, 26, 26, 0.65)",
            maxWidth: "860px",
          }}
        >
          Where purpose finds form — publications, identities, and volumes built
          to be kept.
        </div>
      </div>
    ),
    { ...size, fonts: fonts.length ? fonts : undefined }
  );
}
