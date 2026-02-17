import { useState } from "react";
import { Checkbox } from "@/components/Checkbox/checkbox";
import { Text } from "@/components/Text";

export default function CheckboxLab() {
  const [checked, setChecked] = useState(false);

  return (
    <div style={{ padding: 24, maxWidth: 600 }}>
      <Text variant="h2" style={{ marginBottom: 16 }}>
        Checkbox Lab
      </Text>

      <div
        style={{
          marginTop: 16,
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Checkbox
          id="focus-mode"
          checked={checked}
          onCheckedChange={(v) => setChecked(v === true)}
        />
        <label htmlFor="focus-mode" style={{ cursor: "pointer" }}>
          <Text variant="label">Enable Focus Mode</Text>
        </label>
      </div>

      <Text variant="bodyS" style={{ marginTop: 12, opacity: 0.7 }}>
        state: <code>{String(checked)}</code>
      </Text>
    </div>
  );
}
