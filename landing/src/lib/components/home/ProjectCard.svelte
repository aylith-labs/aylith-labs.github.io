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

	let glowX = $state(50);
	let glowY = $state(0);

	function handleMouseMove(e: MouseEvent) {
		const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
		glowX = ((e.clientX - rect.left) / rect.width) * 100;
		glowY = ((e.clientY - rect.top) / rect.height) * 100;
	}
</script>

<a
	href="/projects/{project.slug}"
	class="group relative flex flex-col overflow-hidden rounded-2xl border border-surface-200/60 bg-white transition-all duration-300 hover:border-surface-300 dark:border-surface-800/60 dark:bg-surface-900/50 dark:hover:border-surface-700"
	use:tilt={{ max: 4, scale: 1.01 }}
	onmousemove={handleMouseMove}
>
	<!-- Cursor glow -->
	<div
		class="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
		style="background: radial-gradient(400px circle at {glowX}% {glowY}%, {project.gradientFrom}12, transparent 60%)"
	></div>

	<div class="relative flex flex-1 flex-col p-6">
		<div class="mb-4 flex items-start justify-between">
			<svg class="size-6" style="color: {project.gradientFrom}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
				<path stroke-linecap="round" stroke-linejoin="round" d={project.iconPath} />
			</svg>
			<span class="text-xs capitalize text-surface-400 dark:text-warm-400">{project.status}</span>
		</div>

		<h3 class="text-base font-bold text-surface-900 dark:text-warm-50">{project.name}</h3>
		<p class="mt-1 text-sm font-medium" style="color: {project.gradientFrom}">{project.tagline}</p>
		<p class="mt-3 line-clamp-2 flex-1 text-sm leading-relaxed text-surface-500 dark:text-warm-300">
			{project.description}
		</p>

		<div class="mt-5 flex items-center justify-between">
			<span class="text-xs font-medium text-surface-400 dark:text-warm-400">
				{categoryLabels[project.category] ?? project.category}
			</span>
			<span class="text-sm text-surface-300 transition-transform duration-300 group-hover:translate-x-1 dark:text-surface-600">&rarr;</span>
		</div>
	</div>
</a>
