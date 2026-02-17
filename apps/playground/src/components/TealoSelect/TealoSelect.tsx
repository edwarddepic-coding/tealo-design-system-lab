"use client";

import * as React from "react";

import {
  Select as ShadcnSelect,
  SelectTrigger as ShadcnSelectTrigger,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const TealoSelect = ShadcnSelect;

type TealoSelectTriggerProps = React.ComponentPropsWithoutRef<
  typeof ShadcnSelectTrigger
> & {
  error?: boolean;
};

const TealoSelectTrigger = React.forwardRef<
  React.ElementRef<typeof ShadcnSelectTrigger>,
  TealoSelectTriggerProps
>(({ error, className, ...props }, ref) => (
  <ShadcnSelectTrigger
    ref={ref}
    className={cn(
      error && "border-[var(--tealo-error-500)] focus:ring-[var(--tealo-shadow-focus-ring-error)]",
      className
    )}
    aria-invalid={error}
    {...props}
  />
));
TealoSelectTrigger.displayName = "TealoSelectTrigger";

export {
  TealoSelect,
  TealoSelectTrigger,
};
export {
  SelectGroup as TealoSelectGroup,
  SelectValue as TealoSelectValue,
  SelectContent as TealoSelectContent,
  SelectLabel as TealoSelectLabel,
  SelectItem as TealoSelectItem,
  SelectSeparator as TealoSelectSeparator,
} from "@/components/ui/select";
