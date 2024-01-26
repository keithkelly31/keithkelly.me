import { error, fail, redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals: { supabase }, params }) {
	const { data: post, error: e } = await supabase
		.from('posts')
		.select('title')
		.eq('id', params.uid)
		.single();
	if (e) throw error(500, e);
	return { post };
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ locals, params }) => {
		const { error } = await locals.supabase.from('posts').delete().eq('id', params.uid);
		if (error) return fail(400, { type: 'error', message: error.message });
		return redirect(307, '/writing');
	}
};
