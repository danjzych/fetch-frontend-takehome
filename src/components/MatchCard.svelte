<script lang="ts">
	import type { Dog } from '../interfaces';
	export let match: Dog;
</script>

<div
	class="card card-bordered card-side mx-2 my-3 h-60 w-96 justify-center bg-base-100 shadow-xl"
>
	<figure class="max-h-inherit border-r-2 border-r-base-300 bg-base-200">
		<img src={match.img} alt="Adoptable Dog {match.name}" loading="lazy" />
	</figure>
	<div class="card-body justify-between">
		<div class="space-between flex items-center gap-4">
			<h2 class="card-title">
				{match.name}
			</h2>
			<div
				class="badge badge-accent badge-sm h-fit flex-grow-0 text-center"
			>
				{match.breed}
			</div>
		</div>
		<div class="text-center">
			<p>Age: <span class="font-light text-gray-500">{match.age}</span></p>
			<p>
				Zipcode: <span class="font-light text-gray-500"
					>{match.zip_code}</span
				>
			</p>
		</div>
	</div>
</div>
