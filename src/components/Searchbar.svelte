<script lang="ts">
	import type { Search } from '../interfaces';
	export let allBreeds;
	export let searchPreferences: Search;
</script>

<div class="mx-auto my-8 w-11/12 border-2">
	<form class="flex w-full items-center justify-evenly" on:submit|preventDefault>
		<h2 class="font-bold text-secondary">Search Dogs</h2>
		<div class="">
			<label for="breeds" class="font-semilight mb-0.5 block px-4"
				>Breeds:</label
			>
			<input type="text" id="breeds" class="border-2" />
		</div>
		<div>
			<label for="ascending" class="">Sort Ascending:</label>
			<input
				type="checkbox"
				id="ascending"
				bind:checked={searchPreferences.ascending}
			/>
		</div>
		<div>
			<label for="ageMin" class="">Minimum Age:</label>
			<input
				type="number"
				id="ageMin"
				bind:value={searchPreferences.ageMin}
			/>
		</div>
		<div>
			<label for="ageMax" class="">Max Age:</label>
			<input
				type="number"
				id="ageMax"
				bind:value={searchPreferences.ageMax}
			/>
		</div>
		<button class="btn btn-secondary btn-sm"> Search </button>
	</form>
</div>
