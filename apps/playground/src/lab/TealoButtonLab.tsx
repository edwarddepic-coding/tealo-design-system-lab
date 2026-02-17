import { Fragment } from "react";
import { TealoButton } from "@/components/TealoButton/TealoButton";
import { Text } from "@/components/Text";

const buttonVariantNames = ["primary", "secondary", "outline", "ghost", "error"] as const;
const buttonSizes = ["xs", "s", "m", "l"] as const;

export default function TealoButtonLab() {
  return (
    <div style={{ padding: 24, maxWidth: 1200, margin: "0 auto" }}>
      <Text variant="h1" style={{ marginBottom: 24 }}>
        Tealo Button preview
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
        {buttonSizes.map((size) => (
          <Text
            key={size}
            variant="label"
            style={{ textTransform: "uppercase" }}
          >
            {size}
          </Text>
        ))}
        {buttonVariantNames.map((variant) => (
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
            {buttonSizes.map((size) => (
              <div
                key={`${variant}-${size}`}
                style={{
                  display: "flex",
                  gap: 12,
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <TealoButton variant={variant} size={size}>
                  Default
                </TealoButton>
                <TealoButton variant={variant} size={size} disabled>
                  Disabled
                </TealoButton>
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
