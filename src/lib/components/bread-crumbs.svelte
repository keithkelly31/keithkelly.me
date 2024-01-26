<script>
	/**
	 * @typedef { Object } Step
	 * @prop { string } [href]
	 * @prop { string } label
	 */
	/** @type { Step[] } */
	export let steps;
</script>

<nav>
	<ul>
		<li><a href="/">Home</a></li>

		{#each steps as { href, label }, i}
			<li>{`<`}</li>
			<li>
				{#if i + 1 === steps.length}
					{label}
				{:else}
					<a {href}>{label}</a>
				{/if}
			</li>
		{/each}
	</ul>
</nav>
