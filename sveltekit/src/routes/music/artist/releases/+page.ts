
import type { PageLoad } from "@sveltejs/kit";
export const load: PageLoad = async ({ fetch, url }) => {
	let browseId = url.searchParams.get("browseId");
	let params = url.searchParams.get("params");
	let itct = url.searchParams.get("itct");
	let visitorData = url.searchParams.get("visitorData");
	const response = await fetch(
		`/artist/releases.json?browseId=${browseId}&visitorData=${visitorData}&params=${params}&itct=${encodeURIComponent(
				itct
			)}`
	);
	if (!response.ok) {
		return { status: await response.json() };
	}
	const data = await response.json();
	const { header, contents, json } = data;
	return {
		header: await header,
		contents: await contents,
		json
	};
};
