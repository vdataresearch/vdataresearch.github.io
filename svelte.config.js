import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	preprocess: [mdsvex(mdsvexConfig), preprocess()],
	kit: {
		adapter: adapter(),
		prerender: {
			entries: ['*']
		},

		vite: {
			// allows vite access to ./posts
			server: {
				fs: {
					allow: ['./']
				}
			}
		}
	}
};

export default config;
