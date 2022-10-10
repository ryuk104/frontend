import { sveltekit } from "@sveltejs/kit/vite";
import type { UserConfig } from "vite";
import path from 'path';


/** @type {*} */
/** @type {import('vite').UserConfig} */
const config: UserConfig = { 
    plugins: [sveltekit()],
    legacy: {},
	optimizeDeps: { esbuildOptions: {}, exclude: [''] },
	resolve: {
		alias: {
			'xmlhttprequest-ssl': './node_modules/engine.io-client/lib/xmlhttprequest.js',
			'@api': path.resolve('./src/api')
		}
	},

	build: {
		minify: "esbuild",
		cssTarget: ["chrome58", "edge16", "firefox57", "safari11"],
		dynamicImportVarsOptions: {},
		target: '',
		rollupOptions: {},
	},
	esbuild: { treeShaking: true, minifyWhitespace: true, minifyIdentifiers: true, minifySyntax: true },
	css: {}, 
	worker: {
		plugins: [], format: 'es', rollupOptions: { treeshake: {}, output: {} }
	},

	/*
	define: {
		"process.env.APP_VERSION": JSON.stringify(version_fmt),
	},
	*/
	experimental: {},
};

export default config;



