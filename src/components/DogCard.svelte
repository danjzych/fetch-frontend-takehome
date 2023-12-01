<script lang="ts">
	import type { Dog } from '../interfaces';
	export let dog: Dog;
</script>

<div>
	<p>{dog.name}</p>
	<p>{dog.breed}</p>
</div>
