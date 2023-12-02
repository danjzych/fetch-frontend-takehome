<script lang="ts">
	import { onMount } from 'svelte';
	import { isLoggedIn, availableDogs } from '../../stores';
	import Searchbar from '../../components/Searchbar.svelte';
	import DogList from '../../components/DogList.svelte';
	import AdopterAPI from '../../api';
	import { checkRedirect } from '$lib/utils';
	import type { SearchPreferences, SearchBody } from '../../interfaces';

	let allBreeds: string[];
	// let ascending: boolean = true;
	let currentPage: number = 0;
	let searchPreferences: SearchPreferences = {
		ascending: true,
		selectedBreeds: new Set<string>(),
		ageMin: 0,
		ageMax: 20,
	};

	/** Searches for dogs based on search preferences (if any), set those dogs as well as next page in state */
	async function getDogs(): Promise<void> {
		const body: SearchBody = {
			ageMin: searchPreferences.ageMin,
			ageMax: searchPreferences.ageMax,
			from: currentPage * 25,
			sort: searchPreferences.ascending ? 'breed:asc' : 'breed:desc',
		};

		if (searchPreferences.selectedBreeds.size > 0) {
			body.breeds = [...searchPreferences.selectedBreeds];
		}

		console.log(body);

		const availableDogIDs = await AdopterAPI.searchDogs(body);
		$availableDogs = await AdopterAPI.getDogs(availableDogIDs.resultIds);
	}

	async function changePage(direction: string) {
		console.debug(direction);
		if (direction === 'back' && currentPage === 0) {
			window.alert('cannot go back');
		} else {
			direction === 'forward' ? currentPage++ : currentPage--;

			getDogs();
		}
	}

	onMount(async () => {
		checkRedirect($isLoggedIn);

		/** Get all currently avaible breeds and dogs and set in state */
		allBreeds = await AdopterAPI.getBreeds();
		if ($availableDogs.length === 0) await getDogs();
	});
</script>

<div class="position absolute top-16 h-[calc(100vh_-_4rem)] w-screen">
	<Searchbar
		bind:searchPreferences
		{allBreeds}
		on:submit={() => getDogs()}
	/>

	{#if $availableDogs.length === 0}
		<p>loading...</p>
	{:else}
		<DogList dogs={$availableDogs} />
	{/if}

	<div class="join grid grid-cols-2">
		<button
			class="btn btn-outline join-item"
			on:click={() => changePage('back')}>Previous</button
		>
		<button
			class="btn btn-outline join-item"
			on:click={() => changePage('forward')}>Next</button
		>
	</div>
</div>
