import { getProjects } from '$lib/server/markdown';

export const prerender = true;

const origin = 'https://aylith.com';

export function GET() {
	const staticPaths = ['/', '/about', '/projects', '/design'];
	const projectPaths = getProjects().map((project) => `/projects/${project.slug}`);
	const paths = [...staticPaths, ...projectPaths];

	const urls = paths
		.map((path) => `\t<url>\n\t\t<loc>${origin}${path}</loc>\n\t</url>`)
		.join('\n');

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
}
