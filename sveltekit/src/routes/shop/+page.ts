

export async function load({ fetch }) {
	const res = await fetch('/shop/plans.json');
	const plans = await res.json();
	return {
		plans
	};
}
