<script context="module">
	const list = Object.entries(import.meta.globEager('/work-packages/**/*.md'))
		.map(([filepath, post]) => {
			return {
				...post.metadata,
				slug: filepath
					.replace(/(\/index)?\.md/, '')
					.split('/')
					.pop(),
				component: post.default
			};
		})
		.sort((a, b) => a.index - b.index);

	export async function load({ params, fetch }) {
		const { slug } = params;
		const wp = list.find((post) => slug === post.slug);
		if (!wp) {
			return {
				status: 404,
				error: 'Work packages not found'
			};
		}
		return {
			props: { ...wp }
		};
	}
</script>

<script>
	import { page } from '$app/stores';
	// import { name, website } from '$lib/info'

	export let component;
	// metadata
	export let title;
	export let slug;
	export let index;
</script>

<h1>{title}</h1>
<svelte:component this={component} />
