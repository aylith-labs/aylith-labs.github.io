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
				icon: meta?.icon ?? '📦',
				gradientFrom: meta?.gradientFrom ?? '#6366f1',
				gradientTo: meta?.gradientTo ?? '#818cf8',
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
