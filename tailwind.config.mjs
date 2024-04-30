/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	
	theme: {
		extend: {
			colors: {
				primary: "#54787d",
				primary_alt: "#3B535A",
				secondary: "#6b9997",
				secondary_alt: "#375453",
				tertiary: "#8ba6ac",
				tertiary_alt: "#516265",
				quaternary: "#C9D8E5",
				quaternary_alt: "#283F53",
				quinary: "#32494d",
				background: "#f8f8ec",
				background_dark: "#121212",
			},
			fontFamily: {
				Onest: ["Onest Variable", "sans-serif"],
			},

		},
		
	},
	plugins: [animations],
}
//112A46