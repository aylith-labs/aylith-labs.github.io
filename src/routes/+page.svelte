<script lang="ts">
	import ProjectCard from '$lib/components/home/ProjectCard.svelte';
	import { reveal } from '$lib/actions/reveal';
	import { countup } from '$lib/actions/countup';
	import type { Project } from '$lib/types/project';

	let { data } = $props();
	let projects: Project[] = $derived(data.projects);

	const stats = [
		{ value: 10, label: 'Products', suffix: '' },
		{ value: 7, label: 'Categories', suffix: '' },
		{ value: 138, label: 'Products Analyzed', suffix: '+' },
		{ value: 5, label: 'Markets Validated', suffix: '' }
	];
</script>

<svelte:head>
	<title>Aylith — AI Product Studio</title>
	<meta name="description" content="Aylith is an AI product studio building tools that solve real problems for developers, knowledge workers, and teams." />
</svelte:head>

<!-- Hero -->
<section class="relative overflow-hidden">
	<!-- Ambient background -->
	<div class="absolute inset-0 bg-gradient-to-b from-accent-50/80 via-white to-white dark:from-accent-950/30 dark:via-surface-950 dark:to-surface-950"></div>

	<!-- Soft orbs — more organic movement -->
	<div class="absolute -left-40 -top-40 size-[500px] rounded-full bg-accent-400/8 blur-[100px] animate-float dark:bg-accent-500/5"></div>
	<div class="absolute -right-20 top-20 size-[400px] rounded-full bg-blue-400/6 blur-[80px] animate-float-delayed dark:bg-blue-500/4"></div>

	<div class="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-44">
		<div class="max-w-3xl">
			<!-- Badge -->
			<div class="animate-fade-in-up mb-8 inline-flex items-center gap-2.5 rounded-full border border-accent-200/60 bg-accent-50/80 px-4 py-1.5 text-sm font-medium text-accent-700 backdrop-blur-sm dark:border-accent-700/30 dark:bg-accent-900/20 dark:text-accent-300">
				<span class="relative flex size-2">
					<span class="absolute inline-flex size-full animate-ping rounded-full bg-accent-500 opacity-75"></span>
					<span class="relative inline-flex size-2 rounded-full bg-accent-500"></span>
				</span>
				AI Product Studio
			</div>

			<!-- Heading — left-aligned, no gradient text -->
			<h1 class="animate-fade-in-up text-5xl font-bold leading-[1.08] tracking-tight text-surface-900 sm:text-6xl lg:text-7xl dark:text-white" style="animation-delay: 0.1s">
				We build AI tools<br />
				<span class="text-accent-600 dark:text-accent-400">that actually work.</span>
			</h1>

			<!-- Subtitle -->
			<p class="animate-fade-in-up mt-6 max-w-lg text-lg leading-relaxed text-surface-500 sm:text-xl dark:text-surface-400" style="animation-delay: 0.2s">
				Ten products. Validated markets. Research-backed.
				Built for engineers who refuse to settle.
			</p>

			<!-- CTAs -->
			<div class="animate-fade-in-up mt-10 flex flex-wrap items-center gap-4" style="animation-delay: 0.3s">
				<a
					href="#projects"
					class="btn-press inline-flex items-center gap-2 rounded-xl bg-accent-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent-600/20 hover:bg-accent-500 dark:bg-accent-500 dark:shadow-accent-500/15 dark:hover:bg-accent-400"
				>
					Explore Projects
					<svg class="size-4 transition-transform group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
					</svg>
				</a>
				<a
					href="https://github.com/aylith-apps"
					class="btn-press inline-flex items-center gap-2 rounded-xl border border-surface-200 bg-white/80 px-6 py-3.5 text-sm font-semibold text-surface-700 backdrop-blur-sm hover:border-surface-300 hover:bg-white dark:border-surface-700 dark:bg-surface-800/80 dark:text-surface-200 dark:hover:border-surface-600 dark:hover:bg-surface-800"
				>
					<svg class="size-4" viewBox="0 0 24 24" fill="currentColor">
						<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
					</svg>
					GitHub
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Stats — animated counters -->
<section class="relative border-y border-surface-200/60 bg-surface-50/50 dark:border-surface-800/50 dark:bg-surface-900/20">
	<div class="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
		<div class="grid grid-cols-2 gap-8 sm:grid-cols-4">
			{#each stats as stat, i}
				<div use:reveal={{ delay: i * 80 }} class="text-center">
					<div
						class="text-3xl font-bold tabular-nums text-surface-900 sm:text-4xl dark:text-white"
						use:countup={{ target: stat.value, suffix: stat.suffix, duration: 1800 }}
					>
						0{stat.suffix}
					</div>
					<div class="mt-1.5 text-sm font-medium text-surface-400 dark:text-surface-500">
						{stat.label}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Projects Grid -->
<section id="projects" class="py-20 sm:py-28">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="max-w-xl" use:reveal>
			<h2 class="text-3xl font-bold tracking-tight text-surface-900 sm:text-4xl dark:text-white">
				Our Products
			</h2>
			<p class="mt-3 text-surface-500 dark:text-surface-400">
				Each product addresses a validated market gap. 138+ products analyzed, five markets deep-dived.
			</p>
		</div>

		<div class="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
			{#each projects as project, i}
				<div use:reveal={{ delay: i * 60 }}>
					<ProjectCard {project} />
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Philosophy -->
<section class="border-t border-surface-200/60 py-20 sm:py-28 dark:border-surface-800/50">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="max-w-xl" use:reveal>
			<h2 class="text-3xl font-bold tracking-tight text-surface-900 sm:text-4xl dark:text-white">
				Built Different
			</h2>
			<p class="mt-3 text-lg text-surface-500 dark:text-surface-400">
				We don't build solutions looking for problems.
			</p>
		</div>

		<div class="mt-14 grid gap-6 sm:grid-cols-3">
			<div use:reveal={{ delay: 0 }} class="group rounded-2xl border border-surface-200/60 bg-white p-8 transition-colors hover:border-accent-200 dark:border-surface-800/60 dark:bg-surface-900/50 dark:hover:border-accent-800/50">
				<div class="mb-5 inline-flex rounded-xl bg-accent-100 p-3 text-accent-600 transition-transform group-hover:scale-110 dark:bg-accent-900/30 dark:text-accent-400">
					<svg class="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
						<path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
					</svg>
				</div>
				<h3 class="text-lg font-bold text-surface-900 dark:text-white">Research First</h3>
				<p class="mt-2 text-sm leading-relaxed text-surface-500 dark:text-surface-400">
					Every product starts with deep market research — 138+ Product Hunt launches, Reddit communities, and competitor landscapes analyzed before a single line of code.
				</p>
			</div>

			<div use:reveal={{ delay: 100 }} class="group rounded-2xl border border-surface-200/60 bg-white p-8 transition-colors hover:border-emerald-200 dark:border-surface-800/60 dark:bg-surface-900/50 dark:hover:border-emerald-800/50">
				<div class="mb-5 inline-flex rounded-xl bg-emerald-100 p-3 text-emerald-600 transition-transform group-hover:scale-110 dark:bg-emerald-900/30 dark:text-emerald-400">
					<svg class="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
						<path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
				</div>
				<h3 class="text-lg font-bold text-surface-900 dark:text-white">Demand Validated</h3>
				<p class="mt-2 text-sm leading-relaxed text-surface-500 dark:text-surface-400">
					Real frustration language from real users. Proven demand signals from communities with hundreds of thousands of members. No guessing.
				</p>
			</div>

			<div use:reveal={{ delay: 200 }} class="group rounded-2xl border border-surface-200/60 bg-white p-8 transition-colors hover:border-blue-200 dark:border-surface-800/60 dark:bg-surface-900/50 dark:hover:border-blue-800/50">
				<div class="mb-5 inline-flex rounded-xl bg-blue-100 p-3 text-blue-600 transition-transform group-hover:scale-110 dark:bg-blue-900/30 dark:text-blue-400">
					<svg class="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
						<path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
					</svg>
				</div>
				<h3 class="text-lg font-bold text-surface-900 dark:text-white">Solo-Buildable</h3>
				<p class="mt-2 text-sm leading-relaxed text-surface-500 dark:text-surface-400">
					Each product is scoped to be launchable by a solo developer or small team. No enterprise-scale infrastructure required to reach MVP.
				</p>
			</div>
		</div>
	</div>
</section>
