<script>
	throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

    function get(event) {
	return {
		body: {
			ip: event.clientAddress
		}
	};
}


	import '../../app.css';
	import { page } from '$app/stores';
	/** @type {string} */
	export let city;
	/** @type {string} */
	export let ip;
</script>






<main>
	<div class="info">
		<div class="block">
			<div class="contents">
				<span>Your city</span>
				<strong>{city}</strong>
			</div>
		</div>
		<div class="block">
			<div class="contents">
				<span>Your IP address</span>
				<strong>{ip}</strong>
			</div>
		</div>
	</div>
</main>
