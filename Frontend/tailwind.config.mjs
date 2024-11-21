/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: { "custom-black": "#242424", "custom-green": "#8dc90e", "custom-green-700": "#7bb00c", "custom-grey": "#f2f2f2" }
		},
	},
	plugins: [],
}
