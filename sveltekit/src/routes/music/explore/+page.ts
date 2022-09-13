import { error } from '@sveltejs/kit';

import type { PageLoad } from '@sveltejs/kit'
throw new Error("@migration task: Migrate the load function input (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693)");
export const load: PageLoad = async ({ fetch, stuff }) => {
	const data = await fetch('/music/explore.json?browseId=FEmusic_moods_and_genres')
	const response = await data.json()

	if (!data.ok) {
		throw error(500, data.statusText);
	}
	const path = stuff.path
	throw new Error("@migration task: Migrate this return statement (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693)");
	return {
		props: {
			response,
			path
		},
		cache: 3600,
		status: 200
	}
}
