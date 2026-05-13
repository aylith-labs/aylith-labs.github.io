import matter from 'gray-matter';
import { marked } from 'marked';
import fs from 'node:fs';
import path from 'node:path';
import type { Project } from '$lib/types/project';
import { projectMeta } from '$lib/data/projects';

const contentDir = path.resolve('src/content');

export function getProjects(): Project[] {
	const dir = path.join(contentDir, 'projects');
	if (!fs.existsSync(dir)) return [];

	return fs
		.readdirSync(dir)
		.filter((f: string) => f.endsWith('.md'))
		.map((filename: string) => {
			const raw = fs.readFileSync(path.join(dir, filename), 'utf-8');
			const { data, content } = matter(raw);
			const slug = filename.replace('.md', '');
			const html = content.trim() ? (marked.parse(content) as string) : undefined;
			const meta = projectMeta.find((p) => p.slug === slug);

			return {
				slug,
				iconPath: meta?.iconPath ?? 'M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
				gradientFrom: meta?.gradientFrom ?? '#6366f1',
				gradientTo: meta?.gradientTo ?? '#818cf8',
				featured: meta?.featured ?? false,
				...data,
				body: html
			} as Project;
		})
		.sort((a, b) => {
			const order = projectMeta.map((p) => p.slug);
			return order.indexOf(a.slug) - order.indexOf(b.slug);
		});
}

export function getProject(slug: string): Project | undefined {
	return getProjects().find((p) => p.slug === slug);
}
