import type { Config } from "tailwindcss";

export default {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				// Background colors
				bg: {
					primary: "hsl(var(--bg-primary))",
					secondary: "hsl(var(--bg-secondary))",
					tertiary: "hsl(var(--bg-tertiary))",
					elevated: "hsl(var(--bg-elevated))",
				},
				// Text colors
				text: {
					primary: "hsl(var(--text-primary))",
					secondary: "hsl(var(--text-secondary))",
					muted: "hsl(var(--text-muted))",
				},
				// Terminal colors
				term: {
					green: "hsl(var(--term-green))",
					cyan: "hsl(var(--term-cyan))",
					yellow: "hsl(var(--term-yellow))",
					red: "hsl(var(--term-red))",
					purple: "hsl(var(--term-purple))",
					blue: "hsl(var(--term-blue))",
					orange: "hsl(var(--term-orange))",
					pink: "hsl(var(--term-pink))",
				},
				// Accent colors
				accent: {
					primary: "hsl(var(--accent-primary))",
					secondary: "hsl(var(--accent-secondary))",
				},
				border: "hsl(var(--border))",
				ring: "hsl(var(--ring))",
			},
			fontFamily: {
				mono: ["JetBrains Mono", "Fira Code", "Consolas", "monospace"],
				sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
			},
			animation: {
				"fade-in": "fade-in 0.5s ease-out forwards",
				"slide-up": "slide-up 0.6s ease-out forwards",
				"slide-down": "slide-down 0.4s ease-out forwards",
				"scale-in": "scale-in 0.4s ease-out forwards",
				"blink": "blink 1s step-end infinite",
				"pulse-status": "pulse-status 2s infinite",
			},
			keyframes: {
				"fade-in": {
					from: { opacity: "0" },
					to: { opacity: "1" },
				},
				"slide-up": {
					from: { opacity: "0", transform: "translateY(20px)" },
					to: { opacity: "1", transform: "translateY(0)" },
				},
				"slide-down": {
					from: { opacity: "0", transform: "translateY(-10px)" },
					to: { opacity: "1", transform: "translateY(0)" },
				},
				"scale-in": {
					from: { opacity: "0", transform: "scale(0.95)" },
					to: { opacity: "1", transform: "scale(1)" },
				},
				"blink": {
					"0%, 100%": { opacity: "1" },
					"50%": { opacity: "0" },
				},
				"pulse-status": {
					"0%, 100%": { opacity: "1" },
					"50%": { opacity: "0.5" },
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
		},
	},
	plugins: [],
} satisfies Config;