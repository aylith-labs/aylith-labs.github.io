<script lang="ts">
	import ProjectCard from '$lib/components/home/ProjectCard.svelte';
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
	<title>Projects - Aylith</title>
	<meta name="description" content="Explore all 10 Aylith products across AI infrastructure, developer tools, productivity, and more." />
</svelte:head>

<section class="py-16 sm:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<h1 class="text-4xl font-extrabold tracking-tight text-surface-900 sm:text-5xl dark:text-white">
				All Projects
			</h1>
			<p class="mt-3 text-lg text-surface-500 dark:text-surface-400">
				Ten AI-powered products addressing validated market gaps.
			</p>
		</div>

		<!-- Category filter -->
		<div class="mt-10 flex flex-wrap justify-center gap-2">
			{#each categories as cat}
				<button
					onclick={() => (activeCategory = cat.key)}
					class="rounded-full px-4 py-1.5 text-sm font-medium transition-colors {activeCategory === cat.key
						? 'bg-accent-600 text-white shadow-md shadow-accent-500/25'
						: 'bg-surface-100 text-surface-600 hover:bg-surface-200 dark:bg-surface-800 dark:text-surface-400 dark:hover:bg-surface-700'}"
				>
					{cat.label}
				</button>
			{/each}
		</div>

		<div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each filtered as project (project.slug)}
				<ProjectCard {project} />
			{/each}
		</div>
	</div>
</section>
