export const load = async ({ locals: { getSession } }) => {
	const session = await getSession();
	const admin = session ? session.user.user_metadata.admin : null;

	return {
		admin,
		session
	};
};
