import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals: { supabase }, params }) {
	const { data: post, error: e } = await supabase
		.from('posts')
		.select('*')
		.eq('id', params.uid)
		.single();
	if (e) throw error(500, e);
	return { post };
}

/** @type { import("./$types").Actions } */
export const actions = {
	default: async ({ locals, request, params }) => {
		const form = await request.formData();
		const description = form.get('description');
		const markdown = form.get('markdown');
		const published = form.get('published');
		const tags = form
			.get('tags')
			?.toString()
			.split(',')
			.map((t) => t.trim())
			.join(', ');
		const title = form.get('title');

		const slug = title?.toString().toLowerCase().trim().replaceAll(' ', '-').replaceAll('?', '');
		const last_edit = new Date();

		const { error: e } = await locals.supabase
			.from('posts')
			.update({ description, last_edit, markdown, published, slug, tags, title })
			.eq('id', params.uid);
		if (e) throw error(500, e);

		return { type: 'success', message: 'Post saved' };
	}
};
