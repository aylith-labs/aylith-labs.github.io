<script lang="ts">
	import ProjectCard from '$lib/components/home/ProjectCard.svelte';
	import type { Project } from '$lib/types/project';

	let { data } = $props();
	let projects: Project[] = $derived(data.projects);

	const stats = [
		{ value: '10', label: 'Products', suffix: '' },
		{ value: '7', label: 'Categories', suffix: '' },
		{ value: '138', label: 'Products Analyzed', suffix: '+' },
		{ value: '5', label: 'Markets Validated', suffix: '' }
	];
</script>

<svelte:head>
	<title>Aylith - AI Product Studio</title>
	<meta name="description" content="Aylith is an AI product studio building tools that solve real problems for developers, knowledge workers, and teams." />
</svelte:head>

<!-- Hero -->
<section class="relative overflow-hidden">
	<!-- Background -->
	<div class="absolute inset-0 bg-gradient-to-br from-accent-50 via-white to-surface-50 dark:from-surface-950 dark:via-surface-950 dark:to-accent-950/20"></div>

	<!-- Animated orbs -->
	<div class="absolute -left-32 -top-32 size-96 rounded-full bg-accent-400/10 blur-3xl animate-float dark:bg-accent-600/10"></div>
	<div class="absolute -right-32 top-1/3 size-80 rounded-full bg-blue-400/10 blur-3xl animate-float-delayed dark:bg-blue-600/10"></div>
	<div class="absolute -bottom-40 left-1/3 size-96 rounded-full bg-pink-400/8 blur-3xl animate-float dark:bg-pink-600/8"></div>

	<!-- Dot grid -->
	<div
		class="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
		style="background-image: radial-gradient(circle, currentColor 1px, transparent 1px); background-size: 24px 24px;"
	></div>

	<div class="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
		<div class="mx-auto max-w-3xl text-center">
			<!-- Badge -->
			<div class="animate-fade-in-up mb-8 inline-flex items-center gap-2 rounded-full border border-accent-200 bg-accent-50 px-4 py-1.5 text-sm font-medium text-accent-700 dark:border-accent-800 dark:bg-accent-900/30 dark:text-accent-300">
				<span class="size-1.5 rounded-full bg-accent-500 animate-pulse"></span>
				AI Product Studio
			</div>

			<!-- Main heading -->
			<h1 class="animate-fade-in-up text-5xl font-extrabold tracking-tight text-surface-900 sm:text-6xl lg:text-7xl dark:text-white" style="animation-delay: 0.1s">
				We build
				<span class="bg-gradient-to-r from-accent-600 via-accent-500 to-blue-500 bg-clip-text text-transparent animate-gradient dark:from-accent-400 dark:via-accent-300 dark:to-blue-400">
					AI tools
				</span>
				<br />that solve real problems
			</h1>

			<!-- Subtitle -->
			<p class="animate-fade-in-up mx-auto mt-6 max-w-xl text-lg text-surface-600 sm:text-xl dark:text-surface-300" style="animation-delay: 0.2s">
				Ten products. Validated markets. Built by engineers for engineers, knowledge workers, and teams who refuse to settle for broken tools.
			</p>

			<!-- CTAs -->
			<div class="animate-fade-in-up mt-10 flex flex-wrap items-center justify-center gap-4" style="animation-delay: 0.3s">
				<a
					href="#projects"
					class="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent-600 to-accent-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-500/25 transition-all hover:shadow-xl hover:shadow-accent-500/30 hover:-translate-y-0.5 dark:from-accent-500 dark:to-accent-600"
				>
					Explore Projects
					<svg class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
					</svg>
				</a>
				<a
					href="https://github.com/aylith"
					class="inline-flex items-center gap-2 rounded-xl border border-surface-300 bg-white px-6 py-3 text-sm font-semibold text-surface-700 transition-all hover:bg-surface-50 hover:-translate-y-0.5 dark:border-surface-700 dark:bg-surface-800 dark:text-surface-200 dark:hover:bg-surface-700"
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

<!-- Stats -->
<section class="relative border-y border-surface-200 bg-surface-50/50 dark:border-surface-800 dark:bg-surface-900/30">
	<div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
		<div class="grid grid-cols-2 gap-6 sm:grid-cols-4">
			{#each stats as stat, i}
				<div class="animate-fade-in-up text-center" style="animation-delay: {0.1 * i}s">
					<div class="text-3xl font-extrabold text-surface-900 dark:text-white">
						{stat.value}{stat.suffix}
					</div>
					<div class="mt-1 text-sm text-surface-500 dark:text-surface-400">
						{stat.label}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Projects Grid -->
<section id="projects" class="py-20 sm:py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-3xl font-extrabold tracking-tight text-surface-900 sm:text-4xl dark:text-white">
				Our Products
			</h2>
			<p class="mt-3 text-surface-500 dark:text-surface-400">
				Each product addresses a validated market gap identified through deep research of 138+ Product Hunt launches and Reddit community signals.
			</p>
		</div>

		<div class="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each projects as project, i}
				<div class="animate-fade-in-up" style="animation-delay: {0.05 * i}s">
					<ProjectCard {project} />
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- About / Philosophy -->
<section class="border-t border-surface-200 bg-surface-50/50 py-20 sm:py-24 dark:border-surface-800 dark:bg-surface-900/30">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-3xl text-center">
			<h2 class="text-3xl font-extrabold tracking-tight text-surface-900 sm:text-4xl dark:text-white">
				Built Different
			</h2>
			<p class="mt-4 text-lg text-surface-600 dark:text-surface-300">
				We don't build solutions looking for problems.
			</p>
		</div>

		<div class="mx-auto mt-14 grid max-w-5xl gap-8 sm:grid-cols-3">
			<div class="rounded-2xl border border-surface-200 bg-white p-8 dark:border-surface-800 dark:bg-surface-900">
				<div class="mb-4 flex size-12 items-center justify-center rounded-xl bg-accent-100 text-2xl dark:bg-accent-900/30">
					🔍
				</div>
				<h3 class="text-lg font-bold text-surface-900 dark:text-white">Research First</h3>
				<p class="mt-2 text-sm text-surface-500 dark:text-surface-400">
					Every product starts with deep market research. We analyzed 138+ Product Hunt launches, Reddit communities, and competitor landscapes before writing a single line of code.
				</p>
			</div>

			<div class="rounded-2xl border border-surface-200 bg-white p-8 dark:border-surface-800 dark:bg-surface-900">
				<div class="mb-4 flex size-12 items-center justify-center rounded-xl bg-emerald-100 text-2xl dark:bg-emerald-900/30">
					✅
				</div>
				<h3 class="text-lg font-bold text-surface-900 dark:text-white">Demand Validated</h3>
				<p class="mt-2 text-sm text-surface-500 dark:text-surface-400">
					We don't guess — we validate. Real frustration language from real users. Proven demand signals from communities with hundreds of thousands of members.
				</p>
			</div>

			<div class="rounded-2xl border border-surface-200 bg-white p-8 dark:border-surface-800 dark:bg-surface-900">
				<div class="mb-4 flex size-12 items-center justify-center rounded-xl bg-blue-100 text-2xl dark:bg-blue-900/30">
					⚡
				</div>
				<h3 class="text-lg font-bold text-surface-900 dark:text-white">Solo-Buildable</h3>
				<p class="mt-2 text-sm text-surface-500 dark:text-surface-400">
					Each product is scoped to be launchable by a solo developer or small team. No enterprise-scale infrastructure required to reach MVP.
				</p>
			</div>
		</div>
	</div>
</section>
