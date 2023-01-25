/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			gridTemplateColumns: {
				// Simple 16 column grid
				50: 'repeat(50, minmax(0, 1fr))'
			}
		}
	},
	plugins: []
};
