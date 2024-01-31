<script>
	import BreadCrumbs from '$lib/components/bread-crumbs.svelte';
	import Form from '$lib/components/form.svelte';
	import Textarea from '$lib/components/textarea.svelte';
	import { onMount } from 'svelte';
	import SvelteMarkdown from 'svelte-markdown';

	/** @type { import("./$types").PageData } */
	export let data;
	let { post } = data;
	$: ({ post } = data);

	/** @type { import("./$types").ActionData } */
	export let form;

	let editing = true;
	let description = post.description || '';
	let published = post.published || false;
	let source = post.markdown || ``;
	let tags = post.tags || '';
	let title = post.title || '';
	let y = 0;

	onMount(() => {
		const autoSave = setInterval(() => {
			const form = document.querySelector('form');
			form?.requestSubmit();
		}, 300000);
		return () => clearInterval(autoSave);
	});
</script>

<svelte:window bind:scrollY={y} />

<BreadCrumbs steps={[{ href: '/writing', label: 'Writing' }, { label: post.slug || 'Unknown' }]} />

<h2>Edit Post</h2>

<section class="grid">
	<button
		class:secondary={editing === true}
		on:click={() => (editing = true)}
		disabled={editing === true}>Edit</button
	>
	<button
		class:secondary={editing === false}
		on:click={() => (editing = false)}
		disabled={editing === false}>Preview</button
	>
</section>

<hr />

<div class="prose">
	{#if editing}
		<Form {form} reset={false} let:busy>
			<fieldset>
				<label for="title">Title</label>
				<input bind:value={title} type="text" name="title" id="title" />
			</fieldset>

			<fieldset>
				<label for="description">Description</label>
				<Textarea bind:value={description} name="description" />
			</fieldset>

			<fieldset>
				<label for="markdown">Markdown</label>
				<Textarea bind:value={source} min_rows={10} name="markdown" />
			</fieldset>

			<fieldset>
				<label for="tags">Tags</label>
				<input bind:value={tags} type="text" name="tags" id="tags" />
				<small>Separate tags with a comma</small>
			</fieldset>

			<fieldset>
				<label>
					<input bind:checked={published} name="published" type="checkbox" role="switch" />
					Published
				</label>
			</fieldset>

			<button aria-busy={busy} type="submit">Save Post</button>
		</Form>
	{:else}
		<SvelteMarkdown {source} />
	{/if}
</div>
