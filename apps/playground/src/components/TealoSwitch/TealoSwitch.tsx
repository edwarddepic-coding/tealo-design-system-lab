import * as React from "react";

import { Switch as ShadcnSwitch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

export type TealoSwitchProps = React.ComponentPropsWithoutRef<
  typeof ShadcnSwitch
> & {
  error?: boolean;
};

const TealoSwitch = React.forwardRef<
  React.ElementRef<typeof ShadcnSwitch>,
  TealoSwitchProps
>(({ error, className, ...props }, ref) => (
  <ShadcnSwitch
    ref={ref}
    className={cn(
      error && "data-[state=checked]:bg-[var(--tealo-error-500)]",
      error && "focus-visible:shadow-[var(--tealo-shadow-focus-ring-error)]",
      className
    )}
    aria-invalid={error}
    {...props}
  />
));
TealoSwitch.displayName = "TealoSwitch";

export { TealoSwitch };
