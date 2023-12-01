<script lang="ts">
    import { isLoggedIn, username } from "../stores";
</script>

<nav class="navbar bg-base-100 shadow-2xl position fixed z-50">
    <div class="navbar-start flex-1">
        <a class="btn btn-ghost text-3xl text-primary" href="/">Adopter</a>
    </div>
    {#if isLoggedIn}
        <div class="navbar-end">
            <a class="btn btn-ghost text-lg" href="/">Welcome, {$username}!</a>
        </div>
    {/if}
</nav>