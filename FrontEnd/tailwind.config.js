/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.svelte', 'node_modules/preline/dist/*.js'],
	theme: {
		extend: {}
	},
	plugins: [require('preline/plugin', 'daisyui')]
};
