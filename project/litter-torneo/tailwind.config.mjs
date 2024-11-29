/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		fontFamily: {
			niramit: ['Niramit', 'serif'],
			staatliches: ['Staatliches', 'sans-serif'],
		},
	  },
	},
	plugins: [],
  };
