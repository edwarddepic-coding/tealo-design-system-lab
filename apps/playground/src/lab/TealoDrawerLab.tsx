import { Text } from "@/components/Text";
import { TealoButton } from "@/components/TealoButton/TealoButton";
import {
  TealoDrawer,
  TealoDrawerTrigger,
  TealoDrawerContent,
  TealoDrawerHeader,
  TealoDrawerTitle,
  TealoDrawerDescription,
  TealoDrawerFooter,
  TealoDrawerClose,
} from "@/components/TealoDrawer/TealoDrawer";

export default function TealoDrawerLab() {
  return (
    <div style={{ padding: 24, maxWidth: 1200, margin: "0 auto" }}>
      <Text variant="h1" style={{ marginBottom: 24 }}>
        Tealo Drawer preview
      </Text>
      <section>
        <Text variant="h3" style={{ marginBottom: 12 }}>
          Bottom drawer
        </Text>
        <TealoDrawer>
          <TealoDrawerTrigger asChild>
            <TealoButton>Open drawer</TealoButton>
          </TealoDrawerTrigger>
          <TealoDrawerContent>
            <TealoDrawerHeader>
              <TealoDrawerTitle>Drawer title</TealoDrawerTitle>
              <TealoDrawerDescription>
                Optional description. The drawer slides up from the bottom.
              </TealoDrawerDescription>
            </TealoDrawerHeader>
            <Text variant="bodyM" style={{ padding: "0 16px" }}>
              Drawer content. Drag the handle or tap outside to close.
            </Text>
            <TealoDrawerFooter>
              <TealoDrawerClose asChild>
                <TealoButton variant="outline">Close</TealoButton>
              </TealoDrawerClose>
              <TealoButton>Confirm</TealoButton>
            </TealoDrawerFooter>
          </TealoDrawerContent>
        </TealoDrawer>
      </section>
    </div>
  );
}
