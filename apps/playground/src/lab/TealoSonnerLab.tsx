import { TealoButton } from "@/components/TealoButton/TealoButton";
import { toast } from "@/components/TealoSonner/TealoSonner";
import { Text } from "@/components/Text";

export default function TealoSonnerLab() {
  return (
    <div style={{ padding: 24, maxWidth: 1200, margin: "0 auto" }}>
      <Text variant="h1" style={{ marginBottom: 24 }}>
        Tealo Sonner preview
      </Text>
      <Text
        variant="bodyM"
        style={{ marginBottom: 24, color: "var(--tealo-neutral-600)" }}
      >
        Notifications relevant to the Tealo design system. Trigger toasts to see
        Tealo styling.
      </Text>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 12,
          alignItems: "flex-start",
        }}
      >
        <TealoButton
          variant="primary"
          onClick={() =>
            toast.success("Token updated", {
              description: "tealo-teal-600 has been saved to your theme.",
            })
          }
        >
          Token updated
        </TealoButton>
        <TealoButton
          variant="primary"
          onClick={() =>
            toast("Component exported", {
              description: "TealoButton has been exported to your Figma library.",
            })
          }
        >
          Component exported
        </TealoButton>
        <TealoButton
          variant="secondary"
          onClick={() =>
            toast.success("Design system sync complete", {
              description: "All tokens and components are in sync with Tealo.",
            })
          }
        >
          Sync complete
        </TealoButton>
        <TealoButton
          variant="outline"
          onClick={() =>
            toast("Preview saved", {
              description: "Your Tealo preview has been saved to the lab.",
            })
          }
        >
          Preview saved
        </TealoButton>
        <TealoButton
          variant="error"
          onClick={() =>
            toast.error("Token conflict", {
              description: "tealo-radius-12 is defined in multiple sources.",
            })
          }
        >
          Token conflict (error)
        </TealoButton>
        <TealoButton
          variant="ghost"
          onClick={() =>
            toast.promise(
              new Promise((resolve) => setTimeout(resolve, 2000)),
              {
                loading: "Publishing design system...",
                success: "Tealo design system published.",
                error: "Publish failed.",
              }
            )
          }
        >
          Promise toast
        </TealoButton>
      </div>
    </div>
  );
}
