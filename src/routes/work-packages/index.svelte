<script context="module">
	export const prerender = true;
	const list = Object.entries(import.meta.globEager('/work-packages/**/*.md'))
		.map(([filepath, post]) => {
			return {
				...post.metadata,
				slug: filepath
					.replace(/(\/index)?\.md/, '')
					.split('/')
					.pop()
			};
		})
		.sort((a, b) => a.index - b.index);

	export async function load({ params, fetch }) {
		return {
			props: {
				wpList: list
			}
		};
	}
</script>

<script>
	export let wpList;
</script>

<h1>work packages</h1>
{#each wpList as wp}
	<h3 class="!mt-0 !mb-2">
		<a href={`/work-packages/${wp.slug}`}>{wp.title}</a>
	</h3>
{/each}
