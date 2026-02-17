import { Fragment } from "react";
import { Label } from "@/components/Label/label";
import { Input } from "@/components/Input/input";
import { Checkbox } from "@/components/Checkbox/checkbox";
import { Text } from "@/components/Text";

export default function LabelLab() {
  return (
    <div style={{ padding: 24, maxWidth: 1200, margin: "0 auto" }}>
      <Text variant="h1" style={{ marginBottom: 24 }}>
        Label preview
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
            <Label htmlFor="input-example">Label</Label>
            <Input id="input-example" placeholder="Placeholder" />
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <Text variant="bodyM" style={{ marginBottom: 8 }}>
            With Checkbox
          </Text>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Checkbox id="checkbox-example" />
            <Label htmlFor="checkbox-example">Accept terms and conditions</Label>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <Text variant="bodyM" style={{ marginBottom: 8 }}>
            Disabled
          </Text>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <Label htmlFor="input-disabled">Label</Label>
            <Input id="input-disabled" disabled placeholder="Disabled" />
          </div>
        </div>
      </div>
    </div>
  );
}
