<script context="module">
	export const prerender = true;
</script>

<script>
	import Index, { metadata } from './_privacy.md';
	import { page } from '$app/stores';
	import Head from '$lib/Head.svelte';
</script>

<Head path={$page.url.pathname} />
<div class="container">
	<div class="row">
		<div class="col-12">
			<h1 class="col-md-8 col-12">{metadata.title}</h1>
			<p class="h4 text-primary col-md-8 col-12">{metadata.subtitle}</p>

			<div class="col-md-6 col-12">
				<Index />
			</div>
		</div>
	</div>
</div>
