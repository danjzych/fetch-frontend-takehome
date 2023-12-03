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
		<form on:submit|preventDefault={login}>
			<h2>Login to Adopter</h2>
			<input placeholder="name" bind:value={formData.name} />
			<input placeholder="email" bind:value={formData.email} />
			{#if error}
				<p>Invalid Credentials, try again.</p>
			{/if}
			<button class="btn btn-primary">Login</button>
		</form>
	{:else}
		<h2 class="my-5 text-3xl font-bold">Hello Adopter!</h2>
	{/if}
</div>
