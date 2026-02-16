import { Text } from "./Text";

const variants = [
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

export function TextPreview() {
  return (
    <div style={{ padding: 24, maxWidth: 720, margin: "0 auto" }}>
      <Text variant="h1" style={{ marginBottom: 24 }}>
        Text preview
      </Text>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        {variants.map((variant) => (
          <div
            key={variant}
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: 16,
              borderBottom: "1px solid #e5e7eb",
              paddingBottom: 16,
            }}
          >
            <span
              style={{
                fontFamily: "var(--tealo-font-body), system-ui, sans-serif",
                fontSize: 12,
                color: "#6b7280",
                minWidth: 72,
                textTransform: "capitalize",
              }}
            >
              {variant}
            </span>
            <Text variant={variant}>
              The quick brown fox jumps over the lazy dog. 0123456789
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
}
