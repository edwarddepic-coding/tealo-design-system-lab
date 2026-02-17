import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check, Minus } from "lucide-react"

import { cn } from "@/lib/utils"

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "group grid place-content-center peer h-4 w-4 shrink-0 rounded-[5px] border transition-colors",
      "border-[var(--tealo-teal-500)] bg-[var(--tealo-neutral-50)]",
      "focus-visible:outline-none focus-visible:shadow-[var(--tealo-shadow-focus-ring)]",
      "disabled:cursor-not-allowed disabled:opacity-50 disabled:border-[var(--tealo-neutral-400)] disabled:bg-[var(--tealo-neutral-50)]",
      "data-[state=checked]:bg-[var(--tealo-teal-500)] data-[state=checked]:border-[var(--tealo-teal-500)] data-[state=checked]:text-[var(--tealo-neutral-50)]",
      "data-[state=checked]:focus-visible:shadow-[var(--tealo-shadow-focus-ring)]",
      "data-[state=indeterminate]:bg-[var(--tealo-teal-500)] data-[state=indeterminate]:border-[var(--tealo-teal-500)] data-[state=indeterminate]:text-[var(--tealo-neutral-50)]",
      "data-[state=indeterminate]:focus-visible:shadow-[var(--tealo-shadow-focus-ring)]",
      "aria-invalid:border-[var(--tealo-error-500)]",
      "aria-invalid:data-[state=checked]:bg-[var(--tealo-error-500)] aria-invalid:data-[state=checked]:border-[var(--tealo-error-500)]",
      "aria-invalid:data-[state=indeterminate]:bg-[var(--tealo-error-500)] aria-invalid:data-[state=indeterminate]:border-[var(--tealo-error-500)]",
      "aria-invalid:focus-visible:shadow-[var(--tealo-shadow-focus-ring-error)]",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("relative grid place-content-center text-current")}
    >
      <Check className="h-4 w-4 group-data-[state=indeterminate]:hidden" />
      <Minus
        className="absolute inset-0 m-auto h-4 w-4 hidden group-data-[state=indeterminate]:block"
        strokeWidth={3}
        aria-hidden
      />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
