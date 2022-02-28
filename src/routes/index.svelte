<script context="module">
	import component, { metadata } from './index.md';

	console.log(metadata);
	export const prerender = true;
	export const load = async ({ fetch }) => {
		return {
			props: {
				meta: metadata,
				content: component
			}
		};
	};
</script>

<script>
	export let content;
	export let meta;
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<svelte:component this={content} />
<p>{@html meta.subtitle}</p>
