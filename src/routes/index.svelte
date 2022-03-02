<script context="module">
	export const prerender = true;
</script>

<script>
	import Index, { metadata } from './_index.md';
	import CardHome from '$lib/CardHome.svelte';
	import HomeSwitches from '$lib/HomeSwitches.svelte';
	const cards = [
		{ path: '/team', label: 'Team' },
		{ path: '/work-packages', label: 'Work Packages' },
		{ path: '/outputs', label: 'Outputs' }
	];
</script>

<div class="container">
	<div class="row">
		<div class="col-12">
			<p class="h4 text-primary w-50">{metadata.subtitle}</p>
			<HomeSwitches />
			<div class="intro-text">
				<Index />
			</div>
		</div>
	</div>
	<div class="row">
		{#each cards as card}
			<div class="col-4 mb-5 mt-3">
				<CardHome {...card} />
			</div>
		{/each}
	</div>
</div>

<style>
	.intro-text {
		font-size: 2.25rem;
		text-indent: 6rem;
	}
</style>
