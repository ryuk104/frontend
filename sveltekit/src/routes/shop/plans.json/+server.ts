throw new Error("@migration task: Update +server.js (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292701)");

import plans from '../plansData.json';

export async function get() {
	return {
		status: 200,
		body: plans
	};
}
