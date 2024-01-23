<script>
	import { page } from '$app/stores';
	import '@fontsource-variable/quicksand';
	import '../app.scss';
</script>

<header>
	<nav>
		<ul>
			<li>
				<a href="/">Blog</a>
			</li>
		</ul>

		<ul>
			<li>
				<a href="/posts">Posts</a>
			</li>
		</ul>
	</nav>
</header>

<main>
	<article class:hidden={$page.url.pathname === '/'}>This is where an advertisment will go</article>

	<slot />
</main>

<style>
	nav > ul:first-of-type > li {
		font-size: calc(var(--pico-font-size) * 1.25);
		font-weight: 700;
	}

	.hidden {
		display: none;
	}
</style>
