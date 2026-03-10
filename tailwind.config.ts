import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "crt-dark": "var(--bg-dark)",
        "crt-surface": "var(--bg-surface)",
        "crt-card": "var(--bg-card)",
        "phosphor-green": "var(--phosphor-green)",
        "phosphor-green-dim": "var(--phosphor-green-dim)",
        "crt-blue": "var(--crt-blue)",
        "terminal-primary": "var(--text-primary)",
        "terminal-secondary": "var(--text-secondary)",
        "terminal-muted": "var(--text-muted)",
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        "fade-up": "fadeInUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        marquee: "marquee 40s linear infinite",
        blink: "blink 1s step-end infinite",
        scanSweep: "scanSweep 8s linear infinite",
        floatUp: "floatUp 4s ease-in-out infinite",
        flicker: "flicker 0.15s infinite",
        glitch: "glitch 2s linear infinite",
        "glitch-2": "glitch-2 2.5s linear infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        scanSweep: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        floatUp: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        flicker: {
          "0%": { opacity: "0.95" },
          "50%": { opacity: "0.85" },
          "100%": { opacity: "1" },
        },
        glitch: {
          "2%, 64%": { transform: "translate(2px, 0) skew(0deg)", clipPath: "inset(50% 0 30% 0)" },
          "4%, 60%": { transform: "translate(-2px, 0) skew(0deg)", clipPath: "inset(10% 0 60% 0)" },
          "62%": { transform: "translate(0, 0) skew(5deg)", clipPath: "inset(80% 0 5% 0)" },
        },
        "glitch-2": {
          "2%, 64%": { transform: "translate(-2px, 0) skew(0deg)", clipPath: "inset(20% 0 80% 0)" },
          "4%, 60%": { transform: "translate(2px, 0) skew(0deg)", clipPath: "inset(60% 0 10% 0)" },
          "62%": { transform: "translate(0, 0) skew(-5deg)", clipPath: "inset(40% 0 40% 0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
