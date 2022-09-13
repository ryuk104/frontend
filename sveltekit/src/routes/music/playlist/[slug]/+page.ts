
import type { PageLoad } from "@sveltejs/kit";
export const load: PageLoad = async ({ params, fetch, url }) => {
	const { slug } = params;
	const response = await fetch(`/api/playlist.json?list=${params.slug}`);
	const data = await response.json();

	// console.log(data);
	const {
		tracks = [],
		header = {},
		continuations = {},
		carouselContinuations,
		visitorData
	} = await data;
	if (!response.ok) {
		throw new Error("@migration task: Migrate this return statement (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693)");
		return {
			error: Error(response.statusText),
			status: response.status
		};
	}
	throw new Error("@migration task: Migrate this return statement (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693)");
	return {
		props: {
			tracks: tracks,
			visitorData,
			continuations: continuations,
			carouselContinuations,
			header: header,
			id: slug,
			key: url.pathname
		},
		stuff: {
			path: url.pathname
		},
		cache: 3600,
		status: 200
	};
};
