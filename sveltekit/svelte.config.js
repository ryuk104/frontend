import adapter from '@sveltejs/adapter-node';

import autoPreprocess from 'svelte-preprocess';
import typescript from '@rollup/plugin-typescript';
import cssnano from 'cssnano'
import path from 'path'
import sveltePreprocess from "svelte-preprocess";
import dotenv from 'dotenv';
import autoprefixer from 'autoprefixer'

dotenv.config();

const rootDomain = process.env["VITE_DOMAIN"]; // or your server IP for dev
const originURL = process.env["VITE_SITE_URL"]; // or your server IP for dev

const check = process.env.NODE_ENV
const dev = process.env.NODE_ENV === 'development'


/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: sveltePreprocess({
		preserve: ['module'],
		sass: false,
		scss: {
			includePaths: ["src"],
			prependData: '@import "src/global/stylesheet/base/_variables.scss";',
			renderSync: true
		},
		postcss: {
			plugins: [cssnano({ preset: 'cssnano-preset-default' }), autoprefixer({})]
		},
		}),
	
	
	kit: {
		adapter: adapter(),
        alias: {
            $stores: path.resolve('./src/lib/stores'),
            $api: path.resolve('./src/routes/api'),
            $components: path.resolve('./src/lib/components'),
			$env: path.resolve("./src/env.ts"),
        },
		files: {
			assets: 'static',
			lib: 'src/lib',
			routes: 'src/routes',
			serviceWorker: 'src/service-worker',
			appTemplate: 'src/app.html',
			hooks: { server: 'src/hooks' },
		},
		version: { pollInterval: 600000 }
	},

	onwarn(warning, defaultHandler) {
		if (warning.code === "css-unused-selector") return;

		defaultHandler(warning);
	},
};

export default config;