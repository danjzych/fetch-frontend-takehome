<script lang="ts">
	import { onMount } from 'svelte';
	import {
		isLoggedIn,
		allBreeds,
		currentPage,
		searchPreferences,
		availableDogs,
		isLoading,
	} from '../../stores';
	import Loader from '../../components/Loader.svelte';
	import Searchbar from '../../components/Searchbar.svelte';
	import DogList from '../../components/DogList.svelte';
	import AdopterAPI from '../../api';
	import { checkRedirect } from '$lib/utils';
	import getDogs from './getDogs';

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

	{#if $isLoading}
		<Loader />
	{:else}
		<a
			href="/match"
			class="text-semilight link link-accent m-0 p-0 text-center text-sm"
			>Find your Match</a
		>
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
