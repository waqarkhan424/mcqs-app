// tailwind.config.ts
import { type Config } from "tailwindcss";

const config: Config = {
    // 1. Tell Tailwind where to look for class names:
    content: [
        "./app/**/*.{ts,tsx,js,jsx}",
        "./components/**/*.{ts,tsx,js,jsx}",
        "./lib/**/*.{ts,tsx,js,jsx}"
    ],

    // 2. Extend default theme with your custom colors, radii, font sizes, etc.
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#3B82F6", // calm blue
                    light: "#60A5FA",   // hover / lighter
                    dark: "#1E40AF",    // active / darker
                },
                accent: {
                    DEFAULT: "#FBBF24", // warm amber
                    dark: "#D97706",
                },
                neutral: {
                    50: "#F9FAFB",
                    100: "#F3F4F6",
                    200: "#E5E7EB",
                    700: "#374151",
                    900: "#111827",
                },
            },
            borderRadius: {
                md: "0.375rem", // default “md”
                lg: "0.75rem",  // cards & buttons
                xl: "1rem",
            },
            fontSize: {
                "heading-lg": ["1.875rem", { lineHeight: "2.25rem" }], // ~30px
                "heading-md": ["1.5rem", { lineHeight: "2rem" }],     // ~24px
                "heading-sm": ["1.25rem", { lineHeight: "1.75rem" }],  // ~20px
            },
            spacing: {
                "72": "18rem", // optional large spacing
                "84": "21rem",
            },
        },
    },
    plugins: [],
};

export default config;
