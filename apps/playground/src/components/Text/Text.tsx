import type { ElementType, HTMLAttributes } from "react";
import styles from "./Text.module.css";

type Shade = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950;

export type TextColor = `teal-${Shade}` | `neutral-${Shade}`;

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
  color?: TextColor;
  children: React.ReactNode;
}

export function Text({
  variant = "bodyM",
  as,
  color,
  className = "",
  children,
  style,
  ...rest
}: TextProps) {
  const Component: ElementType = as ?? defaultElement[variant];
  const rootClass = [variantClass[variant], className].filter(Boolean).join(" ");
  const colorStyle = color ? { color: `var(--tealo-${color})` } : undefined;
  const combinedStyle = style || colorStyle ? { ...colorStyle, ...style } : undefined;

  return (
    <Component className={rootClass} style={combinedStyle} {...rest}>
      {children}
    </Component>
  );
}
