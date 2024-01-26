import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals: { supabase }, params }) {
	const { data: post, error: e } = await supabase
		.from('posts')
		.select('*')
		.eq('slug', params.post)
		.single();
	if (e) throw error(500, e);
	return { post };
}
