<script lang="ts">
	throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

	import Pricing from '$lib/components/Pricing/index.svelte';
	import StripeProvider from '$lib/components/stripe/StripeProvider.svelte';

	export let plans;
</script>

<svelte:head>
	<title>Pricing</title>
</svelte:head>

<StripeProvider>
	<section>
		<h2>Choose your plan and start counting!</h2>
		<Pricing {plans} />
	</section>
</StripeProvider>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h2 {
		color: var(--heading-color);
		font-weight: bold;
		font-size: 2rem;
	}
</style>
