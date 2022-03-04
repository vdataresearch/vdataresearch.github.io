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

<nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-header" class:navopen={isOpen}>
	<div class="container-fluid my-2">
		<a class="navbar-brand" href="/">
			<img src="/logo.png" alt="" height="24" class="d-inline-block align-text-top" />
		</a>

		<button on:click={toggle} class="navbar-toggler border-0 fs-1 text-primary" type="button">
			<i class={`bi bi-${isOpen ? 'x-lg' : 'list'}`} />
		</button>
		<Collapse {isOpen} navbar expand="md">
			<ul class="navbar-nav ms-0 ms-md-auto mb-2 mb-md-0">
				{#each navItems as navItem}
					<li class="nav-item mx-2">
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

<style>
	.bg-header {
		background: linear-gradient(
			180deg,
			rgba(var(--bs-dark-rgb), 1) 60%,
			rgba(var(--bs-dark-rgb), 0) 100%
		);
	}

	:global(.navbar-toggler:focus) {
		box-shadow: none;
	}

	@media (max-width: 767px) {
		:global(.navbar-collapse ul) {
			height: calc(100vh - 55px);
			display: flex;
			flex-direction: column;
			justify-content: end;
		}

		:global(.navbar-collapse ul li a) {
			font-size: 2rem;
		}

		.navopen.bg-header {
			background: linear-gradient(
				180deg,
				rgba(var(--bs-dark-rgb), 1) 1%,
				rgba(var(--bs-secondary-rgb), 1) 100%
			);
		}
	}
</style>
