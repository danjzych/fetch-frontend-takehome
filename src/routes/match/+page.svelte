<script lang="ts">
	import { matchedDog, favoritedDogs } from '../../stores';
	import DogCard from '../../components/DogCard.svelte';
	import AdopterAPI from '../../api';

	/** Get match based on favorited dogs in favoritedDogs store*/
	async function getMatch() {
		const favoritedIds = $favoritedDogs.map((f) => f.id);
		const match = await AdopterAPI.getMatch(favoritedIds);

		$matchedDog = $favoritedDogs.find((f) => f.id === match.match);
	}
</script>

<div
	class="position absolute top-16 flex h-[calc(100vh_-_4rem)] w-screen items-center justify-center"
>
	{#if !$matchedDog}
		<button class="btn btn-primary" on:click={getMatch}>
			Find your match!
		</button>
	{:else}
		<div class="flex min-w-full items-center justify-evenly">
			<div class="flex flex-col items-center gap-8">
				<p class="text-lg font-semibold">
					Not sure this is the dog for you? That's okay, try another match:
				</p>
				<button class="btn btn-primary btn-md w-32" on:click={getMatch}>
					Match again
				</button>
			</div>
			<DogCard dog={$matchedDog} />
		</div>
	{/if}
</div>
