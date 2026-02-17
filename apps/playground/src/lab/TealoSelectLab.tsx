import { useState } from "react";
import {
  TealoSelect,
  TealoSelectContent,
  TealoSelectGroup,
  TealoSelectItem,
  TealoSelectLabel,
  TealoSelectTrigger,
  TealoSelectValue,
} from "@/components/TealoSelect/TealoSelect";
import { TealoLabel } from "@/components/TealoLabel/TealoLabel";
import { Text } from "@/components/Text";
import { Flag } from "lucide-react";

const fruits = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "blueberry", label: "Blueberry" },
  { value: "grapes", label: "Grapes" },
  { value: "pineapple", label: "Pineapple" },
];

const priorities = [
  { value: "low", label: "Low", color: "text-[var(--tealo-neutral-600)]" },
  { value: "medium", label: "Medium", color: "text-[var(--tealo-teal-600)]" },
  { value: "high", label: "High", color: "text-[var(--tealo-error-600)]" },
  { value: "critical", label: "Critical", color: "text-[var(--tealo-error-700)]" },
];

export default function TealoSelectLab() {
  const [fruit, setFruit] = useState("");
  const [priority, setPriority] = useState("");
  const [priorityWithError, setPriorityWithError] = useState("");

  return (
    <div style={{ padding: 24, maxWidth: 1200, margin: "0 auto" }}>
      <Text variant="h1" style={{ marginBottom: 24 }}>
        Tealo Select preview
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
            Basic select
          </Text>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <TealoLabel htmlFor="fruit-select">Fruit</TealoLabel>
            <TealoSelect value={fruit} onValueChange={setFruit}>
              <TealoSelectTrigger id="fruit-select" style={{ width: 200 }}>
                <TealoSelectValue placeholder="Select a fruit" />
              </TealoSelectTrigger>
              <TealoSelectContent>
                <TealoSelectGroup>
                  <TealoSelectLabel>Fruits</TealoSelectLabel>
                  {fruits.map((f) => (
                    <TealoSelectItem key={f.value} value={f.value}>
                      {f.label}
                    </TealoSelectItem>
                  ))}
                </TealoSelectGroup>
              </TealoSelectContent>
            </TealoSelect>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <Text variant="bodyM" style={{ marginBottom: 8 }}>
            Priority (with icon)
          </Text>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <TealoLabel htmlFor="priority-select">Priority</TealoLabel>
            <TealoSelect value={priority} onValueChange={setPriority}>
              <TealoSelectTrigger id="priority-select" style={{ width: 200 }}>
                <TealoSelectValue placeholder="Select priority" />
              </TealoSelectTrigger>
              <TealoSelectContent>
                <TealoSelectGroup>
                  <TealoSelectLabel>Priority</TealoSelectLabel>
                  {priorities.map((p) => (
                    <TealoSelectItem key={p.value} value={p.value}>
                      <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <Flag
                          className={p.color}
                          style={{ width: 16, height: 16, flexShrink: 0 }}
                        />
                        {p.label}
                      </span>
                    </TealoSelectItem>
                  ))}
                </TealoSelectGroup>
              </TealoSelectContent>
            </TealoSelect>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <Text variant="bodyM" style={{ marginBottom: 8 }}>
            Priority with error state
          </Text>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <TealoLabel htmlFor="priority-error-select">Priority</TealoLabel>
            <TealoSelect value={priorityWithError} onValueChange={setPriorityWithError}>
              <TealoSelectTrigger id="priority-error-select" error style={{ width: 200 }}>
                <TealoSelectValue placeholder="Select priority" />
              </TealoSelectTrigger>
              <TealoSelectContent>
                <TealoSelectGroup>
                  <TealoSelectLabel>Priority</TealoSelectLabel>
                  {priorities.map((p) => (
                    <TealoSelectItem key={p.value} value={p.value}>
                      <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <Flag
                          className={p.color}
                          style={{ width: 16, height: 16, flexShrink: 0 }}
                        />
                        {p.label}
                      </span>
                    </TealoSelectItem>
                  ))}
                </TealoSelectGroup>
              </TealoSelectContent>
            </TealoSelect>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <Text variant="bodyM" style={{ marginBottom: 8 }}>
            Disabled
          </Text>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <TealoLabel htmlFor="disabled-select">Priority</TealoLabel>
            <TealoSelect value="medium" disabled>
              <TealoSelectTrigger id="disabled-select" style={{ width: 200 }}>
                <TealoSelectValue placeholder="Select priority" />
              </TealoSelectTrigger>
              <TealoSelectContent>
                <TealoSelectGroup>
                  <TealoSelectLabel>Priority</TealoSelectLabel>
                  {priorities.map((p) => (
                    <TealoSelectItem key={p.value} value={p.value}>
                      <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <Flag
                          className={p.color}
                          style={{ width: 16, height: 16, flexShrink: 0 }}
                        />
                        {p.label}
                      </span>
                    </TealoSelectItem>
                  ))}
                </TealoSelectGroup>
              </TealoSelectContent>
            </TealoSelect>
          </div>
        </div>
      </div>
    </div>
  );
}
