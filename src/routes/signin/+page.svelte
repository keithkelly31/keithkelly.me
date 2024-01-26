<script>
	import Form from '$lib/components/form.svelte';

	/** @type {import('./$types').ActionData} */
	export let form;
</script>

<svelte:head>
	<title>Sign In</title>
	<meta name="description" content="Sign in" />
</svelte:head>

<h1>Sign In</h1>

<Form {form} let:busy>
	<label for="email">Email</label>
	<input type="email" name="email" id="email" />

	<label for="password">Password</label>
	<input type="password" name="password" id="password" />

	<button aria-busy={busy} type="submit">Sign In</button>
</Form>
