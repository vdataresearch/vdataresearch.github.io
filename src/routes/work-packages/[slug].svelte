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
		if (!wp) {
			return {
				status: 404,
				error: 'Work packages not found'
			};
		}
		const wpTeam = listTeam.filter((d) => wp.team.includes(d.slug));
		const wpOutputs = listOutputs.filter((d) => (d.wp ? d.wp.includes(wp.slug) : false));
		return {
			props: { ...wp, team: wpTeam, outputs: wpOutputs }
		};
	}
</script>

<script>
	import Head from '$lib/Head.svelte';
	import { page } from '$app/stores';
	import CardOutput from '$lib/CardOutput.svelte';
	import CardTeam from '$lib/CardTeam.svelte';

	export let component;
	export let title;
	export let team;
	export let outputs;
	export let goals;
</script>

<Head path={$page.url.pathname} {title} />
<div class="container">
	<div class="row">
		<div class="col-12 col-md-7">
			<h1 class="display-5 fw-bold">{title}</h1>
		</div>
	</div>
	<div class="row border-top border-secondary py-3 py-md-5 mt-4">
		<div class="col-12 col-md-5">
			<h6 class="text-primary fw-bold"><small>Description</small></h6>
			<svelte:component this={component} />
		</div>

		<div class="col-12 offset-md-1 col-md-5">
			<h6 class="text-primary fw-bold"><small>Goals</small></h6>
			<ul>
				{#each goals as goal}
					<li>{goal}</li>
				{/each}
			</ul>
		</div>
	</div>
	<div class="row border-top border-secondary pt-4 ">
		<div class="col-5">
			<h6 class="text-primary fw-bold"><small>Team member</small></h6>
		</div>
		<div class="col-12 mt-2">
			<div class="row">
				{#each team as person}
					<div class="col-12 col-md-4">
						<CardTeam {person} />
					</div>
				{/each}
			</div>
		</div>
	</div>
	<div class="row border-top border-secondary pt-4 pb-2">
		<div class="col-5">
			<h6 class="text-primary fw-bold"><small>Outputs</small></h6>
		</div>
		<div class="col-12 mt-2">
			{#if outputs.length}
				<div class="row">
					{#each outputs as output}
						<div class="col-12 col-md-3 mb-3">
							<CardOutput {output} />
						</div>
					{/each}
				</div>
			{:else}
				<p class="text-muted">No outputs yet!</p>
			{/if}
		</div>
	</div>
</div>
