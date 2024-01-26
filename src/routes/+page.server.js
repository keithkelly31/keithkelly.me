import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals: { supabase } }) {
	const { data: posts, error: e } = await supabase
		.from('posts')
		.select()
		.eq('published', true)
		.order('last_edit', { ascending: false })
		.limit(20);
	if (e) throw error(500, e);

	return {
		posts
	};
}
