<script>
	import '../app.scss';
	import Navbar from '$lib/Navbar.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<Navbar />
<slot />
<Footer />
