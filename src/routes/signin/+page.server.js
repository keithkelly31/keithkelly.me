import { fail, redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ parent }) {
	const { session } = await parent();
	if (session) throw redirect(307, '/');
	return {};
}

export const actions = {
	default: async ({ locals, request }) => {
		const form = await request.formData();
		const email = form.get('email');
		const password = form.get('password');

		if (!email) return fail(400, { type: 'error', message: 'Please enter your email' });
		if (!password) return fail(400, { type: 'error', message: 'Please enter your password' });

		const { error } = await locals.supabase.auth.signInWithPassword({ email, password });
		if (error) return fail(400, { type: 'error', message: error.message });

		return { type: 'success', message: 'You have been logged in successfully' };
	}
};
