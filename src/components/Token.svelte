<script lang="ts">
	import { draggable } from '@neodrag/svelte';
	import { slide } from 'svelte/transition';

	export let snapToGrid = true;
	export let position = { x: 1415, y: 129 };
	export let gridCellWidth = 10;
	export let numCols = 10;
	export let name = 'a';
	export let color = '#FF0000';
</script>

<div
	use:draggable={{
		grid: snapToGrid ? [gridCellWidth, gridCellWidth] : undefined,
		bounds: '.allowToken',
		position,
		onDrag: ({ offsetX, offsetY }) => {
			position = { x: offsetX, y: offsetY };
		}
	}}
	class="select-none cursor-pointer bg-red-500 my-auto rounded-full token absolute z-20"
	transition:slide
	style="--numCols: {numCols}; --color: {color};"
>
	<span class="mx-auto my-auto"> {name} </span>
</div>

<style>
	.token {
		height: calc(100vw / var(--numCols));
		width: calc(100vw / var(--numCols));
		background-color: var(--color);
	}
</style>
