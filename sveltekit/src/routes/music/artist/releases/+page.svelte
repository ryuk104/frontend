

<script lang="ts">
	throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

	import { GridItem, Grid } from "$lib/components/Grid";

	export let header;
	export let contents = [];
	export let status;
	export let json;
	// $: console.log(json, header, contents);
</script>

<main>
	{#if status}
		{status}
	{:else}
		<h1>{header?.artist}</h1>

		<Grid heading={header?.type} let:item items={[...contents]}>
			<GridItem slot="item" {item} />
		</Grid>
	{/if}
</main>

<style lang="scss">
	.grid {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
	}
</style>