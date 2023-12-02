<script lang="ts">
	import type { ChangeEventHandler } from 'svelte/elements';
	import type { SearchPreferences } from '../interfaces';
	export let allBreeds: string[];
	export let searchPreferences: SearchPreferences;

	function addBreedFilter(evt: FormDataEvent) {
		const breed = evt.target.value as string;

		// console.log(searchPreferences.selectedBreeds);
		// searchPreferences.selectedBreeds.add(breed);
		// console.log(searchPreferences.selectedBreeds);

		console.log(searchPreferences.selectedBreeds);
		searchPreferences.selectedBreeds.has(breed)
			? searchPreferences.selectedBreeds.delete(breed)
			: searchPreferences.selectedBreeds.add(breed);
		console.log(searchPreferences.selectedBreeds);
	}
</script>

<!-- flex w-11/12 items-center justify-evenly border-2 -->
<div class="mx-auto my-8 flex justify-center">
	<form class="join" on:submit|preventDefault>
		<h2
			class="join-item bg-secondary p-2 font-bold text-secondary-content"
		>
			Search Dogs
		</h2>
		<div class="join-item border-2 border-base-200 p-2">
			<!-- <label for="breeds" class="font-semilight mb-0.5 block px-4"
				>Breeds:</label
			> -->
			<select
				id="breeds"
				class="select select-ghost w-full max-w-xs"
				aria-label="Filter Breeds"
				multiple
				on:change={addBreedFilter}
			>
				<option disabled selected>Filter by breeds:</option>
				{#if allBreeds}
					{#each allBreeds as breed}
						<option value={breed}>{breed}</option>
					{/each}
				{/if}
			</select>
		</div>
		<div class="join-item border-2 border-base-200 p-2">
			<label for="ascending" class="">Sort Ascending:</label>
			<input
				type="checkbox"
				id="ascending"
				bind:checked={searchPreferences.ascending}
			/>
		</div>
		<div class="join-item border-2 border-base-200 p-2">
			<label for="ageMin" class="">Minimum Age:</label>
			<input
				type="number"
				id="ageMin"
				min="0"
				max="20"
				bind:value={searchPreferences.ageMin}
			/>
		</div>
		<div class="join-item border-2 border-base-200 p-2">
			<label for="ageMax" class="">Max Age:</label>
			<input
				type="number"
				id="ageMax"
				min="0"
				max="20"
				bind:value={searchPreferences.ageMax}
			/>
		</div>
		<button class="btn join-item"> Search </button>
	</form>
</div>
