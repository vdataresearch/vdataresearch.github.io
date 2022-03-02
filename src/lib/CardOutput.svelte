<script>
	export let output;
</script>

<div class="card-output p-3 bg-secondary d-flex flex-column">
	<div>
		<div class="mb-4">
			<p class="mb-0 text-muted Manrope-Variable fw-bold"><small>{output.type}</small></p>
			<h4 class="fw-bold">{output.title}</h4>
		</div>
	</div>
	<div class="d-flex justify-content-between align-items-end">
		<div class="img-container">
			<svelte:component this={output.component} class="img-test" />
		</div>
		<a
			class="btn rounded-circle btn-dark link d-flex p-0 align-items-center justify-content-center text-primary fs-5"
			role="button"
			href={output.link}
			target="_blank"
		>
			<i class="bi bi-arrow-up-right" />
		</a>
	</div>
</div>

<style>
	.card-output {
		min-height: 220px;
		border-radius: 30px;
	}

	.link {
		width: 74px;
		height: 74px;
	}

	.img-container {
		border-radius: 30px;
		overflow: hidden;
	}

	.img-container :global(img) {
		filter: grayscale(1);
	}
</style>
