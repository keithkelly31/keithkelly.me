<script>
	import BreadCrumbs from '$lib/components/bread-crumbs.svelte';
	import Form from '$lib/components/form.svelte';
	import Grid from '$lib/components/grid.svelte';

	/** @type { import("./$types").PageData } */
	export let data;
	let { posts } = data;

	/** @type { import("./$types").ActionData } */
	export let form;
</script>

<BreadCrumbs steps={[{ label: 'Writing' }]} />

<section>
	<Form {form} let:busy>
		<button aria-busy={busy}>Start New Post</button>
	</Form>
</section>

<Grid>
	{#each posts as post}
		<article>
			<h5>{post.title || 'TBD...'}</h5>
			<p>{post.description || 'TBD...'}</p>

			<footer>
				<nav>
					<ul>
						<li><a href="/writing/{post.id}">Edit</a></li>
						<li><a class="secondary" href="/writing/{post.id}/delete">Delete</a></li>
					</ul>
				</nav>
			</footer>
		</article>
	{:else}
		<article>There are no posts yet</article>
	{/each}
</Grid>

<style>
	article {
		display: flex;
		flex-direction: column;
	}

	p {
		flex: 1;
		margin-bottom: 0;
	}
</style>
