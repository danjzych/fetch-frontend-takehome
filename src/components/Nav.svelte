<script lang="ts">
	import { isLoggedIn } from '../stores';
</script>

<nav class="position navbar fixed z-50 bg-base-100 shadow-2xl">
	<div class="navbar-start">
		<a class="btn btn-ghost text-4xl font-extrabold text-primary" href="/"
			>Adopter</a
		>
	</div>
	{#if $isLoggedIn}
		<div class="navbar-end">
			<div class="dropdown dropdown-end">
				<div tabIndex={0} role="button" class="btn btn-circle btn-ghost">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						><path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4 6h16M4 12h16M4 18h7"
						/></svg
					>
				</div>
				<ul
					tabIndex={0}
					class="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
				>
					<li><a href="/">Home</a></li>
					<li><a href="/search">Search Dogs</a></li>
					<li><a href="/">Favorite Dogs</a></li>
					<li><a href="/">Match</a></li>
					<li><a href="/">Logout</a></li>
				</ul>
			</div>
		</div>
	{/if}
</nav>
