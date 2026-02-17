import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const inputVariants = cva(
  "flex w-full transition-colors outline-none",
  {
    variants: {
      variant: {
        default: [
          "rounded-[var(--tealo-radius-12)]",
          "border border-[var(--tealo-neutral-300)] bg-[var(--tealo-neutral-50)]",
          "px-3 py-2 text-[var(--tealo-text-body-m-font-size)] leading-[var(--tealo-text-body-m-line-height)]",
          "placeholder:text-[var(--tealo-neutral-500)] text-[var(--tealo-neutral-900)]",
          "focus-visible:border-[var(--tealo-neutral-400)] focus-visible:shadow-[var(--tealo-shadow-focus-ring)]",
          "disabled:bg-[var(--tealo-neutral-200)] disabled:border-[var(--tealo-neutral-300)] disabled:text-[var(--tealo-neutral-500)] disabled:cursor-not-allowed",
          "aria-invalid:border-[var(--tealo-error-500)]",
          "aria-invalid:focus-visible:border-[var(--tealo-error-500)] aria-invalid:focus-visible:border-[2px] aria-invalid:focus-visible:shadow-[var(--tealo-shadow-focus-ring-error)]",
        ],
        unstyled: [
          "rounded-none",
          "border-0 bg-transparent p-0",
          "text-[var(--tealo-text-body-m-font-size)] leading-[var(--tealo-text-body-m-line-height)]",
          "placeholder:text-[var(--tealo-neutral-500)] text-[var(--tealo-neutral-900)]",
          "focus-visible:outline-none focus-visible:ring-0",
          "disabled:text-[var(--tealo-neutral-500)] disabled:cursor-not-allowed",
          "min-w-0 overflow-visible",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, type, error, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant, className }))}
        ref={ref}
        aria-invalid={error}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
