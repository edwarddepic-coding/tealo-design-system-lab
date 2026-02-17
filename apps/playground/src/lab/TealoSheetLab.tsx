import { Text } from "@/components/Text";
import { TealoButton } from "@/components/TealoButton/TealoButton";
import {
  TealoSheet,
  TealoSheetTrigger,
  TealoSheetContent,
  TealoSheetHeader,
  TealoSheetTitle,
  TealoSheetDescription,
  TealoSheetFooter,
} from "@/components/TealoSheet/TealoSheet";

export default function TealoSheetLab() {
  return (
    <div style={{ padding: 24, maxWidth: 1200, margin: "0 auto" }}>
      <Text variant="h1" style={{ marginBottom: 24 }}>
        Tealo Sheet preview
      </Text>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <section>
          <Text variant="h3" style={{ marginBottom: 12 }}>
            Right side (default)
          </Text>
          <TealoSheet>
            <TealoSheetTrigger asChild>
              <TealoButton>Open right sheet</TealoButton>
            </TealoSheetTrigger>
            <TealoSheetContent>
              <TealoSheetHeader>
                <TealoSheetTitle>Sheet title</TealoSheetTitle>
                <TealoSheetDescription>
                  Optional description for the sheet content.
                </TealoSheetDescription>
              </TealoSheetHeader>
              <Text variant="bodyM" style={{ marginTop: 16 }}>
                Sheet content goes here. Close using the X or by clicking
                outside.
              </Text>
              <TealoSheetFooter>
                <TealoButton>Submit</TealoButton>
              </TealoSheetFooter>
            </TealoSheetContent>
          </TealoSheet>
        </section>
        <section>
          <Text variant="h3" style={{ marginBottom: 12 }}>
            Left side
          </Text>
          <TealoSheet>
            <TealoSheetTrigger asChild>
              <TealoButton variant="outline">Open left sheet</TealoButton>
            </TealoSheetTrigger>
            <TealoSheetContent side="left">
              <TealoSheetHeader>
                <TealoSheetTitle>Left sheet</TealoSheetTitle>
                <TealoSheetDescription>
                  This sheet slides in from the left.
                </TealoSheetDescription>
              </TealoSheetHeader>
              <Text variant="bodyM" style={{ marginTop: 16 }}>
                Content for the left sheet.
              </Text>
            </TealoSheetContent>
          </TealoSheet>
        </section>
      </div>
    </div>
  );
}
