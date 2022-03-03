<script>
	export let path, label;
</script>

<div class="card-home p-4 bg-secondary d-flex flex-column justify-content-between">
	<h2 class="fw-bold">{label}</h2>
	<a
		class="arrow btn rounded-circle btn-dark link d-flex p-0 align-items-center justify-content-center text-primary fs-5 align-self-end"
		role="button"
		href={path}
	>
		<i class="bi bi-arrow-up-right" />
	</a>
</div>

<style>
	.card-home {
		min-height: 280px;
		border-radius: 30px;
	}

	.link {
		width: 74px;
		height: 74px;
	}

	.arrow {
		transform: rotate(0);
		transition: transform 0.2s ease-in-out;
	}

	.arrow:hover {
		transform: rotate(45deg);
	}
</style>
