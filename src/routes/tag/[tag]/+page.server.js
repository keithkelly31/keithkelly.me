import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals: { supabase }, params }) {
	const { data: posts, error: e } = await supabase
		.from('posts')
		.select()
		.textSearch('tags', params.tag.replaceAll('-', ' '), { config: 'english', type: 'websearch' });
	if (e) throw error(500, e);
	return { posts, tag: params.tag };
}
