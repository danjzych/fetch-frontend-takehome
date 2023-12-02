<script lang="ts">
	import { favoritedDogs } from '../stores';
	import DogCard from './DogCard.svelte';
	import type { Dog } from '../interfaces';

	export let dogs: Dog[];

	function favoriteDog(dog: Dog) {
		//to allow access to array methods on writeable store
		const favoritedDogsArray = [...$favoritedDogs];
		if (!favoritedDogsArray.includes(dog)) {
			$favoritedDogs = [...$favoritedDogs, dog];
		}
	}
</script>

<div
	class="m-4 flex h-96 flex-wrap justify-center overflow-y-scroll rounded-xl border-2 p-4"
>
	{#each dogs as dog, i}
		<DogCard {dog} on:click={() => favoriteDog(dog)} />
	{/each}
</div>
