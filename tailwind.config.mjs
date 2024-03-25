/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'fancy': ['Allenoire'],
			'plain': ['Novecento'],
			'normal': ['system-ui', 'sans-serif']
		},
		extend: {
			colors: {
				'wedding-cream': '#f9f5ec',
				'wedding-purple': '#94838b'
			},
		},
	},
	plugins: [
		require('@tailwindcss/forms')
	],
}
