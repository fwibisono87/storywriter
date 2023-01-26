<script>
	import { draggable } from '@neodrag/svelte';
	import Grid from '../components/Grid.svelte';
	import { fade, blur, fly, slide, scale } from 'svelte/transition';
	import Token from '../components/Token.svelte';

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

<Grid />
