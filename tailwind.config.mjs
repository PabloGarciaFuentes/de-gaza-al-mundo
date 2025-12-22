/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				"primary": "#931a24",
				"accent-green": "#236E1E",
				"background-light": "#ffffff",
				"background-offwhite": "#f8f6f6",
				"background-dark": "#171212",
				"text-main": "#171212",
				"text-muted": "#6b6b6b",
			},
			fontFamily: {
				"display": ["Inter", "sans-serif"],
				"body": ["Inter", "sans-serif"],
				"sans": ["Inter", "sans-serif"],
			},
			borderRadius: {
				"DEFAULT": "0.375rem",
				"lg": "0.5rem",
				"xl": "0.75rem",
				"2xl": "1rem",
				"full": "9999px"
			},
		},
	},
	plugins: [
		"@tailwindcss/forms",
		"@tailwindcss/container-queries",
	],
}