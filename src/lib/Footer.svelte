<script>
	import unipv from '$lib/assets/unipv.png';
	import unibi from '$lib/assets/unibi.png';
	import unica from '$lib/assets/unica.png';
	import co from '$lib/assets/co.png';
	import cariplo from '$lib/assets/cariplo.png';

	const logos = {
		unipv,
		unibi,
		unica,
		co
	};

	const affiliations = [
		{ label: 'Università di Pavia', link: '', logo: 'unipv' },
		{ label: 'Università degli Studi di Milano Bicocca', link: '', logo: 'unibi' },
		{ label: 'Università Cattolica di Milano', link: '', logo: 'unica' },
		{ label: 'Careof', link: '', logo: 'co' }
	];
</script>

<div class="container border-top border-secondary">
	<div class="row">
		<div class="col-12 my-4 Manrope-Variable fw-bold">
			<div class="w-100 d-flex align-items-baseline mb-4">
				<div>
					<p class="text-primary mb-4">A research project by:</p>
					{#each affiliations as affiliation}
						<img class="me-5" src={logos[affiliation.logo]} height="65" alt={affiliation.label} />
					{/each}
				</div>
				<div class="ms-auto">
					<p class="text-primary mb-4 ">Funded by:</p>
					<img src={cariplo} height="65" alt="Fondazione Cariplo" />
				</div>
			</div>
			<p class="text-primary mb-0">Contact us:</p>
			<p>
				Drop a message to <a
					class="text-decoration-none"
					href="mailto:alessandro.caliandro@unipv.it">alessandro.caliandro@unipv.it</a
				>
			</p>
		</div>
	</div>
</div>
