import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        mono: ['Share Tech Mono', 'monospace'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          glow: "hsl(var(--primary-glow))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        energy: {
          cyan: "hsl(var(--energy-cyan))",
          blue: "hsl(var(--energy-blue))",
          purple: "hsl(var(--energy-purple))",
          green: "hsl(var(--energy-green))",
        },
        grid: {
          line: "hsl(var(--grid-line))",
          node: "hsl(var(--grid-node))",
          pulse: "hsl(var(--grid-pulse))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-glow": {
          "0%, 100%": { 
            opacity: "0.4",
            boxShadow: "0 0 5px hsl(var(--primary)), 0 0 10px hsl(var(--primary) / 0.3)"
          },
          "50%": { 
            opacity: "1",
            boxShadow: "0 0 20px hsl(var(--primary)), 0 0 40px hsl(var(--primary) / 0.5)"
          },
        },
        "energy-pulse": {
          "0%": { 
            transform: "translateX(-100%)",
            opacity: "0"
          },
          "50%": { 
            opacity: "1"
          },
          "100%": { 
            transform: "translateX(100%)",
            opacity: "0"
          },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "rotate-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "spark": {
          "0%, 100%": { 
            opacity: "0",
            transform: "scale(0.5)"
          },
          "50%": { 
            opacity: "1",
            transform: "scale(1)"
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "energy-pulse": "energy-pulse 2s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "rotate-slow": "rotate-slow 20s linear infinite",
        "shimmer": "shimmer 3s linear infinite",
        "spark": "spark 0.5s ease-out",
      },
      backgroundImage: {
        "grid-gradient": "radial-gradient(ellipse at center, hsl(var(--primary) / 0.1) 0%, transparent 70%)",
        "energy-gradient": "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%)",
        "card-gradient": "linear-gradient(180deg, hsl(var(--card)) 0%, hsl(var(--background)) 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
