<script>
	import Form from '$lib/components/form.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
	let { post } = data;

	/** @type {import('./$types').ActionData} */
	export let form;
</script>

<h2>Delete Post</h2>

<p>Are you sure you want to delete <strong>{post.title}</strong>? This can not be undone.</p>

<div class="grid">
	<a class="secondary" href="/writing" role="button">Cancel</a>

	<Form {form} let:busy>
		<button aria-busy={busy} type="submit">Delete</button>
	</Form>
</div>

<style>
	button {
		margin-bottom: 0;
	}
</style>
