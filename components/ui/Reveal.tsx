"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

const distanceMap: Record<Direction, [number, number]> = {
  up: [0, 28],
  down: [0, -28],
  left: [28, 0],
  right: [-28, 0],
  none: [0, 0],
};

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className,
  once = true,
  scale = false,
}: {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  scale?: boolean;
}) {
  const shouldReduceMotion = useReducedMotion();
  const [x, y] = distanceMap[direction];

  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: shouldReduceMotion ? 0 : x,
      y: shouldReduceMotion ? 0 : y,
      scale: scale && !shouldReduceMotion ? 0.94 : 1,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: { duration: shouldReduceMotion ? 0.01 : duration, delay: shouldReduceMotion ? 0 : delay, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

/** Stagger container for lists of Reveal-able children */
export function RevealGroup({
  children,
  className,
  stagger = 0.08,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ staggerChildren: shouldReduceMotion ? 0 : stagger }}
    >
      {children}
    </motion.div>
  );
}
