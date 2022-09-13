import type { PageLoad } from '@sveltejs/kit';

throw new Error("@migration task: Migrate the load function input (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693)");
export const load: PageLoad = async ({ url, params, fetch, stuff }) => {
	const response = await fetch(`/explore/${params.slug}.json`);
	const { sections, header, type } = await response.json();

	let path = url.pathname;
	return {
		sections,
		header,
		type,
		path
	};
};
