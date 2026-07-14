"use client";

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Marquee({
  children,
  className,
  reverse = false,
}: {
  children: ReactNode;
  className?: string;
  reverse?: boolean;
}) {
  return (
    <div className={cn("group relative flex overflow-hidden", className)} style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}>
      <div className={cn("flex shrink-0 items-center gap-16 pe-16 group-hover:[animation-play-state:paused]", reverse ? "animate-marquee-rtl" : "animate-marquee")}>
        {children}
      </div>
      <div className={cn("flex shrink-0 items-center gap-16 pe-16 group-hover:[animation-play-state:paused]", reverse ? "animate-marquee-rtl" : "animate-marquee")} aria-hidden="true">
        {children}
      </div>
    </div>
  );
}
