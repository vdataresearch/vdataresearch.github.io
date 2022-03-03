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
	import CardTeam from '$lib/CardTeam.svelte';
	import Head from '$lib/Head.svelte';
	import { page } from '$app/stores';
	export let teamList;
</script>

<Head path={$page.url.pathname} title={'Team'} />

<div class="container">
	<div class="row">
		<div class="col-12"><h1 class="display-1 fw-bold my-3">Team</h1></div>
	</div>
	{#each teamList as group}
		<div class="row border-top border-secondary pt-3">
			<div class="col-4">
				<h2 class="fw-bold">{group[0]}</h2>
			</div>

			{#each group[1] as person}
				<div class="col-4">
					<CardTeam {person} />
				</div>
			{/each}
		</div>
	{/each}
</div>
