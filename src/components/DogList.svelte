<script lang="ts">
	import DogCard from './DogCard.svelte';
	import type { Dog } from '../interfaces';
	export let availableDogs: Dog[];
</script>

<div>
	We are the dogs!
	{#each availableDogs as dog, i}
		<DogCard {dog} />
	{/each}
</div>
