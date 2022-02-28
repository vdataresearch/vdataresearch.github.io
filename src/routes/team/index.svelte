<script context="module">
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
				teamList: list
			}
		};
	}
</script>

<script>
	export let teamList;
</script>

<h1>team</h1>
{#each teamList as person}
	<h5>{person.name} {person.surname}</h5>
	<svelte:component this={person.component} />
{/each}
