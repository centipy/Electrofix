/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#2563EB', // Blue 600 - More vibrant
				'primary-dark': '#1E40AF', // Blue 800
				'secondary': '#F97316', // Orange 500 - More energetic
				'secondary-dark': '#C2410C', // Orange 700
				'background': '#FFFFFF',
				'background-soft': '#F3F4F6', // Gray 100
				'text-primary': '#111827', // Gray 900
				'text-secondary': '#4B5563', // Gray 600
				'success': '#10B981', // Emerald 500
				'warning': '#F59E0B', // Amber 500
			}
		},
	},
	plugins: [],
}
