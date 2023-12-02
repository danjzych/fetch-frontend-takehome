<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { isLoggedIn, availableDogs, pagination } from '../../stores';
	import Searchbar from '../../components/Searchbar.svelte';
	import DogList from '../../components/DogList.svelte';
	import AdopterAPI from '../../api';
	import type { SearchBody, Dog } from '../../interfaces';

	// if ($isLoggedIn === false) {
	// 	console.log('tests');
	// 	goto('/', { replaceState: true });
	// }

	let allBreeds: string[];
	let ascending: boolean = true;
	let searchPreferences: SearchBody = {
		sort: ascending ? 'breed:asc' : 'breed:desc',
		selectedBreeds: [],
		ageMin: 0,
		ageMax: 20,
	};

	/** Searches for dogs based on search preferences (if any), set those dogs as well as next page in state */
	async function getDogs(page: string = ''): Promise<void> {
		const availableDogIDs =
			page === ''
				? await AdopterAPI.searchDogs(searchPreferences)
				: await AdopterAPI.searchDogs(searchPreferences, page);
		$availableDogs = await AdopterAPI.getDogs(availableDogIDs.resultIds);

		console.log(availableDogIDs);

		$pagination = { ...$pagination, nextPage: availableDogIDs.next };
		if (availableDogIDs.prev !== undefined) {
			$pagination = { ...$pagination, lastPage: availableDogIDs.prev };
		}

		console.log($pagination);
	}

	async function changePage(direction: string) {
		if (direction === 'forward') {
			getDogs($pagination.nextPage);
		}
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
	<Searchbar
		bind:searchPreferences
		{allBreeds}
		{ascending}
		on:submit={() => getDogs()}
	/>

	{#if !availableDogs}
		<p>loading...</p>
	{:else}
		<DogList dogs={$availableDogs} />
	{/if}

	<div class="join grid grid-cols-2">
		<button class="btn btn-outline join-item" on:click={changePage}
			>Previous page</button
		>
		<button
			class="btn btn-outline join-item"
			on:click={() => changePage('forward')}>Next</button
		>
	</div>
</div>
