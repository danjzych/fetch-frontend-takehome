<script lang="ts">
	import type { Dog } from '../interfaces';
	export let match: Dog;
</script>

<div
	class="card card-bordered mx-2 my-3 w-96 justify-center bg-base-100 shadow-xl"
>
	<figure class="max-h-inherit bg-base-200">
		<img src={match.img} alt="Adoptable Dog {match.name}" loading="lazy" />
	</figure>
	<div class="card-body items-center justify-between">
		<h2 class="card-title text-3xl font-bold">
			{match.name}
		</h2>
		<div class="badge badge-accent badge-sm h-fit flex-grow-0 text-center">
			{match.breed}
		</div>

		<p class="py-5 text-center font-light text-gray-500">
			{match.name} is a {match.breed} from {match.zip_code}. They are {match.age}
			years old. They can't wait to move into their
			<span class="font-semibold text-secondary">fur</span>-ever home with
			you!
		</p>
	</div>
</div>
