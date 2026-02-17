import * as React from "react";

import { Button as ShadcnButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Text } from "@/components/Text/Text";

type UiVariant = "default" | "secondary" | "outline" | "ghost" | "destructive" | "link";
type UiSize = "default" | "xs" | "s" | "sm" | "m" | "lg" | "l" | "icon";

const variantMap: Record<string, UiVariant> = {
  primary: "default",
  secondary: "secondary",
  outline: "outline",
  ghost: "ghost",
  error: "destructive",
};

const sizeMap: Record<string, UiSize> = {
  xs: "xs",
  s: "s",
  m: "m",
  l: "l",
};

export interface TealoButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "error";
  size?: "xs" | "s" | "m" | "l";
  children: React.ReactNode;
  asChild?: boolean;
}

const TealoButton = React.forwardRef<HTMLButtonElement, TealoButtonProps>(
  ({ className, variant = "primary", size = "m", children, asChild, ...props }, ref) => {
    const uiVariant = variantMap[variant] ?? "default";
    const uiSize = sizeMap[size] ?? "m";
    return (
      <ShadcnButton
        ref={ref}
        type="button"
        variant={uiVariant}
        size={uiSize}
        className={cn(className)}
        asChild={asChild}
        {...props}
      >
        {asChild ? children : <Text variant="button">{children}</Text>}
      </ShadcnButton>
    );
  }
);
TealoButton.displayName = "TealoButton";

export { TealoButton };
