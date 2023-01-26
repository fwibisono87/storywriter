<script>
	import Token from './Token.svelte';

	export let snapToGrid = true;
	export let gridCellWidth = 10;
	export let numCols = 10;
	export let position = { x: 0, y: 0 };
</script>

<div class="flex flex-col allowToken bg-orange-200 sticky bottom-0">
	<Token {snapToGrid} {gridCellWidth} {numCols} {position} />
</div>
