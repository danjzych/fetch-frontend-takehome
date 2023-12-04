<script lang="ts">
</script>

<div
	class="position absolute flex min-h-full min-w-full items-center justify-center"
>
	<img
		width="64"
		height="64"
		src="https://img.icons8.com/pastel-glyph/64/dog--v3.png"
		alt="dog--v3"
		class="loader"
	/>
</div>

<style>
	.loader {
		animation: grow 1s linear infinite;
	}

	@keyframes grow {
		0% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.5);
		}
	}
</style>
