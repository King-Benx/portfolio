import adapter from '@sveltejs/adapter-static';

export default {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined
		}),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/portfolio' : ''
		}
	}
};