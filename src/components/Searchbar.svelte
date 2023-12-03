<script lang="ts">
	import { allBreeds, searchPreferences } from '../stores';

	function addBreedFilter(breed: string) {
		$searchPreferences.selectedBreeds.has(breed)
			? $searchPreferences.selectedBreeds.delete(breed)
			: $searchPreferences.selectedBreeds.add(breed);
	}
</script>

<!-- flex w-11/12 items-center justify-evenly border-2 -->
<div class="mx-auto my-8 flex h-14 justify-center">
	<form class="join" on:submit|preventDefault>
		<h2
			class="join-item flex items-center bg-secondary p-2 font-bold text-secondary-content"
		>
			Search Dogs
		</h2>
		<div class="join-item flex items-center border-2 border-base-200 p-2">
			<div
				id="breeds"
				class="dropdown dropdown-bottom"
				aria-label="Filter Breeds"
			>
				<div tabindex="0" class="h-full" role="button">
					Filter by breeds:
					<div />
					{#if $allBreeds}
						<ul
							tabindex="0"
							class="menu dropdown-content z-[1] block h-72 w-52 overflow-y-scroll rounded-box bg-base-100 p-2 shadow-inner"
							role="menu"
						>
							{#each $allBreeds as breed}
								<li>
									<button
										type="button"
										on:click={() => addBreedFilter(breed)}>{breed}</button
									>
								</li>
							{/each}
						</ul>
					{/if}
				</div>
			</div>
		</div>
		<div
			class="justify-normal-between join-item flex items-center gap-2 border-2 border-base-200 p-2"
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
			class="justify-normal-between join-item flex items-center gap-2 border-2 border-base-200 p-2"
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
			class="justify-normal-between join-item flex items-center gap-2 border-2 border-base-200 p-2"
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
