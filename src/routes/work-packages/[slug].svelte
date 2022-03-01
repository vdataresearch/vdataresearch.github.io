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

	const listTeam = Object.entries(import.meta.globEager('/team/**/*.md')).map(
		([filepath, post]) => {
			return {
				...post.metadata,
				slug: filepath
					.replace(/(\/index)?\.md/, '')
					.split('/')
					.pop(),
				component: post.default
			};
		}
	);

	const listOutputs = Object.entries(import.meta.globEager('/outputs/**/*.md')).map(
		([filepath, post]) => {
			return {
				...post.metadata,
				slug: filepath
					.replace(/(\/index)?\.md/, '')
					.split('/')
					.pop(),
				component: post.default
			};
		}
	);

	export async function load({ params, fetch }) {
		const { slug } = params;
		const wp = list.find((post) => slug === post.slug);
		const wpTeam = listTeam.filter((d) => wp.team.includes(d.slug));
		const wpOutputs = listOutputs.filter((d) => wp.outputs.includes(d.slug));
		if (!wp) {
			return {
				status: 404,
				error: 'Work packages not found'
			};
		}
		return {
			props: { ...wp, team: wpTeam, outputs: wpOutputs }
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
	export let team;
	export let outputs;
	export let goals;

	console.log(team, outputs);
</script>

<h1>{title}</h1>
<svelte:component this={component} />
<ul>
	{#each goals as goal}
		<li>{goal}</li>
	{/each}
</ul>
<h2>team</h2>
