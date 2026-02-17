import { TealoLabel } from "@/components/TealoLabel/TealoLabel";
import { TealoInput } from "@/components/TealoInput/TealoInput";
import { TealoCheckbox } from "@/components/TealoCheckbox/TealoCheckbox";
import { Text } from "@/components/Text";

export default function TealoLabelLab() {
  return (
    <div style={{ padding: 24, maxWidth: 1200, margin: "0 auto" }}>
      <Text variant="h1" style={{ marginBottom: 24 }}>
        Tealo Label preview
      </Text>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 32,
          alignItems: "flex-start",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <Text variant="bodyM" style={{ marginBottom: 8 }}>
            With Input
          </Text>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <TealoLabel htmlFor="input-example">Label</TealoLabel>
            <TealoInput id="input-example" placeholder="Placeholder" />
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <Text variant="bodyM" style={{ marginBottom: 8 }}>
            With Checkbox
          </Text>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <TealoCheckbox id="checkbox-example" />
            <TealoLabel htmlFor="checkbox-example">Accept terms and conditions</TealoLabel>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <Text variant="bodyM" style={{ marginBottom: 8 }}>
            Disabled
          </Text>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <TealoLabel htmlFor="input-disabled">Label</TealoLabel>
            <TealoInput id="input-disabled" disabled placeholder="Disabled" />
          </div>
        </div>
      </div>
    </div>
  );
}
