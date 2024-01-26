<script>
	import { enhance } from '$app/forms';
	import Alert from '$lib/components/alert.svelte';

	/** @type { any } */
	export let form;

	export let reset = true;

	let busy = false;

	/** @type { import("@sveltejs/kit").SubmitFunction } */
	function submit() {
		busy = true;
		return async ({ update }) => {
			busy = false;
			update({ reset });
		};
	}
</script>

<form method="post" use:enhance={submit}>
	<slot {busy} />
</form>

<Alert display={form} message={form?.message || ''} type={form?.type || 'error'} />
