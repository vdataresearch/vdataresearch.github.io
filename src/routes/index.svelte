<script context="module">
	export const prerender = true;
</script>

<script>
	import Index, { metadata } from './_index.md';
	import CardHome from '$lib/CardHome.svelte';
	const cards = [
		{ path: '/team', label: 'Team' },
		{ path: '/work-packages', label: 'Work Packages' },
		{ path: '/outputs', label: 'Outputs' }
	];
</script>

<div class="container">
	<div class="row">
		<div class="col-12">
			<p>{metadata.subtitle}</p>
			<Index />
		</div>
	</div>
	<div class="row">
		{#each cards as card}
			<div class="col-4">
				<CardHome {...card} />
			</div>
		{/each}
	</div>
</div>
