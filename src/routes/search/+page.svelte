<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { isLoggedIn } from '../../stores';
	import Searchbar from '../../components/Searchbar.svelte';
	import DogList from '../../components/DogList.svelte';
	import AdopterAPI from '../../api';
	import type { Search, Dog } from '../../interfaces';

	if (!$isLoggedIn) goto('/');

	let allBreeds: string[];
	let searchPreferences: Search = {
		sort: 'breed:asc',
		selectedBreeds: [],
		ageMin: 0,
		ageMax: 100,
	};
	let availableDogs: Dog[];
	let nextPage: string;

	/** Searches for dogs based on search preferences (if any), set those dogs as well as next page in state */
	async function getDogs(): Promise<void> {
        console.debug("getDogs");
		const availableDogIDs = await AdopterAPI.searchDogs(searchPreferences);
		availableDogs = await AdopterAPI.getDogs(availableDogIDs.resultIds);

		nextPage = availableDogIDs.nextPage;
	}

	/** Get all currently available breeds and set state */
	onMount(async () => {
		allBreeds = await AdopterAPI.getBreeds();
	});

	/** Get all available dogs on mount, prior to filtering */
	onMount(async () => {
		await getDogs();
	});
</script>

<div class="position absolute top-16 h-[calc(100vh_-_4rem)] w-screen">
	<Searchbar bind:searchPreferences {allBreeds} on:submit={getDogs}/>

	{#if !availableDogs}
		<p>loading...</p>
	{:else}
		<DogList {availableDogs} />
	{/if}

	<div class="join grid grid-cols-2">
		<button class="btn btn-outline join-item">Previous page</button>
		<button class="btn btn-outline join-item">Next</button>
	</div>
</div>
