"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ReactNode, ButtonHTMLAttributes } from "react";
import { ArrowUpRight } from "lucide-react";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "md" | "lg" | "sm";

interface CommonProps {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
  showArrow?: boolean;
}

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 whitespace-nowrap";

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3.5 text-[15px]",
  lg: "px-8 py-4 text-base",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-gradient-animated text-white shadow-glow hover:shadow-[0_0_80px_-8px_rgba(201,44,244,0.65)] hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "glass glass-sheen text-white hover:bg-white/[0.08] hover:-translate-y-0.5 active:translate-y-0",
  outline:
    "border border-white/20 text-white hover:border-brand-orange-400 hover:text-brand-orange-300 hover:-translate-y-0.5",
  ghost: "text-white/80 hover:text-white hover:bg-white/5",
};

export function Button({
  href,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  children,
  className,
  showArrow = false,
  disabled,
  ...rest
}: CommonProps & {
  href?: string;
  onClick?: () => void;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  disabled?: boolean;
}) {
  const classes = cn(base, sizes[size], variants[variant], disabled && "pointer-events-none opacity-60", className);
  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowUpRight
          className="h-4 w-4 shrink-0 rtl:-scale-x-100 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes} {...rest}>
      {content}
    </button>
  );
}
