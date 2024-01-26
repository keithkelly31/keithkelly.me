import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		csp: {
			directives: {
				'script-src': ['self', 'unsafe-inline'],
				'object-src': ['none'],
				'base-uri': ['self']
			}
		}
	}
};

export default config;
