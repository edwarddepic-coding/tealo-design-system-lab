import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import { tokens } from "../src/tokens/tokens";

// ESM-safe __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ORDER = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const;
type Shade = (typeof ORDER)[number];
type Palette = "teal" | "neutral" | "error";

function camelToKebab(s: string): string {
  return s.replace(/([A-Z])/g, (m) => `-${m.toLowerCase()}`);
}

function assertNonEmptyString(v: unknown, label: string): asserts v is string {
  if (typeof v !== "string" || v.trim().length === 0) {
    throw new Error(`Missing/invalid ${label}: ${String(v)}`);
  }
}

function assertPxString(v: unknown, label: string): asserts v is string {
  assertNonEmptyString(v, label);
  if (!/^-?\d+(\.\d+)?px$/.test(v)) {
    throw new Error(
      `Expected ${label} to be a px string (e.g. "16px"), got: ${v}`,
    );
  }
}

function assertNumber(v: unknown, label: string): asserts v is number {
  if (typeof v !== "number" || Number.isNaN(v)) {
    throw new Error(`Missing/invalid ${label}: ${String(v)}`);
  }
}

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

function getRadius(key: 4 | 8 | 12 | 16 | "pill"): string {
  const v = tokens?.radius?.[key as keyof typeof tokens.radius];
  assertPxString(v, `tokens.radius.${String(key)}`);
  return v;
}

const radiusLines = [
  `  --tealo-radius-4: ${getRadius(4)};`,
  `  --tealo-radius-8: ${getRadius(8)};`,
  `  --tealo-radius-12: ${getRadius(12)};`,
  `  --tealo-radius-16: ${getRadius(16)};`,
  `  --tealo-radius-pill: ${getRadius("pill")};`,
];

function getShadow(key: keyof typeof tokens.shadow): string {
  const v = tokens?.shadow?.[key];
  assertNonEmptyString(v, `tokens.shadow.${String(key)}`);
  return v;
}

const shadowLines = (
  Object.keys(tokens.shadow) as (keyof typeof tokens.shadow)[]
).map(
  (key) => `  --tealo-shadow-${camelToKebab(String(key))}: ${getShadow(key)};`,
);

function getFontFamily(which: "heading" | "body"): string {
  const v = tokens?.typography?.fontFamily?.[which];
  assertNonEmptyString(v, `tokens.typography.fontFamily.${which}`);
  return v;
}

const fontFamilyLines = [
  `  --tealo-font-heading: ${getFontFamily("heading")};`,
  `  --tealo-font-body: ${getFontFamily("body")};`,
];

// Stable typography order
const TEXT_ORDER = [
  "h1",
  "h2",
  "h3",
  "h4",
  "bodyM",
  "bodyS",
  "bodyXs",
  "button",
  "label",
  "caption",
] as const;

type TextKey = (typeof TEXT_ORDER)[number];

function getTextStyle(key: TextKey) {
  const t =
    tokens?.typography?.text?.[key as keyof typeof tokens.typography.text];
  if (!t) throw new Error(`Missing tokens.typography.text.${String(key)}`);

  assertNonEmptyString(
    t.fontFamily,
    `tokens.typography.text.${String(key)}.fontFamily`,
  );
  assertPxString(t.fontSize, `tokens.typography.text.${String(key)}.fontSize`);
  assertPxString(
    t.lineHeight,
    `tokens.typography.text.${String(key)}.lineHeight`,
  );
  assertNumber(
    t.fontWeight,
    `tokens.typography.text.${String(key)}.fontWeight`,
  );
  assertPxString(
    t.letterSpacing,
    `tokens.typography.text.${String(key)}.letterSpacing`,
  );

  return t;
}

function textStyleLines(key: TextKey): string[] {
  const t = getTextStyle(key);
  const kebab = camelToKebab(String(key)); // bodyM -> body-m
  return [
    `  --tealo-text-${kebab}-font-family: ${t.fontFamily};`,
    `  --tealo-text-${kebab}-font-size: ${t.fontSize};`,
    `  --tealo-text-${kebab}-line-height: ${t.lineHeight};`,
    `  --tealo-text-${kebab}-font-weight: ${t.fontWeight};`,
    `  --tealo-text-${kebab}-letter-spacing: ${t.letterSpacing};`,
  ];
}

const typographyLines = TEXT_ORDER.flatMap((k) => textStyleLines(k));

const lines = [
  "/* AUTO-GENERATED. DO NOT EDIT. */",
  ":root {",
  ...linesForPalette("teal"),
  ...linesForPalette("neutral"),
  ...linesForPalette("error"),
  ...radiusLines,
  ...shadowLines,
  ...fontFamilyLines,
  ...typographyLines,
  "}",
];

const outPath = path.join(__dirname, "..", "dist", "tokens.css");
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, lines.join("\n") + "\n", "utf8");

console.log(`Wrote ${outPath}`);
