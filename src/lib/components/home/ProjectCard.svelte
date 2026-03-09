<script lang="ts">
	import type { Project } from '$lib/types/project';

	let { project }: { project: Project } = $props();

	const categoryLabels: Record<string, string> = {
		'ai-infrastructure': 'AI Infrastructure',
		'developer-tools': 'Developer Tools',
		'design-tools': 'Design Tools',
		productivity: 'Productivity',
		'data-tools': 'Data & Analytics',
		wellness: 'Wellness',
		testing: 'Testing'
	};

	const statusColors: Record<string, string> = {
		research: 'bg-amber-400',
		planning: 'bg-blue-400',
		building: 'bg-violet-400',
		beta: 'bg-emerald-400',
		live: 'bg-green-500'
	};
</script>

<a
	href="/projects/{project.slug}"
	class="group relative flex flex-col overflow-hidden rounded-2xl border border-surface-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-surface-900/5 dark:border-surface-800 dark:bg-surface-900 dark:hover:shadow-surface-900/40"
>
	<div
		class="h-1.5 w-full"
		style="background: linear-gradient(135deg, {project.gradientFrom}, {project.gradientTo})"
	></div>

	<div class="flex flex-1 flex-col p-6">
		<div class="mb-4 flex items-start justify-between">
			<div
				class="flex size-12 items-center justify-center rounded-xl text-2xl"
				style="background: linear-gradient(135deg, {project.gradientFrom}15, {project.gradientTo}25)"
			>
				{project.icon}
			</div>
			<div class="flex items-center gap-1.5">
				<span class="size-2 rounded-full {statusColors[project.status] ?? 'bg-surface-400'}"></span>
				<span class="text-xs capitalize text-surface-400 dark:text-surface-500">{project.status}</span>
			</div>
		</div>

		<h3 class="text-lg font-bold text-surface-900 dark:text-white">
			{project.name}
		</h3>
		<p class="mt-1 text-sm font-medium" style="color: {project.gradientFrom}">
			{project.tagline}
		</p>
		<p class="mt-3 line-clamp-2 flex-1 text-sm text-surface-500 dark:text-surface-400">
			{project.description}
		</p>

		<div class="mt-4 flex items-center justify-between">
			<span class="rounded-full bg-surface-100 px-2.5 py-0.5 text-xs font-medium text-surface-600 dark:bg-surface-800 dark:text-surface-400">
				{categoryLabels[project.category] ?? project.category}
			</span>
			<span class="text-sm text-surface-400 transition-transform group-hover:translate-x-1 dark:text-surface-500">
				&rarr;
			</span>
		</div>
	</div>
</a>
