import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Text } from "../Text";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-center transition-[background-color,box-shadow,opacity,color,border-color] duration-150 ease-[ease] disabled:pointer-events-none disabled:opacity-50 appearance-none cursor-pointer",
  {
    variants: {
      variant: {
        primary: [
          "bg-[var(--tealo-teal-600)] text-[var(--tealo-neutral-50)] border-0",
          "hover:bg-[var(--tealo-teal-500)]",
          "focus-visible:outline-none focus-visible:shadow-[var(--tealo-shadow-focus-ring)]",
          "disabled:bg-[var(--tealo-neutral-900)] disabled:text-[var(--tealo-neutral-50)] disabled:opacity-50",
          "disabled:hover:bg-[var(--tealo-neutral-900)] disabled:hover:text-[var(--tealo-neutral-50)] disabled:hover:opacity-50",
        ],
        secondary: [
          "bg-[var(--tealo-neutral-200)] text-[var(--tealo-neutral-800)] border-0",
          "hover:bg-[var(--tealo-neutral-100)]",
          "focus-visible:outline-none focus-visible:shadow-[var(--tealo-shadow-focus-ring)]",
          "disabled:bg-[var(--tealo-neutral-500)] disabled:text-[var(--tealo-neutral-200)] disabled:opacity-50",
          "disabled:hover:bg-[var(--tealo-neutral-500)] disabled:hover:text-[var(--tealo-neutral-200)] disabled:hover:opacity-50",
        ],
        outline: [
          "bg-[var(--tealo-teal-50)] text-[var(--tealo-teal-700)] border-[1px] border-[var(--tealo-teal-200)]",
          "hover:bg-[var(--tealo-neutral-100)] hover:border-[var(--tealo-teal-300)]",
          "focus-visible:outline-none focus-visible:shadow-[var(--tealo-shadow-focus-ring)]",
          "disabled:bg-[var(--tealo-neutral-50)] disabled:text-[var(--tealo-neutral-950)] disabled:border-[var(--tealo-neutral-400)] disabled:opacity-50",
          "disabled:hover:bg-[var(--tealo-neutral-50)] disabled:hover:text-[var(--tealo-neutral-950)] disabled:hover:border-[var(--tealo-neutral-400)] disabled:hover:opacity-50",
        ],
        ghost: [
          "bg-transparent text-[var(--tealo-neutral-800)] border-0",
          "hover:bg-[var(--tealo-neutral-100)]",
          "focus-visible:outline-none focus-visible:shadow-[var(--tealo-shadow-focus-ring)]",
          "disabled:bg-transparent disabled:text-[var(--tealo-neutral-500)] disabled:opacity-50",
          "disabled:hover:bg-transparent disabled:hover:text-[var(--tealo-neutral-500)] disabled:hover:opacity-50",
        ],
        error: [
          "bg-[var(--tealo-error-600)] text-[var(--tealo-neutral-50)] border-0",
          "hover:bg-[var(--tealo-error-500)]",
          "focus-visible:outline-none focus-visible:shadow-[var(--tealo-shadow-focus-ring-error)]",
          "disabled:bg-[var(--tealo-neutral-900)] disabled:text-[var(--tealo-neutral-50)] disabled:opacity-50",
          "disabled:hover:bg-[var(--tealo-neutral-900)] disabled:hover:text-[var(--tealo-neutral-50)] disabled:hover:opacity-50",
        ],
      },
      size: {
        xs: "px-[8px] py-[4px] min-h-[24px] rounded-[var(--tealo-radius-8)]",
        s: "px-[12px] py-[6px] min-h-[32px] rounded-[var(--tealo-radius-12)]",
        m: "px-[16px] py-[8px] min-h-[36px] rounded-[var(--tealo-radius-12)]",
        l: "px-[24px] py-[10px] min-h-[40px] rounded-[var(--tealo-radius-12)]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "m",
    },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <button
        type="button"
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <Text variant="button">{children}</Text>
      </button>
    );
  },
);
Button.displayName = "Button";

export { Button };
