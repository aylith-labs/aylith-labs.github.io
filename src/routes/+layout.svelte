<script lang="ts">
	import '../app.css';
	import { browser } from '$app/environment';
	import Navbar from '$lib/components/layout/Navbar.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';

	let { children } = $props();

	// Console easter egg for developers
	if (browser) {
		console.log(
			'%c Aylith ',
			'background: linear-gradient(135deg, #7c3aed, #8b5cf6); color: white; font-size: 24px; font-weight: bold; padding: 8px 16px; border-radius: 8px;'
		);
		console.log(
			'%cAI Product Studio — 10 products, 0 bullshit.\n%cCurious? https://github.com/aylith-apps',
			'color: #8b5cf6; font-size: 14px; font-weight: 600;',
			'color: #64748b; font-size: 12px;'
		);
	}
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
</svelte:head>

<div class="flex min-h-screen flex-col">
	<Navbar />

	<main class="flex-1">
		{@render children()}
	</main>

	<Footer />
</div>
