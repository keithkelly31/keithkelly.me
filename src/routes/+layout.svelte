<script>
	import '@fontsource-variable/nunito';
	import '../app.scss';

	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';

	export let data;

	let { admin, supabase, session } = data;
	$: ({ admin, supabase, session } = data);

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => data.subscription.unsubscribe();
	});
</script>

<svelte:head>
	<script defer data-domain="keithkelly.me" src="https://plausible.io/js/script.js"></script>
</svelte:head>

<header>
	<nav>
		<ul>
			<li>
				<strong><a href="/">keithkelly.me</a></strong>
			</li>
		</ul>

		<ul>
			{#if admin}
				<li>
					<a href="/writing">Writing</a>
				</li>
			{/if}

			<!-- <li>
				<a href="/projects">Projects</a>
			</li> -->

			{#if session}
				<li>
					<a href="/signout">Sign Out</a>
				</li>
			{:else}
				<li><a href="/signin">Sign In</a></li>
			{/if}
		</ul>
	</nav>
</header>

<main>
	<slot />
</main>

<!-- <footer>
	<nav>
		<ul>
			<li>
				<a href="/contact">Contact</a>
			</li>
		</ul>
	</nav>
	<nav>
		<ul>
			<li>Projects:</li>
			<li>
				<a href="https://coloringcub.com">Coloring Cub</a>
			</li>
			<li>
				<a href="https://keithkelly.dev">keithkelly.dev</a>
			</li>
			<li>
				<a href="https://simplelinup.com">Simple Lineup</a>
			</li>
		</ul>
	</nav>
</footer> -->

<style>
	:global(body) {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
	}

	strong {
		font-size: calc(var(--pico-font-size) * 1.25);
	}
</style>
