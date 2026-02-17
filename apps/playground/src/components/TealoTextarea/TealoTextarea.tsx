import * as React from "react";

import { Textarea as ShadcnTextarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export interface TealoTextareaProps
  extends React.ComponentPropsWithoutRef<typeof ShadcnTextarea> {
  error?: boolean;
}

const TealoTextarea = React.forwardRef<HTMLTextAreaElement, TealoTextareaProps>(
  ({ className, variant, error, ...props }, ref) => (
    <ShadcnTextarea
      ref={ref}
      variant={variant}
      className={cn(className)}
      aria-invalid={error}
      {...props}
    />
  )
);
TealoTextarea.displayName = "TealoTextarea";

export { TealoTextarea };
