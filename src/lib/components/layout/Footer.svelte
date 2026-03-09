<script lang="ts">
	import { projectMeta } from '$lib/data/projects';
</script>

<footer class="mt-auto border-t border-surface-200 bg-surface-50 dark:border-surface-800 dark:bg-surface-900/50">
	<div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
		<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
			<div class="sm:col-span-2 lg:col-span-1">
				<div class="flex items-center gap-2.5">
					<div class="flex size-7 items-center justify-center rounded-lg bg-gradient-to-br from-accent-500 to-accent-700 text-xs font-bold text-white">
						A
					</div>
					<span class="text-base font-bold tracking-tight text-surface-900 dark:text-white">Aylith</span>
				</div>
				<p class="mt-3 text-sm text-surface-500 dark:text-surface-400">
					An AI product studio building tools that solve real problems for developers and knowledge workers.
				</p>
			</div>

			<div>
				<h3 class="text-xs font-semibold uppercase tracking-wider text-surface-400 dark:text-surface-500">Products</h3>
				<ul class="mt-3 space-y-2">
					{#each projectMeta.slice(0, 5) as project}
						<li>
							<a href="/projects/{project.slug}" class="text-sm text-surface-600 transition-colors hover:text-accent-600 dark:text-surface-400 dark:hover:text-accent-400">
								{project.name}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<div>
				<h3 class="text-xs font-semibold uppercase tracking-wider text-surface-400 dark:text-surface-500" aria-hidden="true">&nbsp;</h3>
				<ul class="mt-3 space-y-2">
					{#each projectMeta.slice(5) as project}
						<li>
							<a href="/projects/{project.slug}" class="text-sm text-surface-600 transition-colors hover:text-accent-600 dark:text-surface-400 dark:hover:text-accent-400">
								{project.name}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<div>
				<h3 class="text-xs font-semibold uppercase tracking-wider text-surface-400 dark:text-surface-500">Company</h3>
				<ul class="mt-3 space-y-2">
					<li>
						<a href="/" class="text-sm text-surface-600 transition-colors hover:text-accent-600 dark:text-surface-400 dark:hover:text-accent-400">
							About
						</a>
					</li>
					<li>
						<a href="https://github.com/aylith" class="text-sm text-surface-600 transition-colors hover:text-accent-600 dark:text-surface-400 dark:hover:text-accent-400">
							GitHub
						</a>
					</li>
				</ul>
			</div>
		</div>

		<div class="mt-10 border-t border-surface-200 pt-6 dark:border-surface-800">
			<p class="text-center text-xs text-surface-400 dark:text-surface-500">
				&copy; 2026 Aylith. Building the future of AI tooling.
			</p>
		</div>
	</div>
</footer>
