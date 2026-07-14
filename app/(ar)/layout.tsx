import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans_Arabic, Inter } from "next/font/google";
import "@/app/globals.css";

import { getDictionary } from "@/lib/i18n";
import { buildMetadata, organizationJsonLd } from "@/lib/metadata";
import { AmbientBackground } from "@/components/layout/AmbientBackground";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";
import { LocaleTracker } from "@/components/layout/LocaleTracker";
import { LoadingScreen } from "@/components/layout/LoadingScreen";

const arabicFont = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-arabic",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-en",
  display: "swap",
});

const dict = getDictionary("ar");

export const metadata: Metadata = buildMetadata({
  locale: "ar",
  title: `ريتشي | ${dict.hero.headline} ${dict.hero.headlineHighlight}`,
  description: dict.meta.defaultDescription,
});

export const viewport: Viewport = {
  themeColor: "#03050F",
  width: "device-width",
  initialScale: 1,
};

export default function ArabicLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = organizationJsonLd("ar");

  return (
    <html lang="ar" dir="rtl" className={`${arabicFont.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="font-arabic">
        <a href="#main-content" className="skip-link">
          تخطَّ إلى المحتوى الرئيسي
        </a>
        <LocaleTracker locale="ar" />
        <LoadingScreen />
        <AmbientBackground />
        <SmoothScrollProvider>
          <div className="relative z-10">
            <Navbar locale="ar" dict={dict} />
            <main id="main-content">{children}</main>
            <Footer locale="ar" dict={dict} />
          </div>
        </SmoothScrollProvider>
        <WhatsAppButton tooltip={dict.whatsapp.tooltip} message={dict.whatsapp.defaultMessage} />
      </body>
    </html>
  );
}
