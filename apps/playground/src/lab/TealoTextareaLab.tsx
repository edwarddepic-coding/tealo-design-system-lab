import { Fragment, useState } from "react";
import { TealoTextarea } from "@/components/TealoTextarea/TealoTextarea";
import { TealoLabel } from "@/components/TealoLabel/TealoLabel";
import { Text } from "@/components/Text";

const textareaVariants = ["default", "unstyled"] as const;
const textareaStates = [
  "empty",
  "placeholder",
  "value",
  "focus",
  "error",
  "error-focus",
  "disabled",
] as const;

export default function TealoTextareaLab() {
  const [textareaValues, setTextareaValues] = useState<Record<string, string>>({
    "default-empty": "",
    "default-placeholder": "",
    "default-value": "Value",
    "default-focus": "",
    "default-error": "Value",
    "default-error-focus": "Value",
    "unstyled-empty": "",
    "unstyled-placeholder": "",
    "unstyled-value": "Value",
    "unstyled-focus": "",
    "unstyled-error": "Value",
    "unstyled-error-focus": "Value",
  });

  return (
    <div style={{ padding: 24, maxWidth: 1200, margin: "0 auto" }}>
      <Text variant="h1" style={{ marginBottom: 24 }}>
        Tealo Textarea preview
      </Text>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "140px repeat(2, 1fr)",
          gap: 24,
          alignItems: "start",
        }}
      >
        <Text variant="label">State</Text>
        <Text variant="label" style={{ textTransform: "uppercase" }}>
          Regular
        </Text>
        <Text variant="label" style={{ textTransform: "uppercase" }}>
          Less Stylized
        </Text>
        {textareaStates.map((state) => (
          <Fragment key={state}>
            <Text
              variant="bodyM"
              style={{
                textTransform: "capitalize",
                paddingTop: 8,
              }}
            >
              {state.replace("-", " ")}
            </Text>
            {textareaVariants.map((variant) => {
              const isUnstyled = variant === "unstyled";
              const isError = state.includes("error");
              const isDisabled = state === "disabled";
              const isFocus = state === "focus" || state === "error-focus";
              const hasPlaceholder = state === "placeholder";
              const isEmpty = state === "empty";
              const textareaKey = `${variant}-${state}`;
              const value = isDisabled
                ? "Value"
                : textareaValues[textareaKey] || "";

              return (
                <div
                  key={textareaKey}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                    alignItems: "flex-start",
                    width: "100%",
                  }}
                >
                  {!isUnstyled && (
                    <TealoLabel htmlFor={`textarea-${textareaKey}`}>Label</TealoLabel>
                  )}
                  <TealoTextarea
                    id={`textarea-${textareaKey}`}
                    variant={variant}
                    error={isError}
                    disabled={isDisabled}
                    placeholder={
                      hasPlaceholder
                        ? "Type your message here."
                        : isEmpty
                          ? ""
                          : "Type here..."
                    }
                    value={value}
                    onChange={(e) => {
                      if (!isDisabled) {
                        setTextareaValues((prev) => ({
                          ...prev,
                          [textareaKey]: e.target.value,
                        }));
                      }
                    }}
                    autoFocus={isFocus}
                    rows={3}
                    style={{
                      width: "100%",
                      maxWidth: isUnstyled ? "auto" : "300px",
                      minHeight: isUnstyled ? "auto" : "80px",
                    }}
                  />
                </div>
              );
            })}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
