<script>
	import { baseTitle, description, website } from '$lib/info.js';
	export let title,
		path,
		image = website + '/logo.png';
</script>

<svelte:head>
	<title>{title ? baseTitle + ' - ' + title : baseTitle}</title>
	<meta name="description" content={description} />
	<meta
		name="author"
		content="A research project by Università di Pavia, Bicocca, Università Cattolica, Careof. Ricercatori: Guido Legnante, Alessandra Gaia, Alessandro Caliandro, Annavittoria Sarli, Chiara Respi, Dario Pizzul, Emanuela Sala, Emma Garavaglia, Flavio Ceravolo, Guido Anselmi, Guido Legnante, Guido Tarricone, Laura Zanfrini, Marco Gui, Marta Cereda, Paolo Gomarasca, Piercarlo Dondi."
	/>

	<meta property="og:url" content={website + path} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={title ? baseTitle + ' - ' + title : baseTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={image} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content={website} />
	<meta property="twitter:url" content={website + path} />
	<meta name="twitter:title" content={title ? baseTitle + ' - ' + title : baseTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />
</svelte:head>
