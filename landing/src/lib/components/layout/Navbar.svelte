<script lang="ts">
	import { page } from '$app/state';
	import ThemeToggle from './ThemeToggle.svelte';

	let mobileMenuOpen = $state(false);

	const navLinks = [
		{ href: '/', label: 'Home' },
		{ href: '/projects', label: 'Projects' }
	] as const;

	function isActive(href: string): boolean {
		if (href === '/') return page.url.pathname === '/';
		return page.url.pathname.startsWith(href);
	}
</script>

<nav class="sticky top-0 z-50 border-b border-surface-200/50 bg-white/80 backdrop-blur-xl dark:border-surface-800/50 dark:bg-surface-950/80">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<a href="/" class="group flex items-center gap-2.5">
				<div class="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent-500 to-accent-700 text-sm font-bold text-white transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
					A
				</div>
				<span class="text-lg font-bold tracking-tight text-surface-900 dark:text-warm-50">
					Aylith
				</span>
			</a>

			<div class="hidden items-center gap-1 md:flex">
				{#each navLinks as link (link.href)}
					<a
						href={link.href}
						class="rounded-lg px-3 py-1.5 text-sm font-medium transition-colors {isActive(link.href)
							? 'bg-accent-100 text-accent-700 dark:bg-accent-900/40 dark:text-accent-300'
							: 'text-surface-600 hover:bg-surface-100 hover:text-surface-900 dark:text-surface-400 dark:hover:bg-surface-800 dark:hover:text-surface-100'}"
					>
						{link.label}
					</a>
				{/each}
			</div>

			<div class="flex items-center gap-2">
				<ThemeToggle />
				<button
					onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
					class="rounded-lg p-1.5 text-surface-600 transition-colors hover:bg-surface-100 md:hidden dark:text-surface-400 dark:hover:bg-surface-800"
					aria-label="Toggle menu"
					aria-expanded={mobileMenuOpen}
				>
					{#if mobileMenuOpen}
						<svg class="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path d="M6 18L18 6M6 6l12 12" />
						</svg>
					{:else}
						<svg class="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					{/if}
				</button>
			</div>
		</div>
	</div>

	{#if mobileMenuOpen}
		<div class="border-t border-surface-200 px-4 pb-3 pt-2 md:hidden dark:border-surface-800">
			{#each navLinks as link (link.href)}
				<a
					href={link.href}
					onclick={() => (mobileMenuOpen = false)}
					class="block rounded-lg px-3 py-2 text-sm font-medium transition-colors {isActive(link.href)
						? 'bg-accent-100 text-accent-700 dark:bg-accent-900/40 dark:text-accent-300'
						: 'text-surface-600 hover:bg-surface-100 dark:text-surface-400 dark:hover:bg-surface-800'}"
				>
					{link.label}
				</a>
			{/each}
		</div>
	{/if}
</nav>
