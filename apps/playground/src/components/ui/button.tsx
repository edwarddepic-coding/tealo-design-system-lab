import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-center transition-[background-color,box-shadow,opacity,color,border-color] duration-150 ease-[ease] disabled:pointer-events-none disabled:opacity-50 appearance-none cursor-pointer [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: [
          "bg-[var(--tealo-teal-600)] text-[var(--tealo-neutral-50)] border-0",
          "hover:bg-[var(--tealo-teal-500)]",
          "focus-visible:outline-none focus-visible:shadow-[var(--tealo-shadow-focus-ring)]",
          "disabled:bg-[var(--tealo-neutral-900)] disabled:text-[var(--tealo-neutral-50)]",
          "disabled:hover:bg-[var(--tealo-neutral-900)] disabled:hover:text-[var(--tealo-neutral-50)]",
        ],
        secondary: [
          "bg-[var(--tealo-neutral-200)] text-[var(--tealo-neutral-800)] border-0",
          "hover:bg-[var(--tealo-neutral-100)]",
          "focus-visible:outline-none focus-visible:shadow-[var(--tealo-shadow-focus-ring)]",
          "disabled:bg-[var(--tealo-neutral-500)] disabled:text-[var(--tealo-neutral-200)]",
          "disabled:hover:bg-[var(--tealo-neutral-500)] disabled:hover:text-[var(--tealo-neutral-200)]",
        ],
        outline: [
          "bg-[var(--tealo-teal-50)] text-[var(--tealo-teal-700)] border-[1px] border-[var(--tealo-teal-200)]",
          "hover:bg-[var(--tealo-neutral-100)] hover:border-[var(--tealo-teal-300)]",
          "focus-visible:outline-none focus-visible:shadow-[var(--tealo-shadow-focus-ring)]",
          "disabled:bg-[var(--tealo-neutral-50)] disabled:text-[var(--tealo-neutral-950)] disabled:border-[var(--tealo-neutral-400)]",
          "disabled:hover:bg-[var(--tealo-neutral-50)] disabled:hover:text-[var(--tealo-neutral-950)] disabled:hover:border-[var(--tealo-neutral-400)]",
        ],
        ghost: [
          "bg-transparent text-[var(--tealo-neutral-800)] border-0",
          "hover:bg-[var(--tealo-neutral-100)]",
          "focus-visible:outline-none focus-visible:shadow-[var(--tealo-shadow-focus-ring)]",
          "disabled:bg-transparent disabled:text-[var(--tealo-neutral-500)]",
          "disabled:hover:bg-transparent disabled:hover:text-[var(--tealo-neutral-500)]",
        ],
        destructive: [
          "bg-[var(--tealo-error-600)] text-[var(--tealo-neutral-50)] border-0",
          "hover:bg-[var(--tealo-error-500)]",
          "focus-visible:outline-none focus-visible:shadow-[var(--tealo-shadow-focus-ring-error)]",
          "disabled:bg-[var(--tealo-neutral-900)] disabled:text-[var(--tealo-neutral-50)]",
          "disabled:hover:bg-[var(--tealo-neutral-900)] disabled:hover:text-[var(--tealo-neutral-50)]",
        ],
        link: [
          "text-[var(--tealo-teal-700)] underline-offset-4 hover:underline bg-transparent border-0",
          "focus-visible:outline-none focus-visible:ring-0",
        ],
      },
      size: {
        default: "h-9 px-4 py-2 rounded-[var(--tealo-radius-12)]",
        xs: "px-[8px] py-[4px] min-h-[24px] rounded-[var(--tealo-radius-8)]",
        s: "px-[12px] py-[6px] min-h-[32px] rounded-[var(--tealo-radius-12)]",
        sm: "px-[12px] py-[6px] min-h-[32px] rounded-[var(--tealo-radius-12)]",
        m: "px-[16px] py-[8px] min-h-[36px] rounded-[var(--tealo-radius-12)]",
        lg: "px-[24px] py-[10px] min-h-[40px] rounded-[var(--tealo-radius-12)]",
        l: "px-[24px] py-[10px] min-h-[40px] rounded-[var(--tealo-radius-12)]",
        icon: "h-9 w-9 rounded-[var(--tealo-radius-12)]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        type={asChild ? undefined : "button"}
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button };
