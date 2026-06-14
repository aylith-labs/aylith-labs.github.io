<script lang="ts">
	import ProjectCard from '$lib/components/home/ProjectCard.svelte';
	import { reveal } from '$lib/actions/reveal';
	import type { Project } from '$lib/types/project';

	let { data } = $props();
	let projects: Project[] = $derived(data.projects);

	const categories = [
		{ key: 'all', label: 'All' },
		{ key: 'ai-infrastructure', label: 'AI Infrastructure' },
		{ key: 'developer-tools', label: 'Developer Tools' },
		{ key: 'design-tools', label: 'Design Tools' },
		{ key: 'productivity', label: 'Productivity' },
		{ key: 'data-tools', label: 'Data & Analytics' },
		{ key: 'wellness', label: 'Wellness' },
		{ key: 'testing', label: 'Testing' }
	];

	let activeCategory = $state('all');

	let filtered = $derived(
		activeCategory === 'all'
			? projects
			: projects.filter((p) => p.category === activeCategory)
	);
</script>

<svelte:head>
	<title>Projects — Aylith</title>
	<meta name="description" content="Explore the Aylith portfolio across AI infrastructure, developer tools, productivity, and more." />
</svelte:head>

<section class="py-16 sm:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="max-w-xl" use:reveal>
			<h1 class="text-4xl font-bold tracking-tight text-surface-900 sm:text-5xl dark:text-warm-50">
				All Projects
			</h1>
			<p class="mt-3 text-lg text-surface-500 dark:text-warm-300">
				Ten AI-powered products addressing validated market gaps.
			</p>
		</div>

		<!-- Category filter -->
		<div class="mt-10 flex flex-wrap gap-2" use:reveal={{ delay: 100 }}>
			{#each categories as cat}
				<button
					onclick={() => (activeCategory = cat.key)}
					class="rounded-full px-4 py-1.5 text-sm font-medium transition-colors {activeCategory === cat.key
						? 'bg-accent-600 text-white'
						: 'bg-surface-100 text-surface-500 hover:bg-surface-200 hover:text-surface-700 dark:bg-surface-800 dark:text-warm-400 dark:hover:bg-surface-700 dark:hover:text-warm-200'}"
				>
					{cat.label}
				</button>
			{/each}
		</div>

		<div class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
			{#each filtered as project (project.slug)}
				<div use:reveal={{ delay: 0 }}>
					<ProjectCard {project} />
				</div>
			{/each}
		</div>
	</div>
</section>
