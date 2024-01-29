<script>
	import Grid from '$lib/components/grid.svelte';
	import PostSummary from '$lib/components/post-summary.svelte';

	/** @type { import("./$types").PageData } */
	export let data;
	let { posts } = data;
</script>

<svelte:head>
	<title>Keith Kelly</title>
	<meta name="description" content="This is a description" />
</svelte:head>

<h1>Hello</h1>

<Grid>
	{#each posts as post}
		<PostSummary {post} />
	{:else}
		<article>There are no posts to see</article>
	{/each}
</Grid>
