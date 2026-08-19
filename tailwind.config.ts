import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content.ts",
  ],
  theme: {
    extend: {
      colors: {
        // Bold raspberry pink background with white text and sky-blue accent.
        // Change these to re-theme the whole site.
        background: "#a33e5c",         // raspberry rose (page background)
        backgroundDeep: "#7d2c46",     // deeper rose for gradient stops
        surface: "#ffffff",            // card / panel background (white)
        surfaceInk: "#0b1e3a",         // navy text used INSIDE white cards
        foreground: "#ffffff",         // body text (white on raspberry)
        muted: "#fbd5e0",              // pale-pink secondary text (7.5:1 contrast)
        border: "rgba(255,255,255,0.18)",   // translucent white borders
        borderStrong: "rgba(255,255,255,0.4)",
        accent: "#ffffff",
        // Primary brand accent. Bright sky blue pops on raspberry pink.
        brand: "#7dd3fc",
        brandHover: "#38bdf8",
        // Deep navy for inside-card CTAs and links (used on white surfaces).
        brandInk: "#1e3a8a",
        // Secondary brand accent used very sparingly (the live-dot ping).
        "brand-red": "#fde68a",         // warm cream that reads as "gold" on pink
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        // Soft light glow behind the hero on the dark raspberry background.
        "grid-fade":
          "radial-gradient(ellipse at 30% 0%, rgba(125,211,252,0.22), transparent 55%), radial-gradient(ellipse at 75% 10%, rgba(255,255,255,0.15), transparent 55%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;

