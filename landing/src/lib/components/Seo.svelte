<script lang="ts">
	import { page } from '$app/state';

	type Props = {
		title: string;
		description: string;
		/** Open Graph type — "website" for most pages, "article" for project pages. */
		type?: 'website' | 'article';
		/** Absolute or root-relative image path used for social cards. */
		image?: string;
	};

	let { title, description, type = 'website', image = '/avatar-512.png' }: Props = $props();

	const siteName = 'Aylith';
	const origin = 'https://aylith.com';

	// page.url is available during prerender and on the client; fall back to the
	// origin so the canonical/og:url are always absolute.
	let canonical = $derived(`${origin}${page.url?.pathname ?? '/'}`);
	let imageUrl = $derived(image.startsWith('http') ? image : `${origin}${image}`);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonical} />

	<!-- Open Graph -->
	<meta property="og:type" content={type} />
	<meta property="og:site_name" content={siteName} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonical} />
	<meta property="og:image" content={imageUrl} />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={imageUrl} />
</svelte:head>
