<script context="module">
	export const prerender = true;
</script>

<script>
	import Index, { metadata } from './_index.md';
	import { page } from '$app/stores';
	import CardHome from '$lib/CardHome.svelte';
	import HomeSwitches from '$lib/HomeSwitches.svelte';
	import Head from '$lib/Head.svelte';

	const cards = [
		{ path: '/team', label: 'Team' },
		{ path: '/work-packages', label: 'Work Packages' },
		{ path: '/outputs', label: 'Outputs' }
	];
</script>

<Head path={$page.url.pathname} />
<div class="container">
	<div class="row">
		<div class="col-12">
			<p class="h4 text-primary col-12 col-md-6">{metadata.subtitle}</p>
			<HomeSwitches />
			<div class="intro-text">
				<Index />
			</div>
		</div>
	</div>
	<div class="row">
		{#each cards as card}
			<div class="col-12 col-md-4 mb-3 mb-md-5 mt-3">
				<CardHome {...card} />
			</div>
		{/each}
	</div>
</div>

<style>
	.intro-text {
		font-size: 1.1rem;
		text-indent: 2rem;
	}

	.intro-text :global(strong) {
		font-family: 'Manrope-variable';
		font-weight: bold;
		color: var(--bs-primary);
	}

	@media (min-width: 768px) {
		.intro-text {
			font-size: 2.25rem;
			text-indent: 6rem;
		}
	}
</style>
