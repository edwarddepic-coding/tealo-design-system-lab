import { Fragment, useState } from "react";
import { TealoInput } from "@/components/TealoInput/TealoInput";
import { TealoLabel } from "@/components/TealoLabel/TealoLabel";
import { Text } from "@/components/Text";

const inputVariants = ["default", "unstyled"] as const;
const inputStates = [
  "empty",
  "placeholder",
  "value",
  "focus",
  "error",
  "error-focus",
  "disabled",
] as const;

export default function TealoInputLab() {
  const [inputValues, setInputValues] = useState<Record<string, string>>({
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
        Tealo Input preview
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
          Unstyled
        </Text>
        {inputStates.map((state) => (
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
            {inputVariants.map((variant) => {
              const isUnstyled = variant === "unstyled";
              const isError = state.includes("error");
              const isDisabled = state === "disabled";
              const isFocus = state === "focus" || state === "error-focus";
              const hasPlaceholder = state === "placeholder";
              const isEmpty = state === "empty";
              const inputKey = `${variant}-${state}`;
              const value = isDisabled ? "Value" : (inputValues[inputKey] || "");

              return (
                <div
                  key={inputKey}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                    alignItems: "flex-start",
                    width: "100%",
                  }}
                >
                  {!isUnstyled && (
                    <TealoLabel htmlFor={`input-${inputKey}`}>
                      Label
                    </TealoLabel>
                  )}
                  <TealoInput
                    id={`input-${inputKey}`}
                    variant={variant}
                    error={isError}
                    disabled={isDisabled}
                    placeholder={hasPlaceholder ? "Value" : isEmpty ? "" : "Type here..."}
                    value={value}
                    onChange={(e) => {
                      if (!isDisabled) {
                        setInputValues((prev) => ({
                          ...prev,
                          [inputKey]: e.target.value,
                        }));
                      }
                    }}
                    autoFocus={isFocus}
                    style={{
                      width: "100%",
                      maxWidth: isUnstyled ? "auto" : "300px",
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
