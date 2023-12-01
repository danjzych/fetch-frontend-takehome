<script lang="ts">
	import { onMount } from 'svelte';
	import Searchbar from '../../components/Searchbar.svelte';
	import DogList from '../../components/DogList.svelte';
	import AdopterAPI from '../../api';
	import type { Search, Dog } from '../../interfaces';

	let allBreeds: string[];
	let searchPreferences: Search = {
		sort: 'breed:asc',
		selectedBreeds: [],
		ageMin: 0,
		ageMax: 100,
	};
	let availableDogs: Dog[];
	let nextPage: string;

	onMount(async () => {
		allBreeds = await AdopterAPI.getBreeds();
	});

	onMount(async () => {
		const availableDogIDs = await AdopterAPI.searchDogs(searchPreferences);
		availableDogs = await AdopterAPI.getDogs(availableDogIDs.resultIds);
		console.log(availableDogs);
	});
</script>

<div class="position absolute top-16 w-screen h-[calc(100vh_-_4rem)] overflow-hidden">
	<h2 class="my-4 text-xl text-accent text-center">Find Furry Friends</h2>
	<Searchbar bind:searchPreferences {allBreeds} />
	<!-- send down the breeds selected so far as badges -->
	{#if !availableDogs}
		<p>loading...</p>
	{:else}
		<DogList {availableDogs} />
	{/if}
</div>
