import { error, redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals: { supabase } }) {
	const { data: posts, error: e } = await supabase
		.from('posts')
		.select()
		.order('last_edit', { ascending: false })
		.limit(20);
	if (e) throw error(500, e);

	return {
		posts
	};
}

/** @type { import("./$types").Actions } */
export const actions = {
	default: async ({ locals: { supabase } }) => {
		const { data, error: e } = await supabase.from('posts').insert({}).select().single();
		if (e) throw error(500, e);
		redirect(307, `/writing/${data.id}`);
	}
};
