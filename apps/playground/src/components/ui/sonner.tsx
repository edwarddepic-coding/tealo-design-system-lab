import * as React from "react"
import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="light"
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-[var(--tealo-neutral-50)] group-[.toaster]:text-[var(--tealo-neutral-900)] group-[.toaster]:border-[var(--tealo-neutral-300)] group-[.toaster]:shadow-[var(--tealo-shadow-md)] group-[.toaster]:rounded-[var(--tealo-radius-12)]",
          description: "group-[.toast]:text-[var(--tealo-neutral-600)]",
          actionButton:
            "group-[.toast]:bg-[var(--tealo-teal-600)] group-[.toast]:text-[var(--tealo-neutral-50)] group-[.toast]:rounded-[var(--tealo-radius-8)]",
          cancelButton:
            "group-[.toast]:bg-[var(--tealo-neutral-200)] group-[.toast]:text-[var(--tealo-neutral-800)] group-[.toast]:rounded-[var(--tealo-radius-8)]",
          success:
            "group-[.toaster]:border-[var(--tealo-teal-500)] group-[.toaster]:ring-1 group-[.toaster]:ring-[var(--tealo-teal-500)]",
          error:
            "group-[.toaster]:border-[var(--tealo-error-500)] group-[.toaster]:ring-1 group-[.toaster]:ring-[var(--tealo-error-500)]",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
