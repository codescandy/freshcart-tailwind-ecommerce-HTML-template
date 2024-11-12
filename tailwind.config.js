/** @type {import('tailwindcss').Config} */

module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.html'],
	theme: {
		container: {
			center: true,
			padding: '1rem',
			screens: {
				'2xl': '1320px',
			},
		},
		fontFamily: {
			sans: ['"Inter", sans-serif'],
		},
		fontSize: {
			sm: '0.75rem',
			base: '0.875rem',
			md: '1.125rem',
			lg: '1.5rem',
			xl: '1.75rem',
			'2xl': '2rem',
			'3xl': '2.5rem',
			'4xl': '2.441rem',
			'5xl': '3.052rem',
		},

		extend: {
			flex: {
				0: '0 0 auto',
			},

			colors: {
				white: '#ffffff',
				gray: {
					50: '#F9F9F9',
					100: '#f0f3f2',
					200: '#ecf0ef',
					300: '#dfe2e1',
					400: '#c1c7c6',
					500: '#889397',
					600: '#5c6c75',
					700: '#3d4f58',
					800: '#21313c',
					900: '#001e2b',
					950: '#00131C',
				},
				green: {
					50: '#e8ffe6',
					100: '#cefdca',
					200: '#a2fb9b',
					300: '#68f561',
					400: '#37ea31',
					500: '#16d012',
					600: '#0aad0a',
					700: '#0d7e0f',
					800: '#106412',
					900: '#135416',
					950: '#042f07',
				},
			},
			maxWidth: {
				'screen-xs': '300px',
			},
		},
	},
	variants: {},
	plugins: [
		require('@tailwindcss/forms')({
			strategy: 'base', // only generate global styles
		}),
		require('@tailwindcss/typography'),
	],
};
