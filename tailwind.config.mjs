/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: "#54787d",
				secondary: "#6b9997",
				tertiary: "#8ba6ac",
				quaternary: "#C9D8E5",
				background: "#E1F1FE",
			},
			fontFamily: {
				Onest: ["Onest Variable", "sans-serif"],
			}
		},
	},
	plugins: [],
}
