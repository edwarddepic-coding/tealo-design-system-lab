import { useState } from "react";
import { TealoButton } from "@/components/TealoButton/TealoButton";
import {
  TealoDialog,
  TealoDialogContent,
  TealoDialogHeader,
  TealoDialogTitle,
  TealoDialogTrigger,
} from "@/components/TealoDialog/TealoDialog";
import { TealoLabel } from "@/components/TealoLabel/TealoLabel";
import {
  TealoSelect,
  TealoSelectContent,
  TealoSelectGroup,
  TealoSelectItem,
  TealoSelectLabel,
  TealoSelectTrigger,
  TealoSelectValue,
} from "@/components/TealoSelect/TealoSelect";
import { TealoTextarea } from "@/components/TealoTextarea/TealoTextarea";
import { Text } from "@/components/Text";

const priorityOptions = [
  { value: "low", label: "Low" },
  { value: "medium", label: "Medium" },
  { value: "high", label: "High" },
  { value: "critical", label: "Critical" },
];

const focusLevelOptions = [
  { value: "low", label: "Low" },
  { value: "medium", label: "Medium" },
  { value: "high", label: "High" },
  { value: "deep", label: "Deep" },
];

export default function TealoDialogLab() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [focusLevel, setFocusLevel] = useState("");
  const [buddyInput, setBuddyInput] = useState("");

  return (
    <div style={{ padding: 24, maxWidth: 1200, margin: "0 auto" }}>
      <Text variant="h1" style={{ marginBottom: 24 }}>
        Tealo Dialog preview
      </Text>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 24,
          alignItems: "flex-start",
        }}
      >
        <TealoDialog>
          <TealoDialogTrigger asChild>
            <TealoButton>Open task item</TealoButton>
          </TealoDialogTrigger>
          <TealoDialogContent
            className="max-w-md"
            style={{ maxWidth: 420 }}
          >
            <TealoDialogHeader>
              <TealoDialogTitle>Task item</TealoDialogTitle>
            </TealoDialogHeader>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 20,
                width: "100%",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <TealoLabel htmlFor="task-title">Title</TealoLabel>
                <TealoTextarea
                  id="task-title"
                  variant="unstyled"
                  placeholder="Task title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  rows={1}
                  style={{
                    minHeight: 32,
                    fontSize: "var(--tealo-text-h4-font-size)",
                    fontWeight: "var(--tealo-text-h4-font-weight)",
                  }}
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <TealoLabel htmlFor="task-description">Description</TealoLabel>
                <TealoTextarea
                  id="task-description"
                  variant="unstyled"
                  placeholder="Describe the task..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={3}
                  style={{ minHeight: 72 }}
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <TealoLabel htmlFor="task-priority">Priority</TealoLabel>
                <TealoSelect value={priority} onValueChange={setPriority}>
                  <TealoSelectTrigger id="task-priority">
                    <TealoSelectValue placeholder="Select priority" />
                  </TealoSelectTrigger>
                  <TealoSelectContent>
                    <TealoSelectGroup>
                      <TealoSelectLabel>Priority</TealoSelectLabel>
                      {priorityOptions.map((p) => (
                        <TealoSelectItem key={p.value} value={p.value}>
                          {p.label}
                        </TealoSelectItem>
                      ))}
                    </TealoSelectGroup>
                  </TealoSelectContent>
                </TealoSelect>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <TealoLabel htmlFor="task-focus">Focus level</TealoLabel>
                <TealoSelect value={focusLevel} onValueChange={setFocusLevel}>
                  <TealoSelectTrigger id="task-focus">
                    <TealoSelectValue placeholder="Select focus level" />
                  </TealoSelectTrigger>
                  <TealoSelectContent>
                    <TealoSelectGroup>
                      <TealoSelectLabel>Focus level</TealoSelectLabel>
                      {focusLevelOptions.map((f) => (
                        <TealoSelectItem key={f.value} value={f.value}>
                          {f.label}
                        </TealoSelectItem>
                      ))}
                    </TealoSelectGroup>
                  </TealoSelectContent>
                </TealoSelect>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <TealoLabel htmlFor="task-buddy">Talk to buddy</TealoLabel>
                <TealoTextarea
                  id="task-buddy"
                  variant="default"
                  placeholder="Type a message for your buddy..."
                  value={buddyInput}
                  onChange={(e) => setBuddyInput(e.target.value)}
                  rows={3}
                  style={{ minHeight: 80 }}
                />
              </div>
            </div>
          </TealoDialogContent>
        </TealoDialog>
      </div>
    </div>
  );
}
