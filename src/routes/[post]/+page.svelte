<script>
	import BreadCrumbs from '$lib/components/bread-crumbs.svelte';
	import { format } from 'date-fns';
	import SvelteMarkdown from 'svelte-markdown';

	/** @type { import("./$types").PageData } */
	export let data;
	let { session, post } = data;
</script>

<svelte:head>
	<title>{post.title}</title>
	<meta name="description" content={post.description} />
</svelte:head>

<div class="prose">
	<BreadCrumbs steps={[]} />

	<hgroup>
		<h1>{post.title}</h1>
		<h2>{format(new Date(post.last_edit), 'LLL dd yyyy')}</h2>
	</hgroup>

	<section>
		<SvelteMarkdown source={post.markdown} />
	</section>

	<!-- <hr />

	<h3>Conversation</h3>

	{#if session}
		<p>Here is where some stuff will go</p>
	{:else}
		<article>Join</article>
	{/if} -->
</div>
