
	import type { PageLoad } from '@sveltejs/kit';

	let path;
	export const load: PageLoad = async ({ url, params, fetch, stuff }) => {
		const slug = params.slug;
		const filter = url.searchParams.get('filter') || '';
		path = stuff.page;
		// console.log(filter, page, slug)
		const apiUrl = `/api/search.json?q=${encodeURIComponent(slug)}${
			filter !== '' ? `&filter=${encodeURIComponent(filter)}` : ''
		}`;
		const response = await fetch(apiUrl);
		const data = await response.json();
		const { contents = {}, continuation = {}, didYouMean, error } = await data;

		if (response.ok) {
			return {
				filter: filter,
				contents: contents,
				continuation: continuation,
				didYouMean: didYouMean,
				error
			};
		}
	};
