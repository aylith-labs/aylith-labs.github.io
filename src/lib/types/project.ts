export type ProjectCategory =
	| 'ai-infrastructure'
	| 'developer-tools'
	| 'design-tools'
	| 'productivity'
	| 'data-tools'
	| 'wellness'
	| 'testing';

export type ProjectStatus = 'research' | 'planning' | 'building' | 'beta' | 'live';

export type Project = {
	slug: string;
	name: string;
	tagline: string;
	description: string;
	category: ProjectCategory;
	status: ProjectStatus;
	icon: string;
	gradientFrom: string;
	gradientTo: string;
	features: string[];
	targetUser: string;
	body?: string;
};
