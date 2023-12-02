<script lang="ts">
	import { favoritedDogs } from '../../stores';
	import Doglist from '../../components/DogList.svelte';
</script>

<div class="position absolute top-16 h-[calc(100vh_-_4rem)] w-screen">
	<Doglist dogs={$favoritedDogs} />
</div>
