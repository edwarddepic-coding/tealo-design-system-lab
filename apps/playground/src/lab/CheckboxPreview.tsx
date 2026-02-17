import { Fragment, useState } from "react";
import { Checkbox } from "@/components/Checkbox/checkbox";
import { Text } from "@/components/Text";

const states = ["unchecked", "checked", "indeterminate"] as const;
const errorStates = [false, true] as const;

export default function CheckboxPreview() {
  const [checkedStates, setCheckedStates] = useState<Record<string, boolean | "indeterminate">>({
    "unchecked-false": false,
    "checked-false": true,
    "indeterminate-false": "indeterminate",
    "unchecked-true": false,
    "checked-true": true,
    "indeterminate-true": "indeterminate",
  });

  return (
    <div style={{ padding: 24, maxWidth: 1200, margin: "0 auto" }}>
      <Text variant="h1" style={{ marginBottom: 24 }}>
        Checkbox preview
      </Text>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "120px repeat(2, 1fr)",
          gap: 24,
          alignItems: "start",
        }}
      >
        <Text variant="label">State</Text>
        <Text variant="label" style={{ textTransform: "uppercase" }}>
          No Error
        </Text>
        <Text variant="label" style={{ textTransform: "uppercase" }}>
          Error
        </Text>
        {states.map((state) => (
          <Fragment key={state}>
            <Text
              variant="bodyM"
              style={{
                textTransform: "capitalize",
                paddingTop: 8,
              }}
            >
              {state}
            </Text>
            {errorStates.map((hasError) => {
              const key = `${state}-${hasError}`;
              return (
                <div
                  key={key}
                  style={{
                    display: "flex",
                    gap: 12,
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <Checkbox
                      id={`checkbox-${key}`}
                      checked={checkedStates[key]}
                      error={hasError}
                      onCheckedChange={(value) => {
                        setCheckedStates((prev) => ({
                          ...prev,
                          [key]: value,
                        }));
                      }}
                    />
                    <label htmlFor={`checkbox-${key}`} style={{ cursor: "pointer" }}>
                      <Text variant="label">Label</Text>
                    </label>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <Checkbox
                      id={`checkbox-${key}-disabled`}
                      checked={checkedStates[key]}
                      error={hasError}
                      disabled
                    />
                    <label htmlFor={`checkbox-${key}-disabled`} style={{ cursor: "not-allowed", opacity: 0.5 }}>
                      <Text variant="label">Disabled</Text>
                    </label>
                  </div>
                </div>
              );
            })}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
