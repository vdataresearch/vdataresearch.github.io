<script context="module">
	import { groups } from 'd3-array';
	export const prerender = true;
	const list = Object.entries(import.meta.globEager('/team/**/*.md')).map(([filepath, post]) => {
		return {
			...post.metadata,
			component: post.default
		};
	});
	export async function load({ params, fetch }) {
		return {
			props: {
				teamList: groups(list, (d) => d.affiliation)
			}
		};
	}
</script>

<script>
	export let teamList;
</script>

<h1>team</h1>
{#each teamList as group}
	<h4>{group[0]}</h4>
	{#each group[1] as person}
		<h5>{person.name} {person.surname}</h5>
		<svelte:component this={person.component} />
	{/each}
{/each}
