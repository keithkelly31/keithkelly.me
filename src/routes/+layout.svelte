<script>
	import '@fontsource-variable/quicksand';
	import '../app.scss';

	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';

	export let data;

	let { config, supabase, session } = data;
	$: ({ supabase, session } = data);

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
				<a href="/">{config.name}</a>
			</li>
		</ul>

		<!--  <ul>
			{#if PUBLIC_BLOG === 'true'}
				<li>
					<a href="/blog">Blog</a>
				</li>
			{/if}

			{#if PUBLIC_STORIES === 'true'}
				<li>
					<a href="/stories">Stories</a>
				</li>
			{/if}

			{#if PUBLIC_QUESTIONS === 'true'}
				<li>
					<a href="/questions">Questions</a>
				</li>
			{/if}
		</ul> -->
	</nav>
</header>

<main>
	<slot />
</main>

<!-- <style>
	nav > ul:first-of-type > li {
		font-size: calc(var(--pico-font-size) * 1.25);
		font-weight: 700;
	}
</style> -->
