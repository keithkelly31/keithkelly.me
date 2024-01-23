<script>
	import Textarea from '$lib/components/textarea.svelte';
	import SvelteMarkdown from 'svelte-markdown';

	let editing = true;
	let source = ``;
</script>

<h1>New Post</h1>

<nav>
	<ul>
		<li>
			<button on:click={() => (editing = true)} disabled={editing === true}>Edit</button>
		</li>

		<li>
			<button on:click={() => (editing = false)} disabled={editing === false}>Preview</button>
		</li>
	</ul>
</nav>

<hr />

{#if editing}
	<Textarea bind:value={source} min_rows={10} name="post" />
{:else}
	<SvelteMarkdown {source} />
{/if}

<style>
	button {
		background-color: transparent;
		border: 0;
		color: var(--pico-primary);
	}
</style>
