<script lang="ts">
	import { onMount } from 'svelte';
	import { matchedDog, favoritedDogs, isLoggedIn } from '../../stores';
	import MatchCard from '../../components/MatchCard.svelte';
	import { checkRedirect } from '$lib/utils';
	import { fade, fly } from 'svelte/transition';
	import AdopterApp from '../../adopter';

	onMount(() => {
		checkRedirect($isLoggedIn);
	});
</script>

<div
	class="position absolute top-16 flex h-[calc(100vh_-_4rem)] w-screen items-center justify-center"
>
	{#if !$matchedDog && $favoritedDogs.length > 0}
		<button class="btn btn-primary" on:click={AdopterApp.getMatch}>
			Request Match!
		</button>
	{:else if !$matchedDog}
		<div class="flex flex-col items-center gap-10">
			<p class="text-xl font-semibold">
				You need to favorite some dogs before finding your match!
			</p>
			<a class="btn-lnk btn w-32" href="/search">Find Dogs</a>
		</div>
	{:else}
		<div class="flex min-w-full items-center justify-evenly" in:fly>
			<div
				class="flex flex-col items-center gap-8"
				in:fade={{ duration: 1000, delay: 1500 }}
			>
				<p class="text-lg font-semibold">
					Not sure this is the dog for you? That's okay, try another match:
				</p>
				<button
					class="btn btn-primary btn-md w-32"
					on:click={AdopterApp.getMatch}
				>
					Match again
				</button>
			</div>
			<MatchCard match={$matchedDog} />
		</div>
	{/if}
</div>
