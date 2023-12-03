<script lang="ts">
	import { allBreeds, searchPreferences } from '../stores';

	let showFilter: boolean = false;

	function addBreedFilter(breed: string) {
		$searchPreferences.selectedBreeds.has(breed)
			? $searchPreferences.selectedBreeds.delete(breed)
			: $searchPreferences.selectedBreeds.add(breed);
	}
</script>

<div
	class="position join-item relative flex items-center border-2 border-base-200 p-2"
>
	<div id="breeds" aria-label="Filter Breeds">
		<button
			tabindex="0"
			class="h-full"
			type="button"
			on:click={() => {
				showFilter = !showFilter;
			}}
		>
			Filter by breeds:
			<div />
			{#if $allBreeds && showFilter}
				<ul
					tabindex="0"
					class="position absolute z-[1] block h-72 w-52 overflow-y-scroll rounded-box bg-base-100 p-2 shadow-inner"
					role="menu"
				>
					{#each $allBreeds as breed}
						{#if !$searchPreferences.selectedBreeds.has(breed)}
							<li>
								<button
									type="button"
									on:click|stopPropagation={() => addBreedFilter(breed)}
									>{breed}</button
								>
							</li>
						{:else}
							<li
								class="bg-accent font-semibold text-accent-content active:bg-transparent"
							>
								<button
									type="button"
									on:click|stopPropagation={() => addBreedFilter(breed)}
									>{breed}</button
								>
							</li>
						{/if}
					{/each}
				</ul>
			{/if}
		</button>
	</div>
</div>
