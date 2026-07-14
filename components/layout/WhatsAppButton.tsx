"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/i18n";

export function WhatsAppButton({ tooltip, message }: { tooltip: string; message: string }) {
  const [hovered, setHovered] = useState(false);
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-5 end-5 z-50 flex items-center gap-3">
      <span
        role="tooltip"
        className={`hidden rounded-full bg-navy-900/95 px-3.5 py-2 text-sm font-medium text-white shadow-card backdrop-blur transition-all duration-300 sm:block ${
          hovered ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-2 rtl:-translate-x-2 opacity-0"
        }`}
      >
        {tooltip}
      </span>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-label={tooltip}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_-6px_rgba(37,211,102,0.65)] transition-transform duration-300 hover:scale-110 active:scale-95"
      >
        <span className="absolute inset-0 animate-pulse-glow rounded-full bg-[#25D366]/50 blur-md" aria-hidden="true" />
        <MessageCircle className="relative h-7 w-7" fill="white" strokeWidth={0} aria-hidden="true" />
      </a>
    </div>
  );
}
