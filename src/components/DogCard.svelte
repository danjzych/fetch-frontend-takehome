<script lang="ts">
	import type { Dog } from '../interfaces';

	export let dog: Dog;
</script>

<div
	class="card card-bordered card-side mx-2 my-3 w-96 justify-center bg-base-100 shadow-xl"
>
	<figure>
		<img src={dog.img} alt="Adoptable Dog {dog.name}" class="max-h-60" />
	</figure>
	<div class="card-body">
		<div class="flex items-center gap-4">
			<h2 class="card-title">
				{dog.name}
			</h2>
			<div class="badge badge-accent badge-sm">
				{dog.breed}
			</div>
		</div>
		<div>
			<p>{dog.age}</p>
			<p>{dog.zip_code}</p>
		</div>
		<div class="card-actions justify-end">
			<button class="btn btn-primary" on:click>
				Favorite {dog.name}
			</button>
		</div>
	</div>
</div>
