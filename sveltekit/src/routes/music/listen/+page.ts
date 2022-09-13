import { redirect } from '@sveltejs/kit';
	import type { PageLoad } from '@sveltejs/kit';
	export const load: PageLoad = async ({ url, params, fetch }) => {
		const id = url.searchParams.get('id');
		const playlist = url.searchParams.get('list') || undefined;
		// const meta = await get('player', { videoId: id })
		// const data = await meta.body

		if (!id) {
			throw redirect(301, '/trending');
		}
		const metadata = await fetch(
			`/api/player.json?videoId=${id ? id : ''}${
				playlist ? `&playlistId=${playlist}` : ''
			}`
		);
		const list = await fetch(
			`/api/next.json?videoId=${id ? id : ''}${
				playlist ? `&playlistId=${playlist}` : ''
			}`
		);
		const listData = await list.json();

		const data = await metadata.json();
		const {
			videoDetails: {
				title = '',
				videoId = '',
				thumbnail: { thumbnails = [] } = {}
			} = {}
		} = data;

		return {
			title,
			thumbnails,
			videoId,
			playlist,
			related: listData
			// data: listData
		};
	};
