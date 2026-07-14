"use client";

import { cn } from "@/lib/utils";
import type { ReactNode, MouseEvent } from "react";
import { useRef } from "react";

export function GlassCard({
  children,
  className,
  tilt = false,
  glow = "purple",
  id,
}: {
  children: ReactNode;
  className?: string;
  tilt?: boolean;
  glow?: "purple" | "blue" | "orange" | "none";
  id?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (!tilt || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    ref.current.style.setProperty("--rx", `${(-py * 6).toFixed(2)}deg`);
    ref.current.style.setProperty("--ry", `${(px * 6).toFixed(2)}deg`);
  }

  function handleMouseLeave() {
    if (!tilt || !ref.current) return;
    ref.current.style.setProperty("--rx", "0deg");
    ref.current.style.setProperty("--ry", "0deg");
  }

  const glowClass =
    glow === "purple"
      ? "hover:shadow-glow"
      : glow === "blue"
      ? "hover:shadow-[0_0_60px_-12px_rgba(5,147,250,0.5)]"
      : glow === "orange"
      ? "hover:shadow-glow-orange"
      : "";

  return (
    <div
      ref={ref}
      id={id}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={tilt ? { transform: "perspective(1000px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))", transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1)" } : undefined}
      className={cn(
        "glass glass-sheen noise-overlay rounded-2xl transition-shadow duration-500",
        glowClass,
        className
      )}
    >
      {children}
    </div>
  );
}
