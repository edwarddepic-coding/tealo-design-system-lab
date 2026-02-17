import * as React from "react";

import { Input as ShadcnInput } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export interface TealoInputProps
  extends React.ComponentPropsWithoutRef<typeof ShadcnInput> {
  error?: boolean;
}

const TealoInput = React.forwardRef<HTMLInputElement, TealoInputProps>(
  ({ className, variant, type, error, ...props }, ref) => (
    <ShadcnInput
      ref={ref}
      type={type}
      variant={variant}
      className={cn(className)}
      aria-invalid={error}
      {...props}
    />
  )
);
TealoInput.displayName = "TealoInput";

export { TealoInput };
