<script lang="ts">
    import { onMount } from "svelte";
    import Searchbar from "../../components/Searchbar.svelte";
    import AdopterAPI from "../../api";
    import type { Dog } from "../../interfaces";

    let allBreeds: string[];
    let availableDogs: Dog[];
    let searchPreferences = {
        ascending: true,
        selectedBreeds: [],
        ageMin: 0,
        ageMax: 100
    }

    onMount( async () => {
        allBreeds = await AdopterAPI.getBreeds();
        console.log(allBreeds)
    });

</script>

<div class="position absolute top-16 w-screen h-[calc(100vh_-_4rem)] overflow-hidden">
    <h2 class="my-4 text-xl text-accent text-center">Find Furry Friends</h2>
    <Searchbar bind:searchPreferences={searchPreferences} {allBreeds} />
    <!-- send down the breeds selected so far as badges -->
    {#if !allBreeds}
        <p>loading...</p>
    {:else}
    {/if}
</div>
