<script lang="ts">
	import type { Project } from '$lib/types/project';

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

<svelte:head>
	<title>{project.name} - Aylith</title>
	<meta name="description" content={project.description} />
</svelte:head>

<!-- Hero -->
<section class="relative overflow-hidden">
	<div
		class="absolute inset-0 opacity-[0.06] dark:opacity-[0.12]"
		style="background: linear-gradient(135deg, {project.gradientFrom}, {project.gradientTo})"
	></div>
	<div
		class="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
		style="background-image: radial-gradient(circle, currentColor 1px, transparent 1px); background-size: 24px 24px;"
	></div>

	<div class="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
		<a
			href="/projects"
			class="mb-8 inline-flex items-center gap-1.5 text-sm text-surface-500 transition-colors hover:text-surface-700 dark:text-surface-400 dark:hover:text-surface-200"
		>
			<svg class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
				<path d="M19 12H5M12 19l-7-7 7-7" />
			</svg>
			All Projects
		</a>

		<div class="flex items-start gap-5">
			<div
				class="flex size-16 shrink-0 items-center justify-center rounded-2xl text-3xl sm:size-20 sm:text-4xl"
				style="background: linear-gradient(135deg, {project.gradientFrom}20, {project.gradientTo}30)"
			>
				{project.icon}
			</div>

			<div>
				<div class="flex flex-wrap items-center gap-3">
					<h1 class="text-3xl font-extrabold tracking-tight text-surface-900 sm:text-4xl lg:text-5xl dark:text-white">
						{project.name}
					</h1>
					<span
						class="rounded-full px-3 py-1 text-xs font-semibold text-white"
						style="background: linear-gradient(135deg, {project.gradientFrom}, {project.gradientTo})"
					>
						{statusLabels[project.status] ?? project.status}
					</span>
				</div>

				<p class="mt-2 text-xl font-medium" style="color: {project.gradientFrom}">
					{project.tagline}
				</p>

				<p class="mt-3 max-w-2xl text-surface-600 dark:text-surface-300">
					{project.description}
				</p>

				<div class="mt-4 flex flex-wrap gap-2">
					<span class="rounded-full bg-surface-100 px-3 py-1 text-xs font-medium text-surface-600 dark:bg-surface-800 dark:text-surface-400">
						{categoryLabels[project.category] ?? project.category}
					</span>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Features + Content -->
<section class="py-16 sm:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid gap-12 lg:grid-cols-3">
			<!-- Sidebar -->
			<div class="order-2 lg:order-1 lg:col-span-1">
				<div class="sticky top-24 space-y-8">
					<!-- Features -->
					{#if project.features?.length}
						<div class="rounded-2xl border border-surface-200 bg-white p-6 dark:border-surface-800 dark:bg-surface-900">
							<h2 class="text-sm font-semibold uppercase tracking-wider text-surface-400 dark:text-surface-500">
								Key Features
							</h2>
							<ul class="mt-4 space-y-3">
								{#each project.features as feature}
									<li class="flex items-start gap-2 text-sm text-surface-600 dark:text-surface-300">
										<svg class="mt-0.5 size-4 shrink-0" style="color: {project.gradientFrom}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
											<path d="M5 13l4 4L19 7" />
										</svg>
										{feature}
									</li>
								{/each}
							</ul>
						</div>
					{/if}

					<!-- Target User -->
					{#if project.targetUser}
						<div class="rounded-2xl border border-surface-200 bg-white p-6 dark:border-surface-800 dark:bg-surface-900">
							<h2 class="text-sm font-semibold uppercase tracking-wider text-surface-400 dark:text-surface-500">
								Built For
							</h2>
							<p class="mt-3 text-sm text-surface-600 dark:text-surface-300">
								{project.targetUser}
							</p>
						</div>
					{/if}
				</div>
			</div>

			<!-- Main content -->
			<div class="order-1 lg:order-2 lg:col-span-2">
				{#if project.body}
					<div class="prose prose-surface max-w-none dark:prose-invert prose-headings:font-bold prose-a:text-accent-600 dark:prose-a:text-accent-400">
						{@html project.body}
					</div>
				{/if}
			</div>
		</div>
	</div>
</section>
