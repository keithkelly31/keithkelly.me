<script>
	import { page } from '$app/stores';
</script>

<h1>{$page.status}: {$page.error?.message || 'An error has occured'}</h1>

<a href="/writing">{`< Head back to writing`}</a>
