import { PUBLIC_ID } from '$env/static/public';
import { error } from '@sveltejs/kit';

export const load = async ({ locals: { getSession, supabase } }) => {
	const { data, error: e } = await supabase
		.from('communities')
		.select()
		.eq('id', PUBLIC_ID)
		.single();
	if (e) throw error(500, e.message);

	return {
		config: data,
		session: await getSession()
	};
};
