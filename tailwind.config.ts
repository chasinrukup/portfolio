import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          base: "#0A0A0B",
          elevated: "#131316",
          hairline: "#1F1F23",
        },
        paper: {
          DEFAULT: "#F5F2EB",
          muted: "#8A8A93",
          dim: "#5A5A63",
        },
        accent: {
          DEFAULT: "#E5654F",
          dim: "#B84E3C",
        },
      },
      fontFamily: {
        serif: ["var(--font-display)", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(4.5rem, 13vw, 13rem)", { lineHeight: "0.88", letterSpacing: "-0.045em" }],
        "display-lg": ["clamp(3rem, 7vw, 6rem)", { lineHeight: "0.95", letterSpacing: "-0.035em" }],
        "display-md": ["clamp(2.25rem, 4.5vw, 3.5rem)", { lineHeight: "1.02", letterSpacing: "-0.025em" }],
        "eyebrow": ["0.6875rem", { lineHeight: "1", letterSpacing: "0.18em" }],
      },
      letterSpacing: {
        tightest: "-0.05em",
      },
      maxWidth: {
        prose: "62ch",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
