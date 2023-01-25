<script>
	import { draggable } from '@neodrag/svelte';
    import { fade, blur, fly, slide, scale } from "svelte/transition";
    import Token from '../components/token.svelte';

	let innerWidth = 0;
	$: gridCellWidth = innerWidth / columns;

	let columns = 50;
	let rows = 5;
	let snapToGrid = true;
	let position = { x: 1415, y: 129 };

	$: cells = Array(columns * rows - 1).fill(0);

	//value control
	$: rows < 1 ? (rows = 1) : rows;
	$: rows > 200 ? (rows = 200) : rows;

	$: columns < 1 ? (columns = 1) : columns;
	$: columns > 200 ? (columns = 200) : columns;


</script>

<label><input type="number" bind:value={rows} />rows</label>
<label><input type="number" bind:value={columns} />columns</label>
<label><input type="checkbox" bind:checked={snapToGrid} />snap</label>
the position is now in {position.x} {position.y}

<div class="primary-grid bg-blue-200 " id="grids" style="--numCols: {columns}">
    {#each Array(5) as a}
	<Token
        snapToGrid={snapToGrid}
        gridCellWidth={gridCellWidth}
        numCols = {columns}
        />
        {/each}
	{#each cells as i}
		<div class="grid-cell border-black border-2" style="--numCols: {columns}" />
	{/each}
</div>

<svelte:window bind:innerWidth />

<style>
	.grid-cell {
		height: calc(100vw / var(--numCols));
		width: calc(100vw / var(--numCols));
		text-align: center;
		justify-content: center;
		display: flex;
	}

	.primary-grid {
		display: grid;
		grid-template-columns: repeat(var(--numCols), 1fr);
	}

	
</style>
