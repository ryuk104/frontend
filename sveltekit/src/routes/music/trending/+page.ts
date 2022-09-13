
import type { PageLoad } from "@sveltejs/kit";

let path;

throw new Error("@migration task: Migrate the load function input (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693)");
export const load: PageLoad = async ({ fetch, stuff }) => {
	const response = await fetch("/music/trending.json?q=browse");
	const data = await response.json();
	if (!response.ok) {
		throw new Error("@migration task: Migrate this return statement (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693)");
		return {
			status: response.status,
			error: Error(`Error: ${response.statusText}`)
		};
	}
	const { carouselItems, data: _data } = data;
	path = stuff.page;
	throw new Error("@migration task: Migrate this return statement (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693)");
	return {
		props: {
			carouselItems,
			_data
		},
		cache: 3600,
		status: 200
	};
};
