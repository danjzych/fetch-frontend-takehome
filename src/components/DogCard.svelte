<script lang="ts">
	import { favoritedDogs } from '../stores';
	import type { Dog } from '../interfaces';

	export let dog: Dog;
</script>

<div
	class="card card-bordered card-side mx-2 my-3 h-60 w-96 justify-center bg-base-100 shadow-xl"
>
	<figure class="max-h-inherit border-r-2 border-r-base-300 bg-base-200">
		<img src={dog.img} alt="Adoptable Dog {dog.name}" loading="lazy" />
	</figure>
	<div class="card-body">
		<div class="space-between flex items-center gap-4">
			<h2 class="card-title">
				{dog.name}
			</h2>
			<div
				class="badge badge-accent badge-sm h-fit flex-grow-0 text-center"
			>
				{dog.breed}
			</div>
		</div>
		<div>
			<p>Age: <span>{dog.age}</span></p>
			<p>Zipcode: {dog.zip_code}</p>
		</div>
		<div class="card-actions justify-end">
			{#if !$favoritedDogs.includes(dog)}
				<button class="btn btn-primary" on:click>
					Favorite {dog.name}
				</button>
			{:else}
				<button class="btn-base-300 btn" on:click>
					Unfavorite {dog.name}
				</button>
			{/if}
		</div>
	</div>
</div>
