<script lang="ts">
	import { projectMeta } from '$lib/data/projects';
</script>

<footer class="mt-auto border-t border-surface-200/60 bg-surface-50 dark:border-surface-800/40 dark:bg-surface-900/30">
	<div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
		<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
			<div>
				<div class="flex items-center gap-2 text-surface-900 dark:text-warm-50">
					<svg viewBox="0 0 64 64" class="size-[20px] shrink-0" stroke="currentColor" stroke-width="5" stroke-linecap="square" fill="none" aria-hidden="true">
						<line x1="14" y1="14" x2="14" y2="50"/>
						<line x1="22" y1="14" x2="22" y2="50"/>
						<line x1="30" y1="14" x2="30" y2="50"/>
						<line x1="38" y1="14" x2="38" y2="50"/>
						<line x1="10" y1="50" x2="44" y2="14" class="stroke-accent-500"/>
					</svg>
					<span class="font-(family-name:--font-wordmark) text-base font-medium leading-none tracking-[-0.01em]">Aylith</span>
				</div>
				<p class="mt-3 max-w-xs text-sm text-surface-500 dark:text-warm-400">
					A lab that turns demand signals into shipped AI tools. Days, not quarters.
				</p>
			</div>

			<div>
				<h3 class="text-xs font-semibold uppercase tracking-wider text-surface-400 dark:text-warm-400">Products</h3>
				<ul class="mt-3 columns-2 gap-x-8 space-y-2">
					{#each projectMeta as project}
						<li>
							<a href="/projects/{project.slug}" class="text-sm text-surface-600 transition-colors hover:text-accent-600 dark:text-warm-300 dark:hover:text-accent-400">
								{project.name}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<div>
				<h3 class="text-xs font-semibold uppercase tracking-wider text-surface-400 dark:text-warm-400">Company</h3>
				<ul class="mt-3 space-y-2">
					<li>
						<a href="/" class="text-sm text-surface-600 transition-colors hover:text-accent-600 dark:text-warm-300 dark:hover:text-accent-400">
							About
						</a>
					</li>
					<li>
						<a href="https://github.com/aylith-labs" class="text-sm text-surface-600 transition-colors hover:text-accent-600 dark:text-warm-300 dark:hover:text-accent-400">
							GitHub
						</a>
					</li>
				</ul>
			</div>
		</div>

		<div class="mt-10 border-t border-surface-200/60 pt-6 dark:border-surface-800/40">
			<p class="text-xs text-surface-400 dark:text-warm-400">
				&copy; 2026 Aylith
			</p>
		</div>
	</div>
</footer>
