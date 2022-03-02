<script>
	import { each } from 'svelte/internal';
	import { Column } from 'sveltestrap';

	import Switch from './Switch.svelte';

	let width = 0;
	const switchWidth = 60;
	$: gridColumns = Math.ceil(width / 60);
	$: gridLines = Math.ceil(gridColumns / 1.5);
</script>

<div class="w-100 my-5" bind:clientWidth={width}>
	{#if gridLines > 0}
		{#each [...Array(gridLines - 1).keys()] as line}
			<div class="d-flex justify-content-between my-1">
				{#each [...Array(gridColumns - 1).keys()] as column}
					<Switch />
				{/each}
			</div>
		{/each}
	{/if}
</div>
