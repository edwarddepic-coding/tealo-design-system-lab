import { Fragment } from "react";
import { Button } from "./Button";

const variants = ["primary", "secondary", "outline", "ghost"] as const;
const sizes = ["xs", "s", "m", "l"] as const;

export function ButtonPreview() {
  return (
    <div style={{ padding: 24, maxWidth: 1200, margin: "0 auto" }}>
      <h1 style={{ marginBottom: 24, fontSize: 24, fontWeight: 600 }}>
        Button preview
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "120px repeat(4, 1fr)",
          gap: 24,
          alignItems: "start",
        }}
      >
        <div style={{ fontWeight: 600 }}>Variant</div>
        {sizes.map((size) => (
          <div key={size} style={{ fontWeight: 600, textTransform: "uppercase" }}>
            {size}
          </div>
        ))}
        {variants.map((variant) => (
          <Fragment key={variant}>
            <div style={{ fontWeight: 500, textTransform: "capitalize", paddingTop: 8 }}>
              {variant}
            </div>
            {sizes.map((size) => (
              <div
                key={`${variant}-${size}`}
                style={{
                  display: "flex",
                  gap: 12,
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <Button variant={variant} size={size}>
                  Default
                </Button>
                <Button variant={variant} size={size} disabled>
                  Disabled
                </Button>
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
