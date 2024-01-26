<script>
	import { slide } from 'svelte/transition';

	/** @type { boolean } */
	export let display = false;

	/** @type { string } */
	export let message;

	/** @type { string } */
	export let type;

	$: if (display) setTimeout(() => (display = false), type === 'error' ? 7000 : 3000);
</script>

{#if display}
	<article
		class:pico-background-green-550={type === 'success'}
		class:pico-background-red-550={type === 'error'}
		transition:slide
	>
		{message}
	</article>
{/if}

<style>
	article {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
		color: #fff;
		left: 0;
		position: fixed;
		text-align: center;
		top: 0;
		width: 100vw;
		z-index: 50;
	}
</style>
