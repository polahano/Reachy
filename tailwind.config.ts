import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", sm: "2rem", lg: "3rem", xl: "4rem" },
    },
    extend: {
      colors: {
        // Deep navy background system — extracted from the Reachy brand's dark backgrounds
        navy: {
          50: "#E9EDFB",
          100: "#CBD3F6",
          200: "#A0AEEE",
          300: "#6C81E5",
          400: "#2F4EDA",
          500: "#1631AC",
          600: "#10247F",
          700: "#0C1A5A",
          800: "#08123F",
          850: "#060E30",
          900: "#050C29",
          950: "#03050F",
        },
        // Primary — extracted directly from the "RE" of the Reachy wordmark
        brand: {
          blue: {
            50: "#EBF6FE",
            100: "#D3EBFD",
            200: "#ACDAFB",
            300: "#80C6F9",
            400: "#4FB1F7",
            500: "#0593FA",
            600: "#0075D6",
            700: "#005EAD",
            800: "#004884",
            900: "#00335E",
          },
          // Secondary — extracted from the "ACH" gradient core
          purple: {
            50: "#FAECFE",
            100: "#F3D4FC",
            200: "#E9AFF9",
            300: "#DD84F5",
            400: "#D055F2",
            500: "#C92CF4",
            600: "#A916D6",
            700: "#8710AC",
            800: "#650B82",
            900: "#470760",
          },
          // Accent — extracted from the "Y" + arrow tip
          orange: {
            50: "#FEF2EB",
            100: "#FDE1D3",
            200: "#FBC6AC",
            300: "#F9A780",
            400: "#F7864F",
            500: "#FB7A3C",
            600: "#E85A15",
            700: "#BC4610",
            800: "#90340C",
            900: "#6B2508",
          },
          // Electric indigo — sampled from Reachy's CTA panels, used for solid gradient buttons/glow
          indigo: {
            400: "#5B3EF5",
            500: "#3217F0",
            600: "#2610C4",
            700: "#1D0C99",
          },
        },
        ink: {
          DEFAULT: "#020B33",
          muted: "#AEB4CE",
          soft: "#7C82A3",
        },
      },
      fontFamily: {
        arabic: ["var(--font-arabic)", "Tahoma", "sans-serif"],
        en: ["var(--font-en)", "Inter", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(90deg, #0593FA 0%, #5B3EF5 35%, #C92CF4 65%, #FB7A3C 100%)",
        "brand-gradient-vertical": "linear-gradient(180deg, #0593FA 0%, #5B3EF5 35%, #C92CF4 65%, #FB7A3C 100%)",
        "brand-radial-glow": "radial-gradient(circle at 50% 50%, rgba(89,62,245,0.35) 0%, rgba(10,15,45,0) 70%)",
        "aurora-1": "radial-gradient(circle, rgba(5,147,250,0.35) 0%, rgba(5,147,250,0) 70%)",
        "aurora-2": "radial-gradient(circle, rgba(201,44,244,0.30) 0%, rgba(201,44,244,0) 70%)",
        "aurora-3": "radial-gradient(circle, rgba(251,122,60,0.25) 0%, rgba(251,122,60,0) 70%)",
        "glass-sheen": "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 60%)",
      },
      boxShadow: {
        glow: "0 0 60px -12px rgba(89,62,245,0.55)",
        "glow-orange": "0 0 60px -12px rgba(251,122,60,0.45)",
        "glow-sm": "0 0 24px -6px rgba(89,62,245,0.45)",
        card: "0 8px 40px -12px rgba(3,5,20,0.55)",
      },
      backdropBlur: { xs: "2px" },
      keyframes: {
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(var(--tilt, 0deg))" },
          "50%": { transform: "translateY(-18px) rotate(var(--tilt, 0deg))" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-rtl": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(50%)" },
        },
        "draw-line": {
          "0%": { strokeDashoffset: "1" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      animation: {
        "gradient-shift": "gradient-shift 8s ease infinite",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 8s ease-in-out infinite",
        "spin-slow": "spin-slow 18s linear infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        marquee: "marquee 32s linear infinite",
        "marquee-rtl": "marquee-rtl 32s linear infinite",
      },
      backgroundSize: {
        "300%": "300% 300%",
      },
    },
  },
  plugins: [require("tailwindcss-rtl")],
};

export default config;
