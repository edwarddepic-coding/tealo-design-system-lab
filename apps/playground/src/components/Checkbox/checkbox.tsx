import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check, Minus } from "lucide-react";

import { cn } from "@/lib/utils";

export interface CheckboxProps extends React.ComponentPropsWithoutRef<
  typeof CheckboxPrimitive.Root
> {
  error?: boolean;
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, error, checked, ...props }, ref) => {
  const getState = (
    val: boolean | "indeterminate" | undefined,
  ): "checked" | "unchecked" | "indeterminate" => {
    if (val === true) return "checked";
    if (val === "indeterminate") return "indeterminate";
    return "unchecked";
  };

  const [state, setState] = React.useState<
    "checked" | "unchecked" | "indeterminate"
  >(getState(checked));
  const internalRef =
    React.useRef<React.ElementRef<typeof CheckboxPrimitive.Root>>(null);

  React.useEffect(() => {
    setState(getState(checked));
  }, [checked]);

  React.useImperativeHandle(ref, () => internalRef.current!);

  return (
    <CheckboxPrimitive.Root
      ref={internalRef}
      checked={checked}
      onCheckedChange={(value) => {
        setState(getState(value));
        props.onCheckedChange?.(value);
      }}
      className={cn(
        "grid place-content-center peer h-4 w-4 shrink-0 rounded-[5px] border transition-colors",
        "border-[var(--tealo-teal-500)] bg-[var(--tealo-neutral-50)]",
        "focus-visible:outline-none focus-visible:shadow-[var(--tealo-shadow-focus-ring)]",
        "disabled:cursor-not-allowed disabled:opacity-50 disabled:border-[var(--tealo-neutral-400)] disabled:bg-[var(--tealo-neutral-50)]",
        // Checked state
        "data-[state=checked]:bg-[var(--tealo-teal-500)] data-[state=checked]:border-[var(--tealo-teal-500)] data-[state=checked]:text-[var(--tealo-neutral-50)]",
        "data-[state=checked]:focus-visible:shadow-[var(--tealo-shadow-focus-ring)]",
        // Indeterminate state
        "data-[state=indeterminate]:bg-[var(--tealo-teal-500)] data-[state=indeterminate]:border-[var(--tealo-teal-500)] data-[state=indeterminate]:text-[var(--tealo-neutral-50)]",
        "data-[state=indeterminate]:focus-visible:shadow-[var(--tealo-shadow-focus-ring)]",
        // Error state
        error && "border-[#ef4444]",
        error &&
          "data-[state=checked]:bg-[#ef4444] data-[state=checked]:border-[#ef4444]",
        error &&
          "data-[state=indeterminate]:bg-[#ef4444] data-[state=indeterminate]:border-[#ef4444]",
        error && "focus-visible:shadow-[var(--tealo-shadow-focus-ring-error)]",
        error &&
          "data-[state=checked]:focus-visible:shadow-[var(--tealo-shadow-focus-ring-error)]",
        error &&
          "data-[state=indeterminate]:focus-visible:shadow-[var(--tealo-shadow-focus-ring-error)]",
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className={cn("grid place-content-center text-current")}
      >
        {state === "indeterminate" ? (
          <Minus
            className="h-4 w-4 text-[var(--tealo-neutral-50)]"
            fontWeight="bold"
          />
        ) : (
          <Check
            className="h-4 w-4 text-[var(--tealo-neutral-50)]"
            fontWeight="bold"
          />
        )}
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
