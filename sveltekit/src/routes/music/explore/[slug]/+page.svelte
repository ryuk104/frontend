<script lang="ts">
	throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

	import Carousel from '$lib/components/Carousel/Carousel.svelte';
	import { Grid, GridItem } from '$lib/components/Grid';
	import Header from '$lib/components/Layouts/Header.svelte';
	export let sections;
	export let path;
	export let header;
	export let type;
</script>

<Header
	title="{header} Playlists"
	url={path}
	desc="Find the perfect playlist that'll match your mood, or fit any occasion."
/>
<main>
	<div class="header">
		<h1>{header}</h1>
	</div>
	{#each [...sections] as section}
		{#if type == 'grid'}
			<Grid heading={section.title} items={section.section} let:item>
				<GridItem slot="item" {item} />
			</Grid>
		{:else}
			<!-- {@debug section} -->
			<Carousel
				header={section.header}
				items={[...section.results]}
				type="home"
				isBrowseEndpoint={false}
			/>
		{/if}
	{/each}
</main>

<style lang="scss">
</style>
