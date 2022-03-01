<script>
	export let person;
</script>

<div class="card-home p-3 bg-secondary d-flex flex-column justify-content-between">
	<div class="d-flex">
		<div class="img-container">
			<svelte:component this={person.component} class="img-test" />
		</div>
		<div class="ms-3">
			<p class="mb-0 text-muted Manrope-Variable"><small>{person.role}</small></p>
			<h4>{person.name} {person.surname}</h4>
		</div>
	</div>
	<div class="align-self-end">
		<a
			class="btn rounded-circle btn-dark link d-flex p-0 align-items-center justify-content-center text-primary fs-5"
			role="button"
			href={person.link}
		>
			<i class="bi bi-arrow-up-right" />
		</a>
	</div>
</div>

<style>
	.card-home {
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
