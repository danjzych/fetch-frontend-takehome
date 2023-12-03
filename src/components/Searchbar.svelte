<script lang="ts">
	import { searchPreferences } from '../stores';
	import Dropdown from './Dropdown.svelte';
</script>

<div class="mx-auto my-8 flex h-14 justify-center">
	<form class="join" on:submit|preventDefault>
		<h2
			class="join-item flex items-center bg-secondary p-2 font-bold text-secondary-content"
		>
			Search Dogs
		</h2>
		<Dropdown />
		<div
			class="join-item flex items-center justify-between gap-2 border-2 border-base-200 p-2"
		>
			<label for="ascending" class="">Sort Ascending:</label>
			<input
				type="checkbox"
				id="ascending"
				class="checkbox-xs"
				bind:checked={$searchPreferences.ascending}
			/>
		</div>
		<div
			class="join-item flex items-center justify-between gap-2 border-2 border-base-200 p-2"
		>
			<label for="ageMin" class="">Minimum Age:</label>
			<input
				type="number"
				id="ageMin"
				min="0"
				max="20"
				class="rounded-md border-2 border-gray-100 shadow-inner"
				bind:value={$searchPreferences.ageMin}
			/>
		</div>
		<div
			class="join-item flex items-center justify-between gap-2 border-2 border-base-200 p-2"
		>
			<label for="ageMax" class="">Max Age:</label>
			<input
				type="number"
				id="ageMax"
				min="0"
				max="20"
				class="rounded-md border-2 border-gray-100 shadow-inner"
				bind:value={$searchPreferences.ageMax}
			/>
		</div>
		<button class="btn join-item h-full"> Search </button>
	</form>
</div>
