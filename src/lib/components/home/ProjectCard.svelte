<script lang="ts">
	import type { Project } from '$lib/types/project';
	import { tilt } from '$lib/actions/tilt';

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

	let glowX = $state(50);
	let glowY = $state(0);
	let isHovering = $state(false);

	function handleMouseMove(e: MouseEvent) {
		const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
		glowX = ((e.clientX - rect.left) / rect.width) * 100;
		glowY = ((e.clientY - rect.top) / rect.height) * 100;
	}
</script>

<a
	href="/projects/{project.slug}"
	class="group relative flex flex-col overflow-hidden rounded-2xl border border-surface-200/60 bg-white dark:border-surface-800/60 dark:bg-surface-900/80"
	use:tilt={{ max: 4, scale: 1.01 }}
	onmouseenter={() => (isHovering = true)}
	onmouseleave={() => (isHovering = false)}
	onmousemove={handleMouseMove}
>
	<!-- Cursor-following glow -->
	<div
		class="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
		style="background: radial-gradient(400px circle at {glowX}% {glowY}%, {project.gradientFrom}15, transparent 60%)"
	></div>

	<!-- Top gradient bar -->
	<div
		class="h-1 w-full transition-all duration-500 group-hover:h-1.5"
		style="background: linear-gradient(135deg, {project.gradientFrom}, {project.gradientTo})"
	></div>

	<div class="relative flex flex-1 flex-col p-6">
		<div class="mb-4 flex items-start justify-between">
			<div
				class="flex size-11 items-center justify-center rounded-xl text-xl transition-transform duration-300 group-hover:scale-110"
				style="background: linear-gradient(135deg, {project.gradientFrom}12, {project.gradientTo}20)"
			>
				{project.icon}
			</div>
			<div class="flex items-center gap-1.5">
				<span class="size-1.5 rounded-full {statusColors[project.status] ?? 'bg-surface-400'}"></span>
				<span class="text-xs capitalize text-surface-400 dark:text-surface-500">{project.status}</span>
			</div>
		</div>

		<h3 class="text-base font-bold text-surface-900 dark:text-white">
			{project.name}
		</h3>
		<p class="mt-1 text-sm font-medium" style="color: {project.gradientFrom}">
			{project.tagline}
		</p>
		<p class="mt-3 line-clamp-2 flex-1 text-sm leading-relaxed text-surface-500 dark:text-surface-400">
			{project.description}
		</p>

		<div class="mt-5 flex items-center justify-between">
			<span class="rounded-full bg-surface-100/80 px-2.5 py-0.5 text-xs font-medium text-surface-500 dark:bg-surface-800/80 dark:text-surface-400">
				{categoryLabels[project.category] ?? project.category}
			</span>
			<span class="flex items-center gap-1 text-sm text-surface-400 dark:text-surface-500">
				<span class="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
			</span>
		</div>
	</div>
</a>
