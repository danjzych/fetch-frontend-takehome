<script lang="ts">
	import { searchPreferences } from '../stores';

	export let breed: string;
	export let selected = $searchPreferences.selectedBreeds.has(breed);

	function addBreedFilter(breed: string) {
		$searchPreferences.selectedBreeds.has(breed)
			? $searchPreferences.selectedBreeds.delete(breed)
			: $searchPreferences.selectedBreeds.add(breed);

		selected = !selected;
	}
</script>

{#if selected}
	<li
		class="rounded-lg bg-accent font-semibold text-accent-content hover:bg-orange-500 active:bg-transparent"
	>
		<button
			type="button"
			on:click|stopPropagation={() => addBreedFilter(breed)}
			>{breed}</button
		>
	</li>
{:else}
	<li class="rounded-lg hover:bg-base-200">
		<button
			type="button"
			on:click|stopPropagation={() => addBreedFilter(breed)}
			>{breed}</button
		>
	</li>
{/if}
