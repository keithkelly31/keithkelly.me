<script>
	export let value = ``;
	export let min_rows = 3;

	const split = /\r?\n/;

	$: rows = value.split(split).length < min_rows ? min_rows : value.split(split).length;
</script>

<textarea bind:value {rows} {...$$restProps} />

<style>
	textarea {
		resize: none;
	}
</style>
