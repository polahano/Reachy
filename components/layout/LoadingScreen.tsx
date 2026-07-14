"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const SESSION_KEY = "reachy-loaded";

export function LoadingScreen() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
    let already = false;
    try {
      already = window.sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      already = false;
    }

    if (already || shouldReduceMotion) {
      return;
    }

    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
      try {
        window.sessionStorage.setItem(SESSION_KEY, "1");
      } catch {
        /* ignore */
      }
    }, 1500);
    return () => clearTimeout(timer);
  }, [shouldReduceMotion]);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-950"
        >
          <div className="flex flex-col items-center gap-5">
            <svg width="180" height="60" viewBox="0 0 180 60" fill="none" aria-hidden="true">
              <defs>
                <linearGradient id="loader-grad" x1="0" y1="30" x2="180" y2="30" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#0593FA" />
                  <stop offset="0.4" stopColor="#5B3EF5" />
                  <stop offset="0.7" stopColor="#C92CF4" />
                  <stop offset="1" stopColor="#FB7A3C" />
                </linearGradient>
              </defs>
              <motion.text
                x="0"
                y="42"
                fontSize="42"
                fontWeight="800"
                fill="url(#loader-grad)"
                fontFamily="var(--font-en), sans-serif"
                initial={{ opacity: 0, letterSpacing: "0.3em" }}
                animate={{ opacity: 1, letterSpacing: "0em" }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                REACHY
              </motion.text>
            </svg>
            <motion.div
              className="h-[2px] w-24 overflow-hidden rounded-full bg-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <motion.div
                className="h-full w-1/3 bg-brand-gradient"
                initial={{ x: "-120%" }}
                animate={{ x: "220%" }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
