<script>
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

<header>
	<nav>
		<ul>
			<li>
				<strong><a href="/">keithkelly.me</a></strong>
			</li>
		</ul>

		<ul>
			{#if session}
				{#if admin}
					<li>
						<a href="/writing">Writing</a>
					</li>
				{/if}
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

<style>
	strong {
		font-size: calc(var(--pico-font-size) * 1.25);
	}
</style>
