<script>
	/** @type { string } */
	export let tags;

	const _tags = tags.split(',').sort((a, b) => a.localeCompare(b));
</script>

<div>
	<span>Tags:</span>
	{#each _tags as tag}
		<a href="/tag/{tag.trim().toLowerCase().replaceAll(' ', '-')}">{tag}</a>
	{/each}
</div>

<style>
	div {
		display: flex;
		flex-wrap: wrap;
		gap: var(--pico-spacing);
	}
</style>
