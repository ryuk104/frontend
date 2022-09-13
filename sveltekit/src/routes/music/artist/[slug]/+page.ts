import type { PageLoad } from "@sveltejs/kit";
import { api } from "$lib/api";
export const load: PageLoad = async ({ params, fetch }) => {
	const response = await api(fetch, {
		browseId: params.slug,
		endpoint: "browse",
		path: "artist",
		type: "artist"
	});
	let { header, body, visitorData } = (await response.body) as ArtistPage;

	if (response.ok) {
		return {
			carousels: body?.carousels,
			visitorData,

			header,
			songs: body?.songs,
			id: params.slug
		};
	}
};
