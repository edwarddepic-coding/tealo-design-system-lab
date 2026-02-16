import type { ElementType, HTMLAttributes } from "react";
import styles from "./Text.module.css";

export type TextVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "bodyM"
  | "bodyS"
  | "bodyXs"
  | "button"
  | "label"
  | "caption";

const variantClass: Record<TextVariant, string> = {
  h1: styles.h1,
  h2: styles.h2,
  h3: styles.h3,
  h4: styles.h4,
  bodyM: styles.bodyM,
  bodyS: styles.bodyS,
  bodyXs: styles.bodyXs,
  button: styles.button,
  label: styles.label,
  caption: styles.caption,
};

const defaultElement: Record<TextVariant, ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  bodyM: "p",
  bodyS: "p",
  bodyXs: "p",
  button: "span",
  label: "span",
  caption: "span",
};

export interface TextProps extends HTMLAttributes<HTMLElement> {
  variant?: TextVariant;
  as?: ElementType;
  children: React.ReactNode;
}

export function Text({
  variant = "bodyM",
  as,
  className = "",
  children,
  ...rest
}: TextProps) {
  const Component: ElementType = as ?? defaultElement[variant];
  const rootClass = [variantClass[variant], className].filter(Boolean).join(" ");

  return (
    <Component className={rootClass} {...rest}>
      {children}
    </Component>
  );
}
