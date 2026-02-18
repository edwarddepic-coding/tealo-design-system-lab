import { Text } from "@/components/Text";
import { TealoButton } from "@/components/TealoButton/TealoButton";
import {
  TealoTooltipProvider,
  TealoTooltip,
  TealoTooltipTrigger,
  TealoTooltipContent,
} from "@/components/TealoTooltip/TealoTooltip";

export default function TealoTooltipLab() {
  return (
    <div style={{ padding: 24, maxWidth: 1200, margin: "0 auto" }}>
      <Text variant="h1" style={{ marginBottom: 24 }}>
        Tealo Tooltip preview
      </Text>
      <TealoTooltipProvider>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <section>
            <Text variant="h3" style={{ marginBottom: 12 }}>
              Default (teal background)
            </Text>
            <TealoTooltip>
              <TealoTooltipTrigger asChild>
                <TealoButton variant="outline">Hover for tooltip</TealoButton>
              </TealoTooltipTrigger>
              <TealoTooltipContent>
                <p>Tooltip content</p>
              </TealoTooltipContent>
            </TealoTooltip>
          </section>
          <section>
            <Text variant="h3" style={{ marginBottom: 12 }}>
              Multiple triggers
            </Text>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <TealoTooltip>
                <TealoTooltipTrigger asChild>
                  <TealoButton variant="ghost" size="s">
                    ?
                  </TealoButton>
                </TealoTooltipTrigger>
                <TealoTooltipContent>Help</TealoTooltipContent>
              </TealoTooltip>
              <TealoTooltip>
                <TealoTooltipTrigger asChild>
                  <TealoButton variant="ghost" size="s">
                    i
                  </TealoButton>
                </TealoTooltipTrigger>
                <TealoTooltipContent>Info</TealoTooltipContent>
              </TealoTooltip>
            </div>
          </section>
        </div>
      </TealoTooltipProvider>
    </div>
  );
}
