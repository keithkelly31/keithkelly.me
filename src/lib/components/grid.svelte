<div>
	<slot />
</div>

<style>
	div {
		display: grid;
		gap: var(--pico-spacing);
	}

	@media screen and (min-width: 1024px) {
		div {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media screen and (min-width: 1280px) {
		div {
			grid-template-columns: repeat(3, 1fr);
		}
	}
</style>
