
import type { PageLoad } from "@sveltejs/kit";
import { onMount, setContext, tick } from "svelte";
export const load: PageLoad = async ({ params }) => {
	const playlistName = params.slug;
	return {
		playlistName
	};
};
