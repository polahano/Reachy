import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("container-px mx-auto w-full max-w-[1400px]", className)}>{children}</div>;
}
