import * as React from "react";

import { Checkbox as ShadcnCheckbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

export type TealoCheckboxProps = React.ComponentPropsWithoutRef<
  typeof ShadcnCheckbox
> & {
  error?: boolean;
};

const TealoCheckbox = React.forwardRef<
  React.ElementRef<typeof ShadcnCheckbox>,
  TealoCheckboxProps
>(({ error, className, ...props }, ref) => (
  <ShadcnCheckbox
    ref={ref}
    className={cn(
      error && "border-[var(--tealo-error-500)] data-[state=checked]:bg-[var(--tealo-error-500)] data-[state=checked]:border-[var(--tealo-error-500)]",
      error && "focus-visible:ring-[var(--tealo-shadow-focus-ring-error)]",
      className
    )}
    aria-invalid={error}
    {...props}
  />
));
TealoCheckbox.displayName = "TealoCheckbox";

export { TealoCheckbox };
