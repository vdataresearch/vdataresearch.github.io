import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import { viteStaticCopy } from 'vite-plugin-static-copy';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	preprocess: [mdsvex(mdsvexConfig), preprocess()],
	kit: {
		adapter: adapter(),
		trailingSlash: 'always',
		prerender: {
			entries: ['*'],
			crawl: true,
			onError: 'continue'
		},

		vite: {
			// allows vite access to ./posts
			server: {
				fs: {
					allow: ['./']
				}
			},
			plugins: [
				viteStaticCopy({
					targets: [
						{
							src: ['outputs/**/*.{pdf,xls}'],
							dest: '../'
						}
					]
				})
			]
		}
	}
};

export default config;
