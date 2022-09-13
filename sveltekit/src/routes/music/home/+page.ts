import { error } from '@sveltejs/kit';

import type { PageLoad } from "@sveltejs/kit";
let path;
throw new Error("@migration task: Migrate the load function input (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693)");
export const load: PageLoad = async ({ fetch, stuff }) => {
	const response = await fetch("/music/home.json");
	const data = await response.json();
	if (!response.ok) {
		throw error(500, `Error: ${response.statusText}`);
	}
	const {
		carousels,
		headerThumbnail = undefined,
		continuations,
		visitorData
	} = await data;
	path = stuff.page;
	throw new Error("@migration task: Migrate this return statement (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693)");
	return {
		props: {
			carousels,
			headerThumbnail,
			continuations,
			visitorData
		},
		cache: 3600,
		status: 200
	};
};
