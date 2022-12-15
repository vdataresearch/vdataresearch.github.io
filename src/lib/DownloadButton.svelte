<script>
	export let link;
	export let text;
</script>

<div class="mb-3">
	<a
		sveltekit:reload
		class="btn btn-primary btn-sm Manrope-Variable fw-bold"
		role="button"
		href={link}
		rel="external"
		target="_blank"
		download>{text}</a
	>
</div>
