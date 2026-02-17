import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const textareaVariants = cva(
  "flex w-full transition-colors outline-none resize-none",
  {
    variants: {
      variant: {
        default: [
          "rounded-[var(--tealo-radius-12)]",
          "border border-[var(--tealo-neutral-300)] bg-[var(--tealo-neutral-50)]",
          "pl-3 pt-3 pr-[calc(0.75rem+12px)] pb-[calc(0.75rem+12px)] text-[var(--tealo-text-body-m-font-size)] leading-[var(--tealo-text-body-m-line-height)]",
          "placeholder:text-[var(--tealo-neutral-500)] text-[var(--tealo-neutral-900)]",
          "focus-visible:border-[var(--tealo-neutral-400)] focus-visible:shadow-[var(--tealo-shadow-focus-ring)]",
          "disabled:bg-[var(--tealo-neutral-200)] disabled:border-[var(--tealo-neutral-300)] disabled:text-[var(--tealo-neutral-500)] disabled:cursor-not-allowed",
          "aria-invalid:border-[var(--tealo-error-500)]",
          "aria-invalid:focus-visible:border-[var(--tealo-error-500)] aria-invalid:focus-visible:border-[2px] aria-invalid:focus-visible:shadow-[var(--tealo-shadow-focus-ring-error)]",
          "[&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[var(--tealo-neutral-300)] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:border-2 [&::-webkit-scrollbar-thumb]:border-transparent [&::-webkit-scrollbar-thumb]:bg-clip-padding",
          "[&::-webkit-scrollbar-thumb]:hover:bg-[var(--tealo-neutral-400)]",
          "[scrollbar-width:thin] [scrollbar-color:var(--tealo-neutral-300)_transparent]",
        ],
        unstyled: [
          "rounded-none",
          "border-0 bg-transparent p-0",
          "text-[var(--tealo-text-body-m-font-size)] leading-[var(--tealo-text-body-m-line-height)]",
          "placeholder:text-[var(--tealo-neutral-500)] text-[var(--tealo-neutral-900)]",
          "focus-visible:outline-none focus-visible:ring-0",
          "disabled:text-[var(--tealo-neutral-500)] disabled:cursor-not-allowed",
          "min-w-0 overflow-visible resize-none",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <textarea
        className={cn(textareaVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea, textareaVariants }
