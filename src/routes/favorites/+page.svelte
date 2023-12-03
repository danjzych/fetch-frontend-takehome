<script lang="ts">
	import { onMount } from 'svelte';
	import { favoritedDogs, isLoggedIn } from '../../stores';
	import Doglist from '../../components/DogList.svelte';
	import { checkRedirect } from '$lib/utils';

	onMount(() => {
		checkRedirect($isLoggedIn);
	});
</script>

<div
	class="position absolute top-16 flex h-[calc(100vh_-_4rem)] w-screen flex-col justify-between"
>
	<Doglist dogs={$favoritedDogs} />
</div>
