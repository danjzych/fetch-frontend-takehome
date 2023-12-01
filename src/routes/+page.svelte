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

<form on:submit|preventDefault={login} class="position absolute top-16">
	<h2>Login to Adopter</h2>
	<input placeholder="name" bind:value={formData.name} />
	<input placeholder="email" bind:value={formData.email} />
	{#if error}
		<p>Invalid Credentials, try again.</p>
	{/if}
	<button class="btn btn-primary">Login</button>
</form>
