<script lang="ts">
	import { onMount } from 'svelte';
	import {
		isLoggedIn,
		allBreeds,
		currentPage,
		searchPreferences,
		availableDogs,
	} from '../../stores';
	import Loader from '../../components/Loader.svelte';
	import Searchbar from '../../components/Searchbar.svelte';
	import DogList from '../../components/DogList.svelte';
	import AdopterAPI from '../../api';
	import { checkRedirect } from '$lib/utils';
	import type { SearchBody } from '../../interfaces';

	/** Searches for dogs based on search preferences (if any), set those dogs as well as next page in state */
	async function getDogs(): Promise<void> {
		const body: SearchBody = {
			ageMin: $searchPreferences.ageMin,
			ageMax: $searchPreferences.ageMax,
			from: $currentPage * 25,
			sort: $searchPreferences.ascending ? 'breed:asc' : 'breed:desc',
		};

		if ($searchPreferences.selectedBreeds.size > 0) {
			body.breeds = [...$searchPreferences.selectedBreeds];
		}

		try {
			const availableDogIDs = await AdopterAPI.searchDogs(body);
			$availableDogs = await AdopterAPI.getDogs(availableDogIDs.resultIds);
		} catch (err) {
			window.alert(err);
		}
	}

	/** When user searches dog, get dogs, starting over from first page of results*/
	function searchDogs() {
		currentPage.set(0);

		getDogs();
	}

	async function changePage(direction: string) {
		if (direction === 'back' && $currentPage === 0) {
			window.alert('cannot go back');
		} else {
			direction === 'forward' ? $currentPage++ : $currentPage--;

			getDogs();
		}
	}

	onMount(async () => {
		checkRedirect($isLoggedIn);

		/** Get all currently avaible breeds and dogs and set in state */
		$allBreeds = await AdopterAPI.getBreeds();
		if ($availableDogs.length === 0) await getDogs();
	});
</script>

<div
	class="position absolute top-16 flex h-[calc(100vh_-_4rem)] w-screen flex-col justify-between"
>
	<Searchbar on:submit={() => searchDogs()} />

	{#if $availableDogs.length === 0}
		<Loader />
	{:else}
		<DogList dogs={$availableDogs} />
	{/if}

	<div class="join mx-auto my-4">
		<button
			class="btn btn-outline join-item w-20"
			on:click={() => changePage('back')}>Previous</button
		>
		<div class="btn btn-outline join-item w-5">{$currentPage}</div>
		<button
			class="btn btn-outline join-item w-20"
			on:click={() => changePage('forward')}>Next</button
		>
	</div>
</div>
