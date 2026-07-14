import { cn } from "@/lib/utils";
import type { ReactNode, ElementType } from "react";

export function GradientText({
  children,
  as: Tag = "span",
  animated = false,
  className,
}: {
  children: ReactNode;
  as?: ElementType;
  animated?: boolean;
  className?: string;
}) {
  return (
    <Tag className={cn(animated ? "text-gradient-brand-animated" : "text-gradient-brand", className)}>
      {children}
    </Tag>
  );
}
