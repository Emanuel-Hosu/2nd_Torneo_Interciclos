/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		fontFamily: {
		  josefin: ['Josefin Sans', 'sans-serif'], // Añadimos Josefin Sans
		  arvo: ['Arvo', 'serif'], // También dejamos Arvo configurado
		},
	  },
	},
	plugins: [],
  };
  