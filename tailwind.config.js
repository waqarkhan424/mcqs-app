// tailwind.config.js
/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./lib/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3B82F6",
          light: "#60A5FA",
          dark: "#1E40AF",
        },
        accent: {
          DEFAULT: "#FBBF24",
          dark: "#D97706",
        },
        neutral: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          700: "#374151",
          900: "#111827",
        },

        // must be plain strings, not { DEFAULT: … }
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",

        primaryForeground: "var(--primary-foreground)",
        accentForeground: "var(--accent-foreground)",

        muted: "var(--muted)",
        mutedForeground: "var(--muted-foreground)",

        card: "var(--card)",
        cardForeground: "var(--card-foreground)",
        popover: "var(--popover)",
        popoverForeground: "var(--popover-foreground)",

        destructive: "var(--destructive)",
      },
      borderRadius: {
        md: "0.375rem",
        lg: "0.75rem",
        xl: "1rem",
      },
      fontSize: {
        "heading-lg": ["1.875rem", { lineHeight: "2.25rem" }],
        "heading-md": ["1.5rem", { lineHeight: "2rem" }],
        "heading-sm": ["1.25rem", { lineHeight: "1.75rem" }],
      },
      spacing: {
        72: "18rem",
        84: "21rem",
      },
    },
  },
  plugins: [],
};
