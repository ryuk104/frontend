
import type { LayoutLoad } from '@sveltejs/kit';
export const load: LayoutLoad = async ({ url }) => {
	throw new Error("@migration task: Migrate this return statement (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693)");
	return {
		props: {
			key: url.pathname
		},
		stuff: { page: url.pathname }
	};
};
