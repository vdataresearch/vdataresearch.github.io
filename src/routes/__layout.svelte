<script context="module">
	export const load = async ({ url }) => ({ props: { url } });
	export const prerender = true;
	export const trailingSlash = 'always';
</script>

<script>
	import '../app.scss';
	import PageTransition from '$lib/PageTransition.svelte';
	import Navbar from '$lib/Navbar.svelte';
	import Footer from '$lib/Footer.svelte';

	export let url;
</script>

<Navbar />
<PageTransition {url}>
	<slot />
</PageTransition>
<Footer />
