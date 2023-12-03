<script lang="ts">
	import { goto } from '$app/navigation';
	import { isLoggedIn } from '../stores';
	import AdopterAPI from '../api';

	let formData = {
		name: '',
		email: '',
	};

	let error = false;

	/** Login */
	async function login() {
		try {
			await AdopterAPI.login(formData);
			isLoggedIn.set(true);
			goto('/search', { replaceState: true });
		} catch (err) {
			error = true;
		}
	}
</script>

<div
	class="position absolute top-16 flex w-screen flex-col items-center justify-center"
>
	{#if $isLoggedIn === false}
		<form
			class="mx-auto mt-20 flex h-fit w-96 flex-col items-center justify-between rounded-xl border-0 border-base-200 py-4 shadow-2xl"
			on:submit|preventDefault={login}
		>
			<div class="w-full text-center">
				<h2 class="text-2xl font-bold text-secondary">Login</h2>
				<h3 class="text-md font-light italic text-accent">
					Welcome back!
				</h3>
			</div>
			<div class="my-8 w-full">
				<div class="w-100 mb-3">
					<input
						aria-label="name"
						placeholder="name"
						required
						bind:value={formData.name}
						class="mx-4 w-11/12 rounded-md border-2 border-base-300 bg-gray-50 px-1 py-0.5 font-extralight text-gray-600 placeholder:italic placeholder:text-gray-500 active:border-blue-500"
					/>
				</div>
				<div class="w-100 mb-3">
					<input
						aria-label="email"
						placeholder="email"
						required
						bind:value={formData.email}
						class="mx-4 w-11/12 rounded-md border-2 border-base-300 bg-gray-50 px-1 py-0.5 font-extralight text-gray-600 placeholder:italic placeholder:text-gray-500 active:border-blue-500"
					/>
				</div>
			</div>
			<button class="btn btn-primary">Login</button>
		</form>
		{#if error}
			<p class="m-8 rounded-lg bg-error px-4 py-3 text-center shadow-2xl">
				Invalid Credentials, try again.
			</p>
		{/if}
	{:else}
		<div class="flex min-h-full flex-col items-center justify-center">
			<h2 class="my-8 text-2xl font-bold text-secondary">
				Hello Adopter!
			</h2>
			<p>
				Explore what furry friends are available for adoption, and find
				your perfect match.
			</p>
		</div>
	{/if}
</div>
