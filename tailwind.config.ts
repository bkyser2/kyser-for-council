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
        // Vercel-inspired greyscale base
        background: "#000000",
        foreground: "#ededed",
        muted: "#a1a1a1",
        border: "#1f1f1f",
        accent: "#ffffff",
        // Patriotic accents (US red/white/blue on Vercel-black)
        // `brand` is the primary accent (federal blue).
        // `brand-red` is the secondary accent, used sparingly.
        // Change these two hexes to re-theme the whole site.
        brand: "#3b6cf6",
        "brand-red": "#e11d48",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        // Blue glow on the left, red glow on the right — evokes a flag
        // without ever showing one literally.
        "grid-fade":
          "radial-gradient(ellipse at 30% 0%, rgba(59,108,246,0.18), transparent 55%), radial-gradient(ellipse at 75% 10%, rgba(225,29,72,0.12), transparent 55%)",
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
