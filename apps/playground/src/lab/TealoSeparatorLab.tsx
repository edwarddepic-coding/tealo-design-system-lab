import { Text } from "@/components/Text";
import { TealoSeparator } from "@/components/TealoSeparator/TealoSeparator";

export default function TealoSeparatorLab() {
  return (
    <div style={{ padding: 24, maxWidth: 1200, margin: "0 auto" }}>
      <Text variant="h1" style={{ marginBottom: 24 }}>
        Tealo Separator preview
      </Text>
      <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
        <section>
          <Text variant="h3" style={{ marginBottom: 12 }}>
            Horizontal
          </Text>
          <div style={{ maxWidth: 400 }}>
            <Text variant="bodyM">Content above the separator.</Text>
            <TealoSeparator style={{ margin: "16px 0" }} />
            <Text variant="bodyM">Content below the separator.</Text>
          </div>
        </section>
        <section>
          <Text variant="h3" style={{ marginBottom: 12 }}>
            Vertical
          </Text>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <Text variant="bodyM">Left</Text>
            <TealoSeparator orientation="vertical" style={{ height: 24 }} />
            <Text variant="bodyM">Center</Text>
            <TealoSeparator orientation="vertical" style={{ height: 24 }} />
            <Text variant="bodyM">Right</Text>
          </div>
        </section>
      </div>
    </div>
  );
}
