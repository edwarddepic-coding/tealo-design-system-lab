import type { ButtonHTMLAttributes } from "react";
import { Text } from "../Text";
import styles from "./Button.module.css";

export type ButtonSize = "xs" | "s" | "m" | "l";
export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
}

const sizeClass: Record<ButtonSize, string> = {
  xs: styles.buttonXs,
  s: styles.buttonS,
  m: styles.buttonM,
  l: styles.buttonL,
};

const variantClass: Record<ButtonVariant, string> = {
  primary: styles.primary,
  secondary: styles.secondary,
  outline: styles.outline,
  ghost: styles.ghost,
};

export function Button({
  variant = "primary",
  size = "m",
  disabled = false,
  className = "",
  children,
  ...rest
}: ButtonProps) {
  const rootClass = [
    styles.button,
    variantClass[variant],
    sizeClass[size],
    disabled && styles.disabled,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button type="button" className={rootClass} disabled={disabled} {...rest}>
      <Text variant="button">{children}</Text>
    </button>
  );
}
