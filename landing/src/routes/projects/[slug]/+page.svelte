<script lang="ts">
	import type { Project } from '$lib/types/project';
	import { reveal } from '$lib/actions/reveal';
	import Seo from '$lib/components/Seo.svelte';

	let { data } = $props();
	let project: Project = $derived(data.project);

	const categoryLabels: Record<string, string> = {
		'ai-infrastructure': 'AI Infrastructure',
		'developer-tools': 'Developer Tools',
		'design-tools': 'Design Tools',
		productivity: 'Productivity',
		'data-tools': 'Data & Analytics',
		wellness: 'Wellness',
		testing: 'Testing'
	};

	const statusLabels: Record<string, string> = {
		research: 'In Research',
		planning: 'Planning',
		building: 'In Development',
		beta: 'Beta',
		live: 'Live'
	};
</script>

<Seo title="{project.name} — Aylith" description={project.description} type="article" />

<!-- Hero -->
<section class="relative overflow-hidden">
	<div
		class="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]"
		style="background: linear-gradient(135deg, {project.gradientFrom}, {project.gradientTo})"
	></div>

	<div class="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
		<a
			href="/projects"
			class="mb-8 inline-flex items-center gap-1.5 text-sm text-surface-500 transition-colors hover:text-surface-700 dark:text-warm-400 dark:hover:text-warm-200"
		>
			<svg class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
				<path d="M19 12H5M12 19l-7-7 7-7" />
			</svg>
			All Projects
		</a>

		<div class="flex items-start gap-5">
			<svg
				class="mt-1 size-10 shrink-0 sm:size-12"
				style="color: {project.gradientFrom}"
				fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d={project.iconPath} />
			</svg>

			<div>
				<div class="flex flex-wrap items-center gap-3">
					<h1 class="text-3xl font-bold tracking-tight text-surface-900 sm:text-4xl lg:text-5xl dark:text-warm-50">
						{project.name}
					</h1>
					<span
						class="rounded-full px-3 py-1 text-xs font-semibold text-white"
						style="background: {project.gradientFrom}"
					>
						{statusLabels[project.status] ?? project.status}
					</span>
				</div>

				<p class="mt-2 text-xl font-medium" style="color: {project.gradientFrom}">
					{project.tagline}
				</p>

				<p class="mt-3 max-w-2xl text-surface-500 dark:text-warm-300">
					{project.description}
				</p>

				<div class="mt-4">
					<span class="text-xs font-medium text-surface-400 dark:text-warm-400">
						{categoryLabels[project.category] ?? project.category}
					</span>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Content -->
<section class="py-16 sm:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid gap-12 lg:grid-cols-3">
			<!-- Sidebar -->
			<div class="order-2 lg:order-1 lg:col-span-1">
				<div class="sticky top-24 space-y-8">
					{#if project.features?.length}
						<div use:reveal>
							<h2 class="text-xs font-semibold uppercase tracking-wider text-surface-400 dark:text-warm-400">
								Key Features
							</h2>
							<ul class="mt-4 space-y-3">
								{#each project.features as feature}
									<li class="flex items-start gap-2 text-sm text-surface-600 dark:text-warm-300">
										<svg class="mt-0.5 size-4 shrink-0" style="color: {project.gradientFrom}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
											<path d="M5 13l4 4L19 7" />
										</svg>
										{feature}
									</li>
								{/each}
							</ul>
						</div>
					{/if}

					{#if project.targetUser}
						<div use:reveal={{ delay: 100 }}>
							<h2 class="text-xs font-semibold uppercase tracking-wider text-surface-400 dark:text-warm-400">
								Built For
							</h2>
							<p class="mt-3 text-sm text-surface-600 dark:text-warm-300">
								{project.targetUser}
							</p>
						</div>
					{/if}
				</div>
			</div>

			<!-- Main content -->
			<div class="order-1 lg:order-2 lg:col-span-2" use:reveal>
				{#if project.body}
					<div class="prose prose-surface max-w-none dark:prose-invert prose-headings:font-bold prose-a:text-accent-600 dark:prose-a:text-accent-400 dark:prose-p:text-warm-300 dark:prose-li:text-warm-300 dark:prose-strong:text-warm-100">
						{@html project.body}
					</div>
				{/if}
			</div>
		</div>
	</div>
</section>
