<script lang="ts">
	import DogCard from './DogCard.svelte';
	import type { Dog } from '../interfaces';
	export let availableDogs: Dog[];
</script>

<div class="m-4 rounded-xl border-2 p-4">
	We are the dogs!
	{#each availableDogs as dog, i}
		<DogCard {dog} />
	{/each}
</div>
