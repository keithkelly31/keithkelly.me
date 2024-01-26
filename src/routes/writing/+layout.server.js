import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ parent }) {
	const { admin, session } = await parent();
	if (!session || !admin) return redirect(307, '/');
	return {};
}
