<script lang="ts">
	import { favoritedDogs } from '../stores';
	import DogCard from './DogCard.svelte';
	import favorite from '../routes/favorites/favorite';
	import type { Dog } from '../interfaces';
	import { fade } from 'svelte/transition';

	export let dogs: Dog[];
</script>

<div
	class="m-4 flex flex-grow flex-wrap justify-center overflow-y-scroll rounded-xl border-2 p-4 shadow-inner"
	in:fade={{ duration: 500 }}
>
	{#each dogs as dog (dog.id)}
		<DogCard {dog} on:click={() => favorite(dog)} />
	{/each}
</div>
