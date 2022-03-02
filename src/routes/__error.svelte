<script context="module">
	/** @type {import('@sveltejs/kit').ErrorLoad} */ export function load({ error, status }) {
		return {
			props: {
				title: `${status}: ${error.message}`
			}
		};
	}
</script>

<script>
	export let title;
</script>

<div class="container">
	<div class="row">
		<div class="col-12">
			<h1 class="text-center fw-bold my-5 text-muted">{title}</h1>
			<h4 class="text-center my-5">Go back to <a class="text-decoration-none" href="/">home</a></h4>
		</div>
	</div>
</div>
