"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { PortfolioItem } from "@/content/portfolio";
import { portfolioCategoryLabels } from "@/content/portfolio";
import type { Dictionary, Locale } from "@/lib/i18n/types";

export function Lightbox({
  items,
  activeIndex,
  onClose,
  onNavigate,
  locale,
  dict,
}: {
  items: PortfolioItem[];
  activeIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
  locale: Locale;
  dict: Dictionary;
}) {
  const touchStartX = useRef<number | null>(null);
  const isOpen = activeIndex !== null;
  const item = isOpen ? items[activeIndex] : null;

  const isRTL = locale === "ar";

  const goNext = () => {
    if (activeIndex === null) return;
    onNavigate((activeIndex + 1) % items.length);
  };
  const goPrev = () => {
    if (activeIndex === null) return;
    onNavigate((activeIndex - 1 + items.length) % items.length);
  };

  useEffect(() => {
    if (!isOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") isRTL ? goPrev() : goNext();
      if (e.key === "ArrowLeft") isRTL ? goNext() : goPrev();
    }
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, activeIndex, isRTL]);

  if (!item) return null;

  const related = items.filter((p) => p.category === item.category && p.slug !== item.slug).slice(0, 4);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-navy-950/95 backdrop-blur-xl"
          role="dialog"
          aria-modal="true"
          aria-label={item.title[locale]}
          onClick={onClose}
          onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchStartX.current === null) return;
            const delta = e.changedTouches[0].clientX - touchStartX.current;
            if (Math.abs(delta) > 50) {
              const swipedLeft = delta < 0;
              if (swipedLeft) (isRTL ? goPrev() : goNext());
              else (isRTL ? goNext() : goPrev());
            }
            touchStartX.current = null;
          }}
        >
          <button
            onClick={onClose}
            aria-label={dict.portfolio.close}
            className="absolute top-5 end-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:bg-white/10"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            aria-label="Previous"
            className="absolute start-3 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:bg-white/10 sm:flex"
          >
            <ChevronLeft className="h-6 w-6 rtl:rotate-180" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            aria-label="Next"
            className="absolute end-3 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:bg-white/10 sm:flex"
          >
            <ChevronRight className="h-6 w-6 rtl:rotate-180" />
          </button>

          <motion.div
            key={item.slug}
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="mx-4 flex max-h-[88vh] w-full max-w-5xl flex-col overflow-y-auto rounded-3xl border border-white/10 bg-navy-900/90 sm:flex-row"
          >
            <div className="relative h-[45vh] w-full shrink-0 sm:h-auto sm:w-1/2">
              <Image src={item.image} alt={item.title[locale]} fill sizes="600px" className="object-cover" />
            </div>
            <div className="flex flex-1 flex-col gap-4 p-6 sm:p-8">
              <span className="inline-flex w-fit items-center rounded-full border border-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-purple-200">
                {portfolioCategoryLabels[item.category][locale]}
              </span>
              <h3 className="text-2xl font-extrabold sm:text-3xl">{item.title[locale]}</h3>
              <p className="text-sm font-semibold text-brand-blue-200">{item.client[locale]}</p>
              <p className="text-sm leading-relaxed text-ink-muted">{item.description[locale]}</p>

              {related.length > 0 && (
                <div className="mt-4 border-t border-white/10 pt-5">
                  <p className="mb-3 text-xs font-bold uppercase tracking-wider text-ink-soft">{dict.portfolio.related}</p>
                  <div className="grid grid-cols-4 gap-2">
                    {related.map((r) => (
                      <button
                        key={r.slug}
                        onClick={() => onNavigate(items.findIndex((p) => p.slug === r.slug))}
                        className="relative aspect-square overflow-hidden rounded-lg transition-opacity hover:opacity-80"
                        aria-label={r.title[locale]}
                      >
                        <Image src={r.image} alt="" fill sizes="120px" className="object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
