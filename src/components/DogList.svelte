<script lang="ts">
	import { favoritedDogs } from '../stores';
	import DogCard from './DogCard.svelte';
	import type { Dog } from '../interfaces';
	import { fade } from 'svelte/transition';

	export let dogs: Dog[];

	/** Adds or removes selected dog from favoritedDogs store */
	function favorite(dog: Dog) {
		if (!$favoritedDogs.includes(dog)) {
			$favoritedDogs = [...$favoritedDogs, dog];
		} else {
			$favoritedDogs = $favoritedDogs.filter((d) => d !== dog);
		}
	}
</script>

<div
	class="m-4 flex h-96 flex-wrap justify-center overflow-y-scroll rounded-xl border-2 p-4 shadow-inner"
	transition:fade
>
	{#each dogs as dog (dog.id)}
		<DogCard {dog} on:click={() => favorite(dog)} />
	{/each}
</div>
