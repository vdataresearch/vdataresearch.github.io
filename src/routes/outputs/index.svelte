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
	export let outputsList;
	export let filterType;
	export let filterWp;

	let type = filterType[0];
	let wp = filterWp[0].value;

	console.log(filterType, filterWp);
	$: filteredList = outputsList.filter(
		(d) => (type === 'all' ? true : d.type === type) && (wp === 'all' ? true : d.wp.includes(wp))
	);
</script>

<h1>Outputs</h1>
<div>
	Type
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
				<label class="form-check-label" for={`option-type-${i}`}>{filter}</label>
			</div>
		{/each}
	</div>
</div>
<div>
	Work packages
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
				<label class="form-check-label" for={`option-wp-${i}`}>{filter.label}</label>
			</div>
		{/each}
	</div>
</div>
{#each filteredList as output}
	<h5>{output.title}</h5>
	<svelte:component this={output.component} />
{/each}
