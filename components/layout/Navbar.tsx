"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { Button } from "@/components/ui/Button";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { navItems, primaryNavKeys } from "@/content/nav";
import { localePath } from "@/lib/i18n";
import type { Dictionary, Locale } from "@/lib/i18n/types";
import { cn } from "@/lib/utils";

export function Navbar({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const pathname = usePathname() || "/";

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const primaryItems = navItems.filter((n) => primaryNavKeys.includes(n.key));
  const moreItems = navItems.filter((n) => n.key !== "home" && !primaryNavKeys.includes(n.key));

  function isActive(path: string) {
    const full = localePath(locale, path);
    return pathname === full || (path !== "" && pathname.startsWith(full));
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled ? "border-b border-white/10 bg-navy-950/80 backdrop-blur-xl" : "bg-transparent"
      )}
    >
      <Container>
        <nav className="flex h-20 items-center justify-between" aria-label="Primary">
          <Link href={localePath(locale, "")} className="flex items-center gap-2 text-2xl font-extrabold tracking-tight">
            <GradientText animated>REACHY</GradientText>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {primaryItems.map((item) => (
              <Link
                key={item.key}
                href={localePath(locale, item.path)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                  isActive(item.path) ? "text-white" : "text-white/65 hover:text-white"
                )}
              >
                {dict.nav[item.key]}
              </Link>
            ))}

            <div className="relative" onMouseEnter={() => setMoreOpen(true)} onMouseLeave={() => setMoreOpen(false)}>
              <button
                className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold text-white/65 transition-colors hover:text-white"
                aria-expanded={moreOpen}
                aria-haspopup="true"
              >
                {locale === "ar" ? "المزيد" : "More"}
                <ChevronDown className={cn("h-4 w-4 transition-transform", moreOpen && "rotate-180")} aria-hidden="true" />
              </button>
              <AnimatePresence>
                {moreOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    className="glass absolute top-full mt-2 min-w-[180px] rounded-2xl p-2 shadow-card"
                    style={{ insetInlineStart: 0 }}
                  >
                    {moreItems.map((item) => (
                      <Link
                        key={item.key}
                        href={localePath(locale, item.path)}
                        className="block rounded-xl px-4 py-2.5 text-sm font-medium text-white/80 transition-colors hover:bg-white/[0.06] hover:text-white"
                      >
                        {dict.nav[item.key]}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <LanguageSwitcher locale={locale} label={dict.nav.langSwitch} />
            <Button href={localePath(locale, "contact")} size="sm">
              {dict.nav.startProject}
            </Button>
          </div>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? dict.portfolio.close : "Menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </Container>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-white/10 bg-navy-950/95 backdrop-blur-xl lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={localePath(locale, item.path)}
                  className={cn(
                    "rounded-xl px-4 py-3.5 text-base font-semibold transition-colors",
                    isActive(item.path) ? "bg-white/[0.06] text-white" : "text-white/70"
                  )}
                >
                  {dict.nav[item.key]}
                </Link>
              ))}
              <div className="mt-2 flex items-center gap-3 px-4">
                <LanguageSwitcher locale={locale} label={dict.nav.langSwitch} />
              </div>
              <Button href={localePath(locale, "contact")} className="mx-4 mt-3">
                {dict.nav.startProject}
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
