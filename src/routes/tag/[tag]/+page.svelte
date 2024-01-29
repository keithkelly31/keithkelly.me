<script>
	import BreadCrumbs from '$lib/components/bread-crumbs.svelte';
	import Grid from '$lib/components/grid.svelte';
	import PostSummary from '$lib/components/post-summary.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
	let { posts, tag } = data;
	$: ({ posts, tag } = data);

	$: tag = tag.replaceAll('-', ' ');
</script>

<svelte:head>
	<title>{tag}</title>
	<meta name="description" content="Post for {tag}" />
</svelte:head>

<h1>{tag}</h1>

<BreadCrumbs steps={[]} />

<Grid>
	{#each posts as post}
		<PostSummary {post} />
	{:else}
		<article>No posts under this tag</article>
	{/each}
</Grid>

<style>
	h1 {
		text-transform: capitalize;
	}
</style>
