import { useState } from "react";
import { Text } from "@/components/Text";
import { TealoButton } from "@/components/TealoButton/TealoButton";
import {
  TealoDropdownMenu,
  TealoDropdownMenuTrigger,
  TealoDropdownMenuContent,
  TealoDropdownMenuItem,
  TealoDropdownMenuLabel,
  TealoDropdownMenuSeparator,
  TealoDropdownMenuCheckboxItem,
  TealoDropdownMenuShortcut,
} from "@/components/TealoDropdownMenu/TealoDropdownMenu";

export default function TealoDropdownMenuLab() {
  const [showStatusBar, setShowStatusBar] = useState(true);

  return (
    <div style={{ padding: 24, maxWidth: 1200, margin: "0 auto" }}>
      <Text variant="h1" style={{ marginBottom: 24 }}>
        Tealo Dropdown Menu preview
      </Text>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <section>
          <Text variant="h3" style={{ marginBottom: 12 }}>
            Simple menu
          </Text>
          <TealoDropdownMenu>
            <TealoDropdownMenuTrigger asChild>
              <TealoButton variant="outline">Open menu</TealoButton>
            </TealoDropdownMenuTrigger>
            <TealoDropdownMenuContent>
              <TealoDropdownMenuItem>New file</TealoDropdownMenuItem>
              <TealoDropdownMenuItem>Copy</TealoDropdownMenuItem>
              <TealoDropdownMenuItem>Paste</TealoDropdownMenuItem>
              <TealoDropdownMenuSeparator />
              <TealoDropdownMenuItem>Delete</TealoDropdownMenuItem>
            </TealoDropdownMenuContent>
          </TealoDropdownMenu>
        </section>
        <section>
          <Text variant="h3" style={{ marginBottom: 12 }}>
            With labels and shortcuts
          </Text>
          <TealoDropdownMenu>
            <TealoDropdownMenuTrigger asChild>
              <TealoButton variant="outline">Options</TealoButton>
            </TealoDropdownMenuTrigger>
            <TealoDropdownMenuContent>
              <TealoDropdownMenuLabel>View</TealoDropdownMenuLabel>
              <TealoDropdownMenuSeparator />
              <TealoDropdownMenuCheckboxItem
                checked={showStatusBar}
                onCheckedChange={setShowStatusBar}
              >
                Status bar
              </TealoDropdownMenuCheckboxItem>
              <TealoDropdownMenuSeparator />
              <TealoDropdownMenuItem>
                Save
                <TealoDropdownMenuShortcut>⌘S</TealoDropdownMenuShortcut>
              </TealoDropdownMenuItem>
              <TealoDropdownMenuItem>
                Copy
                <TealoDropdownMenuShortcut>⌘C</TealoDropdownMenuShortcut>
              </TealoDropdownMenuItem>
            </TealoDropdownMenuContent>
          </TealoDropdownMenu>
        </section>
      </div>
    </div>
  );
}
