<script lang="ts">
    import { onMount } from "svelte";
	import AdopterAPI from "../api";

    let name: string = "";

    function login() {
        AdopterAPI.login({
            name: "testuser",
            email: "test@gmail.com"
        })
    }

    function logout() {
        AdopterAPI.logout();
    }


    async function handleBreedClick(evt: MouseEvent) {
        const response = await AdopterAPI.getBreeds();

        console.log(response)
    }
</script>

<h1>Hello {name}</h1>
<input bind:value={name}/>
<button on:click={login}>Login</button>
<button on:click={logout}>Logout</button>
<button on:click={handleBreedClick}> TEST </button>