import adapter from '@sveltejs/adapter-auto';
import autoPreprocess from 'svelte-preprocess';
import typescript from '@rollup/plugin-typescript';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		autoPreprocess({
			postcss: true,
			preserve: ['module']
		})
	],
	
	kit: {
		adapter: adapter()	
	},
	
	
};

export default config;
