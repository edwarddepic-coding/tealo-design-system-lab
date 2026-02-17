import { Fragment } from "react";
import { Button } from "./Button";
import { Text } from "../Text";

const variants = ["primary", "secondary", "outline", "ghost"] as const;
const sizes = ["xs", "s", "m", "l"] as const;

export function ButtonPreview() {
  return (
    <div style={{ padding: 24, maxWidth: 1200, margin: "0 auto" }}>
      <Text variant="h1" style={{ marginBottom: 24 }}>
        Button preview
      </Text>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "120px repeat(4, 1fr)",
          gap: 24,
          alignItems: "start",
        }}
      >
        <Text variant="label">Variant</Text>
        {sizes.map((size) => (
          <Text
            key={size}
            variant="label"
            style={{ textTransform: "uppercase" }}
          >
            {size}
          </Text>
        ))}
        {variants.map((variant) => (
          <Fragment key={variant}>
            <Text
              variant="bodyM"
              style={{
                textTransform: "capitalize",
                paddingTop: 8,
              }}
            >
              {variant}
            </Text>
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
