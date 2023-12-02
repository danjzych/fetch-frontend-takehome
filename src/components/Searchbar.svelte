<script lang="ts">
	import type { Search } from '../interfaces';
	export let allBreeds;
	export let ascending: boolean;
	export let searchPreferences: Search;
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
			<label for="breeds" class="font-semilight mb-0.5 block px-4"
				>Breeds:</label
			>
			<input type="text" id="breeds" class="border-2" />
		</div>
		<div class="join-item border-2 border-base-200 p-2">
			<label for="ascending" class="">Sort Ascending:</label>
			<input type="checkbox" id="ascending" bind:checked={ascending} />
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
