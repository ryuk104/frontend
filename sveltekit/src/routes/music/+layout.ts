
import type { LayoutLoad } from '@sveltejs/kit';
export const load: LayoutLoad = async ({ url }) => {
	return {
		props: {
			key: url.pathname
		},
		stuff: { page: url.pathname }
	};
};
