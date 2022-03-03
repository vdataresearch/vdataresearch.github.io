<script context="module">
	export const prerender = true;
	const list = Object.entries(import.meta.globEager('/outputs/**/*.md')).map(([filepath, post]) => {
		return {
			...post.metadata,
			component: post.default
		};
	});

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

	export async function load({ params, fetch }) {
		return {
			props: {
				outputsList: list,
				filterType: ['all', ...list.map((d) => d.type)],
				filterWp: [
					{ value: 'all', label: 'all' },
					[...new Set(list.map((d) => d.wp).flat())].map((d) => {
						const item = wplist.find((w) => w.slug === d);
						return { value: d, label: item.title };
					})
				].flat()
			}
		};
	}
</script>

<script>
	import CardOutput from '$lib/CardOutput.svelte';
	import Head from '$lib/Head.svelte';
	import { page } from '$app/stores';

	export let outputsList;
	export let filterType;
	export let filterWp;

	let type = filterType[0];
	let wp = filterWp[0].value;

	$: filteredList = outputsList.filter(
		(d) => (type === 'all' ? true : d.type === type) && (wp === 'all' ? true : d.wp.includes(wp))
	);
</script>

<Head path={$page.url.pathname} title={'Outputs'} />

<div class="container">
	<div class="row">
		<div class="col-12">
			<h1 class="display-1 fw-bold my-3 pb-3 border-bottom border-secondary">Outputs</h1>
		</div>
	</div>
	<div class="row pb-3">
		{#if outputsList.length}
			<div class="col-3">
				<div class="mb-4">
					<h4 class="text-muted fw-bold">Filter by type</h4>
					<div>
						{#each filterType as filter, i}
							<div class="form-check">
								<input
									type="radio"
									bind:group={type}
									class="form-check-input"
									name="options-type"
									id={`option-type-${i}`}
									value={filter}
								/>
								<label class="form-check-label Manrope-Variable fw-bold" for={`option-type-${i}`}
									><small>{filter}</small></label
								>
							</div>
						{/each}
					</div>
				</div>
				<div class="mb-4 pt-2 border-top border-secondary">
					<h4 class="text-muted fw-bold">Filter by work packages</h4>
					<div>
						{#each filterWp as filter, i}
							<div class="form-check">
								<input
									type="radio"
									bind:group={wp}
									class="form-check-input"
									name="options-wp"
									id={`option-wp-${i}`}
									value={filter.value}
								/>
								<label class="form-check-label Manrope-Variable fw-bold" for={`option-wp-${i}`}
									><small>{filter.label}</small></label
								>
							</div>
						{/each}
					</div>
				</div>
			</div>
			<div class="col-9 border-start border-secondary">
				<div class="row">
					{#each filteredList as output}
						<div class="col-4">
							<CardOutput {output} />
						</div>
					{/each}
				</div>
			</div>
		{:else}
			<div class="col-12">
				<h3 class="text-muted fw-bold my-5">No ouputs yet!</h3>
			</div>
		{/if}
	</div>
</div>
