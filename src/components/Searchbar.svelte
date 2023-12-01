<script lang="ts">
    import type { Search } from "../interfaces";
    export let allBreeds;
    export let searchPreferences: Search;


</script>

<div class="w-11/12 flex">
    <form class="w-full flex justify-evenly">
        <div>
            <label for="breeds" class="">Breeds:</label>
            <input type="text" id="breeds"/>
        </div>
        <div>
            <label for="ascending" class="">Sort Ascending:</label>
            <input type="checkbox" id="ascending" bind:checked={searchPreferences.ascending} />
        </div>
        <div>
            <label for="ageMin" class="">Sort Ascending:</label>
            <input type="number" id="ageMin" bind:value={searchPreferences.ageMin} />
        </div>
        <div>
            <label for="ageMax" class="">Sort Ascending:</label>
            <input type="number" id="ageMax" bind:value={searchPreferences.ageMax} />
        </div>
    </form>
</div>