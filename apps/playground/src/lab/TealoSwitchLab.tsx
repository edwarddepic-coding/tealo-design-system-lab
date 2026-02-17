import { Fragment, useState } from "react";
import { TealoSwitch } from "@/components/TealoSwitch/TealoSwitch";
import { TealoLabel } from "@/components/TealoLabel/TealoLabel";
import { Text } from "@/components/Text";

const switchStates = ["off", "on"] as const;
const errorStates = [false, true] as const;

export default function TealoSwitchLab() {
  const [switchValues, setSwitchValues] = useState<Record<string, boolean>>({
    "off-false": false,
    "on-false": true,
    "off-true": false,
    "on-true": true,
  });

  return (
    <div style={{ padding: 24, maxWidth: 1200, margin: "0 auto" }}>
      <Text variant="h1" style={{ marginBottom: 24 }}>
        Tealo Switch preview
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
        {switchStates.map((state) => (
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
              const checked = state === "on";
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
                    <TealoSwitch
                      id={`switch-${key}`}
                      checked={switchValues[key] ?? checked}
                      error={hasError}
                      onCheckedChange={(value) => {
                        setSwitchValues((prev) => ({ ...prev, [key]: value }));
                      }}
                    />
                    <TealoLabel htmlFor={`switch-${key}`}>Label</TealoLabel>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <TealoSwitch
                      id={`switch-${key}-disabled`}
                      checked={switchValues[key] ?? checked}
                      error={hasError}
                      disabled
                    />
                    <TealoLabel
                      htmlFor={`switch-${key}-disabled`}
                      style={{ cursor: "not-allowed", opacity: 0.5 }}
                    >
                      Disabled
                    </TealoLabel>
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
