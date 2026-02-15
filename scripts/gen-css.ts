import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import { tokens } from "../src/tokens/tokens";

// ESM-safe __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ORDER = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const;
type Shade = (typeof ORDER)[number];
type Palette = "teal" | "neutral";

function getColor(palette: Palette, shade: Shade): string {
  const v = tokens?.color?.[palette]?.[shade];
  if (typeof v !== "string" || !v.startsWith("#")) {
    throw new Error(
      `Missing/invalid token: tokens.color.${palette}[${shade}] = ${String(v)}`,
    );
  }
  return v;
}

function linesForPalette(palette: Palette): string[] {
  return ORDER.map(
    (n) => `  --tealo-${palette}-${n}: ${getColor(palette, n)};`,
  );
}

const lines = [
  "/* AUTO-GENERATED. DO NOT EDIT. */",
  ":root {",
  ...linesForPalette("teal"),
  ...linesForPalette("neutral"),
  "}",
];

const outPath = path.join(__dirname, "..", "dist", "tokens.css");
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, lines.join("\n") + "\n", "utf8");

console.log(`Wrote ${outPath}`);
