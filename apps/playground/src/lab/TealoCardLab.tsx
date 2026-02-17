import { Text } from "@/components/Text";
import {
  TealoCard,
  TealoCardHeader,
  TealoCardTitle,
  TealoCardDescription,
  TealoCardContent,
  TealoCardFooter,
} from "@/components/TealoCard/TealoCard";
import { TealoButton } from "@/components/TealoButton/TealoButton";

export default function TealoCardLab() {
  return (
    <div style={{ padding: 24, maxWidth: 1200, margin: "0 auto" }}>
      <Text variant="h1" style={{ marginBottom: 24 }}>
        Tealo Card preview
      </Text>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <section>
          <Text variant="h3" style={{ marginBottom: 12 }}>
            Default card
          </Text>
          <TealoCard style={{ maxWidth: 400 }}>
            <TealoCardHeader>
              <TealoCardTitle>Card title</TealoCardTitle>
              <TealoCardDescription>
                Short description for the card content.
              </TealoCardDescription>
            </TealoCardHeader>
            <TealoCardContent>
              <Text variant="bodyM">
                Main content goes here. You can put any content inside the card.
              </Text>
            </TealoCardContent>
            <TealoCardFooter>
              <TealoButton>Action</TealoButton>
            </TealoCardFooter>
          </TealoCard>
        </section>
        <section>
          <Text variant="h3" style={{ marginBottom: 12 }}>
            Card without footer
          </Text>
          <TealoCard style={{ maxWidth: 400 }}>
            <TealoCardHeader>
              <TealoCardTitle>Simple card</TealoCardTitle>
            </TealoCardHeader>
            <TealoCardContent>
              <Text variant="bodyM">Content only, no footer actions.</Text>
            </TealoCardContent>
          </TealoCard>
        </section>
      </div>
    </div>
  );
}
