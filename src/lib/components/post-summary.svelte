<script>
	import { format } from 'date-fns';
	import Tags from './tags.svelte';

	/**
	 * @typedef { Object } Post
	 * @prop { string } description
	 * @prop { string } last_edit
	 * @prop { string } slug
	 * @prop { string } tags
	 * @prop { string } title
	 */

	/** @type { Post } */
	export let post;
</script>

<article>
	<hgroup>
		<h5><a href="/{post.slug}">{post.title}</a></h5>
		<h6>{format(new Date(post.last_edit), 'LLL dd yyyy')}</h6>
	</hgroup>

	<p>{post.description}</p>

	{#if post.tags}
		<footer>
			<Tags tags={post.tags} />
		</footer>
	{/if}

	<style>
		article {
			display: flex;
			flex-direction: column;
		}

		footer {
			display: flex;
			gap: var(--pico-spacing);
			flex-wrap: wrap;
		}

		p {
			display: -webkit-box;
			flex: 1;
			-webkit-line-clamp: 3;
			-webkit-box-orient: vertical;
			overflow: hidden;
		}
	</style>
</article>
