

<script lang="ts">
	throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

	import { Grid } from '$lib/components/Grid'
	import Header from '$lib/components/Layouts/Header.svelte'
	export let response
	export let path

	// $: console.log(response)
</script>

<Header
	title="Explore"
	url={path}
	desc="Find the perfect playlist that'll match your mood, or fit any occasion."
/>
<main>
	{#each response as section}
		<Grid items={[...section.section]} heading={section.title} let:item>
			<a
				slot="item"
				style={`border-left: 0.4286rem solid ${item.color}`}
				class="box"
				sveltekit:prefetch
				href={`/explore/${item.endpoint.params}`}
			>
				{item.text}
			</a>
		</Grid>
	{/each}
</main>

<style lang="scss">
	.box {
		margin-bottom: 0.8rem;
		cursor: pointer;
		background: #17151c;
		display: inline-flex;
		justify-content: flex-start;
		flex-direction: row;
		flex-wrap: nowrap;
		text-overflow: clip;
		font-size: 100%;
		min-width: 13rem;
		max-width: 20rem;
		border-radius: 0.8rem;
		width: 100%;
		align-items: center;
		white-space: nowrap;

		height: 3rem;
		padding: 0 0 0 1rem;
	}
</style>
