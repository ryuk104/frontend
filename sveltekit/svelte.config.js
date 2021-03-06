import adapter from '@sveltejs/adapter-node';

import autoPreprocess from 'svelte-preprocess';
import typescript from '@rollup/plugin-typescript';
import cssnano from 'cssnano'
import path from 'path'
import sveltePreprocess from 'svelte-preprocess'
import dotenv from 'dotenv';
import autoprefixer from 'autoprefixer'

dotenv.config();

const rootDomain = process.env["VITE_DOMAIN"]; // or your server IP for dev
const originURL = process.env["VITE_SITE_URL"]; // or your server IP for dev

const check = process.env.NODE_ENV
const dev = process.env.NODE_ENV === 'development'


/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		autoPreprocess({
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
		})
	],
	
	kit: {
		adapter: adapter(),
//		csp: {
//			mode: 'nonce',
//			directives: {
//				'base-uri': ['self'],
//				'child-src': ['self'],
//				'connect-src': dev
//					? ['self', 'ws://localhost:*', 'ws://*', 'blob://*', '*', 'ws://localhost:3001']
//					: [
//						'self',
//						'ws://localhost:*',
//						'https://*.googlevideo.com',
//						'wss://*.peerjs.com',
//						'ws://*.peerjs.com',
//						'ws://localhost:3001'
//					],
//				// 'connect-src': ,
//				'img-src': [
//					'self',
//					'data:',
//					'blob:',
//					'https://*.ytimg.com',
//					'https://*.googleusercontent.com',
//					'https://*.ggpht.com',
//					'https://www.gstatic.com/',
//					'https://m.media-amazon.com/',
//					'https://upload.wikimedia.org/',
//					'https://casoca.com.br/media/',
//					'https://projects.iq.harvard.edu/',
//					'https://audio.liberta.vip/media/',
//					'https://centauri-dreams.org/',
//					'https://www.dsac.gov/',
//					'https://images.unsplash.com/',
//					'https://melissasiroisblog.files.wordpress.com/',
//					'https://steamuserimages-a.akamaihd.net/',
//					'http://localhost:3000/',
//					'https://avatars.dicebear.com/',
//					'https://picsum.photos/'
//
//				],
//				'font-src': ['self', 'data:', 'https://fonts.googleapis.com/'],
//				'form-action': ['self'],
//				'frame-ancestors': ['self'],
//				'frame-src': ['self'],
//				'manifest-src': ['self'],
//				'media-src': [
//					'self',
//					'data:',
//					'blob://*',
//					'blob:*',
//					'ws://localhost:*',
//					'localhost:*',
//					'https://*.googlevideo.com',
//					'http://localhost:3000/',
//				],
//				'object-src': ['none'],
//				'style-src': ['self', 'unsafe-inline'],
//				
//				'script-src': [
//					'self',
//					'localhost:*',
//					'sha256-jJRyFHbyYyWq0qnPRIobBCZON4vc+P5RXzYgJ5fHVTg=',
//					'report-sample',
//					'https://static.cloudflareinsights.com'
//				],
//				'worker-src': ['self']
//			}
//		},
	files: {
		assets: 'static',
		lib: 'src/lib',
		routes: 'src/routes',
		serviceWorker: 'src/service-worker',
		template: 'src/app.html',
		hooks: 'src/hooks'
	},
	version: { pollInterval: 600000 },
	vite: {
		resolve: {
			alias: {
				$stores: path.resolve('./src/lib/stores'),
				$api: path.resolve('./src/routes/api'),
				$components: path.resolve('./src/lib/components')
				}
			}
		}
	},
	onwarn(warning, defaultHandler) {
		// don't warn on <marquee> elements, cos they're cool
		if (warning.code === "css-unused-selector") return;

		// handle all other warnings normally
		defaultHandler(warning);
	}
};

export default config;
