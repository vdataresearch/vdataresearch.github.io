<script context="module">
	import { slugFromPath } from '$lib/utils';
	export const prerender = true;
	const list = Object.entries(import.meta.globEager('/outputs/**/*.md'));
	const wplist = Object.entries(import.meta.globEager('/work-packages/**/*.md')).map(
		([filepath, post]) => {
			return {
				...post.metadata,
				slug: filepath
					.replace(/(\/index)?\.md/, '')
					.split('/')
					.pop()
			};
		}
	);

	export async function load({ params }) {
		let match;
		for (const [path, resolver] of list) {
			if (slugFromPath(path) === params.slug) {
				match = [path, resolver];
				break;
			}
		}

		if (!match) {
			return {
				status: 404,
				error: new Error('Post could not be found')
			};
		}
		return {
			props: {
				post: {
					...match[1].metadata,
					component: match[1].default
				},
				wps: match[1].metadata.wp.map((d) => {
					const item = wplist.find((w) => w.slug === d);
					return { value: d, label: item.title };
				})
			}
		};
	}
</script>

<script>
	import Head from '$lib/Head.svelte';
	import { page } from '$app/stores';

	export let post;
	export let wps;

	let width
	console.log(page, post, wps)
</script>

<Head path={$page.url.pathname} title={post.title} />
<div class="container">
	<div class="row">
		<div class="col-12 col-md-7">
			<h1 class="display-5 fw-bold">{post.title}</h1>
		</div>
	</div>
	<div class="row border-top border-bottom border-secondary pt-3 my-4">
		{#if post.authors}
			<div class="col-12 col-md-6">
				<h6 class="text-primary fw-bold"><small>Authors</small></h6>
				<p>{post.authors}</p>
			</div>
		{/if}
		<div class="col-12 col-md-6">
			<h6 class="text-primary fw-bold"><small>Work packages</small></h6>
			{#each wps as wp}
				<p class="my-1">{wp.label}</p>
			{/each}
		</div>
	</div>
	<div class="row">
		<div class="col-12 col-md-7">
			<div class="content pb-4">
				<svelte:component this={post.component} />
			</div>
		</div>
	</div>
	{#if post.title.toLowerCase() === "visualizing surveillance capitalism through twitter"}
	<div class="row">
		<div class="col-12">
			<div class="w-100" bind:clientWidth={width}>
				<div class="overflow-hidden" style="height: {width-34}px;">
					<iframe title="visualizing surveillance capitalism through twitter" width="100%" height={width} frameborder="0"  src="https://observablehq.com/embed/e6dffe8a45059229@latest?cells=radialTreew"></iframe>
				</div>
			</div>
		</div>
	</div>
	{/if}
</div>

<style>
	.content :global(img) {
		width: 100%;
		max-height: 70vh;
		margin-bottom: 16px;
	}

	.content :global(img):first-of-type {
		display: none;
	}

	.content :global(h6) {
		color: var(--bs-primary);
		font-weight: bold;
	}

</style>
