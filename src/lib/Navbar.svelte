<script>
	import { Collapse, NavbarToggler } from 'sveltestrap';
	import { page } from '$app/stores';

	let isOpen = false;
	const toggle = () => (isOpen = !isOpen);
	const navItems = [
		{ path: '/team', label: 'Team' },
		{ path: '/work-packages', label: 'Work Packages' },
		{ path: '/outputs', label: 'Outputs' }
	];
</script>

<nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
	<div class="container-fluid">
		<a class="navbar-brand" href="/">
			<img src="/logo.png" alt="" height="24" class="d-inline-block align-text-top" />
		</a>
		<NavbarToggler on:click={toggle} />
		<Collapse {isOpen} navbar expand="lg">
			<ul class="navbar-nav ms-auto mb-2 mb-lg-0">
				{#each navItems as navItem}
					<li class="nav-item">
						<a
							class="nav-link Manrope-Variable fw-bold h4"
							class:active={$page.url.pathname.startsWith(navItem.path)}
							href={navItem.path}>{navItem.label}</a
						>
					</li>
				{/each}
			</ul>
		</Collapse>
	</div>
</nav>
