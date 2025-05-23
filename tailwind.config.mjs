/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		extend: {
			fontFamily: {
				'main': ['Kirang Haerang', 'system-ui'],
				'secondary': ['Nunito', 'Helvetica', 'sans-serif']
			},
			borderWidth: {
				'light' : '0.5px'
			},
      maskImage: {
        wave: "url('/public/images/wave-mask.svg')",
      },
      maskSize: {
        cover: '100% 100%',
      },
      maskRepeat: {
        'no-repeat': 'no-repeat',
      },
      screens: {
        'xs': '22rem',
      },
		},
		colors: {
			'backgroundColor': '#FBF6E9',
			'mainColor': '#161179',
			'accentColor': '#D61E1B',
      'opacityAccentColor': 'rgba(214,30,27,0.1)',
		},
	},
	plugins: [
		require('flowbite/plugin'),
		require('tailwindcss-animated'),
		require('@tailwindcss/aspect-ratio'),
    function ({ addUtilities, theme }) {
      const masks = theme('maskImage');
      const newUtils = Object.entries(masks).map(([name, url]) => {
        return [`.mask-${name}`, { maskImage: url, WebkitMaskImage: url }];
      });
      addUtilities(Object.fromEntries(newUtils));
    },
	],
}
