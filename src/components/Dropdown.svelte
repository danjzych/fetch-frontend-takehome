<script lang="ts">
	import { allBreeds } from '../stores';
	import ToggleableItem from './ToggleableItem.svelte';

	export let options: string[];

	let showFilter: boolean = false;
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
			{#if options && showFilter}
				<ul
					tabindex="0"
					class="position absolute z-[1] block h-72 w-52 overflow-y-scroll rounded-box bg-base-100 p-2 shadow-inner"
					role="menu"
				>
					{#each options as option}<ToggleableItem breed={option} />{/each}
				</ul>
			{/if}
		</button>
	</div>
</div>
