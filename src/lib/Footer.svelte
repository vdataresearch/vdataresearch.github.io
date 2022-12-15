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
			<div class="w-100 d-flex flex-md-row flex-column align-items-baseline mb-4">
				<div class="mb-3">
					<p class="text-primary mb-4">A research project by:</p>
					{#each affiliations as affiliation}
						<img
							class="me-5 my-2"
							src={logos[affiliation.logo]}
							height="65"
							alt={affiliation.label}
						/>
					{/each}
				</div>
				<div class="ms-0 ms-md-auto">
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
				- <a class="text-white" href="https://twitter.com/vdataresearch" target="_blank">twitter</a>
				-
				<a class="text-white" href="https://www.facebook.com/Vdataresearch" target="_blank"
					>facebook</a
				>
				-
				<a
					class="text-white"
					href="https://www.researchgate.net/project/V-DATA-The-value-of-digital-data-enhancing-citizens-awareness-and-voice-about-surveillance-capitalism"
					target="_blank">researchgate</a
				>
			</p>
		</div>
	</div>
</div>
