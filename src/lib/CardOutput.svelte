<script>
	export let output;
</script>

<div class="card-output p-3 bg-secondary d-flex flex-column justify-content-between">
	<div>
		<div class="mb-5">
			<p class="mb-0 text-muted Manrope-Variable fw-bold"><small>{output.type}</small></p>
			<h4 class="fw-bold title">{output.title}</h4>
		</div>
	</div>
	<div class="d-flex justify-content-between align-items-end">
		<div class="img-container">
			<svelte:component this={output.component} />
		</div>
		<a
			class="arrow btn rounded-circle btn-dark link d-flex p-0 align-items-center justify-content-center text-primary fs-5"
			role="button"
			href={output.link}
			target="_blank"
		>
			<i class="bi bi-arrow-up-right" />
		</a>
	</div>
</div>

<style>
	.title {
		display: -webkit-box;
		-webkit-line-clamp: 4;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.card-output {
		min-height: 353px;
		border-radius: 30px;
		height: 100%;
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
		width: 134px;
		height: 134px;
		object-fit: cover;
		object-position: center center;
	}

	.arrow {
		transform: rotate(0);
		transition: transform 0.2s ease-in-out;
	}

	.arrow:hover {
		transform: rotate(45deg);
	}
</style>
