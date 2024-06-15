/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	
	theme: {
		extend: {
			colors: {
				primary:"#428b8f",
				primary2:"5C5C5C",
				accent: "#EBEBEB",
				text1: "#333333",
				text2: "#5C5C5C",
				background: "#FFFFF3",
				background2: "#F5F5E9",
				background3: "#CCCCC0",
			},
			fontFamily: {
				Onest: ["Onest Variable", "sans-serif"],
			},

		},
		
	},
	plugins: [animations],
}
//112A46