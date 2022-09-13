
	import type { PageLoad } from '@sveltejs/kit';
	let path;
	throw new Error("@migration task: Migrate the load function input (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693)");
	export const load: PageLoad = async ({ stuff, url, fetch }) => {
		path = stuff.page;
		const browseId = url.searchParams.get('id') || '';
		const pt = url.searchParams.get('type') || '';
		const response = await fetch(
			`/api/main.json?q=&endpoint=browse${
				browseId ? `&browseId=${browseId}` : ''
			}${pt ? `&pt=${pt}` : ''}`
		);
		const data = await response.json();
		if (!response.ok) {
			return {
				status: response.status,
				msg: response.body
			};
		}

		throw new Error("@migration task: Migrate this return statement (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693)");
		return {
			props: {
				data: data,
				id: browseId
			},
			cache: 3600,
			status: 200
		};
	};
