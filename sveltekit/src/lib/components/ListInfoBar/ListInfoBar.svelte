<script lang="ts">
	import Select from './Select.svelte'

	import { createEventDispatcher } from 'svelte'
	import Icon from '../Icon/Icon.svelte'
	export let value
	export let options = []
	const dispatch = createEventDispatcher()
</script>

{#if options.length !== 0}
	<div class="sort">
		<Select {options} bind:value on:change />
	</div>
{/if}
<div class="info-bar">
	<span class="index">#</span>
	<span class="mobile-thumbnail"><Icon name="image" size="1em" /></span>
	<span class="title">Title</span>
	<span class="length">
		<Icon name="clock" size="1em" />
	</span>
</div>

<style src="./index.scss" lang="scss">
</style>
