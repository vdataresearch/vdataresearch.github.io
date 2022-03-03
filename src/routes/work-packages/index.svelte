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
	import Head from '$lib/Head.svelte';
	import { page } from '$app/stores';
	export let wpList;
</script>

<Head path={$page.url.pathname} title={'Work Packages'} />

<div class="container">
	<div class="row">
		<div class="col-12">
			<h1 class="display-1 fw-bold my-3 pb-3 border-bottom border-secondary">Work Packages</h1>
			{#each wpList as wp}
				<div
					class="card-wp p-4 bg-secondary my-4 d-flex justify-content-between align-items-center"
				>
					<h3 class="fw-bold">
						{wp.title}
					</h3>
					<div>
						<a
							class="btn rounded-circle btn-dark link d-flex p-0 align-items-center justify-content-center text-primary fs-4"
							role="button"
							href={`/work-packages/${wp.slug}`}
						>
							<i class="bi bi-arrow-right" />
						</a>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.card-wp {
		border-radius: 30px;
	}

	.link {
		width: 100px;
		height: 100px;
	}
</style>
