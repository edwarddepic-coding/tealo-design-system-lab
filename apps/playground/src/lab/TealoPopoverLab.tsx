import { useState } from "react";
import { Text } from "@/components/Text";
import { TealoButton } from "@/components/TealoButton/TealoButton";
import { TealoInput } from "@/components/TealoInput/TealoInput";
import { TealoLabel } from "@/components/TealoLabel/TealoLabel";
import {
  TealoPopover,
  TealoPopoverTrigger,
  TealoPopoverContent,
} from "@/components/TealoPopover/TealoPopover";
import { TealoSeparator } from "@/components/TealoSeparator/TealoSeparator";

export default function TealoPopoverLab() {
  const [volume, setVolume] = useState(50);
  const [muted, setMuted] = useState(false);

  return (
    <div style={{ padding: 24, maxWidth: 1200, margin: "0 auto" }}>
      <Text variant="h1" style={{ marginBottom: 24 }}>
        Tealo Popover preview
      </Text>
      <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
        <section>
          <Text variant="h3" style={{ marginBottom: 12 }}>
            Default
          </Text>
          <TealoPopover>
            <TealoPopoverTrigger asChild>
              <TealoButton variant="outline">Open popover</TealoButton>
            </TealoPopoverTrigger>
            <TealoPopoverContent>
              <Text variant="bodyM">
                Popover content. Use for extra controls or information attached
                to a trigger.
              </Text>
            </TealoPopoverContent>
          </TealoPopover>
        </section>

        <section>
          <Text variant="h3" style={{ marginBottom: 12 }}>
            With form (settings-style)
          </Text>
          <TealoPopover>
            <TealoPopoverTrigger asChild>
              <TealoButton variant="outline">Settings</TealoButton>
            </TealoPopoverTrigger>
            <TealoPopoverContent style={{ width: 280 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <Text variant="h4" style={{ margin: 0 }}>
                  Volume
                </Text>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <input
                    type="range"
                    min={0}
                    max={100}
                    value={volume}
                    onChange={(e) =>
                      setVolume(Number((e.target as HTMLInputElement).value))
                    }
                    style={{ flex: 1 }}
                  />
                  <Text variant="bodyS">{volume}%</Text>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <input
                    type="checkbox"
                    id="mute-popover"
                    checked={muted}
                    onChange={(e) => setMuted(e.target.checked)}
                  />
                  <TealoLabel htmlFor="mute-popover">Mute</TealoLabel>
                </div>
                <TealoSeparator />
                <TealoButton
                  variant="secondary"
                  size="s"
                  style={{ alignSelf: "flex-end" }}
                >
                  Apply
                </TealoButton>
              </div>
            </TealoPopoverContent>
          </TealoPopover>
        </section>

        <section>
          <Text variant="h3" style={{ marginBottom: 12 }}>
            With input and actions
          </Text>
          <TealoPopover>
            <TealoPopoverTrigger asChild>
              <TealoButton variant="outline">Quick add</TealoButton>
            </TealoPopoverTrigger>
            <TealoPopoverContent style={{ width: 320 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div>
                  <TealoLabel htmlFor="popover-title">Title</TealoLabel>
                  <TealoInput
                    id="popover-title"
                    placeholder="Enter title"
                    style={{ marginTop: 4 }}
                  />
                </div>
                <div>
                  <TealoLabel htmlFor="popover-desc">Description</TealoLabel>
                  <TealoInput
                    id="popover-desc"
                    placeholder="Optional description"
                    style={{ marginTop: 4 }}
                  />
                </div>
                <TealoSeparator />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    gap: 8,
                  }}
                >
                  <TealoButton variant="ghost" size="s">
                    Cancel
                  </TealoButton>
                  <TealoButton size="s">Save</TealoButton>
                </div>
              </div>
            </TealoPopoverContent>
          </TealoPopover>
        </section>
      </div>
    </div>
  );
}
