<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
</script>

<Seo
	title="About — Aylith"
	description="Aylith is patient about the right things. We watch what people keep asking for, find the pattern, and ship the tool in days, not quarters."
/>

<section class="mx-auto max-w-3xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
	<p class="animate-fade-in-up text-xs font-medium uppercase tracking-[0.14em] text-accent-600 dark:text-accent-400">
		About
	</p>

	<h1
		class="animate-fade-in-up mt-4 text-4xl font-bold leading-[1.1] tracking-tight text-surface-900 sm:text-5xl dark:text-warm-50"
		style="animation-delay: 0.05s"
	>
		We listen first,<br />
		then we move fast.
	</h1>

	<div
		class="animate-fade-in-up mt-8 space-y-5 text-lg leading-relaxed text-surface-600 dark:text-warm-300"
		style="animation-delay: 0.1s"
	>
		<p>
			Aylith is patient about the right things. We watch what people reach for, where they
			improvise, what they keep asking for and not getting. The signal is rarely loud. It just
			repeats.
		</p>
		<p>
			When the pattern is clear, the patience ends. We build the tool and ship it in days, not
			quarters. Each product grew from a signal we were quiet enough to hear.
		</p>
		<p>The portfolio is what listening turned into.</p>
	</div>

	<div class="animate-fade-in-up mt-10 flex flex-wrap items-center gap-4" style="animation-delay: 0.15s">
		<a
			href="/projects"
			class="btn-press inline-flex items-center gap-2 rounded-xl bg-accent-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent-600/20 hover:bg-accent-500 dark:bg-accent-500 dark:shadow-accent-500/10 dark:hover:bg-accent-400"
		>
			See what shipped
			<svg class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
				<path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
			</svg>
		</a>
		<a
			href="/#method"
			class="btn-press inline-flex items-center gap-2 rounded-xl border border-surface-200 bg-white/80 px-6 py-3.5 text-sm font-semibold text-surface-700 backdrop-blur-sm hover:border-surface-300 dark:border-surface-700 dark:bg-surface-800/60 dark:text-warm-200 dark:hover:border-surface-600"
		>
			Read the method
		</a>
	</div>
</section>
