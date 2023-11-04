<div class="landing-page">
	<div class="logo-container">
		<img src="/logo.png" alt="beautifully logo" />
	</div>
	<div class="text-container">
		<h1>Coming Soon</h1>
	</div>
</div>

<style>
	.landing-page {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.logo-container img {
		max-height: 70%;
		margin-bottom: -10rem;
	}
	/* Media query for mobile devices */
	@media (max-width: 768px) {
		:global(body) {
			font-size: 1rem; /* Adjust the font size for mobile screens */
		}
	}
</style>
